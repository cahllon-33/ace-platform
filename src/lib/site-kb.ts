/**
 * Site-knowledge answer engine (R39). Pure functions: no I/O, no secrets.
 * The corpus is built from the site's own translated strings, so every answer is a sentence the site already
 * publishes. Retrieval: BM25 over the visitor's locale and over English (with multilingual synonym expansion),
 * merged by document path, then answered in the visitor's locale.
 */
export type KbDoc = { id: string; route: string; title: string; text: string; answer: string };
export type KbHit = { doc: KbDoc; score: number };
export type KbAnswer = { found: true; answer: string; route: string; title: string; hits: KbHit[] } | { found: false; hits: KbHit[] };

const KNOWN_VARS: Record<string, string> = { free: "$0", plus: "$4", premium: "$7" };

/** Paths that are UI chrome, error messages or chat strings, not knowledge. */
const EXCLUDE = [/^ui\.r3[89]\.(chat|toast|sound)/, /^text\.teams\.errors/, /\.(aria|alt|label|placeholder)[A-Z]?/i, /^ui\.admin/, /^msg\.admin/];

export function routeFor(path: string): string {
  const rules: [RegExp, string][] = [
    [/^text\.pricing\.premiumExtras\.terms/, "/premium-terms"],
    [/^text\.pricing/, "/pricing"],
    [/^text\.legalDocs\.(terms|r14)/, "/terms"],
    [/^text\.legalDocs\.privacy/, "/privacy"],
    [/^text\.legalDocs\.cookiePolicy|^text\.consent/, "/cookie-policy"],
    [/^text\.(ranks|codex)|^ui\.r38\.journey|^ui\.r39\.home\.(ranks|step)/, "/ranks"],
    [/^text\.leaderboard|^ui\.r38\.board/, "/leaderboard"],
    [/^text\.play/, "/play"],
    [/^text\.teams/, "/teams"],
    [/^text\.features/, "/features"],
    [/^text\.account/, "/dashboard"],
    [/^text\.desk\.contactEmail/, "/contact"],
    [/^text\.desk\.shop/, "/shop"],
    [/^text\.tournamentRoadmap/, "/tournaments"],
    [/^ui\.antiCheat/, "/anti-cheat"],
    [/^ui\.rules|^rules\./, "/rules"],
    [/^ui\.maps/, "/maps"],
  ];
  for (const [re, route] of rules) if (re.test(path)) return route;
  return "/";
}

function fill(s: string): string | null {
  const out = s.replace(/\{(\w+)\}/g, (m, k: string) => KNOWN_VARS[k] ?? m);
  return /\{\w+\}/.test(out) ? null : out.replace(/\s+/g, " ").trim();
}

/** Flatten a bag into documents keyed by path. q/a and title/body siblings become one document. */
export function buildDocs(bag: unknown, prefix: string): KbDoc[] {
  const docs: KbDoc[] = [];
  const walk = (v: unknown, path: string, ctxTitle: string) => {
    if (EXCLUDE.some((re) => re.test(path))) return;
    if (typeof v === "string") {
      // Headings, kickers and tags are context for their siblings, not answers on their own.
      if (/(title|heading|kicker|tag|label)$/i.test(path.split(".").pop() ?? "")) return;
      const t = fill(v);
      if (t && t.length >= 24) docs.push({ id: path, route: routeFor(path), title: ctxTitle, text: `${ctxTitle} ${t}`, answer: t });
      return;
    }
    if (Array.isArray(v)) {
      v.forEach((x, i) => walk(x, `${path}.${i}`, ctxTitle));
      return;
    }
    if (!v || typeof v !== "object") return;
    const o = v as Record<string, unknown>;
    const q = typeof o.q === "string" ? o.q : null;
    const a = typeof o.a === "string" ? o.a : null;
    if (q && a) {
      const qa = fill(q);
      const an = fill(a);
      if (qa && an) docs.push({ id: `${path}.qa`, route: routeFor(path), title: qa, text: `${qa} ${qa} ${an}`, answer: an });
      return;
    }
    const title = [o.title, o.heading, o.name, o.q].find((x): x is string => typeof x === "string") ?? ctxTitle;
    for (const [k, x] of Object.entries(o)) {
      if (x === title && typeof x === "string") continue;
      walk(x, path ? `${path}.${k}` : k, fill(title) ?? ctxTitle);
    }
  };
  walk(bag, prefix, "");
  return docs;
}

// ---------- tokenisation ----------
const STOP = new Set(
  "a an the and or of to in on for is are be it this that do does did how what why when where who which can i my me you your we our with at by from as not no yes if about there their they its than then so just".split(" ").concat(
    "של את על עם זה זו מה איך למה מתי איפה אני אתה את אנחנו יש אין לא כן או גם כל אם רק הוא היא הם".split(" "),
  ),
);
const SEGMENTLESS = /[\u0E00-\u0E7F\u3040-\u30FF\u3400-\u9FFF\uAC00-\uD7AF]/;

function stem(w: string): string[] {
  const out = [w];
  if (/^[\u05D0-\u05EA]+$/.test(w)) {
    // Hebrew clitics (ו ה ב ל מ ש כ): try one and two stripped letters, keep stems of 3+ letters.
    const cands = [w];
    if (/^[והבלמשכ]/.test(w) && w.length >= 4) cands.push(w.slice(1));
    if (/^[והבלמשכ]{2}/.test(w) && w.length >= 5) cands.push(w.slice(2));
    for (const c of cands) {
      if (c !== w) out.push(c);
      const s = c.replace(/(ים|ות|ה)$/, "");
      if (s.length >= 3 && s !== c) out.push(s);
    }
  } else if (/^[a-z]+$/.test(w) && w.length > 4) {
    const s = w.replace(/(ing|ed|es|s)$/, "");
    if (s.length >= 3 && s !== w) out.push(s);
  }
  return out;
}

export function tokenize(input: string): string[] {
  const text = input
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[׳']/g, "'")
    // multi-word phrases that must stay one concept
    .replace(/pay[\s-]*(?:to|2)[\s-]*win|פיי[\s-]*טו[\s-]*וין|יתרון\s+בתשלום|לקנות\s+יתרון/g, " paytowin ");
  const out: string[] = [];
  for (const raw of text.split(/[^\p{L}\p{N}$+'-]+/u)) {
    const w = raw.replace(/^['-]+|['-]+$/g, "");
    if (!w) continue;
    if (SEGMENTLESS.test(w) && w.length > 2) {
      for (let i = 0; i < w.length - 1; i++) out.push(w.slice(i, i + 2));
      continue;
    }
    if (STOP.has(w)) continue;
    const money = w.match(/^\$?(\d+)\$?$/);
    if (money) {
      out.push(w.includes("$") ? `$${money[1]}` : money[1]);
      if (w.includes("$")) out.push(money[1]);
      continue;
    }
    out.push(...stem(w));
  }
  return out;
}

// ---------- synonyms (multilingual surface forms -> English terms present in the corpus) ----------
type Syn = { forms: string[]; en: string[]; boost?: RegExp };
export const SYNONYMS: Syn[] = [
  { forms: ["price", "prices", "pricing", "cost", "costs", "much", "fee", "pay", "מחיר", "מחירים", "עולה", "עולים", "עלות", "לשלם", "תשלום", "כמה", "стоит", "цена", "kostet", "preis", "precio", "cuesta", "prix", "coûte", "fiyat", "料金", "价格", "가격"], en: ["costs", "month", "plus", "premium", "free"], boost: /subscriptions|premiumExtras\.terms\.prices|pricing\.tiers/ },
  { forms: ["rp", "point", "points", "gain", "earn", "rating", "נקודות", "נקודה", "להרוויח", "מרוויחים", "מקבלים", "דירוג", "очки", "punkte", "puntos"], en: ["rating", "points", "win", "equal", "team", "average"], boost: /how-points-move|rpRules/ },
  { forms: ["win", "won", "victory", "ניצחון", "מנצחים", "לנצח", "ניצחתי"], en: ["win", "equal", "team"], boost: /how-points-move/ },
  { forms: ["rank", "ranks", "rankup", "climb", "promote", "promotion", "level", "tier", "דרגה", "דרגות", "בדרגה", "לטפס", "טיפוס"], en: ["rank", "band", "rating", "points", "recorded", "result"], boost: /what-rating-points-are|what-cannot-move|codex\.article\.status|rankArticle\.code\.record/ },
  { forms: ["refund", "refunds", "money", "back", "cancel", "cancellation", "החזר", "החזרים", "החזרה", "ביטול", "לבטל", "מבטלים", "מבטל", "מנוי", "כסף", "כספי", "כספים", "возврат", "erstattung", "reembolso", "remboursement"], en: ["refundable", "cancel", "cancelling", "billing", "charged"], boost: /billing\.rolling|subscriptions|premiumExtras\.terms\.prices/ },
  { forms: ["cheat", "cheater", "cheaters", "cheating", "hacker", "hack", "report", "wallhack", "aimbot", "רמאי", "רמאים", "רמאות", "צ'יטר", "צ'יטרים", "לדווח", "דיווח", "מדווחים", "האקר", "читер", "betrüger"], en: ["report", "cheater", "contact", "rulebook", "reviewed"], boost: /antiCheat\.faq/ },
  { forms: ["login", "log", "sign", "signin", "steam", "openid", "password", "error", "fail", "failed", "התחברות", "להתחבר", "מתחבר", "כניסה", "סיסמה", "סיסמא", "שגיאה", "נכשל", "סטים"], en: ["steam", "openid", "sign", "password", "callback", "verified"], boost: /loginError|neverCollect|privacy\.meta/ },
  { forms: ["badge", "badges", "seal", "cosmetic", "card", "תג", "תגים", "סמל", "סמלים", "חותם", "קוסמטי"], en: ["badges", "seal", "special", "premium", "card"], boost: /matrix\.rows\.badges|matrix\.rows\.card/ },
  { forms: ["anticheat", "anti-cheat", "shield", "kernel", "client", "אנטי", "אנטי-צ'יט", "שילד", "קרנל"], en: ["shield", "anti", "cheat", "development", "kernel"], boost: /antiCheat\.faq/ },
  { forms: ["ban", "banned", "suspend", "suspended", "appeal", "penalty", "חסימה", "חסום", "נחסמתי", "ערעור", "עונש", "הרחקה"], en: ["appeal", "penalty", "decision", "penalties"], boost: /disputes/ },
  { forms: ["data", "privacy", "personal", "collect", "פרטיות", "מידע", "נתונים", "אוספים"], en: ["privacy", "data", "collect", "stored"], boost: /privacy/ },
  { forms: ["start", "starting", "new", "begin", "beginning", "first", "מתחיל", "מתחילים", "התחלה", "חדש", "חדשים", "ראשון"], en: ["starts", "new", "account", "starting", "1,200"], boost: /where-a-new-account-starts/ },
  { forms: ["tournament", "tournaments", "prize", "prizes", "cup", "טורניר", "טורנירים", "פרס", "פרסים"], en: ["tournament", "prizes", "bracket", "round"], boost: /tournamentRoadmap/ },
  { forms: ["lose", "loss", "losses", "lost", "הפסד", "הפסדים", "מפסידים", "הפסדתי", "מפסיד"], en: ["loss", "lose", "equal"], boost: /rpRules\.rLoss|how-points-move\.lede/ },
  { forms: ["abandon", "abandoning", "leave", "leaving", "quit", "draw", "נטישה", "נוטש", "נוטשים", "לנטוש", "לעזוב", "עוזב", "תיקו"], en: ["abandoning", "leaving", "draw", "50"], boost: /how-points-move\.sections\.1|rpRules\.rAbandon/ },
  { forms: ["highest", "max", "maximum", "best", "ceiling", "הכי", "גבוהה", "הגבוהה", "הגבוה", "עליונה", "המקסימלית"], en: ["ceiling", "3,000", "legend", "eleventh"], boost: /rank-10|gateLast|floor-ceiling/ },
  { forms: ["support", "contact", "email", "help", "תמיכה", "קשר", "מייל", "אימייל", "עזרה"], en: ["support", "contact", "ace.platform.official@gmail.com"], boost: /contact/ },
  { forms: ["paytowin", "pay2win", "p2w"], en: ["advantage", "never", "buy", "competitive", "paid"], boost: /antiCheat\.faq|r39\.home\.sub|matrix\.rows\.advantage/ },
  { forms: ["play", "playing", "לשחק", "משחקים", "להצטרף", "הצטרפות"], en: ["connect", "steam", "calibrate", "sign"], boost: /r39\.home\.step/ },
  { forms: ["advantage", "boost", "יתרון", "בוסט"], en: ["advantage", "boost", "competitive", "plan"], boost: /antiCheat\.faq|matrix\.rows\.advantage/ },
  { forms: ["premium", "פרימיום", "פרמיום"], en: ["premium"] },
  { forms: ["plus", "פלוס"], en: ["plus"] },
  { forms: ["free", "חינם", "חינמי"], en: ["free"] },
  { forms: ["mvp", "fragger", "top", "מצטיין"], en: ["mvp", "bonus"], boost: /how-points-move/ },
  { forms: ["server", "servers", "match", "matchmaking", "queue", "שרת", "שרתים", "משחק", "תור"], en: ["server", "match", "queue", "closed"] },
];

export function expand(tokens: string[]): { en: string[]; boosts: RegExp[] } {
  const en: string[] = [];
  const boosts: RegExp[] = [];
  const set = new Set(tokens);
  for (const syn of SYNONYMS) {
    if (syn.forms.some((f) => set.has(f.toLowerCase()))) {
      en.push(...syn.en.flatMap((w) => tokenize(w)));
      if (syn.boost) boosts.push(syn.boost);
    }
  }
  return { en, boosts };
}

// ---------- BM25 ----------
export type KbIndex = { docs: KbDoc[]; tf: Map<string, number>[]; len: number[]; avg: number; df: Map<string, number> };

export function buildIndex(docs: KbDoc[]): KbIndex {
  const tf: Map<string, number>[] = [];
  const len: number[] = [];
  const df = new Map<string, number>();
  for (const d of docs) {
    const toks = tokenize(d.text);
    const m = new Map<string, number>();
    for (const t of toks) m.set(t, (m.get(t) ?? 0) + 1);
    for (const t of m.keys()) df.set(t, (df.get(t) ?? 0) + 1);
    tf.push(m);
    len.push(toks.length);
  }
  const avg = len.reduce((a, b) => a + b, 0) / Math.max(1, len.length);
  return { docs, tf, len, avg, df };
}

function bm25(index: KbIndex, query: string[]): Map<string, number> {
  const N = index.docs.length;
  const k1 = 1.2;
  const b = 0.75;
  const scores = new Map<string, number>();
  const q = [...new Set(query)];
  index.docs.forEach((doc, i) => {
    let s = 0;
    const m = index.tf[i];
    for (const t of q) {
      const f = m.get(t);
      if (!f) continue;
      const n = index.df.get(t) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      s += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * index.len[i]) / index.avg)));
    }
    if (s > 0) scores.set(doc.id, s);
  });
  return scores;
}

export const MIN_SCORE = 4;

export function search(question: string, local: KbIndex, english: KbIndex): KbHit[] {
  const qTokens = tokenize(question);
  const { en, boosts } = expand(qTokens);
  const localScores = bm25(local, qTokens);
  const enScores = bm25(english, [...qTokens.filter((t) => /^[a-z0-9$@.,-]+$/.test(t)), ...en]);
  const byId = new Map(local.docs.map((d) => [d.id, d]));
  const enById = new Map(english.docs.map((d) => [d.id, d]));
  const merged = new Map<string, number>();
  for (const [id, s] of localScores) merged.set(id, s);
  for (const [id, s] of enScores) merged.set(id, Math.max(merged.get(id) ?? 0, s));
  const hits: KbHit[] = [];
  for (const [id, s] of merged) {
    const doc = byId.get(id) ?? enById.get(id);
    if (!doc) continue;
    const boosted = boosts.some((re) => re.test(id)) ? s * 2 : s;
    hits.push({ doc, score: boosted });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, 6);
}

export function answerFrom(question: string, local: KbIndex, english: KbIndex): KbAnswer {
  const hits = search(question, local, english);
  const top = hits[0];
  if (!top || top.score < MIN_SCORE) return { found: false, hits };
  const parts = [top.doc.answer];
  const second = hits[1];
  const short = top.doc.answer.length < 70;
  if (
    second &&
    second.doc.answer !== top.doc.answer &&
    ((short && second.score > top.score * 0.55) || (second.doc.route === top.doc.route && second.score > top.score * 0.8 && top.doc.answer.length < 260))
  ) {
    parts.push(second.doc.answer);
  }
  return { found: true, answer: parts.join(" "), route: top.doc.route, title: top.doc.title, hits };
}
