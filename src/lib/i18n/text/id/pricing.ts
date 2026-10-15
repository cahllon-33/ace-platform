import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "Harga",
    "description": "Keanggotaan A.C.E.: Free {free}, Plus {plus}/bln, Premium {premium}/bln. Harga tampilan terkunci bilangan bulat."
  },
  "period": {
    "monthly": "/bln"
  },
  "hero": {
    "badge": "Keanggotaan",
    "title": "Tingkat akses",
    "lede": "Free {free}. Plus {plus}/bln. Premium {premium}/bln. Angka-angka itu terkunci bilangan bulat. Paket berbayar tidak pernah membeli rating atau lawan yang lebih mudah."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafit",
      "title": "Akses terbuka",
      "points": [
        "Masuk dengan Steam OpenID. A.C.E. tidak pernah meminta kata sandi Steam.",
        "Rating tersimpan dimulai dari 1.000. Belum ada hasil pertandingan yang mengubahnya.",
        "Semua halaman publik: main, turnamen, papan peringkat, tim, dan aturan."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Surat terima kasih dan dukungan",
      "points": [
        "Semua yang ada di Free.",
        "Segera hadir: surat terima kasih (apa yang termasuk, apa yang tidak, dan support@ace-platform.gg) hanya terbuka setelah pembayaran tersedia. Tombol dinonaktifkan hari ini.",
        "Tidak membeli rating atau lawan yang lebih mudah. Lencana profil emas berasal dari data pertandingan tersimpan untuk setiap pemain. Segel elite dan lencana khusus hanya tampil jika tingkat tersimpan sudah Premium."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Surat terima kasih dan skuad lima pemain",
      "points": [
        "Semua yang ada di Free.",
        "Segera hadir: surat terima kasih (apa yang termasuk, apa yang tidak, dan support@ace-platform.gg) hanya terbuka setelah pembayaran tersedia. Tombol dinonaktifkan hari ini.",
        "Segera hadir: setelah pembayaran, surat mengarah ke Squads, tempat kapten yang masuk dengan Steam dapat menyimpan klan lima pemain.",
        "Tanpa hadiah, senjata, antrean langsung, atau server game. Klan tersimpan bukan kursi di papan 100 tim."
      ]
    }
  },
  "card": {
    "elite": "ELITE",
    "stayFree": "Tetap di Free",
    "freeNote": "Terbuka sekarang",
    "choose": "Pilih {plan}",
    "chooseAria": "Pilih {plan} {price} per bulan"
  },
  "billing": {
    "kicker": "MATRIKS LINIMASA PENAGIHAN",
    "title": "Cara penagihan bekerja setelah tersedia",
    "body": "Plus tepat {plus}/bln. Premium tepat {premium}/bln.",
    "display": {
      "label": "01 · TAMPILAN",
      "body": "Free {free}. Plus {plus}/bln. Premium {premium}/bln. Tingkat berbayar tidak pernah membeli rating atau lawan yang lebih mudah."
    },
    "rolling": {
      "label": "02 · SIKLUS BERGULIR",
      "body": "Saat penagihan tersedia, tagihan diperpanjang dalam siklus bulanan bergulir. Penggunaan sebagian bulan tidak dapat dikembalikan. Pembatalan menghentikan siklus berikutnya dan tidak menghapus periode prabayar saat ini."
    },
    "today": {
      "label": "03 · HARI INI"
    }
  },
  "compare": {
    "kicker": "Yang dapat dijanjikan A.C.E. hari ini",
    "title": "Perbandingan keanggotaan",
    "note": "Setiap baris mencerminkan situs hari ini. Pembayaran segera hadir, dan paket berbayar tidak pernah membuka antrean atau membeli keunggulan.",
    "caption": "Free, Plus, dan Premium dibandingkan berdasarkan apa yang dilakukan situs hari ini",
    "includedToday": "Termasuk hari ini",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Situs publik",
        "detail": "Beranda, main, turnamen, papan peringkat, tim, aturan, dan ketentuan."
      },
      "steamSignIn": {
        "feature": "Masuk Steam",
        "detail": "Steam OpenID resmi. A.C.E. tidak pernah meminta kata sandi Steam."
      },
      "startingRating": {
        "feature": "Rating awal",
        "detail": "Angka yang tersimpan di akun baru sebelum ada pertandingan tercatat."
      },
      "recordedMatches": {
        "feature": "Pertandingan tercatat",
        "detail": "Menang dan kalah yang ditulis dari pertandingan A.C.E. yang selesai."
      },
      "rankedQueue": {
        "feature": "Antrean ranked",
        "detail": "CARI PERTANDINGAN tetap tertutup sampai antrean nyata ada."
      },
      "cs2Servers": {
        "feature": "Server CS2",
        "detail": "Situs ini tidak mengirim alamat server atau tautan connect."
      },
      "antiCheatClient": {
        "feature": "Klien anti-cheat",
        "detail": "Tidak ada yang diunduh dari situs ini."
      },
      "charge": {
        "feature": "Tagihan",
        "detail": "Memilih Plus atau Premium tidak mengambil kartu."
      },
      "ratingForSale": {
        "feature": "Rating dijual",
        "detail": "Label berbayar tidak pernah membeli rating atau lawan yang lebih mudah."
      },
      "prizeOrWeapon": {
        "feature": "Hadiah atau senjata",
        "detail": "Tidak ada skin, pisau, atau kumpulan hadiah yang dikirim."
      },
      "goldEliteSeal": {
        "feature": "Segel elite & lencana khusus",
        "detail": "Hanya Premium, dibaca dari tingkat tersimpan di server. Kosmetik. Pembayaran tidak menetapkan tingkat itu."
      }
    },
    "cells": {
      "open": "Terbuka",
      "yes": "Ya",
      "noneYet": "Belum ada",
      "closed": "Tertutup",
      "notConnected": "Segera hadir",
      "notShipped": "Belum dirilis",
      "noCharge": "Tanpa biaya",
      "notForSale": "Tidak dijual",
      "none": "Tidak ada",
      "no": "Tidak",
      "storedTierOnly": "Hanya tingkat tersimpan"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Tanda terima Plus",
      "metaDescription": "Surat A.C.E. Plus yang ditampilkan di situs ini. Pembayaran belum aktif, jadi tidak ada yang ditagih dan tidak ada surel yang dikirim.",
      "planName": "A.C.E. Plus",
      "nextLabel": "Lanjutkan di A.C.E.",
      "nextBody": "Halaman publik tetap terbuka. Pilihan ini tidak membuka antrean dan tidak mengubah tingkat tersimpan."
    },
    "premium": {
      "metaTitle": "Tanda terima Premium",
      "metaDescription": "Surat A.C.E. Premium yang ditampilkan di situs ini. Pembayaran belum aktif, jadi tidak ada yang ditagih dan tidak ada surel yang dikirim.",
      "planName": "A.C.E. Premium",
      "nextLabel": "Lanjutkan ke Squads",
      "nextBody": "Lanjutkan ke Squads. Halaman akan menanyakan apakah Anda tim beranggotakan lima. Kursi 1 adalah akun Steam yang masuk. Kursi 2 sampai 5 adalah pemain lain. Menyimpan klan tetap tidak menagih harga ini."
    }
  },
  "letter": {
    "kicker": "{plan} · {price} per bulan",
    "title": "Terima kasih atas pilihan Anda",
    "flag": "Surat ini ditampilkan di situs. Tidak ada surel yang dikirim. Tidak ada kartu yang ditagih. Pembayaran belum aktif, dan tingkat keanggotaan tersimpan tidak diubah.",
    "greeting": "Pemain yang terhormat,",
    "intro": "Terima kasih telah memilih {plan}. Halaman ini adalah tanda terima. Ia mencatat harga tampilan, apa yang termasuk dalam pilihan itu hari ini, apa yang tidak termasuk, dan alamat dukungan yang dipublikasikan di situs ini.",
    "selected": {
      "title": "Yang dipilih",
      "items": [
        "Nama paket: {plan}.",
        "Harga tampilan: {price} per bulan. Angka ini adalah label, bukan tagihan.",
        "Pembayaran: tidak ada. Memilih paket ini tidak mengambil kartu.",
        "Surel: tidak ada. A.C.E. tidak mengirim surat ini ke kotak masuk.",
        "Tingkat tersimpan: tidak berubah. Lencana khusus dan segel elite hanya muncul jika akun sudah menyimpan Premium.",
        "Rating: tidak dijual. Akun baru tetap mulai dari 1.000."
      ]
    },
    "today": {
      "title": "Yang dapat Anda gunakan hari ini",
      "items": [
        "Situs publik: beranda, main, turnamen, papan peringkat, tim, aturan, dan ketentuan.",
        "Masuk Steam melalui Steam OpenID resmi. A.C.E. tidak pernah meminta kata sandi Steam.",
        "Halaman publik yang sama dengan Free. Harga ini tidak membuka antrean terpisah."
      ]
    },
    "excluded": {
      "title": "Yang tidak termasuk dalam pilihan ini",
      "items": [
        "Antrean ranked langsung. CARI PERTANDINGAN tetap tertutup.",
        "Server Counter-Strike 2, alamat server, atau tautan connect.",
        "Unduhan anti-cheat. A.C.E Shield sedang dikembangkan.",
        "Hadiah, skin, pisau, atau kumpulan hadiah.",
        "Kursi di papan 100 tim. Papan itu masih menunjukkan 0 terdaftar sampai musim dibuka.",
        "Lawan yang lebih mudah, rating yang dibeli, atau situs publik yang berbeda dari Free."
      ]
    },
    "trouble": {
      "title": "Jika ada yang tidak berfungsi",
      "items": [
        "Anda mengharapkan tagihan atau tingkat berbayar. Tidak ada yang diterapkan. Akun tetap seperti semula.",
        "Anda mengharapkan surat ini di kotak masuk. Surat ini hanya ada di halaman ini.",
        "Steam tidak terhubung. Gunakan Hubungkan Profil dan centang kotak ketentuan terlebih dahulu. Jangan pernah mengetik kata sandi Steam di A.C.E.",
        "Anda butuh bantuan. Gunakan alamat dukungan di bawah, atau buka halaman bantuan di situs ini."
      ]
    },
    "support": {
      "title": "Dukungan",
      "addressBefore": "Alamat dukungan yang tercantum di situs ini adalah ",
      "addressAfter": ".",
      "helpBefore": "Bantuan di situs: ",
      "supportLink": "Dukungan",
      "helpAnd": " dan ",
      "contactLink": "Kontak",
      "rulesBefore": ". Aturan ada di ",
      "rulesLink": "Aturan",
      "rulesAnd": " dan ",
      "termsLink": "Ketentuan",
      "helpAfter": ". Perintah di Dukungan tidak membuka tiket, dan teks yang diketik di Kontak tidak dikirim."
    },
    "next": {
      "title": "Langkah berikutnya"
    }
  },
  "telemetry": {
    "kicker": "TELEMETRI PLUS / PREMIUM",
    "copy": "TELEMETRI DASBOR TERKUNCI — Tingkatkan paket langganan Anda ke A.C.E. Plus atau Premium untuk membuka kurva statistik real-time dinamis dan indeks spesialisasi senjata.",
    "cta": "Buka tabel harga"
  }
};
