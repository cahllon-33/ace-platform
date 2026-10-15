import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "प्रमाणित",
    "title": "Command Deck",
    "lede": "Steam OpenID के ज़रिए साइन इन किया गया। सेशन HttpOnly कुकी में रहता है, localStorage में नहीं। एंटी-चीट वास्तविक होने तक रैंक्ड खोज बंद रहती है।",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "खाता स्थिति",
      "subscription": "सदस्यता",
      "rank": "A.C.E. रैंक",
      "ratingPoints": "रेटिंग अंक",
      "wins": "जीत",
      "losses": "हार",
      "accountId": "आंतरिक खाता ID"
    },
    "accountStatuses": {
      "ACTIVE": "सक्रिय",
      "SUSPENDED": "निलंबित",
      "BANNED": "प्रतिबंधित",
      "TEMP_BANNED": "अस्थायी रूप से प्रतिबंधित",
      "PERM_BANNED": "स्थायी रूप से प्रतिबंधित",
      "UNDER_REVIEW": "समीक्षाधीन"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "कप्तान",
      "PLAYER": "खिलाड़ी"
    },
    "settings": {
      "title": "डैशबोर्ड सेटिंग्स प्रोफ़ाइल",
      "billingNotLive": "चेकआउट मौजूद होने तक हर खाता Free पर है।",
      "cancelReason": "रद्द करने के लिए कोई बिल की गई सदस्यता नहीं है। चेकआउट लागू नहीं है।",
      "cancelButton": "सदस्यता रद्द करें"
    },
    "rankedReason": "सत्यापित एंटी-चीट एकीकरण होने तक रैंक्ड मैचमेकिंग अस्वीकृत है।",
    "rankedButton": "रैंक्ड मैच खोजें",
    "roster": {
      "title": "5v5 रोस्टर",
      "body": "एक कप्तान। चार निमंत्रण। कप्तान अन्य A.C.E. खाता ID को आमंत्रित करते हैं, जो केवल सत्यापित Steam लॉगिन के बाद बनती हैं।"
    },
    "pendingInvites": "लंबित निमंत्रण"
  },
  "forms": {
    "requestFailed": "अनुरोध विफल।",
    "createTeam": {
      "acceptRequired": "जारी रखने के लिए सेवा की शर्तें, Anti-Cheat EULA और गोपनीयता नीति स्वीकार करें।",
      "failed": "टीम नहीं बनाई जा सकी।",
      "nameLabel": "नई 5v5 टीम का नाम",
      "submitAria": "नई 5v5 टीम स्थापित करें",
      "submit": "टीम स्थापित करें"
    },
    "invite": {
      "failed": "निमंत्रण विफल।",
      "label": "SteamID या A.C.E. खाता ID से फ़्री एजेंट आमंत्रित करें",
      "submitAria": "टीम निमंत्रण भेजें",
      "submit": "निमंत्रण भेजें"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "खिलाड़ी प्रोफ़ाइल",
      "title": "{name} · A.C.E. प्रोफ़ाइल",
      "description": "A.C.E. खिलाड़ी फ़ाइल। Plus और Premium सेशन टेलीमेट्री ट्रेंड ग्राफ़ अनलॉक करते हैं।"
    },
    "kicker": "खिलाड़ी पहचान",
    "bannerPlaceholder": "प्रोफ़ाइल बैनर · जल्द आ रहा है",
    "levelBadge": "स्तर {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "रोस्टर स्तर {level}।",
    "trend": {
      "title": "प्रतिस्पर्धी रेटिंग प्रदर्शन रुझान",
      "note": "लगातार मैच-इतिहास लॉग में रेटिंग अंक।"
    },
    "combat": {
      "title": "विस्तृत युद्ध डेटा मैट्रिक्स",
      "kills": "कुल किल",
      "deaths": "कुल मौतें",
      "kd": "गणना किया गया K/D",
      "headshots": "कुल हेडशॉट",
      "headshotPct": "हेडशॉट % सीमा",
      "knifeKills": "विशेष चाकू किल"
    },
    "weapon": {
      "title": "सिग्नेचर हथियार विशेषज्ञता",
      "note": "प्राथमिक कैलिब्रेटेड हथियार प्लेटफ़ॉर्म",
      "accuracy": "सटीकता रेटिंग",
      "kills": "कुल हथियार किल"
    },
    "gear": {
      "title": "डेस्कटॉप विनिर्देश",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "मॉनिटर रिफ़्रेश रेट (Hz)",
      "mouse": "माउस मॉडल",
      "dpi": "सक्रिय DPI सेटअप"
    },
    "networksTitle": "Steam प्रोफ़ाइल लिंक",
    "back": "क्लैन रोस्टर पर लौटें"
  },
  "networks": {
    "note": "यहाँ लिखा लिंक इसी ब्राउज़र में रहता है और सहेजा नहीं जाता। A.C.E. कभी Steam पासवर्ड नहीं माँगता।",
    "labels": {
      "steam": "Steam प्रोफ़ाइल"
    },
    "open": "{label} खोलें >"
  },
  "ratingTrend": {
    "chartAria": "प्रतिस्पर्धी रेटिंग प्रदर्शन रुझान",
    "pointAria": "मैच {match}: {rating} रेटिंग",
    "axisLabel": "M{match}",
    "idle": "रेटिंग लॉग देखने के लिए नोड पर होवर करें।",
    "readout": "मैच {match} · {rating} रेटिंग"
  },
  "loginError": {
    "meta": {
      "title": "साइन-इन त्रुटि"
    },
    "title": "Steam साइन-इन पूरा नहीं हुआ",
    "notConfigured": "इस सर्वर पर Steam OpenID अभी कॉन्फ़िगर नहीं है। A.C.E. कभी Steam पासवर्ड नहीं माँगता।",
    "unavailable": "Steam ने सत्यापन अनुरोध का उत्तर नहीं दिया। थोड़ी देर में फिर कोशिश करें। A.C.E. कभी Steam पासवर्ड नहीं माँगता।",
    "unverified": "सर्वर पर OpenID कॉलबैक सत्यापित नहीं हो सका। A.C.E. कभी Steam पासवर्ड नहीं माँगता।",
    "returnHome": "होम पर लौटें"
  }
};
