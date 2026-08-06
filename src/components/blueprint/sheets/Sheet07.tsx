export function Sheet07() {
  return (
    <section className="sheet" id="s07">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 07 / 14</span>
          <h3>بروتوكول التنفيذ الأسبوعي (The Factory Protocol)</h3>
          <p className="sheet-sub">
            صناعة المحتوى يومياً تؤدي للاحتراق (Burnout). اعمل بنظام الدفعات (Batching) بدل
            الارتجال.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>أسبوع واحد</b>
          <br />
          REV: <b>B — + شجرة قرار</b>
        </div>
      </div>

      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        <div className="tl-item">
          <span className="tl-dot" style={{ background: "var(--cyan)" }}></span>
          <span className="time">يوم 1 — ساعتين</span>
          <h5>
            <i className="fas fa-search"></i> البحث والأفكار
          </h5>
          <p>
            ادخل لحسابات المنافسين الأجانب والمحليين. انسخ الهياكل والخطافات الناجحة وأعد
            صياغتها لمجالك — "اسرق كالفنان"، لا تنسخ المحتوى نفسه.
          </p>
        </div>
        <div className="tl-item">
          <span className="tl-dot" style={{ background: "#f5c76a" }}></span>
          <span className="time">يوم 2 — ساعتين</span>
          <h5>
            <i className="fas fa-keyboard"></i> كتابة السكريبتات بالجملة
          </h5>
          <p>اكتب 10-15 سكريبت دفعة واحدة باستخدام قوالب PAS، HSO، و AIDA.</p>
        </div>
        <div className="tl-item">
          <span className="tl-dot" style={{ background: "var(--redline)" }}></span>
          <span className="time">يوم 3 — 3 ساعات</span>
          <h5>
            <i className="fas fa-video"></i> التصوير بالجملة
          </h5>
          <p>
            صوّر كل الفيديوهات في جلسة واحدة متواصلة. غيّر القميص ومكان الجلوس فقط بين كل
            فيديو.
          </p>
        </div>
        <div className="tl-item">
          <span className="tl-dot" style={{ background: "var(--money)" }}></span>
          <span className="time">يوم 4</span>
          <h5>
            <i className="fas fa-cut"></i> المونتاج والجدولة
          </h5>
          <p>قص الدهون، أضف نصوصاً، وجدولها للنشر اليومي عبر أداة أوتوماتيكية.</p>
        </div>
      </div>

      <div className="panel" data-accent="red">
        <h4>
          <i className="fas fa-code-branch" style={{ color: "var(--redline)" }}></i> إضافة:
          شجرة القرار — تحليل بعد 48 ساعة
        </h4>
        <p style={{ marginBottom: "1.2rem" }}>
          النشر بلا تحليل مضيعة للدفعة كاملها. بعد كل فيديو، اسأل سؤالاً واحداً وطبّق القرار
          مباشرة — بنفس منطق test → scale → kill الذي تستخدمه في الإعلانات:
        </p>
        <div className="grid-2">
          <div className="paper">
            <h5>
              <i className="fas fa-arrow-trend-up" style={{ color: "#1f8f4f" }}></i> نسبة
              الاحتفاظ &gt; 50%
            </h5>
            <p>
              <strong>القرار:</strong> اصنع 5 نسخ مشابهة من نفس الخطاف/الهيكل فوراً في الدفعة
              القادمة. هذا هو "الفائز" — كرّره قبل أن يبرد.
            </p>
          </div>
          <div className="paper">
            <h5>
              <i className="fas fa-arrow-trend-down" style={{ color: "#c0392b" }}></i> نسبة
              الاحتفاظ &lt; 20%
            </h5>
            <p>
              <strong>القرار:</strong> اقتل الفكرة نهائياً ولا تكررها بصياغة مختلفة. المشكلة
              غالباً في الخطاف الأول لا في المحتوى.
            </p>
          </div>
        </div>
      </div>

      <div className="panel" style={{ marginTop: "2.4rem" }}>
        <h4>
          <i className="fas fa-calendar-week" style={{ color: "var(--cyan)" }}></i> تقويم
          المحتوى الأسبوعي — ترجمة نسبة TOFU/MOFU/BOFU لأرقام فعلية
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>الفئة</th>
                <th>النسبة</th>
                <th>العدد لو نشرت 7 فيديوهات/أسبوع</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["TOFU (وعي/فيروسي)", "60%", "4 فيديوهات"],
                ["MOFU (توليد Leads)", "20%", "1-2 فيديو"],
                ["BOFU (بيع مباشر/عرض)", "20%", "1 فيديو"],
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

      <div className="panel" data-accent="cyan" style={{ marginTop: "1.6rem" }}>
        <p>
          إذا كنت تنشر أقل من 7 أسبوعياً، حافظ على نفس النسبة التقريبية 60/20/20 مهما كان
          العدد الكلي — النسبة أهم من الرقم المطلق.
        </p>
      </div>
    </section>
  );
}
