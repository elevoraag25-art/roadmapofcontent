import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { StagesChart, RetentionChart } from "@/components/blueprint/Charts";
import { Sheet08 } from "@/components/blueprint/sheets/Sheet08";
import { Sheet09 } from "@/components/blueprint/sheets/Sheet09";
import { Sheet10 } from "@/components/blueprint/sheets/Sheet10";
import { Sheet11 } from "@/components/blueprint/sheets/Sheet11";
import { Sheet12 } from "@/components/blueprint/sheets/Sheet12";

export const Route = createFileRoute("/")({
  component: BlueprintPage,
});

const SHEETS = [
  { id: "s01", code: "01", label: "علم الخوارزمية", icon: "fa-chart-simple" },
  { id: "s02", code: "02", label: "ثالوث الهندسة الفيروسية", icon: "fa-bullseye" },
  { id: "s03", code: "03", label: "معادلة العرض الماسي", icon: "fa-crown" },
  { id: "s04", code: "04", label: "السكريبت والمونتاج", icon: "fa-pen-nib" },
  { id: "s05", code: "05", label: "قمع البيع والأتمتة", icon: "fa-filter" },
  { id: "s06", code: "06", label: "مصنع الأفكار", icon: "fa-lightbulb" },
  { id: "s07", code: "07", label: "بروتوكول التنفيذ", icon: "fa-list-check" },
  { id: "s08", code: "08", label: "مصفوفة الزوايا", icon: "fa-compass-drafting" },
  { id: "s09", code: "09", label: "علم الفيروسية", icon: "fa-chart-line" },
  { id: "s10", code: "10", label: "محرك الإعلانات", icon: "fa-bullhorn" },
  { id: "s11", code: "11", label: "بنك الخطافات", icon: "fa-fish" },
  { id: "s12", code: "12", label: "نظام الرافعة", icon: "fa-people-group" },
  { id: "s13", code: "13", label: "الورقة المرجعية", icon: "fa-flag-checkered" },
];


function NavList({ activeId, onNavigate }: { activeId: string; onNavigate?: () => void }) {
  return (
    <div className="navlist">
      {SHEETS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={activeId === s.id ? "active" : ""}
          onClick={onNavigate}
        >
          <span className="code">{s.code}</span>
          <i className={`fas ${s.icon}`}></i>
          <span>{s.label}</span>
        </a>
      ))}
    </div>
  );
}

function Accordion({
  badge,
  badgeText,
  title,
  children,
}: {
  badge: "red" | "cyan" | "money";
  badgeText: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`acc ${open ? "open" : ""}`}>
      <button className="acc-head" onClick={() => setOpen((v) => !v)}>
        <span className="lbl">
          <span className={`badge ${badge}`}>{badgeText}</span> {title}
        </span>
        <i className="fas fa-chevron-down"></i>
      </button>
      <div className="acc-body">
        <div className="acc-body-in">{children}</div>
      </div>
    </div>
  );
}

function BlueprintPage() {
  const [activeId, setActiveId] = useState("s01");
  const [mobileOpen, setMobileOpen] = useState(false);
  const rulerFillRef = useRef<HTMLDivElement>(null);
  const rulerMarkerRef = useRef<HTMLDivElement>(null);
  const rulerPctRef = useRef<HTMLElement>(null);
  const rulerSheetRef = useRef<HTMLSpanElement>(null);

  // Scroll ruler
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0;
      if (rulerFillRef.current) rulerFillRef.current.style.width = pct + "%";
      if (rulerMarkerRef.current) rulerMarkerRef.current.style.left = pct + "%";
      if (rulerPctRef.current) rulerPctRef.current.textContent = Math.round(pct) + "%";
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = SHEETS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            const meta = SHEETS.find((s) => s.id === entry.target.id);
            if (meta && rulerSheetRef.current) rulerSheetRef.current.textContent = "SHEET " + meta.code;
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Reveal animation
  useEffect(() => {
    const selector =
      ".sheet .panel, .sheet .paper, .sheet .metric, .sheet .chart-card, .tl-item, .check-item, .acc, .flayer, table.tech";
    const els = document.querySelectorAll(selector);
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Ruler */}
      <div className="ruler">
        <div className="ruler-ticks"></div>
        <div className="ruler-fill" ref={rulerFillRef}></div>
        <div className="ruler-marker" ref={rulerMarkerRef}></div>
        <div className="ruler-content">
          <span className="r-brand">
            <i className="fas fa-drafting-compass"></i> DWG-ENGINE-01
          </span>
          <span className="r-readout">
            <span ref={rulerSheetRef}>SHEET 00</span>
            <b ref={rulerPctRef}>0%</b>
          </span>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="mobile-bar">
        <h1>
          مخطط <span>الفيرال</span>
        </h1>
        <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMobileOpen(false)}>
          <i className="fas fa-xmark"></i>
        </button>
        <NavList activeId={activeId} onNavigate={() => setMobileOpen(false)} />
      </div>

      <div className="shell">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="brand">
            <span className="mono">DWG SET — CONTENT ENGINE</span>
            <h1>
              مخطط <span>الهندسة</span> الفيروسية
            </h1>
            <span className="tagline">من الفكرة إلى الكاش — نسخة موسّعة ومُدقّقة</span>
          </div>
          <p className="navlist-label">فهرس اللوحات</p>
          <NavList activeId={activeId} />
          <div className="side-foot">
            <span className="mono">NOTE</span>
            <p>كل لوحة مبنية على تطبيق فعلي. اقرأ باش تفهم، رجع باش تنفذ.</p>
          </div>
        </nav>

        <main className="main">
          {/* HERO */}
          <section className="hero">
            <div className="ambient a1"></div>
            <div className="ambient a2"></div>
            <span className="hero-eyebrow">
              <i className="fas fa-drafting-compass"></i> SHEET 00 — المخطط الرئيسي
            </span>
            <h2>
              هندسة المحتوى الفيروسي، <span className="accent">مبنية على القياس</span>،<br />
              موجّهة نحو <span className="accent2">الكاش</span>.
            </h2>
            <p className="lede">
              هذه ليست مقالة تحفيزية. هذا مخطط هندسي كامل — يدمج علم الخوارزميات، ثالوث نبيل محبوب
              في هندسة الفيرال (الخطاف، الاحتفاظ، العاطفة)، ومعادلة أليكس هرموزي في تسعير العروض —
              في نظام واحد قابل للتنفيذ من اليوم الأول. كل لوحة مرقّمة، وكل خطوة قابلة للقياس.
            </p>

            <div className="panel" style={{ overflowX: "auto" }}>
              <h4>
                <i className="fas fa-diagram-project" style={{ color: "var(--cyan)" }}></i> مخطط
                المحرك: من الفكرة إلى الكاش
              </h4>
              <p style={{ marginBottom: "1.2rem" }}>
                مرّر المؤشر فوق كل عقدة لقراءة وظيفتها. هذه هي السلسلة الكاملة التي تُبنى عليها كل
                لوحة لاحقة في هذا الدليل.
              </p>
              <div className="schematic" style={{ minWidth: 760 }}>
                <div className="schem-row">
                  <div className="snode">
                    <span className="n">NODE 01</span>
                    <span className="t">الخوارزمية</span>
                    <span className="d">نظام تنقيط يقرأ سلوك المشاهد</span>
                  </div>
                  <div className="sarrow">←</div>
                  <div className="snode">
                    <span className="n">NODE 02</span>
                    <span className="t">الخطاف</span>
                    <span className="d">أول 3 ثوانٍ — كسر السكرول</span>
                  </div>
                  <div className="sarrow">←</div>
                  <div className="snode">
                    <span className="n">NODE 03</span>
                    <span className="t">الاحتفاظ</span>
                    <span className="d">حلقات مفتوحة + قطع كل 3s</span>
                  </div>
                  <div className="sarrow">←</div>
                  <div className="snode">
                    <span className="n">NODE 04</span>
                    <span className="t">العاطفة</span>
                    <span className="d">تحويل المشاهدة إلى مشاركة</span>
                  </div>
                </div>
                <div className="schem-row">
                  <div className="snode">
                    <span className="n">NODE 08</span>
                    <span className="t">الكاش $$$</span>
                    <span className="d">الهدف النهائي للنظام</span>
                  </div>
                  <div className="sarrow">←</div>
                  <div className="snode">
                    <span className="n">NODE 07</span>
                    <span className="t">إغلاق العرض</span>
                    <span className="d">معادلة هرموزي + ضمانات</span>
                  </div>
                  <div className="sarrow">←</div>
                  <div className="snode">
                    <span className="n">NODE 06</span>
                    <span className="t">قمع البيع</span>
                    <span className="d">TOFU → MOFU → BOFU</span>
                  </div>
                  <div className="sarrow">←</div>
                  <div className="snode">
                    <span className="n">NODE 05</span>
                    <span className="t">الأتمتة</span>
                    <span className="d">تعليق → DM تلقائي → Lead</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "1.4rem" }}>
                <h5 style={{ marginBottom: "0.7rem" }}>
                  <i className="fas fa-layer-group" style={{ color: "var(--cyan)" }}></i> طبقات
                  التعميق (اللوحات 08-13)
                </h5>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span className="badge">الزوايا (08) + بنك الخطافات (11) → تُغذّي عقدة الخطاف NODE 02</span>
                  <span className="badge">علم الفيروسية (09) → يُعمّق عقدة الخوارزمية NODE 01 والاحتفاظ NODE 03</span>
                  <span className="badge">الإعلانات (10) والرافعة (12) → يفتحان مصدر كاش موازٍ لعقدة NODE 08</span>
                </div>
              </div>
            </div>

          </section>

          {/* SHEET 01 */}
          <section className="sheet" id="s01">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 01 / 13</span>
                <h3>علم الخوارزمية — كيف تفكّر الآلة؟</h3>
                <p className="sheet-sub">
                  المنصات لا تقرأ المحتوى، هي تقرأ سلوك المشاهد تجاهه. كل فعل يقوم به المشاهد يمنحك
                  نقاطاً في نظام تنقيط داخلي.
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>مشاهد واحد → مليون</b>
                <br />
                REV: <b>A — نسخة مدققة</b>
              </div>
            </div>

            <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
              <div className="panel">
                <h4>نظام التنقيط (Point System)</h4>
                <div className="metric w1">
                  <div>
                    <b>1. وقت المشاهدة (Watch Time)</b>
                    <p>مشاهدة كاملة + إعادة (Loop) = دفع فوري لآلاف المشاهدين الجدد.</p>
                  </div>
                  <span className="val">+100</span>
                </div>
                <div className="metric w2">
                  <div>
                    <b>2. المشاركة (Share)</b>
                    <p>إرسال الفيديو لصديق — أقوى مؤشر على إثارة المشاعر أو تمثيل حالة اجتماعية.</p>
                  </div>
                  <span className="val">+75</span>
                </div>
                <div className="metric w3">
                  <div>
                    <b>3. الحفظ (Save)</b>
                    <p>مؤشر على قيمة عالية، شائع في المحتوى التعليمي والقوائم.</p>
                  </div>
                  <span className="val">+50</span>
                </div>
                <div className="metric w4">
                  <div>
                    <b>4. الإعجاب والتعليق</b>
                    <p>أضعف المقاييس، إلا إذا كان التعليق نقاشاً طويلاً فعلياً.</p>
                  </div>
                  <span className="val">+10</span>
                </div>
              </div>

              <div className="chart-card">
                <span className="ct">FIG. 01 — تدرّج اختبار الفيديو عبر المجموعات (Log Scale)</span>
                <div className="chart-wrap">
                  <StagesChart />
                </div>
              </div>
            </div>

            <div className="dim">التوصيل الكامل مقابل الفشل المبكر</div>

            <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
              <div className="panel">
                <h4>المقاييس الثلاثة الكبرى (The Big 3)</h4>
                <p style={{ marginBottom: ".8rem" }}>
                  <i className="fas fa-eye" style={{ color: "var(--cyan)" }}></i>{" "}
                  <strong style={{ color: "#fff" }}>الاحتفاظ (Retention):</strong> الهدف 70-100%
                  إكمال. فيديو 30 ثانية اكتملت مشاهدته أقوى خوارزمياً من دقيقة شوهد نصفها فقط.
                </p>
                <p style={{ marginBottom: ".8rem" }}>
                  <i className="fas fa-share-nodes" style={{ color: "var(--cyan)" }}></i>{" "}
                  <strong style={{ color: "#fff" }}>المشاركة — الكأس المقدسة:</strong> عندما يُرسل
                  المشاهد الفيديو خارج التطبيق (WhatsApp)، تعتبرك المنصة "جالباً للعملاء" وتكافئك
                  بفيرال مباشر.
                </p>
                <p>
                  <i className="fas fa-bookmark" style={{ color: "var(--cyan)" }}></i>{" "}
                  <strong style={{ color: "#fff" }}>الحفظ (Save):</strong> دليل على قيمة عميقة، يحدث
                  غالباً في المحتوى التعليمي ("5 مواقع ذكاء اصطناعي").
                </p>
              </div>
              <div className="chart-card">
                <span className="ct">FIG. 02 — منحنى الاحتفاظ: فيديو فيروسي مقابل فيديو فاشل</span>
                <div className="chart-wrap">
                  <RetentionChart />
                </div>
              </div>
            </div>

            <div className="panel" data-accent="red">
              <h4>
                <i className="fas fa-plus" style={{ color: "var(--redline)" }}></i> إضافة: فروقات
                الخوارزمية بين المنصات (لعملك Omnichannel)
              </h4>
              <p style={{ marginBottom: "1rem" }}>
                بما أنك تدير حملات على أكثر من منصة، لا تعامل الخوارزميات كأنها واحدة. كل منصة
                تكافئ إشارة مختلفة أولاً:
              </p>
              <div className="table-wrap">
                <table className="tech">
                  <thead>
                    <tr>
                      <th>المنصة</th>
                      <th>الإشارة الأقوى</th>
                      <th>القاعدة العملية</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>TikTok</th>
                      <td>الاحتفاظ الكامل + إعادة المشاهدة (Loop)</td>
                      <td>أول ثانيتين حاسمتان أكثر من أي منصة أخرى</td>
                    </tr>
                    <tr>
                      <th>Instagram Reels</th>
                      <td>المشاركة عبر DM / خارج التطبيق</td>
                      <td>صمّم لحظة "يستاهل تبعت لصاحبك" واضحة</td>
                    </tr>
                    <tr>
                      <th>Snapchat Spotlight</th>
                      <td>وقت المشاهدة الإجمالي + التكرار اليومي</td>
                      <td>الانتظام في النشر يفوق جودة المونتاج المفرطة</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SHEET 02 */}
          <section className="sheet" id="s02">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 02 / 13</span>
                <h3>ثالوث الهندسة الفيروسية — منهجية نبيل محبوب</h3>
                <p className="sheet-sub">
                  ثلاث محطات متتالية: اصطياد الانتباه، منع الهروب، ثم تحويل المشاهدة إلى مشاركة.
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>0 → 30 ثانية</b>
                <br />
                REV: <b>A</b>
              </div>
            </div>

            <h4 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
              <span className="badge red">01</span>&nbsp; الخطاف (The Hook) — أول 3 ثوانٍ
            </h4>
            <div className="grid-3" style={{ marginBottom: "2.4rem" }}>
              <div className="panel">
                <h4>👁️ الخطاف البصري</h4>
                <p style={{ marginBottom: ".6rem" }}>اكسر نمط السكرول بحركة مفاجئة:</p>
                <ul style={{ paddingRight: "1.1rem" }}>
                  <li>تغيير زاوية الكاميرا بسرعة</li>
                  <li>رمي شيء نحو العدسة</li>
                  <li>نص ضخم وملون يظهر فجأة</li>
                </ul>
              </div>
              <div className="panel">
                <h4>👂 الخطاف السمعي</h4>
                <p style={{ marginBottom: ".6rem" }}>استخدم المؤثرات لإيقاظ الدماغ:</p>
                <ul style={{ paddingRight: "1.1rem" }}>
                  <li>صوت Whoosh عند ظهور النص</li>
                  <li>صوت دقات قلب أو إنذار</li>
                  <li>البدء بنبرة صوت عالية أو صراخ خفيف</li>
                </ul>
              </div>
              <div className="panel" data-accent="red">
                <h4>🧠 الخطاف النفسي (الكلمات)</h4>
                <ul style={{ paddingRight: "1.1rem" }}>
                  <li>
                    <strong>العدو المشترك:</strong> "أكبر كذبة قالوها لك مسوقي العقارات..."
                  </li>
                  <li>
                    <strong>الخوف من الخسارة:</strong> "هاد الغلطة كتخلي الريلز ديالك يموت..."
                  </li>
                  <li>
                    <strong>الفضول المفرط:</strong> "السر لي خلى هاد المنتج يتباع بـ 1M$..."
                  </li>
                </ul>
              </div>
            </div>

            <h4 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
              <span className="badge cyan">02</span>&nbsp; الاحتفاظ (Retention)
            </h4>
            <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
              <div className="panel">
                <h4>الحلقة المفتوحة (Open Loop)</h4>
                <p>وعد في البداية لا يُحلّ إلا في النهاية.</p>
                <div className="quote">
                  "سأخبرك بالسر الثالث في نهاية الفيديو، لأنه الأهم" —{" "}
                  <b>وفي الأخير غنوريك أكبر خطأ...</b>
                </div>
              </div>
              <div className="panel">
                <h4>قاعدة الـ 3 ثواني (Jump Cuts)</h4>
                <p>
                  اقطع الفيديو بحيث لا "يتنفس" المشاهد. غيّر الزاوية (B-roll، تقريب الصورة، ظهور
                  نص) كل 3 ثوانٍ لإنتاج الدوبامين والاستمرارية.
                </p>
              </div>
            </div>

            <h4 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
              <span className="badge money">03</span>&nbsp; المشاعر (Emotion = Share)
            </h4>
            <div className="panel">
              <p style={{ marginBottom: "1rem" }}>
                الناس لا تشارك المحتوى لأنه "جيد" — تشاركه لأنه يعبّر عنها.
              </p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: ".6rem", marginBottom: "1.2rem" }}
              >
                <span className="badge cyan">😂 الضحك — الترفيه</span>
                <span className="badge money">🚀 الإلهام — قصص النجاح</span>
                <span className="badge red">😡 الغضب — الظلم / الأخطاء</span>
                <span className="badge cyan">🤯 الصدمة — معلومة جديدة</span>
                <span className="badge money">😱 الخوف — الخسارة المحتملة</span>
              </div>
              <div className="quote">
                <b>تطبيق الإلهام (كما قال نبيل):</b> "كيفاش بديت من الزيرو، من حاسوب قديم، لشركة
                خدمات تسويق... هاد القصة كتعطي إحساس فخر، والشخص كيبارطاجيها مع صاحبو لي باغي يبدا."
              </div>
            </div>
          </section>

          {/* SHEET 03 */}
          <section className="sheet" id="s03">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 03 / 13</span>
                <h3>معادلة العرض الذي لا يقاوم — أليكس هرموزي</h3>
                <p className="sheet-sub">
                  إذا كان منتجك "سلعة عادية" (Commodity)، ستضطر لخفض السعر لتبيع. هرموزي يعلّمك كيف
                  تصنع عرضاً يجعلك تُسعّر بـ 10 أضعاف المنافسين والناس تشتري.
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>القيمة المُدركة</b>
                <br />
                REV: <b>A</b>
              </div>
            </div>

            <div className="panel" style={{ marginBottom: "2.4rem" }}>
              <h4 style={{ textAlign: "center", marginBottom: "1.6rem" }}>
                معادلة القيمة (The Value Equation)
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.4rem",
                  fontFamily: "'IBM Plex Mono',monospace",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1rem",
                    alignItems: "center",
                    borderBottom: "2px solid rgba(255,255,255,.7)",
                    paddingBottom: "1.4rem",
                    width: "100%",
                  }}
                >
                  <span style={{ color: "var(--cyan)" }}>
                    Dream Outcome
                    <br />
                    <small
                      style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
                    >
                      (النتيجة الحلم)
                    </small>
                  </span>
                  <span>×</span>
                  <span style={{ color: "var(--cyan)" }}>
                    Perceived Likelihood
                    <br />
                    <small
                      style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
                    >
                      (يقين التحقيق)
                    </small>
                  </span>
                  <span className="badge money" style={{ marginRight: ".6rem" }}>
                    يجب زيادتها ↑
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "var(--redline)" }}>
                    Time Delay
                    <br />
                    <small
                      style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
                    >
                      (تأخير الوقت)
                    </small>
                  </span>
                  <span>×</span>
                  <span style={{ color: "var(--redline)" }}>
                    Effort & Sacrifice
                    <br />
                    <small
                      style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
                    >
                      (الجهد والتضحية)
                    </small>
                  </span>
                  <span className="badge red" style={{ marginRight: ".6rem" }}>
                    يجب تقليلها ↓
                  </span>
                </div>
              </div>
            </div>

            <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
              <div className="paper">
                <span
                  className="badge red"
                  style={{ marginBottom: ".8rem", display: "inline-block" }}
                >
                  عرض ضعيف — يخسر
                </span>
                <h5>خدمة إدارة انستغرام (Social Media Management)</h5>
                <ul style={{ paddingRight: "1.1rem" }}>
                  <li>"سأنشر لك 3 بوستات أسبوعياً" — جهد عالٍ على العميل ليفهم القيمة</li>
                  <li>"سنزيد الوعي بعلامتك" — نتيجة غير قابلة للقياس</li>
                  <li>"سنرى النتائج بعد 3 أشهر" — تأخير وقت كبير</li>
                  <li>السعر: 200$ شهرياً — يراه العميل غالياً</li>
                </ul>
              </div>
              <div className="paper">
                <span
                  className="badge money"
                  style={{ marginBottom: ".8rem", display: "inline-block" }}
                >
                  عرض هرموزي — يربح
                </span>
                <h5>نظام الاستحواذ على العملاء (Client Acquisition System)</h5>
                <ul style={{ paddingRight: "1.1rem" }}>
                  <li>
                    <strong>النتيجة + الضمان:</strong> "أضمن لك 10 عملاء جدد هذا الشهر، أو أعمل
                    مجاناً حتى تحصل عليهم"
                  </li>
                  <li>
                    <strong>تقليل الجهد:</strong> نظام Done-For-You — نقوم بكل شيء نيابة عنك
                  </li>
                  <li>
                    <strong>السرعة:</strong> "نطلق الحملة في 48 ساعة"
                  </li>
                  <li>السعر: 1500$ — يراه العميل استثماراً رابحاً</li>
                </ul>
              </div>
            </div>

            <div className="dim">تعميق البسط وتفكيك المقام</div>

            <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
              <div className="panel">
                <h4 style={{ borderRight: "3px solid var(--cyan)", paddingRight: ".7rem" }}>
                  البسط — ما يجب زيادته ↑
                </h4>
                <p style={{ marginBottom: ".7rem" }}>
                  <strong style={{ color: "#fff" }}>النتيجة الحلم:</strong> لا تبع ميزة. لا تبع
                  "كورس تسويق" — بِع "كيف تحصل على 3 عملاء يدفعون 1000$".
                </p>
                <p>
                  <strong style={{ color: "#fff" }}>يقين التحقيق:</strong> العميل خائف من الفشل.
                  قدّم ضمانات استرجاع، وشهادات من عملاء سابقين.
                </p>
              </div>
              <div className="panel" data-accent="red">
                <h4 style={{ borderRight: "3px solid var(--redline)", paddingRight: ".7rem" }}>
                  المقام — ما يجب تقليله ↓
                </h4>
                <p style={{ marginBottom: ".7rem" }}>
                  <strong style={{ color: "#fff" }}>تأخير الوقت:</strong> "في 14 يوماً" أفضل بكثير
                  من "قريباً".
                </p>
                <p>
                  <strong style={{ color: "#fff" }}>الجهد:</strong> وفّر قوالب جاهزة، أو قدّم خدمة
                  Done-For-You كاملة.
                </p>
              </div>
            </div>

            <div className="panel" data-accent="money">
              <h4>
                <i className="fas fa-plus" style={{ color: "var(--money)" }}></i> إضافة: مضاعفات
                العرض الماسي (Grand Slam Stack)
              </h4>
              <p style={{ marginBottom: "1rem" }}>
                المعادلة تبني القيمة الأساسية، لكن هرموزي يضيف 4 روافع لإغلاق البيع فعلياً بدون خفض
                السعر:
              </p>
              <div className="grid-4">
                <div className="paper">
                  <h5>
                    <i className="fas fa-hourglass-half"></i> الندرة
                  </h5>
                  <p>عدد محدود من المقاعد أو الوحدات (10 عملاء فقط هذا الشهر).</p>
                </div>
                <div className="paper">
                  <h5>
                    <i className="fas fa-stopwatch"></i> الاستعجال
                  </h5>
                  <p>موعد نهائي حقيقي (السعر يرتفع بعد 48 ساعة).</p>
                </div>
                <div className="paper">
                  <h5>
                    <i className="fas fa-gift"></i> البونصات
                  </h5>
                  <p>أضف قيمة مجانية مصاحبة (قالب، استشارة، أداة) بدل خفض السعر.</p>
                </div>
                <div className="paper">
                  <h5>
                    <i className="fas fa-shield-halved"></i> الضمان
                  </h5>
                  <p>اقلب المخاطرة نحو نفسك: "أو تسترجع فلوسك / أو نشتغل مجاناً".</p>
                </div>
              </div>
            </div>
          </section>

          {/* SHEET 04 */}
          <section className="sheet" id="s04">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 04 / 13</span>
                <h3>تشريح السكريبت وسيكولوجية المونتاج</h3>
                <p className="sheet-sub">لا تترك شيئاً للصدفة. الفيديوهات تُهندَس، ولا تُرتجل.</p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>0 → 60 ثانية</b>
                <br />
                REV: <b>B — + AIDA</b>
              </div>
            </div>

            <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>قوالب السكريبتات الجاهزة</h4>
            <div style={{ marginBottom: "2.4rem" }}>
              <Accordion badge="red" badgeText="بيع / خدمات" title="قالب P.A.S — مشكلة، تهييج، حل">
                <div
                  className="step"
                  style={{ borderColor: "var(--redline)", background: "var(--redline-dim)" }}
                >
                  <b>P — المشكلة (0-3s)</b>"السبب علاش [المشكلة التي يعاني منها عميلك]، هو أنك ما
                  زال كتستعمل [الطريقة القديمة الخاطئة]."
                </div>
                <div
                  className="step"
                  style={{ borderColor: "#f5c76a", background: "rgba(245,199,106,.1)" }}
                >
                  <b>A — التهييج (3-15s)</b>"وهادشي كيخليك [النتيجة السلبية]، بينما المنافسين ديالك
                  [النتيجة الإيجابية لي كيحققوها]."
                </div>
                <div
                  className="step"
                  style={{ borderColor: "var(--money)", background: "var(--money-dim)" }}
                >
                  <b>S — الحل (15-25s)</b>"الحل ماشي هو [حل تقليدي مكلف]، الحل هو [اسم منتجك] لي
                  كيعطيك [أكبر فائدة]."
                </div>
                <div
                  className="step"
                  style={{ borderColor: "var(--cyan)", background: "var(--cyan-dim)" }}
                >
                  <b>CTA (25-30s)</b>"اكتب كلمة [كلمة مفتاحية] فالتعاليق ونصيفت ليك كل التفاصيل
                  فالخاص."
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: ".4rem" }}>
                  <strong>مثال تطبيقي:</strong> "راك كتخسر ميزانيتك فالإعلانات بلا مبيعات؟ هادشي
                  كيخلي المنافسين يسرقو الزبائن... هادشي علاش صممنا هاد النظام لي كيضاعف التحويل،
                  اكتب 'نظام' باش نرسلك التفاصيل."
                </p>
              </Accordion>

              <Accordion badge="cyan" badgeText="علامة شخصية" title="قالب H.S.O — خطاف، قصة، عرض">
                <div
                  className="step"
                  style={{ borderColor: "var(--redline)", background: "var(--redline-dim)" }}
                >
                  <b>Hook (0-3s)</b>"أنا خسرت [رقم كبير/وقت طويل] باش نفهم هاد الحقيقة على [مجالك]."
                </div>
                <div
                  className="step"
                  style={{ borderColor: "#f5c76a", background: "rgba(245,199,106,.1)" }}
                >
                  <b>Story (3-40s)</b>"فـ [سنة معينة] كنت كنعاني من [المشكلة]. جربت كلشي وفشلت، حتى
                  اكتشفت هاد النظام لي غيّر ليا حياتي وهو [اشرح النظام باختصار]."
                </div>
                <div
                  className="step"
                  style={{ borderColor: "var(--money)", background: "var(--money-dim)" }}
                >
                  <b>Offer (40-60s)</b>"اليوم، هاد النظام هو لي كنطبقو لعملائي. إذا باغي نوفر عليك
                  الوقت والجهد، ادخل للرابط فالبايو / علق بكلمة كذا."
                </div>
              </Accordion>

              <Accordion badge="money" badgeText="إضافة" title="قالب A.I.D.A — انتباه، اهتمام، رغبة، فعل">
                <div
                  className="step"
                  style={{ borderColor: "var(--redline)", background: "var(--redline-dim)" }}
                >
                  <b>Attention (0-3s)</b>خطاف بصري أو صادم يوقف السكرول فوراً.
                </div>
                <div
                  className="step"
                  style={{ borderColor: "#f5c76a", background: "rgba(245,199,106,.1)" }}
                >
                  <b>Interest (3-12s)</b>معلومة أو إحصائية غير متوقعة تخص جمهورك تحديداً.
                </div>
                <div
                  className="step"
                  style={{ borderColor: "var(--cyan)", background: "var(--cyan-dim)" }}
                >
                  <b>Desire (12-25s)</b>اربط المعلومة بنتيجة ملموسة يرغب بها المشاهد (وقت، مال،
                  مظهر).
                </div>
                <div
                  className="step"
                  style={{ borderColor: "var(--money)", background: "var(--money-dim)" }}
                >
                  <b>Action (25-30s)</b>نداء واحد واضح فقط — لا تعرض خيارين في نفس الفيديو.
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: ".4rem" }}>
                  يُفضَّل على PAS عندما يكون المنتج جديداً على السوق ولا يوجد "ألم" واضح يمكن
                  تهييجه بعد.
                </p>
              </Accordion>
            </div>

            <div className="dim">من الكتابة إلى القص</div>

            <h4 style={{ fontSize: "1.2rem", marginBottom: "1.2rem" }}>
              سيكولوجية الدوبامين (المونتاج)
            </h4>
            <div className="grid-4">
              <div className="panel">
                <h4 style={{ fontSize: "1rem" }}>
                  <i className="fas fa-scissors" style={{ color: "var(--money)" }}></i> قص الدهون
                </h4>
                <p>احذف أي جزء تتنفس فيه. الفيديو يجب أن يكون كالطلقات المتتالية.</p>
              </div>
              <div className="panel">
                <h4 style={{ fontSize: "1rem" }}>
                  <i className="fas fa-closed-captioning" style={{ color: "var(--cyan)" }}></i>{" "}
                  العناوين
                </h4>
                <p>80% يشاهدون بدون صوت بداية. خط عريض، ولوّن الكلمات المهمة (أصفر/أخضر).</p>
              </div>
              <div className="panel">
                <h4 style={{ fontSize: "1rem" }}>
                  <i className="fas fa-volume-high" style={{ color: "#f5c76a" }}></i> التصميم
                  الصوتي
                </h4>
                <p>الصوت 50% من الفيديو. Whooshes عند التغيير، Pops عند ظهور الكلمات، موسيقى تصاعدية.</p>
              </div>
              <div className="panel" data-accent="red">
                <h4 style={{ fontSize: "1rem" }}>
                  <i className="fas fa-camera" style={{ color: "var(--redline)" }}></i> قاعدة الـ 3
                  ثواني
                </h4>
                <p>لا تترك الإطار ثابتاً. Zoom، صورة، أو تغيير زاوية كل 3 ثوانٍ كحد أقصى.</p>
              </div>
            </div>
          </section>

          {/* SHEET 05 */}
          <section className="sheet" id="s05">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 05 / 13</span>
                <h3>قمع المبيعات والأتمتة</h3>
                <p className="sheet-sub">
                  المشاهدات المجانية لا تعني أموالاً في البنك، إلا إذا كان لديك "نظام اصطياد"
                  (Capture System).
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>TOFU → BOFU</b>
                <br />
                REV: <b>A</b>
              </div>
            </div>

            <div className="grid-2" style={{ marginBottom: "2.4rem", alignItems: "center" }}>
              <div className="panel">
                <div className="funnel">
                  <div className="flayer f1">
                    TOFU — المحتوى الفيروسي<small>60% من محتواك | الوعي والانتباه</small>
                  </div>
                  <div className="flayer f2">
                    MOFU — توليد الـ Leads<small>20% من محتواك | جمع الداتا</small>
                  </div>
                  <div className="flayer f3">
                    BOFU — البيع<small>20% | إعلانات وعروض</small>
                  </div>
                </div>
                <p className="ftip">
                  <i className="fas fa-arrow-down"></i> $$$ — التدفق الصحيح ينزل من الوعي إلى البيع
                  دون قفزات
                </p>
              </div>
              <div className="panel" data-accent="red">
                <h4>استراتيجية الأتمتة (ManyChat Hack)</h4>
                <p style={{ marginBottom: "1rem" }}>
                  لا تستخدم أبداً جملة{" "}
                  <s style={{ color: "var(--redline)" }}>"الرابط في البايو"</s> — تقتل التفاعل
                  وتُخرج المشاهد من المنصة.
                </p>
                <div className="tl">
                  <div className="tl-item">
                    <span className="tl-dot" style={{ background: "var(--redline)" }}></span>
                    <h5>1. قدّم قيمة قوية في الفيديو</h5>
                  </div>
                  <div className="tl-item">
                    <span className="tl-dot" style={{ background: "#f5c76a" }}></span>
                    <h5>2. نداء واضح (CTA)</h5>
                    <p>"اكتب كلمة 'دليل' في التعليقات وسأرسل لك الرابط فوراً في الخاص."</p>
                  </div>
                  <div className="tl-item">
                    <span className="tl-dot" style={{ background: "var(--cyan)" }}></span>
                    <h5>3. الخوارزمية تكافئ التفاعل</h5>
                    <p>آلاف التعليقات ترفع الفيديو تلقائياً (Free Traffic).</p>
                  </div>
                  <div className="tl-item">
                    <span className="tl-dot" style={{ background: "var(--money)" }}></span>
                    <h5>4. ManyChat يرد تلقائياً</h5>
                    <p>
                      ربط انستغرام بـ ManyChat — الأداة ترسل رابط صفحة الهبوط عبر DM فور كتابة
                      الكلمة المفتاحية.
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    marginTop: "1rem",
                    color: "var(--money)",
                    fontWeight: 700,
                    fontSize: ".9rem",
                  }}
                >
                  <i className="fas fa-check-circle"></i> النتيجة: تفاعل يرفع الفيديو + عملاء
                  محتملون في الخاص جاهزون للتحويل.
                </p>
              </div>
            </div>

            <div className="panel" data-accent="money">
              <h4>
                <i className="fas fa-plus" style={{ color: "var(--money)" }}></i> إضافة: تكييف
                القمع لسوق الـ COD
              </h4>
              <p style={{ marginBottom: "1rem" }}>
                في أسواق الدفع عند الاستلام (المغرب / الخليج)، الـ BOFU لا ينتهي بالإعلان — بل
                بمكالمة أو رسالة تأكيد. أضف طبقة رابعة:
              </p>
              <div className="grid-3">
                <div className="paper">
                  <h5>CONFIRM</h5>
                  <p>
                    مكالمة أو رسالة WhatsApp تأكيد سريعة خلال ساعات من الطلب، لا أيام — تقلّل
                    الإلغاء.
                  </p>
                </div>
                <div className="paper">
                  <h5>CATALOG</h5>
                  <p>
                    كتالوج WhatsApp Business جاهز يسمح للعميل المتردد بمراجعة المنتج قبل التأكيد
                    النهائي.
                  </p>
                </div>
                <div className="paper">
                  <h5>RECOVER</h5>
                  <p>
                    رسالة استرجاع تلقائية للطلبات غير المؤكدة بعد 24 ساعة، بعرض مبسّط لا خصم مباشر.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SHEET 06 */}
          <section className="sheet" id="s06">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 06 / 13</span>
                <h3>مصنع الأفكار — مصفوفة المحتوى اللانهائية</h3>
                <p className="sheet-sub">
                  لا تنتظر الإلهام. ادمج "الموضوع" مع "الهيكل" لتوليد عشرات الأفكار فوراً.
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>موضوع × هيكل</b>
                <br />
                REV: <b>B — صفوف إضافية</b>
              </div>
            </div>

            <div className="table-wrap" style={{ marginBottom: "2.4rem" }}>
              <table className="tech">
                <thead>
                  <tr>
                    <th>الموضوع ⬇ \ الهيكل ➡</th>
                    <th style={{ color: "var(--cyan)" }}>تدمير خرافة</th>
                    <th style={{ color: "#f5c76a" }}>خطوات عملية</th>
                    <th style={{ color: "var(--money)" }}>قصة نجاح</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>منتج (عناية بالبشرة)</th>
                    <td>"علاش الصابون العادي كيدمر وجهك..."</td>
                    <td>"3 خطوات لروتين مسائي كيصفي البشرة."</td>
                    <td>"كيفاش تخلصت من الحبوب فـ 30 يوم بهاد المكون."</td>
                  </tr>
                  <tr>
                    <th>خدمة (تصميم ويب)</th>
                    <td>"موقع زوين بلا مبيعات هو مضيعة فلوس."</td>
                    <td>"كيفاش تصمم صفحة هبوط كتحول الزوار لمشترين."</td>
                    <td>"كيفاش ضاعفنا مبيعات هاد العميل بتبديل زر واحد."</td>
                  </tr>
                  <tr>
                    <th>متجر COD</th>
                    <td>"الشحن المجاني كيغرقك فالخسارة — وهادشي السبب."</td>
                    <td>"كيفاش تأكد الطلبية فأقل من ساعتين وتقلل الإلغاء."</td>
                    <td>"كيفاش رجعنا 40% من الطلبات الملغاة بمكالمة واحدة."</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="panel" data-accent="money">
              <h4>
                <i className="fas fa-plus" style={{ color: "var(--money)" }}></i> إضافة: 5 هياكل
                احتياطية عند نفاد الأفكار
              </h4>
              <div className="grid-3">
                <div className="paper">
                  <h5>Listicle</h5>
                  <p>"5 أخطاء كيديرها أصحاب [مجالك] بلا ما يعرفو."</p>
                </div>
                <div className="paper">
                  <h5>Before / After</h5>
                  <p>عرض بصري مباشر لنتيجة قبل وبعد استخدام المنتج/النظام.</p>
                </div>
                <div className="paper">
                  <h5>POV</h5>
                  <p>"POV: أنت عميل داخل على الموقع ديالك لأول مرة."</p>
                </div>
                <div className="paper">
                  <h5>Day-in-the-life</h5>
                  <p>يوم كامل خلف الكواليس — يبني الثقة أكثر من أي إعلان.</p>
                </div>
                <div className="paper">
                  <h5>Reaction</h5>
                  <p>رد فعلك على خطأ شائع أو ترند في السوق ديالك.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SHEET 07 */}
          <section className="sheet" id="s07">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 07 / 13</span>
                <h3>بروتوكول التنفيذ الأسبوعي (The Factory Protocol)</h3>
                <p className="sheet-sub">
                  صناعة المحتوى يومياً تؤدي للاحتراق (Burnout). اعمل بنظام الدفعات (Batching) بدل
                  الارتجال.
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>أسبوع واحد</b>
                <br />
                REV: <b>B — + شجرة قرار</b>
              </div>
            </div>

            <div className="tl" style={{ marginBottom: "2.4rem" }}>
              <div className="tl-item">
                <span className="tl-dot" style={{ background: "var(--cyan)" }}></span>
                <span className="time">يوم 1 — ساعتين</span>
                <h5>
                  <i className="fas fa-search"></i> البحث والأفكار
                </h5>
                <p>
                  ادخل لحسابات المنافسين الأجانب والمحليين. انسخ الهياكل والخطافات الناجحة وأعد
                  صياغتها لمجالك — "اسرق كالفنان"، لا تنسخ المحتوى نفسه.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-dot" style={{ background: "#f5c76a" }}></span>
                <span className="time">يوم 2 — ساعتين</span>
                <h5>
                  <i className="fas fa-keyboard"></i> كتابة السكريبتات بالجملة
                </h5>
                <p>اكتب 10-15 سكريبت دفعة واحدة باستخدام قوالب PAS، HSO، و AIDA.</p>
              </div>
              <div className="tl-item">
                <span className="tl-dot" style={{ background: "var(--redline)" }}></span>
                <span className="time">يوم 3 — 3 ساعات</span>
                <h5>
                  <i className="fas fa-video"></i> التصوير بالجملة
                </h5>
                <p>
                  صوّر كل الفيديوهات في جلسة واحدة متواصلة. غيّر القميص ومكان الجلوس فقط بين كل
                  فيديو.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-dot" style={{ background: "var(--money)" }}></span>
                <span className="time">يوم 4</span>
                <h5>
                  <i className="fas fa-cut"></i> المونتاج والجدولة
                </h5>
                <p>قص الدهون، أضف نصوصاً، وجدولها للنشر اليومي عبر أداة أوتوماتيكية.</p>
              </div>
            </div>

            <div className="panel" data-accent="red">
              <h4>
                <i className="fas fa-code-branch" style={{ color: "var(--redline)" }}></i> إضافة:
                شجرة القرار — تحليل بعد 48 ساعة
              </h4>
              <p style={{ marginBottom: "1.2rem" }}>
                النشر بلا تحليل مضيعة للدفعة كاملها. بعد كل فيديو، اسأل سؤالاً واحداً وطبّق القرار
                مباشرة — بنفس منطق test → scale → kill الذي تستخدمه في الإعلانات:
              </p>
              <div className="grid-2">
                <div className="paper">
                  <h5>
                    <i className="fas fa-arrow-trend-up" style={{ color: "#1f8f4f" }}></i> نسبة
                    الاحتفاظ &gt; 50%
                  </h5>
                  <p>
                    <strong>القرار:</strong> اصنع 5 نسخ مشابهة من نفس الخطاف/الهيكل فوراً في الدفعة
                    القادمة. هذا هو "الفائز" — كرّره قبل أن يبرد.
                  </p>
                </div>
                <div className="paper">
                  <h5>
                    <i className="fas fa-arrow-trend-down" style={{ color: "#c0392b" }}></i> نسبة
                    الاحتفاظ &lt; 20%
                  </h5>
                  <p>
                    <strong>القرار:</strong> اقتل الفكرة نهائياً ولا تكررها بصياغة مختلفة. المشكلة
                    غالباً في الخطاف الأول لا في المحتوى.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel" style={{ marginTop: "2.4rem" }}>
              <h4>
                <i className="fas fa-calendar-week" style={{ color: "var(--cyan)" }}></i> تقويم
                المحتوى الأسبوعي — ترجمة نسبة TOFU/MOFU/BOFU لأرقام فعلية
              </h4>
              <div className="table-wrap">
                <table className="tech">
                  <thead>
                    <tr>
                      <th>الفئة</th>
                      <th>النسبة</th>
                      <th>العدد لو نشرت 7 فيديوهات/أسبوع</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["TOFU (وعي/فيروسي)", "60%", "4 فيديوهات"],
                      ["MOFU (توليد Leads)", "20%", "1-2 فيديو"],
                      ["BOFU (بيع مباشر/عرض)", "20%", "1 فيديو"],
                    ].map(([a, b, c]) => (
                      <tr key={a}>
                        <th>{a}</th>
                        <td>{b}</td>
                        <td>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel" data-accent="cyan" style={{ marginTop: "1.6rem" }}>
              <p>
                إذا كنت تنشر أقل من 7 أسبوعياً، حافظ على نفس النسبة التقريبية 60/20/20 مهما كان
                العدد الكلي — النسبة أهم من الرقم المطلق.
              </p>
            </div>
          </section>


          <Sheet08 />
          <Sheet09 />
          <Sheet10 />
          <Sheet11 />
          <Sheet12 />

          {/* SHEET 13 */}
          <section className="sheet" id="s13">
            <div className="sheet-head">
              <div className="sheet-title-wrap">
                <span className="sheet-num">SHEET 13 / 13</span>

                <h3>الورقة المرجعية السريعة</h3>
                <p className="sheet-sub">
                  راجع هاد القائمة قبل كل جلسة تصوير أو كتابة — بدل الرجوع لكل اللوحات من جديد.
                </p>
              </div>
              <div className="sheet-meta">
                SCALE: <b>مرجع سريع</b>
                <br />
                REV: <b>A</b>
              </div>
            </div>

            <div className="check-grid" style={{ marginBottom: "3rem" }}>
              {[
                ["الخطاف جاهز خلال 3 ثوانٍ؟", "بصري + سمعي + نفسي معاً، لا نص \"السلام عليكم\"."],
                ["حلقة مفتوحة موجودة؟", "وعد لا يُحل إلا قرب النهاية."],
                ["تغيير كل 3 ثوانٍ في المونتاج؟", "زاوية، تقريب، أو نص — لا إطار ثابت."],
                ["عاطفة واحدة واضحة مستهدفة؟", "ضحك، صدمة، إلهام، غضب، أو خوف — وليس كلها معاً."],
                ["CTA واحد فقط في الفيديو؟", "كلمة مفتاحية للتعليقات، لا \"الرابط في البايو\"."],
                ["العرض مبني بمعادلة هرموزي؟", "نتيجة حلم + ضمان، جهد ووقت أقل، لا سعر أقل."],
                ["القمع متدرّج TOFU→MOFU→BOFU؟", "لا تبيع في أول فيديو يشوفه الجمهور."],
                ["تحليل الـ48 ساعة مجدول؟", "كرّر الفائز، اقتل الخاسر، بلا عاطفة."],
                ["الزاوية النفسية واضحة ومحددة (واحدة فقط)؟", "خوف، فضول، دليل اجتماعي، أو رأي مثير للجدل — وليس أكثر من محفز واحد"],
                ["الفيديو الفائز عضوياً جاهز ليتحول لإعلان مدفوع؟", "نسبة احتفاظ فوق 50% = مرشح مباشر لميزانية اختبار"],
              ].map(([t, d]) => (
                <div className="check-item" key={t}>
                  <i className="fas fa-check"></i>
                  <div>
                    <b>{t}</b>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel" style={{ marginBottom: "3rem" }}>
              <h4>
                <i className="fas fa-gauge" style={{ color: "var(--money)" }}></i> لوحة القياس
                الأسبوعية
              </h4>
              <p style={{ marginBottom: "1rem" }}>
                هاد اللوحة هي الحلقة الأخيرة لي كتربط المحتوى بالكاش فعلياً — راجعها كل نهاية
                أسبوع، ماشي كل يوم.
              </p>
              <div className="table-wrap">
                <table className="tech">
                  <thead>
                    <tr>
                      <th>المؤشر</th>
                      <th>المصدر</th>
                      <th>متى تقلق</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["نسبة الاحتفاظ (Retention)", "فيديوهاتك العضوية", "إذا نزلت تحت 20% بشكل متكرر"],
                      ["معدل المشاركة (Share Rate)", "فيديوهاتك العضوية", "إذا لم يتجاوز أي فيديو نسبة تقارب 3% خلال الشهر"],
                      ["عدد الليدز من DM/ManyChat", "قمع البيع", "إذا كان أقل من عدد التعليقات بفارق كبير"],
                      ["تكلفة الألف مشاهدة ونسبة النقر (CPM/CTR)", "حملاتك المدفوعة", "إذا استمر إعلان تحت المتوسط لأكثر من 72 ساعة"],
                      ["عدد المبيعات المؤكدة (خاصة لأسواق COD)", "مكالمات/رسائل التأكيد", "إذا انخفضت نسبة التأكيد عن المعتاد بشكل واضح"],
                    ].map(([a, b, c]) => (
                      <tr key={a}>
                        <th>{a}</th>
                        <td>{b}</td>
                        <td>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


            <div className="final-cta">
              <span className="stamp">APPROVED FOR EXECUTION</span>
              <h2 style={{ marginTop: "1.4rem" }}>أنت الآن جاهز للهيمنة.</h2>
              <p>
                الفرق بين من يقرأ هذا المخطط ويغلق الصفحة، وبين من يصنع الملايين، هو التنفيذ
                الفوري. اختر منتجك، افتح ورقة، واكتب خطافك الأول.
              </p>
              <button
                className="btn"
                onClick={() =>
                  alert(
                    "تمرينك الأول: اكتب 5 خطافات (Hooks) لمنتجك أو خدمتك بناءً على عقدة الخوف من الخسارة. ابدأ الآن!",
                  )
                }
              >
                ابدأ التنفيذ الآن
              </button>
            </div>
          </section>

          <div className="foot">DWG SET — CONTENT-TO-CASH ENGINE · REV C · نسخة موسّعة</div>
        </main>
      </div>
    </>
  );
}
