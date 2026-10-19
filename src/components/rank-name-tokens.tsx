import { RANK_TIERS, rankLabelParts, type RankDivision } from "@/lib/ranks";
import { interpolate } from "@/lib/i18n";

/**
 * Rank name and division as separate tokens (never concatenated into one string, never duplicated).
 * `divisionLabel` is the localized "Division {division}" template.
 */
export function RankNameTokens({
  level,
  division,
  divisionLabel,
  premiumName = false,
  className = "",
}: {
  level: number;
  division?: RankDivision | null;
  divisionLabel?: string;
  /** Show the Premium/engine name as a second token when it differs from the standard label. */
  premiumName?: boolean;
  className?: string;
}) {
  const tier = RANK_TIERS.find((t) => t.level === level) ?? RANK_TIERS[0];
  const parts = premiumName ? rankLabelParts(tier) : [tier.crystalName];
  return (
    <span className={`ace-rank-tokens ${className}`.trim()}>
      {parts.map((part, i) => (
        <span key={part} className={i === 0 ? "ace-rank-token" : "ace-rank-token is-alt"}>
          {part}
        </span>
      ))}
      {division && divisionLabel ? (
        <span className="ace-rank-token is-division">{interpolate(divisionLabel, { division })}</span>
      ) : null}
    </span>
  );
}
