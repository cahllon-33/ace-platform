import { describe, expect, it, vi } from "vitest";

vi.mock("@/server/admin-gate", () => ({ readIsSteamOwner: vi.fn(async () => false), readAdminActor: vi.fn(async () => "steam:x") }));
vi.mock("@/server/db", () => ({ getPrisma: () => { throw new Error("db must not be touched for non-owners"); } }));
vi.mock("@/server/desktop-admin", () => ({}));

describe("desktop Command gate", () => {
  it("rejects non-owners before any read or write", async () => {
    const { commandSection, commandAction, OwnerOnly } = await import("@/server/desktop-command");
    await expect(commandSection("overview", new URLSearchParams())).rejects.toBeInstanceOf(OwnerOnly);
    await expect(commandAction("player.ban", { userId: "u1" })).rejects.toBeInstanceOf(OwnerOnly);
    await expect(commandAction("ac.require", { value: "true" })).rejects.toBeInstanceOf(OwnerOnly);
  });
  it("route answers 403 for non-owners", async () => {
    const { GET, POST } = await import("@/app/api/desktop/command/route");
    vi.mock("next/server", () => ({ connection: async () => undefined }));
    const h = { "x-ace-desktop": "1" };
    expect((await GET(new Request("https://x/api/desktop/command?section=overview", { headers: h }))).status).toBe(403);
    expect((await POST(new Request("https://x/api/desktop/command", { method: "POST", headers: h, body: JSON.stringify({ op: "match.cancel" }) }))).status).toBe(403);
  });
});
