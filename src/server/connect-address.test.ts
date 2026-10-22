import { describe, expect, it } from "vitest";
import { resolvedConnect, resolvedGotv } from "@/server/connect-address";

describe("resolvedConnect", () => {
  it("keeps IPs, resolves hostnames, appends password only when set", async () => {
    expect((await resolvedConnect("1.2.3.4", 27015, null, async () => "9.9.9.9")).connectUrl).toBe("steam://run/730//+connect%201.2.3.4:27015");
    expect((await resolvedConnect("milan.dathost.net", 28000, "pw1", async () => "5.6.7.8")).connectUrl).toBe("steam://run/730//+connect%205.6.7.8:28000%20+password%20pw1");
    expect((await resolvedConnect("x.invalid", 1, "", async () => null)).address).toBe("x.invalid:1");
  });
  it("builds the GOTV spectator link only when GOTV is on", async () => {
    const r = async () => "5.6.7.8";
    expect(await resolvedGotv({ ip: "h", ports: { gotv: 28001 }, cs2_settings: { enable_gotv: true } }, r)).toBe("steam://run/730//+connect%205.6.7.8:28001");
    expect(await resolvedGotv({ ip: "1.2.3.4", ports: { gotv: 28001 }, cs2_settings: { enable_gotv: true, tv_password: "tv" } }, r)).toBe("steam://run/730//+connect%201.2.3.4:28001%20+password%20tv");
    expect(await resolvedGotv({ ip: "1.2.3.4", ports: { gotv: 28001 }, cs2_settings: { enable_gotv: false } }, r)).toBeNull();
    expect(await resolvedGotv({ ip: "1.2.3.4", ports: {}, cs2_settings: { enable_gotv: true } }, r)).toBeNull();
  });
});
