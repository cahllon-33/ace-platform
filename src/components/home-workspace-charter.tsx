"use client";

import { useText } from "@/components/text-provider";

type ChipKind = "tick" | "aim" | "curve" | "orbit" | "rng" | "ok";

const ICON_BOX = "ace-hub-chip-icon h-6 w-6 max-h-6 max-w-6 shrink-0";

function ChipIcon({ kind }: { kind: ChipKind }) {
  if (kind === "tick") {
    return (
      <svg viewBox="0 0 16 16" width={24} height={24} className={ICON_BOX} aria-hidden="true">
        <rect width="16" height="16" rx="3" fill="#0B0B0C" />
        <circle cx="8" cy="8" r="5.5" fill="none" stroke="#FFD700" strokeWidth="1.3" />
        <path d="M8 4.4V8l2.4 1.5" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      </svg>
    );
  }
  if (kind === "aim") {
    return (
      <svg viewBox="0 0 16 16" width={24} height={24} className={ICON_BOX} aria-hidden="true">
        <rect width="16" height="16" rx="3" fill="#0B0B0C" />
        <circle cx="8" cy="8" r="5.2" fill="none" stroke="#FFD700" strokeWidth="1.3" />
        <circle cx="8" cy="8" r="1.4" fill="#FFD700" />
        <path d="M8 1.8v2.2M8 12v2.2M1.8 8h2.2M12 8h2.2" stroke="#FFD700" strokeWidth="1.2" />
      </svg>
    );
  }
  if (kind === "curve") {
    return (
      <svg viewBox="0 0 16 16" width={24} height={24} className={ICON_BOX} aria-hidden="true">
        <rect width="16" height="16" rx="3" fill="#0B0B0C" />
        <path d="M2 12c2.2-5 4.6-7.6 12-8" fill="none" stroke="#FFD700" strokeWidth="1.4" />
        <path d="M2 12h12" stroke="#FFD700" strokeWidth="1.1" opacity="0.55" />
      </svg>
    );
  }
  if (kind === "orbit") {
    return (
      <svg viewBox="0 0 16 16" width={24} height={24} className={ICON_BOX} aria-hidden="true">
        <rect width="16" height="16" rx="3" fill="#0B0B0C" />
        <path d="M11.6 3.2A5.6 5.6 0 1 0 13 10" fill="none" stroke="#FFD700" strokeWidth="1.3" />
        <path d="M10.2 2.4h3.2V5.6" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      </svg>
    );
  }
  if (kind === "rng") {
    return (
      <svg viewBox="0 0 16 16" width={24} height={24} className={ICON_BOX} aria-hidden="true">
        <rect width="16" height="16" rx="3" fill="#0B0B0C" />
        <rect x="2.4" y="2.4" width="11.2" height="11.2" rx="2" fill="none" stroke="#FFD700" strokeWidth="1.3" />
        <circle cx="6" cy="6" r="1" fill="#FFD700" />
        <circle cx="10" cy="10" r="1" fill="#FFD700" />
        <circle cx="8" cy="8" r="1" fill="#FFD700" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" width={24} height={24} className={ICON_BOX} aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#0B0B0C" />
      <circle cx="8" cy="8" r="5.5" fill="none" stroke="#FFD700" strokeWidth="1.3" />
      <path d="M5.1 8.2 7.1 10.2 11 5.8" fill="none" stroke="#FFD700" strokeWidth="1.4" />
    </svg>
  );
}

const MODULE_ICONS: readonly (readonly ChipKind[])[] = [
  ["tick", "aim"],
  ["curve", "orbit"],
  ["rng", "ok"],
];

export function HomeWorkspaceCharter() {
  const copy = useText().home.charter;
  const modules = copy.modules;

  return (
    <section className="ace-hub-stage overflow-x-hidden px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[76rem]">
        <p className="ace-hub-kicker">{copy.kicker}</p>
        <div className="ace-hub-title-row">
          <h2 className="ace-hub-title">{copy.title}</h2>
          <p className="ace-hub-badge" role="status">
            <span className="ace-hub-badge-dot" aria-hidden="true" />
            {copy.badge}
          </p>
        </div>
        <p className="ace-hub-lede">{copy.lede}</p>
        <div className="ace-hub-grid">
          {modules.map((module, moduleIndex) => (
            <article key={moduleIndex} className="ace-hub-card backdrop-blur-xl">
              <span className="ace-hub-card-extrude" aria-hidden="true" />
              <div className="ace-hub-card-face">
                <p className="ace-hub-card-kicker">{module.kicker}</p>
                <p className="ace-hub-card-copy">{module.copy}</p>
                <div className="ace-hub-chips">
                  {module.chips.map((label, chipIndex) => (
                    <span key={chipIndex} className="ace-hub-chip">
                      <ChipIcon kind={MODULE_ICONS[moduleIndex]?.[chipIndex] ?? "ok"} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
