import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  premium: {
    "tag": "PREMIUM",
    "sample": "CONTOH PREMIUM",
    "note": "Slot bertanda Contoh Premium menampilkan seni rank ilustrasi Premium hanya untuk tampilan. Mereka pemain contoh, bukan pelanggan. Seni Premium hanya kosmetik dan tidak pernah mengubah rating atau matchmaking.",
    "artAlt": "Seni rank ilustrasi Premium {rank}"
  },
  room: {
    "showcaseTag": "PAMERAN · Pemain contoh, bukan pertandingan langsung. Antrean ditutup.",
    "showcaseShort": "PAMERAN",
    "queueClosed": "ANTREAN DITUTUP",
    "floorRp": "Batas bawah rank {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar {name}",
    "sampleChat": "Baris contoh. Tidak dikirim, tidak langsung.",
    "sampleLine": "CONTOH",
    "operatorA": "Seni operator A.C.E asli untuk Tim A: operator taktis berhelm dengan perlengkapan arang beraksen emas",
    "operatorB": "Seni operator A.C.E asli untuk Tim B: pejuang pemberontak bertudung dengan perlengkapan arang beraksen emas",
    "artNote": "Seni karakter A.C.E asli. Ini bukan model dari game."
  },
  "meta": {
    "title": "Main",
    "description": "Matchmaking ranked 5v5 dibuka setelah anti-cheat A.C.E Shield aktif."
  },
  "boards": {
    "label": "Papan antrean",
    "title": "Tiga papan 5v5",
    "note": "Pilihan tetap di halaman ini. Pencarian ranked ditutup, dan memilih papan tidak mencari lawan.",
    "items": {
      "open": {
        "name": "Papan Terbuka",
        "rules": [
          "Party berapa pun, hingga lima",
          "Tanpa jendela rating",
          "Steam OpenID adalah pemeriksaan identitas",
          "Ditulis untuk latihan terbuka setelah antrean ada"
        ]
      },
      "calibration": {
        "name": "Papan Kalibrasi",
        "rules": [
          "Solo, duo, atau trio",
          "Jendela rencana {points} poin rating",
          "Profil Steam harus sudah tersimpan",
          "Menggunakan aturan rating A.C.E. · pencarian segera hadir"
        ]
      },
      "elite": {
        "name": "Papan Elite",
        "rules": [
          "Solo atau duo",
          "Jendela rencana {points} poin rating",
          "Keanggotaan tersimpan harus Plus atau Premium",
          "Syarat masuk tertulis lebih ketat. Tidak ada kumpulan hadiah"
        ]
      }
    }
  },
  "veto": {
    "kicker": "VETO PETA",
    "title": "Pilih peta",
    "lede": "Tolak peta sampai tersisa satu. Lobi ini tidak menjalankan Counter-Strike 2 dan tidak membuka server.",
    "mapSelected": "Peta terpilih: {map}",
    "yourBan": "Ban Anda",
    "opponentBan": "Ban lawan",
    "selected": "Terpilih",
    "declined": "Ditolak",
    "decline": "Tolak",
    "reset": "Atur ulang veto",
    "declinedToast": "{map} ditolak. Halaman ini tidak membuka server.",
    "lockKicker": "RUANG PERTANDINGAN 5v5",
    "lockTitle": "{map} adalah peta tersisa",
    "lockBody": "Ruang pertandingan Anda. Pertandingan kompetitif dimulai di sini setelah beta kompetitif dibuka.",
    "close": "Tutup"
  },
  "arena": {
    "ariaLabel": "Pratinjau ruang pertandingan",
    "captain": "Kapten",
    "ping": "Ping {ping}",
    "mapPlates": "Pelat peta",
    "selectMap": "Pilih {map}",
    "settings": {
      "region": "Wilayah",
      "mode": "Mode",
      "antiCheat": "Anti-Cheat",
      "simulator": "Pratinjau"
    },
    "chat": {
      "title": "OBROLAN TIM",
      "kicker": "OBROLAN TIM · SEGERA HADIR",
      "captainName": "{name} (Kapten)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "ayo gas",
        "dust 2 bagus buat kita",
        "siap"
      ],
      "inputLabel": "Pesan obrolan tim",
      "placeholder": "Pesan ke tim…",
      "send": "Kirim"
    },
    "tiles": {
      "map": "Peta",
      "server": "Server",
      "serverValue": "EU West · segera hadir",
      "mode": "Mode"
    },
    "identity": {
      "title": "VERIFIKASI IDENTITAS",
      "kicker": "PEMERIKSAAN IDENTITAS · SEGERA HADIR",
      "rows": [
        "Verifikasi surel · segera hadir",
        "Verifikasi telepon · segera hadir",
        "Pemeriksaan wajah · segera hadir"
      ]
    },
    "security": {
      "title": "KEAMANAN PERTANDINGAN",
      "kicker": "A.C.E SHIELD · DALAM PENGEMBANGAN",
      "rows": [
        "Perlindungan anti-cheat · dalam pengembangan",
        "Pemeriksaan integritas server · dalam pengembangan",
        "Enkripsi data pertandingan · dalam pengembangan"
      ]
    },
    "findMatchReason": "Matchmaking dibuka bersama beta kompetitif. Antrean ranked belum berjalan."
  },
};
