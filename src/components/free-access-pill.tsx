export function FreeAccessPill({ label, note }: { label: string; note: string }) {
  return (
    <p
      className="flex min-h-12 w-full flex-col items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[#0B0B0C] px-6 py-2 text-sm font-semibold uppercase leading-tight tracking-[0.14em] text-[#F5F3EC]"
      aria-label={`${label}. ${note}`}
    >
      <span>{label}</span>
      <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[#FFD76A]">
        {note}
      </span>
    </p>
  );
}
