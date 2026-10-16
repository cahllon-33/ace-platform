import { afterEach, describe, expect, it, vi } from "vitest";
import { steamProfileHref, steamVanity } from "@/lib/admin-command";
import { lookupSteamPersona, lookupSteamPersonas, lookupSteamPersonasDetailed, steamPlaceholderName } from "@/server/steam-openid";
import { getSteamApiKey } from "@/server/env";
import { steamProfileUpdate } from "@/server/users";

vi.mock("@/server/db", () => ({ getPrisma: () => ({}) }));

const ID = "76561199017997899";
function steamReply(players: unknown[]) {
  return vi.fn(async () => new Response(JSON.stringify({ response: { players } }), { status: 200 })) as unknown as typeof fetch;
}

afterEach(() => {
  delete process.env.STEAM_API_KEY;
});

describe("Steam persona sync", () => {
  it("uses the real persona, avatar and vanity profile URL", async () => {
    process.env.STEAM_API_KEY = "k";
    const p = await lookupSteamPersona(ID, steamReply([{ steamid: ID, personaname: " Kalibra ", avatarfull: "https://avatars.steamstatic.com/a_full.jpg", profileurl: "https://steamcommunity.com/id/kalibra/" }]));
    expect(p).toEqual({ displayName: "Kalibra", avatarUrl: "https://avatars.steamstatic.com/a_full.jpg", profileUrl: "https://steamcommunity.com/id/kalibra/", found: true });
  });
  it("falls back to the placeholder only when Steam returns nothing", async () => {
    process.env.STEAM_API_KEY = "k";
    const p = await lookupSteamPersona(ID, steamReply([]));
    expect(p).toMatchObject({ displayName: steamPlaceholderName(ID), found: false });
  });
  it("without STEAM_API_KEY makes no request and returns the placeholder", async () => {
    const f = steamReply([]);
    const p = await lookupSteamPersona(ID, f);
    expect(f).not.toHaveBeenCalled();
    expect(p.found).toBe(false);
  });
  it("batches up to 100 ids per call and rejects foreign profile/avatar hosts", async () => {
    process.env.STEAM_API_KEY = "k";
    const ids = Array.from({ length: 150 }, (_, i) => `7656119${String(i).padStart(10, "0")}`);
    const f = steamReply([{ steamid: ids[0], personaname: "A", avatarfull: "https://evil.example/a.jpg", profileurl: "https://evil.example/id/a/" }]);
    const map = await lookupSteamPersonas(ids, f);
    expect(f).toHaveBeenCalledTimes(2);
    expect(map.get(ids[0])).toMatchObject({ displayName: "A", avatarUrl: "", profileUrl: "" });
  });
  it("never overwrites a stored persona with the placeholder", () => {
    expect(steamProfileUpdate({ displayName: "Player 7899", avatarUrl: "", found: false })).toEqual({});
    expect(steamProfileUpdate({ displayName: "Kalibra", avatarUrl: "", profileUrl: "", found: true })).toMatchObject({ displayName: "Kalibra", username: "Kalibra" });
  });
  it("builds admin profile links and vanity names", () => {
    expect(steamProfileHref(ID)).toBe(`https://steamcommunity.com/profiles/${ID}`);
    expect(steamProfileHref("—")).toBeNull();
    expect(steamVanity("https://steamcommunity.com/id/kalibra/")).toBe("kalibra");
    expect(steamVanity(`https://steamcommunity.com/profiles/${ID}/`)).toBeNull();
  });
});

describe("Steam sync failure reasons (R35)", () => {
  it("reports no-key without calling Steam", async () => {
    const f = steamReply([]);
    const r = await lookupSteamPersonasDetailed([ID], f);
    expect(f).not.toHaveBeenCalled();
    expect(r.errors.get(ID)).toEqual({ code: "no-key" });
  });
  it("reports the HTTP status (403 invalid key) instead of swallowing it", async () => {
    process.env.STEAM_API_KEY = "k";
    const f = vi.fn(async () => new Response("<html>Forbidden</html>", { status: 403 })) as unknown as typeof fetch;
    const r = await lookupSteamPersonasDetailed([ID], f);
    expect(r.profiles.size).toBe(0);
    expect(r.errors.get(ID)).toEqual({ code: "http", status: 403 });
  });
  it("reports timeouts, network errors and unknown ids", async () => {
    process.env.STEAM_API_KEY = "k";
    const timeout = vi.fn(async () => { throw new DOMException("t", "TimeoutError"); }) as unknown as typeof fetch;
    expect((await lookupSteamPersonasDetailed([ID], timeout)).errors.get(ID)).toEqual({ code: "timeout" });
    const net = vi.fn(async () => { throw new TypeError("fetch failed"); }) as unknown as typeof fetch;
    expect((await lookupSteamPersonasDetailed([ID], net)).errors.get(ID)).toMatchObject({ code: "network" });
    expect((await lookupSteamPersonasDetailed([ID], steamReply([]))).errors.get(ID)).toEqual({ code: "not-found" });
  });
  it("reads the key at call time and tolerates surrounding quotes", () => {
    process.env.STEAM_API_KEY = '  "ABC123"  ';
    expect(getSteamApiKey()).toBe("ABC123");
    process.env.STEAM_API_KEY = "XYZ";
    expect(getSteamApiKey()).toBe("XYZ");
  });
});

