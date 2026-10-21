import type { Metadata } from "next";
import { connection } from "next/server";
import { PlayDesk } from "@/components/play-desk";
import { getText } from "@/server/locale";

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
  return (
    <main className="ace-play-page mx-auto max-w-[90rem] px-4 py-10 sm:px-6">
      <PlayDesk />
    </main>
  );
}
