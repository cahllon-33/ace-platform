import type { Metadata } from "next";
import { connection } from "next/server";
import { AdminCommerce } from "@/components/admin-commerce";
import { readIsSteamOwner } from "@/server/admin-gate";
import { loadCommerce } from "@/server/commerce-admin";

export const instant = false;
export const metadata: Metadata = { title: "A.C.E. Payments", robots: { index: false, follow: false } };

/** Owner-only (ACE_ADMIN_STEAM_IDS Steam session). Every action re-checks inside the server action. */
export default async function AdminCommercePage() {
  await connection();
  const owner = await readIsSteamOwner();
  const snap = owner ? await loadCommerce() : null;
  return (
    <main className="ace-admin-page" suppressHydrationWarning>
      <AdminCommerce owner={owner} initial={snap && snap.ok ? snap.data : null} error={snap && !snap.ok ? snap.error : null} />
    </main>
  );
}
