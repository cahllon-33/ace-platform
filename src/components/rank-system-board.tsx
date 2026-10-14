"use client";

import { useState } from "react";
import { DivisionChips } from "@/components/division-chips";
import { RankTurntable } from "@/components/rank-turntable";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";
import {
  RANK_TIERS,
  divisionShowcaseMetrics,
  rankEmblemAsset,
  type RankDivision,
  type RankTier,
} from "@/lib/ranks";

export function RankSystemBoard({
  liveRating = null,
}: {
  liveRating?: number | null;
}) {
  const { t } = useI18n();
  const copy = useText().ranks;
  const emblemAlt = (tier: RankTier) =>
    tier.level === 10
      ? interpolate(copy.board.emblemAltLegend, { level: tier.level })
      : interpolate(copy.board.emblemAlt, {
          level: tier.level,
          crystal: tier.crystalName,
          name: tier.name,
        });
  const [selected, setSelected] = useState<RankTier>(RANK_TIERS[9]);
  const [division, setDivision] = useState<RankDivision>("I");
  const asset = rankEmblemAsset(selected.level);
  const legend = selected.level === 10;
  const sample = divisionShowcaseMetrics(selected, division);
  const progress = sample.progress;
  const rating =
    liveRating != null
      ? liveRating.toLocaleString("en-US")
      : sample.ratingTarget.toLocaleString("en-US");

  return (
    <section className="ace-rank-board" aria-label={t("ranksTitle")}>
      <h2 className="ace-rank-i18n-title">{t("ranksTitle")}</h2>
      <header className="ace-rank-board-head">
        <p>{t("brandSubline")}</p>
        <p>{t("rankSystemMeta")}</p>
        <p>{t("slogan")}</p>
      </header>
      <div className="notranslate" translate="no">
        <ul className="ace-rank-portrait-row">
          {RANK_TIERS.map((tier) => {
            const still = rankEmblemAsset(tier.level).stillSrc;
            const active = tier.level === selected.level;
            return (
              <li
                key={tier.level}
                className={`ace-rank-portrait-shell${active ? ` ace-div-aura ace-div-aura-${division}` : ""}`}
              >
                <button
                  type="button"
                  className={`ace-rank-portrait ${active ? "ace-rank-portrait-active" : ""}`}
                  aria-pressed={active}
                  aria-label={interpolate(copy.board.selectEmblem, {
                    name: tier.name,
                    level: tier.level,
                  })}
                  onClick={() => setSelected(tier)}
                >
                  <span className="ace-rank-medal">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={still} alt={emblemAlt(tier)} />
                    <span className="ace-level-pip">{tier.level}</span>
                  </span>
                  <span className="ace-rank-portrait-name">{tier.crystalName}</span>
                  <span className="ace-rank-portrait-engine">{tier.name.toUpperCase()}</span>
                </button>
                <DivisionChips active={division} onSelect={setDivision} compact />
              </li>
            );
          })}
        </ul>

        <aside className="ace-rp-protocol" aria-label={t("rankProtocolTitle")}>
          <h3>{t("rankProtocolTitle")}</h3>
          <p>{t("rankProtocolBody")}</p>
        </aside>

        <div className="ace-rank-detail">
          <article className={`ace-rank-detail-card ace-div-aura ace-div-aura-${division}`}>
            <span className="ace-rank-medal ace-rank-medal-detail">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.stillSrc}
                alt={emblemAlt(selected)}
                className="ace-rank-detail-thumb"
              />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="ace-mini-crown" aria-hidden="true" />
                <h3 className="text-2xl font-semibold tracking-[0.14em] text-[#FFD700] sm:text-3xl">
                  {selected.name.toUpperCase()}
                </h3>
                {legend ? <span className="ace-premium-badge">{copy.board.premium}</span> : null}
              </div>
              <p className="mt-2 text-xs tracking-[0.22em] text-[#A9ABB3]">
                {copy.tiers[selected.level].tagline}
              </p>
              <p className="mt-3 text-[0.65rem] tracking-[0.18em] text-[#FFD700]">
                {interpolate(copy.division.label, { division })}
              </p>
              <DivisionChips active={division} onSelect={setDivision} />
              <div className="mt-5">
                <div className="mb-1 flex justify-between text-[0.65rem] uppercase tracking-[0.16em] text-[#A9ABB3]">
                  <span>{t("rankProgress")}</span>
                  <span>{progress}%</span>
                </div>
                <div className="ace-progress-track">
                  <div className="ace-progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#A9ABB3]">
                    {t("competitiveRating")}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-[#FFD700]">
                    {liveRating != null ? `${rating} RP` : `${selected.minRating.toLocaleString("en-US")} RP`}
                  </p>
                  <p className="text-sm leading-6 text-white">
                    {liveRating != null ? t("ratingStored") : t("ratingFloor")}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#A9ABB3]">
                    {t("targetWinRate")}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#F5F3EC]">{sample.winRate}</p>
                  <p className="text-sm leading-6 text-white">{t("divisionTarget")}</p>
                </div>
              </div>
            </div>
          </article>
          <RankTurntable key={selected.level} tier={selected} />
        </div>
      </div>
    </section>
  );
}
