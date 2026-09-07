export function Sheet33() {
  return (
    <section className="sheet" id="s33">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 7 من 8</span>
          <h3>وتيرة النشر والتوسع الذكي</h3>
          <p className="sheet-sub">الجودة نسبية، وجمهورك هو لي كيحددها — ماشي أنت.</p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>كمية → جودة</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-sliders" style={{ color: "var(--cyan)" }}></i> أسلوب الأكورديون
        </h4>
        <p>
          فالبداية، انشر بكمية عالية باش تكتشف بسرعة آش جمهورك كيعتبر «جودة» — الجودة مفهوم نسبي
          كيحدده الجمهور بردود فعله، ماشي أنت بذوقك الشخصي. بمجرد ما تعرف الأنماط والمواضيع اللي
          كتخدم فعلاً، اضغط الأكورديون: قلل عدد المنشورات وزيد الجهد فكل قطعة.
        </p>
        <div className="quote">
          <b>الكمال هو عدو المنشور.</b> النشر المستمر أهم بزاف من انتظار النسخة المثالية اللي
          غاتبقى ماخارجاش أبداً. صحح وتعلم بعد كل نشرة، لا تنتظر الكمال قبل ما تبدا.
        </div>
      </div>

      <div className="panel red" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-arrows-up-to-line" style={{ color: "var(--redline)" }}></i> التوسع
          بمنصة واحدة فمرة
        </h4>
        <p>
          بمجرد ما توصل لوتيرة نشر ثابتة على منصتين-ثلاثة، اختر وحدة منهم وزيد فيها الجهد والحجم
          بشكل مكثف، والباقي خليه فوضع صيانة بسيطة (نفس أسلوب «عين ساورون» من الخطوة 5).
        </p>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>دراسة أفضل 10%</h4>
      <div className="tl">
        {[
          ["حدد", "كل شهر، حدد أفضل 10% من محتواك أداءً خلال آخر 30-90 يوم."],
          [
            "استخرج القاسم المشترك",
            "لا تحلل كل التفاصيل — دور على العنصر المشترك الوحيد أو الاثنين اللي تكررو بالضبط.",
          ],
          ["كرر وأعد", "كرر هاد العناصر بالضبط فمحتواك الجاي، وأعد نفس التحليل الشهر المقبل."],
        ].map(([t, d], i) => (
          <div className="tl-item" key={t}>
            <span className="tl-dot" style={{ background: "var(--money)" }}></span>
            <h5>
              <span className="time">STEP 0{i + 1}</span>
              {t}
            </h5>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
