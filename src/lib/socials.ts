/** R49 social networks: official-style monochrome glyphs (24×24, currentColor). Shown only when a URL is set. */
export const SOCIALS = ["discord", "tiktok", "instagram", "x", "youtube", "facebook", "twitch", "kick", "reddit", "steam"] as const;
export type Social = (typeof SOCIALS)[number];

export const SOCIAL_LABEL: Record<Social, string> = { discord: "Discord", tiktok: "TikTok", instagram: "Instagram", x: "X", youtube: "YouTube", facebook: "Facebook", twitch: "Twitch", kick: "Kick", reddit: "Reddit", steam: "Steam Group" };

const HOSTS: Record<Social, string[]> = {
  discord: ["discord.gg", "discord.com"], tiktok: ["tiktok.com"], instagram: ["instagram.com"], x: ["x.com", "twitter.com"], youtube: ["youtube.com", "youtu.be"],
  facebook: ["facebook.com", "fb.com"], twitch: ["twitch.tv"], kick: ["kick.com"], reddit: ["reddit.com"], steam: ["steamcommunity.com"],
};

/** Valid only as https on the network's own domain (no dead or look-alike links). "" clears it. */
export function validSocialUrl(net: Social, url: string): boolean {
  if (url === "") return true;
  try {
    const u = new URL(url);
    const h = u.hostname.toLowerCase().replace(/^www\./, "");
    return u.protocol === "https:" && url.length <= 300 && HOSTS[net].some((d) => h === d || h.endsWith(`.${d}`));
  } catch {
    return false;
  }
}

export const SOCIAL_PATHS: Record<Social, string> = {
  discord: "M20.3 4.4A19.7 19.7 0 0 0 15.4 3l-.6 1.3a18.3 18.3 0 0 0-5.5 0L8.6 3a19.6 19.6 0 0 0-4.9 1.5C.6 9.1-.3 13.6.1 18.1A19.8 19.8 0 0 0 6.1 21l1.3-2.1c-.7-.3-1.4-.6-2-1l.5-.4a14 14 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.7 19.7 0 0 0 6-2.9c.5-5.2-.8-9.7-3.6-13.7ZM8 15.4c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.6 8 10.6s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z",
  tiktok: "M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.3 6.3 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-4.7-4.7Z",
  instagram: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1C4.4 2.3 2.3 4.4 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.5 2.3 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.5-.2 5.6-2.3 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.5-2.3-5.6-5.8-5.8C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1 2.6.1 3.9 1.4 4 4 .1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.6-1.4 3.9-4 4-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.6-.1-3.9-1.4-4-4-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-2.6 1.4-3.9 4-4 1-.1 1.3-.1 4-.1Z",
  x: "M17.8 3h3.1l-6.8 7.7L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  youtube: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15V9l5.9 3-5.9 3Z",
  facebook: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  twitch: "M4 2 2.5 5.8V20h5v2.5h2.8L12.8 20h3.8l5-5V2H4Zm15.7 12.1-3 3h-4.8l-2.6 2.6v-2.6H5.4V3.9h14.3v10.2ZM16.6 7v5.3h-1.9V7h1.9Zm-5 0v5.3H9.7V7h1.9Z",
  kick: "M3 3h6v4h2V5h2V3h8v6h-2v2h-2v2h2v2h2v6h-8v-2h-2v-2H9v4H3V3Z",
  reddit: "M22 12.1a2.2 2.2 0 0 0-3.7-1.6 10.7 10.7 0 0 0-5.7-1.8l1-4.5 3.1.7a1.6 1.6 0 1 0 .2-1l-3.6-.8a.5.5 0 0 0-.6.4l-1.1 5.2a10.8 10.8 0 0 0-5.8 1.8 2.2 2.2 0 1 0-2.4 3.6 4.3 4.3 0 0 0 0 .7c0 3.6 4.2 6.5 9.4 6.5s9.4-2.9 9.4-6.5a4.3 4.3 0 0 0 0-.7 2.2 2.2 0 0 0 1.8-2Zm-14.4 1.6a1.6 1.6 0 1 1 1.6 1.6 1.6 1.6 0 0 1-1.6-1.6Zm9 4.3a5.9 5.9 0 0 1-4.6 1.4A5.9 5.9 0 0 1 7.4 18a.4.4 0 0 1 .6-.6 5 5 0 0 0 4 1.1 5 5 0 0 0 4-1.1.4.4 0 0 1 .6.6Zm-.3-2.7a1.6 1.6 0 1 1 1.6-1.6 1.6 1.6 0 0 1-1.6 1.6Z",
  steam: "M12 2a10 10 0 0 0-10 9.2l5.4 2.2a2.8 2.8 0 0 1 1.6-.5h.2l2.4-3.5v-.1a3.8 3.8 0 1 1 3.8 3.8h-.1l-3.4 2.5v.1a2.9 2.9 0 0 1-5.7.6L2.4 15A10 10 0 1 0 12 2Zm-4.3 15.2-1.2-.5a2.1 2.1 0 1 0 1.1-2.8l1.3.5a1.6 1.6 0 1 1-1.2 2.8Zm9.4-7.7a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.5-2.5Zm-4.4 0a1.9 1.9 0 1 1 1.9 1.9 1.9 1.9 0 0 1-1.9-1.9Z",
};
