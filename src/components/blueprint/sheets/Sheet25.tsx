export function Sheet25() {
  return (
    <section className="sheet" id="s25">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <h3>أنماط القمع والعروض البيعية</h3>
          <p className="sheet-sub">
            القمع ليس صفحة، هو مسار. والعرض ليس سعراً، هو معادلة قيمة يفهمها العميل في 10 ثوانٍ.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>ليد → عميل → تكرار</b>
          <br />
          REV: <b>F</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-filter" style={{ color: "var(--cyan)" }}></i> أنماط القمع الأربعة
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>النمط</th>
                <th>المسار</th>
                <th>الأنسب لـ</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["قمع التعليق (DM)", "فيديو → كلمة مفتاحية في التعليق → رسالة تلقائية → عرض", "الخدمات والمنتجات الرقمية"],
                ["قمع المغناطيس", "فيديو → صفحة هبوط → بريد/واتساب → تسلسل متابعة", "بناء قائمة طويلة الأمد"],
                ["قمع المكالمة", "محتوى → استمارة تأهيل → مكالمة → إغلاق", "العروض عالية القيمة"],
                ["قمع الشراء المباشر", "إعلان → صفحة منتج → دفع/COD", "التجارة الإلكترونية"],
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

      <h4 style={{ marginBottom: "1.2rem" }}>تشريح العرض الذي لا يُرفض</h4>
      <div className="grid-4" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-gem", "النتيجة الحلم", "ماذا يربح بالضبط، بصيغة قابلة للقياس."],
          ["fa-shield", "تقليل المخاطرة", "ضمان، دفع على مراحل، أو نتيجة أولاً."],
          ["fa-clock", "تقليل الزمن", "كم يوماً حتى أول نتيجة ملموسة؟"],
          ["fa-gift", "المكدّسات (Stack)", "بونصات تحل عوائق التنفيذ لا مجرد إضافات."],
        ].map(([icon, t, d]) => (
          <div className="paper" key={t}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--money)" }}></i> {t}
            </h5>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-stairs" style={{ color: "var(--cyan)" }}></i> سلّم العروض
        </h4>
        <div className="tl">
          {[
            ["عرض مجاني (Lead Magnet)", "قالب، قائمة تحقق، أو مصغّر فيديو — مقابل وسيلة تواصل."],
            ["عرض منخفض العائق", "منتج صغير أو جلسة تشخيص — يحوّل المتابع لمشترٍ لأول مرة."],
            ["العرض الأساسي", "الخدمة/المنتج الرئيسي حيث يأتي أغلب الربح."],
            ["عرض التوسعة", "اشتراك، متابعة شهرية، أو DFY — يرفع القيمة مدى الحياة."],
          ].map(([t, d]) => (
            <div className="tl-item" key={t}>
              <b>{t}</b>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="panel red">
        <h4>
          <i className="fas fa-triangle-exclamation" style={{ color: "var(--redline)" }}></i> أخطاء
          تقتل التحويل
        </h4>
        <ul>
          <li>قمع بثلاث خطوات زائدة — كل خطوة تخسر جزءاً من الليدز.</li>
          <li>عرض بلا سبب واضح للتحرك الآن.</li>
          <li>الطلب من بارد جداً أن يشتري مباشرة بلا أي إثبات.</li>
          <li>عدم متابعة من لم يشترِ — أغلب البيع يقع في المتابعة لا في اللقاء الأول.</li>
        </ul>
      </div>
    </section>
  );
}
