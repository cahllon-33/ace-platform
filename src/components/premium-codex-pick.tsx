"use client";

import type { ReactNode } from "react";
import { setPremiumPreviewLevel, usePremiumPreviewLevel } from "@/lib/premium-preview-store";

/** Makes a codex row select its tier for the Premium preview card on the same page. */
export function PremiumCodexPick({ level, label, children }: { level: number; label: string; children: ReactNode }) {
  const active = usePremiumPreviewLevel() === level;
  return (
    <button
      type="button"
      className={`ace-pcodex-pick${active ? " is-active" : ""}`}
      aria-pressed={active}
      aria-label={label}
      onClick={() => setPremiumPreviewLevel(level)}
    >
      {children}
    </button>
  );
}
