export function Sheet19() {
  return (
    <section className="sheet" id="s19">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 19 / 21</span>
          <h3>محرك يوتيوب العضوي — من Shorts إلى المحتوى الطويل</h3>
          <p className="sheet-sub">
            يوتيوب موتور بحث قبل ما يكون منصة فيديو — المحتوى فيه عمر أطول بزاف من أي منصة قصيرة
            أخرى.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>عمر طويل</b>
          <br />
          REV: <b>E — جديد</b>
        </div>
      </div>

      <div className="panel" data-accent="cyan" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-magnifying-glass" style={{ color: "var(--cyan)" }}></i> لماذا يوتيوب
          مختلف
        </h4>
        <p>
          يوتيوب = محرك بحث (ثاني أكبر محرك بحث فالعالم بعد Google نفسه) + نظام اقتراحات. فيديو
          منشور اليوم ممكن يجيب مشاهدات جديدة بعد سنة كاملة، عكس المحتوى القصير اللي كيموت فأيام.
        </p>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-filter" style={{ color: "var(--cyan)" }}></i> القمع اليوتيوبي: Shorts →
        طويل → قناة
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          [
            "fa-bolt",
            "1. Shorts",
            "تجيب مشاهدين جدد بسرعة، نفس منطق اللوحات 01-11.",
          ],
          [
            "fa-video",
            "2. فيديو متوسط (5-10 دقايق)",
            "يبني ثقة وعمق أكبر من القصير.",
          ],
          [
            "fa-list",
            "3. قناة/بلاي ليست كاملة",
            "تحوّل المشاهد العابر لمتابع دائم يرجع بمبادرته.",
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
        <i className="fas fa-image" style={{ color: "var(--cyan)" }}></i> SEO العنوان والوصف
        والتومبنيل
      </h4>
      <div className="table-wrap" style={{ marginBottom: "2.4rem" }}>
        <table className="tech">
          <thead>
            <tr>
              <th>العنصر</th>
              <th>القاعدة</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "العنوان",
                "كلمة مفتاحية حقيقية يبحث عليها الناس فعلياً + لمسة فضول، لا عنوان عام غامض",
              ],
              [
                "التومبنيل",
                "وجه بتعبير واضح + نص قصير جداً (3-4 كلمات) + تباين لوني قوي",
              ],
              [
                "الوصف",
                "أول سطرين يحتويان الكلمة المفتاحية لأنها اللي كتبان فنتائج البحث",
              ],
              [
                "البلاي ليست",
                "نظّم الفيديوهات فمجموعات موضوعية، يوتيوب كيقترح فيديوك التالي تلقائياً للمشاهد",
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

      <div className="panel" data-accent="money">
        <h4>
          <i className="fas fa-users-rectangle" style={{ color: "var(--money)" }}></i> تبويب
          Community
        </h4>
        <p>
          استعمله لنشر استطلاعات أو تحديثات بسيطة بين الفيديوهات الكاملة — كيخلي القناة نشيطة بعين
          الخوارزمية بلا الحاجة لإنتاج فيديو كامل كل مرة.
        </p>
      </div>
    </section>
  );
}
