import type { Ui } from "./en";

export const UI_ID: Ui = {
  "nav": {
    "home": "Beranda",
    "play": "Main",
    "ranks": "Peringkat",
    "tournaments": "Turnamen",
    "leaderboard": "Papan Peringkat",
    "teams": "Tim",
    "getPremium": "Jadi Premium",
    "more": "Lainnya",
    "maps": "Peta",
    "prizes": "Hadiah",
    "shop": "Toko",
    "rules": "Aturan",
    "antiCheat": "Anti-Cheat",
    "features": "Fitur",
    "pricing": "Harga",
    "compete": "Bertanding",
    "explore": "Jelajahi"
  },
  "footer": {
    "legalLine": "© 2026 A.C.E. Competitions Ltd. Platform independen, tidak berafiliasi dengan Valve. Counter-Strike dan CS2 adalah merek dagang Valve Corporation."
  },
  "soon": {
    "label": "Segera hadir"
  },
  "cta": {
    "kicker": "Musim 1",
    "title": "Siap bertanding?",
    "body": "Hubungkan Steam, selesaikan kalibrasi, dan terus naik.",
    "play": "Main A.C.E",
    "ranks": "Jelajahi peringkat"
  },
  "status": {
    "title": "Status platform",
    "steam": "Masuk dengan Steam OpenID",
    "shield": "A.C.E Shield · tahap penerapan",
    "servers": "Server kompetitif · beta kompetitif",
    "billing": "Integrasi pembayaran",
    "available": "Tersedia",
    "inDevelopment": "Dalam pengembangan",
    "comingSoon": "Segera hadir",
    "designed": "Dirancang"
  },
  "ranksTabs": {
    "label": "Peringkat",
    "tiers": "Tingkat & divisi",
    "codex": "Kodeks Kalibrasi"
  },
  "maps": {
    "kicker": "Kumpulan peta kompetitif",
    "title": "Peta & Siaran",
    "lede": "Tujuh peta membentuk kumpulan peta kompetitif A.C.E. Tim melarang dan memilih dari daftar ini saat veto peta sesuai buku aturan. Siaran turnamen tampil di layar di bawah.",
    "rulebook": "Baca aturan veto",
    "screen": "Layar siaran",
    "offAir": "Tidak mengudara",
    "noBroadcast": "Saat ini tidak ada siaran.",
    "nextLabel": "Siaran berikutnya",
    "notScheduled": "segera diumumkan di sini",
    "embeddedFrom": "Disiarkan dari {provider}.",
    "pool": "Kumpulan peta aktif",
    "poolMeta": "{count} peta · veto BO1 / BO3",
    "mapLabel": "Peta {n}",
    "settings": {
      "dust": "Kota gurun",
      "mirage": "Distrik pasar",
      "inferno": "Desa tua",
      "nuke": "Kawasan industri",
      "ancient": "Reruntuhan hutan",
      "anubis": "Kuil kanal",
      "train": "Stasiun kereta"
    },
    "notes": {
      "dust": "Jarak pandang panjang di A, pintu mid yang sempit.",
      "mirage": "Kontrol mid menentukan sebagian besar ronde.",
      "inferno": "Jalur sempit dan serangan penuh utilitas.",
      "nuke": "Site bertumpuk dan rotasi vertikal yang cepat.",
      "ancient": "Tekanan dari mid ke B membentuk babak.",
      "anubis": "Mid berair dan serangan terbuka ke B.",
      "train": "Perlindungan di antara gerbong dan jalur panjang di A."
    }
  },
  "prizes": {
    "kicker": "Hadiah kejuaraan",
    "title": "Hadiah",
    "lede": "Jajaran hadiah yang kami siapkan untuk juara Musim 1. Total hadiah dikonfirmasi di halaman setiap acara saat diumumkan, sesuai bagian 18 buku aturan.",
    "rulebook": "Aturan hadiah",
    "cardKicker": "Hadiah legendaris",
    "slots": {
      "first": "Juara 1 · per pemain",
      "second": "Juara 2 · per pemain",
      "mvp": "Penghargaan MVP"
    },
    "facts": {
      "pool": "Total hadiah",
      "items": "Item hadiah",
      "delivery": "Pengiriman",
      "season": "Musim"
    },
    "factValues": {
      "season": "Musim 1"
    }
  },
  "rules": {
    "kicker": "Buku aturan kompetisi A.C.E.",
    "title": "Aturan kompetisi",
    "version": "Versi {version} · berlaku mulai {date}",
    "intro": "Aturan yang berlaku di setiap kompetisi A.C.E. Klausul bertanda “Berlaku setelah diterapkan” mulai berlaku saat sistem yang menjadi dasarnya diluncurkan.",
    "pending": "Berlaku setelah diterapkan",
    "contents": "Daftar isi",
    "penalties": {
      "offence": "Pelanggaran",
      "first": "Pelanggaran pertama",
      "repeat": "Pelanggaran berulang",
      "rule": "Aturan"
    },
    "englishNote": "Teks klausul ditampilkan dalam bahasa Inggris; versi bahasa Inggris yang berlaku.",
    "sections": [
      "Ruang lingkup dan definisi",
      "Kelayakan",
      "Akun dan identitas",
      "Tim dan susunan pemain",
      "Kapten",
      "Kumpulan peta dan veto",
      "Prosedur pertandingan",
      "Pengaturan pertandingan",
      "Masalah server dan teknis",
      "Jeda",
      "Terputus",
      "Kalah WO dan tidak hadir",
      "Perilaku",
      "Kecurangan dan integritas kompetisi",
      "Sengketa dan banding",
      "Sanksi",
      "Siaran",
      "Hadiah",
      "Perubahan"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Anti-Cheat",
    "lede": "A.C.E Shield adalah sistem integritas yang sedang dibangun untuk setiap pertandingan A.C.E.: pemeriksaan klien, server, pertandingan, dan perilaku yang bekerja bersama, dengan privasi sebagai prioritas.",
    "statusLabel": "Tahap penerapan",
    "pillarsTitle": "Pilar arsitektur",
    "pillars": {
      "client": {
        "title": "Integritas klien",
        "body": "Klien ringan memverifikasi lingkungan game selama pertandingan dan melaporkan tanda manipulasi."
      },
      "server": {
        "title": "Integritas server",
        "body": "Server pertandingan memakai konfigurasi terkunci, plugin bertanda tangan, dan log anti-manipulasi."
      },
      "match": {
        "title": "Integritas pertandingan",
        "body": "Setiap ronde direkam dengan demo dan log peristiwa sehingga hasil apa pun dapat ditinjau."
      },
      "behaviour": {
        "title": "Analisis perilaku",
        "body": "Model statistik menandai pola bidikan, reaksi, dan informasi yang janggal untuk ditinjau manusia."
      },
      "identity": {
        "title": "Identitas",
        "body": "Akun Steam OpenID, satu pemain per akun, dengan pemeriksaan penghindaran larangan."
      }
    },
    "roadmapTitle": "Peta jalan",
    "phases": {
      "p1": {
        "title": "Tahap 1 · Arsitektur",
        "body": "Model ancaman, aliran data, dan desain privasi."
      },
      "p2": {
        "title": "Tahap 2 · Integritas server & pertandingan",
        "body": "Konfigurasi server terkunci, perekaman demo, log anti-manipulasi."
      },
      "p3": {
        "title": "Tahap 3 · Analisis perilaku",
        "body": "Alat peninjauan dan model statistik pertama."
      },
      "p4": {
        "title": "Tahap 4 · Integritas klien",
        "body": "Beta klien Shield dengan tinjauan keamanan publik."
      },
      "p5": {
        "title": "Tahap 5 · Beta kompetitif",
        "body": "Shield wajib untuk pertandingan peringkat dan turnamen."
      }
    },
    "privacyTitle": "Prinsip privasi",
    "privacy": [
      "Kami hanya mengumpulkan yang diperlukan untuk melindungi pertandingan dan menjelaskannya dengan tepat.",
      "Pengenal perangkat keras tidak dikumpulkan sampai ada implementasi aman yang terdokumentasi dan ditinjau secara independen.",
      "Data pertandingan disimpan untuk jangka waktu tertentu lalu dihapus.",
      "Setiap sanksi dapat diajukan banding dan ditinjau oleh manusia."
    ],
    "faqTitle": "Pertanyaan",
    "faq": [
      {
        "q": "Apakah A.C.E Shield sudah aktif?",
        "a": "Belum. Masih dalam pengembangan; setiap tahap di atas menunjukkan statusnya saat ini."
      },
      {
        "q": "Apakah perlu akses kernel?",
        "a": "Desain dimulai dengan pemeriksaan mode pengguna dan analisis di sisi server. Akses yang lebih dalam akan didokumentasikan dan ditinjau secara publik lebih dulu."
      },
      {
        "q": "Apakah Premium memengaruhi anti-cheat?",
        "a": "Tidak. Aturan integritas sama untuk semua pemain. Paket berbayar tidak pernah membeli keunggulan kompetitif."
      },
      {
        "q": "Bagaimana cara melaporkan pemain curang?",
        "a": "Melalui halaman kontak. Laporan ditinjau sesuai bagian 14 buku aturan."
      }
    ]
  }
};
