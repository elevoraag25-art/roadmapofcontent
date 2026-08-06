export function Sheet02() {
  return (
    <section className="sheet" id="s02">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 02 / 14</span>
          <h3>ثالوث الهندسة الفيروسية — منهجية نبيل محبوب</h3>
          <p className="sheet-sub">
            ثلاث محطات متتالية: اصطياد الانتباه، منع الهروب، ثم تحويل المشاهدة إلى مشاركة.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>0 → 30 ثانية</b>
          <br />
          REV: <b>A</b>
        </div>
      </div>

      <h4 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
        <span className="badge red">01</span>&nbsp; الخطاف (The Hook) — أول 3 ثوانٍ
      </h4>
      <div className="grid-3" style={{ marginBottom: "2.4rem" }}>
        <div className="panel">
          <h4>👁️ الخطاف البصري</h4>
          <p style={{ marginBottom: ".6rem" }}>اكسر نمط السكرول بحركة مفاجئة:</p>
          <ul style={{ paddingRight: "1.1rem" }}>
            <li>تغيير زاوية الكاميرا بسرعة</li>
            <li>رمي شيء نحو العدسة</li>
            <li>نص ضخم وملون يظهر فجأة</li>
          </ul>
        </div>
        <div className="panel">
          <h4>👂 الخطاف السمعي</h4>
          <p style={{ marginBottom: ".6rem" }}>استخدم المؤثرات لإيقاظ الدماغ:</p>
          <ul style={{ paddingRight: "1.1rem" }}>
            <li>صوت Whoosh عند ظهور النص</li>
            <li>صوت دقات قلب أو إنذار</li>
            <li>البدء بنبرة صوت عالية أو صراخ خفيف</li>
          </ul>
        </div>
        <div className="panel" data-accent="red">
          <h4>🧠 الخطاف النفسي (الكلمات)</h4>
          <ul style={{ paddingRight: "1.1rem" }}>
            <li>
              <strong>العدو المشترك:</strong> "أكبر كذبة قالوها لك مسوقي العقارات..."
            </li>
            <li>
              <strong>الخوف من الخسارة:</strong> "هاد الغلطة كتخلي الريلز ديالك يموت..."
            </li>
            <li>
              <strong>الفضول المفرط:</strong> "السر لي خلى هاد المنتج يتباع بـ 1M$..."
            </li>
          </ul>
        </div>
      </div>

      <h4 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
        <span className="badge cyan">02</span>&nbsp; الاحتفاظ (Retention)
      </h4>
      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="panel">
          <h4>الحلقة المفتوحة (Open Loop)</h4>
          <p>وعد في البداية لا يُحلّ إلا في النهاية.</p>
          <div className="quote">
            "سأخبرك بالسر الثالث في نهاية الفيديو، لأنه الأهم" —{" "}
            <b>وفي الأخير غنوريك أكبر خطأ...</b>
          </div>
        </div>
        <div className="panel">
          <h4>قاعدة الـ 3 ثواني (Jump Cuts)</h4>
          <p>
            اقطع الفيديو بحيث لا "يتنفس" المشاهد. غيّر الزاوية (B-roll، تقريب الصورة، ظهور
            نص) كل 3 ثوانٍ لإنتاج الدوبامين والاستمرارية.
          </p>
        </div>
      </div>

      <h4 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
        <span className="badge money">03</span>&nbsp; المشاعر (Emotion = Share)
      </h4>
      <div className="panel">
        <p style={{ marginBottom: "1rem" }}>
          الناس لا تشارك المحتوى لأنه "جيد" — تشاركه لأنه يعبّر عنها.
        </p>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: ".6rem", marginBottom: "1.2rem" }}
        >
          <span className="badge cyan">😂 الضحك — الترفيه</span>
          <span className="badge money">🚀 الإلهام — قصص النجاح</span>
          <span className="badge red">😡 الغضب — الظلم / الأخطاء</span>
          <span className="badge cyan">🤯 الصدمة — معلومة جديدة</span>
          <span className="badge money">😱 الخوف — الخسارة المحتملة</span>
        </div>
        <div className="quote">
          <b>تطبيق الإلهام (كما قال نبيل):</b> "كيفاش بديت من الزيرو، من حاسوب قديم، لشركة
          خدمات تسويق... هاد القصة كتعطي إحساس فخر، والشخص كيبارطاجيها مع صاحبو لي باغي يبدا."
        </div>
      </div>
    </section>
  );
}
