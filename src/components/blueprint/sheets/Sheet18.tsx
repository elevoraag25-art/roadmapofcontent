export function Sheet18() {
  return (
    <section className="sheet" id="s18">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 18 / 21</span>
          <h3>النمو بالتفاعل المجتمعي</h3>
          <p className="sheet-sub">
            النمو ماشي غير نشر — هو حضور فعلي فمكان تواجد جمهورك المحتمل قبل ما يوصل لحسابك.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>حضور يومي</b>
          <br />
          REV: <b>E — جديد</b>
        </div>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-comment-dots" style={{ color: "var(--cyan)" }}></i> التسويق بالتعليق
        (Comment Marketing)
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          [
            "fa-crosshairs",
            "1. اختيار الحسابات",
            "حدد 10-15 حساب كبير فمجالك (منافسين أو محتوى مكمّل).",
          ],
          [
            "fa-pen",
            "2. تعليق بقيمة حقيقية",
            "علّق خلال أول ساعة من نشرهم تعليقاً يضيف قيمة، لا \"👍\" فارغ.",
          ],
          [
            "fa-ban",
            "3. بلا ترويج مباشر",
            "تجنب أي ترويج للمنتج داخل التعليق — الهدف أن يزور الناس بروفايلك بأنفسهم.",
          ],
          [
            "fa-repeat",
            "4. التكرار اليومي",
            "كرّر يومياً على نفس الحسابات لبناء تعرّف تدريجي.",
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
        <i className="fas fa-handshake-angle" style={{ color: "var(--cyan)" }}></i> التعاونات
        العضوية بلا ميزانية
      </h4>
      <div className="grid-3" style={{ marginBottom: "1.6rem" }}>
        {[
          ["fa-clone", "Duet / Stitch", "رد فيديو على محتوى حساب آخر بنفس مجالك."],
          [
            "fa-bullhorn",
            "Shoutout متبادل",
            "كل حساب يعرض جمهوره للآخر بلا أي مقابل مادي.",
          ],
          ["fa-microphone", "ظهور كضيف", "فبودكاست أو لايف صغير فمجالك."],
        ].map(([icon, title, desc]) => (
          <div className="paper" key={title}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--cyan)" }}></i> {title}
            </h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="panel" data-accent="money" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-user-check" style={{ color: "var(--money)" }}></i> قاعدة اختيار
          الشريك
        </h4>
        <p>
          تعاون مع حساب بحجم قريب منك أو أكبر بقليل — أكبر بكثير لن يرد عليك، وأصغر بكثير بلا فائدة
          حقيقية.
        </p>
      </div>

      <div className="panel" data-accent="red">
        <h4>
          <i className="fas fa-clock" style={{ color: "var(--redline)" }}></i> الساعة الذهبية
          (Golden Hour)
        </h4>
        <p>
          رد على كل تعليق فأول ساعة من نشر أي فيديو، ثبّت (Pin) أفضل تعليق يخدم رسالتك، واطرح سؤالاً
          فالكابشن يشجع الناس يعلقو. التفاعل المبكر كيقول للخوارزمية إن الفيديو يستاهل يتوزع أكثر.
        </p>
      </div>
    </section>
  );
}
