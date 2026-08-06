export function Sheet05() {
  return (
    <section className="sheet" id="s05">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 05 / 14</span>
          <h3>قمع المبيعات والأتمتة</h3>
          <p className="sheet-sub">
            المشاهدات المجانية لا تعني أموالاً في البنك، إلا إذا كان لديك "نظام اصطياد"
            (Capture System).
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>TOFU → BOFU</b>
          <br />
          REV: <b>A</b>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: "2.4rem", alignItems: "center" }}>
        <div className="panel">
          <div className="funnel">
            <div className="flayer f1">
              TOFU — المحتوى الفيروسي<small>60% من محتواك | الوعي والانتباه</small>
            </div>
            <div className="flayer f2">
              MOFU — توليد الـ Leads<small>20% من محتواك | جمع الداتا</small>
            </div>
            <div className="flayer f3">
              BOFU — البيع<small>20% | إعلانات وعروض</small>
            </div>
          </div>
          <p className="ftip">
            <i className="fas fa-arrow-down"></i> $$$ — التدفق الصحيح ينزل من الوعي إلى البيع
            دون قفزات
          </p>
        </div>
        <div className="panel" data-accent="red">
          <h4>استراتيجية الأتمتة (ManyChat Hack)</h4>
          <p style={{ marginBottom: "1rem" }}>
            لا تستخدم أبداً جملة{" "}
            <s style={{ color: "var(--redline)" }}>"الرابط في البايو"</s> — تقتل التفاعل
            وتُخرج المشاهد من المنصة.
          </p>
          <div className="tl">
            <div className="tl-item">
              <span className="tl-dot" style={{ background: "var(--redline)" }}></span>
              <h5>1. قدّم قيمة قوية في الفيديو</h5>
            </div>
            <div className="tl-item">
              <span className="tl-dot" style={{ background: "#f5c76a" }}></span>
              <h5>2. نداء واضح (CTA)</h5>
              <p>"اكتب كلمة 'دليل' في التعليقات وسأرسل لك الرابط فوراً في الخاص."</p>
            </div>
            <div className="tl-item">
              <span className="tl-dot" style={{ background: "var(--cyan)" }}></span>
              <h5>3. الخوارزمية تكافئ التفاعل</h5>
              <p>آلاف التعليقات ترفع الفيديو تلقائياً (Free Traffic).</p>
            </div>
            <div className="tl-item">
              <span className="tl-dot" style={{ background: "var(--money)" }}></span>
              <h5>4. ManyChat يرد تلقائياً</h5>
              <p>
                ربط انستغرام بـ ManyChat — الأداة ترسل رابط صفحة الهبوط عبر DM فور كتابة
                الكلمة المفتاحية.
              </p>
            </div>
          </div>
          <p
            style={{
              marginTop: "1rem",
              color: "var(--money)",
              fontWeight: 700,
              fontSize: ".9rem",
            }}
          >
            <i className="fas fa-check-circle"></i> النتيجة: تفاعل يرفع الفيديو + عملاء
            محتملون في الخاص جاهزون للتحويل.
          </p>
        </div>
      </div>

      <div className="panel" data-accent="money">
        <h4>
          <i className="fas fa-plus" style={{ color: "var(--money)" }}></i> إضافة: تكييف
          القمع لسوق الـ COD
        </h4>
        <p style={{ marginBottom: "1rem" }}>
          في أسواق الدفع عند الاستلام (المغرب / الخليج)، الـ BOFU لا ينتهي بالإعلان — بل
          بمكالمة أو رسالة تأكيد. أضف طبقة رابعة:
        </p>
        <div className="grid-3">
          <div className="paper">
            <h5>CONFIRM</h5>
            <p>
              مكالمة أو رسالة WhatsApp تأكيد سريعة خلال ساعات من الطلب، لا أيام — تقلّل
              الإلغاء.
            </p>
          </div>
          <div className="paper">
            <h5>CATALOG</h5>
            <p>
              كتالوج WhatsApp Business جاهز يسمح للعميل المتردد بمراجعة المنتج قبل التأكيد
              النهائي.
            </p>
          </div>
          <div className="paper">
            <h5>RECOVER</h5>
            <p>
              رسالة استرجاع تلقائية للطلبات غير المؤكدة بعد 24 ساعة، بعرض مبسّط لا خصم مباشر.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
