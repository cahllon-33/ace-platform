import { NextResponse } from "next/server";
import { getAppBaseUrl } from "@/server/env";
import { clearSessionCookie, revokeTokenFromCookie } from "@/server/session";

export async function POST() {
  try {
    await revokeTokenFromCookie();
  } catch {
    // Still clear the cookie if the database is unreachable.
  }
  const response = NextResponse.redirect(new URL("/", getAppBaseUrl()), { status: 303 });
  return clearSessionCookie(response);
}
