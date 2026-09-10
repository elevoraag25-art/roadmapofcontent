import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  accessLabel,
  fetchFormFields,
  fetchPlans,
  STATUS_LABEL,
  type FormField,
  type MemberStatus,
  type Plan,
  type Profile,
} from "@/lib/membership";

export const Route = createFileRoute("/admin")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: data.user.id,
      _role: "admin",
    });
    if (!isAdmin) throw redirect({ to: "/account" });
    return { user: data.user };
  },
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "لوحة التحكم | منصة صناعة المحتوى" },
      {
        name: "description",
        content:
          "إدارة الأعضاء والصلاحيات والأسعار وخانات فورم التسجيل في منصة صناعة المحتوى.",
      },
      { property: "og:title", content: "لوحة التحكم | منصة صناعة المحتوى" },
      { property: "og:description", content: "مصادقة الأعضاء، الأسعار، وخانات الفورم." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Tab = "members" | "plans" | "fields";

function AdminPage() {
  const [tab, setTab] = useState<Tab>("members");

  return (
    <div className="admin-wrap">
      <header className="admin-head">
        <div>
          <span className="mono">ADMIN CONSOLE · CONTENT-TO-CASH</span>
          <h1>لوحة التحكم</h1>
        </div>
        <Link to="/account" className="btn ghost">
          حسابي
        </Link>
      </header>

      <div className="admin-tabs">
        {(
          [
            ["members", "الأعضاء"],
            ["plans", "الأسعار والخطط"],
            ["fields", "خانات الفورم"],
          ] as [Tab, string][]
        ).map(([k, label]) => (
          <button key={k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>
            {label}
          </button>
        ))}
      </div>

      {tab === "members" && <MembersTab />}
      {tab === "plans" && <PlansTab />}
      {tab === "fields" && <FieldsTab />}
    </div>
  );
}

/* ---------------- Members ---------------- */

function MembersTab() {
  const [rows, setRows] = useState<Profile[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filter, setFilter] = useState<MemberStatus | "all">("all");
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [{ data }, pl] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      fetchPlans(false),
    ]);
    setRows((data ?? []) as unknown as Profile[]);
    setPlans(pl);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function patch(id: string, values: Record<string, unknown>) {
    setBusy(id);
    await supabase
      .from("profiles")
      .update(values as never)
      .eq("id", id);
    await load();
    setBusy(null);
  }

  function approve(p: Profile, planId: string | null, days: number | null, lifetime: boolean) {
    patch(p.id, {
      status: "approved",
      plan_id: planId,
      is_lifetime: lifetime,
      access_expires_at:
        lifetime || days === null
          ? null
          : new Date(Date.now() + days * 86400000).toISOString(),
      approved_at: new Date().toISOString(),
    });
  }

  const visible = rows.filter((r) => {
    if (filter !== "all" && r.status !== filter) return false;
    const term = q.trim().toLowerCase();
    if (!term) return true;
    return (
      (r.email ?? "").toLowerCase().includes(term) ||
      (r.full_name ?? "").toLowerCase().includes(term) ||
      (r.phone ?? "").includes(term)
    );
  });

  const counts = (s: MemberStatus) => rows.filter((r) => r.status === s).length;

  return (
    <section className="panel admin-panel">
      <div className="admin-stats">
        {(["pending", "approved", "rejected", "banned"] as MemberStatus[]).map((s) => (
          <button
            key={s}
            className={`admin-stat ${filter === s ? "on" : ""}`}
            onClick={() => setFilter(filter === s ? "all" : s)}
          >
            <b>{counts(s)}</b>
            <span>{STATUS_LABEL[s]}</span>
          </button>
        ))}
        <button
          className={`admin-stat ${filter === "all" ? "on" : ""}`}
          onClick={() => setFilter("all")}
        >
          <b>{rows.length}</b>
          <span>الكل</span>
        </button>
      </div>

      <input
        className="admin-search"
        placeholder="بحث بالاسم أو البريد أو الهاتف…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="table-wrap">
        <table className="tech">
          <thead>
            <tr>
              <th>العضو</th>
              <th>الحالة</th>
              <th>الخطة</th>
              <th>الصلاحية</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((p) => (
              <tr key={p.id}>
                <td>
                  <b>{p.full_name || "—"}</b>
                  <br />
                  <span className="mono" dir="ltr">
                    {p.email}
                  </span>
                  {p.phone && (
                    <>
                      <br />
                      <span className="mono" dir="ltr">
                        {p.phone}
                      </span>
                    </>
                  )}
                  <br />
                  <button className="linklike" onClick={() => setOpen(open === p.id ? null : p.id)}>
                    {open === p.id ? "إخفاء الإجابات" : "عرض الإجابات"}
                  </button>
                  {open === p.id && (
                    <ul className="answers">
                      {Object.entries(p.answers ?? {}).map(([k, v]) => (
                        <li key={k}>
                          <span className="mono">{k}</span>: {String(v)}
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
                <td>
                  <span className={`badge st-${p.status}`}>{STATUS_LABEL[p.status]}</span>
                </td>
                <td>
                  <select
                    value={p.plan_id ?? ""}
                    onChange={(e) => patch(p.id, { plan_id: e.target.value || null })}
                  >
                    <option value="">—</option>
                    {plans.map((pl) => (
                      <option key={pl.id} value={pl.id}>
                        {pl.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{accessLabel(p)}</td>
                <td>
                  <div className="admin-actions">
                    <button
                      className="mini ok"
                      disabled={busy === p.id}
                      onClick={() => {
                        const pl = plans.find((x) => x.id === p.plan_id);
                        approve(p, p.plan_id, pl?.duration_days ?? 30, false);
                      }}
                    >
                      مصادقة حسب الخطة
                    </button>
                    <button className="mini" onClick={() => approve(p, p.plan_id, 3, false)}>
                      تجربة 3 أيام
                    </button>
                    <button className="mini" onClick={() => approve(p, p.plan_id, 30, false)}>
                      شهر
                    </button>
                    <button className="mini" onClick={() => approve(p, p.plan_id, null, true)}>
                      مدى الحياة
                    </button>
                    <button className="mini warn" onClick={() => patch(p.id, { status: "rejected" })}>
                      رفض
                    </button>
                    <button className="mini danger" onClick={() => patch(p.id, { status: "banned" })}>
                      حظر
                    </button>
                    <button className="mini" onClick={() => patch(p.id, { status: "pending" })}>
                      إرجاع للمراجعة
                    </button>
                    <input
                      type="date"
                      onChange={(e) =>
                        patch(p.id, {
                          is_lifetime: false,
                          access_expires_at: e.target.value
                            ? new Date(e.target.value).toISOString()
                            : null,
                        })
                      }
                    />
                    <input
                      className="note"
                      placeholder="ملاحظة للعضو"
                      defaultValue={p.admin_note ?? ""}
                      onBlur={(e) =>
                        e.target.value !== (p.admin_note ?? "") &&
                        patch(p.id, { admin_note: e.target.value || null })
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={5}>لا يوجد أعضاء مطابقون.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ---------------- Plans ---------------- */

const EMPTY_PLAN = {
  name: "",
  description: "",
  price: 0,
  currency: "USD",
  duration_days: 30 as number | null,
  is_active: true,
  is_trial: false,
  sort_order: 0,
};

function PlansTab() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [draft, setDraft] = useState({ ...EMPTY_PLAN });

  const load = useCallback(async () => setPlans(await fetchPlans(false)), []);
  useEffect(() => {
    load();
  }, [load]);

  async function update(id: string, values: Partial<Plan>) {
    await supabase.from("plans").update(values).eq("id", id);
    load();
  }

  async function create() {
    if (!draft.name.trim()) return;
    await supabase.from("plans").insert({
      ...draft,
      description: draft.description || null,
      duration_days: draft.duration_days,
    });
    setDraft({ ...EMPTY_PLAN });
    load();
  }

  return (
    <section className="panel admin-panel">
      <div className="table-wrap">
        <table className="tech">
          <thead>
            <tr>
              <th>الاسم</th>
              <th>السعر</th>
              <th>العملة</th>
              <th>المدة (يوم)</th>
              <th>تجربة</th>
              <th>مفعّلة</th>
              <th>ترتيب</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => (
              <tr key={p.id}>
                <td>
                  <input
                    defaultValue={p.name}
                    onBlur={(e) => e.target.value !== p.name && update(p.id, { name: e.target.value })}
                  />
                  <input
                    className="note"
                    placeholder="وصف"
                    defaultValue={p.description ?? ""}
                    onBlur={(e) =>
                      e.target.value !== (p.description ?? "") &&
                      update(p.id, { description: e.target.value || null })
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={p.price}
                    onBlur={(e) => update(p.id, { price: Number(e.target.value) })}
                  />
                </td>
                <td>
                  <input
                    defaultValue={p.currency}
                    onBlur={(e) => update(p.id, { currency: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="مدى الحياة"
                    defaultValue={p.duration_days ?? ""}
                    onBlur={(e) =>
                      update(p.id, { duration_days: e.target.value ? Number(e.target.value) : null })
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={p.is_trial}
                    onChange={(e) => update(p.id, { is_trial: e.target.checked })}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={p.is_active}
                    onChange={(e) => update(p.id, { is_active: e.target.checked })}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={p.sort_order}
                    onBlur={(e) => update(p.id, { sort_order: Number(e.target.value) })}
                  />
                </td>
                <td>
                  <button
                    className="mini danger"
                    onClick={async () => {
                      await supabase.from("plans").delete().eq("id", p.id);
                      load();
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="admin-sub">إضافة خطة جديدة</h3>
      <div className="admin-newgrid">
        <input
          placeholder="اسم الخطة"
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
        />
        <input
          placeholder="وصف"
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="السعر"
          value={draft.price}
          onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })}
        />
        <input
          placeholder="العملة"
          value={draft.currency}
          onChange={(e) => setDraft({ ...draft, currency: e.target.value })}
        />
        <input
          type="number"
          placeholder="المدة بالأيام (فارغ = مدى الحياة)"
          value={draft.duration_days ?? ""}
          onChange={(e) =>
            setDraft({ ...draft, duration_days: e.target.value ? Number(e.target.value) : null })
          }
        />
        <button className="btn" onClick={create}>
          إضافة
        </button>
      </div>
    </section>
  );
}

/* ---------------- Form fields ---------------- */

const EMPTY_FIELD = {
  field_key: "",
  label: "",
  field_type: "text",
  placeholder: "",
  options: "",
  is_required: false,
  is_active: true,
  sort_order: 0,
};

function FieldsTab() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [draft, setDraft] = useState({ ...EMPTY_FIELD });

  const load = useCallback(async () => setFields(await fetchFormFields(false)), []);
  useEffect(() => {
    load();
  }, [load]);

  async function update(id: string, values: Partial<FormField>) {
    await supabase.from("form_fields").update(values).eq("id", id);
    load();
  }

  async function create() {
    if (!draft.field_key.trim() || !draft.label.trim()) return;
    await supabase.from("form_fields").insert({
      field_key: draft.field_key.trim(),
      label: draft.label.trim(),
      field_type: draft.field_type,
      placeholder: draft.placeholder || null,
      options: draft.options ? draft.options.split(",").map((s) => s.trim()) : [],
      is_required: draft.is_required,
      is_active: draft.is_active,
      sort_order: draft.sort_order,
    });
    setDraft({ ...EMPTY_FIELD });
    load();
  }

  return (
    <section className="panel admin-panel">
      <div className="table-wrap">
        <table className="tech">
          <thead>
            <tr>
              <th>المفتاح</th>
              <th>العنوان</th>
              <th>النوع</th>
              <th>الخيارات (مفصولة بفاصلة)</th>
              <th>مطلوب</th>
              <th>مفعّل</th>
              <th>ترتيب</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fields.map((f) => (
              <tr key={f.id}>
                <td className="mono" dir="ltr">
                  {f.field_key}
                </td>
                <td>
                  <input
                    defaultValue={f.label}
                    onBlur={(e) => e.target.value !== f.label && update(f.id, { label: e.target.value })}
                  />
                  <input
                    className="note"
                    placeholder="نص إرشادي"
                    defaultValue={f.placeholder ?? ""}
                    onBlur={(e) =>
                      e.target.value !== (f.placeholder ?? "") &&
                      update(f.id, { placeholder: e.target.value || null })
                    }
                  />
                </td>
                <td>
                  <select
                    value={f.field_type}
                    onChange={(e) => update(f.id, { field_type: e.target.value })}
                  >
                    {["text", "email", "number", "textarea", "select"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    defaultValue={f.options.join(", ")}
                    onBlur={(e) =>
                      update(f.id, {
                        options: e.target.value
                          ? e.target.value.split(",").map((s) => s.trim())
                          : [],
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={f.is_required}
                    onChange={(e) => update(f.id, { is_required: e.target.checked })}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={f.is_active}
                    onChange={(e) => update(f.id, { is_active: e.target.checked })}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={f.sort_order}
                    onBlur={(e) => update(f.id, { sort_order: Number(e.target.value) })}
                  />
                </td>
                <td>
                  <button
                    className="mini danger"
                    onClick={async () => {
                      await supabase.from("form_fields").delete().eq("id", f.id);
                      load();
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="admin-sub">إضافة خانة جديدة</h3>
      <div className="admin-newgrid">
        <input
          placeholder="المفتاح (بالإنجليزية)"
          dir="ltr"
          value={draft.field_key}
          onChange={(e) => setDraft({ ...draft, field_key: e.target.value })}
        />
        <input
          placeholder="العنوان"
          value={draft.label}
          onChange={(e) => setDraft({ ...draft, label: e.target.value })}
        />
        <select
          value={draft.field_type}
          onChange={(e) => setDraft({ ...draft, field_type: e.target.value })}
        >
          {["text", "email", "number", "textarea", "select"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <input
          placeholder="الخيارات (مفصولة بفاصلة)"
          value={draft.options}
          onChange={(e) => setDraft({ ...draft, options: e.target.value })}
        />
        <label className="admin-chk">
          <input
            type="checkbox"
            checked={draft.is_required}
            onChange={(e) => setDraft({ ...draft, is_required: e.target.checked })}
          />
          مطلوب
        </label>
        <button className="btn" onClick={create}>
          إضافة
        </button>
      </div>
    </section>
  );
}
