/** Primary header links. Everything else lives under "More" and in the footer. */
export const siteNav = [
  { href: "/", key: "home" },
  { href: "/play", key: "play" },
  { href: "/ranks", key: "ranks" },
  { href: "/tournaments", key: "tournaments" },
  { href: "/leaderboard", key: "leaderboard" },
  { href: "/teams", key: "teams" },
] as const;

export const moreNav = [
  { href: "/anti-cheat", key: "antiCheat" },
  { href: "/maps", key: "maps" },
  { href: "/prizes", key: "prizes" },
  { href: "/rules", key: "rules" },
  { href: "/shop", key: "shop" },
  { href: "/features", key: "features" },
] as const;

export const footerExplore = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Play" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/teams", label: "Teams" },
  { href: "/shop", label: "Shop" },
  { href: "/pricing", label: "Pricing" },
  { href: "/rules", label: "Rules" },
  { href: "/features", label: "Features" },
  { href: "/ranks", label: "Ranks" },
  { href: "/ranks/guide", label: "Calibration Codex" },
  { href: "/maps", label: "Maps & Broadcast" },
  { href: "/prizes", label: "Prizes" },
] as const;

export const STEAM_AUTH_HREF = "/api/auth/steam";
export const SLOGAN = "PLAY. COMPETE. BE ELITE.";
export const HEADLINE =
  "A.C.E: Autonomous Anti-Cheat, Competitive Calibration, Elite Players";
export const RANK_DIVISIONS = ["III", "II", "I"] as const;
export const PROFILE_PLACEHOLDER = "[Player_Profile]";
export const PLAYERS_ONLINE_NOW = 0;
export const BRAND_SUBLINE =
  "AUTONOMOUS ANTI-CHEAT • COMPETITIVE CALIBRATION • ELITE PLAYERS";

export type SocialKey = "x" | "twitch" | "youtube" | "instagram" | "discord";

/**
 * Official A.C.E social profiles. A link appears in the footer only when its
 * NEXT_PUBLIC_SOCIAL_* variable is set, so the site never shows a placeholder link.
 */
export const socialNetworks: { key: SocialKey; label: string; href: string }[] = (
  [
    { key: "x", label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X },
    { key: "twitch", label: "Twitch", href: process.env.NEXT_PUBLIC_SOCIAL_TWITCH },
    { key: "youtube", label: "YouTube", href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE },
    { key: "instagram", label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM },
    { key: "discord", label: "Discord", href: process.env.NEXT_PUBLIC_SOCIAL_DISCORD },
  ] as const
).flatMap((item) =>
  item.href && /^https:\/\//.test(item.href) ? [{ key: item.key, label: item.label, href: item.href }] : [],
);
