import { describe, expect, it } from "vitest";
import { buildSystemPrompt, CHAT_MAX_CHARS, createRateLimiter, sanitizeHistory } from "./ai-support-policy";

describe("ai support policy", () => {
  it("prompt is truthful", () => {
    const p = buildSystemPrompt("Hebrew");
    expect(p).toContain("Autonomous Anti-Cheat, Competitive Calibration, Elite Players");
    expect(p).toContain("$0");
    expect(p).toContain("$4");
    expect(p).toContain("$7");
    expect(p).toContain("no pay-to-win");
    expect(p).toContain("in development");
    expect(p).toContain("reviewed only by the A.C.E. administration");
    expect(p).toMatch(/Never claim: demo parsing, kernel-level anti-cheat/);
    expect(p).toContain("Hebrew");
    expect(p).not.toMatch(/faceit|esea|\besl\b/i);
  });
  it("sanitizes history", () => {
    expect(sanitizeHistory([{ role: "user", content: "hi" }])).toEqual([{ role: "user", content: "hi" }]);
    expect(sanitizeHistory([{ role: "user", content: "x".repeat(CHAT_MAX_CHARS + 1) }])).toBeNull();
    expect(sanitizeHistory([{ role: "system", content: "x" }])).toBeNull();
    expect(sanitizeHistory([{ role: "assistant", content: "x" }])).toBeNull();
    expect(sanitizeHistory("nope")).toBeNull();
    const conv = [{ role: "user", content: "q" }, { role: "assistant", content: "a" }];
    expect(sanitizeHistory(conv)).toBeNull();
    expect(sanitizeHistory(conv, { allowAssistantLast: true })).toHaveLength(2);
  });
  it("rate limits", () => {
    const allow = createRateLimiter(2, 3);
    expect(allow("a", 0)).toBe(true);
    expect(allow("a", 1)).toBe(true);
    expect(allow("a", 2)).toBe(false);
    expect(allow("a", 61_000)).toBe(true);
    expect(allow("a", 122_000)).toBe(false);
    expect(allow("b", 0)).toBe(true);
  });
});
