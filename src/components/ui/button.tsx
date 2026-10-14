"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useText } from "@/components/text-provider";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-ace-gold-bright to-ace-gold text-ace-void font-semibold shadow-[0_0_24px_rgba(212,175,55,0.18)] hover:from-[#ffe08a] hover:to-ace-gold-bright",
  secondary:
    "border border-ace-gold/40 bg-ace-graphite text-ace-gold-bright hover:border-ace-gold hover:bg-ace-void",
  ghost:
    "border border-ace-line bg-transparent text-ace-text hover:border-ace-gold/40 hover:text-ace-gold-bright",
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out";

const disabledClass =
  "cursor-not-allowed border border-ace-line bg-ace-void text-ace-muted opacity-80 shadow-none hover:border-ace-line hover:bg-ace-void hover:text-ace-muted";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

export function PlannedButton({
  children,
  reason,
  compact = false,
  look = "muted",
}: {
  children: ReactNode;
  reason: string;
  compact?: boolean;
  look?: "muted" | "foil";
}) {
  const planned = useText().consent.planned;
  const foil = look === "foil";
  const skin = foil ? "ace-gold-foil" : `${disabledClass}`;

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      aria-label={`${typeof children === "string" ? children : planned.fallbackLabel}. ${reason}`}
      title={reason}
      className={`${base} ${skin} ${compact ? "min-h-11 px-4 py-2" : "min-h-12 py-2"}`}
    >
      <span className="relative z-10 flex flex-col items-center leading-tight">
        <span>{children}</span>
        <span
          className={`mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] ${look === "muted" ? "text-ace-muted" : "text-black/65"}`}
        >
          {planned.badge}
        </span>
      </span>
    </button>
  );
}
