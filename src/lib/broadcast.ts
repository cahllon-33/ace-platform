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

/** Accept channel/watch links too: twitch.tv/<channel>, youtube.com/watch?v=, youtu.be/<id>. */
export function normalizeStreamUrl(raw: string | undefined | null): string | undefined {
  const value = raw?.trim();
  if (!value) return undefined;
  try {
    const u = new URL(value);
    const host = u.hostname.replace(/^www\./, "").replace(/^m\./, "");
    if (host === "twitch.tv") {
      const channel = u.pathname.split("/").filter(Boolean)[0];
      if (channel && /^[A-Za-z0-9_]{2,25}$/.test(channel)) return `https://player.twitch.tv/?channel=${channel}`;
    }
    if (host === "youtube.com" && u.pathname === "/watch" && /^[\w-]{6,20}$/.test(u.searchParams.get("v") ?? "")) return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    if (host === "youtu.be" && /^\/[\w-]{6,20}$/.test(u.pathname)) return `https://www.youtube.com/embed${u.pathname}`;
  } catch {
    return value;
  }
  return value;
}

/** Twitch embeds require parent=<host>; added at render time. */
export function embedSrc(embedUrl: string, host: string) {
  try {
    const u = new URL(embedUrl);
    if (u.hostname === "player.twitch.tv") { u.searchParams.set("parent", host); u.searchParams.set("autoplay", "false"); }
    return u.toString();
  } catch {
    return embedUrl;
  }
}

export function parseBroadcastEmbed(raw: string | undefined | null): { provider: "twitch" | "youtube"; embedUrl: string } | null {
  const value = normalizeStreamUrl(raw);
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

export type TvFeed = { id: string; title: string; provider: "twitch" | "youtube"; embedUrl: string; source: "env" | "admin"; isLive?: boolean };

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
