import { NextResponse } from "next/server";
import { buildSteamLoginUrl } from "@/server/steam-openid";

export async function GET(request: Request) {
  try {
    const next = new URL(request.url).searchParams.get("next");
    const location = buildSteamLoginUrl(next === "squad" ? "squad" : "dashboard");
    return NextResponse.redirect(location);
  } catch {
    return NextResponse.redirect(new URL("/login-error?reason=steam-not-configured", request.url));
  }
}
