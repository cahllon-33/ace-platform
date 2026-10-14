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
    note: "מקומות תצוגה ממלאים את הלוח עד שנשמר חשבון Steam. דירוג שמור מחליף אותם. המדינה והנשק המוביל הם דוגמאות. הדמיות הנשק הן תמונות סטודיו מקוריות של A.C.E., לא סקינים של Valve. האתר הזה לא שומר הריגות, ולכן הנשק אינו רובה ההריגות המוביל שנרשם בפועל.",
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
    sampleRender: "הדמיה לדוגמה",
    notStored: "לא נשמר",
    noKillSaved: "לא נשמרה אף הריגה",
    alt: "הדמיה לדוגמה של {name}",
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
    banner: "סולם עונה 1 — פריסה",
    noteLive:
      "שמות שמקושרים ל-Steam הם חשבונות שמורים. מקומות ריקים נשארים מסומנים כתצוגה. K/D לא נשמר, ולכן המד הזה הוא פריסה.",
    noteSample:
      "דגימת פריסה. 0 רשומות מדורגות חיות. הנתונים האלה אינם תוצאת עונה, ו-K/D לא נשמר.",
  },
  playerCard: {
    kicker: "תצוגה של כרטיס מאומת · נתוני דמה",
    title: "תיק מפעיל",
    badge: "Premium",
    note: "פריסה בלבד. המספרים האלה אינם עונה חיה, Elo חי או חשבון מחובר. השיבוץ המדורג אינו פעיל.",
    currentRank: "דרגה נוכחית",
    rankValue: "A.C.E. Legend (חטיבה I)",
    competitiveRating: "דירוג תחרותי",
    seasonRank: "מקום בעונה",
    seasonTop: "(ה-{percent} העליונים)",
  },
};
