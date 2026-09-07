export function Sheet34() {
  return (
    <section className="sheet" id="s34">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 8 من 8</span>
          <h3>الشلال والاستدامة</h3>
          <p className="sheet-sub">
            فكرة واحدة قوية تتحول لعشرات الأصول، وعلامتك خصها تعيش لسنين لا لأسابيع.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>أصل واحد → عشرات</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-water" style={{ color: "var(--cyan)" }}></i> منهج الشلال
        </h4>
        <p>
          هاد المنهج كيعمّق فكرة «إعادة التدوير الذكي» اللي شفناها فدرس التوزيع، لكن بتفصيل أكبر
          خاص بالمحتوى الطويل الشخصي. من فيديو طويل واحد، تقدر تستخرج: كليبات قصيرة، اقتباسات
          مكتوبة، منشور طويل مبني على النص الكامل، كاروسيل بشرائح (أول شريحتين = نفس خطاف الفيديو
          معاد صياغته)، وصور ثابتة مقتطعة من الفيديو.
        </p>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-table-list" style={{ color: "var(--cyan)" }}></i> جدول الشلال
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>من فيديو طويل واحد، تستخرج</th>
                <th>العدد التقريبي</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["كليبات قصيرة (TikTok/Reels/Shorts)", "3-5"],
                ["اقتباسات مكتوبة قصيرة", "3-4"],
                ["منشور LinkedIn/فيسبوك مبني على النص", "1-2"],
                ["كاروسيل إنستغرام", "1"],
                ["صور ثابتة للمنشورات", "2-3"],
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

      <div className="panel money" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-chart-pie" style={{ color: "var(--money)" }}></i> قياس التحويل لا
          المشاهدات فقط
        </h4>
        <p>
          جمهور صغير مرتبط بيك حقيقياً أقوى بزاف من جمهور كبير بلا اهتمام فعلي. تتبع: واش كيشريو؟
          واش كيتواصلو معاك؟ واش كيحجزو استشارة؟ ماشي غير عدد اللايكات والمشاهدات.
        </p>
      </div>

      <div className="panel red">
        <h4>
          <i className="fas fa-battery-three-quarters" style={{ color: "var(--redline)" }}></i>{" "}
          الاستدامة
        </h4>
        <p>
          ابني آلة محتوى بسيطة تقدر تحافظ عليها لأشهر، ماشي وتيرة مكثفة أسبوع وحد وبعدها تحرق
          وتتوقف. بمجرد ما يتاح ليك، ابدا فوّض التنفيذ لفريق ولو صغير (مصور أو مونتير واحد كافي
          فالبداية) — دورك الأساسي هو الظهور والفكرة، ماشي كل خطوة تقنية.
        </p>
      </div>
    </section>
  );
}
