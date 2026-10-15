import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Fitur",
      "description": "Arsitektur Kernel Anti-Cheat A.C.E. yang ditetapkan, tautan biometrik Face Scan, dan sepuluh tingkat kalibrasi keterampilan. Sistem ini belum aktif di situs ini."
    },
    "header": {
      "kicker": "ACE-FITUR / KERNEL / FACE-SCAN / KALIBRASI",
      "title": "Spesifikasi fitur platform",
      "lede": "Halaman ini adalah peta teknis tingkat produksi untuk tiga sistem A.C.E. yang direncanakan: Kernel Anti-Cheat Otonom, tautan biometrik Face Scan, dan tangga kalibrasi keterampilan sepuluh tingkat. Tidak ada apa pun di halaman ini yang merupakan kernel aktif, produk kamera aktif, atau antrean ranked aktif. Steam OpenID, tim 5v5, tata letak bagan, dan perhitungan rating gaya Elo ada di repositori ini. Server CS2 khusus, pembayaran, hadiah, dan klien integritas yang dapat diunduh tidak ada."
    },
    "kernel": {
      "title": "Arsitektur Kernel Anti-Cheat",
      "paragraphs": [
        "Autonomous Secure Shell yang ditetapkan adalah klien integritas terikat perangkat keras yang akan berjalan di samping Counter-Strike 2 di mesin pemain dan melaporkan status ALLOW atau DENY bertanda tangan ke server yang dikelola A.C.E. Desain kernel bersifat fail-closed: jika klien hilang, dihentikan, usang, dipalsukan, atau tidak terverifikasi, akses ranked ditolak. Browser tidak pernah menjadi penentu kelayakan. CARI PERTANDINGAN ranked di situs ini sudah tertutup karena alasan itu.",
        "Lapisan kernel yang direncanakan mencakup jabat tangan mode pengguna yang mengikat SteamID 64-bit terverifikasi ke akun A.C.E., permukaan atestasi pengenal perangkat keras (HWID), daftar pantau tanda tangan untuk keluarga cheat yang dikenal, dan rute kelayakan server-ke-server yang dilindungi rahasia bersama. Validasi tanda tangan cheat, penolakan pemeriksaan integritas, atau pengenal perangkat yang dipalsukan ditetapkan untuk menghasilkan perubahan status akun segera menjadi BANNED atau PERM_BANNED dan, jika produk penagihan ada, hilangnya seluruh waktu langganan prabayar tanpa kewajiban pengembalian dana. Klien semacam itu tidak disertakan dengan situs ini. Kartu unduhan Segera Hadir hanyalah tata letak."
      ],
      "stats": [
        {
          "label": "STATUS KERNEL",
          "value": "Dalam pengembangan"
        },
        {
          "label": "ANTREAN RANKED",
          "value": "Fail-closed"
        },
        {
          "label": "PENYIMPANAN HWID",
          "value": "Tidak dikumpulkan di situs ini"
        }
      ]
    },
    "faceScan": {
      "title": "Tautan biometrik Face Scan",
      "paragraphs": [
        "Face Scan adalah lapisan pengikatan identitas masa depan yang ditetapkan, bukan produk kamera di situs ini. Desain yang direncanakan, hanya setelah persetujuan eksplisit dan tinjauan hukum terpisah, akan mengikat templat wajah yang diperiksa keaktifannya ke akun A.C.E. yang sama yang sudah memegang SteamID terverifikasi server. Tujuannya adalah menahan berbagi akun yang digunakan untuk menghindari pembatasan sebelumnya. A.C.E. tidak mengumpulkan gambar wajah, embedding wajah, alamat surel, atau sidik jari perangkat keras hari ini. Postur privasi yang berlaku tetap Kebutuhan Ketat: hanya SteamID 64-bit terverifikasi dan nama tampilan Steam publik.",
        "Jika Face Scan pernah diterapkan, ia tidak akan menggantikan Steam OpenID, tidak akan digunakan untuk menjual iklan perilaku, dan tidak akan membuka antrean ranked dengan sendirinya. Akses ranked tetap memerlukan jalur Anti-Cheat terverifikasi. Sampai tinjauan itu ada, panel Face Scan apa pun di lobi adalah pratinjau desain."
      ]
    },
    "calibration": {
      "title": "Sepuluh tingkat kalibrasi keterampilan",
      "intro": "Kalibrasi Kompetitif menggunakan rumus gaya Elo yang terdokumentasi (versi {version}, faktor K {kFactor}, skala {scale}). Akun baru dimulai di Peringkat 1 (Recruit), langganan FREE, status ACTIVE, dan rating kompetitif {startingRating}. Label kristal di lobi adalah alias visual. Kosmetik berbayar tidak pernah membeli rating, lawan yang lebih mudah, server 128-tick, atau prioritas antrean. Tidak ada produk 128-tick aktif yang dijual.",
      "table": {
        "level": "Level",
        "engineName": "Nama mesin",
        "crystalAlias": "Alias kristal",
        "minRating": "Rating min"
      },
      "divisions": {
        "before": "Divisi I, II, dan III di lobi adalah chip pameran. Mereka hanya mengubah metrik tata letak. Matchmaking langsung per divisi tidak ada. Lihat ",
        "middle": " untuk meja putar 3D dan ",
        "after": " untuk teks kompetisi yang mengikat."
      }
    }
  },
  "loot": {
    "kicker": "Kosmetik · segera hadir",
    "title": "ARSITEKTUR LOOT A.C.E. — DROP SENJATA",
    "lede": "Finishing A.C.E. orisinal, hadir bersama toko. Kosmetik tidak pernah memengaruhi kompetisi.",
    "mockDrop": "Segera hadir",
    "multiplierLabel": "Persyaratan Pengali Win Rate",
    "ladderLabel": "Drop Tangga Mingguan",
    "multiplierValue": "Templat {multiplier}×",
    "ladderValue": "Slot mingguan · segera hadir",
    "checkout": "Pembayaran · segera hadir"
  },
  "communityRail": {
    "kicker": "Umpan · segera hadir",
    "newsTitle": "Berita Tangga Terbaru",
    "newsItems": [
      "Bagan masih kosong — 0 dari 100 tim.",
      "Pencarian ranked tetap tertutup sampai Anti-Cheat ada."
    ],
    "prizesTitle": "Hadiah Skin Harian",
    "prizesBody": "Hadiah dan pembayaran dibuka bersama Musim 1."
  },
  "identityPreview": {
    "badge": "Pratinjau — belum dikonfirmasi",
    "cards": {
      "faceScan": {
        "title": "Face Scan Langsung Terverifikasi",
        "copy": "Keaktifan identitas adalah pemeriksaan penyedia yang direncanakan. Tidak ada data biometrik yang dikumpulkan hari ini."
      },
      "hardwareId": {
        "title": "ID Perangkat Keras Tertaut",
        "copy": "Pengikatan perangkat adalah sinyal integritas yang direncanakan. Tidak ada pengenal perangkat keras yang dikumpulkan hari ini."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Pratinjau",
    "kicker": "Segera hadir",
    "returnHome": "Kembali ke beranda",
    "pages": {
      "support": {
        "title": "Dukungan",
        "body": "Meja dukungan publik kami dibuka bersama beta kompetitif."
      },
      "anti-cheat": {
        "title": "Ikhtisar Anti-Cheat",
        "body": "A.C.E. tidak memiliki produk Anti-Cheat yang berfungsi. Matchmaking ranked tetap tertutup sampai integrasi nyata ada."
      },
      "download-client": {
        "title": "Unduh Klien",
        "body": "Tidak ada klien desktop A.C.E. untuk diunduh. Klien native tidak ada dalam tahap web saat ini."
      },
      "mobile-app": {
        "title": "Aplikasi Seluler",
        "body": "Aplikasi seluler A.C.E. ada di peta jalan."
      },
      "news": {
        "title": "Berita",
        "body": "Ruang berita A.C.E. segera dibuka."
      },
      "about": {
        "title": "Tentang Kami",
        "body": "A.C.E. adalah situs kompetisi Counter-Strike 2 independen dalam pratinjau situs publik. Tidak berafiliasi dengan Valve."
      },
      "advertising": {
        "title": "Periklanan",
        "body": "Pertanyaan kemitraan dan periklanan segera dibuka."
      },
      "developers": {
        "title": "Pengembang",
        "body": "Belum ada program pengembang publik. API kelayakan server di repo ini adalah adaptor internal, bukan SDK mitra."
      },
      "press": {
        "title": "Pers",
        "body": "Kit pers segera hadir."
      },
      "jobs": {
        "title": "Karier",
        "body": "Lowongan akan dicantumkan di sini."
      },
      "terms": {
        "title": "Ketentuan Layanan",
        "body": "Ketentuan Layanan yang berlaku dipublikasikan di /terms. Buku aturan turnamen ada di /rules."
      },
      "privacy": {
        "title": "Kebijakan Privasi",
        "body": "Kebijakan Privasi dipublikasikan di /privacy. Steam OpenID adalah satu-satunya jalur masuk; kata sandi Steam tidak pernah dikumpulkan."
      },
      "eula": {
        "title": "EULA Anti-Cheat",
        "body": "Tidak ada EULA Anti-Cheat karena Anti-Cheat tidak aktif. Ranked tetap tertutup."
      }
    }
  }
};
