import { createFileRoute, useNavigate, Link, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  accessLabel,
  fetchFormFields,
  fetchMyProfile,
  fetchPlans,
  STATUS_LABEL,
  type FormField,
  type Plan,
  type Profile,
} from "@/lib/membership";
import logoAsset from "@/assets/roadmap-logo.png.asset.json";

export const Route = createFileRoute("/account")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "حسابي وحالة الاشتراك | منصة صناعة المحتوى" },
      {
        name: "description",
        content: "تابع حالة طلبك، مدة صلاحيتك، وحدّث بيانات ملفك على منصة صناعة المحتوى.",
      },
      { property: "og:title", content: "حسابي وحالة الاشتراك" },
      { property: "og:description", content: "حالة الطلب، الخطة، ومدة الصلاحية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AccountPage() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fields, setFields] = useState<FormField[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    (async () => {
      const [p, f, pl] = await Promise.all([fetchMyProfile(user.id), fetchFormFields(), fetchPlans()]);
      setProfile(p);
      setFields(f);
      setPlans(pl);
      setAnswers((p?.answers as Record<string, string>) ?? {});
      const { data } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      setIsAdmin(Boolean(data));
    })();
  }, [user.id]);

  async function save() {
    setSaving(true);
    setNote("");
    const { error } = await supabase
      .from("profiles")
      .update({
        answers,
        full_name: answers["full_name"] ?? profile?.full_name ?? null,
        phone: answers["phone"] ?? profile?.phone ?? null,
        submitted_at: new Date().toISOString(),
      })
      .eq("id", user.id);
    setSaving(false);
    setNote(error ? "تعذّر الحفظ" : "تم حفظ بياناتك وإرسالها للمراجعة");
    if (!error) setProfile(await fetchMyProfile(user.id));
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const plan = plans.find((p) => p.id === profile?.plan_id);
  const active =
    profile?.status === "approved" &&
    (profile.is_lifetime || !profile.access_expires_at || new Date(profile.access_expires_at) > new Date());

  return (
    <div className="auth-wrap">
      <div className="auth-card panel wide">
        <div className="auth-head">
          <img src={logoAsset.url} alt="" />
          <h1>حسابي</h1>
          <p className="mono">{user.email}</p>
        </div>

        {profile && (
          <div className="acct-grid">
            <div className="acct-cell">
              <span className="mono">حالة الطلب</span>
              <b className={`badge st-${profile.status}`}>{STATUS_LABEL[profile.status]}</b>
            </div>
            <div className="acct-cell">
              <span className="mono">الخطة</span>
              <b>{plan?.name ?? "—"}</b>
            </div>
            <div className="acct-cell">
              <span className="mono">الصلاحية</span>
              <b>{accessLabel(profile)}</b>
            </div>
          </div>
        )}

        {profile?.admin_note && <p className="auth-msg">ملاحظة الإدارة: {profile.admin_note}</p>}

        {active ? (
          <div className="acct-actions">
            <Link to="/strategy" className="btn">
              ادخل إلى الدروس
            </Link>
            {isAdmin && (
              <Link to="/admin" className="btn ghost">
                لوحة التحكم
              </Link>
            )}
          </div>
        ) : (
          <p className="auth-msg">
            {profile?.status === "banned"
              ? "تم حظر هذا الحساب. تواصل مع الإدارة."
              : profile?.status === "rejected"
                ? "تم رفض طلبك. يمكنك تحديث بياناتك وإعادة الإرسال."
                : "طلبك قيد المراجعة. ستُفتح لك الدروس فور المصادقة عليه."}
          </p>
        )}

        <h2 className="acct-sub">بياناتك</h2>
        <div className="auth-form">
          {fields.map((f) => (
            <label key={f.id}>
              <span>{f.label}</span>
              {f.field_type === "textarea" ? (
                <textarea
                  rows={3}
                  value={answers[f.field_key] ?? ""}
                  onChange={(e) => setAnswers({ ...answers, [f.field_key]: e.target.value })}
                />
              ) : f.field_type === "select" ? (
                <select
                  value={answers[f.field_key] ?? ""}
                  onChange={(e) => setAnswers({ ...answers, [f.field_key]: e.target.value })}
                >
                  <option value="">اختر…</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  value={answers[f.field_key] ?? ""}
                  onChange={(e) => setAnswers({ ...answers, [f.field_key]: e.target.value })}
                />
              )}
            </label>
          ))}
          {note && <p className="auth-msg ok">{note}</p>}
          <div className="acct-actions">
            <button className="btn" onClick={save} disabled={saving}>
              {saving ? "جارٍ الحفظ…" : "حفظ البيانات"}
            </button>
            <button className="btn ghost" onClick={signOut}>
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
