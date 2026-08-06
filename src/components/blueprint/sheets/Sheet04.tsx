import { Accordion } from "@/components/blueprint/Accordion";

export function Sheet04() {
  return (
    <section className="sheet" id="s04">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="sheet-num">SHEET 04 / 14</span>
          <h3>تشريح السكريبت وسيكولوجية المونتاج</h3>
          <p className="sheet-sub">لا تترك شيئاً للصدفة. الفيديوهات تُهندَس، ولا تُرتجل.</p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>0 → 60 ثانية</b>
          <br />
          REV: <b>B — + AIDA</b>
        </div>
      </div>

      <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>قوالب السكريبتات الجاهزة</h4>
      <div style={{ marginBottom: "2.4rem" }}>
        <Accordion badge="red" badgeText="بيع / خدمات" title="قالب P.A.S — مشكلة، تهييج، حل">
          <div
            className="step"
            style={{ borderColor: "var(--redline)", background: "var(--redline-dim)" }}
          >
            <b>P — المشكلة (0-3s)</b>"السبب علاش [المشكلة التي يعاني منها عميلك]، هو أنك ما
            زال كتستعمل [الطريقة القديمة الخاطئة]."
          </div>
          <div
            className="step"
            style={{ borderColor: "#f5c76a", background: "rgba(245,199,106,.1)" }}
          >
            <b>A — التهييج (3-15s)</b>"وهادشي كيخليك [النتيجة السلبية]، بينما المنافسين ديالك
            [النتيجة الإيجابية لي كيحققوها]."
          </div>
          <div
            className="step"
            style={{ borderColor: "var(--money)", background: "var(--money-dim)" }}
          >
            <b>S — الحل (15-25s)</b>"الحل ماشي هو [حل تقليدي مكلف]، الحل هو [اسم منتجك] لي
            كيعطيك [أكبر فائدة]."
          </div>
          <div
            className="step"
            style={{ borderColor: "var(--cyan)", background: "var(--cyan-dim)" }}
          >
            <b>CTA (25-30s)</b>"اكتب كلمة [كلمة مفتاحية] فالتعاليق ونصيفت ليك كل التفاصيل
            فالخاص."
          </div>
          <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: ".4rem" }}>
            <strong>مثال تطبيقي:</strong> "راك كتخسر ميزانيتك فالإعلانات بلا مبيعات؟ هادشي
            كيخلي المنافسين يسرقو الزبائن... هادشي علاش صممنا هاد النظام لي كيضاعف التحويل،
            اكتب 'نظام' باش نرسلك التفاصيل."
          </p>
        </Accordion>

        <Accordion badge="cyan" badgeText="علامة شخصية" title="قالب H.S.O — خطاف، قصة، عرض">
          <div
            className="step"
            style={{ borderColor: "var(--redline)", background: "var(--redline-dim)" }}
          >
            <b>Hook (0-3s)</b>"أنا خسرت [رقم كبير/وقت طويل] باش نفهم هاد الحقيقة على [مجالك]."
          </div>
          <div
            className="step"
            style={{ borderColor: "#f5c76a", background: "rgba(245,199,106,.1)" }}
          >
            <b>Story (3-40s)</b>"فـ [سنة معينة] كنت كنعاني من [المشكلة]. جربت كلشي وفشلت، حتى
            اكتشفت هاد النظام لي غيّر ليا حياتي وهو [اشرح النظام باختصار]."
          </div>
          <div
            className="step"
            style={{ borderColor: "var(--money)", background: "var(--money-dim)" }}
          >
            <b>Offer (40-60s)</b>"اليوم، هاد النظام هو لي كنطبقو لعملائي. إذا باغي نوفر عليك
            الوقت والجهد، ادخل للرابط فالبايو / علق بكلمة كذا."
          </div>
        </Accordion>

        <Accordion badge="money" badgeText="إضافة" title="قالب A.I.D.A — انتباه، اهتمام، رغبة، فعل">
          <div
            className="step"
            style={{ borderColor: "var(--redline)", background: "var(--redline-dim)" }}
          >
            <b>Attention (0-3s)</b>خطاف بصري أو صادم يوقف السكرول فوراً.
          </div>
          <div
            className="step"
            style={{ borderColor: "#f5c76a", background: "rgba(245,199,106,.1)" }}
          >
            <b>Interest (3-12s)</b>معلومة أو إحصائية غير متوقعة تخص جمهورك تحديداً.
          </div>
          <div
            className="step"
            style={{ borderColor: "var(--cyan)", background: "var(--cyan-dim)" }}
          >
            <b>Desire (12-25s)</b>اربط المعلومة بنتيجة ملموسة يرغب بها المشاهد (وقت، مال،
            مظهر).
          </div>
          <div
            className="step"
            style={{ borderColor: "var(--money)", background: "var(--money-dim)" }}
          >
            <b>Action (25-30s)</b>نداء واحد واضح فقط — لا تعرض خيارين في نفس الفيديو.
          </div>
          <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: ".4rem" }}>
            يُفضَّل على PAS عندما يكون المنتج جديداً على السوق ولا يوجد "ألم" واضح يمكن
            تهييجه بعد.
          </p>
        </Accordion>
      </div>

      <div className="dim">من الكتابة إلى القص</div>

      <h4 style={{ fontSize: "1.2rem", marginBottom: "1.2rem" }}>
        سيكولوجية الدوبامين (المونتاج)
      </h4>
      <div className="grid-4">
        <div className="panel">
          <h4 style={{ fontSize: "1rem" }}>
            <i className="fas fa-scissors" style={{ color: "var(--money)" }}></i> قص الدهون
          </h4>
          <p>احذف أي جزء تتنفس فيه. الفيديو يجب أن يكون كالطلقات المتتالية.</p>
        </div>
        <div className="panel">
          <h4 style={{ fontSize: "1rem" }}>
            <i className="fas fa-closed-captioning" style={{ color: "var(--cyan)" }}></i>{" "}
            العناوين
          </h4>
          <p>80% يشاهدون بدون صوت بداية. خط عريض، ولوّن الكلمات المهمة (أصفر/أخضر).</p>
        </div>
        <div className="panel">
          <h4 style={{ fontSize: "1rem" }}>
            <i className="fas fa-volume-high" style={{ color: "#f5c76a" }}></i> التصميم
            الصوتي
          </h4>
          <p>الصوت 50% من الفيديو. Whooshes عند التغيير، Pops عند ظهور الكلمات، موسيقى تصاعدية.</p>
        </div>
        <div className="panel" data-accent="red">
          <h4 style={{ fontSize: "1rem" }}>
            <i className="fas fa-camera" style={{ color: "var(--redline)" }}></i> قاعدة الـ 3
            ثواني
          </h4>
          <p>لا تترك الإطار ثابتاً. Zoom، صورة، أو تغيير زاوية كل 3 ثوانٍ كحد أقصى.</p>
        </div>
      </div>
    </section>
  );
}
