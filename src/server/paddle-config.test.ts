import { describe, expect, it, vi } from "vitest";
vi.mock("@/server/db", () => ({ getPrisma: () => ({}) }));
import { readPaddleConfig } from "@/server/paddle";

describe("readPaddleConfig", () => {
  const full = { PADDLE_ENV: "sandbox", PADDLE_API_KEY: "k", PADDLE_CLIENT_TOKEN: "test_x", PADDLE_PRICE_PLUS: "pri_a", PADDLE_PRICE_PREMIUM: "pri_b", PADDLE_WEBHOOK_SECRET: "s" };
  it("is null (coming soon) unless every value is present", () => {
    expect(readPaddleConfig({} as unknown as NodeJS.ProcessEnv)).toBeNull();
    expect(readPaddleConfig({ ...full, PADDLE_API_KEY: "" } as unknown as NodeJS.ProcessEnv)).toBeNull();
    expect(readPaddleConfig({ ...full, PADDLE_ENV: "live" } as unknown as NodeJS.ProcessEnv)).toBeNull();
    expect(readPaddleConfig({ ...full, PADDLE_PRICE_PLUS: "4" } as unknown as NodeJS.ProcessEnv)).toBeNull();
    expect(readPaddleConfig(full as unknown as NodeJS.ProcessEnv)).toMatchObject({ env: "sandbox", prices: { plus: "pri_a", premium: "pri_b" } });
  });
});
