import { StagesChart, RetentionChart } from "@/components/blueprint/Charts";

export function Sheet01() {
  return (
    <section className="sheet" id="s01">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 01 / 21</span>
          <h3>علم الخوارزمية — كيف تفكّر الآلة؟</h3>
          <p className="sheet-sub">
            المنصات لا تقرأ المحتوى، هي تقرأ سلوك المشاهد تجاهه. كل فعل يقوم به المشاهد يمنحك
            نقاطاً في نظام تنقيط داخلي.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>مشاهد واحد → مليون</b>
          <br />
          REV: <b>A — نسخة مدققة</b>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="panel">
          <h4>نظام التنقيط (Point System)</h4>
          <div className="metric w1">
            <div>
              <b>1. وقت المشاهدة (Watch Time)</b>
              <p>مشاهدة كاملة + إعادة (Loop) = دفع فوري لآلاف المشاهدين الجدد.</p>
            </div>
            <span className="val">+100</span>
          </div>
          <div className="metric w2">
            <div>
              <b>2. المشاركة (Share)</b>
              <p>إرسال الفيديو لصديق — أقوى مؤشر على إثارة المشاعر أو تمثيل حالة اجتماعية.</p>
            </div>
            <span className="val">+75</span>
          </div>
          <div className="metric w3">
            <div>
              <b>3. الحفظ (Save)</b>
              <p>مؤشر على قيمة عالية، شائع في المحتوى التعليمي والقوائم.</p>
            </div>
            <span className="val">+50</span>
          </div>
          <div className="metric w4">
            <div>
              <b>4. الإعجاب والتعليق</b>
              <p>أضعف المقاييس، إلا إذا كان التعليق نقاشاً طويلاً فعلياً.</p>
            </div>
            <span className="val">+10</span>
          </div>
        </div>

        <div className="chart-card">
          <span className="ct">FIG. 01 — تدرّج اختبار الفيديو عبر المجموعات (Log Scale)</span>
          <div className="chart-wrap">
            <StagesChart />
          </div>
        </div>
      </div>

      <div className="dim">التوصيل الكامل مقابل الفشل المبكر</div>

      <div className="grid-2" style={{ marginBottom: "2.4rem" }}>
        <div className="panel">
          <h4>المقاييس الثلاثة الكبرى (The Big 3)</h4>
          <p style={{ marginBottom: ".8rem" }}>
            <i className="fas fa-eye" style={{ color: "var(--cyan)" }}></i>{" "}
            <strong style={{ color: "#fff" }}>الاحتفاظ (Retention):</strong> الهدف 70-100%
            إكمال. فيديو 30 ثانية اكتملت مشاهدته أقوى خوارزمياً من دقيقة شوهد نصفها فقط.
          </p>
          <p style={{ marginBottom: ".8rem" }}>
            <i className="fas fa-share-nodes" style={{ color: "var(--cyan)" }}></i>{" "}
            <strong style={{ color: "#fff" }}>المشاركة — الكأس المقدسة:</strong> عندما يُرسل
            المشاهد الفيديو خارج التطبيق (WhatsApp)، تعتبرك المنصة "جالباً للعملاء" وتكافئك
            بفيرال مباشر.
          </p>
          <p>
            <i className="fas fa-bookmark" style={{ color: "var(--cyan)" }}></i>{" "}
            <strong style={{ color: "#fff" }}>الحفظ (Save):</strong> دليل على قيمة عميقة، يحدث
            غالباً في المحتوى التعليمي ("5 مواقع ذكاء اصطناعي").
          </p>
        </div>
        <div className="chart-card">
          <span className="ct">FIG. 02 — منحنى الاحتفاظ: فيديو فيروسي مقابل فيديو فاشل</span>
          <div className="chart-wrap">
            <RetentionChart />
          </div>
        </div>
      </div>

      <div className="panel" data-accent="red">
        <h4>
          <i className="fas fa-plus" style={{ color: "var(--redline)" }}></i> إضافة: فروقات
          الخوارزمية بين المنصات (لعملك Omnichannel)
        </h4>
        <p style={{ marginBottom: "1rem" }}>
          بما أنك تدير حملات على أكثر من منصة، لا تعامل الخوارزميات كأنها واحدة. كل منصة
          تكافئ إشارة مختلفة أولاً:
        </p>
        <div className="table-wrap">
          <table className="tech">
            <thead>
              <tr>
                <th>المنصة</th>
                <th>الإشارة الأقوى</th>
                <th>القاعدة العملية</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>TikTok</th>
                <td>الاحتفاظ الكامل + إعادة المشاهدة (Loop)</td>
                <td>أول ثانيتين حاسمتان أكثر من أي منصة أخرى</td>
              </tr>
              <tr>
                <th>Instagram Reels</th>
                <td>المشاركة عبر DM / خارج التطبيق</td>
                <td>صمّم لحظة "يستاهل تبعت لصاحبك" واضحة</td>
              </tr>
              <tr>
                <th>Snapchat Spotlight</th>
                <td>وقت المشاهدة الإجمالي + التكرار اليومي</td>
                <td>الانتظام في النشر يفوق جودة المونتاج المفرطة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
