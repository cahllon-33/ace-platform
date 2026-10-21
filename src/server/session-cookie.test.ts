import { describe, expect, it, vi } from "vitest";
vi.mock("@/server/db", () => ({ getPrisma: () => ({}) }));
vi.mock("@/server/presence", () => ({ touchPresence: async () => {} }));
vi.mock("next/headers", () => ({ cookies: async () => ({ get: () => undefined }) }));
import { cookieSettings } from "@/server/session";
import { postLoginOrigin } from "@/server/post-login";
import { steamProfileUpdate } from "@/server/users";

describe("Steam sign-in session", () => {
  it("session cookie survives the cross-site Steam return (SameSite=Lax, httpOnly, root path)", () => {
    const c = cookieSettings(new Date(Date.now() + 1000));
    expect(c.sameSite).toBe("lax");
    expect(c.httpOnly).toBe(true);
    expect(c.path).toBe("/");
    expect("domain" in c).toBe(false);
  });
  it("redirects back to the same host that received the cookie", () => {
    process.env.APP_BASE_URL = "https://ace-platform-steel.vercel.app";
    expect(postLoginOrigin(new Request("https://ace-platform-steel.vercel.app/api/auth/steam/callback"))).toBe("https://ace-platform-steel.vercel.app");
    expect(postLoginOrigin(new Request("https://ace-platform-git-x-team.vercel.app/api/auth/steam/callback"))).toBe("https://ace-platform-git-x-team.vercel.app");
    expect(postLoginOrigin(new Request("https://evil.example/api/auth/steam/callback"))).toBe("https://ace-platform-steel.vercel.app");
  });
  it("stores and refreshes the Steam avatar on every login", () => {
    const u = steamProfileUpdate({ displayName: "Kalibra", avatarUrl: "https://avatars.steamstatic.com/new_full.jpg", profileUrl: "", found: true });
    expect(u.avatarUrl).toBe("https://avatars.steamstatic.com/new_full.jpg");
    expect(steamProfileUpdate({ displayName: "x", avatarUrl: "", found: false })).toEqual({});
  });
});
