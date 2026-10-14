import { NextResponse } from "next/server";
import { getAppBaseUrl } from "@/server/env";
import { attachSessionCookie, persistSession } from "@/server/session";
import { lookupSteamPersona, readLoginDestination, SteamAuthError, verifySteamCallback } from "@/server/steam-openid";
import { upsertSteamUser } from "@/server/users";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const { steamId } = await verifySteamCallback(url.searchParams);
    const profile = await lookupSteamPersona(steamId);
    const user = await upsertSteamUser(steamId, profile);
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
