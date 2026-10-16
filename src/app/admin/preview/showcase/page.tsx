import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { PremiumShowcase } from "@/components/premium-showcase";
import { getText } from "@/server/locale";
import { RANK_TIERS } from "@/lib/ranks";
import { adminPreviewEnabled } from "@/server/admin-preview";

export const instant = false;

export const metadata: Metadata = {
  title: "A.C.E. Premium showcase · dev preview",
  robots: { index: false, follow: false },
};

/** DEV-ONLY visual check of the public Premium showcase for all 10 tiers (no RP: no player data). 404 unless ACE_ADMIN_PREVIEW=1 in development. */
export default async function PremiumShowcasePreviewPage() {
  await connection();
  if (!adminPreviewEnabled()) notFound();
  const text = await getText();
  return (
    <main style={{ background: "#060607", minHeight: "100vh", padding: "1.5rem 1.5rem 2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "1rem 0.5rem", justifyItems: "center" }}>
        {RANK_TIERS.map((tier) => (
          <PremiumShowcase key={tier.level} level={tier.level} rating={null} labels={text.ranks.showcase} size="md" />
        ))}
      </div>
    </main>
  );
}
