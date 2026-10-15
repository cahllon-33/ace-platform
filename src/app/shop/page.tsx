import type { Metadata } from "next";
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
    </main>
  );
}
