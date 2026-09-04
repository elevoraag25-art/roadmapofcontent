export function Sheet28() {
  return (
    <section className="sheet" id="s28">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 2 من 8</span>
          <h3>الارتباطات والتموضع</h3>
          <p className="sheet-sub">
            ما تريد أن تُعرف به لا يقل أهمية عما يجب أن تتجنبه.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>ارتباط → تمايز</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-link" style={{ color: "var(--cyan)" }}></i> الارتباطات الإيجابية
        </h4>
        <p>
          اسأل نفسك — شنو بغيتي الجمهور يفكر فيه أول ما يسمع اسمك؟ كل قطعة محتوى خصها تعزز نفس
          الارتباطات، لا تتشتت بين رسائل متضاربة.
        </p>
      </div>

      <div className="panel red" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-link-slash" style={{ color: "var(--redline)" }}></i> الارتباطات
          السلبية — أهم جزء وأكثره إهمالاً
        </h4>
        <p>
          حدد بوضوح شنو <b>ما بغيتيش</b> ترتبط بيه. كن حذراً بمن تظهر معه بشكل متكرر (تعاون،
          بودكاست، ظهور مشترك) — التكرار كيخلق ارتباطاً فذهن الجمهور حتى لو ماشي مقصود منك. إلى
          حسيتي بشعور سلبي تجاه تعاون معين، هادشي كافي باش ترفضه، حتى لو كيعرض عليك وصول لجمهور كبير.
        </p>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-bridge" style={{ color: "var(--cyan)" }}></i> سد الفجوة — التموضع
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          {
            color: "var(--cyan)",
            time: "1",
            title: "راقب السائد",
            body: "شوف شنو كيقولو الناس اللي كيصنعو محتوى فنفس مجالك حالياً.",
          },
          {
            color: "#f5c76a",
            time: "2",
            title: "حدد الخلاف",
            body: "اسأل: آش منو ماشي متفق معاه؟",
          },
          {
            color: "var(--redline)",
            time: "3",
            title: "جدّد المنظور",
            body: "كيفاش نقدر نجيب منظور جديد لمعلومة قديمة يعرفها الجميع؟",
          },
          {
            color: "var(--money)",
            time: "4",
            title: "احتل الفجوة",
            body: "الفجوة اللي كتلقاها هي مكانك الفريد فالسوق — ماشي تقليد، تكملة.",
          },
        ].map((s) => (
          <div className="tl-item" key={s.time}>
            <span className="tl-dot" style={{ background: s.color }}></span>
            <span className="time">{s.time}</span>
            <h5>
              <i className="fas fa-compass"></i> {s.title}
            </h5>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      <div className="panel">
        <h4>
          <i className="fas fa-list-check" style={{ color: "var(--money)" }}></i> تمرين
        </h4>
        {[
          ["3 ارتباطات إيجابية", "اكتب 3 أشياء بغيتي ترتبط بيها بشكل دائم."],
          ["3 ارتباطات مرفوضة", "اكتب 3 أشياء أو أشخاص ما بغيتيش ترتبط بيهم إطلاقاً."],
          ["جملة الفجوة", "اكتب جملة وحدة تشرح الفجوة اللي غادي تسدها فمجالك."],
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
    </section>
  );
}
