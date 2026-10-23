import { describe, expect, it, vi } from "vitest";
vi.mock("@/server/db", () => ({ getPrisma: () => ({ anticheatSession: { count: async () => 3 }, tournament: { groupBy: async () => [] }, adminSetting: { findUnique: async () => null } }) }));
vi.mock("@/server/server-health", () => ({ readSetting: async () => null }));

describe("R63 live platform status", () => {
  it("billing is never Live without production Paddle; tournaments/servers honest when empty", async () => {
    vi.stubEnv("PADDLE_ENV", "sandbox"); vi.stubEnv("DATHOST_EMAIL", ""); vi.stubEnv("ACE_REQUIRE_ANTICHEAT", "true");
    vi.stubGlobal("fetch", async () => new Response(null, { status: 200 }));
    const { getPlatformStatus } = await import("@/server/platform-status");
    const rows = Object.fromEntries((await getPlatformStatus()).rows.map((r) => [r.key, r]));
    expect(rows.billing.value).not.toBe("Live");
    expect(rows.tournaments.value).toBe("No tournaments scheduled");
    expect(rows.servers.value).toBe("Not configured");
    expect(rows.shield.value).toBe("Live — required");
    expect(rows.shield.detail).toContain("3 active clients");
  });
});
