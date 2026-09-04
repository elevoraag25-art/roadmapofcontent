export function Sheet30() {
  return (
    <section className="sheet" id="s30">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 4 من 8</span>
          <h3>النطاق والمزيج</h3>
          <p className="sheet-sub">ابدأ ضيقاً جداً، ووسّع بطبقات لا بقفزات.</p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>تركيز → توسع</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel red" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-compress" style={{ color: "var(--redline)" }}></i> قاعدة البداية
          الضيقة
        </h4>
        <p>
          الثقة المبكرة كتبنى بكونك مبدع فحاجة وحدة محددة، ماشي بالتكلم على بزاف ديال المواضيع فنفس
          الوقت. الشخص اللي كيتكلم على كلشي، الجمهور كيحس إنه ماشي خبير فوالو. ركز على موضوع واحد
          حتى تبني مصداقية حقيقية فيه أولاً.
        </p>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-layer-group" style={{ color: "var(--cyan)" }}></i> التوسع بطبقات لا
          بقفزات
        </h4>
        <p>
          ملي تكون معروف بالموضوع الأول وعندك تفاعل ثابت عليه، وسّع لمواضيع قريبة فقط (مجاورة)، لا
          قفزة كبيرة بلا علاقة. القفزة الكبيرة كتفقدك مصداقيتك اللي بنيتيها.
        </p>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-list-check" style={{ color: "var(--money)" }}></i> 3 أسئلة لاختيار
          موضوعك
        </h4>
        {[
          ["الصدق", "آش كنحب نتكلم عليه بصدق، بلا ما نحس إنه واجب؟"],
          ["الصدى", "آش غايلقى صدى عند جمهوري دابا بالضبط؟"],
          ["الأثر", "آش غايخلي جمهوري يبدل تصرفاته فعلياً بعد ما يشوف المحتوى؟"],
        ].map(([t, d]) => (
          <div className="check-item" key={t}>
            <i className="fas fa-check"></i>
            <div>
              <b>{t}</b>
              <p>{d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="panel">
        <h4>
          <i className="fas fa-scale-balanced" style={{ color: "var(--cyan)" }}></i> قاعدة 80/20
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>النسبة</th>
                <th>المحتوى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>80%</th>
                <td>الموضوع الأساسي المرتبط مباشرة بعروضك ومصدر دخلك</td>
              </tr>
              <tr>
                <th>20%</th>
                <td>
                  اهتماماتك الأخرى (تكديس الاهتمامات) — كيعطي جمهورك فرص أكثر باش يرتبطو بيك كإنسان
                  حقيقي لا مجرد خبير فموضوع واحد
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
