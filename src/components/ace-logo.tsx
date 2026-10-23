import Image from "next/image";

export function AceLogo({ compact = false }: { compact?: boolean }) {
  const size = compact ? 36 : 40;

  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src="/images/ace-badge.png"
        alt=""
        width={size}
        height={size}
        className={
          compact
            ? "h-9 w-9 object-contain drop-shadow-[0_0_6px_rgba(255,205,90,.35)]"
            : "h-10 w-10 object-contain drop-shadow-[0_0_6px_rgba(255,205,90,.35)]"
        }
      />
      <span className="flex flex-col leading-none">
        <span className="ace-wordmark text-lg font-semibold tracking-[0.04em] text-[#FFD76A]">A.C.E</span>
        <span className="ace-tagline">Autonomous Anti-Cheat | Competitive Calibration | Elite Players</span>
      </span>
    </span>
  );
}
