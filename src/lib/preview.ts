export const PREVIEW_SLUGS = [
  "support",
  "anti-cheat",
  "download-client",
  "mobile-app",
  "news",
  "about",
  "advertising",
  "developers",
  "press",
  "jobs",
  "terms",
  "privacy",
  "eula",
] as const;

export type PreviewSlug = (typeof PREVIEW_SLUGS)[number];

export function isPreviewSlug(slug: string): slug is PreviewSlug {
  return (PREVIEW_SLUGS as readonly string[]).includes(slug);
}
