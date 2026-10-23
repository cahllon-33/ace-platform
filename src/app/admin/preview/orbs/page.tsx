import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { RankOrb } from "@/components/rank-orb";
import { RANK_TIERS } from "@/lib/ranks";
import { adminPreviewEnabled } from "@/server/admin-preview";

export const instant = false;

export const metadata: Metadata = {
  title: "A.C.E rank orbs · dev preview",
  robots: { index: false, follow: false },
};

/** DEV-ONLY visual check of the admin RankOrb for all 10 tiers. 404 unless NODE_ENV=development AND ACE_ADMIN_PREVIEW=1. */
export default async function AdminOrbPreviewPage() {
  await connection();
  if (!adminPreviewEnabled()) notFound();
  const row = (art: "standard" | "premium", size: number) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "1.25rem 0.75rem", justifyItems: "center" }}>
      {RANK_TIERS.map((tier) => (
        <figure key={`${art}-${tier.level}`} style={{ margin: 0, display: "grid", justifyItems: "center", gap: "0.35rem" }}>
          <RankOrb level={tier.level} art={art} size={size} label="Rank" />
          <figcaption style={{ font: "700 0.72rem/1.2 system-ui", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C9A24A", textAlign: "center" }}>
            {tier.name}
            <br />
            <span style={{ opacity: 0.6 }}>Tier {tier.level}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
  const heading = { font: "800 0.8rem system-ui", letterSpacing: "0.18em", color: "#C9A24A", margin: "1.5rem 0 1rem" } as const;
  return (
    <main style={{ background: "#060607", minHeight: "100vh", padding: "1.5rem 2rem", color: "#fff" }}>
      <p style={heading}>STANDARD · 140px</p>
      {row("standard", 140)}
      <p style={heading}>PREMIUM · 140px</p>
      {row("premium", 140)}
      <p style={heading}>TABLE SIZE · 46px / 34px</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {RANK_TIERS.map((tier) => <RankOrb key={`s${tier.level}`} level={tier.level} size={46} label="Rank" />)}
        {RANK_TIERS.map((tier) => <RankOrb key={`p${tier.level}`} level={tier.level} art="premium" size={46} label="Rank" />)}
        {RANK_TIERS.map((tier) => <RankOrb key={`x${tier.level}`} level={tier.level} art={tier.level % 2 ? "premium" : "standard"} size={34} label="Rank" />)}
      </div>
    </main>
  );
}
