import type { Metadata } from "next";
import { connection } from "next/server";
import { PlayDesk } from "@/components/play-desk";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import { readQueueView } from "@/server/queue-engine";

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
  const initial = await readQueueView(user?.id ?? null).catch(() => null);
  return (
    <main className="ace-play-page mx-auto max-w-[90rem] px-4 py-10 sm:px-6">
      <PlayDesk signedIn={!!user} initial={initial} />
    </main>
  );
}
