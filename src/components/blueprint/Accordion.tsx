import { useState } from "react";

export function Accordion({
  badge,
  badgeText,
  title,
  children,
}: {
  badge: "red" | "cyan" | "money";
  badgeText: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`acc ${open ? "open" : ""}`}>
      <button className="acc-head" onClick={() => setOpen((v) => !v)}>
        <span className="lbl">
          <span className={`badge ${badge}`}>{badgeText}</span> {title}
        </span>
        <i className="fas fa-chevron-down"></i>
      </button>
      <div className="acc-body">
        <div className="acc-body-in">{children}</div>
      </div>
    </div>
  );
}
