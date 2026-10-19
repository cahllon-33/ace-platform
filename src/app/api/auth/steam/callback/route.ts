import { NextResponse } from "next/server";
import { getAppBaseUrl } from "@/server/env";
import { attachSessionCookie, persistSession } from "@/server/session";
import { lookupSteamPersona, readLoginDestination, SteamAuthError, verifySteamCallback } from "@/server/steam-openid";
import { upsertSteamUser } from "@/server/users";
import { getPrisma } from "@/server/db";
import { recordSignInEvent } from "@/server/sign-in-events";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const { steamId } = await verifySteamCallback(url.searchParams);
    const profile = await lookupSteamPersona(steamId);
    const existing = await getPrisma().user.findUnique({ where: { steamId }, select: { id: true } });
    const user = await upsertSteamUser(steamId, profile);
    await recordSignInEvent({
      userId: user.id,
      steamId,
      personaName: user.displayName || user.username || profile.displayName,
      avatarUrl: user.avatarUrl || "",
      isNewUser: !existing,
      userAgent: request.headers.get("user-agent"),
      countryHeader: request.headers.get("x-vercel-ip-country"),
    });
    const session = await persistSession(user.id);
    const destination = readLoginDestination(url.searchParams.get("state") ?? "");
    const path = destination === "squad" ? "/teams?from=premium" : "/dashboard";
    const response = NextResponse.redirect(new URL(path, getAppBaseUrl()));
    return attachSessionCookie(response, session.token, session.expiresAt);
  } catch (error) {
    const reason = error instanceof SteamAuthError ? error.code : "steam-verify-failed";
    const target = new URL("/login-error", request.url);
    target.searchParams.set("reason", reason);
    return NextResponse.redirect(target);
  }
}
