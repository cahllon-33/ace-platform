import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  "translationNotice": "Halaman ini adalah terjemahan yang disediakan untuk kemudahan. Jika terjemahan dan teks bahasa Inggris berbeda, teks bahasa Inggris yang berlaku.",
  "terms": {
    "meta": {
      "title": "Ketentuan Layanan",
      "description": "Ketentuan Layanan situs A.C.E. untuk situs kompetisi Counter-Strike 2 ini. Ranked, pembayaran, dan Anti-Cheat belum aktif."
    },
    "kicker": "ACE-LEGAL / KETENTUAN LAYANAN",
    "title": "Ketentuan Layanan",
    "lede": "Ketentuan ini mengatur penggunaan situs publik A.C.E. dan API akun yang terhubung. Durasi pertandingan, map pool, penguncian roster, dan protes dijelaskan dalam Buku Aturan Kompetitif di /rules, yang menjadi bagian dari ketentuan ini.",
    "sections": {
      "operator": {
        "title": "1. Operator dan independensi",
        "paragraphs": [
          "Layanan dioperasikan oleh A.C.E. Competitions Ltd. (nomor registrasi perusahaan akan dipublikasikan). Menggunakan situs berarti Anda menerima Ketentuan ini, Kebijakan Privasi, Kebijakan Cookie, dan Buku Aturan Kompetitif."
        ]
      },
      "eligibility": {
        "title": "2. Kelayakan dan akun",
        "paragraphs": [
          "Anda harus cukup umur untuk menggunakan Steam di negara Anda. Akun hanya dibuat melalui Steam OpenID resmi. Anda tidak boleh berbagi akun untuk menghindari pembatasan. A.C.E. tidak pernah meminta kata sandi Steam."
        ]
      },
      "notActive": {
        "title": "3. Apa yang bukan situs ini",
        "paragraphs": [
          "Matchmaking ranked, server game CS2 langsung, AI Anti-Cheat yang berfungsi, penagihan, dan hadiah belum aktif. Jam lobi dan panel integritas adalah pratinjau kecuali halaman menyatakan lain."
        ]
      },
      "subscriptions": {
        "title": "4. Langganan yang diusulkan",
        "paragraphs": [
          "Plus ($4/bln) dan Premium ($7/bln) adalah harga tampilan. Belum ada pembayaran di situs ini, dan tombol paket menampilkan Segera hadir. Saat penagihan tersedia, aturan pembatalan di /pricing berlaku: langganan bulanan bergulir, batalkan di pengaturan dasbor, bulan parsial tidak dapat dikembalikan."
        ]
      },
      "antiCheat": {
        "title": "5. Klien anti-cheat (belum dirilis)",
        "paragraphs": [
          "Tidak ada klien anti-cheat yang dapat diunduh di situs ini. Aturan kompetisi di /rules tidak mengumpulkan pengenal perangkat keras dan tidak memblokir perangkat. Berbagi akun untuk menghindari pembatasan dilarang."
        ]
      },
      "liability": {
        "title": "6. Batasan tanggung jawab",
        "paragraphs": [
          "Sejauh diizinkan hukum, A.C.E. tidak bertanggung jawab atas hilangnya peringkat, hilangnya kosmetik yang tidak pernah menjadi item nyata, atau gangguan Steam / CS2 pihak ketiga. Hak konsumen wajib di negara Anda tidak dikecualikan jika tidak dapat dilepaskan."
        ]
      },
      "copyright": {
        "title": "7. Hak cipta atas materi orisinal situs",
        "paragraphs": [
          "Teks orisinal, tata letak halaman, emblem, dan grafis yang dibuat untuk situs ini milik A.C.E. Competitions Ltd. Anda tidak boleh menyalin, menerbitkan ulang, atau mengambil materi orisinal itu untuk produk lain tanpa izin tertulis. Jika hukum mengizinkan, A.C.E. dapat menegakkan hak tersebut, termasuk melalui gugatan. Pemberitahuan ini tidak mengajukan perkara, tidak menetapkan ganti rugi, dan tidak menjamin hasil pengadilan.",
          "Counter-Strike 2, Steam, dan nama peta Dust II, Mirage, Inferno, Nuke, Ancient, Anubis, dan Train adalah milik Valve. A.C.E. tidak mengklaimnya. Membuka situs ini tidak membatalkan hak hukum dan tidak menandatangani kontrak."
        ]
      },
      "contact": {
        "title": "8. Kontak",
        "paragraphs": [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Nomor registrasi perusahaan akan dipublikasikan."
        ]
      }
    }
  },
  "privacy": {
    "meta": {
      "title": "Kebijakan Privasi",
      "description": "Kebijakan Privasi A.C.E.: data seperlunya, hanya Steam OpenID, tanpa kata sandi Steam, tanpa penjualan data perilaku."
    },
    "kicker": "ACE-PRIVACY / GDPR / KEBUTUHAN KETAT",
    "title": "Kebijakan Privasi",
    "lede": "Kebijakan Privasi ini menjelaskan apa yang disimpan A.C.E. Competitions Ltd. saat Anda menggunakan situs ini. Terjemahan disediakan untuk kemudahan; versi bahasa Inggris adalah teks acuan. Ini bukan klaim bahwa setiap permukaan produk masa depan sudah ada.",
    "strictNecessity": {
      "title": "Filosofi Kebutuhan Ketat",
      "intro": "Kami mengumpulkan data akun minimum yang diperlukan untuk mengidentifikasi pemain kompetitif dan menghentikan penipuan yang jelas di layanan kami sendiri. Kami tidak mengumpulkan log yang tidak perlu, tidak mengambil inventaris Steam pribadi, dan tidak menjual data perilaku pihak ketiga.",
      "storedIntro": "Saat ini disimpan setelah berhasil masuk dengan Steam OpenID:",
      "stored": [
        {
          "label": "SteamID 64-bit terverifikasi",
          "body": "yang dikembalikan oleh pernyataan OpenID resmi Steam, diperiksa di server sebelum akun A.C.E. dibuat atau diperbarui."
        },
        {
          "label": "Nama tampilan Steam publik",
          "body": "jika kunci Steam Web API dikonfigurasi. Ini adalah string persona, bukan kotak masuk surel."
        },
        {
          "label": "Catatan akun A.C.E.",
          "body": "seperti level peringkat, poin rating, menang/kalah, keanggotaan tim, dan hash token sesi."
        }
      ],
      "notCollected": {
        "before": "Alamat surel dan profil perangkat keras terenkripsi",
        "strong": "tidak dikumpulkan di situs ini hari ini",
        "after": ". Kartu pemindaian wajah dan HWID di lobi adalah pratinjau desain. Jika klien Anti-Cheat atau saluran dukungan di masa depan memerlukan surel atau sidik jari perangkat keras, pengumpulan akan dibatasi untuk pencegahan penipuan, akan diungkapkan di sini lebih dulu, dan tidak akan dijual sebagai data iklan."
      }
    },
    "neverCollect": {
      "title": "Yang tidak pernah kami kumpulkan",
      "items": [
        "Kata sandi Steam. Masuk hanya melalui Steam OpenID / alur resmi Steam.",
        "Nomor kartu pembayaran. Pembayaran belum diterapkan.",
        "Telemetri kernel. Tidak ada klien Anti-Cheat yang disertakan dengan situs ini."
      ]
    },
    "steamBoundary": {
      "title": "Batas embed pihak ketiga dan Steam OpenID",
      "callback": {
        "before": "Masuk Steam meninggalkan A.C.E., melakukan autentikasi di Steam, lalu kembali ke",
        "after": ". Server memverifikasi pernyataan OpenID (termasuk identitas yang diklaim dan parameter yang ditandatangani Steam) sebelum menulis sesi. Kebijakan privasi Steam mengatur data yang disimpan Steam. A.C.E. hanya menyimpan SteamID terverifikasi dan bidang persona publik yang diperlukan untuk mengoperasikan akun."
      },
      "footerLinks": "Ikon jaringan eksternal di footer adalah tautan direktori ke situs publik. Itu bukan akun resmi A.C.E. dan tidak menyematkan widget pelacakan."
    },
    "rights": {
      "title": "Hak gaya GDPR",
      "before": "Jika Anda berada di wilayah dengan hak data pribadi, Anda dapat meminta akses, koreksi, atau penghapusan data akun A.C.E. Anda dengan mengirim surel ke",
      "after": ". Penahanan perangkat keras Anti-Cheat ranked belum aktif; penghapusan akun situs bukan banding VAC CS2."
    },
    "cookies": {
      "title": "Cookie",
      "before": "Lihat",
      "link": "Kebijakan Cookie",
      "after": "dan panel persetujuan. Cookie sesi esensial diperlukan setelah masuk. Kategori opsional tidak digunakan sampai pelacak benar-benar ditambahkan."
    },
    "controller": {
      "title": "Pengendali",
      "body": "A.C.E. Competitions Ltd. Nomor registrasi perusahaan akan dipublikasikan. Kontak: support@ace-platform.gg."
    }
  },
  "cookiePolicy": {
    "meta": {
      "title": "Kebijakan Cookie",
      "description": "Audit privasi cookie dan telemetri A.C.E. Hanya cookie sesi esensial kecuali Anda memilih kategori opsional yang dicadangkan."
    },
    "kicker": "ACE-PRIVACY / COOKIE / AUDIT TELEMETRI",
    "title": "Kebijakan Cookie",
    "lede": "Halaman ini adalah audit privasi telemetri untuk ace-platform.gg. Ini menjelaskan cookie yang benar-benar digunakan situs ini, kategori yang dicadangkan untuk nanti, dan apa yang tidak dikumpulkan.",
    "audit": {
      "title": "Audit telemetri 100% (build saat ini)",
      "body": "A.C.E. tidak menjalankan piksel iklan, Google Analytics, Meta Pixel, SDK sidik jari, atau pelacak perilaku pihak ketiga lainnya di situs publik ini. “Pelacak Analitik” dan “Pelacak Pemasaran” opsional di panel persetujuan hanyalah kategori. Mencentangnya tidak memuat skrip hari ini. Jika pelacak ditambahkan nanti, ia akan membaca preferensi tersimpan terlebih dahulu dan tetap nonaktif kecuali Anda menyetujuinya."
    },
    "essential": {
      "title": "Cookie esensial [Wajib / Terkunci]",
      "session": {
        "label": "Cookie sesi",
        "body": "— hanya disetel setelah callback Steam OpenID terverifikasi. HttpOnly, tidak dapat dibaca JavaScript halaman, digunakan agar Anda tetap masuk di A.C.E."
      },
      "necessity": "Cookie ini sangat diperlukan untuk mengoperasikan akun terautentikasi. Ini bukan ID iklan."
    },
    "analytics": {
      "title": "Pelacak Analitik [Opsional]",
      "before": "Dicadangkan. Tidak ada vendor analitik produk yang dikonfigurasi. Pilihan Anda disimpan secara lokal di",
      "after": "agar metrik penggunaan pihak pertama di masa depan dapat menghormatinya."
    },
    "marketing": {
      "title": "Pelacak Pemasaran [Opsional]",
      "body": "Dicadangkan. A.C.E. tidak menjual, menyewakan, atau memperantarai profil perilaku. Tidak ada pengelola tag pemasaran di situs ini."
    },
    "change": {
      "title": "Cara mengubah pilihan Anda",
      "body": "Gunakan Pengaturan Cookie di footer, atau hapus data situs di browser Anda. Menolak kategori opsional tidak pernah memblokir masuk Steam."
    }
  }
};
