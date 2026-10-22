import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Tingkat peringkat {n}",
    "chip": "Premium",
    "artAlt": "Seni peringkat Premium {rank}"
  },
  "rpRules": {
    "kicker": "ATURAN RATING POINTS A.C.E",
    "title": "Cara Rating Points bergerak",
    "lede": "Versi aturan {version}. Setiap pemain baru mulai dengan {start} RP di tingkat 3, {tier}. Tangga ini sengaja lambat: setiap tingkat di atas bagian tengah butuh lebih banyak kemenangan daripada tingkat sebelumnya.",
    "tableTitle": "Aturan",
    "colRule": "Aturan",
    "colValue": "Nilai",
    "rStart": "Rating awal",
    "vStart": "{start} RP, tingkat 3 ({tier})",
    "rWin": "Menang melawan tim setara",
    "vWin": "+{win} RP",
    "rLoss": "Kalah melawan tim setara",
    "vLoss": "−{loss} RP",
    "rOdds": "Kekuatan lawan",
    "vOdds": "Rating kamu dibandingkan dengan rata-rata rating tim lawan (skala {scale}). Mengalahkan tim yang lebih kuat memberi lebih banyak dan kalah darinya lebih sedikit mengurangi; melawan tim yang lebih lemah berlaku sebaliknya.",
    "rClamp": "Batas per pertandingan",
    "vClamp": "Kemenangan memberi +{winMin} sampai +{winMax} RP. Kekalahan mengurangi −{lossMin} sampai −{lossMax} RP.",
    "rTier": "Kemenangan di tingkat tinggi",
    "vTier": "Perolehan kemenangan dikalikan {t7} di tingkat 7–9 dan {t10} di tingkat 10 ({top}). Kekalahan tidak pernah dikurangi.",
    "rMvp": "MVP pertandingan",
    "vMvp": "Pemain dengan kill terbanyak; jika seri, ditentukan oleh damage lebih banyak lalu kematian lebih sedikit. +{mvp} RP saat menang dan kehilangan {mvp} RP lebih sedikit saat kalah, tidak pernah melewati batas per pertandingan. Segera hadir: server belum mencatat kill, jadi hari ini belum ada bonus MVP yang diterapkan.",
    "rPlacement": "Penempatan",
    "vPlacement": "{n} pertandingan pertamamu. Selama penempatan rating kamu tidak bisa naik di atas tingkat {maxTier} ({cap} RP).",
    "rDraw": "Seri",
    "vDraw": "0 RP untuk semua.",
    "rAbandon": "Meninggalkan atau keluar dari pertandingan",
    "vAbandon": "−{abandon} RP apa pun hasilnya, dan tanpa bonus MVP.",
    "rLimits": "Rentang rating",
    "vLimits": "{floor} sampai {ceiling} RP",
    "rDecay": "Tidak aktif",
    "vDecay": "Tidak ada penurunan. Rating kamu tidak turun saat kamu tidak bermain.",
    "rPaid": "Paket berbayar",
    "vPaid": "Tidak berpengaruh. Pemain Free, Plus, dan Premium bergerak dengan aturan yang persis sama.",
    "tierTableTitle": "Per tingkat, melawan tim setara",
    "colTier": "Tingkat",
    "colFloor": "Mulai",
    "colWin": "Menang",
    "colLoss": "Kalah",
    "examplesTitle": "Contoh perhitungan",
    "ex1": "Dari {start} ke {elite} RP ({top}) melawan tim setara, hanya dengan kemenangan: {w1} kemenangan @ +{win} sampai tingkat 6, lalu {w2} kemenangan @ +{win7} di tingkat 7–9. Total {total} kemenangan.",
    "ex2": "Setiap kekalahan di sepanjang jalan menambah kemenangan yang dibutuhkan. Di tingkat 7–9 kemenangan memberi +{win7} tetapi kekalahan tetap mengurangi −{loss}, jadi kamu perlu memenangkan setidaknya {breakEven}% pertandingan seimbang untuk terus naik.",
    "ex3": "Melawan tim dengan rata-rata 200 RP lebih tinggi darimu, kemenangan memberi +{strongWin} dan kekalahan mengurangi −{strongLoss}.",
    "ex4": "Melawan tim dengan rata-rata 200 RP lebih rendah darimu, kemenangan memberi +{weakWin} dan kekalahan mengurangi −{weakLoss}.",
    "note": "Angka-angka ini dihitung oleh kode yang sama yang menerapkan hasil pertandingan terverifikasi. Ini contoh, bukan pertandingan yang tersimpan."
  },
  "premiumCodex": {
    "kicker": "KODEKS RANK PREMIUM",
    "title": "Kodeks rank Premium",
    "lede": "Sepuluh lambang kristal berilustrasi, satu untuk setiap rank. Ini seni profil kosmetik di tangga Rating Points yang sama dengan rank standar. Tidak mengubah rating, matchmaking, atau antrean.",
    "cosmetic": "Seni kosmetik · tangga RP yang sama · hanya A.C.E Premium $7/bulan",
    "imgAlt": "Seni rank Premium {name}, level {level}"
  },
  "premiumRanks": {
    "kicker": "PERINGKAT PREMIUM",
    "plan": "A.C.E PREMIUM · hanya $7/bulan",
    "title": "Seni peringkat Premium",
    "lede": "Set peringkat A.C.E ilustrasi asli: sepuluh lambang kristal dengan divisi III/II/I, protokol rating, kartu detail Legend, dan penampil 3D yang diputar dengan menyeret. Ini seni profil untuk anggota Premium. Membaca tangga Rating Points yang sama dengan peringkat standar dan tidak memberi keunggulan kompetitif apa pun.",
    "demo": "Nilai demo: progres, win-rate, dan divisi di papan ini adalah contoh, bukan statistik langsung. Saat kamu masuk, rating yang ditampilkan adalah rating tersimpanmu.",
    "locked": "Segera hadir: checkout belum ada, jadi hari ini tidak ada akun Premium. Server menerapkan seni peringkat Premium ke profil hanya jika paket tersimpannya Premium.",
    "standardKicker": "PERINGKAT STANDAR",
    "standardNote": "Setiap akun memakai lambang vektor 3D ini.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Seni peringkat di profilmu",
    "pickerStandard": "Standar",
    "pickerPremium": "Premium",
    "pickerLocked": "Seni peringkat Premium untuk A.C.E Premium ($7/bulan). Segera hadir: checkout belum ada.",
    "pickerSaved": "Tersimpan.",
    "pickerFailed": "Tidak tersimpan. Seni peringkat Premium memerlukan A.C.E Premium."
  },
  "meta": {
    "title": "Peringkat Kompetitif",
    "description": "Sepuluh peringkat A.C.E, dari Iron Recruit hingga A.C.E Legend, dengan divisi dan batas rating."
  },
  "hero": {
    "kicker": "KALIBRASI",
    "title": "Peringkat Kompetitif",
    "lede": "Sepuluh tingkat dari Recruit hingga A.C.E Legend, masing-masing dengan divisi {divisions}. Seret atau gunakan tombol panah untuk memutar emblem. Saat masuk, Anda melihat rating Anda sendiri; jika tidak, batas tiap tingkat."
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
    "selectEmblem": "Pilih emblem peringkat A.C.E {name}, level {level}",
    "emblemAlt": "Lencana profil emblem A.C.E Kristal 3D Kustom Level {level} {crystal} {name}",
    "emblemAltLegend": "Lencana Profil Emblem A.C.E Kristal 3D Kustom Level {level}",
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
    "floor": "Batas"
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
