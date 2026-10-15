import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { AdminCommandCenter } from "@/components/admin-command-center";
import { AdminPreviewBanner } from "@/components/admin-preview-banner";
import { STAGING_ADMIN_PLAYERS, STAGING_ADMIN_STATS } from "@/lib/admin-staging";
import { parseEnvFeeds } from "@/lib/broadcast";
import { adminPreviewEnabled } from "@/server/admin-preview";

export const instant = false;

export const metadata: Metadata = {
  title: "A.C.E. Command Center · dev preview",
  robots: { index: false, follow: false },
};

/**
 * DEV-ONLY, READ-ONLY admin preview. 404 unless NODE_ENV=development AND ACE_ADMIN_PREVIEW=1.
 * Shows the command center with the sample (staging) roster and the A.C.E TV wall from
 * ACE_BROADCAST_FEEDS only (empty state when unset). No database reads, no session, no admin gate cookie.
 * Writes are refused: staging stats make the UI refuse, and every server action re-checks the real admin gate.
 */
export default async function AdminPreviewPage() {
  await connection();
  if (!adminPreviewEnabled()) notFound();
  return (
    <main className="ace-admin-page" suppressHydrationWarning>
      <AdminPreviewBanner />
      <AdminCommandCenter
        initialPlayers={STAGING_ADMIN_PLAYERS}
        stats={STAGING_ADMIN_STATS}
        matches={[]}
        reports={[]}
        tv={{ feeds: parseEnvFeeds(process.env.ACE_BROADCAST_FEEDS), dbAvailable: false }}
        tournaments={[]}
      />
    </main>
  );
}
