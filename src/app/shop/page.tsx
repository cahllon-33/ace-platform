import type { Metadata } from "next";
import { LootLadder } from "@/components/loot-ladder";
import { MarketplaceCatalog, ShopLocaleHero } from "@/components/marketplace-catalog";
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
      <MarketplaceCatalog />
      <div className="mx-auto grid max-w-[76rem] gap-6 px-4 py-10 sm:px-6">
        <LootLadder />
      </div>
    </main>
  );
}
