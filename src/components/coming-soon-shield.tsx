"use client";

import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";

export function ComingSoonShield() {
  const { t } = useI18n();
  const copy = useText().home.comingSoon;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#FFD700] bg-[#020203] p-6">
      <p className="ace-client-badge">{copy.badge}</p>
      <h2 className="mt-4 text-lg font-semibold text-[#F5F3EC]">{t("integrityDownload")}</h2>
      <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-white">{copy.body}</p>
      <p className="mt-4">
        <span className="inline-flex cursor-not-allowed rounded-full border border-[#FFD700]/40 px-4 py-2 text-sm text-[#c8c4b8]">
          {t("downloadClient")}
        </span>
      </p>
    </div>
  );
}
