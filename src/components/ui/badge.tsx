import type { ReactNode } from "react";

type BadgeTone = "gold" | "muted" | "success" | "danger";

const tones: Record<BadgeTone, string> = {
  gold: "border-ace-gold/50 text-ace-gold-bright bg-ace-gold/8",
  muted: "border-ace-line text-ace-muted bg-ace-void/60",
  success: "border-ace-success/40 text-ace-success bg-ace-success/10",
  danger: "border-ace-danger/40 text-ace-danger bg-ace-danger/10",
};

export function Badge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
