/** Header brand: the "A.C.E" wordmark only (no icon), with the tagline under it. */
export function AceLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={"ace-logo-wrap inline-flex items-center gap-2" + (compact ? " is-compact" : "")}>
      <span className="flex flex-col leading-none">
        <span className="ace-wordmark text-lg font-semibold tracking-[0.04em] text-[#FFD76A]">A.C.E</span>
        <span className="ace-tagline">Autonomous Anti-Cheat | Competitive Calibration | Elite Players</span>
      </span>
    </span>
  );
}
