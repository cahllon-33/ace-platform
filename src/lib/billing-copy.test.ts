import { describe, expect, it } from "vitest";
import { textFor } from "@/lib/i18n/text";
import { DICTIONARIES } from "@/lib/i18n";
import { uiFor } from "@/lib/i18n/ui";
import { SITE_LOCALES } from "@/lib/languages";

const STALE = /checkout does not exist|checkout is not (live|implemented)|billing opens soon|checkout opens soon|no checkout yet|until checkout exists|when billing (opens|exists)|once billing exists|shop opens soon/i;

describe("R49d billing copy", () => {
  it("no English text claims checkout is missing", () => {
    expect(JSON.stringify(textFor("en"))).not.toMatch(STALE);
    expect(JSON.stringify(DICTIONARIES.en)).not.toMatch(STALE);
    expect(JSON.stringify(uiFor("en"))).not.toMatch(STALE);
  });
  it("every locale has the Paddle status labels and Paddle wording in the plan disclosure", () => {
    for (const l of SITE_LOCALES) {
      const ui = uiFor(l.id);
      expect(ui.r38.status.billingOn, l.id).toBeTruthy();
      expect(textFor(l.id).consent.subscriptionDisclosure, l.id).toContain("Paddle");
      expect(textFor(l.id).features.loot.checkout, l.id).toContain("Paddle");
    }
  });
});
