import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "משחק",
    description: "שידוך מדורג 5v5 ייפתח כשה-Anti-Cheat של A.C.E Shield יפעל.",
  },
  boards: {
    label: "לוחות תור",
    title: "שלושה לוחות 5v5",
    note: "הבחירה נשמרת בעמוד הזה. חיפוש מדורג סגור, והבחירה לא מחפשת יריבים.",
    items: {
      open: {
        name: "לוח פתוח",
        rules: [
          "קבוצה בכל גודל, עד חמישה",
          "בלי חלון דירוג",
          "Steam OpenID הוא בדיקת הזהות",
          "מיועד לאימון פתוח ברגע שיהיה תור",
        ],
      },
      calibration: {
        name: "לוח כיול",
        rules: [
          "סולו, צמד, או שלישייה",
          "חלון מתוכנן של {points} נקודות דירוג",
          "חייב להיות פרופיל Steam שמור",
          "משתמש בכלל הדירוג של A.C.E. · חיפוש בקרוב",
        ],
      },
      elite: {
        name: "לוח עלית",
        rules: [
          "סולו או צמד",
          "חלון מתוכנן של {points} נקודות דירוג",
          "המנוי השמור חייב להיות Plus או Premium",
          "כניסה כתובה מחמירה. אין קופת פרסים",
        ],
      },
    },
  },
  veto: {
    kicker: "וטו מפות",
    title: "בחרו את המפה",
    lede: "פסלו מפות עד שתישאר אחת. הלובי הזה לא מפעיל את Counter-Strike 2 ולא פותח שרת.",
    mapSelected: "המפה שנבחרה: {map}",
    yourBan: "הפסילה שלכם",
    opponentBan: "פסילת היריב",
    selected: "נבחרה",
    declined: "נפסלה",
    decline: "פסילה",
    reset: "איפוס הווטו",
    declinedToast: "{map} נפסלה. העמוד הזה לא פותח שרת.",
    lockKicker: "חדר משחק 5v5",
    lockTitle: "{map} היא המפה שנשארה",
    lockBody:
      "חדר המשחק שלך. משחקים תחרותיים יתחילו כאן עם פתיחת הבטא התחרותית.",
    close: "סגור",
  },
  arena: {
    ariaLabel: "תצוגה מקדימה של חדר המשחק",
    captain: "קפטן",
    ping: "פינג {ping}",
    mapPlates: "לוחות מפה",
    selectMap: "בחירת {map}",
    settings: {
      region: "אזור",
      mode: "מצב",
      antiCheat: "אנטי-צ'יט",
      simulator: "תצוגה מקדימה",
    },
    chat: {
      title: "צ'אט קבוצה",
      kicker: "צ׳אט קבוצתי · בקרוב",
      captainName: "{name} (קפטן)",
      layoutName: "{name}",
      samples: ["gl hf", "יאללה, הולכים על זה", "dust 2 טובה לנו", "מוכן"],
      inputLabel: "הודעה בצ׳אט הקבוצתי",
      placeholder: "הודעה לקבוצה…",
      send: "שליחה",
    },
    tiles: {
      map: "מפה",
      server: "שרת",
      serverValue: "מערב אירופה · בקרוב",
      mode: "מצב",
    },
    identity: {
      title: "אימות זהות",
      kicker: "בדיקות זהות · בקרוב",
      rows: [
        "אימות דוא״ל · בקרוב",
        "אימות טלפון · בקרוב",
        "בדיקת פנים · בקרוב",
      ],
    },
    security: {
      title: "אבטחת משחק",
      kicker: "A.C.E SHIELD · בפיתוח",
      rows: [
        "הגנת Anti-Cheat · בפיתוח",
        "בדיקת יושרת שרת · בפיתוח",
        "הצפנת נתוני משחק · בפיתוח",
      ],
    },
    findMatchReason: "שידוך המשחקים ייפתח עם הבטא התחרותית. תורים מדורגים עדיין אינם פועלים.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} יצטרף לסגל עם פתיחת המשחקים.",
    banner: "זירה · בטא תחרותית בקרוב",
    mapPlate: "לוח מפה · DUST II · אין שרת 128-TICK",
    rosterNote: "כינויים לדוגמה.",
    teamA: "קבוצה A · ברית טקטית",
    teamB: "קבוצה B · לגיון הצללים",
    clockLabel: "שעון המשחק",
    clockNote: "השעון הזה רץ בלולאה. התור סגור.",
    chatKicker: "צ'אט קבוצה",
    chatLines: [
      "ממתין עד לאיפוס השעון.",
      "Dust II הוא לוח מפה בעמוד הזה.",
      "אין שרת מחובר לסגל הזה.",
    ],
    chatField: "ההודעות לא נשלחות.",
    identityKicker: "רשת זהות",
    identityRows: [
      "מייל כרטיס משחק לא נשלח.",
      "אין בדיקת ליבה שרצה.",
      "טלמטריה חיה תגיע עם הבטא התחרותית.",
    ],
    findMatch: "מצא משחק תחרותי",
    closedNotice: "שידוך המשחקים ייפתח עם הבטא התחרותית. תורים מדורגים עדיין אינם פועלים.",
  },
};
