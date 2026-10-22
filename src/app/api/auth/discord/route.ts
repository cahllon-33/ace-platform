import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { discordAuthorizeUrl, readDiscordOAuthConfig } from "@/server/discord";
import { getAppBaseUrl, isProduction } from "@/server/env";
import { postLoginOrigin } from "@/server/post-login";
import { readSessionUser } from "@/server/session";

const DISCORD_STATE_COOKIE = "ace_discord_state";

/** R50: starts the Discord account link (signed-in players only). */
export async function GET(request: Request) {
  const origin = postLoginOrigin(request);
  const user = await readSessionUser().catch(() => null);
  if (!user) return NextResponse.redirect(new URL("/", origin));
  const cfg = readDiscordOAuthConfig(getAppBaseUrl());
  if (!cfg) return NextResponse.redirect(new URL("/dashboard?discord=unavailable", origin));
  const state = randomBytes(24).toString("base64url");
  const res = NextResponse.redirect(discordAuthorizeUrl(cfg, state));
  res.cookies.set(DISCORD_STATE_COOKIE, state, { httpOnly: true, sameSite: "lax", secure: isProduction(), path: "/api/auth/discord", maxAge: 600 });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
