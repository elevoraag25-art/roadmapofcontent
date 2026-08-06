export function Sheet06() {
  return (
    <section className="sheet" id="s06">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 06 / 21</span>
          <h3>مصنع الأفكار — مصفوفة المحتوى اللانهائية</h3>
          <p className="sheet-sub">
            لا تنتظر الإلهام. ادمج "الموضوع" مع "الهيكل" لتوليد عشرات الأفكار فوراً.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>موضوع × هيكل</b>
          <br />
          REV: <b>B — صفوف إضافية</b>
        </div>
      </div>

      <div className="table-wrap" style={{ marginBottom: "2.4rem" }}>
        <table className="tech">
          <thead>
            <tr>
              <th>الموضوع ⬇ \ الهيكل ➡</th>
              <th style={{ color: "var(--cyan)" }}>تدمير خرافة</th>
              <th style={{ color: "#f5c76a" }}>خطوات عملية</th>
              <th style={{ color: "var(--money)" }}>قصة نجاح</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>منتج (عناية بالبشرة)</th>
              <td>"علاش الصابون العادي كيدمر وجهك..."</td>
              <td>"3 خطوات لروتين مسائي كيصفي البشرة."</td>
              <td>"كيفاش تخلصت من الحبوب فـ 30 يوم بهاد المكون."</td>
            </tr>
            <tr>
              <th>خدمة (تصميم ويب)</th>
              <td>"موقع زوين بلا مبيعات هو مضيعة فلوس."</td>
              <td>"كيفاش تصمم صفحة هبوط كتحول الزوار لمشترين."</td>
              <td>"كيفاش ضاعفنا مبيعات هاد العميل بتبديل زر واحد."</td>
            </tr>
            <tr>
              <th>متجر COD</th>
              <td>"الشحن المجاني كيغرقك فالخسارة — وهادشي السبب."</td>
              <td>"كيفاش تأكد الطلبية فأقل من ساعتين وتقلل الإلغاء."</td>
              <td>"كيفاش رجعنا 40% من الطلبات الملغاة بمكالمة واحدة."</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="panel" data-accent="money">
        <h4>
          <i className="fas fa-plus" style={{ color: "var(--money)" }}></i> إضافة: 5 هياكل
          احتياطية عند نفاد الأفكار
        </h4>
        <div className="grid-3">
          <div className="paper">
            <h5>Listicle</h5>
            <p>"5 أخطاء كيديرها أصحاب [مجالك] بلا ما يعرفو."</p>
          </div>
          <div className="paper">
            <h5>Before / After</h5>
            <p>عرض بصري مباشر لنتيجة قبل وبعد استخدام المنتج/النظام.</p>
          </div>
          <div className="paper">
            <h5>POV</h5>
            <p>"POV: أنت عميل داخل على الموقع ديالك لأول مرة."</p>
          </div>
          <div className="paper">
            <h5>Day-in-the-life</h5>
            <p>يوم كامل خلف الكواليس — يبني الثقة أكثر من أي إعلان.</p>
          </div>
          <div className="paper">
            <h5>Reaction</h5>
            <p>رد فعلك على خطأ شائع أو ترند في السوق ديالك.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
