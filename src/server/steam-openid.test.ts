import { describe, expect, it } from "vitest";
import { buildSteamLoginUrl, extractSteamId, steamAssertionIsValid } from "@/server/steam-openid";

describe("SteamID extraction", () => {
  it("accepts only a 64-bit SteamID from Steam's claimed_id URL", () => {
    expect(
      extractSteamId("https://steamcommunity.com/openid/id/76561198000000000"),
    ).toBe("76561198000000000");
  });

  it("rejects forged or truncated identifiers", () => {
    expect(extractSteamId("76561198000000000")).toBeNull();
    expect(extractSteamId("https://evil.example/openid/id/76561198000000000")).toBeNull();
    expect(extractSteamId("https://steamcommunity.com/openid/id/123")).toBeNull();
  });
});

describe("Steam OpenID login URL", () => {
  it("sends the player to Valve and returns to this site's callback", () => {
    process.env.APP_BASE_URL = "http://localhost:3000";
    process.env.SESSION_SECRET = "test-secret-at-least-32-characters";
    const url = new URL(buildSteamLoginUrl());
    expect(`${url.origin}${url.pathname}`).toBe("https://steamcommunity.com/openid/login");
    expect(url.searchParams.get("openid.mode")).toBe("checkid_setup");
    const returnTo = url.searchParams.get("openid.return_to") ?? "";
    expect(returnTo.startsWith("http://localhost:3000/api/auth/steam/callback?state=")).toBe(true);
  });
});

describe("Steam assertion check", () => {
  it("accepts only an exact is_valid line from Valve", () => {
    expect(steamAssertionIsValid("ns:http://specs.openid.net/auth/2.0\nis_valid:true\n")).toBe(true);
    expect(steamAssertionIsValid("is_valid:false")).toBe(false);
    expect(steamAssertionIsValid("note:is_valid:true")).toBe(false);
  });
});

describe("SteamID extraction", () => {
  it("accepts only a 64-bit SteamID from Steam's claimed_id URL", () => {
    expect(
      extractSteamId("https://steamcommunity.com/openid/id/76561198000000000"),
    ).toBe("76561198000000000");
  });

  it("rejects forged or truncated identifiers", () => {
    expect(extractSteamId("76561198000000000")).toBeNull();
    expect(extractSteamId("https://evil.example/openid/id/76561198000000000")).toBeNull();
    expect(extractSteamId("https://steamcommunity.com/openid/id/123")).toBeNull();
  });
});
