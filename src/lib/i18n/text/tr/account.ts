import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "Komuta Merkezi"
    },
    "kicker": "Kimlik doğrulandı",
    "title": "Komuta Merkezi",
    "lede": "Steam OpenID ile oturum açıldı. Oturum localStorage'da değil, HttpOnly bir çerezde tutulur. Hile karşıtı sistem gerçek olana kadar dereceli arama kapalı kalır.",
    "eliteBadge": "ELİT",
    "stats": {
      "accountStatus": "Hesap durumu",
      "subscription": "Abonelik",
      "rank": "A.C.E. rütbesi",
      "ratingPoints": "Derece puanı",
      "wins": "Galibiyetler",
      "losses": "Mağlubiyetler",
      "accountId": "Dahili hesap kimliği"
    },
    "accountStatuses": {
      "ACTIVE": "Aktif",
      "SUSPENDED": "Askıya alındı",
      "BANNED": "Yasaklı",
      "TEMP_BANNED": "Geçici olarak yasaklı",
      "PERM_BANNED": "Kalıcı olarak yasaklı",
      "UNDER_REVIEW": "İnceleniyor"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kaptan",
      "PLAYER": "Oyuncu"
    },
    "settings": {
      "title": "PANEL AYARLARI PROFİLİ",
      "billingNotLive": "Ödeme yakında açılıyor. O zamana kadar tüm hesaplar Free'de kalır.",
      "cancelReason": "İptal edilecek ücretli abonelik yok. Ödeme sistemi uygulanmadı.",
      "cancelButton": "Aboneliği iptal et"
    },
    "rankedReason": "Doğrulanmış bir hile karşıtı entegrasyon olana kadar dereceli eşleştirme kullanılamaz.",
    "rankedButton": "Dereceli maç bul",
    "roster": {
      "title": "5v5 kadro",
      "body": "Bir kaptan. Dört davet. Kaptanlar diğer A.C.E. hesap kimliklerini davet eder; bu hesaplar yalnızca doğrulanmış bir Steam girişinden sonra oluşturulur."
    },
    "pendingInvites": "Bekleyen davetler"
  },
  "forms": {
    "requestFailed": "İstek başarısız oldu.",
    "createTeam": {
      "acceptRequired": "Devam etmek için Hizmet Koşulları'nı, Hile Karşıtı EULA'yı ve Gizlilik Politikası'nı kabul edin.",
      "failed": "Takım oluşturulamadı.",
      "nameLabel": "Yeni 5v5 takım adı",
      "submitAria": "Yeni bir 5v5 takımı kur",
      "submit": "Takım kur"
    },
    "invite": {
      "failed": "Davet başarısız oldu.",
      "label": "SteamID veya A.C.E. hesap kimliğiyle serbest oyuncu davet et",
      "submitAria": "Takım daveti gönder",
      "submit": "Davet gönder"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Oyuncu profili",
      "title": "{name} · A.C.E. profili",
      "description": "A.C.E. oyuncu dosyası. Plus ve Premium oturumları telemetri eğilim grafiklerinin kilidini açar."
    },
    "kicker": "Oyuncu kimliği",
    "bannerPlaceholder": "Profil afişi · yakında",
    "levelBadge": "SEVİYE {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "Kadro seviyesi {level}.",
    "trend": {
      "title": "Rekabet derecesi performans eğilimi",
      "note": "Ardışık maç geçmişi kayıtlarındaki derece puanları."
    },
    "combat": {
      "title": "Ayrıntılı çatışma verisi matrisi",
      "kills": "Toplam Leş",
      "deaths": "Toplam Ölüm",
      "kd": "Hesaplanan K/D",
      "headshots": "Toplam Kafadan Vuruş",
      "headshotPct": "Kafadan Vuruş % Aralığı",
      "knifeKills": "Özel Bıçak Leşleri"
    },
    "weapon": {
      "title": "İmza silah uzmanlığı",
      "note": "Birincil kalibre edilmiş silah platformu",
      "accuracy": "İsabet Puanı",
      "kills": "Toplam Silah Leşi"
    },
    "gear": {
      "title": "Bilgisayar özellikleri",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Monitör Yenileme Hızı (Hz)",
      "mouse": "Fare Modeli",
      "dpi": "Aktif DPI Ayarı"
    },
    "networksTitle": "Steam profil bağlantısı",
    "back": "Klan kadrosuna dön"
  },
  "networks": {
    "note": "Buraya yazılan bağlantı bu tarayıcıda kalır ve kaydedilmez. A.C.E. asla Steam şifresi istemez.",
    "labels": {
      "steam": "Steam profili"
    },
    "open": "{label} aç >"
  },
  "ratingTrend": {
    "chartAria": "Rekabet derecesi performans eğilimi",
    "pointAria": "Maç {match}: {rating} derece",
    "axisLabel": "M{match}",
    "idle": "Bir derece kaydını incelemek için bir düğümün üzerine gelin.",
    "readout": "Maç {match} · {rating} derece"
  },
  "loginError": {
    "meta": {
      "title": "Oturum açma hatası"
    },
    "title": "Steam ile oturum açma tamamlanmadı",
    "notConfigured": "Bu sunucuda Steam OpenID henüz yapılandırılmadı. A.C.E. asla Steam şifresi istemez.",
    "unavailable": "Steam doğrulama isteğine yanıt vermedi. Birazdan tekrar deneyin. A.C.E. asla Steam şifresi istemez.",
    "unverified": "OpenID geri dönüşü sunucuda doğrulanamadı. A.C.E. asla Steam şifresi istemez.",
    "returnHome": "Ana sayfaya dön"
  }
};
