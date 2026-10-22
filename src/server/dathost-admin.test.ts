import { describe, expect, it, vi } from "vitest";
vi.mock("@/server/admin-gate", () => ({ readIsSteamOwner: async () => false, readAdminActor: async () => "t" }));
vi.mock("@/server/db", () => ({ getPrisma: () => ({}) }));
import { buildSettingsFields, consoleRun, deleteFile } from "@/server/dathost-admin-actions";
import { safeServerPath, toSettingsView, type RawServerFull } from "@/server/dathost";

describe("safeServerPath", () => {
  it("blocks traversal and strips leading slashes", () => {
    expect(safeServerPath("../etc/passwd")).toBeNull();
    expect(safeServerPath("cfg/../../x")).toBeNull();
    expect(safeServerPath("/cfg/server.cfg")).toBe("cfg/server.cfg");
  });
});

describe("settings", () => {
  it("maps fields and validates", async () => {
    expect(await buildSettingsFields({ slots: 12, gameMode: "competitive", autostop: true })).toEqual({ "cs2_settings.slots": "12", "cs2_settings.game_mode": "competitive", autostop: "true" });
    expect(await buildSettingsFields({ slots: 3 })).toBe("Slots must be 5–64.");
    expect(await buildSettingsFields({ gslt: "nope" })).toMatch(/GSLT/);
    expect(await buildSettingsFields({ clearPassword: true })).toEqual({ "cs2_settings.password": "" });
  });
  it("never exposes secrets in the view", () => {
    const v = toSettingsView({ id: "x", name: "n", game: "cs2", location: "milan", on: true, booting: false, ip: "h", ports: { game: 1 }, players_online: 0,
      cs2_settings: { rcon: "SECRETRCON", password: "pw", steam_game_server_login_token: "TOKEN" } } as RawServerFull);
    expect(JSON.stringify(v)).not.toMatch(/SECRETRCON|TOKEN|"pw"/);
    expect(v).toMatchObject({ rconSet: true, passwordSet: true, gsltSet: true });
  });
  it("owner-only actions refuse without an owner session", async () => {
    expect(await consoleRun("status")).toEqual({ ok: false, error: "owner-only" });
    expect(await deleteFile("cfg/x.cfg", "cfg/x.cfg")).toEqual({ ok: false, error: "owner-only" });
  });
});
