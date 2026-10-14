import { describe, expect, it } from "vitest";
import { buildSingleEliminationBracket, expectedPlayedMatches } from "@/lib/bracket";

function ids(count: number): string[] {
  return Array.from({ length: count }, (_, index) => `team-${index + 1}`);
}

describe("single-elimination bracket", () => {
  it("rejects fewer than two teams and more than 100", () => {
    expect(() => buildSingleEliminationBracket(["only"])).toThrow();
    expect(() => buildSingleEliminationBracket(ids(101))).toThrow();
  });

  it("uses 2, 4, 8, 64, and 128 slot trees for the documented sizes", () => {
    expect(buildSingleEliminationBracket(ids(2)).bracketSize).toBe(2);
    expect(buildSingleEliminationBracket(ids(3)).bracketSize).toBe(4);
    expect(buildSingleEliminationBracket(ids(5)).bracketSize).toBe(8);
    expect(buildSingleEliminationBracket(ids(8)).bracketSize).toBe(8);
    expect(buildSingleEliminationBracket(ids(64)).bracketSize).toBe(64);
    expect(buildSingleEliminationBracket(ids(100)).bracketSize).toBe(128);
  });

  it("for 100 teams uses 28 byes, 36 opening matches, and 99 played matches", () => {
    const plan = buildSingleEliminationBracket(ids(100));
    expect(plan.byeCount).toBe(28);
    expect(plan.firstRoundPlayed).toBe(36);
    expect(plan.totalPlayedMatches).toBe(99);
    expect(plan.totalPlayedMatches).toBe(expectedPlayedMatches(100));
  });

  it("does not treat a bye as a played match", () => {
    const plan = buildSingleEliminationBracket(ids(3));
    const byes = plan.matches.filter((match) => match.state === "BYE");
    expect(byes.length).toBeGreaterThan(0);
    expect(plan.totalPlayedMatches).toBe(2);
  });

  it("rejects duplicate team ids", () => {
    expect(() => buildSingleEliminationBracket(["a", "a"])).toThrow();
  });
});
