import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "VİTRİN · Örnek oyuncular, canlı maç değil. Sıra kapalı.",
    "showcaseShort": "VİTRİN",
    "queueClosed": "SIRA KAPALI",
    "floorRp": "Rütbe tabanı {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "{name} avatarı",
    "sampleChat": "Örnek satırlar. Gönderilmedi, canlı değil.",
    "sampleLine": "ÖRNEK",
    "operatorA": "A Takımı için orijinal A.C.E operatör çizimi: kasklı taktik operatör, altın detaylı antrasit teçhizat",
    "operatorB": "B Takımı için orijinal A.C.E operatör çizimi: kapüşonlu asi savaşçı, altın detaylı antrasit teçhizat",
    "artNote": "Orijinal A.C.E karakter çizimi. Bunlar oyun modelleri değildir."
  },
  "meta": {
    "title": "Oyna",
    "description": "Dereceli 5v5 eşleştirme, A.C.E Shield hile karşıtı sistemi devreye girdiğinde açılır."
  },
  "boards": {
    "label": "Sıra panoları",
    "title": "Üç 5v5 panosu",
    "note": "Seçim bu sayfada kalır. Dereceli arama kapalıdır ve bir pano seçmek rakip aramaz.",
    "items": {
      "open": {
        "name": "Açık Pano",
        "rules": [
          "Beş kişiye kadar her boyutta grup",
          "Derece aralığı yok",
          "Kimlik kontrolü Steam OpenID ile yapılır",
          "Bir sıra oluştuğunda açık antrenman için yazıldı"
        ]
      },
      "calibration": {
        "name": "Kalibrasyon Panosu",
        "rules": [
          "Solo, ikili veya üçlü",
          "{points} derece puanlık planlanan aralık",
          "Bir Steam profili önceden kaydedilmiş olmalı",
          "A.C.E. derece kuralını kullanır · arama yakında"
        ]
      },
      "elite": {
        "name": "Elit Pano",
        "rules": [
          "Solo veya ikili",
          "{points} derece puanlık planlanan aralık",
          "Kayıtlı üyelik Plus veya Premium olmalı",
          "Daha sıkı katılım koşulları. Ödül havuzu yok"
        ]
      }
    }
  },
  "veto": {
    "kicker": "HARİTA VETOSU",
    "title": "Haritayı seç",
    "lede": "Tek harita kalana kadar haritaları reddedin. Bu lobi Counter-Strike 2'yi başlatmaz ve sunucu açmaz.",
    "mapSelected": "Seçilen harita: {map}",
    "yourBan": "Sizin yasağınız",
    "opponentBan": "Rakibin yasağı",
    "selected": "Seçildi",
    "declined": "Reddedildi",
    "decline": "Reddet",
    "reset": "Vetoyu sıfırla",
    "declinedToast": "{map} reddedildi. Bu sayfa sunucu açmaz.",
    "lockKicker": "5v5 MAÇ ODASI",
    "lockTitle": "Kalan harita {map}",
    "lockBody": "Maç odanız. Rekabetçi beta açıldığında rekabetçi maçlar burada başlar.",
    "close": "Kapat"
  },
  "arena": {
    "ariaLabel": "Maç odası önizlemesi",
    "captain": "Kaptan",
    "ping": "Ping {ping}",
    "mapPlates": "Harita görselleri",
    "selectMap": "{map} seç",
    "settings": {
      "region": "Bölge",
      "mode": "Mod",
      "antiCheat": "Hile Karşıtı",
      "simulator": "Önizleme"
    },
    "chat": {
      "title": "TAKIM SOHBETİ",
      "kicker": "TAKIM SOHBETİ · YAKINDA",
      "captainName": "{name} (Kaptan)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "hadi bakalım",
        "dust 2 bize uyar",
        "hazır"
      ],
      "inputLabel": "Takım sohbeti mesajı",
      "placeholder": "Takıma yaz…",
      "send": "Gönder"
    },
    "tiles": {
      "map": "Harita",
      "server": "Sunucu",
      "serverValue": "Batı Avrupa · yakında",
      "mode": "Mod"
    },
    "identity": {
      "title": "KİMLİK DOĞRULAMA",
      "kicker": "KİMLİK KONTROLLERİ · YAKINDA",
      "rows": [
        "E-posta doğrulama · yakında",
        "Telefon doğrulama · yakında",
        "Yüz kontrolü · yakında"
      ]
    },
    "security": {
      "title": "MAÇ GÜVENLİĞİ",
      "kicker": "A.C.E SHIELD · GELİŞTİRİLİYOR",
      "rows": [
        "Hile karşıtı koruma · geliştiriliyor",
        "Sunucu bütünlük kontrolü · geliştiriliyor",
        "Maç verisi şifreleme · geliştiriliyor"
      ]
    },
    "findMatchReason": "Eşleştirme rekabetçi beta ile açılır. Dereceli sıralar henüz çalışmıyor."
  },
};
