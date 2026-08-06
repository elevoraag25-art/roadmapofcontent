import type { SectionMeta } from "./sections";

export function SectionHead({ section, index }: { section: SectionMeta; index: number }) {
  return (
    <header className="sec-head">
      <span className="hero-eyebrow">
        <i className={`fas ${section.icon}`}></i> PART {String(index).padStart(2, "0")} —{" "}
        {section.short}
      </span>
      <h1>{section.title}</h1>
      <p className="lede">{section.desc}</p>
      <ul className="sec-chips">
        {section.sheets.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>
              <span className="code">{s.code}</span> {s.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
