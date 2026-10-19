"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { interpolate } from "@/lib/interpolate";
import { PREMIUM_ART_META, RANK_TIERS, rankIllustratedAsset } from "@/lib/ranks";
import "./premium-showcase.css";

export type PremiumShowcaseLabels = {
  /** "Rank tier {n}" */
  rankTier: string;
  /** Premium chip text */
  chip: string;
  /** "{rank} Premium rank art" */
  artAlt: string;
};

/** Fixed tier tones (same palette as .ace-rank-tone-N). */
const TONE: Record<number, string> = {
  1: "#9aa3ad", 2: "#c08a4a", 3: "#d4a094", 4: "#d7e4f2", 5: "#c4a15a",
  6: "#ffd66b", 7: "#7ef0ff", 8: "#4d8dff", 9: "#c084fc", 10: "#ffd66b",
};

const SIZES = { lg: { w: 196, sizes: "196px" }, md: { w: 148, sizes: "148px" }, sm: { w: 64, sizes: "64px" } } as const;

/**
 * A.C.E Premium rank showcase: gold-bezeled glass card holding the WHOLE badge art (contain + padding, never cropped),
 * holographic sheen sweep, subtle 3D tilt on hover (fine pointers only; static on touch and reduced motion),
 * slim glowing gold pedestal and a real floor reflection. Render only for players whose stored plan shows Premium art.
 * `sm` is the compact seat variant (card + sheen, no pedestal or caption).
 */
export function PremiumShowcase({
  level,
  rating,
  labels,
  size = "lg",
  caption = true,
}: {
  level: number;
  rating: number | null;
  labels: PremiumShowcaseLabels;
  size?: keyof typeof SIZES;
  caption?: boolean;
}) {
  const tier = RANK_TIERS[Math.min(10, Math.max(1, Math.round(level))) - 1];
  const asset = rankIllustratedAsset(tier.level);
  const src = asset.hdSrc ?? asset.stillSrc;
  const card = useRef<HTMLDivElement>(null);
  const dims = SIZES[size];
  const alt = interpolate(labels.artAlt, { rank: tier.name });
  const meta = PREMIUM_ART_META[tier.level];
  // Contain-fit box with the art's exact ratio inside the 92:132 glass (max 96% wide, 97% tall), so the feather mask follows the real image edges.
  const cardRatio = 92 / 132;
  const artRatio = meta ? meta.w / meta.h : cardRatio;
  const box =
    artRatio < cardRatio
      ? { height: "97%", width: `${((97 * artRatio) / cardRatio).toFixed(2)}%` }
      : { width: "96%", height: `${((96 * cardRatio) / artRatio).toFixed(2)}%` };

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !card.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = card.current.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;
    card.current.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
    card.current.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
    card.current.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    card.current?.style.removeProperty("--ry");
    card.current?.style.removeProperty("--rx");
    card.current?.style.removeProperty("--mx");
  };

  return (
    <figure
      className={`ace-pshow is-${size}`}
      style={{
        ["--pshow-w" as string]: `${dims.w}px`,
        ["--pshow-tone" as string]: TONE[tier.level],
        ["--pshow-art-bg" as string]: meta?.tone ?? "#0a0a0a",
      }}
      data-tier={tier.level}
    >
      <div className="ace-pshow-stage">
        {size !== "sm" ? <span className="ace-pshow-beam" aria-hidden="true" /> : null}
        <div ref={card} className="ace-pshow-card" onPointerMove={onMove} onPointerLeave={onLeave}>
          <div className="ace-pshow-bezel">
            <div className="ace-pshow-glass">
              <span className="ace-pshow-artbox" style={box}>
                <Image className="ace-pshow-art" src={src} alt={alt} fill sizes={dims.sizes} unoptimized />
              </span>
              <span className="ace-pshow-sheen" aria-hidden="true" />
              <span className="ace-pshow-gloss" aria-hidden="true" />
            </div>
          </div>
        </div>
        {size !== "sm" ? (
          <>
            <span className="ace-pshow-pedestal" aria-hidden="true" />
            <div className="ace-pshow-reflection" aria-hidden="true">
              <div className="ace-pshow-bezel">
                <div className="ace-pshow-glass">
                  <span className="ace-pshow-artbox" style={box}>
                    <Image className="ace-pshow-art" src={src} alt="" fill sizes={dims.sizes} unoptimized />
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {caption && size !== "sm" ? (
        <figcaption className="ace-pshow-caption">
          <span className="ace-pshow-tier">{tier.name}</span>
          <span className="ace-pshow-tiernum">{interpolate(labels.rankTier, { n: String(tier.level) })}</span>
          {rating != null ? (
            <span className="ace-pshow-rp">
              {rating.toLocaleString("en-US")} <small>RP</small>
            </span>
          ) : null}
          <span className="ace-pshow-chip">{labels.chip}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
