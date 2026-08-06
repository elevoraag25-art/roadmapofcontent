export function Sheet21() {
  return (
    <section className="sheet" id="s21">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 21 / 21</span>
          <h3>الملحق — صندوق الأدوات ومسرد المصطلحات</h3>
          <p className="sheet-sub">
            كل الاختصارات والأدوات المذكورة عبر اللوحات، في مكان واحد للرجوع السريع.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>مرجع سريع</b>
          <br />
          REV: <b>D — جديد</b>
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-toolbox" style={{ color: "var(--cyan)" }}></i> صندوق الأدوات
      </h4>
      <div className="grid-4" style={{ marginBottom: "2.4rem" }}>
        {[
          [
            "fa-scissors",
            "التصوير والمونتاج",
            "تطبيقات مونتاج الهاتف السريعة (CapCut أو ما يعادلها) لقص اللقطات وإضافة النصوص والمؤثرات الصوتية بسرعة دفعة واحدة.",
          ],
          [
            "fa-palette",
            "التصميم والنصوص",
            "أدوات تصميم بسيطة (مثل Canva) لصنع صور الغلاف والبونصات المرئية.",
          ],
          [
            "fa-robot",
            "الأتمتة والقمع",
            "ManyChat أو ما يعادلها للرد التلقائي على الكلمات المفتاحية في التعليقات.",
          ],
          [
            "fa-bullhorn",
            "الإعلانات المدفوعة",
            "مدير إعلانات كل منصة (Meta Ads Manager / TikTok Ads Manager) لتشغيل اختبار الخطافات من اللوحة 10.",
          ],
        ].map(([icon, title, desc]) => (
          <div className="paper" key={title}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--cyan)" }}></i> {title}
            </h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="panel">
        <h4>
          <i className="fas fa-book" style={{ color: "var(--money)" }}></i> مسرد المصطلحات
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>المصطلح</th>
                <th>المعنى بإيجاز</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PAS", "مشكلة – تهييج – حل (قالب سكريبت بيعي)"],
                ["HSO", "خطاف – قصة – عرض (قالب سكريبت للعلامة الشخصية)"],
                ["AIDA", "انتباه – اهتمام – رغبة – فعل"],
                ["TOFU / MOFU / BOFU", "أعلى/وسط/أسفل قمع المبيعات (وعي / جمع ليدز / بيع)"],
                ["CPM", "تكلفة الوصول لكل ألف مشاهدة"],
                ["CTR", "نسبة النقر على الإعلان"],
                ["Hook Rate", "نسبة من شاهدوا أول 3 ثوانٍ فقط"],
                ["Retention", "نسبة إكمال مشاهدة الفيديو"],
                ["Share Rate", "نسبة مرات الإرسال مقارنة بعدد المشاهدات"],
                ["UGC", "محتوى ينتجه المستخدم/العميل بنفسه (لا العلامة التجارية)"],
                ["COD", "الدفع عند الاستلام"],
                ["DFY", "خدمة كاملة تُنجَز نيابة عن العميل (Done-For-You)"],
              ].map(([a, b]) => (
                <tr key={a}>
                  <th>{a}</th>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
