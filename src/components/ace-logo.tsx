import Image from "next/image";

export function AceLogo({ compact = false }: { compact?: boolean }) {
  const size = compact ? 36 : 40;

  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src="/images/ace-entrance-logo.jpg"
        alt=""
        width={size}
        height={size}
        className={
          compact
            ? "h-9 w-9 rounded-sm object-contain"
            : "h-10 w-10 rounded-sm object-contain"
        }
      />
      <span className="ace-wordmark text-lg font-semibold tracking-[0.04em] text-[#FFD76A]">A.C.E</span>
    </span>
  );
}
