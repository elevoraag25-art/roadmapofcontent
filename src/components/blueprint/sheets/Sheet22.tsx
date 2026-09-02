export function Sheet22() {
  return (
    <section className="sheet" id="s22">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <h3>العلامة والتموضع — من أنت في ذهن الجمهور؟</h3>
          <p className="sheet-sub">
            المحتوى بلا تموضع = ضجيج. التموضع هو الجملة التي يقولها الناس عنك حين لا تكون
            موجوداً في الغرفة.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>هوية → ثقة → بيع</b>
          <br />
          REV: <b>F</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-bullseye" style={{ color: "var(--cyan)" }}></i> معادلة التموضع
        </h4>
        <p>
          <b>التموضع = (لِمَن) + (المشكلة) + (الطريقة المختلفة) + (النتيجة).</b> أي جملة تعريف
          لا تحتوي هذه العناصر الأربعة هي جملة عامة يمكن لأي منافس أن يقولها.
        </p>
        <div className="quote">
          «أساعد <b>أصحاب المتاجر الصغيرة</b> على <b>وقف نزيف الإعلانات</b> عبر{" "}
          <b>نظام محتوى عضوي يومي</b> حتى يصلوا لـ<b>أول 100 طلب شهرياً</b>.»
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>الأعمدة الأربعة للعلامة الشخصية</h4>
      <div className="grid-4" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-user-tie", "الشخصية", "نبرتك، لغتك، حسّ الفكاهة أو الجدية — ما يجعل المتابع يعرف أنه أنت قبل أن يرى الاسم."],
          ["fa-microscope", "الخبرة", "التخصص الضيق الذي تُكرّره حتى يصير اسمك مرادفاً له."],
          ["fa-eye", "الرؤية", "الرأي الذي تدافع عنه، حتى لو خالف السائد في مجالك."],
          ["fa-repeat", "الاتساق", "نفس الرسالة، نفس الهوية البصرية، نفس الإيقاع — عبر كل منصة."],
        ].map(([icon, t, d]) => (
          <div className="paper" key={t}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--cyan)" }}></i> {t}
            </h5>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-table-columns" style={{ color: "var(--money)" }}></i> مصفوفة
          التمايز
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>المحور</th>
                <th>السائد في مجالك</th>
                <th>موقعك المقترح</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["الأسلوب", "نصائح عامة ومحفّزة", "أنظمة وأرقام قابلة للتنفيذ اليوم"],
                ["الشكل", "كلام أمام الكاميرا فقط", "شاشة + تنفيذ حي + قبل/بعد"],
                ["الجمهور", "الجميع", "شريحة واحدة محددة بدقة"],
                ["الإثبات", "وعود", "دراسات حالة ولقطات نتائج حقيقية"],
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

      <div className="panel red">
        <h4>
          <i className="fas fa-triangle-exclamation" style={{ color: "var(--redline)" }}></i> قصة
          الأصل — بصيغة قصيرة
        </h4>
        <p>
          كل علامة تحتاج قصة تُروى في 30 ثانية: <b>من أين بدأت → ما الذي كسرك → ما الذي اكتشفته
          → لماذا تعلّمه الآن</b>. اكتبها مرة واحدة، ثم كرّرها بصيغ مختلفة عبر محتواك — الجمهور
          لا يملّ من قصتك، هو فقط لم يسمعها بعد.
        </p>
      </div>
    </section>
  );
}
