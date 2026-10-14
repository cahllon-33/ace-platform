import type { Metadata } from "next";
import { connection } from "next/server";
import { AdminCommandCenter } from "@/components/admin-command-center";
import { AdminGate } from "@/components/admin-gate";
import { STAGING_ADMIN_PLAYERS, STAGING_ADMIN_STATS } from "@/lib/admin-staging";
import { readAdminGate } from "@/server/admin-gate";
import { loadAdminDirectory } from "@/server/admin-users";

export const metadata: Metadata = {
  title: "A.C.E. League Supreme Command Center",
  description:
    "Operator command suite. Hebrew renders when the Hebrew flag is active. Every other locale falls back to English LTR. No live Anti-Cheat, staff session, billing, or Steam token revocation runs here.",
};

/**
 * Admin locale lock: English and Hebrew only.
 * `useAdminI18n` maps `he` → Hebrew RTL on `.ace-admin-shell`.
 * Any of the other 17 public locales (en, ar, ru, de, zh, …) falls back
 * to English LTR even when the public document is RTL.
 */
export default async function AdminDashboardPage() {
  await connection();
  const unlocked = await readAdminGate();
  const loaded = unlocked ? await loadAdminDirectory() : null;
  const directory =
    loaded && !loaded.stats.unavailable
      ? loaded
      : {
          players: STAGING_ADMIN_PLAYERS,
          stats: STAGING_ADMIN_STATS,
          matches: [],
          reports: [],
        };
  return (
    <main className="ace-admin-page" suppressHydrationWarning>
      {unlocked ? (
        <AdminCommandCenter
          initialPlayers={directory.players}
          stats={directory.stats}
          matches={directory.matches}
          reports={directory.reports}
        />
      ) : (
        <AdminGate />
      )}
    </main>
  );
}
