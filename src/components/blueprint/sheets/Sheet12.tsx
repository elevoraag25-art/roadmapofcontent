export function Sheet12() {
  return (
    <section className="sheet" id="s12">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 12 / 13</span>
          <h3>نظام الرافعة — حوّل جمهورك وعملاءك لفريق تسويق</h3>
          <p className="sheet-sub">
            أنت لست الوحيد القادر على جلب العملاء. أربع مجموعات حواليك يمكنها فعل ذلك نيابة عنك،
            مجاناً أو شبه مجاناً.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>4 مجموعات رافعة</b>
          <br />
          REV: <b>C — جديد</b>
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-user-check", "العملاء الحاليون", "اطلب منهم صراحة شهادة فيديو قصيرة أو محتوى UGC مقابل حافز بسيط (خصم، هدية، أولوية خدمة) — العميل الراضي لن يعرض بنفسه إلا إذا طلبت منه بوضوح."],
          ["fa-user-group", "الموظفون / الفريق", "شجّعهم على مشاركة كواليس العمل اليومي من حساباتهم الشخصية — محتوى \"خلف الكواليس\" من موظف حقيقي يُبني ثقة لا يبنيها إعلان رسمي."],
          ["fa-handshake", "الشركاء والوكالات", "اتفاقيات توزيع أو عمولة بسيطة مقابل ترويج عرضك لجمهورهم الجاهز أصلاً."],
          ["fa-star", "المؤثرون الصغار", "تعاون بعمولة على المبيعات بدل دفع مبلغ ثابت — مخاطرة أقل عليك، وحافز حقيقي عليهم."],
        ].map(([icon, title, desc]) => (
          <div className="paper" key={title}>
            <h5>
              <i className={`fas ${icon}`} style={{ color: "var(--money)" }}></i> {title}
            </h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-file-signature" style={{ color: "var(--cyan)" }}></i> قالب بريف جاهز
          لأي صانع محتوى أو مؤثر صغير
        </h4>
        <div className="tl">
          {[
            ["fa-box", "1. المنتج/العرض", "رابط + وصف من جملتين، لا أكثر."],
            ["fa-compass-drafting", "2. الرسالة الأساسية", "زاوية واحدة محددة من مصفوفة الزوايا (اللوحة 08)، لا أكثر من زاوية."],
            ["fa-fish", "3. أمثلة خطافات جاهزة", "2-3 خطافات من بنك الخطافات (اللوحة 11) يختار منها."],
            ["fa-ban", "4. الممنوعات (Don'ts)", "ما لا يجب قوله: وعود مبالغ فيها، منافسون بالاسم، ادعاءات غير موثقة."],
            ["fa-clapperboard", "5. مواصفات التسليم", "المدة، الصيغة (رأسي 9:16)، آخر أجل، عدد النسخ المطلوبة."],
            ["fa-file-contract", "6. حقوق الاستخدام والمقابل", "هل الفيديو يُستخدم في إعلانات مدفوعة أيضاً؟ لمدة كم؟ مقابل مادي أم عمولة؟"],
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
        <p style={{ marginTop: "1.2rem" }}>
          بريف واضح فـ5 دقائق كيوفر عليك 3 جولات تعديل — الغموض هو أكبر مضيعة وقت مع أي متعاون
          خارجي.
        </p>
      </div>

      <div className="panel" data-accent="money">

        <h4>
          <i className="fas fa-infinity" style={{ color: "var(--money)" }}></i> لماذا الرافعة أهم من
          زيادة الميزانية
        </h4>
        <p>
          كل دينار يصرف على إعلان يتوقف تأثيره بمجرد توقف الصرف. أما نظام رافعة يعمل (عميل يعرض
          لصديقه، موظف ينشر كواليس)، فهو يستمر بدون تكلفة مستمرة، ويبني ثقة تفوق أي إعلان لأنها
          تأتي من طرف ثالث لا من العلامة نفسها.
        </p>
      </div>
    </section>
  );
}
