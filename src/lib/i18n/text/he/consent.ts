import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E הוא אתר תחרויות עצמאי ל-Counter-Strike 2. הוא אינו קשור ל-Valve Corporation, אינו מורשה על ידה ואינו נתמך על ידה. Steam ו-Counter-Strike הם סימנים של בעליהם. קוד התחרות הוא טקסט מקורי של A.C.E עבור המשחק הזה.",
  acceptance: {
    label: "אני מאשר במפורש את תנאי השימוש, את הסכם הרישיון (EULA) של האנטי-צ'יט ואת מדיניות הפרטיות.",
    readBefore: "קראו את",
    termsLink: "התנאים",
    afterTerms: ",",
    rulesLink: "התקנון / EULA",
    afterRules: " ואת",
    privacyLink: "מדיניות הפרטיות",
    after: ".",
  },
  categories: {
    legend: "קטגוריות עוגיות",
    essential: "עוגיות חיוניות",
    required: "חובה / נעול",
    analytics: "מעקב אנליטיקה",
    marketing: "מעקב שיווקי",
    optional: "אופציונלי",
  },
  banner: {
    kicker: "הודעת האתר של A.C.E.",
    copy: {
      before:
        "אישור שומר את בחירות העוגיות של הדפדפן הזה. זו לא חתימה אלקטרונית, היא לא אוספת טלמטריה מהמכשיר, היא לא מפעילה לקוח אנטי-צ'יט, והיא לא פותחת תור תחרותי. קראו את",
      termsLink: "תנאי השימוש",
      afterTerms: ",",
      rulesLink: "התקנון",
      afterRules: " ואת",
      cookiePolicyLink: "מדיניות העוגיות",
      after: "לפני שממשיכים.",
    },
    acceptLabel: "אישור בחירות העוגיות. הפעולה לא פותחת תור ולא מפעילה לקוח אנטי-צ'יט.",
    accept: "אישור בחירות העוגיות >",
    rejectLabel: "דחיית עוגיות אנליטיקה ושיווק אופציונליות",
    reject: "דחיית האופציונליות",
  },
  settings: {
    openLabel: "פתיחת הגדרות העוגיות",
    open: "הגדרות עוגיות",
    title: "הגדרות עוגיות",
    body: "עוגיות סשן חיוניות נדרשות ל-Steam OpenID. דגלי אנליטיקה ושיווק אופציונליים נשמרים כאן בלבד. כרגע לא רצים באתר הזה סקריפטים של פרסום או אנליטיקה.",
    cookiePolicyLink: "מדיניות העוגיות",
    saveLabel: "שמירת העדפות העוגיות",
    save: "שמירה",
    closeLabel: "סגירת הגדרות העוגיות",
    close: "סגור",
  },
  subscriptionDisclosure:
    "מנויים פועלים דרך התשלום של Paddle כמנוי חודשי עד ביטול. אפשר לבטל בכל עת דרך 'ניהול המנוי'; החזרים לפי מדיניות ההחזרים (14 יום). כל עוד התשלומים לא הוגדרו, כפתור התשלום מציג 'בקרוב'.",
  planned: {
    fallbackLabel: "פעולה מתוכננת",
    badge: "מתוכנן — לא זמין",
  },
};
