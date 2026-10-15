import { describe, expect, it } from "vitest";
import { adminPreviewEnabled } from "@/server/admin-preview";

describe("admin preview guard", () => {
  it("is on only in development with ACE_ADMIN_PREVIEW=1", () => {
    expect(adminPreviewEnabled({ NODE_ENV: "development", ACE_ADMIN_PREVIEW: "1" })).toBe(true);
  });
  it("is off in production even with the flag", () => {
    expect(adminPreviewEnabled({ NODE_ENV: "production", ACE_ADMIN_PREVIEW: "1" })).toBe(false);
    expect(adminPreviewEnabled({ NODE_ENV: "test", ACE_ADMIN_PREVIEW: "1" })).toBe(false);
  });
  it("is off in development without the flag", () => {
    expect(adminPreviewEnabled({ NODE_ENV: "development" })).toBe(false);
    expect(adminPreviewEnabled({ NODE_ENV: "development", ACE_ADMIN_PREVIEW: "true" })).toBe(false);
  });
});
