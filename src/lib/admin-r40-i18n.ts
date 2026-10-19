/** R40 admin strings (admin is English/Hebrew only). */
export const ADMIN40_EN = {
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
  prev: "Previous", next: "Next", page: "Page {page} of {pages}", loading: "Loading…",
};
export const ADMIN40_HE: Record<keyof typeof ADMIN40_EN, string> = {
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
  prev: "הקודם", next: "הבא", page: "עמוד {page} מתוך {pages}", loading: "טוען…",
};
export type Admin40Key = keyof typeof ADMIN40_EN;
