import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E. Tim Yönetimi",
    "description": "5v5 timinizin çalışma alanı. Davetler doğrulanmış bir Steam oturumu gerektirir; hile karşıtı kontroller A.C.E Shield ile gelir."
  },
  "hero": {
    "kicker": "TAKIMLAR",
    "title": "Timler",
    "lede": "Arka arkaya beş boş koltuk. Bir klan yalnızca Steam ile oturum açıp takım oluşturduktan sonra kaydedilir."
  },
  "gate": {
    "kickerPremium": "Premium mektubundan sonra",
    "kickerDefault": "Klan kaydı",
    "title": "Beş kişilik bir takım mısınız?",
    "intro": "1. koltuk Steam ile oturum açmış oyuncudur. 2-5. koltuklarda zaten A.C.E. hesabı olmalı. Bir klan kaydetmek $7 tahsil etmez, e-posta göndermez ve klanı 100 takımlık tabloya yerleştirmez.",
    "yes": "Evet, beş oyuncu",
    "no": "Hayır, koltukları boş bırak",
    "seatsOpen": "Beş koltuk boş kalır. Hiçbir şey kaydedilmedi.",
    "connectSteam": "Önce Steam'i bağlayın. Düğme sizi bu sayfaya geri getirir. A.C.E. asla Steam şifresi istemez.",
    "alreadyMember": "{name} zaten {team} klanına ait. Bu formdan ikinci bir klan oluşturulmaz.",
    "thisAccount": "Bu hesap",
    "acceptTerms": "Bir klan kaydetmeden önce koşulları kabul edin.",
    "notStored": "Klan kaydedilmedi.",
    "clanName": "Klan adı",
    "captainSeat": "1. koltuk, kaptan: {name}",
    "signedInSteam": "Oturum açmış Steam hesabı",
    "seatLabel": "{seat}. koltuk SteamID veya A.C.E. hesap kimliği",
    "submit": "Beş kişilik klanı kaydet",
    "saved": "Klan adı kaydedildi ve dört davet beklemede. Bu oyuncular kabul edene kadar kadroda değildir. Bu, 100 takımlık tablodaki bir koltuk değildir. Hiçbir ücret alınmadı."
  },
  "squadDesk": {
    "kicker": "Tim masası",
    "title": "Yazılı kurallardan sorular",
    "intro": "Bu masa yalnızca bu sayfada yayımlanan bilgileri okur. Hile tespit etmez, maç açmaz veya hesap değiştirmez.",
    "questionLabel": "Soru",
    "placeholder": "Beş koltuk, $7 mektubu veya destek hakkında sorun",
    "ask": "Sor",
    "fallback": "Bu masa yalnızca bu sayfadaki yazılı kurallara göre yanıt verir: Premium mektubu, beş koltuk, Steam OpenID ve Destek.",
    "facts": {
      "email": "E-posta gönderilmez. Premium mektubu /premium/receipt adresinde kalır.",
      "charge": "Premium aylık $7'dır. Çok yakında: henüz ödeme sistemi yok, bu yüzden ücret alınmaz.",
      "board": "Kayıtlı bir klan bir kadro kaydıdır. 100 takımlık tabloya yerleştirilmez. Bir sezon açılana kadar tablo 0 kayıtlı gösterir.",
      "steam": "Oturum açma resmi Steam OpenID kullanır. A.C.E. asla Steam şifresi istemez. Bu sayfadan giderseniz Steam sizi buraya geri getirir.",
      "roster": "1. koltuk oturum açmış kaptandır. 2-5. koltuklarda zaten A.C.E. hesabı olmalı. Davetler her oyuncu kabul edene kadar beklemede kalır.",
      "badge": "Koltuk rozetleri, hile karşıtı sistem başladığında gerçek A.C.E Shield kontrollerine dönüşür.",
      "support": "Bu sitede Destek veya İletişim sayfasını açın. Bir destek istemi destek talebi açmaz ve İletişim'e yazılan metin iletilmez.",
      "rating": "Yeni bir derece 1.000'den başlar. Bu sayfa derece satmaz, sıra açmaz, CS2 sunucusuna bağlanmaz veya ödül teslim etmez."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Giriş oyuncusu",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Destek"
    },
    "rankLabel": "Rütbe {level}",
    "noAgents": "Henüz kayıtlı serbest oyuncu yok.",
    "notice": "Davetler yalnızca oturum açmış bir kaptan tarafından gönderilir. Koltuktaki rozet canlı bir hile karşıtı kontrol değildir."
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E. Şampiyonası — 100 Takımlı Elit Eleme",
      "description": "100 takımlı eleme. Kadrosunu açmak için bir klana, ardından her oyuncu profiline tıklayın. Kayıtlar yakında açılıyor."
    },
    "intro": {
      "title": "A.C.E. ŞAMPİYONASI — 100 TAKIMLI ELİT ELEME",
      "lede": "Yayımlanan format 100 takımlı bir elemedir. Aşağıdaki grafik bu düzendir. Bir klana tıklamak kadro panelini açar. Kayıt 100'de 0. Hiçbir nakit ödül duyurulmamış veya fonlanmamıştır.",
      "formatValue": "100 Takımlı Eleme Tablosu Matrisi",
      "briefTitle": "100 Takımlı Operasyon Özeti",
      "briefBody": "Tek bir rekabet düzeni 100 takımın tamamını kapsar. Kayıtlar açıldığında kabul edilen ilk 28 klan 1. Tur'da bay geçer ve 2. Tur'a yükselir. Diğer 72 klan 1. Tur'u oynar. Dolmamış slotlardaki adlar, klanlar kaydolana kadar yer tutuculardır. Kural kitabının tamamı ağacın altında yer alır. Maç lobileri rekabetçi beta ile açılır ve ödüller her etkinlik için kesinleşir."
    },
    "timeline": {
      "ariaLabel": "Turnuva başlangıç takvimi",
      "kicker": "ŞAMPİYONA YOL HARİTASI",
      "title": "TURNUVA BAŞLANGIÇ TAKVİMİ",
      "stageLabel": "Aşama {id}",
      "stages": {
        "registrations": {
          "title": "Açık Kayıtlar",
          "state": "ÖNİZLEME"
        },
        "calibration": {
          "title": "Bölgesel Kalibrasyon Tabloları",
          "state": "KİLİTLİ"
        },
        "quarterFinals": {
          "title": "Elit Pro Çeyrek Finaller",
          "state": "KİLİTLİ"
        },
        "finals": {
          "title": "Büyük Zirve Finali",
          "state": "KİLİTLİ"
        }
      },
      "disclaimer": "Kayıtlar başladığında önce Aşama 01 açılır. Aşama 02–04 onu izler. Ödül havuzları duyurulduğunda etkinlik sayfasında kesinleşir."
    },
    "bracket": {
      "kicker": "100 takımlı eleme · yakında",
      "title": "100 Takımlı Eleme Tablosu Matrisi",
      "statusUnavailable": "Kayıtlar yakında açılıyor. O zamana kadar tablo örnek klanları gösterir.",
      "statusEmpty": "Kayıtlar yakında açılıyor. O zamana kadar tablo örnek klanları gösterir.",
      "statusStored": "{count} kayıtlı klan önce yerleştirilir. Kalan slotlar örnek klanları gösterir. Sonraki turlar maçlar kaydedildikçe dolar.",
      "openSlot": "Boş slot",
      "openCompetitorSlot": "Boş yarışmacı slotu",
      "openRoster": "{name} kadrosunu aç",
      "bye": "👑 [BAY - 2. TURA SERİBAŞI]",
      "championStage": "ŞAMPİYON SAHNESİ",
      "leftWing": "Sol kanat",
      "rightWing": "Sağ kanat",
      "emptySlotNotice": "Bu yarışmacı slotu boş. Henüz kayıtlı klan yok.",
      "grandFinalNotice": "Büyük final, iki yarı final de kaydedilene kadar açık kalır.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "ÇF",
        "sf": "YF"
      }
    },
    "profile": {
      "closeBackdrop": "Takım profilini kapat",
      "kicker": "Şampiyona profili · önizleme",
      "matchesPlayed": "Oynanan maçlar",
      "winRate": "Toplam kazanma oranı",
      "streak": "Aktif turnuva serisi",
      "rosterHeading": "5 oyunculu kadro matrisi",
      "openSeat": "Boş koltuk {seat}",
      "noPlayer": "Kayıtlı oyuncu yok",
      "previous": "Önceki klan",
      "count": "Klan {index} / {total}",
      "next": "Sonraki klan",
      "close": "Profili kapat",
      "disclosure": "Oyuncular paylaşmayı seçtiğinde ekipmanları ve envanterleri burada görünür. A.C.E. donanım verisi toplamaz."
    },
    "player": {
      "level": "SVY {level} · RP {rating}",
      "record": "G–M {wins}–{losses}",
      "kdNotStored": "K/D kayıtlı değil",
      "openProfileAria": "{name} profilini aç",
      "openProfile": "Profili aç",
      "badge": "HAZIR / HİLE KARŞITI UYUMLU",
      "badgeNote": "A.C.E Shield kontrolü · yakında",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Fare",
        "dpi": "DPI",
        "keyboard": "Klavye",
        "monitor": "Monitör",
        "headset": "Kulaklık"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · paylaşılmadı",
    "gpu": "GPU · paylaşılmadı",
    "mouse": "Fare · paylaşılmadı",
    "dpi": "DPI · paylaşılmadı",
    "keyboard": "Paylaşılmadı",
    "monitor": "Yenileme hızı · paylaşılmadı",
    "headset": "Paylaşılmadı"
  },
  "profileDisclosure": "A.C.E. donanım envanteri saklamaz ve hile karşıtı istemci çalıştırmaz. Performans eğilim grafikleri ve çatışma matrisi bir A.C.E. Plus veya Premium oturumu gerektirir. Bu sayfaya yazılan Steam profil bağlantısı kaydedilmez ve resmi bir kullanıcı adı değildir.",
  "errors": {
    "signInRequired": "Oturum açmanız gerekiyor.",
    "nameLength": "Takım adı 2 ile 32 karakter arasında olmalıdır.",
    "alreadyCaptain": "Bu hesap zaten bir takımın kaptanı.",
    "nameTaken": "Bu ada sahip bir takım zaten var.",
    "idRequired": "SteamID veya A.C.E. hesap kimliği gerekli.",
    "noAccountForToken": "Bu SteamID veya hesap kimliği için A.C.E. hesabı yok.",
    "clanNeedsFour": "Beş kişilik bir klan, oturum açmış kaptan ile dört SteamID gerektirir.",
    "seatNeedsId": "Dört koltuğun her biri için SteamID veya A.C.E. hesap kimliği gerekir.",
    "seatsDistinct": "Her koltuk farklı bir oyuncu gerektirir.",
    "captainHoldsSeat": "Kaptan zaten 1. koltukta. Dört başka oyuncu kullanın.",
    "fewerThanFour": "Bu kimlikler dörtten az hesaba ait.",
    "selfInvite": "Kaptan kendi hesabını davet edemez.",
    "captainOnly": "Yalnızca belirlenen kaptan davet gönderebilir.",
    "rosterLimit": "Bir CS2 kadrosu kaptan dahil beş oyuncudur.",
    "alreadyOnRoster": "Bu oyuncu zaten kadroda.",
    "noAccountForId": "Bu kimlik için A.C.E. hesabı yok.",
    "inviteNotFound": "Davet bulunamadı.",
    "inviteNotPending": "Bu davet artık beklemede değil.",
    "rosterFull": "Kadro zaten dolu.",
    "createFailed": "Takım oluşturulamadı.",
    "inviteFailed": "Davet başarısız oldu.",
    "updateInviteFailed": "Davet güncellenemedi."
  }
};
