export function Sheet32() {
  return (
    <section className="sheet" id="s32">
      <div className="sheet-head">
        <div className="sheet-title-wrap">
          <span className="badge cyan">خارطة طريق العلامة الشخصية — الخطوة 6 من 8</span>
          <h3>من الفكرة للكاميرا</h3>
          <p className="sheet-sub">
            كيفاش تحول الفكرة لمحتوى حقيقي، وكيفاش تصمم بيئة تصوير كتساعدك تعطي أحسن أداء.
          </p>
        </div>
        <div className="sheet-meta">
          SCALE: <b>فكرة → تنفيذ</b>
          <br />
          REV: <b>G</b>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-comments-question" style={{ color: "var(--cyan)" }}></i> عالج
          الاعتراضات داخل المحتوى نفسه
        </h4>
        <p>
          بحال فيديو بيعي طويل كيعالج اعتراضات العميل قبل ما يوصل لمكالمة البيع، خص محتواك يدير نفس
          الشي. شوف تعليقات وأسئلة جمهورك المتكررة، ودمج الجواب عليها داخل الفيديو نفسه بدل ما
          تنتظر السؤال يتكرر فالتعليقات.
        </p>
      </div>

      <div className="panel red" style={{ marginBottom: "2.4rem" }}>
        <h4>
          <i className="fas fa-robot" style={{ color: "var(--redline)" }}></i> لا تكون روبوت
        </h4>
        <p>
          شارك شخصيتك الحقيقية، وشارك الفشل والدروس لا غير الانتصارات. الشفافية والضعف كيبنيو ثقة
          أسرع بزاف من الكمال المصطنع — الجمهور كيرتاب فالشخص اللي دايماً رابح فكلشي.
        </p>
      </div>

      <h4 style={{ marginBottom: "1.2rem" }}>تصميم بيئة التصوير</h4>
      <div className="tl" style={{ marginBottom: "2.4rem" }}>
        {[
          [
            "رجعة بصرية فورية",
            "المصور/الفريق كيعطيك إشارة (إيماءة رأس، إبهام لفوق) ملي تقول حاجة قوية — هادشي كيخليك تعرف وقتاش تعمّق أكثر.",
          ],
          [
            "احتفال فوري",
            "بعد كل قطعة تصوير جيدة، احتفل بيها فوراً (تشجيع، طاقة إيجابية) — كيحافظ على طاقتك طول جلسة التصوير.",
          ],
          [
            "المنتقد الشكاك",
            "الفريق كيفكر كمنتقد أثناء التصوير، كيلقط الاعتراضات المحتملة قبل ما تبان فالتعليقات بعد النشر.",
          ],
        ].map(([t, d], i) => (
          <div className="tl-item" key={t}>
            <span className="tl-dot" style={{ background: "var(--cyan)" }}></span>
            <h5>
              <span className="time">STEP 0{i + 1}</span>
              {t}
            </h5>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <div className="panel money">
        <h4>
          <i className="fas fa-user" style={{ color: "var(--money)" }}></i> إلى كنتي كتخدم وحدك
        </h4>
        <p>
          سجل نفسك وشوف التسجيل بعد كل جلسة، واسأل نفسك نفس أسئلة الفريق: واش هادشي مفهوم؟ واش فيه
          اعتراض ما جاوبتش عليه؟ واش الطاقة ديالي ثابتة طول الفيديو؟
        </p>
      </div>
    </section>
  );
}
