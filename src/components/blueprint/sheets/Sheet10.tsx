export function Sheet10() {
  return (
    <section className="sheet" id="s10">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 10 / 13</span>
          <h3>محرك الإعلانات المدفوعة — من العضوي إلى الكاش السريع</h3>
          <p className="sheet-sub">
            المحتوى العضوي يبني الثقة على المدى الطويل. الإعلانات المدفوعة تُسرّع الكاش اليوم —
            لكن فقط إذا بُنيت على أساس مثبت.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>عضوي → مدفوع</b>
          <br />
          REV: <b>C — جديد</b>
        </div>
      </div>

      <div className="panel" data-accent="red" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-shield-halved" style={{ color: "var(--redline)" }}></i> القاعدة
          الذهبية قبل أي دينار في الإعلانات
        </h4>
        <p>
          لا تصرف ميزانية إعلانية على عرض أو فيديو لم يثبت نفسه عضوياً أولاً. الفيديو العضوي الذي
          حقق نسبة احتفاظ فوق 50% (من بروتوكول الـ48 ساعة في اللوحة 07) هو أول مرشح ليتحول إلى
          إعلان مدفوع — لأنك تعرف مسبقاً أنه يشتغل.
        </p>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-diagram-project" style={{ color: "var(--cyan)" }}></i> الطرق الأربع
        الوحيدة للحصول على عملاء — Core Four (هرموزي)
      </h4>
      <div className="grid-4" style={{ marginBottom: "2.4rem" }}>
        {[
          ["fa-comments", "تواصل دافئ", "رسائل مباشرة لجمهورك ومتابعيك الحاليين، دعوة صريحة بلا خجل بدل انتظار أن يأتوا هم."],
          ["fa-video", "محتوى مجاني (عضوي)", "ما بنيته في اللوحات 01-09، أرخص طريقة لكن الأبطأ في الظهور."],
          ["fa-snowflake", "تواصل بارد", "رسائل أو مكالمات لغرباء لا يعرفونك بعد، تحتاج حجماً وصبراً."],
          ["fa-bullhorn", "إعلانات مدفوعة", "أسرع طريقة قابلة للتوسع، لكن الأخطر للمبتدئين لأنها تُظهر ضعف أي عرض أو محتوى غير مثبت بسرعة وبتكلفة حقيقية."],
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
          <i className="fas fa-table-cells" style={{ color: "var(--cyan)" }}></i> مصفوفة زوايا
          الإعلان الإبداعية
        </h4>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>الزاوية</th>
                <th>متى تستخدمها</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["شهادة عميل حقيقي (UGC)", "حين يكون لديك نتائج موثقة، أقوى زاوية لبناء الثقة بسرعة"],
                ["إعلان يقوده المؤسس (Founder-Led)", "حين علامتك الشخصية جزء من قصة البيع"],
                ["مشكلة – تهييج – حل مباشر", "للجمهور البارد الذي لا يعرفك بعد"],
                ["مقارنة قبل/بعد", "للمنتجات ذات نتيجة بصرية واضحة"],
                ["فتح الصندوق / العرض المباشر للمنتج", "للمتاجر ومنتجات COD تحديداً"],
                ["رد فعل صادم أو مراجعة قاسية", "لكسر الملل داخل الإعلانات المتشابهة في نفس المجال"],
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

      <h4 style={{ marginBottom: "1.2rem" }}>
        <i className="fas fa-vials" style={{ color: "var(--cyan)" }}></i> نظام اختبار الخطافات
        الإعلانية
      </h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          ["var(--cyan)", "الخطوة 1", "fa-clone", "صوّر نفس جسم الإعلان (نفس العرض والحل) بـ4 إلى 5 خطافات مختلفة فقط."],
          ["#f5c76a", "الخطوة 2", "fa-coins", "صرّف ميزانية اختبار صغيرة ومتساوية على كل نسخة، لنفس الجمهور، لمدة 48-72 ساعة فقط."],
          ["var(--redline)", "الخطوة 3", "fa-gauge-high", "راقب 3 أرقام: تكلفة الألف مشاهدة (CPM)، نسبة الاحتفاظ بالثواني الأولى (Hook Rate)، ونسبة النقر (CTR) — الفائز هو الأعلى في الثلاثة معاً وليس الأرخص فقط."],
          ["var(--money)", "الخطوة 4", "fa-arrow-up-right-dots", "أوقف كل نسخة خاسرة فوراً بعد 48-72 ساعة، ووسّع ميزانية النسخة الفائزة تدريجياً لا دفعة واحدة."],
        ].map(([color, time, icon, desc]) => (
          <div className="tl-item" key={time}>
            <span className="tl-dot" style={{ background: color }}></span>
            <span className="time">{time}</span>
            <h5>
              <i className={`fas ${icon}`}></i> اختبار الخطاف
            </h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="quote">
        <b>تحذير — لا تُسمّن الميزانية على إعلان خاسر:</b> زيادة الميزانية لا تُصلح إعلاناً ضعيف
        الأداء، هي فقط تخسرك أسرع. القرار هو نفسه منطق اختبار → توسيع → قتل الذي طبّقته على المحتوى
        العضوي في اللوحة 07، بنفس الصرامة وبلا تعلّق عاطفي بالإعلان.
      </div>
    </section>
  );
}
