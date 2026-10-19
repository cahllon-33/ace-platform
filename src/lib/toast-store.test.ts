import { beforeEach, describe, expect, it } from "vitest";
import { dismissToast, resetToastsForTest, subscribeToasts, toast, type ToastItem } from "./toast-store";

describe("toast store", () => {
  beforeEach(() => resetToastsForTest());
  it("pushes, caps at 4 and dismisses", () => {
    let seen: ToastItem[] = [];
    subscribeToasts((i) => (seen = i));
    for (let n = 0; n < 6; n++) toast(`m${n}`, "success");
    expect(seen.map((t) => t.message)).toEqual(["m2", "m3", "m4", "m5"]);
    dismissToast(seen[0].id);
    expect(seen).toHaveLength(3);
  });
});
