import { afterEach, describe, expect, it, vi } from "vitest";
import { steamProfileHref, steamVanity } from "@/lib/admin-command";
import { lookupSteamPersona, lookupSteamPersonas, steamPlaceholderName } from "@/server/steam-openid";
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
