import type { Ui } from "@/lib/i18n/ui";
import "./brand-pillars.css";

/** R46 home brand pillars: three original gold line icons, glowing gold dividers, marble/gold sweep backdrop. */
const G = { fill: "none", stroke: "url(#bp-gold)", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Defs() {
  return (
    <svg width="0" height="0" className="bp-defs" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bp-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9B45E" />
          <stop offset="0.5" stopColor="#C9A24A" />
          <stop offset="1" stopColor="#8A6A2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="bp-icon" aria-hidden="true">
      <path {...G} d="M24 4.5 39 10v12.2c0 9.6-6.3 17.4-15 21.3C15.3 39.6 9 31.8 9 22.2V10Z" />
      <path {...G} strokeWidth={1} opacity={0.55} d="M24 8.6 35.2 12.8v9.6c0 7.6-4.8 13.9-11.2 17.2-6.4-3.3-11.2-9.6-11.2-17.2v-9.6Z" />
      <circle {...G} cx="24" cy="23" r="6.2" />
      <path {...G} d="M24 13.5v5M24 27.5v5M14.5 23h5M28.5 23h5" />
      <circle cx="24" cy="23" r="1.3" fill="#C9A24A" />
    </svg>
  );
}

function CalibrationIcon() {
  return (
    <svg viewBox="0 0 48 48" className="bp-icon" aria-hidden="true">
      <circle {...G} cx="20" cy="20" r="11" />
      <circle {...G} strokeWidth={1} opacity={0.55} cx="20" cy="20" r="5" />
      <path {...G} d="M20 5.5v6M20 28.5v6M5.5 20h6M28.5 20h6" />
      <path {...G} d="M30 43V36M36 43V31M42 43V25" strokeWidth={2.2} />
      <path {...G} strokeWidth={1.2} d="M28 30.5 34.5 25l4-2.5 4.5-3.5M40 18.5h3v3" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg viewBox="0 0 48 48" className="bp-icon" aria-hidden="true">
      <path {...G} d="M8 34 5.5 15l10.5 8L24 9l8 14 10.5-8L40 34Z" />
      <path {...G} d="M9 39.5h30" />
      <path {...G} strokeWidth={1} opacity={0.55} d="M11 30.5h26" />
      <circle {...G} cx="24" cy="7" r="1.8" />
      <circle {...G} cx="5" cy="13.4" r="1.5" />
      <circle {...G} cx="43" cy="13.4" r="1.5" />
      <path {...G} strokeWidth={1.2} d="m24 22.5 2.6 3.4L24 29.3l-2.6-3.4Z" />
    </svg>
  );
}

export function BrandPillars({ ui }: { ui: Ui }) {
  const t = ui.r46;
  const items = [
    { k: "fair", icon: <ShieldIcon />, label: t.fair, sub: t.fairSub },
    { k: "calib", icon: <CalibrationIcon />, label: t.calib, sub: t.calibSub },
    { k: "elite", icon: <CrownIcon />, label: t.elite, sub: t.eliteSub },
  ];
  return (
    <section className="bp" aria-label={t.aria}>
      <Defs />
      <span className="bp-sweep" aria-hidden="true" />
      <ul className="bp-list">
        {items.map((it) => (
          <li key={it.k} className="bp-item">
            <span className="bp-icon-wrap">{it.icon}</span>
            <span className="bp-text">
              <strong className="bp-label">{it.label}</strong>
              <span className="bp-sub">{it.sub}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
