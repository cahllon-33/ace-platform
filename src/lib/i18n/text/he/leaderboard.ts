import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "טבלת מובילים",
    description:
      "הלוח התחרותי של A.C.E. חשבונות Steam שמורים מופיעים ראשונים. מקומות ריקים נשארים שורות תצוגה.",
  },
  hero: {
    kicker: "טבלת מובילים",
    title: "לוח תחרותי",
    note: "מקומות תצוגה ממלאים את הלוח עד ששחקנים יקשרו חשבון Steam ויצברו דירוג. המדינה והנשק המוצג שלהם הם להמחשה בלבד. הדמיות הנשק הן יצירות מקוריות של סטודיו A.C.E., לא סקינים של Valve. הריגות עדיין אינן נמדדות, ולכן הנשק המוצג אינו נתון של מוביל ההריגות.",
  },
  facts: {
    seats: "מקומות",
    storedAccounts: "חשבונות שמורים",
    killsStored: "הריגות שמורות",
    none: "אין",
  },
  empty: "אין מקום תצוגה שתואם לשם הזה.",
  podiumLabel: "שלושת המקומות הראשונים",
  boardLabel: "לוח תחרותי",
  table: {
    rank: "מקום",
    player: "שחקן",
    country: "מדינה",
    tier: "דרגה",
    leadWeapon: "נשק מוביל",
    rating: "דירוג",
  },
  tags: {
    stored: "חשבון שמור",
    showcase: "תצוגה",
  },
  weapon: {
    sampleRender: "נשק מזוהה",
    notStored: "לא נשמר",
    noKillSaved: "לא נשמרה אף הריגה",
    alt: "{name}",
  },
  countries: {
    il: "ישראל",
    us: "ארצות הברית",
    de: "גרמניה",
    ua: "אוקראינה",
    se: "שוודיה",
    fr: "צרפת",
    pl: "פולין",
    br: "ברזיל",
    jp: "יפן",
    kr: "דרום קוריאה",
  },
  search: {
    openLabel: "פתיחת חיפוש שחקנים",
    srLabel: "חיפוש בטבלת המובילים",
    fieldLabel: "חיפוש שחקנים",
    placeholder: "שם תצוגה",
  },
  seasonPreview: {
    banner: "טבלת עונה 1",
    noteLive:
      "שמות המקושרים ל-Steam הם חשבונות A.C.E. יחס K/D יופיע כששרתי המשחק יתעדו הריגות.",
    noteSample:
      "תוצאות עונה 1 יופיעו כאן ככל שישוחקו משחקים מדורגים.",
  },
  playerCard: {
    kicker: "תצוגה מקדימה של כרטיס שחקן",
    title: "תיק מפעיל",
    badge: "Premium",
    note: "הכרטיס שלך יתמלא בנתונים אמיתיים עם פתיחת המשחקים המדורגים.",
    currentRank: "דרגה נוכחית",
    rankValue: "A.C.E. Legend (חטיבה I)",
    competitiveRating: "דירוג תחרותי",
    seasonRank: "מקום בעונה",
    seasonTop: "(ה-{percent} העליונים)",
  },
};
