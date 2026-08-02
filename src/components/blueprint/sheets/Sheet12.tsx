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
