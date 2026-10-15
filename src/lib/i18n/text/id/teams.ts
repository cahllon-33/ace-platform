import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "Manajemen Skuad A.C.E.",
    "description": "Ruang kerja skuad 5v5 Anda. Undangan memerlukan sesi Steam terverifikasi; pemeriksaan anti-cheat hadir bersama A.C.E Shield."
  },
  "hero": {
    "kicker": "TIM",
    "title": "Squads",
    "lede": "Lima kursi terbuka berjajar. Klan disimpan hanya setelah masuk Steam dan tim dibuat."
  },
  "gate": {
    "kickerPremium": "Catatan klan setelah memilih paket",
    "kickerDefault": "Catatan klan",
    "title": "Apakah Anda tim beranggotakan lima?",
    "intro": "Kursi 1 adalah pemain yang masuk dengan Steam. Kursi 2 sampai 5 harus sudah memiliki akun A.C.E. Menyimpan klan tidak menagih $7, tidak mengirim surel, dan tidak menempatkan klan di papan 100 tim.",
    "yes": "Ya, lima pemain",
    "no": "Tidak, biarkan kursi terbuka",
    "seatsOpen": "Lima kursi tetap terbuka. Tidak ada yang disimpan.",
    "connectSteam": "Hubungkan Steam dulu. Tombol kembali ke halaman ini. A.C.E. tidak pernah meminta kata sandi Steam.",
    "alreadyMember": "{name} sudah tergabung di {team}. Klan kedua tidak dibuat dari formulir ini.",
    "thisAccount": "Akun ini",
    "acceptTerms": "Terima ketentuan sebelum menyimpan klan.",
    "notStored": "Klan tidak disimpan.",
    "clanName": "Nama klan",
    "captainSeat": "Kursi 1, kapten: {name}",
    "signedInSteam": "Akun Steam yang masuk",
    "seatLabel": "SteamID atau ID akun A.C.E. kursi {seat}",
    "submit": "Simpan klan lima pemain",
    "saved": "Nama klan disimpan dan empat undangan tertunda. Pemain tersebut tidak masuk roster sampai mereka menerima. Ini bukan kursi di papan 100 tim. Tidak ada yang ditagih."
  },
  "squadDesk": {
    "kicker": "Meja skuad",
    "title": "Pertanyaan dari aturan tertulis",
    "intro": "Meja ini hanya membaca fakta yang dipublikasikan di halaman ini. Ia tidak mendeteksi cheat, membuka pertandingan, atau mengubah akun.",
    "questionLabel": "Pertanyaan",
    "placeholder": "Tanyakan tentang lima kursi, paket, atau dukungan",
    "ask": "Tanya",
    "fallback": "Meja ini hanya menjawab dari aturan tertulis di halaman ini: paket, lima kursi, Steam OpenID, dan dukungan.",
    "facts": {
      "email": "Tidak ada email yang dikirim. Tanda terima paket tetap di situs ini.",
      "charge": "Premium seharga $7 per bulan. Segera hadir: belum ada pembayaran, jadi tidak ada yang ditagih.",
      "board": "Klan tersimpan adalah catatan roster. Klan tidak ditempatkan di papan 100 tim. Papan itu masih menunjukkan 0 terdaftar sampai musim dibuka.",
      "steam": "Masuk menggunakan Steam OpenID resmi. A.C.E. tidak pernah meminta kata sandi Steam. Dari halaman ini, Steam kembali ke sini.",
      "roster": "Kursi 1 adalah kapten yang masuk. Kursi 2 sampai 5 harus sudah memiliki akun A.C.E. Undangan tetap tertunda sampai setiap pemain menerima.",
      "badge": "Lencana kursi menjadi pemeriksaan A.C.E Shield langsung setelah anti-cheat diluncurkan.",
      "support": "Buka Dukungan atau Kontak di situs ini. Perintah dukungan tidak membuka tiket, dan teks yang diketik di Kontak tidak dikirim.",
      "rating": "Rating baru dimulai dari 1.200. Halaman ini tidak menjual rating, membuka antrean, menghubungkan server CS2, atau memberikan hadiah."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry Fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Support"
    },
    "rankLabel": "Peringkat {level}",
    "noAgents": "Belum ada pemain tanpa tim yang tersimpan.",
    "notice": "Undangan hanya terkirim dari kapten yang masuk. Lencana di kursi bukan pemeriksaan anti-cheat langsung."
  },
  "tournaments": {
    "meta": {
      "title": "Kejuaraan A.C.E. — Knockout Elite 100 Tim",
      "description": "Knockout 100 tim. Klik klan untuk membuka rosternya, lalu setiap profil pemain. Pendaftaran segera dibuka."
    },
    "intro": {
      "title": "KEJUARAAN A.C.E. — KNOCKOUT ELITE 100 TIM",
      "lede": "Bidang yang dipublikasikan adalah knockout 100 tim. Grafik di bawah adalah tata letak itu. Mengklik klan membuka laci roster. Pendaftaran 0 dari 100. Tidak ada hadiah uang yang diiklankan atau didanai.",
      "formatValue": "Matriks Bagan 100 Tim",
      "briefTitle": "Ringkasan Operasi 100 Tim",
      "briefBody": "Satu tata letak kompetitif mencakup seluruh bidang 100 tim. Saat pendaftaran dibuka, 28 klan pertama yang diterima mendapat bye Babak 1 dan maju ke Babak 2. 72 klan lainnya bermain di Babak 1. Nama di slot kosong adalah placeholder sampai klan mendaftar. Buku aturan lengkap ada di bawah pohon. Lobi pertandingan dibuka bersama beta kompetitif, dan hadiah dikonfirmasi per acara."
    },
    "timeline": {
      "ariaLabel": "Linimasa peluncuran turnamen",
      "kicker": "PETA JALAN KEJUARAAN",
      "title": "LINIMASA PELUNCURAN TURNAMEN",
      "stageLabel": "Tahap {id}",
      "stages": {
        "registrations": {
          "title": "Pendaftaran Terbuka",
          "state": "DENYUT PRATINJAU"
        },
        "calibration": {
          "title": "Bagan Kalibrasi Regional",
          "state": "TERKUNCI"
        },
        "quarterFinals": {
          "title": "Perempat Final Elite Pro",
          "state": "TERKUNCI"
        },
        "finals": {
          "title": "Grand Apex Finals",
          "state": "TERKUNCI"
        }
      },
      "disclaimer": "Tahap 01 dibuka pertama saat pendaftaran dimulai. Tahap 02–04 menyusul. Kumpulan hadiah dikonfirmasi di halaman acara setelah diumumkan."
    },
    "bracket": {
      "kicker": "Knockout 100 tim · segera hadir",
      "title": "Matriks Bagan 100 Tim",
      "statusUnavailable": "Pendaftaran segera dibuka. Bagan menampilkan klan pratinjau sampai saat itu.",
      "statusEmpty": "Pendaftaran segera dibuka. Sampai saat itu, bagan menampilkan klan pratinjau.",
      "statusStored": "{count} klan terdaftar ditempatkan lebih dulu. Slot tersisa menampilkan klan pratinjau. Babak selanjutnya terisi saat pertandingan dicatat.",
      "openSlot": "Slot terbuka",
      "openCompetitorSlot": "Slot peserta terbuka",
      "openRoster": "Buka roster {name}",
      "bye": "👑 [BYE - DIUNGGULKAN KE BABAK 2]",
      "championStage": "TAHAP JUARA",
      "leftWing": "Sayap kiri",
      "rightWing": "Sayap kanan",
      "emptySlotNotice": "Slot peserta ini kosong. Belum ada klan yang tersimpan.",
      "grandFinalNotice": "Grand final tetap terbuka sampai kedua semifinal tercatat.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "Tutup profil tim",
      "kicker": "Profil kejuaraan · pratinjau",
      "matchesPlayed": "Pertandingan dimainkan",
      "winRate": "Win-rate gabungan",
      "streak": "Rentetan turnamen aktif",
      "rosterHeading": "Matriks roster 5 pemain",
      "openSeat": "Kursi terbuka {seat}",
      "noPlayer": "Tidak ada pemain tersimpan",
      "previous": "Klan sebelumnya",
      "count": "Klan {index} dari {total}",
      "next": "Klan berikutnya",
      "close": "Tutup profil",
      "disclosure": "Setup dan inventaris pemain muncul di sini setelah pemain memilih untuk membagikannya. A.C.E. tidak mengumpulkan data perangkat keras."
    },
    "player": {
      "level": "LVL {level} · RP {rating}",
      "record": "M–K {wins}–{losses}",
      "kdNotStored": "K/D tidak tersimpan",
      "openProfileAria": "Buka profil {name}",
      "openProfile": "Buka profil",
      "badge": "SIAP / PATUH ANTI-CHEAT",
      "badgeNote": "Pemeriksaan A.C.E Shield · segera hadir",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Mouse",
        "dpi": "DPI",
        "keyboard": "Keyboard",
        "monitor": "Monitor",
        "headset": "Headset"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · tidak dibagikan",
    "gpu": "GPU · tidak dibagikan",
    "mouse": "Mouse · tidak dibagikan",
    "dpi": "DPI · tidak dibagikan",
    "keyboard": "Tidak dibagikan",
    "monitor": "Refresh rate · tidak dibagikan",
    "headset": "Tidak dibagikan"
  },
  "profileDisclosure": "A.C.E. tidak menyimpan inventaris perangkat keras dan tidak menjalankan klien anti-cheat. Grafik tren performa dan matriks pertempuran memerlukan sesi A.C.E. Plus atau Premium. Tautan profil Steam yang diketik di halaman ini tidak disimpan dan bukan handle resmi.",
  "errors": {
    "signInRequired": "Harus masuk.",
    "nameLength": "Nama tim harus antara 2 dan 32 karakter.",
    "alreadyCaptain": "Akun ini sudah menjadi kapten tim.",
    "nameTaken": "Tim dengan nama itu sudah ada.",
    "idRequired": "SteamID atau ID akun A.C.E. diperlukan.",
    "noAccountForToken": "Tidak ada akun A.C.E. untuk SteamID atau ID akun itu.",
    "clanNeedsFour": "Klan lima pemain memerlukan kapten yang masuk ditambah empat SteamID.",
    "seatNeedsId": "Masing-masing dari empat kursi memerlukan SteamID atau ID akun A.C.E.",
    "seatsDistinct": "Setiap kursi memerlukan pemain yang berbeda.",
    "captainHoldsSeat": "Kapten sudah menempati kursi 1. Gunakan empat pemain lain.",
    "fewerThanFour": "ID tersebut milik kurang dari empat akun.",
    "selfInvite": "Kapten tidak dapat mengundang akunnya sendiri.",
    "captainOnly": "Hanya kapten yang ditunjuk yang dapat mengirim undangan.",
    "rosterLimit": "Roster CS2 terdiri dari lima pemain termasuk kapten.",
    "alreadyOnRoster": "Pemain itu sudah ada di roster.",
    "noAccountForId": "Tidak ada akun A.C.E. untuk ID itu.",
    "inviteNotFound": "Undangan tidak ditemukan.",
    "inviteNotPending": "Undangan ini tidak lagi tertunda.",
    "rosterFull": "Roster sudah penuh.",
    "createFailed": "Tidak dapat membuat tim.",
    "inviteFailed": "Undangan gagal.",
    "updateInviteFailed": "Tidak dapat memperbarui undangan."
  }
};
