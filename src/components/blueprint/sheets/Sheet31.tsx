export function Sheet31() {
  return (
    <section className="sheet" id="s31">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 5 من 8</span>
          <h3>الوسيط والمنصة</h3>
          <p className="sheet-sub">قبل ما تختار منصة، اختر الوسيط اللي كيناسب شخصيتك.</p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>وسيط → منصة</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-tv" style={{ color: "var(--cyan)" }}></i> 4 وسائط — اختر أساسك
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>الوسيط</th>
                <th>الأنسب لمن</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "الكتابة",
                  "كيحب يكتب أو يومّن بانتظام، يقدر يشرح فكرة كتابة بلا ما يحتاج يشرحها بصوته باش تبان واضحة",
                ],
                [
                  "الفيديو",
                  "أعلى وسيط استفادة (فيديو واحد = كليبات قصيرة + بودكاست + اقتباسات + منشورات)، مرتاح قدام الكاميرا أو مستعد يتحسن بالعلن",
                ],
                [
                  "الصوت (بودكاست)",
                  "نفس فايدة الفيديو بلا ضغط الكاميرا، خطوة أولى ممتازة قبل الانتقال للفيديو",
                ],
                ["المرئي/التصميم", "كيقدر يحول أفكار معقدة لصور بسيطة (كاروسيلات، إنفوغرافيك)"],
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

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-tower-broadcast" style={{ color: "var(--cyan)" }}></i> اختيار المنصة
          — 2-3 فقط
        </h4>
        <p>
          ركز على 2-3 منصات لا أكثر — النشر فكل مكان كيشتتك. لكن بلا اعتماد على منصة وحدة فقط
          (مخاطرة: توقف المنصة أو تغيير الخوارزمية يقدر يمحي كل جمهورك بين عشية وضحاها).
        </p>
      </div>

      <div className="quote" style={{ marginBottom: "2.4rem" }}>
        <b>أسلوب عين ساورون:</b> ركز جهدك بشكل متناوب على منصة وحدة فوقت معين وخليها فالأولوية،
        والمنصات الباقية فوضع «صيانة» (نشر بلا محاولة نمو). ملي توصل لهدفك فالمنصة الأولى، حوّل
        التركيز للثانية — بدل ما تحاول تكبر فكلشي فنفس الوقت بلا نتيجة فحتى وحدة.
      </div>

      <div className="panel money">
        <h4>
          <i className="fas fa-clock" style={{ color: "var(--money)" }}></i> قصير مقابل طويل
        </h4>
        <p>
          المحتوى القصير = <b>وعي وانتشار سريع</b>. المحتوى الطويل = <b>تحويل فعلي</b> — الوقت اللي
          كيقضيه الجمهور معاك كيبني ثقة أعمق، وكيخليه أقرب للشراء أو الحجز.
        </p>
      </div>
    </section>
  );
}
