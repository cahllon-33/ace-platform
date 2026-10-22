import type { Metadata } from "next";
import { MarketplaceCatalog, ShopLocaleHero } from "@/components/marketplace-catalog";
import { Suspense } from "react";
import { ShopCosmetics } from "@/components/shop-cosmetics";
import { PlanCards } from "@/components/plan-cards";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.desk.shop.meta.title,
    description: text.desk.shop.meta.description,
  };
}

export default function ShopPage() {
  return (
    <main className="ace-market-page">
      <ShopLocaleHero />
      <section className="shop49" aria-label="A.C.E PLUS · A.C.E PREMIUM">
        <PlanCards headingLevel={3} />
      </section>
      <Suspense fallback={null}>
        <ShopCosmetics />
      </Suspense>
      <MarketplaceCatalog />
    </main>
  );
}
