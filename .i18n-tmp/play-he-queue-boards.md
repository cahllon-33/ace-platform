# Hebrew queue-board copy removed from `src/lib/queue-boards.ts`

This was the existing Hebrew translation of `play.boards` (keys match `src/lib/i18n/text/en/play.ts`).
Reuse it when building `src/lib/i18n/text/he/play.ts`. `{points}` replaces the hardcoded 250 / 200.

```ts
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
        "משתמש בכלל הדירוג של A.C.E., בלי חיפוש חי",
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
```
