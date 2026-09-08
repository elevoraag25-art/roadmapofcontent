import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { fetchFormFields, fetchPlans, type FormField, type Plan } from "@/lib/membership";
import logoAsset from "@/assets/roadmap-logo.png.asset.json";

export const Route = createFileRoute("/auth")({
  ssr: false,
  component: AuthPage,
  head: () => ({
    meta: [
      { title: "الدخول والتسجيل | منصة صناعة المحتوى" },
      {
        name: "description",
        content:
          "سجّل الدخول أو أنشئ حسابك للوصول إلى 34 درساً في صناعة المحتوى من الفكرة إلى الكاش. طلبك يُراجع يدوياً ثم تُفعّل صلاحيتك.",
      },
      { property: "og:title", content: "الدخول والتسجيل | منصة صناعة المحتوى" },
      {
        property: "og:description",
        content: "أنشئ حسابك، املأ الفورم، وبعد المصادقة تُفتح لك كل الدروس.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [fields, setFields] = useState<FormField[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [planId, setPlanId] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "err" | "ok"; text: string } | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/account", replace: true });
    });
    fetchFormFields().then(setFields).catch(() => setFields([]));
    fetchPlans()
      .then((p) => {
        setPlans(p);
        if (p[0]) setPlanId(p[0].id);
      })
      .catch(() => setPlans([]));
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/account", replace: true });
        return;
      }
      const missing = fields.find((f) => f.is_required && !(answers[f.field_key] ?? "").trim());
      if (missing) throw new Error(`الحقل «${missing.label}» مطلوب`);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: { full_name: answers["full_name"] ?? "" },
        },
      });
      if (error) throw error;
      const uid = data.user?.id;
      if (uid) {
        await supabase
          .from("profiles")
          .update({
            full_name: answers["full_name"] ?? null,
            phone: answers["phone"] ?? null,
            answers,
            plan_id: planId || null,
            submitted_at: new Date().toISOString(),
          })
          .eq("id", uid);
      }
      navigate({ to: "/account", replace: true });
    } catch (err) {
      setMsg({ kind: "err", text: err instanceof Error ? err.message : "حدث خطأ غير متوقع" });
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    setMsg(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/account",
    });
    if (result.error) {
      setMsg({ kind: "err", text: "تعذّر الدخول عبر جوجل، جرّب البريد وكلمة السر." });
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/account", replace: true });
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card panel">
        <div className="auth-head">
          <img src={logoAsset.url} alt="" />
          <h1>
            {mode === "login" ? "الدخول إلى المنصة" : "طلب الانضمام"}
          </h1>
          <p className="mono">CONTENT-TO-CASH ENGINE · ACCESS CONTROL</p>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "login" ? "on" : ""}
            onClick={() => setMode("login")}
          >
            تسجيل الدخول
          </button>
          <button
            type="button"
            className={mode === "signup" ? "on" : ""}
            onClick={() => setMode("signup")}
          >
            حساب جديد
          </button>
        </div>

        {mode === "signup" && plans.length > 0 && (
          <div className="auth-plans">
            {plans.map((p) => (
              <button
                type="button"
                key={p.id}
                className={`auth-plan ${planId === p.id ? "on" : ""}`}
                onClick={() => setPlanId(p.id)}
              >
                <b>{p.name}</b>
                <span className="mono">
                  {p.price > 0 ? `${p.price} ${p.currency}` : "مجاناً"}
                  {p.duration_days ? ` / ${p.duration_days} يوم` : " / مدى الحياة"}
                </span>
                {p.description && <small>{p.description}</small>}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>البريد الإلكتروني</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              dir="ltr"
            />
          </label>
          <label>
            <span>كلمة السر</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              dir="ltr"
            />
          </label>

          {mode === "signup" &&
            fields.map((f) => (
              <label key={f.id}>
                <span>
                  {f.label} {f.is_required && <b style={{ color: "var(--redline)" }}>*</b>}
                </span>
                {f.field_type === "textarea" ? (
                  <textarea
                    rows={3}
                    value={answers[f.field_key] ?? ""}
                    placeholder={f.placeholder ?? ""}
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
                    type={f.field_type === "number" ? "number" : f.field_type === "email" ? "email" : "text"}
                    value={answers[f.field_key] ?? ""}
                    placeholder={f.placeholder ?? ""}
                    onChange={(e) => setAnswers({ ...answers, [f.field_key]: e.target.value })}
                  />
                )}
              </label>
            ))}

          {msg && <p className={`auth-msg ${msg.kind}`}>{msg.text}</p>}

          <button className="btn" type="submit" disabled={busy}>
            {busy ? "جارٍ المعالجة…" : mode === "login" ? "دخول" : "إرسال الطلب"}
          </button>
        </form>

        <div className="auth-or">
          <span>أو</span>
        </div>
        <button className="btn ghost" type="button" onClick={google}>
          <i className="fab fa-google" aria-hidden="true"></i> المتابعة عبر جوجل
        </button>

        <p className="auth-foot">
          طلبك يُراجع يدوياً من طرف الإدارة، وبعد المصادقة تُفتح لك كل الدروس حسب المدة الممنوحة.
          <br />
          <Link to="/">العودة للصفحة الرئيسية</Link>
        </p>
      </div>
    </div>
  );
}
