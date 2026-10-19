import { describe, expect, it, vi } from "vitest";
import { coarseCountry, parseUserAgent } from "@/lib/user-agent";

const create = vi.fn();
const deleteMany = vi.fn();
vi.mock("@/server/db", () => ({ getPrisma: () => ({ signInEvent: { create, deleteMany } }) }));

const { recordSignInEvent, startOfDayInZone, SIGN_IN_RETENTION_MS } = await import("@/server/sign-in-events");

const base = { userId: "u1", steamId: "76561199017997899", personaName: "Kalibra", avatarUrl: "", isNewUser: true };

describe("coarse user agent", () => {
  it("classifies common agents without storing the raw UA", () => {
    expect(parseUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36")).toEqual({ deviceType: "desktop", os: "Windows", browser: "Chrome" });
    expect(parseUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1")).toEqual({ deviceType: "mobile", os: "iOS", browser: "Safari" });
    expect(parseUserAgent("Mozilla/5.0 (Linux; Android 14; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36")).toMatchObject({ deviceType: "tablet", os: "Android" });
    expect(parseUserAgent("Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 Chrome/130.0 Safari/537.36 Edg/130.0")).toMatchObject({ browser: "Edge" });
    expect(parseUserAgent("")).toEqual({ deviceType: "unknown", os: "", browser: "" });
  });
  it("keeps only a 2-letter country code", () => {
    expect(coarseCountry("il")).toBe("IL");
    expect(coarseCountry("XX")).toBeNull();
    expect(coarseCountry("1.2.3.4")).toBeNull();
    expect(coarseCountry(null)).toBeNull();
  });
});

describe("recordSignInEvent", () => {
  it("stores coarse fields only (no IP) and prunes rows older than 90 days", async () => {
    create.mockResolvedValueOnce({});
    deleteMany.mockResolvedValueOnce({ count: 0 });
    await recordSignInEvent({ ...base, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) Firefox/131.0", countryHeader: "il" });
    const data = create.mock.calls.at(-1)![0].data;
    expect(data).toEqual({ ...base, deviceType: "desktop", os: "macOS", browser: "Firefox", country: "IL" });
    const cutoff: Date = deleteMany.mock.calls.at(-1)![0].where.createdAt.lt;
    expect(Math.abs(Date.now() - SIGN_IN_RETENTION_MS - cutoff.getTime())).toBeLessThan(5000);
  });
  it("never throws when the table is missing or the DB is down", async () => {
    create.mockRejectedValueOnce(new Error("relation SignInEvent does not exist"));
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    await expect(recordSignInEvent({ ...base, userAgent: null, countryHeader: null })).resolves.toBeUndefined();
  });
});

describe("startOfDayInZone", () => {
  it("returns Jerusalem midnight (UTC+3 in October)", () => {
    expect(startOfDayInZone(new Date("2026-10-19T14:30:00Z")).toISOString()).toBe("2026-10-18T21:00:00.000Z");
    expect(startOfDayInZone(new Date("2026-10-19T22:30:00Z")).toISOString()).toBe("2026-10-19T21:00:00.000Z");
  });
});
