import { beforeEach, describe, expect, it, vi } from "vitest";

type U = { id: string; steamId: string; displayName: string; competitiveRating: number; rankLevel: number; rankOverrideBaseRp: number | null; rankArt: string | null; subscriptionTier: string; accountStatus: string; adminNote: string };
const state: { user: U; logs: Array<Record<string, unknown>>; gate: boolean } = { user: null as unknown as U, logs: [], gate: true };

vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("@/server/admin-gate", () => ({ readAdminGate: async () => state.gate, readAdminActor: async () => "steam:76561199000000000" }));
vi.mock("@/lib/db", () => {
  const user = {
    findUnique: async ({ where }: { where: { id: string } }) => (where.id === state.user.id ? { ...state.user } : null),
    update: async ({ data }: { data: Partial<U> }) => { Object.assign(state.user, data); return state.user; },
  };
  const adminAuditLog = {
    create: async ({ data }: { data: Record<string, unknown> }) => { state.logs.push({ ...data, createdAt: new Date() }); return data; },
    findMany: async () => state.logs.map((l, i) => ({ id: String(i), ...l })).reverse(),
  };
  const passthrough = { create: async () => ({}), updateMany: async () => ({}) };
  return { prisma: { user, adminAuditLog, banRecord: passthrough, userSession: passthrough, $transaction: async (ops: Promise<unknown>[]) => Promise.all(ops) } };
});

import { applyRankOverride, loadPlayerOps, resetRankOverride, setBanWithReason } from "@/server/admin-ops";

beforeEach(() => {
  state.gate = true;
  state.logs = [];
  state.user = { id: "u1", steamId: "76561198000000002", displayName: "DemoFree", competitiveRating: 1300, rankLevel: 3, rankOverrideBaseRp: null, rankArt: null, subscriptionTier: "FREE", accountStatus: "ACTIVE", adminNote: "" };
});

describe("admin rank override (server)", () => {
  it("writes the one rank source, keeps the calculated base and audits who/old/new/reason", async () => {
    const r = await applyRankOverride("u1", { kind: "rp", rp: 2600 }, "keep", "  tournament seeding ");
    expect(r.ok).toBe(true);
    expect(state.user.competitiveRating).toBe(2600);
    expect(state.user.rankLevel).toBeGreaterThan(3);
    expect(state.user.rankOverrideBaseRp).toBe(1300);
    expect(state.logs[0]).toMatchObject({ actor: "steam:76561199000000000", action: "rank.override", targetUserId: "u1", reason: "tournament seeding" });
    expect(String(state.logs[0].oldValue)).toMatch(/1300 RP/);
    expect(String(state.logs[0].newValue)).toMatch(/2600 RP/);
  });
  it("reset to calculated restores the base and audits it", async () => {
    await applyRankOverride("u1", { kind: "division", level: 10, division: "I" }, "keep", "");
    await applyRankOverride("u1", { kind: "rp", rp: 500 }, "keep", "");
    expect(state.user.rankOverrideBaseRp).toBe(1300);
    const r = await resetRankOverride("u1", "undo");
    expect(r.ok).toBe(true);
    expect(state.user.competitiveRating).toBe(1300);
    expect(state.user.rankOverrideBaseRp).toBeNull();
    expect(state.logs.at(-1)).toMatchObject({ action: "rank.reset", reason: "undo" });
    const ops = await loadPlayerOps("u1");
    expect(ops?.audit).toHaveLength(3);
  });
  it("Premium badge art only for Premium plans; invalid RP rejected; closed gate denied", async () => {
    expect((await applyRankOverride("u1", null, "premium", "")).ok).toBe(false);
    state.user.subscriptionTier = "PREMIUM";
    expect((await applyRankOverride("u1", null, "premium", "")).ok).toBe(true);
    expect(state.user.rankArt).toBe("PREMIUM");
    expect((await applyRankOverride("u1", { kind: "rp", rp: 99999 }, "keep", "")).ok).toBe(false);
    state.gate = false;
    expect((await applyRankOverride("u1", { kind: "rp", rp: 1500 }, "keep", "")).ok).toBe(false);
    expect(state.logs).toHaveLength(1);
  });
  it("ban with reason is audited", async () => {
    await setBanWithReason("u1", true, "smurf");
    expect(state.user.accountStatus).toBe("BANNED");
    expect(state.logs[0]).toMatchObject({ action: "account.ban", reason: "smurf" });
  });
});
