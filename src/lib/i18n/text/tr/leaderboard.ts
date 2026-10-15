import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "Sıralama",
    "description": "A.C.E. rekabet tablosu. Kayıtlı Steam hesapları önce görünür. Boş koltuklar örnek satır olarak kalır."
  },
  "hero": {
    "kicker": "SIRALAMA",
    "title": "Rekabet tablosu",
    "note": "Oyuncular Steam'i bağlayıp bir derece kazanana kadar bu tabloyu örnek koltuklar doldurur. Ülke ve öne çıkan silah temsilidir. Silah görselleri A.C.E. stüdyosunun özgün çizimleridir, Valve kaplamaları değildir. Leşler henüz kaydedilmiyor, bu yüzden öne çıkan silah bir en çok leş istatistiği değildir."
  },
  "facts": {
    "seats": "Koltuklar",
    "storedAccounts": "Kayıtlı hesaplar",
    "killsStored": "Kayıtlı leşler",
    "none": "Yok"
  },
  "empty": "Bu adla eşleşen örnek koltuk yok.",
  "podiumLabel": "İlk üç koltuk",
  "boardLabel": "Rekabet tablosu",
  "table": {
    "rank": "Sıra",
    "player": "Oyuncu",
    "country": "Ülke",
    "tier": "Kademe",
    "leadWeapon": "Ana silah",
    "rating": "Derece"
  },
  "tags": {
    "stored": "Kayıtlı hesap",
    "showcase": "Örnek"
  },
  "weapon": {
    "sampleRender": "İmza silah",
    "notStored": "Kayıtlı değil",
    "noKillSaved": "Kayıtlı leş yok",
    "alt": "{name}"
  },
  "countries": {
    "il": "İsrail",
    "us": "Amerika Birleşik Devletleri",
    "de": "Almanya",
    "ua": "Ukrayna",
    "se": "İsveç",
    "fr": "Fransa",
    "pl": "Polonya",
    "br": "Brezilya",
    "jp": "Japonya",
    "kr": "Güney Kore"
  },
  "search": {
    "openLabel": "Oyuncu aramasını aç",
    "srLabel": "Sıralamada ara",
    "fieldLabel": "Oyuncu ara",
    "placeholder": "Görünen ad"
  },
  "seasonPreview": {
    "banner": "1. SEZON SIRALAMASI",
    "noteLive": "Steam'e bağlı adlar A.C.E. hesaplarıdır. K/D, maç sunucuları leşleri kaydetmeye başladığında görünür.",
    "noteSample": "1. Sezon kayıtları, dereceli maçlar oynandıkça burada görünür."
  },
  "playerCard": {
    "kicker": "Oyuncu kartı önizlemesi",
    "title": "Operatör dosyası",
    "badge": "Premium",
    "note": "Dereceli eşleştirme açıldığında kartınız gerçek verilerle dolar.",
    "currentRank": "Mevcut Rütbe",
    "rankValue": "A.C.E. Legend (Lig I)",
    "competitiveRating": "Rekabet Derecesi",
    "seasonRank": "Sezon Sırası",
    "seasonTop": "(İlk {percent})"
  }
};
