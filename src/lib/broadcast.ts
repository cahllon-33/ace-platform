/**
 * Live broadcast embed. Configured by the operator through ACE_BROADCAST_EMBED_URL.
 * Only Twitch and YouTube embed players over https are accepted; anything else counts as off air.
 */
export type BroadcastConfig =
  | { state: "off-air"; next: string | null }
  | { state: "configured"; provider: "twitch" | "youtube"; embedUrl: string; next: string | null };

const ALLOWED_HOSTS: Record<string, "twitch" | "youtube"> = {
  "player.twitch.tv": "twitch",
  "www.youtube.com": "youtube",
  "www.youtube-nocookie.com": "youtube",
};

export function parseBroadcastEmbed(raw: string | undefined | null): { provider: "twitch" | "youtube"; embedUrl: string } | null {
  const value = raw?.trim();
  if (!value || value.length > 500) return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.username || url.password) return null;
  const provider = ALLOWED_HOSTS[url.hostname];
  if (!provider) return null;
  if (provider === "youtube" && !url.pathname.startsWith("/embed/")) return null;
  if (provider === "twitch" && !url.searchParams.get("channel") && !url.searchParams.get("video")) return null;
  return { provider, embedUrl: url.toString() };
}

export function readBroadcastConfig(env: Record<string, string | undefined> = process.env): BroadcastConfig {
  const nextRaw = env.ACE_BROADCAST_NEXT?.trim();
  const next = nextRaw ? nextRaw.slice(0, 120) : null;
  const parsed = parseBroadcastEmbed(env.ACE_BROADCAST_EMBED_URL);
  if (!parsed) return { state: "off-air", next };
  return { state: "configured", ...parsed, next };
}

export type TvFeed = { id: string; title: string; provider: "twitch" | "youtube"; embedUrl: string; source: "env" | "admin" };

/** ACE_BROADCAST_FEEDS: one feed per line or ";" separated, as "Title|https://embed-url". Invalid entries are skipped. */
export function parseEnvFeeds(raw: string | undefined | null): TvFeed[] {
  if (!raw) return [];
  return raw
    .split(/[\n;]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .slice(0, 16)
    .flatMap((entry, index) => {
      const bar = entry.indexOf("|");
      const title = (bar > 0 ? entry.slice(0, bar) : `Feed ${index + 1}`).trim().slice(0, 80);
      const parsed = parseBroadcastEmbed(bar > 0 ? entry.slice(bar + 1) : entry);
      return parsed ? [{ id: `env-${index}`, title, ...parsed, source: "env" as const }] : [];
    });
}
