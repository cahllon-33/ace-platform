/**
 * Dev-only admin preview. True only when NODE_ENV is "development" AND ACE_ADMIN_PREVIEW is "1".
 * A production build always runs with NODE_ENV=production, so the preview route 404s there.
 */
export function adminPreviewEnabled(env: { NODE_ENV?: string; ACE_ADMIN_PREVIEW?: string } = process.env): boolean {
  return env.NODE_ENV === "development" && env.ACE_ADMIN_PREVIEW === "1";
}
