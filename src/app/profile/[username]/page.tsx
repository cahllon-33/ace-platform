import { notFound, redirect } from "next/navigation";
import { connection } from "next/server";
import { getPrisma } from "@/server/db";

export const instant = false;

/**
 * R41: sample layout/staging profiles are no longer rendered. A real account's username
 * forwards to its public /player page; anything else is a 404.
 */
export default async function LegacyProfileRedirect({ params }: { params: Promise<{ username: string }> }) {
  await connection();
  const { username } = await params;
  let steamId: string | null = null;
  try {
    const user = await getPrisma().user.findFirst({ where: { username: decodeURIComponent(username).slice(0, 64), accountStatus: "ACTIVE" }, select: { steamId: true } });
    steamId = user?.steamId ?? null;
  } catch {
    steamId = null;
  }
  if (steamId) redirect(`/player/${steamId}`);
  notFound();
}
