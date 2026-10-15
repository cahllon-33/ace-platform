import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "דרגות תחרותיות",
    description:
      "עשר הדרגות של A.C.E., מ-Iron Recruit ועד A.C.E. Legend, עם חטיבות ורצפות דירוג.",
  },
  hero: {
    kicker: "כיול",
    title: "דרגות תחרותיות",
    lede: "עשר דרגות מ-Recruit ועד A.C.E. Legend, לכל אחת חטיבות {divisions}. גררו או השתמשו במקשי החצים כדי לסובב סמל. כשאתם מחוברים מוצג הדירוג שלכם; אחרת רצפת כל דרגה.",
  },
  codexLink: "פתיחת קודקס הכיול",
  document: {
    title: "מסמך הכיול בעשר דרגות",
    body: "שמות המנוע הם הסולם הרשמי. כינויי הקריסטל הם עיצוב לובי. נתוני אחוז הניצחונות בלוח הם נתוני תצוגה עד להשקת המשחקים המדורגים. פריטים קוסמטיים בתשלום לעולם אינם מעבירים שחקן בין הדרגות.",
    level: "רמה {level} · {crystal}",
    detail: "דירוג מינימלי {rating}. חקר חומר: {material}.",
  },
  tiers: {
    1: { tagline: "כיול כניסה", material: "טקסטורת לוח של ברזל גולמי / אובסידיאן" },
    2: { tagline: "לוחם שטח", material: "ליבת קריסטל של ברונזה מוברשת" },
    3: { tagline: "קו החזית", material: "רסיסי זהב ורוד עם גוונים עמוקים של אדום כהה" },
    4: { tagline: "מלאכת דיוק", material: "גוש רסיסי יהלום בכסף כרום" },
    5: { tagline: "ליבה מנוסה", material: "הילת ליבה מותכת של פליז מיושן" },
    6: { tagline: "תקן הזהב", material: "התלקחות קריסטל של רסיסי זהב עז" },
    7: { tagline: "עלייה בציאן", material: "מטריצת קריסטל פלזמה בכחול ציאן" },
    8: { tagline: "סערת ספיר", material: "ליבת קריסטל ברק בכחול ספיר זוהר במיוחד" },
    9: { tagline: "כתר הריק", material: "ליבת רסיסי כוכבים בסגול חלל קוסמי עמוק" },
    10: { tagline: "העילית של העילית", material: "מסגרת כתר יוקרתית של זהב מותך וקורן" },
  },
  board: {
    selectEmblem: "בחירת סמל הדרגה {name} של A.C.E., רמה {level}",
    emblemAlt: "תג פרופיל של A.C.E. — סמל קריסטלי תלת־ממדי מותאם, רמה {level}, {crystal}, {name}",
    emblemAltLegend: "תג פרופיל של A.C.E. — סמל קריסטלי תלת־ממדי מותאם, רמה {level}",
    premium: "הדרגה העליונה",
  },
  division: {
    label: "חטיבה {division}",
    select: "בחירת חטיבה {division}",
    summary: "{divisions} חטיבות בכל דרגה / {levels} רמות בסך הכול",
  },
  card: {
    rank: "דרגה {level}",
    targetWinRate: "יעד אחוז ניצחונות {winRate}",
    calibrationTarget: "יעד כיול",
    floor: "רצפה",
    samplesNote: "יעדים לכל דרגה.",
    progressMockup: "התקדמות",
  },
  turntable: {
    stageLabel: "סמל {name} במסלול. גררו כדי לסובב.",
    dragToRotate: "גררו כדי לסובב",
    rankSystem: "מערכת דרגות",
  },
  emblem: {
    kicker: "סימן כיול",
    rankLabel: "דרגה {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} סימני מיקום מולאו מניצחונות והפסדים שמורים. הצמתים האלה לא מתחילים משחק.",
  },
};
