import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { PlayerProfileWorkspace } from "@/components/player-profile-workspace";
import { interpolate } from "@/lib/i18n";
import { telemetryUnlocked } from "@/lib/pricing";
import { findStagingPlayer } from "@/lib/staging-clans";
import { allLayoutUsernames, findLayoutPlayer } from "@/lib/tournament-layout";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";

function resolvePlayer(username: string) {
  return findLayoutPlayer(username) ?? findStagingPlayer(username);
}

export const instant = false;

type Props = { params: Promise<{ username: string }> };

export function generateStaticParams() {
  return allLayoutUsernames().map((username) => ({ username }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const text = await getText();
  const meta = text.account.profile.meta;
  const found = resolvePlayer(username);
  if (!found) {
    return { title: meta.notFoundTitle };
  }
  return {
    title: interpolate(meta.title, { name: found.player.name }),
    description: meta.description,
  };
}

export default async function PlayerProfilePage({ params }: Props) {
  const { username } = await params;
  const found = resolvePlayer(username);
  if (!found) {
    notFound();
  }

  await connection();
  let tier: string | null = null;
  let signedIn = false;
  let contactEmail: string | null = null;
  try {
    const user = await readSessionUser();
    tier = user?.subscriptionTier ?? null;
    signedIn = Boolean(user);
    contactEmail = user?.email ?? null;
  } catch {
    tier = null;
  }

  return (
    <PlayerProfileWorkspace
      player={found.player}
      team={found.team}
      telemetryUnlocked={telemetryUnlocked(tier)}
      signedIn={signedIn}
      contactEmail={contactEmail}
    />
  );
}
