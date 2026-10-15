import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "meta": {
    "title": "Peringkat Kompetitif",
    "description": "Sepuluh peringkat A.C.E., dari Iron Recruit hingga A.C.E. Legend, dengan divisi dan batas rating."
  },
  "hero": {
    "kicker": "KALIBRASI",
    "title": "Peringkat Kompetitif",
    "lede": "Sepuluh tingkat dari Recruit hingga A.C.E. Legend, masing-masing dengan divisi {divisions}. Seret atau gunakan tombol panah untuk memutar emblem. Saat masuk, Anda melihat rating Anda sendiri; jika tidak, batas tiap tingkat."
  },
  "codexLink": "Buka Kodeks Kalibrasi",
  "document": {
    "title": "Dokumen kalibrasi sepuluh tingkat",
    "body": "Nama mesin adalah tangga resmi. Alias kristal adalah seni lobi. Chip win-rate di papan adalah angka pameran sampai matchmaking ranked diluncurkan. Kosmetik berbayar tidak pernah memindahkan pemain antar batas ini.",
    "level": "LEVEL {level} · {crystal}",
    "detail": "Rating minimum {rating}. Studi material: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "KALIBRASI AWAL",
      "material": "Tekstur pelat Besi Mentah / Obsidian"
    },
    "2": {
      "tagline": "OPERATIF LAPANGAN",
      "material": "Inti kristal Perunggu Sikat"
    },
    "3": {
      "tagline": "TEPI DEPAN",
      "material": "Serpihan Rose Gold dengan nuansa merah tua gelap"
    },
    "4": {
      "tagline": "KERAJINAN PRESISI",
      "material": "Blok serpihan berlian Perak Krom"
    },
    "5": {
      "tagline": "INTI BERPENGALAMAN",
      "material": "Aura inti cair Kuningan Tua"
    },
    "6": {
      "tagline": "STANDAR EMAS",
      "material": "Kilau kristal serpihan Emas Cerah"
    },
    "7": {
      "tagline": "KENAIKAN SIAN",
      "material": "Matriks kristal Plasma Biru Sian"
    },
    "8": {
      "tagline": "BADAI SAFIR",
      "material": "Inti kristal petir Biru Safir yang berpendar"
    },
    "9": {
      "tagline": "MAHKOTA HAMPA",
      "material": "Inti serpihan bintang Ungu Hampa Kosmik"
    },
    "10": {
      "tagline": "ELITE DARI ELITE",
      "material": "Kerangka Mahkota Emas Cair Bercahaya yang mewah"
    }
  },
  "board": {
    "selectEmblem": "Pilih emblem peringkat A.C.E. {name}, level {level}",
    "emblemAlt": "Lencana profil emblem A.C.E. Kristal 3D Kustom Level {level} {crystal} {name}",
    "emblemAltLegend": "Lencana Profil Emblem A.C.E. Kristal 3D Kustom Level {level}",
    "premium": "TINGKAT TERATAS"
  },
  "division": {
    "label": "Divisi {division}",
    "select": "Pilih divisi {division}",
    "summary": "{divisions} Divisi Masing-masing / Total {levels} Level"
  },
  "card": {
    "rank": "Peringkat {level}",
    "targetWinRate": "Target win-rate {winRate}",
    "calibrationTarget": "Target kalibrasi",
    "floor": "Batas",
    "samplesNote": "Angka target untuk setiap tingkat.",
    "progressMockup": "Progres"
  },
  "turntable": {
    "stageLabel": "Emblem orbital {name}. Seret untuk memutar.",
    "dragToRotate": "SERET UNTUK MEMUTAR",
    "rankSystem": "SISTEM PERINGKAT"
  },
  "emblem": {
    "kicker": "Tanda kalibrasi",
    "rankLabel": "Peringkat {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} tanda penempatan terisi dari kemenangan dan kekalahan yang tersimpan. Node ini tidak memulai pertandingan."
  }
};
