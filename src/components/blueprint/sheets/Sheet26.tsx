export function Sheet26() {
  return (
    <section className="sheet" id="s26">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <h3>خريطة قنوات وطرق التسويق</h3>
          <p className="sheet-sub">
            كل قناة لها تكلفة، سرعة، وعمر افتراضي مختلف. اختر مزيجاً لا قناة واحدة.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>قناة → تدفق → نظام</b>
          <br />
          REV: <b>F</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-map" style={{ color: "var(--cyan)" }}></i> مقارنة القنوات
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>القناة</th>
                <th>سرعة النتيجة</th>
                <th>التكلفة</th>
                <th>عمر الأثر</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["فيديو قصير عضوي", "متوسطة", "وقت فقط", "أيام — أسابيع"],
                ["يوتيوب طويل", "بطيئة", "وقت مرتفع", "سنوات"],
                ["SEO الموقع", "بطيئة جداً", "وقت + محتوى", "سنوات"],
                ["إعلانات مدفوعة", "فورية", "نقدية مباشرة", "ينتهي بتوقف الصرف"],
                ["البريد/واتساب", "فورية", "منخفضة جداً", "دائم (تملكه)"],
                ["التعاون والشراكات", "سريعة", "وقت وتفاوض", "متوسط"],
                ["المجتمعات والمنتديات", "متوسطة", "وقت", "متوسط"],
              ].map(([a, b, c, d]) => (
                <tr key={a}>
                  <th>{a}</th>
                  <td>{b}</td>
                  <td>{c}</td>
                  <td>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid-3" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-bolt", "قناة سرعة", "إعلانات أو تعاون — تجلب نتيجة اليوم، لكنها تتوقف بتوقفك."],
          ["fa-seedling", "قناة تراكم", "يوتيوب وSEO — بطيئة الآن، لكنها تشتغل وأنت نائم."],
          ["fa-lock", "قناة ملكية", "قائمة بريد/واتساب — الجمهور الوحيد الذي لا تملكه منصة."],
        ].map(([icon, t, d]) => (
          <div className="paper" key={t}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--money)" }}></i> {t}
            </h5>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <div className="panel">
        <h4>
          <i className="fas fa-diagram-project" style={{ color: "var(--cyan)" }}></i> قاعدة
          المزيج 1-1-1
        </h4>
        <p>
          في أي وقت: <b>قناة سرعة واحدة + قناة تراكم واحدة + قناة ملكية واحدة</b>. أكثر من ذلك
          يشتّتك، وأقل منه يجعل دخلك رهينة خوارزمية واحدة.
        </p>
      </div>
    </section>
  );
}
