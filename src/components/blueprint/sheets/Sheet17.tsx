export function Sheet17() {
  return (
    <section className="sheet" id="s17">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 17 / 21</span>
          <h3>التوزيع والانتشار العضوي</h3>
          <p className="sheet-sub">
            فيديو واحد جيد يستاهل يتوزع فـ5 منصات بتعديلات صغيرة، لا فيديو واحد منسي فمنصة واحدة.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>1 فيديو × 5 منصات</b>
          <br />
          REV: <b>E — جديد</b>
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-tower-broadcast" style={{ color: "var(--cyan)" }}></i> قاعدة الفيديو
        الواحد × 5 منصات
      </h4>
      <div className="table-wrap" style={{ marginBottom: "2.4rem" }}>
        <table className="tech">
          <thead>
            <tr>
              <th>المنصة</th>
              <th>التعديل المطلوب</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["TikTok", "نص أقل، اعتماد أكبر على الصوت الرائج والبصري"],
              [
                "Instagram Reels",
                "كابشن أطول شوي + هاشتاغات مدروسة (3 مستويات من اللوحة 16)",
              ],
              [
                "YouTube Shorts",
                "عنوان واضح مكتوب داخل الفيديو نفسه، الناس كتبحث بزاف فيوتيوب",
              ],
              [
                "Snapchat Spotlight",
                "نفس الفيديو تقريباً بلا تعديل كبير، الأولوية للانتظام اليومي",
              ],
              [
                "Facebook Reels",
                "جمهور أكبر سناً، كابشن يشرح أكثر بدل الاعتماد الكامل على الفيديو",
              ],
            ].map(([a, b]) => (
              <tr key={a}>
                <th>{a}</th>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-arrow-trend-up" style={{ color: "var(--cyan)" }}></i> ركوب الترندات بلا
        خسارة الهوية
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-eye", "1. المراقبة اليومية", "راقب الأصوات والترندات الرائجة يومياً فصفحة الاستكشاف."],
          [
            "fa-circle-question",
            "2. سؤال الفلترة",
            "واش هاد الترند يقدر يحمل رسالتي بلا تكلّف؟",
          ],
          ["fa-ban", "3. حدود الهوية", "لا تجبر منتجك داخل ترند ما عندوش علاقة بمجالك."],
          [
            "fa-stopwatch",
            "4. نافذة الـ48 ساعة",
            "الأولوية للترندات اللي عمرها أقل من 48 ساعة، قبل ما تشبع وتفقد قوتها.",
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

      <div className="panel" data-accent="cyan">
        <h4>
          <i className="fas fa-recycle" style={{ color: "var(--cyan)" }}></i> إعادة التدوير الذكي
          (Content Recycling)
        </h4>
        <p>
          فكرة واحدة قوية = تسجيل طويل واحد (بودكاست، لايف، أو تصوير موسّع) يُقطّع بعده لـ5-8
          فيديوهات قصيرة، كل وحدة بخطاف مختلف من بنك الخطافات (اللوحة 11). هذا كيقلل وقت الإنتاج
          بشكل كبير مقارنة بتصوير فيديو منفصل لكل فكرة.
        </p>
      </div>
    </section>
  );
}
