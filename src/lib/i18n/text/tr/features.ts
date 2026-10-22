import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Özellikler",
      "description": "A.C.E. Hile Karşıtı Çekirdek mimarisi, biyometrik Yüz Tarama bağlantısı ve on beceri kalibrasyon kademesinin belirtimi. Bu sistemler bu sitede aktif değildir."
    },
    "header": {
      "kicker": "ACE-FEATURES / KERNEL / FACE-SCAN / CALIBRATION",
      "title": "Platform özellik belirtimi",
      "lede": "Bu sayfa, planlanan üç A.C.E sisteminin teknik haritasıdır: Otonom Hile Karşıtı Çekirdek, biyometrik Yüz Tarama bağlantısı ve on kademeli beceri kalibrasyon sıralaması. Bu sayfada çalışan bir çekirdek, çalışan bir kamera ürünü veya çalışan bir dereceli sıra yoktur. Steam OpenID, 5v5 takımlar, eleme tablosu düzenleri ve Elo tarzı derece hesabı bu depoda mevcuttur. Özel CS2 sunucuları, ödemeler, ödüller ve indirilebilir bir bütünlük istemcisi yoktur."
    },
    "kernel": {
      "title": "Hile Karşıtı Çekirdek mimarisi",
      "paragraphs": [
        "Belirtilen Otonom Güvenli Kabuk, oyuncunun bilgisayarında Counter-Strike 2 ile birlikte çalışacak ve A.C.E tarafından yönetilen sunuculara imzalı bir ALLOW veya DENY durumu bildirecek, donanıma bağlı bir bütünlük istemcisidir. Çekirdek tasarımı hata durumunda kapanır: istemci eksik, durdurulmuş, güncel olmayan, sahte veya doğrulanmamışsa dereceli giriş reddedilir. Tarayıcı asla uygunluk kararı vermez. Bu nedenle bu sitedeki dereceli MAÇ BUL zaten kapalıdır.",
        "Planlanan çekirdek katmanları; doğrulanmış 64 bit SteamID'yi A.C.E hesabına bağlayan kullanıcı modu el sıkışmasını, donanım tanımlayıcısı (HWID) doğrulama yüzeyini, bilinen hile ailelerine yönelik imza izleme listesini ve paylaşılan bir sırla korunan sunucudan sunucuya uygunluk yolunu içerir. Belirtime göre bir hile imzası tespiti, reddedilen bir bütünlük kontrolü veya sahte bir cihaz tanımlayıcısı, hesap durumunu derhal BANNED veya PERM_BANNED olarak değiştirir ve bir ödeme ürünü mevcut olduğunda ön ödemeli abonelik süresinin iadesiz olarak tamamen kaybedilmesine yol açar. Bu siteyle böyle bir istemci gelmez. Yakında indirme kartları yalnızca tasarım önizlemesidir."
      ],
      "stats": [
        {
          "label": "ÇEKİRDEK DURUMU",
          "value": "Geliştiriliyor"
        },
        {
          "label": "DERECELİ SIRA",
          "value": "Hata durumunda kapalı"
        },
        {
          "label": "HWID DEPOSU",
          "value": "Bu sitede toplanmaz"
        }
      ]
    },
    "faceScan": {
      "title": "Biyometrik Yüz Tarama bağlantısı",
      "paragraphs": [
        "Yüz Tarama, bu sitedeki bir kamera ürünü değil, belirtilmiş gelecekteki bir kimlik bağlama katmanıdır. Planlanan tasarım, yalnızca açık rıza ve ayrı bir hukuki incelemeden sonra, canlılık kontrolünden geçmiş bir yüz şablonunu sunucuda doğrulanmış SteamID'ye sahip aynı A.C.E hesabına bağlar. Amaç, önceki bir kısıtlamadan kaçmak için hesap paylaşımını önlemektir. A.C.E bugün yüz görüntüleri, yüz vektörleri, e-posta adresleri veya donanım parmak izleri toplamaz. Mevcut gizlilik yaklaşımı Katı Gereklilik'tir: yalnızca doğrulanmış 64 bit SteamID ve herkese açık Steam görünen adı.",
        "Yüz Tarama bir gün uygulanırsa Steam OpenID'nin yerini almaz, davranışsal reklam satmak için kullanılmaz ve tek başına dereceli sıraları açmaz. Dereceli giriş yine doğrulanmış bir hile karşıtı yol gerektirir. Bu inceleme tamamlanana kadar lobideki her Yüz Tarama paneli bir tasarım önizlemesidir."
      ]
    },
    "calibration": {
      "title": "On beceri kalibrasyon kademesi",
      "intro": "Competitive Calibration, yayımlanmış A.C.E Rating Points kurallarını kullanır (sürüm {version}: adım {kFactor}, ölçek {scale}). Yeni hesaplar 3. rütbeden (Vanguard), FREE abonelik, ACTIVE durum ve {startingRating} rekabetçi puanla başlar. Lobideki kristal adları görsel takma adlardır. Ücretli kozmetikler asla puan, daha kolay rakipler, 128 tick sunucular veya sıra önceliği satın almaz. Satışta aktif bir 128 tick ürünü yoktur.",
      "table": {
        "level": "Seviye",
        "engineName": "Motor adı",
        "crystalAlias": "Kristal adı",
        "minRating": "Min. derece"
      },
      "divisions": {
        "before": "Lobideki I, II ve III ligleri örnek etiketlerdir. Yalnızca düzen ölçülerini değiştirirler. Lige göre canlı eşleştirme yoktur. 3D döner tabla için ",
        "middle": "; bağlayıcı rekabet metni için ",
        "after": " sayfasına bakın."
      }
    }
  },
  "loot": {
    "kicker": "Kozmetikler · yakında",
    "title": "A.C.E. GANİMET MİMARİSİ — SİLAH DÜŞÜŞLERİ",
    "lede": "Mağazayla birlikte gelecek özgün A.C.E kaplamaları. Kozmetikler rekabeti asla etkilemez.",
    "checkout": "Ödeme · Paddle"
  },
  "identityPreview": {
    "badge": "Önizleme — onaylanmadı",
    "cards": {
      "faceScan": {
        "title": "Canlı Yüz Tarama Doğrulandı",
        "copy": "Kimlik canlılık kontrolü planlanan bir sağlayıcı kontrolüdür. Bugün biyometrik veri toplanmaz."
      },
      "hardwareId": {
        "title": "Donanım Kimliği Bağlandı",
        "copy": "Cihaz bağlama planlanan bir bütünlük sinyalidir. Bugün donanım tanımlayıcısı toplanmaz."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Önizleme",
    "kicker": "Yakında",
    "returnHome": "Ana sayfaya dön",
    "pages": {
      "support": {
        "title": "Destek",
        "body": "Herkese açık destek masamız rekabetçi beta ile açılır."
      },
      "anti-cheat": {
        "title": "Hile Karşıtı Genel Bakış",
        "body": "A.C.E'nin çalışan bir hile karşıtı ürünü yoktur. Gerçek bir entegrasyon olana kadar dereceli eşleştirme kapalı kalır."
      },
      "download-client": {
        "title": "İstemciyi İndir",
        "body": "İndirilecek bir A.C.E masaüstü istemcisi yoktur. Yerel istemci mevcut web aşamasında yer almıyor."
      },
      "mobile-app": {
        "title": "Mobil Uygulama",
        "body": "A.C.E mobil uygulaması yol haritasında."
      },
      "news": {
        "title": "Haberler",
        "body": "A.C.E haber merkezi yakında açılıyor."
      },
      "about": {
        "title": "Hakkımızda",
        "body": "A.C.E, herkese açık önizleme aşamasındaki bağımsız bir Counter-Strike 2 rekabet sitesidir. Valve ile bağlantılı değildir."
      },
      "advertising": {
        "title": "Reklam",
        "body": "Ortaklık ve reklam başvuruları yakında açılıyor."
      },
      "developers": {
        "title": "Geliştiriciler",
        "body": "Henüz herkese açık bir geliştirici programı yok. Bu depodaki sunucu uygunluk API'leri dahili adaptörlerdir, iş ortağı SDK'sı değildir."
      },
      "press": {
        "title": "Basın",
        "body": "Basın kiti yakında."
      },
      "jobs": {
        "title": "Kariyer",
        "body": "Açık pozisyonlar burada listelenecek."
      },
      "terms": {
        "title": "Hizmet Koşulları",
        "body": "Geçerli Hizmet Koşulları /terms adresinde yayımlanmıştır. Turnuva kural kitabı /rules adresindedir."
      },
      "privacy": {
        "title": "Gizlilik Politikası",
        "body": "Gizlilik Politikası /privacy adresinde yayımlanmıştır. Tek oturum açma yolu Steam OpenID'dir; Steam şifreleri asla toplanmaz."
      },
      "eula": {
        "title": "Hile Karşıtı EULA",
        "body": "Hile karşıtı sistem aktif olmadığı için Hile Karşıtı EULA yoktur. Dereceli kapalı kalır."
      }
    }
  }
};
