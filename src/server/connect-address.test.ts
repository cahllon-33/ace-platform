import { describe, expect, it } from "vitest";
import { resolvedConnect } from "@/server/connect-address";

describe("resolvedConnect", () => {
  it("keeps IPs, resolves hostnames, appends password only when set", async () => {
    expect((await resolvedConnect("1.2.3.4", 27015, null, async () => "9.9.9.9")).connectUrl).toBe("steam://connect/1.2.3.4:27015");
    expect((await resolvedConnect("milan.dathost.net", 28000, "pw1", async () => "5.6.7.8")).connectUrl).toBe("steam://connect/5.6.7.8:28000/pw1");
    expect((await resolvedConnect("x.invalid", 1, "", async () => null)).address).toBe("x.invalid:1");
  });
});
