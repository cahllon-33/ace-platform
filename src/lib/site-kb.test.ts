import { describe, expect, it } from "vitest";
import { kbAnswer } from "@/lib/site-kb-corpus";
import { tokenize } from "@/lib/site-kb";

const HE = /[\u0590-\u05FF]/;
type Case = { l: string; q: string; route?: string | RegExp; has: (string | RegExp)[] };

/** Real visitor questions. Each expectation is a fact the site itself publishes. */
const CASES: Case[] = [
  // prices
  { l: "en", q: "How much does Premium cost?", route: /pricing|premium-terms|terms/, has: ["$7"] },
  { l: "en", q: "What is the price of Plus?", route: /pricing|premium-terms|terms/, has: ["$4"] },
  { l: "en", q: "Is A.C.E. free?", has: [/\$0|free/i] },
  { l: "he", q: "כמה עולה פרימיום?", route: /pricing|premium-terms|terms/, has: ["$7", HE] },
  { l: "he", q: "מה המחיר של פלוס?", route: /pricing|premium-terms|terms/, has: ["$4", HE] },
  { l: "he", q: "כמה עולה המנוי?", has: [/\$4|\$7/, HE] },
  // refunds / cancel
  { l: "en", q: "Can I get a refund?", has: [/refund|non-refundable/i] },
  { l: "en", q: "How do I cancel my subscription?", has: [/cancel/i] },
  { l: "he", q: "אפשר לקבל החזר כספי?", has: [HE, /החזר|מוחזר/] },
  { l: "he", q: "איך מבטלים מנוי?", has: [HE, /לבטל|ביטול/] },
  // RP gain / loss
  { l: "en", q: "How many RP do I get for a win?", route: "/ranks", has: [/\+15|15/] },
  { l: "he", q: "כמה נקודות מקבלים על ניצחון?", route: "/ranks", has: [/15/, HE] },
  { l: "en", q: "How much RP do I lose when I lose a match?", route: "/ranks", has: [/15|23|loss/i] },
  { l: "en", q: "What happens if I abandon a match?", route: "/ranks", has: [/50/] },
  { l: "he", q: "מה קורה אם אני נוטש משחק?", route: "/ranks", has: [/50/, HE] },
  { l: "en", q: "Do I get extra points as MVP?", route: "/ranks", has: [/MVP|2 RP|bonus/i] },
  // rank up / start
  { l: "en", q: "How do I rank up?", route: "/ranks", has: [/recorded|result|Rating Points/i] },
  { l: "he", q: "איך עולים דרגה?", route: "/ranks", has: [HE] },
  { l: "en", q: "Where does a new account start?", route: "/ranks", has: ["1,200"] },
  { l: "he", q: "באיזו דרגה מתחילים?", route: "/ranks", has: [/1,200|1200|3/, HE] },
  { l: "en", q: "What is the highest rank?", route: "/ranks", has: [/Legend|3,000/i] },
  // cheating / anti-cheat
  { l: "en", q: "How do I report a cheater?", route: "/anti-cheat", has: [/contact/i] },
  { l: "he", q: "איך מדווחים על רמאי?", route: "/anti-cheat", has: [HE, /קשר/] },
  { l: "en", q: "Is the anti-cheat active?", route: "/anti-cheat", has: [/development|not yet/i] },
  { l: "he", q: "האם האנטי צ'יט פעיל?", route: "/anti-cheat", has: [HE] },
  { l: "en", q: "Does the anti-cheat need kernel access?", route: "/anti-cheat", has: [/user-mode|kernel|reviewed/i] },
  { l: "en", q: "Does Premium affect anti-cheat?", route: "/anti-cheat", has: [/No|identical/i] },
  // Steam login
  { l: "en", q: "Steam login is not working", has: [/OpenID|Steam/] },
  { l: "he", q: "אני לא מצליח להתחבר עם סטים", has: [HE, /OpenID|Steam/] },
  { l: "en", q: "Will you ask for my Steam password?", has: [/password/i] },
  { l: "he", q: "האם אתם שומרים את הסיסמה שלי?", has: [HE, /סיסמ/] },
  // Premium badge / perks / pay-to-win
  { l: "en", q: "What does the Premium badge give me?", route: "/pricing", has: [/badge|SEAL/i] },
  { l: "he", q: "מה מקבלים עם התג של פרימיום?", has: [HE] },
  { l: "en", q: "Is A.C.E. pay to win?", has: [/advantage|boost|no/i] },
  // privacy / data / contact / tournaments
  { l: "en", q: "What personal data do you collect?", route: /privacy|cookie/, has: [/./] },
  { l: "en", q: "How do I contact support?", has: [/support@ace-platform\.gg|contact/i] },
  { l: "he", q: "איך יוצרים קשר עם התמיכה?", has: [/support@ace-platform\.gg|קשר/] },
  { l: "en", q: "Are there tournaments with prizes?", has: [/prize|tournament|bracket|round/i] },
  { l: "en", q: "Can I appeal a ban?", has: [/appeal/i] },
  { l: "he", q: "אפשר לערער על חסימה?", has: [HE, /ערעור|לערער|ערער/] },
];

describe("site knowledge answers", () => {
  it.each(CASES)("[$l] $q", ({ l, q, route, has }) => {
    const a = kbAnswer(q, l);
    expect(a.found, `no match for ${q}`).toBe(true);
    if (!a.found) return;
    if (typeof route === "string") expect(a.route).toBe(route);
    else if (route) expect(a.route).toMatch(route);
    for (const h of has) expect(a.answer).toMatch(typeof h === "string" ? new RegExp(h.replace(/[$+.]/g, "\\$&")) : h);
  });

  it("says nothing when the site has no answer", () => {
    expect(kbAnswer("What is the weather in Paris tomorrow?", "en").found).toBe(false);
    expect(kbAnswer("מה מזג האוויר מחר בתל אביב?", "he").found).toBe(false);
  });

  it("never answers with an unresolved placeholder", () => {
    const a = kbAnswer("How much does Premium cost?", "en");
    expect(a.found && /\{\w+\}/.test(a.answer)).toBe(false);
  });

  it("tokenizes Hebrew prefixes and English plurals", () => {
    expect(tokenize("והדרגות")).toContain("דרגות");
    expect(tokenize("cheaters")).toContain("cheater");
  });
});
