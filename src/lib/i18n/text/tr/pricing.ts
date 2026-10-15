import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "Fiyatlandırma",
    "description": "A.C.E. üyeliği: Free {free}, Plus aylık {plus}, Premium aylık {premium}. Sabit tam sayı fiyatlar."
  },
  "period": {
    "monthly": "/ay"
  },
  "hero": {
    "badge": "Üyelik",
    "title": "Erişim katmanları",
    "lede": "Free {free}. Plus aylık {plus}. Premium aylık {premium}. Bu tutarlar sabit tam sayılardır. Ücretli planlar asla derece veya daha kolay rakip satın almaz."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafit",
      "title": "Açık erişim",
      "points": [
        "Steam OpenID ile oturum açın. A.C.E. asla Steam şifresi istemez.",
        "Kayıtlı derece 1.000'den başlar. Hiçbir maç sonucu onu değiştirmedi.",
        "Tüm herkese açık sayfalar: oyna, turnuvalar, sıralama, takımlar ve kurallar."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Teşekkür mektubu ve destek",
      "points": [
        "Free'deki her şey.",
        "Çok yakında: teşekkür mektubu (neyin dahil olduğu, neyin olmadığı ve support@ace-platform.gg) yalnızca ödeme sistemi olduğunda açılır. Düğme bugün devre dışıdır.",
        "Derece veya daha kolay rakip satın almaz. Altın profil rozetleri her oyuncu için kayıtlı maç verilerinden gelir. Elit mühür ve özel rozetler yalnızca kayıtlı kademe zaten Premium olduğunda görünür."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Teşekkür mektubu ve beş kişilik tim",
      "points": [
        "Free'deki her şey.",
        "Çok yakında: teşekkür mektubu (neyin dahil olduğu, neyin olmadığı ve support@ace-platform.gg) yalnızca ödeme sistemi olduğunda açılır. Düğme bugün devre dışıdır.",
        "Çok yakında: ödemeden sonra mektup Squads'a yönlendirir; orada Steam ile oturum açmış bir kaptan beş oyunculu bir klan kaydedebilir.",
        "Ödül, silah, canlı sıra veya oyun sunucusu yok. Kayıtlı bir klan, 100 takımlık tablodaki bir koltuk değildir."
      ]
    }
  },
  "card": {
    "elite": "ELİT",
    "stayFree": "Free'de kal",
    "freeNote": "Şimdi açık",
    "choose": "{plan} seç",
    "chooseAria": "{plan} planını aylık {price} ile seç"
  },
  "billing": {
    "kicker": "ÖDEME ZAMAN ÇİZELGESİ",
    "title": "Ödeme devreye girdiğinde nasıl işleyecek",
    "body": "Plus aylık tam {plus}. Premium aylık tam {premium}.",
    "display": {
      "label": "01 · GÖSTERİM",
      "body": "Free {free}. Plus aylık {plus}. Premium aylık {premium}. Ücretli kademeler asla derece veya daha kolay rakip satın almaz."
    },
    "rolling": {
      "label": "02 · AYLIK DÖNGÜ",
      "body": "Ödeme devreye girdiğinde ücretler aylık döngüyle yenilenir. Kısmen kullanılan ay iade edilmez. İptal bir sonraki döngüyü durdurur ve mevcut ön ödemeli dönemi silmez."
    },
    "today": {
      "label": "03 · BUGÜN"
    }
  },
  "compare": {
    "kicker": "A.C.E.'nin bugün vaat edebildikleri",
    "title": "Üyelik karşılaştırması",
    "note": "Her satır sitenin bugünkü durumunu yansıtır. Ödeme yakında geliyor ve ücretli bir plan asla sıra açmaz veya avantaj satın almaz.",
    "caption": "Free, Plus ve Premium'un sitenin bugün yaptıklarına göre karşılaştırması",
    "includedToday": "Bugün dahil",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Herkese açık site",
        "detail": "Ana sayfa, oyna, turnuvalar, sıralama, takımlar, kurallar ve koşullar."
      },
      "steamSignIn": {
        "feature": "Steam ile oturum açma",
        "detail": "Resmi Steam OpenID. A.C.E. asla Steam şifresi istemez."
      },
      "startingRating": {
        "feature": "Başlangıç derecesi",
        "detail": "Herhangi bir maç kaydedilmeden önce yeni hesapta saklanan sayı."
      },
      "recordedMatches": {
        "feature": "Kaydedilen maçlar",
        "detail": "Tamamlanmış bir A.C.E. maçından yazılan galibiyet ve mağlubiyetler."
      },
      "rankedQueue": {
        "feature": "Dereceli sıra",
        "detail": "Gerçek bir sıra oluşana kadar MAÇ BUL kapalı kalır."
      },
      "cs2Servers": {
        "feature": "CS2 sunucuları",
        "detail": "Bu site sunucu adresi veya bağlantı linki göndermez."
      },
      "antiCheatClient": {
        "feature": "Hile karşıtı istemci",
        "detail": "Bu siteden hiçbir şey indirilmez."
      },
      "charge": {
        "feature": "Ücret",
        "detail": "Plus veya Premium seçmek kart gerektirmez."
      },
      "ratingForSale": {
        "feature": "Satılık derece",
        "detail": "Ücretli bir etiket asla derece veya daha kolay rakip satın almaz."
      },
      "prizeOrWeapon": {
        "feature": "Ödül veya silah",
        "detail": "Hiçbir kaplama, bıçak veya ödül havuzu teslim edilmez."
      },
      "goldEliteSeal": {
        "feature": "Elit mühür ve özel rozetler",
        "detail": "Yalnızca Premium; sunucudaki kayıtlı kademeden okunur. Kozmetik. Ödeme bu kademeyi belirlemez."
      }
    },
    "cells": {
      "open": "Açık",
      "yes": "Evet",
      "noneYet": "Henüz yok",
      "closed": "Kapalı",
      "notConnected": "Yakında",
      "notShipped": "Yayınlanmadı",
      "noCharge": "Ücret yok",
      "notForSale": "Satılık değil",
      "none": "Yok",
      "no": "Hayır",
      "storedTierOnly": "Yalnızca kayıtlı kademe"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus makbuzu",
      "metaDescription": "Bu sitede gösterilen A.C.E. Plus mektubu. Ödeme aktif değil, bu yüzden ücret alınmaz ve e-posta gönderilmez.",
      "planName": "A.C.E. Plus",
      "nextLabel": "A.C.E.'de devam et",
      "nextBody": "Herkese açık sayfalar açık kalır. Bu seçim bir sıra açmaz ve kayıtlı kademeyi değiştirmez."
    },
    "premium": {
      "metaTitle": "Premium makbuzu",
      "metaDescription": "Bu sitede gösterilen A.C.E. Premium mektubu. Ödeme aktif değil, bu yüzden ücret alınmaz ve e-posta gönderilmez.",
      "planName": "A.C.E. Premium",
      "nextLabel": "Timler'e devam et",
      "nextBody": "Timler'e devam edin. Sayfa beş kişilik bir takım olup olmadığınızı soracak. 1. koltuk oturum açmış Steam hesabıdır. 2-5. koltuklar diğer oyunculardır. Bir klan kaydetmek de bu ücreti tahsil etmez."
    }
  },
  "letter": {
    "kicker": "{plan} · aylık {price}",
    "title": "Seçiminiz için teşekkürler",
    "flag": "Bu mektup sitede gösterilir. E-posta gönderilmedi. Karttan ücret alınmadı. Ödeme aktif değil ve kayıtlı üyelik kademesi değiştirilmedi.",
    "greeting": "Sevgili oyuncu,",
    "intro": "{plan} planını seçtiğiniz için teşekkürler. Bu sayfa makbuzdur. Gösterim fiyatını, bu seçimin bugün neleri kapsadığını, neleri kapsamadığını ve bu sitede yayımlanan destek adresini kaydeder.",
    "selected": {
      "title": "Seçilenler",
      "items": [
        "Plan adı: {plan}.",
        "Gösterim fiyatı: aylık {price}. Bu tutar bir etikettir, ücret değildir.",
        "Ödeme: yok. Bu planı seçmek kart gerektirmez.",
        "E-posta: yok. A.C.E. bu mektubu bir gelen kutusuna göndermez.",
        "Kayıtlı kademe: değişmedi. Özel rozetler ve elit mühür yalnızca hesapta zaten Premium kayıtlıysa görünür.",
        "Derece: satılık değil. Yeni bir hesap yine 1.000'den başlar."
      ]
    },
    "today": {
      "title": "Bugün kullanabilecekleriniz",
      "items": [
        "Herkese açık site: ana sayfa, oyna, turnuvalar, sıralama, takımlar, kurallar ve koşullar.",
        "Resmi Steam OpenID ile Steam oturumu. A.C.E. asla Steam şifresi istemez.",
        "Free ile aynı herkese açık sayfalar. Bu fiyat ayrı bir sıra açmaz."
      ]
    },
    "excluded": {
      "title": "Bu seçimin kapsamadıkları",
      "items": [
        "Canlı bir dereceli sıra. MAÇ BUL kapalı kalır.",
        "Bir Counter-Strike 2 sunucusu, sunucu adresi veya bağlantı linki.",
        "Hile karşıtı indirme. A.C.E Shield geliştiriliyor.",
        "Ödül, kaplama, bıçak veya ödül havuzu.",
        "100 takımlık tabloda bir koltuk. Bir sezon açılana kadar tablo 0 kayıtlı gösterir.",
        "Daha kolay rakipler, satın alınmış derece veya Free'den farklı bir herkese açık site."
      ]
    },
    "trouble": {
      "title": "Bir şey çalışmazsa",
      "items": [
        "Ücret veya ücretli kademe bekliyordunuz. Hiçbiri uygulanmadı. Hesap olduğu gibi kalır.",
        "Bu mektubu gelen kutunuzda bekliyordunuz. Yalnızca bu sayfada bulunur.",
        "Steam bağlanmadı. Profili Bağla'yı kullanın ve önce koşullar onay kutusunu işaretleyin. A.C.E.'ye asla Steam şifresi yazmayın.",
        "Yardıma ihtiyacınız var. Aşağıdaki destek adresini kullanın veya bu sitedeki yardım sayfalarını açın."
      ]
    },
    "support": {
      "title": "Destek",
      "addressBefore": "Bu sitede yayımlanan destek adresi ",
      "addressAfter": ".",
      "helpBefore": "Sitede yardım: ",
      "supportLink": "Destek",
      "helpAnd": " ve ",
      "contactLink": "İletişim",
      "rulesBefore": ". Kurallar şuradadır: ",
      "rulesLink": "Kurallar",
      "rulesAnd": " ve ",
      "termsLink": "Koşullar",
      "helpAfter": ". Destek sayfasındaki bir istem destek talebi açmaz ve İletişim'e yazılan metin iletilmez."
    },
    "next": {
      "title": "Sonraki adım"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM TELEMETRİSİ",
    "copy": "PANEL TELEMETRİSİ KİLİTLİ — Dinamik gerçek zamanlı istatistik eğrilerinin ve silah uzmanlık endekslerinin kilidini açmak için aboneliğinizi A.C.E. Plus veya Premium'a yükseltin.",
    "cta": "Fiyat tablolarını aç"
  }
};
