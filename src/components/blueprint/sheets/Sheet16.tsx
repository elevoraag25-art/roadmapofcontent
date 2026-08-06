export function Sheet16() {
  return (
    <section className="sheet" id="s16">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 16 / 21</span>
          <h3>تحسين الملف الشخصي ومحركات البحث الاجتماعية</h3>
          <p className="sheet-sub">
            البروفايل هو أول صفحة هبوط يشوفها أي زائر جا من فيديو فيروسي — حتى أقوى فيديو ما غايبيع
            إلى الواجهة ضعيفة.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>واجهة الحساب</b>
          <br />
          REV: <b>E — جديد</b>
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-clipboard-check" style={{ color: "var(--cyan)" }}></i> قائمة تحقق
        البروفايل
      </h4>
      <div className="check-grid" style={{ marginBottom: "2.4rem" }}>
        {[
          ["صورة واضحة؟", "وجه أو لوغو بسيط، لا صورة معقدة أو مزدحمة."],
          ["بايو بجملتين فقط؟", "شنو كتقدم + لمن — بلا شعارات فارغة."],
          ["رابط واحد فقط فالبايو؟", "صفحة هبوط أو Linktree، لا روابط متفرقة."],
          ["هايلايتس/بينات مثبتة؟", "شهادات، المنتج، وكيفاش تطلب."],
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

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-hashtag" style={{ color: "var(--cyan)" }}></i> الهاشتاغات: 3 مستويات لا
        مستوى واحد
      </h4>
      <div className="table-wrap" style={{ marginBottom: "2.4rem" }}>
        <table className="tech">
          <thead>
            <tr>
              <th>النوع</th>
              <th>الدور</th>
              <th>مثال</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["هاشتاغ عريض", "وصول واسع، منافسة عالية", "#تسويق"],
              ["هاشتاغ متوسط (Niche)", "توازن بين الوصول والدقة", "#تسويق_رقمي_المغرب"],
              ["هاشتاغ محدد جداً (Micro)", "منافسة قليلة، جمهور دقيق", "#كود_المغرب"],
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

      <div className="panel" data-accent="money" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-keyboard" style={{ color: "var(--money)" }}></i> الكابشن أداة بحث لا
          ديكور
        </h4>
        <p>
          المنصات كتقرا الكلمات فالكابشن باش تصنف الفيديو فنتائج البحث الداخلي. ضع الكلمة المفتاحية
          الأساسية فأول جملة من الكابشن مباشرة، لا وسط نص طويل بلا هدف.
        </p>
      </div>

      <div className="panel" data-accent="red">
        <h4>
          <i className="fas fa-palette" style={{ color: "var(--redline)" }}></i> الاتساق البصري
        </h4>
        <p>
          البروفايل كامل لازم يبان "نفس الحساب" من أول نظرة — نفس الألوان والخط فكل صور الكفر
          والتومبنيلات، هذا كيبني ثقة قبل ما يشوف الزائر ولا فيديو.
        </p>
      </div>
    </section>
  );
}
