import { connection } from "next/server";
import { redirect } from "next/navigation";
import { readSessionUser } from "@/server/session";

/** /profile: your own public player page when signed in, otherwise the public leaderboard. */
export default async function ProfileRedirect() {
  await connection();
  let steamId: string | null = null;
  try {
    steamId = (await readSessionUser())?.steamId ?? null;
  } catch {
    steamId = null;
  }
  redirect(steamId ? `/player/${steamId}` : "/leaderboard");
}
