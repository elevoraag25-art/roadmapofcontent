export function Sheet03() {
  return (
    <section className="sheet" id="s03">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 03 / 21</span>
          <h3>معادلة العرض الذي لا يقاوم — أليكس هرموزي</h3>
          <p className="sheet-sub">
            إذا كان منتجك "سلعة عادية" (Commodity)، ستضطر لخفض السعر لتبيع. هرموزي يعلّمك كيف
            تصنع عرضاً يجعلك تُسعّر بـ 10 أضعاف المنافسين والناس تشتري.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>القيمة المُدركة</b>
          <br />
          REV: <b>A</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4 style={{ textAlign: "center", marginBottom: "1.6rem" }}>
          معادلة القيمة (The Value Equation)
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.4rem",
            fontFamily: "'IBM Plex Mono',monospace",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
              borderBottom: "2px solid rgba(255,255,255,.7)",
              paddingBottom: "1.4rem",
              width: "100%",
            }}
          >
            <span style={{ color: "var(--cyan)" }}>
              Dream Outcome
              <br />
              <small
                style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
              >
                (النتيجة الحلم)
              </small>
            </span>
            <span>×</span>
            <span style={{ color: "var(--cyan)" }}>
              Perceived Likelihood
              <br />
              <small
                style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
              >
                (يقين التحقيق)
              </small>
            </span>
            <span className="badge money" style={{ marginRight: ".6rem" }}>
              يجب زيادتها ↑
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--redline)" }}>
              Time Delay
              <br />
              <small
                style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
              >
                (تأخير الوقت)
              </small>
            </span>
            <span>×</span>
            <span style={{ color: "var(--redline)" }}>
              Effort & Sacrifice
              <br />
              <small
                style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Sans Arabic'" }}
              >
                (الجهد والتضحية)
              </small>
            </span>
            <span className="badge red" style={{ marginRight: ".6rem" }}>
              يجب تقليلها ↓
            </span>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="paper">
          <span
            className="badge red"
            style={{ marginBottom: ".8rem", display: "inline-block" }}
          >
            عرض ضعيف — يخسر
          </span>
          <h5>خدمة إدارة انستغرام (Social Media Management)</h5>
          <ul style={{ paddingRight: "1.1rem" }}>
            <li>"سأنشر لك 3 بوستات أسبوعياً" — جهد عالٍ على العميل ليفهم القيمة</li>
            <li>"سنزيد الوعي بعلامتك" — نتيجة غير قابلة للقياس</li>
            <li>"سنرى النتائج بعد 3 أشهر" — تأخير وقت كبير</li>
            <li>السعر: 200$ شهرياً — يراه العميل غالياً</li>
          </ul>
        </div>
        <div className="paper">
          <span
            className="badge money"
            style={{ marginBottom: ".8rem", display: "inline-block" }}
          >
            عرض هرموزي — يربح
          </span>
          <h5>نظام الاستحواذ على العملاء (Client Acquisition System)</h5>
          <ul style={{ paddingRight: "1.1rem" }}>
            <li>
              <strong>النتيجة + الضمان:</strong> "أضمن لك 10 عملاء جدد هذا الشهر، أو أعمل
              مجاناً حتى تحصل عليهم"
            </li>
            <li>
              <strong>تقليل الجهد:</strong> نظام Done-For-You — نقوم بكل شيء نيابة عنك
            </li>
            <li>
              <strong>السرعة:</strong> "نطلق الحملة في 48 ساعة"
            </li>
            <li>السعر: 1500$ — يراه العميل استثماراً رابحاً</li>
          </ul>
        </div>
      </div>

      <div className="dim">تعميق البسط وتفكيك المقام</div>

      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="panel">
          <h4 style={{ borderRight: "3px solid var(--cyan)", paddingRight: ".7rem" }}>
            البسط — ما يجب زيادته ↑
          </h4>
          <p style={{ marginBottom: ".7rem" }}>
            <strong style={{ color: "#fff" }}>النتيجة الحلم:</strong> لا تبع ميزة. لا تبع
            "كورس تسويق" — بِع "كيف تحصل على 3 عملاء يدفعون 1000$".
          </p>
          <p>
            <strong style={{ color: "#fff" }}>يقين التحقيق:</strong> العميل خائف من الفشل.
            قدّم ضمانات استرجاع، وشهادات من عملاء سابقين.
          </p>
        </div>
        <div className="panel" data-accent="red">
          <h4 style={{ borderRight: "3px solid var(--redline)", paddingRight: ".7rem" }}>
            المقام — ما يجب تقليله ↓
          </h4>
          <p style={{ marginBottom: ".7rem" }}>
            <strong style={{ color: "#fff" }}>تأخير الوقت:</strong> "في 14 يوماً" أفضل بكثير
            من "قريباً".
          </p>
          <p>
            <strong style={{ color: "#fff" }}>الجهد:</strong> وفّر قوالب جاهزة، أو قدّم خدمة
            Done-For-You كاملة.
          </p>
        </div>
      </div>

      <div className="panel" data-accent="money">
        <h4>
          <i className="fas fa-plus" style={{ color: "var(--money)" }}></i> إضافة: مضاعفات
          العرض الماسي (Grand Slam Stack)
        </h4>
        <p style={{ marginBottom: "1rem" }}>
          المعادلة تبني القيمة الأساسية، لكن هرموزي يضيف 4 روافع لإغلاق البيع فعلياً بدون خفض
          السعر:
        </p>
        <div className="grid-4">
          <div className="paper">
            <h5>
              <i className="fas fa-hourglass-half"></i> الندرة
            </h5>
            <p>عدد محدود من المقاعد أو الوحدات (10 عملاء فقط هذا الشهر).</p>
          </div>
          <div className="paper">
            <h5>
              <i className="fas fa-stopwatch"></i> الاستعجال
            </h5>
            <p>موعد نهائي حقيقي (السعر يرتفع بعد 48 ساعة).</p>
          </div>
          <div className="paper">
            <h5>
              <i className="fas fa-gift"></i> البونصات
            </h5>
            <p>أضف قيمة مجانية مصاحبة (قالب، استشارة، أداة) بدل خفض السعر.</p>
          </div>
          <div className="paper">
            <h5>
              <i className="fas fa-shield-halved"></i> الضمان
            </h5>
            <p>اقلب المخاطرة نحو نفسك: "أو تسترجع فلوسك / أو نشتغل مجاناً".</p>
          </div>
        </div>
      </div>
    </section>
  );
}
