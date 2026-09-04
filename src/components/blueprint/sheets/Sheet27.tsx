export function Sheet27() {
  return (
    <section className="sheet" id="s27">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 1 من 8</span>
          <h3>التعريف والانطلاق</h3>
          <p className="sheet-sub">قبل أي محتوى، لازم تعرف بالضبط شنو كتبني ولاش.</p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>وضوح → اتجاه</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-fingerprint" style={{ color: "var(--cyan)" }}></i> تعريف العلامة
        </h4>
        <p>
          العلامة الجيدة = <b>اقتران مقصود لأشياء ذات صلة، مكرر بثبات</b>. النتيجة: جمهورك كيربط
          تلقائياً بين اسمك وهاد الأشياء. مثال: نايك + مايكل جوردان = العظمة الرياضية. هارلي
          ديفيدسون = الحرية. علامتك موجودة سواء عرّفتها أنت أو لا — الأفضل تكون أنت اللي كتحكم فيها.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="paper">
          <h5>
            <i className="fas fa-shuffle" style={{ color: "var(--redline)" }}></i> العلامة العشوائية
          </h5>
          <p>
            تنشر بلا هدف واضح، محتواك متبعثر، الجمهور محتار فيك، ماشي كيثق وماشي كيشري.
          </p>
        </div>
        <div className="paper">
          <h5>
            <i className="fas fa-bullseye" style={{ color: "var(--money)" }}></i> العلامة المقصودة
          </h5>
          <p>
            تملك ارتباطاتك، كل محتوى كيبني نفس الثقة، الجمهور كيتوجه لقرار بوضوح.
          </p>
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-route" style={{ color: "var(--cyan)" }}></i> إطار رحلة العلامة — 4
        أسئلة عكسية
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          {
            color: "var(--cyan)",
            time: "السؤال 1",
            title: "شنو المخرج اللي بغيتيه بالضبط؟",
            body: "سمّيه بدقة: تحدث فمؤتمرات، عملاء بريميوم، قيادة فمجالك — لا هدف غامض.",
          },
          {
            color: "#f5c76a",
            time: "السؤال 2",
            title: "علاش خصك تكون معروف باش يوقع هادشي؟",
            body: "اربط الشهرة بالنتيجة، ماشي بالشهرة فحد ذاتها.",
          },
          {
            color: "var(--redline)",
            time: "السؤال 3",
            title: "شنو خصك تدير باش تكون معروف بهادشي؟",
            body: "البراند ماشي غير كلام، هو أفعال متكررة.",
          },
          {
            color: "var(--money)",
            time: "السؤال 4",
            title: "شنو خصك تتعلم اليوم باش تقدر تدير هادشي؟",
            body: "حدد المهارة الناقصة وابدا فيها هاد الأسبوع.",
          },
        ].map((s) => (
          <div className="tl-item" key={s.time}>
            <span className="tl-dot" style={{ background: s.color }}></span>
            <span className="time">{s.time}</span>
            <h5>
              <i className="fas fa-circle-question"></i> {s.title}
            </h5>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      <div className="panel red">
        <h4>
          <i className="fas fa-pen" style={{ color: "var(--redline)" }}></i> تمرين إلزامي
        </h4>
        <p>
          جاوب كتابة على الأسئلة الأربعة قبل ما تكمل للخطوة 2. بلا جواب واضح على «شنو المخرج اللي
          بغيتيه»، أي قرار محتوى جاي غايكون تخمين.
        </p>
      </div>
    </section>
  );
}
