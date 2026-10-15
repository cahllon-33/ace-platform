import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  dashboard: {
    meta: {
      title: "לוח הפיקוד",
    },
    kicker: "מאומת",
    title: "לוח הפיקוד",
    lede: "מחובר דרך Steam OpenID. הסשן נשמר בעוגיית HttpOnly, לא ב-localStorage. החיפוש המדורג נשאר סגור עד שיהיה אנטי-צ'יט אמיתי.",
    eliteBadge: "עלית",
    stats: {
      accountStatus: "מצב החשבון",
      subscription: "מנוי",
      rank: "דרגת A.C.E.",
      ratingPoints: "נקודות דירוג",
      wins: "ניצחונות",
      losses: "הפסדים",
      accountId: "מזהה חשבון פנימי",
    },
    accountStatuses: {
      ACTIVE: "פעיל",
      SUSPENDED: "מושעה",
      BANNED: "חסום",
      TEMP_BANNED: "חסום זמנית",
      PERM_BANNED: "חסום לצמיתות",
      UNDER_REVIEW: "בבדיקה",
    },
    tiers: {
      FREE: "חינם",
      PLUS: "Plus",
      PREMIUM: "Premium",
    },
    roles: {
      CAPTAIN: "קפטן",
      PLAYER: "שחקן",
    },
    settings: {
      title: "הגדרות פרופיל בלוח הבקרה",
      billingNotLive: "כל חשבון נשאר ב-Free עד שתהיה קופה.",
      cancelReason: "אין מנוי בחיוב שאפשר לבטל. הקופה לא מיושמת.",
      cancelButton: "ביטול מנוי",
    },
    rankedReason: "השיבוץ המדורג חסום עד שיהיה שילוב אנטי-צ'יט מאומת.",
    rankedButton: "מצא משחק מדורג",
    roster: {
      title: "סגל 5v5",
      body: "קפטן אחד. ארבע הזמנות. קפטנים מזמינים מזהי חשבון A.C.E. אחרים, שנוצרים רק אחרי התחברות Steam מאומתת.",
    },
    pendingInvites: "הזמנות ממתינות",
  },
  forms: {
    requestFailed: "הבקשה נכשלה.",
    createTeam: {
      acceptRequired: "כדי להמשיך, אשרו את תנאי השימוש, את הסכם הרישיון (EULA) של האנטי-צ'יט ואת מדיניות הפרטיות.",
      failed: "לא ניתן היה ליצור קבוצה.",
      nameLabel: "שם לקבוצת 5v5 חדשה",
      submitAria: "ייסוד קבוצת 5v5 חדשה",
      submit: "ייסוד קבוצה",
    },
    invite: {
      failed: "ההזמנה נכשלה.",
      label: "הזמנת שחקן חופשי באמצעות SteamID או מזהה חשבון A.C.E.",
      submitAria: "שליחת הזמנה לקבוצה",
      submit: "שליחת הזמנה",
    },
  },
  profile: {
    meta: {
      notFoundTitle: "פרופיל שחקן",
      title: "{name} · פרופיל A.C.E.",
      description: "תיק השחקן של A.C.E. סשנים של Plus ו-Premium פותחים גרפי מגמה של טלמטריה.",
    },
    kicker: "זהות השחקן",
    bannerPlaceholder: "באנר פרופיל · בקרוב",
    levelBadge: "רמה {level}",
    premiumBadge: "PREMIUM",
    rosterLevel: "רמת סגל {level}.",
    trend: {
      title: "מגמת ביצועי הדירוג התחרותי",
      note: "נקודות דירוג לאורך רשומות היסטוריית משחקים רצופות.",
    },
    combat: {
      title: "מטריצת נתוני קרב מפורטת",
      kills: "סך ההריגות",
      deaths: "סך המיתות",
      kd: "K/D מחושב",
      headshots: "סך ההדשוטים",
      headshotPct: "טווח אחוז הדשוטים",
      knifeKills: "הריגות סכין מיוחדות",
    },
    weapon: {
      title: "התמחות בנשק החתימה",
      note: "פלטפורמת הנשק הראשית המכוילת",
      accuracy: "דירוג דיוק",
      kills: "סך ההריגות בנשק",
    },
    gear: {
      title: "מפרט המחשב",
      cpu: "CPU",
      gpu: "GPU",
      monitor: "קצב רענון המסך (Hz)",
      mouse: "דגם העכבר",
      dpi: "הגדרת DPI פעילה",
    },
    networksTitle: "קישור לפרופיל Steam",
    back: "חזרה לסגל הקלאן",
  },
  networks: {
    note: "קישור שמוקלד כאן נשאר בדפדפן הזה ולא נשמר. A.C.E. לעולם לא מבקשת סיסמת Steam.",
    labels: {
      steam: "פרופיל Steam",
    },
    open: "פתיחת {label} >",
  },
  ratingTrend: {
    chartAria: "מגמת ביצועי הדירוג התחרותי",
    pointAria: "משחק {match}: דירוג {rating}",
    axisLabel: "מ{match}",
    idle: "רחפו מעל צומת כדי לבדוק רשומת דירוג.",
    readout: "משחק {match} · דירוג {rating}",
  },
  loginError: {
    meta: {
      title: "שגיאת התחברות",
    },
    title: "ההתחברות דרך Steam לא הושלמה",
    notConfigured: "Steam OpenID עדיין לא מוגדר בשרת הזה. A.C.E. לעולם לא מבקשת סיסמת Steam.",
    unavailable: "Steam לא ענה לבקשת האימות. נסו שוב בעוד רגע. A.C.E. לעולם לא מבקשת סיסמת Steam.",
    unverified: "לא ניתן היה לאמת בשרת את קריאת החזרה של OpenID. A.C.E. לעולם לא מבקשת סיסמת Steam.",
    returnHome: "חזרה לדף הבית",
  },
};
