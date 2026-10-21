import type { MetadataRoute } from "next";

const PUBLIC = ["", "/ranks", "/leaderboard", "/tournaments", "/pricing", "/features", "/rules", "/anti-cheat", "/play", "/teams", "/support", "/about", "/status", "/seasons", "/badges", "/live", "/report", "/terms", "/privacy", "/cookie-policy", "/premium-terms", "/maps", "/prizes", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.APP_BASE_URL || "http://localhost:3000";
  return PUBLIC.map((path) => ({ url: `${base}${path}` }));
}
