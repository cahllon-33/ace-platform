"use client";

import { PageIntro } from "@/components/public/page-intro";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";

export function TournamentLocaleIntro() {
  const { t } = useI18n();
  const copy = useText().teams.tournaments.intro;

  return (
    <>
      <PageIntro kicker={t("tourneyKicker")} title={copy.title}>
        {copy.lede}
      </PageIntro>
      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#121318] p-5">
          <dt className="text-xs uppercase tracking-[0.16em] text-[#D4AF37]">{t("tourneyFormat")}</dt>
          <dd className="mt-2 text-[#F5F3EC]">{copy.formatValue}</dd>
        </div>
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#121318] p-5">
          <dt className="text-xs uppercase tracking-[0.16em] text-[#D4AF37]">{t("tourneyCapacity")}</dt>
          <dd className="mt-2 text-[#F5F3EC]">{t("tourneyCapacityValue")}</dd>
        </div>
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#121318] p-5">
          <dt className="text-xs uppercase tracking-[0.16em] text-[#D4AF37]">{t("tourneyStatus")}</dt>
          <dd className="mt-2 text-[#F5F3EC]">{t("tourneyStatusValue")}</dd>
        </div>
      </dl>
      <section className="mt-10 rounded-3xl border border-[#FFD76A]/25 bg-[#121212] p-6">
        <h2 className="text-lg font-semibold text-white">{copy.briefTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-[#A9ABB3]">{copy.briefBody}</p>
      </section>
    </>
  );
}

export function TournamentLocaleLoading() {
  const { t } = useI18n();
  return <p className="text-sm text-[#bdb8a8]">{t("tourneyLoading")}</p>;
}
