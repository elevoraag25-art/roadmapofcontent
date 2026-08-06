export function Sheet20() {
  return (
    <section className="sheet" id="s20">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 20 / 21</span>
          <h3>أساسيات SEO للموقع ومحرك البحث</h3>
          <p className="sheet-sub">
            SEO لا يُدفع مقابل الظهور، يُكتسب بالاستحقاق — بطيء فالبداية، لكنه يشتغل 24/7 بلا تكلفة
            مستمرة.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>2 → 6 أشهر</b>
          <br />
          REV: <b>E — جديد</b>
        </div>
      </div>

      <div className="panel" data-accent="cyan" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-code-compare" style={{ color: "var(--cyan)" }}></i> الفرق الجوهري عن
          السوشيال
        </h4>
        <p>
          SEO يشتغل بثقة متراكمة عند Google، النتائج بطيئة فالبداية (شهرين إلى 6 أشهر تقريباً)، لكن
          الزيارة تستمر بلا حاجة لنشر يومي، عكس السوشيال اللي كيتوقف أثره بمجرد توقف النشر.
        </p>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-key" style={{ color: "var(--cyan)" }}></i> البحث عن الكلمات المفتاحية
        (Keyword Research)
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          [
            "fa-user",
            "1. ابدأ من العميل لا من المنتج",
            "ابحث \"شنو كيكتب عميلك المحتمل فقوقل\"، لا \"شنو كنبيع أنا\".",
          ],
          [
            "fa-wand-magic-sparkles",
            "2. Autocomplete كأداة مجانية",
            "استعمل اقتراحات البحث التلقائي فقوقل نفسه كأداة بسيطة بلا تكلفة.",
          ],
          [
            "fa-arrows-left-right",
            "3. الكلمات الطويلة (Long-tail)",
            "افضّل الكلمات المفتاحية الطويلة والمحددة — منافسة أقل بكثير من الكلمات العامة.",
          ],
        ].map(([icon, title, desc]) => (
          <div className="tl-item" key={title}>
            <span className="tl-dot" style={{ background: "var(--cyan)" }}></span>
            <h5>
              <i className={`fas ${icon}`}></i> {title}
            </h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-clipboard-check" style={{ color: "var(--cyan)" }}></i> قائمة تحقق SEO
        على الصفحة (On-Page)
      </h4>
      <div className="check-grid" style={{ marginBottom: "2.4rem" }}>
        {[
          ["عنوان الصفحة (Title Tag)؟", "يحتوي الكلمة المفتاحية الأساسية."],
          ["عنوان H1 واحد واضح فالصفحة؟", "عنوان رئيسي واحد فقط، لا أكثر."],
          ["سرعة تحميل أقل من 3 ثواني؟", "الصور المضغوطة أول سبب للبطء."],
          ["الموقع متجاوب بالكامل مع الهاتف؟", "أغلب الزيارات تأتي من الهاتف."],
          ["أسماء ملفات ووصف (Alt Text) وصفي؟", "لا \"IMG123\" — وصف حقيقي للصورة."],
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

      <div className="panel" data-accent="money" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-link" style={{ color: "var(--money)" }}></i> بناء السلطة الرقمية
          (Backlinks ببساطة)
        </h4>
        <p>
          كل موقع أو حساب موثوق يشير لموقعك = صوت ثقة إضافي عند Google. طرق بسيطة: مقال ضيف فمدونة
          أو موقع بمجالك، التسجيل فأدلة أعمال محلية موثوقة (مهم بزاف لو عندك متجر COD)، مشاركة رابط
          موقعك فمنصات مهنية أو منتديات مختصة.
        </p>
      </div>

      <div className="panel" data-accent="red">
        <h4>
          <i className="fas fa-location-dot" style={{ color: "var(--redline)" }}></i> Google Business
          Profile
        </h4>
        <p>
          ملف Google Business مجاني بالكامل، مهم جداً لو عندك نشاط بحضور محلي أو خدمة توصيل — كيظهر
          فخرائط قوقل والبحث المحلي بلا أي تكلفة إعلانية.
        </p>
      </div>
    </section>
  );
}
