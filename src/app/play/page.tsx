import type { Metadata } from "next";
import { connection } from "next/server";
import { PlayDesk } from "@/components/play-desk";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import { readQueueView } from "@/server/queue-engine";
import { readArena } from "@/server/arena";
import { PlayArenaHero } from "@/components/public/play-arena-hero";

/** Dynamic route: opt out of instant navigation prerender (reads request data). */
export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.play.meta.title,
    description: text.play.meta.description,
  };
}

export default async function PlayPage() {
  await connection();
  const user = await readSessionUser().catch(() => null);
  const [initial, arena] = await Promise.all([readQueueView(user?.id ?? null).catch(() => null), readArena(user?.id ?? null)]);
  return (
    <>
    <PlayArenaHero signedIn={!!user} initial={arena} direct />
    <main className="ace-play-page mx-auto max-w-[90rem] px-4 py-10 sm:px-6">
      <PlayDesk signedIn={!!user} initial={initial} />
    </main>
    </>
  );
}
