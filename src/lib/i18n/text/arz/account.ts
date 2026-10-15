import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "منصة القيادة"
    },
    "kicker": "تمت المصادقة",
    "title": "منصة القيادة",
    "lede": "تم تسجيل الدخول عبر Steam OpenID. تُحفظ الجلسة في ملف تعريف ارتباط HttpOnly وليس في localStorage. يبقى البحث المصنف مغلقًا حتى يصبح نظام مكافحة الغش حقيقيًا.",
    "eliteBadge": "النخبة",
    "stats": {
      "accountStatus": "حالة الحساب",
      "subscription": "الاشتراك",
      "rank": "مرتبة A.C.E.",
      "ratingPoints": "نقاط التصنيف",
      "wins": "الانتصارات",
      "losses": "الهزائم",
      "accountId": "معرّف الحساب الداخلي"
    },
    "accountStatuses": {
      "ACTIVE": "نشط",
      "SUSPENDED": "معلّق",
      "BANNED": "محظور",
      "TEMP_BANNED": "محظور مؤقتًا",
      "PERM_BANNED": "محظور نهائيًا",
      "UNDER_REVIEW": "قيد المراجعة"
    },
    "tiers": {
      "FREE": "مجاني",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "القائد",
      "PLAYER": "لاعب"
    },
    "settings": {
      "title": "ملف إعدادات لوحة التحكم",
      "billingNotLive": "تُفتح الفوترة قريبًا. تبقى جميع الحسابات على الخطة المجانية حتى ذلك الحين.",
      "cancelReason": "لا يوجد اشتراك مدفوع لإلغائه. الدفع غير منفّذ.",
      "cancelButton": "إلغاء الاشتراك"
    },
    "rankedReason": "المطابقة المصنفة غير متاحة حتى يوجد تكامل موثّق لمكافحة الغش.",
    "rankedButton": "ابحث عن مباراة مصنفة",
    "roster": {
      "title": "تشكيلة 5v5",
      "body": "قائد واحد وأربع دعوات. يدعو القادة معرّفات حسابات A.C.E. أخرى، ولا تُنشأ هذه الحسابات إلا بعد تسجيل دخول موثّق عبر Steam."
    },
    "pendingInvites": "الدعوات المعلّقة"
  },
  "forms": {
    "requestFailed": "فشل الطلب.",
    "createTeam": {
      "acceptRequired": "وافق على شروط الخدمة واتفاقية ترخيص مكافحة الغش وسياسة الخصوصية للمتابعة.",
      "failed": "تعذّر إنشاء الفريق.",
      "nameLabel": "اسم فريق 5v5 الجديد",
      "submitAria": "أسّس فريق 5v5 جديدًا",
      "submit": "تأسيس فريق"
    },
    "invite": {
      "failed": "فشلت الدعوة.",
      "label": "ادعُ لاعبًا حرًا عبر SteamID أو معرّف حساب A.C.E.",
      "submitAria": "إرسال دعوة الفريق",
      "submit": "إرسال الدعوة"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "الملف الشخصي للاعب",
      "title": "{name} · ملف A.C.E.",
      "description": "ملف لاعب A.C.E. تتيح جلسات Plus وPremium رسومًا بيانية لاتجاهات القياس."
    },
    "kicker": "هوية اللاعب",
    "bannerPlaceholder": "لافتة الملف الشخصي · قريبًا",
    "levelBadge": "المستوى {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "مستوى التشكيلة {level}.",
    "trend": {
      "title": "اتجاه أداء التصنيف التنافسي",
      "note": "نقاط التصنيف عبر سجلات المباريات المتتالية."
    },
    "combat": {
      "title": "مصفوفة بيانات القتال المفصلة",
      "kills": "إجمالي القتل",
      "deaths": "إجمالي الموت",
      "kd": "نسبة القتل/الموت المحسوبة",
      "headshots": "إجمالي الطلقات في الرأس",
      "headshotPct": "نطاق نسبة الطلقات في الرأس",
      "knifeKills": "عمليات القتل الخاصة بالسكين"
    },
    "weapon": {
      "title": "التخصص في السلاح المميز",
      "note": "منصة السلاح الرئيسية المعايرة",
      "accuracy": "تقييم الدقة",
      "kills": "إجمالي القتل بالسلاح"
    },
    "gear": {
      "title": "مواصفات الحاسوب",
      "cpu": "المعالج",
      "gpu": "بطاقة الرسوميات",
      "monitor": "معدل تحديث الشاشة (Hz)",
      "mouse": "طراز الفأرة",
      "dpi": "إعداد DPI الحالي"
    },
    "networksTitle": "رابط ملف Steam",
    "back": "العودة إلى تشكيلة العشيرة"
  },
  "networks": {
    "note": "يبقى الرابط المكتوب هنا في هذا المتصفح ولا يُحفظ. لا تطلب A.C.E. كلمة مرور Steam أبدًا.",
    "labels": {
      "steam": "ملف Steam"
    },
    "open": "فتح {label} >"
  },
  "ratingTrend": {
    "chartAria": "اتجاه أداء التصنيف التنافسي",
    "pointAria": "المباراة {match}: تصنيف {rating}",
    "axisLabel": "M{match}",
    "idle": "مرّر فوق نقطة لعرض سجل التصنيف.",
    "readout": "المباراة {match} · تصنيف {rating}"
  },
  "loginError": {
    "meta": {
      "title": "خطأ في تسجيل الدخول"
    },
    "title": "لم يكتمل تسجيل الدخول عبر Steam",
    "notConfigured": "لم يُضبط Steam OpenID على هذا الخادم بعد. لا تطلب A.C.E. كلمة مرور Steam أبدًا.",
    "unavailable": "لم يستجب Steam لطلب التحقق. حاول مجددًا بعد قليل. لا تطلب A.C.E. كلمة مرور Steam أبدًا.",
    "unverified": "تعذّر التحقق من استجابة OpenID على الخادم. لا تطلب A.C.E. كلمة مرور Steam أبدًا.",
    "returnHome": "العودة إلى الرئيسية"
  }
};
