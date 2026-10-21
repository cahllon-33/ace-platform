import { getAppBaseUrl } from "@/server/env";

/**
 * Origin to land on after sign-in. The session cookie is host-only, set on the
 * host that served the callback, so redirecting to a different configured
 * APP_BASE_URL host (e.g. preview vs. production alias) would drop the session.
 * Stay on the callback's own origin when it is the configured host or a
 * vercel.app/localhost deployment of this app; otherwise use APP_BASE_URL.
 */
export function postLoginOrigin(request: Request): string {
  const base = getAppBaseUrl();
  let own: URL;
  try {
    own = new URL(request.url);
  } catch {
    return base;
  }
  const host = own.hostname;
  if (own.origin === new URL(base).origin) return base;
  if (host === "localhost" || host === "127.0.0.1" || /^ace-platform[a-z0-9-]*\.vercel\.app$/.test(host)) return own.origin;
  return base;
}
