import type { Metadata } from "next";
import { connection } from "next/server";
import { PlayDesk } from "@/components/play-desk";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import { effectiveRankArt } from "@/server/rank-art";
import { rankFromRating } from "@/lib/ranks";
import type { ArenaCaptain } from "@/components/play-match-arena";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.play.meta.title,
    description: text.play.meta.description,
  };
}

export default async function PlayPage() {
  await connection();
  let captainLabel = "[Captain_Slot]";
  let captain: ArenaCaptain | null = null;
  try {
    const user = await readSessionUser();
    if (user?.displayName) {
      captainLabel = user.displayName;
      captain = {
        avatarUrl: user.avatarUrl || null,
        rating: user.competitiveRating,
        level: rankFromRating(user.competitiveRating).level,
        art: effectiveRankArt(user),
        badgeColor: user.badgeColor,
      };
    }
  } catch {
    captainLabel = "[Captain_Slot]";
  }

  return (
    <main className="ace-play-page mx-auto max-w-[90rem] px-4 py-10 sm:px-6">
      <PlayDesk captainLabel={captainLabel} captain={captain} />
    </main>
  );
}
