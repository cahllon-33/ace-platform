"use client";

import { ConnectedCount } from "@/components/connected-count";
import { useI18n } from "@/components/locale-provider";

export function LiveIntegrityCounter() {
  const { t } = useI18n();

  return (
    <div className="ace-counter-pulse inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-full px-5 py-2.5 text-sm text-white">
      <span className="inline-flex items-center gap-2">
        <span className="ace-gold-pulse-dot" aria-hidden="true" />
        <ConnectedCount />
      </span>
      <span className="hidden h-4 w-px bg-[#FFD700]/40 sm:block" aria-hidden="true" />
      <span>{t("activeMatches", { count: 0 })}</span>
    </div>
  );
}
