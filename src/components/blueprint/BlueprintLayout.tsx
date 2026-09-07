import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/roadmap-logo.png.asset.json";
import { SECTIONS, type SectionMeta } from "./sections";

function NavList({ currentSlug, onNavigate }: { currentSlug?: string; onNavigate?: () => void }) {
  return (
    <div className="navlist">
      <Link
        to="/"
        className={currentSlug === "/" ? "active" : ""}
        onClick={onNavigate}
        style={{ marginBottom: "0.6rem" }}
      >
        <span className="code">00</span>
        <i className="fas fa-house"></i>
        <span>المخطط الرئيسي</span>
      </Link>
      {SECTIONS.map((sec) => (
        <div className="nav-group" key={sec.slug}>
          <p className="nav-group-title">
            <span aria-hidden="true">{sec.emoji}</span> {sec.short}
          </p>
          {sec.sheets.map((s) => (
            <Link
              key={s.id}
              to={sec.slug}
              hash={s.id}
              className={currentSlug === sec.slug ? "in-section" : ""}
              onClick={onNavigate}
            >
              <span className="code">{s.code}</span>
              <i className={`fas ${s.icon}`}></i>
              <span>{s.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export function BlueprintLayout({
  currentSlug,
  section,
  children,
}: {
  currentSlug: string;
  section?: SectionMeta;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const rulerFillRef = useRef<HTMLDivElement>(null);
  const rulerMarkerRef = useRef<HTMLDivElement>(null);
  const rulerPctRef = useRef<HTMLElement>(null);
  const rulerSheetRef = useRef<HTMLSpanElement>(null);

  const idx = SECTIONS.findIndex((s) => s.slug === currentSlug);
  const prev = idx > 0 ? SECTIONS[idx - 1] : idx === 0 ? undefined : undefined;
  const next = idx >= 0 && idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : undefined;

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0;
      if (rulerFillRef.current) rulerFillRef.current.style.width = pct + "%";
      if (rulerMarkerRef.current) rulerMarkerRef.current.style.left = pct + "%";
      if (rulerPctRef.current) rulerPctRef.current.textContent = Math.round(pct) + "%";
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active sheet readout
  useEffect(() => {
    const sheets = section?.sheets ?? [];
    const sections = sheets
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) {
      if (rulerSheetRef.current) rulerSheetRef.current.textContent = "SHEET 00";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const meta = sheets.find((s) => s.id === entry.target.id);
            if (meta && rulerSheetRef.current)
              rulerSheetRef.current.textContent = "SHEET " + meta.code;
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [section]);

  // Reveal animation
  useEffect(() => {
    const selector =
      ".sheet .panel, .sheet .paper, .sheet .metric, .sheet .chart-card, .tl-item, .check-item, .acc, .flayer, table.tech, .sec-card";
    const els = document.querySelectorAll(selector);
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [currentSlug]);

  return (
    <>
      <div className="ruler">
        <div className="ruler-ticks"></div>
        <div className="ruler-fill" ref={rulerFillRef}></div>
        <div className="ruler-marker" ref={rulerMarkerRef}></div>
        <div className="ruler-content">
          <span className="r-brand">
            <i className="fas fa-drafting-compass"></i> DWG-ENGINE-01
          </span>
          <span className="r-readout">
            <span ref={rulerSheetRef}>SHEET 00</span>
            <b ref={rulerPctRef}>0%</b>
          </span>
        </div>
      </div>

      <div className="mobile-bar">
        <div className="mb-title">
          مخطط <span>الفيرال</span>
        </div>
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="فتح فهرس اللوحات"
          aria-expanded={mobileOpen}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>

      <nav
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-label="فهرس اللوحات"
        aria-hidden={!mobileOpen}
      >
        <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="إغلاق الفهرس">
          <i className="fas fa-xmark" aria-hidden="true"></i>
        </button>
        <NavList currentSlug={currentSlug} onNavigate={() => setMobileOpen(false)} />
      </nav>

      <div className="shell">
        <nav className="sidebar">
          <div className="brand">
            <Link to="/" className="brand-logo" aria-label="الصفحة الرئيسية">
              <img src={logoAsset.url} alt="Roadmap of Content" />
            </Link>
            <span className="mono">DWG SET — CONTENT ENGINE</span>
            <Link to="/" className="brand-title" style={{ display: "block" }}>
              مخطط <span>الهندسة</span> الفيروسية
            </Link>
            <span className="tagline">34 درساً · 7 أقسام · من الفكرة إلى الكاش</span>
          </div>
          <p className="navlist-label">فهرس اللوحات</p>
          <NavList currentSlug={currentSlug} />
          <div className="side-foot">
            <span className="mono">NOTE</span>
            <p>كل لوحة مبنية على تطبيق فعلي. اقرأ باش تفهم، رجع باش تنفذ.</p>
          </div>
        </nav>

        <main className="main">
          {children}

          {(prev || next) && (
            <nav className="pager" aria-label="التنقل بين الأقسام">
              {prev ? (
                <Link to={prev.slug} className="pager-link">
                  <span className="mono">القسم السابق</span>
                  <b>
                    <i className={`fas ${prev.icon}`}></i> {prev.title}
                  </b>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={next.slug} className="pager-link next">
                  <span className="mono">القسم التالي</span>
                  <b>
                    {next.title} <i className={`fas ${next.icon}`}></i>
                  </b>
                </Link>
              )}
            </nav>
          )}

          <div className="foot">DWG SET — CONTENT-TO-CASH ENGINE · REV E · نسخة موسّعة</div>
        </main>
      </div>
    </>
  );
}
