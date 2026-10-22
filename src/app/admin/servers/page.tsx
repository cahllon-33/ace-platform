import type { Metadata } from "next";
import { connection } from "next/server";
import { AdminServersPanel, type RecentMatch } from "@/components/admin-servers";
import { readIsSteamOwner } from "@/server/admin-gate";
import { loadServerSnapshot } from "@/server/dathost-actions";
import { getPrisma } from "@/server/db";
import { ACE_MAPS } from "@/server/dathost";

export const instant = false;
export const metadata: Metadata = { title: "A.C.E. Servers", robots: { index: false, follow: false } };

async function recentMatches(): Promise<RecentMatch[]> {
  try {
    const rows = await getPrisma().match.findMany({
      where: { source: { in: ["dathost", "dathost-test"] } }, orderBy: { createdAt: "desc" }, take: 10,
      select: { id: true, externalId: true, mapName: true, scoreA: true, scoreB: true, state: true, ratingApplied: true, endedAt: true, createdAt: true, _count: { select: { players: true } } },
    });
    return rows.map((r) => ({ id: r.id, externalId: r.externalId, map: r.mapName, scoreA: r.scoreA, scoreB: r.scoreB, state: r.state, ratingApplied: r.ratingApplied, at: (r.endedAt ?? r.createdAt).toISOString(), players: r._count.players }));
  } catch {
    return [];
  }
}

/** Owner-only (ACE_ADMIN_STEAM_IDS Steam session). Everything is re-checked inside each server action. */
export default async function AdminServersPage() {
  await connection();
  const owner = await readIsSteamOwner();
  const [snapshot, matches] = owner ? await Promise.all([loadServerSnapshot(), recentMatches()]) : [null, []];
  return (
    <main className="ace-admin-page" suppressHydrationWarning>
      <AdminServersPanel owner={owner} initial={snapshot} matches={matches} maps={[...ACE_MAPS]} />
    </main>
  );
}
