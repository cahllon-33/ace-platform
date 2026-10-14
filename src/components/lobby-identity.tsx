"use client";

import Link from "next/link";
import { CalibrationTrack } from "@/components/calibration-track";
import { useI18n } from "@/components/locale-provider";
import { EliteSeal } from "@/components/elite-seal";
import { PlanCards } from "@/components/plan-cards";
import { useText } from "@/components/text-provider";
export function LobbyIdentity({
  live,
  displayName,
  rpLabel,
  tierLabel,
  placementPlayed,
  elite = false,
}: {
  live: boolean;
  displayName: string | null;
  rpLabel: string;
  tierLabel: string | null;
  placementPlayed: number;
  elite?: boolean;
}) {
  const { t } = useI18n();
  const copy = useText().home.identity;

  return (
    <div className="ace-ops-slot">
    <article className="ace-ops-card flex h-full flex-col p-5">
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#D4AF37]">{t("identityHub")}</p>
      {elite ? (
        <div className="mt-3 flex items-center gap-3">
          <EliteSeal className="h-12 w-auto" />
          <span className="text-xs font-bold tracking-[0.22em] text-[#FFD700]">{copy.elite}</span>
        </div>
      ) : null}
      <h2 className="mt-2 text-xl font-semibold text-[#F5F3EC]">
        {live ? displayName : copy.profilePlaceholder}
      </h2>
      <p className="mt-1 text-xs leading-5 text-[#A9ABB3]">
        {live ? t("identityLive") : t("identityEmpty")}
      </p>
      <div className="ace-ops-plate mt-5">
        <p className="ace-rp-chrome">{live ? rpLabel : t("rpEmpty")}</p>
        <p className="mt-1 text-sm text-[#F5F3EC]">{live && tierLabel ? tierLabel : t("tierEmpty")}</p>
      </div>
      <Link
        href={live ? "/dashboard" : "/api/auth/steam"}
        className="mt-4 inline-flex min-h-11 w-fit items-center rounded-full border border-[#D4AF37]/50 px-4 text-xs tracking-[0.16em] text-[#FFD76A]"
      >
        {t("viewProfile")}
      </Link>
      <div className="mt-auto">
        <CalibrationTrack played={placementPlayed} />
      </div>
    </article>
    </div>
  );
}

export function LobbySeasonStats({
  live,
  matches,
  winRate,
}: {
  live: boolean;
  matches: number;
  winRate: string;
}) {
  const { t } = useI18n();
  const copy = useText().home.identity;

  return (
    <div className="ace-ops-side">
      <article className="ace-ops-card ace-ops-season flex h-full flex-col p-5">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#D4AF37]">{t("seasonTracker")}</p>
        <p className="mt-2 text-lg font-semibold text-[#F5F3EC]">{t("seasonEnds")}</p>
        <p className="mt-2 text-sm leading-6 text-[#A9ABB3]">{t("seasonLayout")}</p>
        <div className="ace-crest-stage mt-auto" aria-hidden="true">
          <span className="ace-vault-halo" />
          <div className="ace-season-crest">
            <span className="ace-crest-face" />
          </div>
        </div>
      </article>
      <article className="ace-ops-card ace-ops-stats p-5">
        <h2 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#D4AF37]">{t("yourStats")}</h2>
        <dl className="ace-ops-metrics mt-4">
          <div>
            <dt>{t("matches")}</dt>
            <dd>{live ? matches : 0}</dd>
          </div>
          <div>
            <dt>{t("winRate")}</dt>
            <dd>{winRate}</dd>
          </div>
          <div>
            <dt>{t("kd")}</dt>
            <dd>{copy.notAvailable}</dd>
          </div>
        </dl>
        <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">
          {live ? t("statsLive") : t("statsEmpty")}
        </p>
        <div className="ace-stat-slots" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </article>
    </div>
  );
}

export function LobbyMembership() {
  const { t } = useI18n();
  const copy = useText().home.membership;

  return (
    <section className="mx-auto max-w-[90rem] px-4 py-4 sm:px-6" aria-labelledby="membership">
      <h2
        id="membership"
        className="text-center text-xs font-semibold tracking-[0.28em] text-[#FFD76A]"
      >
        {t("membership")}
      </h2>
      <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-[#A9ABB3]">{t("membershipLede")}</p>
      <PlanCards headingLevel={3} />
      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-[#A9ABB3]">
        {t("membershipDisclosure", { online: t("playersOnline", { count: 0 }) })}
      </p>
      <div className="mt-5 flex justify-center">
        <Link
          href="/pricing"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[#0B0B0C] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFD700] hover:border-[#FFD700]"
        >
          {copy.compareLink}
        </Link>
      </div>
    </section>
  );
}
