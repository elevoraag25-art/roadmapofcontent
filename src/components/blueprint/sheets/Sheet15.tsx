export function Sheet15() {
  return (
    <section className="sheet" id="s15">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 15 / 21</span>
          <h3>خارطة الترافيك العضوي الشاملة</h3>
          <p className="sheet-sub">
            الفيرال محتوى واحد قد يصادف. الترافيك العضوي نظام يضمن تدفقاً مستمراً بلا اعتماد على
            الحظ.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>3 قنوات</b>
          <br />
          REV: <b>E — جديد</b>
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-gauge-high" style={{ color: "var(--cyan)" }}></i> 3 محاور، 3 سرعات
      </h4>
      <div className="table-wrap" style={{ marginBottom: "2.4rem" }}>
        <table className="tech">
          <thead>
            <tr>
              <th>القناة</th>
              <th>سرعة النتيجة</th>
              <th>عمر الأثر</th>
              <th>الجهد المطلوب</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "سوشيال ميديا قصيرة",
                "سريعة (أيام)",
                "قصير، يختفي بسرعة",
                "نشر يومي/أسبوعي مستمر",
              ],
              [
                "يوتيوب (محتوى طويل)",
                "متوسطة (أسابيع-أشهر)",
                "متوسط-طويل، يستمر يجيب مشاهدات لسنة كاملة",
                "إنتاج أسبوعي أثقل",
              ],
              [
                "SEO الموقع (محرك البحث)",
                "بطيئة (أشهر)",
                "طويل جداً، يجيب زوار لسنين بلا نشر جديد",
                "إعداد أولي كبير، صيانة قليلة بعده",
              ],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <th>{a}</th>
                <td>{b}</td>
                <td>{c}</td>
                <td>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-diagram-project" style={{ color: "var(--cyan)" }}></i> كيف تتغذى
        اللوحات الجديدة من بعضها
      </h4>
      <div className="grid-3" style={{ marginBottom: "2.4rem" }}>
        {[
          [
            "fa-users",
            "النمو الاجتماعي (16-18)",
            "يغذي مباشرة مرحلة TOFU من قمع البيع (اللوحة 05).",
          ],
          [
            "fa-youtube",
            "محرك يوتيوب (19)",
            "يبني سلطة وثقة طويلة المدى، ويفتح باباً لإعلانات يوتيوب مستقبلاً.",
          ],
          [
            "fa-magnifying-glass",
            "SEO الموقع (20)",
            "يشتغل 24/7 بلا تكلفة مستمرة، مكمّل لا بديل عن السوشيال.",
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

      <div className="panel" data-accent="cyan">
        <h4>
          <i className="fas fa-scale-balanced" style={{ color: "var(--cyan)" }}></i> القاعدة الذهبية
        </h4>
        <p>
          القناة الأسرع تبيع اليوم، القناة الأبطأ تبيع لسنين جاية بلا ما تلمسها. لا تختار واحدة،
          وزّع جهدك بأوزان مختلفة حسب مرحلة مشروعك — مشروع جديد يركز 70% سوشيال/30% الباقي، مشروع
          عمرو سنة يوازن أكثر بين الثلاثة.
        </p>
      </div>
    </section>
  );
}
