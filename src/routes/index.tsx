import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment } from "react";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";

export const Route = createFileRoute("/")({
  component: BlueprintHome,
  head: () => ({
    meta: [
      { title: "مخطط الهندسة الفيروسية — 26 درساً من الفكرة إلى الكاش" },
      {
        name: "description",
        content:
          "مخطط هندسي كامل لصناعة المحتوى: الخوارزمية، الخطاف، العرض، القمع، الإعلانات، والترافيك العضوي — 26 درساً قابلة للتنفيذ.",
      },
      { property: "og:title", content: "مخطط الهندسة الفيروسية — من الفكرة إلى الكاش" },
      {
        property: "og:description",
        content: "26 درساً مقسّمة على 6 أقسام: الإنتاج، التحويل، الأفكار، الترافيك العضوي، والمرجع.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/" }],
  }),
});

function BlueprintHome() {
  return (
    <BlueprintLayout currentSlug="/">
      <section className="hero">
        <div className="ambient a1"></div>
        <div className="ambient a2"></div>
        <span className="hero-eyebrow">
          <i className="fas fa-drafting-compass"></i> SHEET 00 — المخطط الرئيسي
        </span>
        <h1>
          هندسة المحتوى الفيروسي، <span className="accent">مبنية على القياس</span>،<br />
          موجّهة نحو <span className="accent2">الكاش</span>.
        </h1>
        <p className="lede">
          هذه ليست مقالة تحفيزية. هذا مخطط هندسي كامل — يدمج علم الخوارزميات، ثالوث نبيل محبوب في
          هندسة الفيرال (الخطاف، الاحتفاظ، العاطفة)، معادلة أليكس هرموزي في تسعير العروض، ونظام
          ترافيك عضوي عبر ثلاث قنوات — في نظام واحد قابل للتنفيذ من اليوم الأول. 26 درساً، كل خطوة
          فيها قابلة للقياس.
        </p>

        <div className="panel">
          <h4>
            <i className="fas fa-diagram-project" style={{ color: "var(--cyan)" }}></i> مخطط المحرك:
            من الفكرة إلى الكاش
          </h4>
          <p style={{ marginBottom: "1.2rem" }}>
            كل عقدة مشروحة بوظيفتها تحت اسمها. هذه هي السلسلة الكاملة التي تُبنى عليها كل لوحة في
            هذا الدليل.
          </p>
          <div className="schematic">
            <div className="schem-row">
              {[
                ["NODE 01", "الخوارزمية", "نظام تنقيط يقرأ سلوك المشاهد"],
                ["NODE 02", "الخطاف", "أول 3 ثوانٍ — كسر السكرول"],
                ["NODE 03", "الاحتفاظ", "حلقات مفتوحة + قطع كل 3s"],
                ["NODE 04", "العاطفة", "تحويل المشاهدة إلى مشاركة"],
              ].map(([n, t, d], i) => (
                <Fragment key={n}>
                  {i > 0 && <div className="sarrow">←</div>}
                  <div className="snode">
                    <span className="n">{n}</span>
                    <span className="t">{t}</span>
                    <span className="d">{d}</span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="schem-row">
              {[
                ["NODE 08", "الكاش $$$", "الهدف النهائي للنظام"],
                ["NODE 07", "إغلاق العرض", "معادلة هرموزي + ضمانات"],
                ["NODE 06", "قمع البيع", "TOFU → MOFU → BOFU"],
                ["NODE 05", "الأتمتة", "تعليق → DM تلقائي → Lead"],
              ].map(([n, t, d], i) => (
                <Fragment key={n}>
                  {i > 0 && <div className="sarrow">←</div>}
                  <div className="snode">
                    <span className="n">{n}</span>
                    <span className="t">{t}</span>
                    <span className="d">{d}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "1.4rem" }}>
            <h5 style={{ marginBottom: "0.7rem" }}>
              <i className="fas fa-layer-group" style={{ color: "var(--cyan)" }}></i> طبقات التعميق
            </h5>
            <ul className="layers-note">
              <li>
                <b>الزوايا (08) + بنك الخطافات (11)</b> → تُغذّي عقدة الخطاف{" "}
                <span className="node-ref">NODE 02</span>
              </li>
              <li>
                <b>علم الفيروسية (09)</b> → يُعمّق عقدة الخوارزمية{" "}
                <span className="node-ref">NODE 01</span> والاحتفاظ{" "}
                <span className="node-ref">NODE 03</span>
              </li>
              <li>
                <b>الإعلانات (10) والرافعة (12)</b> → يفتحان مصدر كاش موازٍ لعقدة{" "}
                <span className="node-ref">NODE 08</span>
              </li>
              <li>
                <b>الترافيك العضوي (15-20)</b> → يُغذّي أعلى القمع{" "}
                <span className="node-ref">NODE 06</span> بلا تكلفة إعلانية
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sheet" id="map">
        <div className="sheet-head">
          <div className="sheet-title-wrap">
            <span className="sheet-num">INDEX / 21 SHEETS</span>
            <h3>خارطة الأقسام الخمسة</h3>
            <p className="sheet-sub">
              كل قسم صفحة مستقلة تجمع لوحاته المترابطة — ابدأ من الأول بالترتيب، أو اقفز مباشرة لما
              تحتاجه اليوم.
            </p>
          </div>
          <div className="sheet-meta">
            SCALE: <b>6 أقسام · 26 درساً</b>
            <br />
            REV: <b>E</b>
          </div>
        </div>

        <div className="sec-grid">
          {SECTIONS.map((sec, i) => (
            <Link to={sec.slug} className="sec-card" key={sec.slug}>
              <span className="sec-card-num">PART {String(i + 1).padStart(2, "0")}</span>
              <h4>
                <i className={`fas ${sec.icon}`} style={{ color: "var(--cyan)" }}></i> {sec.title}
              </h4>
              <p>{sec.desc}</p>
              <ul className="sec-card-list">
                {sec.sheets.map((s) => (
                  <li key={s.id}>
                    <span className="code">{s.code}</span> {s.label}
                  </li>
                ))}
              </ul>
              <span className="sec-card-go">
                افتح القسم <i className="fas fa-arrow-left"></i>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </BlueprintLayout>
  );
}
