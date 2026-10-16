import { describe, expect, it } from "vitest";
import { DEFAULT_PUBLIC_COUNT_MIN, publicCountMin, shapePublicStats } from "@/server/public-stats";

describe("public live counters", () => {
  it("threshold defaults to 25 and reads ACE_PUBLIC_COUNT_MIN", () => {
    expect(publicCountMin({})).toBe(DEFAULT_PUBLIC_COUNT_MIN);
    expect(publicCountMin({ ACE_PUBLIC_COUNT_MIN: "50" })).toBe(50);
    expect(publicCountMin({ ACE_PUBLIC_COUNT_MIN: "abc" })).toBe(25);
    expect(publicCountMin({ ACE_PUBLIC_COUNT_MIN: "-3" })).toBe(25);
  });
  it("hides both numbers below the threshold (early access), never inflates", () => {
    const s = shapePublicStats({ online: 3, registered: 24, unavailable: false }, 25);
    expect(s).toMatchObject({ online: null, registered: null, earlyAccess: true, unavailable: false });
  });
  it("shows exact numbers at or above the threshold", () => {
    expect(shapePublicStats({ online: 4, registered: 25, unavailable: false }, 25)).toMatchObject({ online: 4, registered: 25, earlyAccess: false });
  });
  it("reports unavailable without numbers when the database is down", () => {
    expect(shapePublicStats({ online: 0, registered: 0, unavailable: true }, 25)).toMatchObject({ online: null, registered: null, unavailable: true });
  });
});
