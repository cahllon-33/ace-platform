import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "Terautentikasi",
    "title": "Command Deck",
    "lede": "Masuk melalui Steam OpenID. Sesi disimpan di cookie HttpOnly, bukan localStorage. Pencarian ranked tetap tertutup sampai Anti-Cheat nyata ada.",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "Status akun",
      "subscription": "Langganan",
      "rank": "Peringkat A.C.E.",
      "ratingPoints": "Poin rating",
      "wins": "Menang",
      "losses": "Kalah",
      "accountId": "ID akun internal"
    },
    "accountStatuses": {
      "ACTIVE": "Aktif",
      "SUSPENDED": "Ditangguhkan",
      "BANNED": "Diblokir",
      "TEMP_BANNED": "Diblokir sementara",
      "PERM_BANNED": "Diblokir permanen",
      "UNDER_REVIEW": "Sedang ditinjau"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "Kapten",
      "PLAYER": "Pemain"
    },
    "settings": {
      "title": "PROFIL PENGATURAN DASBOR",
      "billingNotLive": "Setiap akun berada di Free sampai pembayaran tersedia.",
      "cancelReason": "Tidak ada langganan tertagih untuk dibatalkan. Pembayaran belum diterapkan.",
      "cancelButton": "Batalkan langganan"
    },
    "rankedReason": "Matchmaking ranked ditolak sampai integrasi Anti-Cheat terverifikasi ada.",
    "rankedButton": "Cari pertandingan ranked",
    "roster": {
      "title": "Roster 5v5",
      "body": "Satu kapten. Empat undangan. Kapten mengundang ID akun A.C.E. lain, yang dibuat hanya setelah login Steam terverifikasi."
    },
    "pendingInvites": "Undangan tertunda"
  },
  "forms": {
    "requestFailed": "Permintaan gagal.",
    "createTeam": {
      "acceptRequired": "Terima Ketentuan Layanan, EULA Anti-Cheat, dan Kebijakan Privasi untuk melanjutkan.",
      "failed": "Tidak dapat membuat tim.",
      "nameLabel": "Nama tim 5v5 baru",
      "submitAria": "Dirikan tim 5v5 baru",
      "submit": "Dirikan tim"
    },
    "invite": {
      "failed": "Undangan gagal.",
      "label": "Undang free agent melalui SteamID atau ID akun A.C.E.",
      "submitAria": "Kirim undangan tim",
      "submit": "Kirim undangan"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "Profil pemain",
      "title": "{name} · profil A.C.E.",
      "description": "Dosir pemain A.C.E. Sesi Plus dan Premium membuka grafik tren telemetri."
    },
    "kicker": "Identitas pemain",
    "bannerPlaceholder": "Banner profil · segera hadir",
    "levelBadge": "LEVEL {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "Level roster {level}.",
    "trend": {
      "title": "Tren performa rating kompetitif",
      "note": "Poin rating di sepanjang log riwayat pertandingan berturut-turut."
    },
    "combat": {
      "title": "Matriks data pertempuran terperinci",
      "kills": "Total Kill",
      "deaths": "Total Kematian",
      "kd": "K/D Terhitung",
      "headshots": "Total Headshot",
      "headshotPct": "Rentang % Headshot",
      "knifeKills": "Kill Pisau Khusus"
    },
    "weapon": {
      "title": "Spesialisasi senjata khas",
      "note": "Platform senjata terkalibrasi utama",
      "accuracy": "Rating Akurasi",
      "kills": "Total Kill Senjata"
    },
    "gear": {
      "title": "Spesifikasi desktop",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "Refresh Rate Monitor (Hz)",
      "mouse": "Model Mouse",
      "dpi": "Pengaturan DPI Aktif"
    },
    "networksTitle": "Tautan profil Steam",
    "back": "Kembali ke roster klan"
  },
  "networks": {
    "note": "Tautan yang diketik di sini tetap di browser ini dan tidak disimpan. A.C.E. tidak pernah meminta kata sandi Steam.",
    "labels": {
      "steam": "Profil Steam"
    },
    "open": "Buka {label} >"
  },
  "ratingTrend": {
    "chartAria": "Tren performa rating kompetitif",
    "pointAria": "Pertandingan {match}: rating {rating}",
    "axisLabel": "M{match}",
    "idle": "Arahkan ke node untuk memeriksa log rating.",
    "readout": "Pertandingan {match} · rating {rating}"
  },
  "loginError": {
    "meta": {
      "title": "Galat masuk"
    },
    "title": "Masuk Steam tidak selesai",
    "notConfigured": "Steam OpenID belum dikonfigurasi di server ini. A.C.E. tidak pernah meminta kata sandi Steam.",
    "unavailable": "Steam tidak menjawab permintaan verifikasi. Coba lagi sebentar lagi. A.C.E. tidak pernah meminta kata sandi Steam.",
    "unverified": "Callback OpenID tidak dapat diverifikasi di server. A.C.E. tidak pernah meminta kata sandi Steam.",
    "returnHome": "Kembali ke beranda"
  }
};
