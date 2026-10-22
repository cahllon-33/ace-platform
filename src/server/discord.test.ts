import { describe, expect, it } from "vitest";
import { connectDetails, discordAuthorizeUrl, matchDm, randomServerPassword, teamOverwrites } from "@/server/discord";
import { DISCORD_I18N } from "@/lib/discord-i18n";
import { SITE_LOCALES } from "@/lib/languages";

describe("R50 discord", () => {
  it("random password is 12 safe chars and varies", () => {
    const a = randomServerPassword();
    expect(a).toMatch(/^[a-zA-Z2-9]{12}$/);
    expect(randomServerPassword()).not.toBe(a);
  });
  it("connect details", () => {
    expect(connectDetails("1.2.3.4:26372", "pw")).toEqual({ steamUrl: "steam://connect/1.2.3.4:26372/pw", console: "connect 1.2.3.4:26372; password pw" });
  });
  it("team channel denies connect to everyone and allows team members", () => {
    const o = teamOverwrites("1", "9", ["5", "5", "6"]);
    expect(o[0]).toMatchObject({ id: "1", type: 0, allow: "0" });
    expect(BigInt(o[0].deny) & ((BigInt(1) << BigInt(20)))).toBe((BigInt(1) << BigInt(20)));
    expect(o.filter((x) => x.type === 1).map((x) => x.id)).toEqual(["9", "5", "6"]);
  });
  it("dm has voice and connect lines", () => {
    const t = matchDm({ team: "A", map: "de_mirage", voiceUrl: "https://discord.gg/x", address: "1.2.3.4:1", password: "p", lobbyUrl: "https://a/play" });
    expect(t).toContain("https://discord.gg/x");
    expect(t).toContain("steam://connect/1.2.3.4:1/p");
    expect(t).toContain("connect 1.2.3.4:1; password p");
  });
  it("authorize url scopes", () => {
    const u = new URL(discordAuthorizeUrl({ clientId: "c", clientSecret: "s", redirectUri: "https://a/cb" }, "st"));
    expect(u.searchParams.get("scope")).toBe("identify guilds.join");
    expect(u.toString()).not.toContain("s&");
  });
  it("every site locale has every Discord string", () => {
    const keys = Object.keys(DISCORD_I18N.en);
    for (const l of SITE_LOCALES) {
      expect(DISCORD_I18N[l.id], l.id).toBeDefined();
      expect(Object.keys(DISCORD_I18N[l.id]).sort(), l.id).toEqual([...keys].sort());
    }
  });
});
