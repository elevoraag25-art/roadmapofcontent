export function Sheet23() {
  return (
    <section className="sheet" id="s23">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <h3>كتالوج أشكال الفيديوهات — 12 قالباً جاهزاً</h3>
          <p className="sheet-sub">
            لا تبدأ من ورقة بيضاء. اختر الشكل المناسب للهدف، ثم املأه بمحتواك.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>شكل → هدف → نتيجة</b>
          <br />
          REV: <b>F</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-clapperboard" style={{ color: "var(--cyan)" }}></i> الكتالوج
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>الشكل</th>
                <th>الهدف الأساسي</th>
                <th>مثال سريع</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["الدرس السريع (Tutorial)", "وعي + حفظ", "«3 إعدادات تخلي الفيديو ديالك يبان أنظف»"],
                ["قبل / بعد", "إثبات", "لقطة الحساب قبل 30 يوم وبعدها"],
                ["الرأي المخالف (Contrarian)", "وصول + نقاش", "«النشر اليومي كيقتل الحساب ديالك — هاعلاش»"],
                ["تفكيك حالة (Case Study)", "ثقة", "كيف وصل عميل لـ100 طلب في 6 أسابيع"],
                ["خلف الكواليس", "قرب إنساني", "يوم تصوير كامل بلا فلترة"],
                ["الرد على تعليق", "تفاعل + أفكار مجانية", "سؤال متكرر يتحول لفيديو"],
                ["القائمة السريعة (Listicle)", "حفظ ومشاركة", "«5 أخطاء فالبروفايل»"],
                ["الخطأ الشائع", "وعي بالمشكلة", "«أغلب الناس كيديرو هادشي غلط»"],
                ["المقارنة (A vs B)", "قرار", "إعلانات مدفوعة ولا عضوي؟"],
                ["الاختبار الحي (Experiment)", "فضول", "«جربت أنشر 30 يوم بلا توقف، هاالنتيجة»"],
                ["شهادة عميل (UGC)", "تحويل", "عميل يحكي نتيجته بصوته"],
                ["العرض المباشر (Offer)", "بيع", "شرح العرض + دعوة صريحة للفعل"],
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

      <h4 style={{ marginBottom: "1.2rem" }}>كيف تختار الشكل؟</h4>
      <div className="grid-3" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-users", "هدف وصول", "الرأي المخالف · الخطأ الشائع · الاختبار الحي"],
          ["fa-handshake", "هدف ثقة", "تفكيك حالة · خلف الكواليس · شهادة عميل"],
          ["fa-sack-dollar", "هدف بيع", "العرض المباشر · المقارنة · قبل/بعد"],
        ].map(([icon, t, d]) => (
          <div className="paper" key={t}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--money)" }}></i> {t}
            </h5>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <div className="panel red">
        <h4>
          <i className="fas fa-rotate" style={{ color: "var(--redline)" }}></i> قاعدة التدوير
        </h4>
        <p>
          لا تنشر 5 فيديوهات بنفس الشكل في الأسبوع. وزّع: <b>2 وصول + 2 ثقة + 1 بيع</b> — هذا
          الإيقاع يحافظ على النمو وعلى الكاش في نفس الوقت.
        </p>
      </div>
    </section>
  );
}
