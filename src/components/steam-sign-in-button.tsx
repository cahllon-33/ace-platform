"use client";

import { useId, useState } from "react";
import { LegalAcceptanceField } from "@/components/legal-acceptance";
import { useI18n } from "@/components/locale-provider";
import type { MessageKey } from "@/lib/i18n";
import { STEAM_AUTH_HREF } from "@/lib/site";

function SteamMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className ?? "h-5 w-5"}
    >
      <path
        fill="#ffffff"
        d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58c.26 1.29 1.41 2.27 2.81 2.27a2.7 2.7 0 0 0 2.7-2.7v-.07l4.12-2.94A4.24 4.24 0 0 0 19.5 9.26 4.24 4.24 0 0 0 15.26 5.02 4.24 4.24 0 0 0 11.02 9.26v.05L8.04 12.3a2.7 2.7 0 0 0-1.92-.15L2 10.4A10 10 0 0 1 12 2m-3 13.87a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3m8.12-8.7a2.09 2.09 0 1 1-2.09 2.09 2.09 2.09 0 0 1 2.09-2.09z"
      />
    </svg>
  );
}

export function SteamSignInButton({
  compact = false,
  label,
  i18nKey,
  variant = "ghost",
  next,
}: {
  compact?: boolean;
  label?: string;
  i18nKey?: MessageKey;
  variant?: "ghost" | "primary" | "steam";
  next?: "squad";
}) {
  const { t } = useI18n();
  const text = i18nKey ? t(i18nKey) : (label ?? t("signInSteam"));
  const acceptId = useId();
  const [accepted, setAccepted] = useState(false);

  const [steamTone, setSteamTone] = useState(false);
  const skin =
    variant === "steam"
      ? `ace-steam-cta${steamTone ? " is-steam" : ""}`
      : variant === "primary"
        ? "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#FFD76A] to-[#D4AF37] text-[#020203] font-semibold"
        : "inline-flex items-center justify-center gap-2 rounded-full border border-[#FFD76A]/45 text-[#F5F3EC] hover:border-[#FFD76A]";

  const size = compact ? "min-h-11 px-4 text-sm" : variant === "steam" ? "" : "min-h-12 px-6 text-sm";

  return (
    <div
      className={`flex flex-col gap-2 ${compact ? "items-end" : "items-stretch"}`}
      style={variant === "steam" ? { flex: "none", width: "100%" } : undefined}
    >
      <LegalAcceptanceField id={acceptId} checked={accepted} onChange={setAccepted} />
      <a
        href={next === "squad" ? `${STEAM_AUTH_HREF}?next=squad` : STEAM_AUTH_HREF}
        aria-disabled={!accepted}
        aria-label={`${text}. Official Steam OpenID sign-in`}
        className={`${skin} ${size} ${accepted ? "" : "pointer-events-none opacity-45"}`}
        onPointerDown={() => {
          if (variant === "steam") setSteamTone(true);
        }}
        onClick={(event) => {
          if (!accepted) event.preventDefault();
        }}
      >
        <SteamMark className={variant === "steam" ? "ace-steam-mark" : "h-5 w-5"} />
        {text}
      </a>
    </div>
  );
}
