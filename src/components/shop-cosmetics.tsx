import { connection } from "next/server";
import { CosmeticShop } from "@/components/cosmetic-shop";
import { shopCatalog } from "@/server/cosmetics";
import { readSessionUser } from "@/server/session";

export async function ShopCosmetics() {
  await connection();
  const user = await readSessionUser().catch(() => null);
  return <CosmeticShop items={await shopCatalog(user?.id ?? null)} />;
}
