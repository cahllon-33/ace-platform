"use client";

import { useState } from "react";
import { DivisionChips } from "@/components/division-chips";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";
import { RANK_TIERS, divisionShowcaseMetrics, type RankDivision, type RankTier } from "@/lib/ranks";
import { RANK_DIVISIONS } from "@/lib/site";

function LegendCrown() {
  return (
    <svg className="ace-crown-glow h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.5 18.5h17v2.2H3.5zM4 17.2 7.2 10l4.8 5.4L16.8 8 20 17.2z"
        fill="url(#ace-rank-crown-fill)"
        stroke="#ffd700"
        strokeWidth="0.8"
      />
      <circle cx="7.2" cy="9.2" r="1.15" fill="#fffce0" />
      <circle cx="16.8" cy="7.2" r="1.15" fill="#fffce0" />
      <circle cx="12" cy="14.6" r="0.9" fill="#fffce0" />
      <defs>
        <linearGradient id="ace-rank-crown-fill" x1="4" y1="8" x2="20" y2="20">
          <stop offset="0%" stopColor="#fffce0" />
          <stop offset="45%" stopColor="#fff000" />
          <stop offset="100%" stopColor="#8f6418" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RankShard({ level }: { level: number }) {
  return (
    <div className={`ace-shard ace-shard-${level}`} aria-hidden="true">
      <span className="ace-shard-plate" />
      <span className="ace-shard-facet" />
      <span className="ace-shard-core" />
      {level === 10 ? <span className="ace-shard-crown" /> : null}
    </div>
  );
}

export function RankTierCard({
  tier,
  compact = false,
}: {
  tier: RankTier;
  compact?: boolean;
}) {
  const legend = tier.level === 10;
  const [division, setDivision] = useState<RankDivision>("I");
  const sample = divisionShowcaseMetrics(tier, division);
  const copy = useText().ranks;

  return (
    <article
      className={`ace-rank-panel ace-card-hover ace-div-aura ace-div-aura-${division} ${tier.toneClass} ${legend ? "ace-rank-legend" : ""} ${compact ? "p-4" : "p-5"}`}
    >
      <RankShard level={tier.level} />
      <p className="mt-3 text-[0.62rem] uppercase tracking-[0.2em] text-white/55">
        {interpolate(copy.card.rank, { level: tier.level })}
      </p>
      <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.12em] text-white">
        {legend ? <LegendCrown /> : null}
        {tier.name}
      </h2>
      <p className={`mt-1 ${compact ? "text-[0.65rem]" : "text-xs"} leading-5 text-white/70`}>
        {copy.tiers[tier.level].material}
      </p>
      <p className="mt-2 text-[0.65rem] uppercase tracking-[0.16em] text-[#D4AF37]/80">
        {interpolate(copy.division.summary, {
          divisions: RANK_DIVISIONS.length,
          levels: RANK_TIERS.length * RANK_DIVISIONS.length,
        })}
      </p>
      <div className="mt-3">
        <DivisionChips active={division} onSelect={setDivision} compact />
      </div>
      <dl className={`mt-4 space-y-2 ${compact ? "text-[0.7rem]" : "text-sm"}`}>
        <div>
          <dt className="text-white/45">{interpolate(copy.division.label, { division })}</dt>
          <dd className="text-white">{interpolate(copy.card.targetWinRate, { winRate: sample.winRate })}</dd>
        </div>
        <div>
          <dt className="text-white/45">{copy.card.calibrationTarget}</dt>
          <dd className="text-white">{sample.ratingTarget.toLocaleString("en-US")} RP</dd>
        </div>
        <div>
          <dt className="text-white/45">{copy.card.floor}</dt>
          <dd className="text-white">{tier.minRating}+</dd>
        </div>
      </dl>
      <p className="mt-2 text-[0.62rem] text-white/40">{copy.card.samplesNote}</p>
      <div className="mt-4">
        <p className="mb-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/40">
          {copy.card.progressMockup}
        </p>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="ace-rank-meter h-full rounded-full"
            style={{ width: `${sample.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}

export function RankTierGrid({ compact = false }: { compact?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {RANK_TIERS.map((tier) => (
        <li key={tier.level}>
          <RankTierCard tier={tier} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
