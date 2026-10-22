/** R40 admin strings (admin is English/Hebrew only). */
export const ADMIN40_EN = {
  srMenu: "Set Rank & RP", srTitle: "Set Rank & RP", srLede: "Pick a tier, division or prestige badge, or type an exact RP. Saved as an audited rank override; reset to calculated restores the engine value.", srPick: "Ranks", srPrestige: "Prestige badges", srRp: "RP ({min}–{max})", srResult: "Result", srNoPrestige: "No prestige badge", srFreeNote: "Free plan: shows the A.C.E Legend badge with a text milestone.", srSave: "Save", srSaving: "Saving…", srInvalid: "Enter a whole number from {min} to {max}.", srFrom: "from {rp} RP", srFinish: "Finish preview", srPlus: "Plus · platinum", srPremium: "Premium · gold fire", srFinishHint: "Preview only: the finish toggle does not change the player's plan. Use the Subscription dropdown for that.",
  opsTitle: "Operator tools", overrideTitle: "Rank override", overrideLede: "Writes the player's RP, so the new rank shows everywhere on the site.",
  modeDivision: "Tier & division", modeRp: "Exact RP", tier: "Tier", division: "Division", rp: "RP", art: "Badge art",
  artKeep: "Keep current", artAuto: "Automatic (by plan)", artStandard: "Standard", artPremium: "Premium (Premium plan only)",
  reason: "Reason (optional)", apply: "Apply override", reset: "Reset to calculated", active: "Override active · calculated value {base}",
  none: "No override · rank calculated from recorded results", confirmTitle: "Confirm rank change", confirmBody: "{name}: {from} → {to}",
  confirmReset: "{name}: back to calculated {to}", confirm: "Confirm", cancel: "Cancel", done: "Saved", failed: "Not saved: {error}",
  note: "Private note", noteHint: "Only visible to operators.", saveNote: "Save note", banReason: "Ban / unban reason (optional)",
  ban: "Ban", unban: "Unban", audit: "Audit log", auditEmpty: "No operator actions recorded yet.", auditLede: "Every operator change: who, when, old value, new value and reason.",
  colWhen: "When", colWho: "Who", colAction: "Action", colTarget: "Player", colChange: "Change", colReason: "Reason",
  exportCsv: "Export CSV", all: "All", banned: "Banned", overridden: "Overridden", sort: "Sort", sortRp: "RP (high → low)", sortName: "Name (A → Z)", sortNew: "Newest first",
  verifyTitle: "Verification", verifyOn: "Verified · Steam linked, good standing, operator reviewed", verifyOff: "Not verified", verifyIneligible: "Needs a linked Steam account and ACTIVE status first", grant: "Grant verification", revoke: "Revoke verification",
  playerReports: "Player reports", playerReportsLede: "Reports sent through /report. Oldest open report first; every outcome is audited.", reportsEmpty: "No open player reports.", actioned: "Mark actioned", dismiss: "Dismiss", reportFrom: "From {name}", navPlayerReports: "Player reports",
  prev: "Previous", next: "Next", page: "Page {page} of {pages}", loading: "Loading…",
};
export const ADMIN40_HE: Record<keyof typeof ADMIN40_EN, string> = {
  srMenu: "קביעת דרגה ו-RP", srTitle: "קביעת דרגה ו-RP", srLede: "בחר דרגה, חלוקה או תג יוקרה, או הקלד RP מדויק. נשמר כעקיפת דרגה מתועדת; 'איפוס לחישוב' מחזיר את ערך המנוע.", srPick: "דרגות", srPrestige: "תגי יוקרה", srRp: "RP ({min}–{max})", srResult: "תוצאה", srNoPrestige: "אין תג יוקרה", srFreeNote: "מסלול חינמי: מוצג תג A.C.E Legend עם ציון אבן דרך בטקסט.", srSave: "שמירה", srSaving: "שומר…", srInvalid: "הזן מספר שלם בין {min} ל-{max}.", srFrom: "מ-{rp} RP", srFinish: "תצוגת גימור", srPlus: "Plus · פלטינה", srPremium: "Premium · אש זהב", srFinishHint: "תצוגה מקדימה בלבד: מתג הגימור לא משנה את מסלול השחקן. לשם כך השתמשו בתפריט המנוי.",
  opsTitle: "כלי מפעיל", overrideTitle: "דריסת דרגה", overrideLede: "כותב את ה-RP של השחקן, כך שהדרגה החדשה מוצגת בכל האתר.",
  modeDivision: "דרגה ודיוויזיה", modeRp: "RP מדויק", tier: "דרגה", division: "דיוויזיה", rp: "RP", art: "עיצוב תג",
  artKeep: "ללא שינוי", artAuto: "אוטומטי (לפי מסלול)", artStandard: "רגיל", artPremium: "פרימיום (למסלול Premium בלבד)",
  reason: "סיבה (אופציונלי)", apply: "החלת דריסה", reset: "איפוס לערך המחושב", active: "דריסה פעילה · הערך המחושב {base}",
  none: "אין דריסה · הדרגה מחושבת מתוצאות מתועדות", confirmTitle: "אישור שינוי דרגה", confirmBody: "{name}: {from} ← {to}",
  confirmReset: "{name}: חזרה לערך המחושב {to}", confirm: "אישור", cancel: "ביטול", done: "נשמר", failed: "לא נשמר: {error}",
  note: "הערה פרטית", noteHint: "גלויה למפעילים בלבד.", saveNote: "שמירת הערה", banReason: "סיבת חסימה / שחרור (אופציונלי)",
  ban: "חסימה", unban: "שחרור חסימה", audit: "יומן ביקורת", auditEmpty: "עדיין לא תועדו פעולות מפעיל.", auditLede: "כל שינוי של מפעיל: מי, מתי, ערך ישן, ערך חדש וסיבה.",
  colWhen: "מתי", colWho: "מי", colAction: "פעולה", colTarget: "שחקן", colChange: "שינוי", colReason: "סיבה",
  exportCsv: "ייצוא CSV", all: "הכול", banned: "חסומים", overridden: "עם דריסה", sort: "מיון", sortRp: "RP (גבוה ← נמוך)", sortName: "שם (א ← ת)", sortNew: "החדשים קודם",
  verifyTitle: "אימות", verifyOn: "מאומת · Steam מחובר, חשבון תקין, נבדק על ידי מפעיל", verifyOff: "לא מאומת", verifyIneligible: "נדרשים חשבון Steam מחובר וסטטוס ACTIVE", grant: "הענקת אימות", revoke: "ביטול אימות",
  playerReports: "דיווחי שחקנים", playerReportsLede: "דיווחים שנשלחו דרך ‎/report. הדיווח הפתוח הישן ביותר ראשון; כל החלטה נרשמת ביומן.", reportsEmpty: "אין דיווחי שחקנים פתוחים.", actioned: "סימון כטופל", dismiss: "דחייה", reportFrom: "מאת {name}", navPlayerReports: "דיווחי שחקנים",
  prev: "הקודם", next: "הבא", page: "עמוד {page} מתוך {pages}", loading: "טוען…",
};
export type Admin40Key = keyof typeof ADMIN40_EN;
