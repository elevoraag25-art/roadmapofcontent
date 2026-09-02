export function Sheet24() {
  return (
    <section className="sheet" id="s24">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <h3>محرك كتابة المحتوى الإعلاني (Copywriting Engine)</h3>
          <p className="sheet-sub">
            نفس المنتج، نفس الجمهور، نص مختلف = نتيجة مختلفة تماماً. الكتابة هي أرخص رافعة عندك.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>كلمة → نقرة → بيع</b>
          <br />
          REV: <b>F</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-pen-nib" style={{ color: "var(--cyan)" }}></i> ترتيب الكتابة الصحيح
        </h4>
        <div className="tl">
          {[
            ["ابدأ بالوعي لا بالمنتج", "اكتب أولاً للمستوى الذهني للقارئ (واعٍ بالمشكلة؟ بالحل؟ بك؟)."],
            ["اكتب الوعد قبل التفاصيل", "الجملة الأولى تبيع الجملة الثانية، لا أكثر."],
            ["برهن فوراً", "رقم، لقطة، شهادة — قبل أي كلام عن المميزات."],
            ["أزل الاحتكاك", "سعر واضح، ضمان، خطوة تالية واحدة فقط."],
          ].map(([t, d]) => (
            <div className="tl-item" key={t}>
              <b>{t}</b>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-layer-group" style={{ color: "var(--money)" }}></i> قوالب النصوص
          الأساسية
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>القالب</th>
                <th>البنية</th>
                <th>الأنسب لـ</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PAS", "مشكلة → تهييج → حل", "إعلانات الاستجابة المباشرة"],
                ["AIDA", "انتباه → اهتمام → رغبة → فعل", "صفحات الهبوط والفيديو الطويل"],
                ["HSO", "خطاف → قصة → عرض", "العلامة الشخصية والقصص"],
                ["4Ps", "وعد → صورة → إثبات → دفع", "العروض عالية القيمة"],
                ["FAB", "ميزة → فائدة → نتيجة", "شرح المنتج التقني"],
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

      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="paper">
          <h5>
            <i className="fas fa-check" style={{ color: "var(--cyan)" }}></i> افعل
          </h5>
          <ul>
            <li>جمل قصيرة، فعل واحد لكل جملة.</li>
            <li>لغة الجمهور الحقيقية (الدارجة إن كان جمهورك يستعملها).</li>
            <li>أرقام محددة بدل «كثير» و«سريع».</li>
            <li>دعوة فعل واحدة صريحة.</li>
          </ul>
        </div>
        <div className="paper">
          <h5>
            <i className="fas fa-xmark" style={{ color: "var(--redline)" }}></i> تجنّب
          </h5>
          <ul>
            <li>مقدمات طويلة قبل الوعد.</li>
            <li>مصطلحات داخلية لا يفهمها العميل.</li>
            <li>ثلاث دعوات فعل في نص واحد.</li>
            <li>مبالغات بلا إثبات — تقتل الثقة فوراً.</li>
          </ul>
        </div>
      </div>

      <div className="panel red">
        <h4>
          <i className="fas fa-flask" style={{ color: "var(--redline)" }}></i> بروتوكول الاختبار
        </h4>
        <p>
          غيّر <b>عنصراً واحداً</b> في كل اختبار (الخطاف، الوعد، أو دعوة الفعل). شغّل 3 نسخ بنفس
          الميزانية، واحكم بعد 1000 ظهور على الأقل — أي حكم قبل ذلك هو تخمين.
        </p>
      </div>
    </section>
  );
}
