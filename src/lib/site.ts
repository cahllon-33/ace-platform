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

export const socialNetworks = [
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://www.twitch.tv", label: "Twitch" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://discord.com", label: "Discord" },
] as const;
