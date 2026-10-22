import { timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getPrisma } from "@/server/db";
import { discordBot, exchangeDiscordCode, readDiscordBotConfig, readDiscordOAuthConfig } from "@/server/discord";
import { getAppBaseUrl } from "@/server/env";
import { postLoginOrigin } from "@/server/post-login";
import { readSessionUser } from "@/server/session";

const STATE_COOKIE = "ace_discord_state";
const same = (a: string, b: string) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b));

/** R50: Discord OAuth callback. Stores discordId on the signed-in user and adds them to the A.C.E guild (guilds.join). */
export async function GET(request: Request) {
  const origin = postLoginOrigin(request);
  const back = (status: string) => {
    const res = NextResponse.redirect(new URL(`/dashboard?discord=${status}#discord`, origin));
    res.cookies.delete({ name: STATE_COOKIE, path: "/api/auth/discord" });
    res.headers.set("Cache-Control", "no-store");
    return res;
  };
  const url = new URL(request.url);
  const user = await readSessionUser().catch(() => null);
  if (!user) return NextResponse.redirect(new URL("/", origin));
  const expected = (await cookies()).get(STATE_COOKIE)?.value ?? "";
  const state = url.searchParams.get("state") ?? "";
  const code = url.searchParams.get("code") ?? "";
  if (url.searchParams.get("error")) return back("denied");
  if (!expected || !state || !code || !same(expected, state)) return back("state");
  const cfg = readDiscordOAuthConfig(getAppBaseUrl());
  if (!cfg) return back("unavailable");
  try {
    const d = await exchangeDiscordCode(cfg, code);
    const prisma = getPrisma();
    const taken = await prisma.user.findUnique({ where: { discordId: d.id }, select: { id: true } });
    if (taken && taken.id !== user.id) return back("taken");
    await prisma.user.update({ where: { id: user.id }, data: { discordId: d.id, discordUsername: d.username.slice(0, 64), discordLinkedAt: new Date() } });
    const bot = readDiscordBotConfig();
    let joined = false;
    if (bot && d.scope.split(" ").includes("guilds.join")) joined = await discordBot(bot).addMember(d.id, d.accessToken).then(() => true).catch(() => false);
    return back(joined ? "linked" : "linked-nojoin");
  } catch {
    return back("failed");
  }
}
