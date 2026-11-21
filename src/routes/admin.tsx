import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { fetchProgress, progressCount, LESSON_IDS, type ProgressRow } from "@/lib/progress";
import { planImage, priceDescription } from "@/lib/plan-media";
import { accessGrant, ownerCanAdminister, OWNER_ID } from "@/lib/membership-rules";
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
  validateSearch: (search: Record<string, unknown>): {member?:string} => typeof search["member"] === "string" ? {member:search["member"]} : {},
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: data.user.id,
      _role: "admin",
    });
    if (!ownerCanAdminister(data.user.id, Boolean(isAdmin))) throw redirect({ to: "/account" });
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
          <span className="mono">ELEVORA AGENCY · ADMIN</span>
          <h1>لوحة التحكم</h1>
        </div>
        <Link to="/library" className="btn ghost">المكتبة التعليمية</Link>
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
          <Button key={k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>
            {label}
          </Button>
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
  const { member } = Route.useSearch();
  const [progress,setProgress] = useState<ProgressRow[]>([]);
  const [error,setError] = useState("");
  const [rows, setRows] = useState<Profile[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filter, setFilter] = useState<MemberStatus | "all">("all");
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [{ data, error: loadError }, pl, pr] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      fetchPlans(false),
      fetchProgress(),
    ]);
    if (loadError) throw loadError;
    setProgress(pr);
    setRows((data ?? []) as unknown as Profile[]);
    setPlans(pl);
  }, []);

  useEffect(() => {
    load().catch(() => setError("تعذّر تحميل الأعضاء، أعد المحاولة."));
  }, [load]);

  async function patch(id: string, values: Partial<Profile>) {
    if (id === OWNER_ID && values.status && values.status !== "approved") { setError("لا يمكن إيقاف حساب مالك المنصة."); return; }
    setBusy(id); setError("");
    try {
      const {error} = await supabase.from("profiles").update(values).eq("id", id);
      if (error) throw error;
      await load();
    } catch { setError("تعذّر حفظ التغيير. لم يتم تأكيد العملية، حاول مجددًا."); }
    finally { setBusy(null); }
  }
  function approve(p: Profile, planId: string | null, days: number | null, lifetime: boolean) {
    patch(p.id, {status:"approved",plan_id:planId,...accessGrant(days,lifetime)});
  }

  const visible = rows.filter((r) => {
    if (member && r.id !== member) return false;
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
    <section className="admin-panel">
      {error && <p role="alert" className="auth-msg err">{error}</p>}
      {member && <Link to="/admin" search={{}} className="linklike">← جميع الأعضاء</Link>}
      <div className="admin-stats">
        {(["pending", "approved", "rejected", "banned"] as MemberStatus[]).map((s) => (
          <Button
            key={s}
            className={`admin-stat ${filter === s ? "on" : ""}`}
            onClick={() => setFilter(filter === s ? "all" : s)}
          >
            <b>{counts(s)}</b>
            <span>{STATUS_LABEL[s]}</span>
          </Button>
        ))}
        <Button
          className={`admin-stat ${filter === "all" ? "on" : ""}`}
          onClick={() => setFilter("all")}
        >
          <b>{rows.length}</b>
          <span>الكل</span>
        </Button>
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
              <th>تقدم الدراسة</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((p) => (
              <tr key={p.id}>
                <td>
                  <Link to="/admin" search={{member:p.id}} className="member-link"><b>{p.full_name || "عضو"}</b> · ملف العضو ↗</Link>
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
                  <Button className="linklike" onClick={() => setOpen(open === p.id ? null : p.id)}>
                    {open === p.id ? "إخفاء الإجابات" : "عرض الإجابات"}
                  </Button>
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
                    value={p.plan_id ?? p.requested_plan_id ?? ""}
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
                <td><progress max={LESSON_IDS.length} value={progressCount(progress,p.id)} /><small>{progressCount(progress,p.id)} / {LESSON_IDS.length} درس وصفحة</small></td>
                <td>
                  <div className="admin-actions">
                    <Button
                      className="mini ok"
                      disabled={busy === p.id}
                      onClick={() => {
                        const chosen = p.plan_id ?? p.requested_plan_id;
                        const pl = plans.find((x) => x.id === chosen);
                        if (!pl) { setError("اختر خطة قبل المصادقة."); return; }
                        approve(p, pl.id, pl.duration_days, pl.duration_days === null);
                      }}
                    >
                      مصادقة حسب الخطة
                    </Button>
                    <Button className="mini" onClick={() => approve(p, p.plan_id, 3, false)}>
                      تجربة 3 أيام
                    </Button>
                    <Button className="mini" onClick={() => approve(p, p.plan_id, 30, false)}>
                      شهر
                    </Button>
                    <Button className="mini" onClick={() => approve(p, p.plan_id, null, true)}>
                      مدى الحياة
                    </Button>
                    <Button className="mini warn" onClick={() => patch(p.id, { status: "rejected" })}>
                      رفض
                    </Button>
                    <Button className="mini danger" onClick={() => patch(p.id, { status: "banned" })}>
                      حظر
                    </Button>
                    <Button className="mini" onClick={() => patch(p.id, { status: "pending" })}>
                      إرجاع للمراجعة
                    </Button>
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
                <td colSpan={6}>لا يوجد أعضاء مطابقون.</td>
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
  image_url: "",
  price_description: "",
};

function PlansTab() {
  const [error,setError] = useState("");
  const [busy,setBusy] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [draft, setDraft] = useState({ ...EMPTY_PLAN });

  const load = useCallback(async () => setPlans(await fetchPlans(false)), []);
  useEffect(() => {
    load().catch(()=>setError("تعذّر تحميل البيانات"));
  }, [load]);

  async function update(id: string, values: Partial<Plan>) {
    setError("");
    const {error} = await supabase.from("plans").update(values).eq("id", id);
    if (error) {setError("تعذّر حفظ الخطة");return;}
    await load();
  }

  async function create() {
    if (!draft.name.trim()) return;
    setBusy(true);
    const {error} = await supabase.from("plans").insert({
      ...draft,
      description: draft.description || null,
      duration_days: draft.duration_days,
    });
    setBusy(false);
    if(error) {setError("تعذّر إضافة الخطة");return;}
    setDraft({ ...EMPTY_PLAN });
    await load();
  }

  return (
    <section className="admin-panel">
      {error && <p role="alert" className="auth-msg err">{error}</p>}
      <div className="table-wrap">
        <table className="tech">
          <thead>
            <tr>
              <th>صورة الخطة ووصف السعر</th>
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
                <td><img className="plan-thumb" src={planImage(p)} alt={p.name} /><input aria-label={`صورة ${p.name}`} type="url" placeholder="رابط صورة الخطة" defaultValue={p.image_url ?? ""} onBlur={e=>update(p.id,{image_url:e.target.value || null})} /><textarea aria-label={`وصف سعر ${p.name}`} defaultValue={priceDescription(p)} onBlur={e=>update(p.id,{price_description:e.target.value || null})}/></td>
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
                  <Button
                    className="mini danger"
                    onClick={async () => {
                      if (!window.confirm("حذف هذه الخطة؟")) return;
                      const {error} = await supabase.from("plans").delete().eq("id", p.id);
                      if(error) setError("تعذّر حذف الخطة"); else await load();
                    }}
                  >
                    حذف
                  </Button>
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
        <input type="url" placeholder="رابط صورة الخطة" value={draft.image_url} onChange={e=>setDraft({...draft,image_url:e.target.value})} />
        <input placeholder="وصف السعر وشروط الاشتراك" value={draft.price_description} onChange={e=>setDraft({...draft,price_description:e.target.value})} />
        <Button className="btn" disabled={busy} onClick={create}>
          إضافة
        </Button>
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
  const [error,setError] = useState("");
  const [fields, setFields] = useState<FormField[]>([]);
  const [draft, setDraft] = useState({ ...EMPTY_FIELD });

  const load = useCallback(async () => setFields(await fetchFormFields(false)), []);
  useEffect(() => {
    load().catch(()=>setError("تعذّر تحميل البيانات"));
  }, [load]);

  async function update(id: string, values: Partial<FormField>) {
    const {error} = await supabase.from("form_fields").update(values).eq("id", id);
    if(error) {setError("تعذّر حفظ الخانة");return;}
    await load();
  }

  async function create() {
    if (!draft.field_key.trim() || !draft.label.trim()) return;
    const {error} = await supabase.from("form_fields").insert({
      field_key: draft.field_key.trim(),
      label: draft.label.trim(),
      field_type: draft.field_type,
      placeholder: draft.placeholder || null,
      options: draft.options ? draft.options.split(",").map((s) => s.trim()) : [],
      is_required: draft.is_required,
      is_active: draft.is_active,
      sort_order: draft.sort_order,
    });
    if(error) {setError("تعذّر إضافة الخانة؛ تأكد أن المفتاح غير مكرر.");return;}
    setDraft({ ...EMPTY_FIELD });
    await load();
  }

  return (
    <section className="admin-panel">
      {error && <p role="alert" className="auth-msg err">{error}</p>}
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
                  <Button
                    className="mini danger"
                    onClick={async () => {
                      if(!window.confirm("حذف هذه الخانة؟")) return;
                      const {error} = await supabase.from("form_fields").delete().eq("id", f.id);
                      if(error) setError("تعذّر حذف الخانة"); else await load();
                    }}
                  >
                    حذف
                  </Button>
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
        <Button className="btn" onClick={create}>
          إضافة
        </Button>
      </div>
    </section>
  );
}
