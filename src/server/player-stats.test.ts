import { describe, expect, it, vi } from "vitest";

vi.mock("@/server/db", () => ({ getPrisma: () => { throw new Error("db must not be read"); } }));

import { loadRatingMovement, statsAccess } from "@/server/player-stats";
import { PLAN_MATRIX } from "@/lib/plan-compare";

describe("player stats gate", () => {
  it("unlocks only PLUS and PREMIUM", () => {
    expect(statsAccess(null)).toBe("signedOut");
    expect(statsAccess({ subscriptionTier: "FREE" })).toBe("locked");
    expect(statsAccess({ subscriptionTier: "PLUS" })).toBe("unlocked");
    expect(statsAccess({ subscriptionTier: "PREMIUM" })).toBe("unlocked");
  });
  it("never reads rating history for Free or signed-out users", async () => {
    await expect(loadRatingMovement(null)).resolves.toBeNull();
    await expect(loadRatingMovement({ id: "u", subscriptionTier: "FREE" })).resolves.toBeNull();
  });
});

describe("plan matrix", () => {
  it("never sells a competitive advantage and Plus/Premium both get stats", () => {
    const adv = PLAN_MATRIX.find((r) => r.id === "advantage")!;
    expect([adv.free, adv.plus, adv.premium]).toEqual(["no", "no", "no"]);
    const stats = PLAN_MATRIX.find((r) => r.id === "stats")!;
    expect([stats.plus, stats.premium]).toEqual(["yes", "yes"]);
  });
});
