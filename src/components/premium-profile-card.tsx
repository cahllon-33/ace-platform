import { PremiumShowcase, type PremiumShowcaseLabels } from "@/components/premium-showcase";
import { RANK_TIERS } from "@/lib/ranks";
import { PremiumProfileCardLive } from "@/components/premium-profile-card-live";

export type PremiumCardLabels = {
  planTag: string;
  seal: string;
  rank: string;
  rating: string;
  previewTag: string;
  rankLabel: string;
  showcase: PremiumShowcaseLabels;
};

/**
 * Animated A.C.E Premium profile card: gold shimmer sweep, animated frame, soft glow.
 * Pure presentation. Callers must only render the non-preview variant after a server-side
 * isPremiumPlan() check of the stored plan. Motion stops under prefers-reduced-motion (CSS).
 */
export function PremiumProfileCard({
  name,
  avatarUrl,
  level,
  rating,
  labels,
  preview = false,
}: {
  name: string;
  avatarUrl?: string | null;
  level: number;
  rating: number | null;
  labels: PremiumCardLabels;
  preview?: boolean;
}) {
  const tier = RANK_TIERS.find((item) => item.level === level) ?? RANK_TIERS[0];
  return (
    <div className="ace-pcard" data-preview={preview ? "true" : undefined}>
      <div className="ace-pcard-frame" aria-hidden="true" />
      <div className="ace-pcard-body">
        <div className="ace-pcard-top">
          <span className="ace-pcard-plan">{labels.planTag}</span>
          {preview ? <span className="ace-pcard-preview">{labels.previewTag}</span> : null}
        </div>
        <div className="ace-pcard-main">
          <span className="ace-pcard-avatar">
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatarUrl} alt="" />
            ) : (
              <span aria-hidden="true">{name.slice(0, 1).toUpperCase()}</span>
            )}
          </span>
          <div className="min-w-0">
            <p className="ace-pcard-name">{name}</p>
            <p className="ace-pcard-seal">◆ {labels.seal}</p>
          </div>
        </div>
        <div className="ace-pcard-showcase">
          <PremiumShowcase level={tier.level} rating={rating} labels={labels.showcase} size="lg" />
        </div>
      </div>
      <span className="ace-pcard-shimmer" aria-hidden="true" />
    </div>
  );
}

/** Builds card labels from the server text bag. */
export function premiumCardLabels(text: {
  pricing: { premiumExtras: { card: { planTag: string; seal: string; rank: string; rating: string; previewTag: string } } };
  ranks: { emblem: { rankLabel: string }; showcase: PremiumShowcaseLabels };
}): PremiumCardLabels {
  const c = text.pricing.premiumExtras.card;
  return {
    planTag: c.planTag,
    seal: c.seal,
    rank: c.rank,
    rating: c.rating,
    previewTag: c.previewTag,
    rankLabel: text.ranks.emblem.rankLabel,
    showcase: text.ranks.showcase,
  };
}

/** Preview block: sample name, Legend by default; follows a tier picked in a rank grid on the page. Always tagged PREVIEW. */
export function PremiumProfileCardPreview({
  text,
}: {
  text: Parameters<typeof premiumCardLabels>[0] & { pricing: { premiumExtras: { card: { sampleName: string; previewNote: string } } } };
}) {
  const c = text.pricing.premiumExtras.card;
  return (
    <div className="ace-pcard-wrap">
      <PremiumProfileCardLive name={c.sampleName} defaultLevel={10} labels={premiumCardLabels(text)} />
      <p className="ace-pcard-note">{c.previewNote}</p>
    </div>
  );
}
