import { describe, expect, it } from "vitest";
import { WING_ROUNDS, buildDualWing, seedOrder } from "./dual-wing-bracket";
import type { LayoutTeam } from "./tournament-layout";

const teams = (n: number) => Array.from({ length: n }, (_, i) => ({ id: `t${i}`, name: `T${i}` }) as unknown as LayoutTeam);

describe("dual-wing 100-team bracket", () => {
  it("has correct slot counts per round on both wings", () => {
    const b = buildDualWing(teams(100));
    for (const wing of [b.left, b.right]) for (const r of WING_ROUNDS) expect(wing[r.id]).toHaveLength(r.matches);
  });
  it("places 14 byes per wing, never bye-vs-bye, balanced 3-4 per quarter", () => {
    const b = buildDualWing(teams(100));
    for (const wing of [b.left, b.right]) {
      const r = wing.r128;
      expect(r.flatMap((m) => m.slots).filter((s) => s.kind === "bye")).toHaveLength(14);
      expect(r.every((m) => !(m.slots[0].kind === "bye" && m.slots[1].kind === "bye"))).toBe(true);
      const perQuarter = [0, 1, 2, 3].map((q) => r.slice(q * 8, q * 8 + 8).filter((m) => m.slots[1].kind === "bye").length);
      expect(Math.max(...perQuarter) - Math.min(...perQuarter)).toBeLessThanOrEqual(1);
      expect(r.flatMap((m) => m.slots).filter((s) => s.kind === "team")).toHaveLength(50);
    }
  });
  it("mirrors wings: same bye pattern left and right", () => {
    const b = buildDualWing(teams(100));
    expect(b.left.r128.map((m) => m.slots.map((s) => s.kind).join())).toEqual(b.right.r128.map((m) => m.slots.map((s) => s.kind).join()));
  });
  it("seed order pairs 1 v N", () => {
    expect(seedOrder(4)).toEqual([1, 4, 2, 3]);
  });
  it("leaves unfilled slots open instead of inventing teams", () => {
    const b = buildDualWing(teams(3));
    expect(b.left.r128.flatMap((m) => m.slots).filter((s) => s.kind === "team")).toHaveLength(2);
    expect(b.right.r128.flatMap((m) => m.slots).filter((s) => s.kind === "team")).toHaveLength(1);
  });
});
