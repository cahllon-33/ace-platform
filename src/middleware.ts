import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Must match SESSION_COOKIE in src/server/session.ts (Edge-safe literal). */
const SESSION_COOKIE = "ace_session";

export function middleware(request: NextRequest) {
  // Dev-only admin preview: a hard 404 unless NODE_ENV=development AND ACE_ADMIN_PREVIEW=1 (the page re-checks too).
  if (request.nextUrl.pathname.startsWith("/admin/preview")) {
    const enabled = process.env.NODE_ENV === "development" && process.env.ACE_ADMIN_PREVIEW === "1";
    return enabled ? NextResponse.next() : new NextResponse("Not found", { status: 404 });
  }
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/preview/:path*", "/admin/preview"],
};
