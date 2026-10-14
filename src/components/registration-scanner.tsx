"use client";

import { useI18n } from "@/components/locale-provider";

export function RegistrationScanner() {
  const { t } = useI18n();

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div className="ace-radar-ring absolute inset-0 rounded-full border border-ace-gold/50" />
      <div
        className="ace-radar-ring absolute inset-0 rounded-full border border-ace-gold/30"
        style={{ animationDelay: "0.9s" }}
      />
      <div className="absolute inset-2 overflow-hidden rounded-full border border-ace-gold/40 bg-[#121212]">
        <div
          aria-hidden="true"
          className="ace-radar-sweep absolute inset-0 origin-center"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255,214,107,0.35) 50deg, transparent 80deg)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-2 text-center">
          <p className="text-[0.55rem] uppercase tracking-[0.12em] text-ace-gold">{t("registered")}</p>
          <p className="font-mono text-lg font-semibold text-white">0/100</p>
          <p className="text-[0.5rem] uppercase tracking-[0.14em] text-ace-muted">{t("teams")}</p>
          <p className="sr-only">{t("registeredTeams")}</p>
        </div>
      </div>
    </div>
  );
}
