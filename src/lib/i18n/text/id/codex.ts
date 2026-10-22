import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Kodeks Kalibrasi",
    "description": "Peringkat A.C.E dijelaskan. Setiap pertanyaan membuka jawaban lengkap tentang Rating Points dan aturan untuk peringkat itu. Kodeks ini tidak mencatat pertandingan.",
    "articleTitle": "{title} — Kodeks Kalibrasi"
  },
  "groups": {
    "ladder": {
      "title": "Tangga",
      "kicker": "Cara membaca peringkat"
    },
    "points": {
      "title": "Rating Points",
      "kicker": "Satu angka yang disimpan"
    },
    "ranks": {
      "title": "Setiap peringkat",
      "kicker": "Aturan untuk tanda itu"
    },
    "desk": {
      "title": "Meja pertandingan",
      "kicker": "Apa yang bisa dan tidak bisa dilakukan meja"
    }
  },
  "index": {
    "title": "Kodeks Kalibrasi",
    "lede": "Sepuluh peringkat. Satu angka yang disimpan. Buka pertanyaan mana pun untuk jawaban lengkap. Meja pertandingan berlanjut di halaman berikutnya.",
    "status": "Kodeks ini menjelaskan tangga tertulis. Kodeks ini tidak mencatat pertandingan dan tidak mengubah rating yang disimpan.",
    "searchLabel": "Cari di kodeks",
    "searchPlaceholder": "Coba 1950, Recruit, atau seri",
    "empty": "Tidak ada entri yang cocok dengan pencarian itu.",
    "columnLabel": "Kolom A.C.E {n}",
    "pagerLabel": "Halaman kodeks",
    "first": "Pertama",
    "previous": "Sebelumnya",
    "next": "Berikutnya",
    "last": "Terakhir",
    "pageOf": "Halaman {n} dari {m}"
  },
  "article": {
    "breadcrumb": "A.C.E · Kodeks Kalibrasi",
    "status": "Halaman ini menjelaskan tangga tertulis. Halaman ini tidak mencatat pertandingan dan tidak mengubah rating yang disimpan.",
    "emblemAlt": "Lambang {name}, peringkat {level}",
    "emblemCaption": "Peringkat {level} · {name} · {crystal}",
    "examples": {
      "heading": "Contoh perhitungan dari mesin",
      "intro": "Setiap baris memanggil fungsi Rating Point yang sama dengan yang dipakai tangga. Input-nya contoh. Tidak disimpan ke akun.",
      "columns": {
        "yourPoints": "Poin kamu",
        "otherSide": "Pihak lawan",
        "result": "Hasil",
        "storedAfter": "Disimpan setelah",
        "change": "Perubahan"
      },
      "results": {
        "win": "Menang",
        "loss": "Kalah",
        "draw": "Seri"
      }
    },
    "turnLabel": "Lanjutkan membaca kodeks",
    "previous": "Sebelumnya",
    "next": "Berikutnya",
    "alsoIn": "Juga di A.C.E",
    "backToBoard": "Kembali ke papan peringkat"
  },
  "rankArticle": {
    "title": "{name} — Peringkat {level}",
    "band": {
      "heading": "Rentang",
      "range": "{name} adalah peringkat {level}. Label kristal pada lambang adalah {crystal}. Rating tersimpan dari {from} sampai {to} memakai peringkat ini."
    },
    "code": {
      "heading": "Aturan peringkat",
      "hold": "Tahan. Akun memakai {name} selama Rating Points yang tersimpan berada di rentang ini. Peringkat dibaca dari angka. Tidak dipilih dari menu.",
      "gateNext": "Gerbang. Peringkat berikutnya terbuka di {next} Rating Points.",
      "gateLast": "Gerbang. Tidak ada peringkat berikutnya. Rentang berakhir di 3.000 Rating Points.",
      "record": "Catatan. Peringkat hanya berubah ketika hasil yang tercatat mengubah Rating Points. Membuka halaman ini tidak mencatat hasil.",
      "emblem": "Lambang. Gambar menandai peringkat. Pembelian, pratinjau skin, atau kosmetik tidak menggeser batas bawah."
    },
    "emblem": {
      "heading": "Untuk apa lambang ini",
      "material": "Studi material untuk tanda ini: {material}. Baris itu menggambarkan karya seni. Bukan statistik dan bukan syarat.",
      "sample": "Angka win-rate di samping lambang ini pada papan peringkat adalah chip contoh. Tidak harus dicapai sebelum peringkat bisa dipakai."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit adalah pelat masuk. Akun baru tidak lagi mulai di sini: akun baru mulai dengan 1.200 Rating Points di Vanguard. Recruit hanya dicapai dengan kehilangan poin.",
      "detail": "Gerbang Operative adalah 1.100. Tabel tangga membuka Recruit di 0, tetapi mesin tidak akan menyimpan rating di bawah 100. Antara 100 dan 1.099 akun tetap Recruit."
    },
    "rank-2-operative": {
      "stance": "Operative berada tepat di bawah angka awal. Akun yang turun di bawah 1.200 tiba di sini sebelum mencapai Recruit.",
      "detail": "Rentangnya selebar seratus poin. Berakhir di 1.199. Vanguard terbuka di 1.200."
    },
    "rank-3-vanguard": {
      "stance": "Vanguard adalah tempat setiap akun baru mulai, dengan 1.200 Rating Points. Naik dari sini adalah langkah nyata pertama di tangga.",
      "detail": "Rentang dari 1.200 sampai 1.299. Specialist terbuka di 1.300."
    },
    "rank-4-specialist": {
      "stance": "Specialist adalah peringkat keahlian. Label kristal lambang bertuliskan GOLD. Nama resmi yang disimpan di tangga adalah Specialist. Keduanya tingkat yang sama.",
      "detail": "Rentang dari 1.300 sampai 1.399. Veteran terbuka di 1.400."
    },
    "rank-5-veteran": {
      "stance": "Veteran adalah tanda tengah. Empat peringkat di bawah tingkat ini, dan lima di atasnya.",
      "detail": "Rentang dari 1.400 sampai 1.499. Elite terbuka di 1.500. Label kristal lambang ini adalah PLATINUM."
    },
    "rank-6-elite": {
      "stance": "Elite adalah nama mesin. DIAMOND adalah label kristal pada lambang yang sama. Tidak ada yang merupakan rating kedua.",
      "detail": "Rentang dari 1.500 sampai 1.599. Master terbuka di 1.600."
    },
    "rank-7-master": {
      "stance": "Master adalah peringkat pertama yang label kristal dan nama resminya memakai kata yang sama. Batas bawahnya 1.600.",
      "detail": "Rentang dari 1.600 sampai 1.699. Grandmaster terbuka di 1.700."
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster adalah anak tangga safir. Batas bawahnya 1.700, tetap seratus poin lebarnya, dengan Sovereign menunggu di 1.800.",
      "detail": "Rentang dari 1.700 sampai 1.799. Tidak ada di halaman ini yang memakai pertandingan untuk melewatinya."
    },
    "rank-9-sovereign": {
      "stance": "Sovereign adalah anak tangga lebar sebelum Legend. Label kristalnya IMMORTAL. Nama resminya Sovereign.",
      "detail": "Rentang dari 1.800 sampai 1.949. Itu 150 poin, bukan 100. 1.949 masih memakai Sovereign. Legend terbuka di 1.950."
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E Legend adalah tanda terakhir. Label kristalnya ACE ELITE. Nama resminya A.C.E Legend.",
      "detail": "Rentang terbuka di 1.950 dan berakhir di batas atas mesin, 3.000. Tidak ada peringkat kesebelas. Rating tersimpan tidak bisa naik melewati 3.000."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "Apa itu peringkat A.C.E.",
      "lede": "Peringkat adalah tanda yang memuat Rating Points tersimpanmu. Sepuluh tanda mencakup seluruh tangga, dari Recruit sampai A.C.E Legend.",
      "sections": [
        {
          "heading": "Satu angka, satu tanda",
          "paragraphs": [
            "Akun menyimpan rating kompetitif. Tangga membaca angka itu dan mengembalikan peringkat tertinggi yang batas bawahnya sudah dicapai. Kamu tidak memegang dua peringkat sekaligus.",
            "Recruit adalah peringkat 1. A.C.E Legend adalah peringkat 10. Nama resmi adalah nama di tangga. Kata yang lebih pendek pada lambang adalah label kristal untuk peringkat yang sama.",
            "Kodeks ini menjelaskan tangga tertulis. Kodeks ini tidak mencatat pertandingan dan tidak mengubah rating yang disimpan."
          ]
        },
        {
          "heading": "Letak batas bawah",
          "paragraphs": [
            "Recruit mencakup awal tangga. Operative terbuka di 1.100. Dari Vanguard sampai Grandmaster, setiap batas bawah baru 100 poin lebih tinggi: 1.200, 1.300, 1.400, 1.500, 1.600, lalu 1.700.",
            "Sovereign terbuka di 1.800 dan menahan akun sampai 1.949. A.C.E Legend terbuka di 1.950. Batas atas mesin adalah 3.000, jadi Legend adalah rentang terpanjang."
          ]
        },
        {
          "heading": "Apa yang bukan peringkat",
          "paragraphs": [
            "Peringkat bukan batas populasi. Legend adalah batas bawah, bukan daftar seribu akun.",
            "Peringkat bukan hadiah, skin, atau antrean. Situs publik bisa menampilkan tanda. Situs ini tidak menjalankan pertandingan yang menulis tanda baru."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Nama resmi dan nama kristal",
      "lede": "Setiap peringkat punya dua label. Nama resmi ada di tangga. Nama kristal adalah kata yang terukir di lambang.",
      "sections": [
        {
          "heading": "Mengapa keduanya ada",
          "paragraphs": [
            "Mesin dan profil memakai nama resmi: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E Legend.",
            "Lambang juga membawa label kristal: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Label itu karya seni. Tidak menciptakan peringkat kesebelas dan tidak menyimpan angka kedua."
          ]
        },
        {
          "heading": "Di mana keduanya berbeda",
          "paragraphs": [
            "Label kristal Specialist adalah GOLD. Veteran PLATINUM. Elite DIAMOND. Sovereign IMMORTAL. A.C.E Legend ACE ELITE. Dalam setiap kasus batas bawah tetap milik nama resmi.",
            "Master dan Grandmaster memakai kata yang sama di kedua tempat."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "Tiga divisi di papan",
      "lede": "Divisi III, II, dan I adalah alat bantu baca yang dilukis di rentang peringkat. Akun tidak menyimpan divisi.",
      "sections": [
        {
          "heading": "Apa yang disimpan",
          "paragraphs": [
            "Akun yang masuk menyimpan level peringkat dan rating kompetitif. Level peringkat mengikuti rating. Tidak ada kolom divisi di sampingnya.",
            "Di papan peringkat, rentang peringkat yang dipilih dibagi menjadi tiga langkah tampilan agar mata bisa melihat bawah, tengah, dan atas tingkat itu. Divisi III adalah ujung bawah rentang. Divisi I adalah ujung atas."
          ]
        },
        {
          "heading": "Apa itu chip",
          "paragraphs": [
            "Persentase win-rate dan tanda kemajuan pada chip itu adalah contoh. Bukan tangga kedua, dan bukan target yang harus kamu lewati.",
            "Mengganti chip divisi tidak mengubah rating tersimpan. Hanya hasil tercatat yang bisa, dan halaman ini tidak mencatatnya."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Apa yang tidak bisa menggeser peringkat",
      "lede": "Tanda mengikuti Rating Points tersimpan. Semua hal lain di situs membiarkan tanda di tempatnya.",
      "sections": [
        {
          "heading": "Di luar mesin",
          "paragraphs": [
            "Pratinjau skin, kartu toko, label langganan, dan kosmetik tidak menambah Rating Points. Membayar paket bukan peringkat.",
            "Membuka papan peringkat, memutar lambang, atau membaca kodeks ini tidak mencatat pertandingan.",
            "Laporan, catatan dukungan, dan tata letak turnamen tidak menulis ulang rating tersimpan."
          ]
        },
        {
          "heading": "Satu-satunya jalan",
          "paragraphs": [
            "Jalan tertulis adalah hasil pertandingan tercatat yang melewati mesin Rating Point. Tidak ada halaman publik di situs ini yang menulis hasil itu hari ini.",
            "Sampai hasil ada, akun baru tetap di rating awalnya, dan akun lama mempertahankan rating yang sudah tersimpan."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Apa itu Rating Points",
      "lede": "Rating Points adalah angka kompetitif yang disimpan di akun. Peringkat hanyalah rentang tempat angka itu berada.",
      "sections": [
        {
          "heading": "Kolom yang disimpan",
          "paragraphs": [
            "Versi mesin adalah {version}. Akun baru mulai di {startingRating} Rating Points. Angka tersimpan tidak bisa turun di bawah {minRating} dan tidak bisa naik di atas {maxRating}.",
            "Profil dan papan peringkat membaca angka ini saat kamu masuk. Saat kamu tidak masuk, papan menampilkan batas kalibrasi lambang yang kamu pilih. Batas itu contoh, bukan akunmu."
          ]
        },
        {
          "heading": "Apa yang diukur angka ini",
          "paragraphs": [
            "Mesin membandingkan ratingmu dengan rata-rata rating pihak lawan. Mesin tidak menyimpan skor terpisah untuk penghargaan individu, rasio headshot, atau utility. Angka-angka itu bukan bagian dari versi ini.",
            "Angka lebih tinggi berarti tangga memperkirakan kamu lebih sering menang melawan angka lebih rendah. Nama peringkat adalah bacaan publik skala itu."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Di mana akun baru mulai",
      "lede": "Masuk dengan Steam membuat akun dengan 1.200 Rating Points, rank 3, Vanguard, tanpa kemenangan dan tanpa kekalahan.",
      "sections": [
        {
          "heading": "Tanda pembuka",
          "paragraphs": [
            "1.200 adalah batas bawah Vanguard. Operative dan Recruit ada di bawahnya, jadi akun baru mulai di tengah bagian awal tangga, bukan di dasar.",
            "Masuk lagi tidak mengatur ulang rating yang sudah tersimpan. 10 pertandingan pertama yang tercatat adalah penempatan: selama itu rating tidak bisa naik di atas tingkat 5. Codex tidak mengarang catatan menang–kalah."
          ]
        },
        {
          "heading": "Cara melihatnya",
          "paragraphs": [
            "Setelah masuk lewat Steam, dasbor dan papan peringkat bisa menampilkan rating tersimpan. Jika database tidak bisa dijangkau, halaman mengatakannya alih-alih mengarang angka.",
            "Rank awal tetap Vanguard sampai hasil tercatat membawa rating keluar dari rentang 1.200–1.299. Situs ini tidak menulis hasil seperti itu hari ini."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Cara hasil tercatat menggeser Rating Points",
      "lede": "Kemenangan atau kekalahan yang tercatat diukur terhadap rata-rata rating tim lawan. Melawan tim setara, kemenangan bernilai +20 dan kekalahan −20. Aturan lengkapnya ada di halaman Rank.",
      "sections": [
        {
          "heading": "Langkah",
          "paragraphs": [
            "Skor yang diharapkan adalah peluang yang diberikan mesin sebelum pertandingan, hanya berdasarkan dua rating. Dengan rating yang sama peluangnya setengah, jadi kemenangan bernilai 20 Rating Points dan kekalahan mengurangi 15.",
            "Melawan rating lebih tinggi, kemenangan bernilai lebih dari 20 dan kekalahan lebih murah. Melawan rating lebih rendah, sebaliknya. Kemenangan selalu memberi 10 sampai 30 dan kekalahan selalu mengurangi 10 sampai 30. Di tingkat 7–9 kemenangan dan kekalahan dikalikan 0,85 dan di tingkat 10 dikalikan 0,75, jadi puncak bergerak lebih stabil. Rating dijaga di antara 100 dan 3.000.",
            "Pada hasil tim, setiap pemain diukur terhadap rata-rata rating tim lawan. Bonus MVP pertandingan sebesar 2 RP direncanakan saat server mencatat kill; sampai saat itu tidak ada bonus pribadi yang diterapkan."
          ]
        },
        {
          "heading": "Seri",
          "paragraphs": [
            "Seri tidak mengubah apa pun: setiap pemain mempertahankan rating-nya. Meninggalkan atau keluar dari pertandingan menghabiskan dua kali kekalahan normal, minimal 30 RP, apa pun hasilnya.",
            "Tabel di halaman ini adalah mesin yang bekerja dengan input contoh. Baris itu bukan pertandingan tersimpan dan bukan akunmu."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Batas bawah, batas atas, dan peringkat yang dilompati",
      "lede": "Angka tersimpan berhenti di 100 dan 3.000. Peringkat selalu mengikuti angka, jadi peringkat tidak bisa dilompati dengan tombol.",
      "sections": [
        {
          "heading": "Titik henti",
          "paragraphs": [
            "Kalah di 100 Rating Points tetap di 100. Menang di 3.000 tetap di 3.000. Batas tangga Recruit tertulis 0, tetapi angka tersimpan tidak pernah memakai celah di bawah 100.",
            "1.949 adalah Sovereign. 1.950 adalah A.C.E Legend. Tidak ada tanda di antaranya."
          ]
        },
        {
          "heading": "Tidak ada lompatan",
          "paragraphs": [
            "Jika hasil tercatat melompatkan angka dari 1.050 ke 1.260, akun akan memakai Vanguard, karena 1.260 ada di rentang itu. Peringkat di antaranya tidak diantrekan sebagai promosi terpisah. Angka dibaca sekali.",
            "Tidak ada halaman di situs ini yang melakukan lompatan itu. Contoh ini hanya menunjukkan cara tangga membaca angka."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Di mana tautan pertandingan akan muncul",
      "lede": "Tautan pertandingan adalah alamat server game. Situs web ini tidak menerbitkannya.",
      "sections": [
        {
          "heading": "Meja yang bisa kamu buka",
          "paragraphs": [
            "Halaman main menampilkan tata letak sepuluh pemain dan kontrol FIND MATCH. Kontrol itu tetap tertutup. Tidak bisa membuka server Counter-Strike 2 dan tidak memberi alamat kepada siapa pun.",
            "Jumlah orang di situs web bukan jumlah orang di dalam game. Populasi pertandingan adalah 0."
          ]
        },
        {
          "heading": "Di mana tautan akan berada nanti",
          "paragraphs": [
            "Jika server pertandingan ada, alamat dan kata sandinya akan ditampilkan di meja pertandingan setelah sepuluh pemain menerima. Pemain akan bergabung dari Steam. Tidak ada alamat yang disimpan di situs ini, dan tidak ada kata sandi yang dibuat.",
            "Masuk lewat Steam menghubungkan akun. Tidak menjatuhkan pemain ke peta."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Apa itu meja ranked",
      "lede": "Meja ranked adalah tata letak halaman main untuk 5v5. Ini meja tertutup, bukan antrean terbuka.",
      "sections": [
        {
          "heading": "Apa yang digambar",
          "paragraphs": [
            "Dua pihak, masing-masing lima kursi, dan label kapten di kursi pertama. Daftar peta dan baris obrolan di sampingnya bagian dari tata letak yang sama.",
            "Baris keamanan di halaman itu ditandai dengan statusnya. Belum ada yang merupakan pemeriksaan berjalan; lihat /anti-cheat untuk peta jalan."
          ]
        },
        {
          "heading": "Apa yang tidak dilakukan meja",
          "paragraphs": [
            "FIND MATCH tidak mencari lawan. Tidak mengubah Rating Points. Peringkat pada akun tetap angka tersimpan, dibaca oleh tangga di kodeks ini.",
            "Tidak ada antrean puncak terpisah di atas Legend. A.C.E Legend adalah tanda terakhir, dan terbuka di 1.950 Rating Points."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Bantuan dari meja pertandingan",
      "lede": "Dukungan di situs ini adalah meja tertulis. Tidak membuka jalur suara langsung di dalam pertandingan.",
      "sections": [
        {
          "heading": "Apa yang dilakukan halaman dukungan",
          "paragraphs": [
            "Halaman dukungan mencantumkan meja dan menawarkan kontrol tiket. Memilih kontrol itu tidak membuat kasus dan tidak menjangkau orang selama pertandingan, karena tidak ada pertandingan yang berjalan.",
            "Pertanyaan aturan masuk ke kode kompetisi di /rules. Pertanyaan tangga masuk ke kodeks ini."
          ]
        },
        {
          "heading": "Protes, setelah pertandingan ada",
          "paragraphs": [
            "Kode tertulis menyatakan kapten boleh mengajukan protes sebelum peta berikutnya dimulai, menyebut peta, ronde, dan pasal. Situs ini tidak menyimpan demo dan tidak menjalankan server game, jadi pengajuan itu belum punya tempat hari ini.",
            "Skor tata letak bukan pertandingan yang dimainkan. Staf hanya akan menulis hasil seri setelah seri nyata."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "Menunggu sepuluh pemain",
      "lede": "Peta kompetitif membutuhkan sepuluh pemain inti. Meja tidak menahan penantian itu hari ini.",
      "sections": [
        {
          "heading": "Jam tertulis",
          "paragraphs": [
            "Setelah pertandingan punya jadwal mulai yang diumumkan, lima pemain inti di satu pihak wajib hadir 15 menit sebelum mulai. Kalimat itu ada di kode kompetisi. Jam tidak berjalan di situs ini, karena tidak ada pertandingan yang diumumkan.",
            "Nama di halaman main adalah pratinjau. Bukan orang yang duduk dalam antrean."
          ]
        },
        {
          "heading": "Apa yang tidak terjadi saat kamu menonton",
          "paragraphs": [
            "Halaman tidak memesan server, mengirim notifikasi, atau menghitung mundur ke penerimaan. Meninggalkan halaman tidak meninggalkan pertandingan, karena kamu tidak sedang di dalamnya."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "Kapten di meja",
      "lede": "Satu kapten berbicara untuk satu pihak. Peran lobi aktif bersama beta kompetitif.",
      "sections": [
        {
          "heading": "Apa yang ditetapkan kode",
          "paragraphs": [
            "Kapten menangani veto, jeda, dan protes. Pemain inti lain bermain. Pemain cadangan hanya boleh masuk di antara peta.",
            "Pada satu peta, kapten mem-ban satu peta bergantian sampai tersisa satu peta. Pool-nya Ancient, Anubis, Dust II, Inferno, Mirage, Nuke, dan Train. Unggulan lebih tinggi adalah Team A dan memilih ban pertama atau kedua; lempar koin menentukan unggulan yang setara. Tidak ada veto yang terbuka hari ini."
          ]
        },
        {
          "heading": "Jeda",
          "paragraphs": [
            "Jeda hanya berlaku setelah server pertandingan ada. Di sini belum ada. Jatah tertulis per tim di satu peta adalah tiga jeda taktis 30 detik, ditambah satu lagi saat overtime, dan total 10 menit jeda teknis. Teks lengkap ada di /rules.",
            "Di halaman tim, kapten juga keanggotaan yang boleh mengirim undangan roster. Undangan itu terpisah dari lobi pertandingan."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "Saat satu pihak belum siap",
      "lede": "Kode kompetisi menjelaskan forfeit untuk pertandingan yang punya jadwal mulai yang diumumkan. Situs ini tidak menerbitkan forfeit itu.",
      "sections": [
        {
          "heading": "Aturan tertulis",
          "paragraphs": [
            "Lima pemain inti harus siap 15 menit sebelum jadwal mulai. Pihak yang masih kurang 15 menit setelah mulai kalah WO di seri itu, setelah pertandingan ada. Jika kedua pihak absen, keduanya dikeluarkan dan staf menulis slotnya.",
            "Klan yang memulai peta dengan kurang dari lima pemain inti yang memenuhi syarat, dan tidak punya cadangan yang bisa masuk, kalah WO di peta itu."
          ]
        },
        {
          "heading": "Apa yang tidak akan dilakukan situs ini",
          "paragraphs": [
            "Tidak ada di sini yang mengawasi lobi dan menulis forfeit sendiri. Tombol di halaman main tidak bisa menyerahkan peta yang tidak pernah dimuat.",
            "Skor tata letak di bagan turnamen bukan pertandingan yang dimainkan dan bukan forfeit."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "Masuk ke knockout 100 klan",
      "lede": "Halaman turnamen adalah bagan 100 klan. Pendaftaran 0 dari 100. Pendaftaran belum dibuka.",
      "sections": [
        {
          "heading": "Apa yang bisa kamu buka",
          "paragraphs": [
            "Klik klan di bagan untuk membaca rosternya, lalu buka pemain. Nama di slot terbuka adalah pratinjau, bukan entri yang diterima.",
            "Bagan tidak menyiapkan server dan tidak mengirim tautan pertandingan."
          ]
        },
        {
          "heading": "Bye, saat pendaftaran dibuka",
          "paragraphs": [
            "Aturan tertulis untuk pendaftaran mendatang adalah 28 klan pertama yang diterima melewati babak 1. Bye itu bukan hadiah, dan tidak bisa diklaim selama pendaftaran tetap 0 dari 100.",
            "Panjang seri, pool peta, dan protes ada di kode kompetisi di /rules."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Cara roster disusun",
      "lede": "Kapten mengundang pemain yang sudah punya akun A.C.E. Tidak ada tautan berbagi publik, dan kata sandi Steam tidak pernah diminta.",
      "sections": [
        {
          "heading": "Undangan yang ada",
          "paragraphs": [
            "Di halaman tim, kapten yang masuk menempelkan SteamID64 atau ID akun A.C.E. Akun harus sudah terhubung lewat Steam OpenID. Server menulis undangan tertunda saat database menerimanya.",
            "Roster berisi lima pemain, termasuk kapten. Kapten tidak bisa mengundang akunnya sendiri. Pemain yang sudah ada di roster ditolak. Jika database mati, undangan gagal dan tidak ada undangan yang disimpan."
          ]
        },
        {
          "heading": "Apa yang bukan undangan",
          "paragraphs": [
            "Undangan tidak mengirim surat, membuka lobi privat, atau membuat tautan yang bisa kamu posting. Tidak menempatkan klan di knockout.",
            "Kode knockout mengizinkan dua cadangan bernama setelah pendaftaran turnamen ada. Pendaftaran belum dibuka, jadi kursi itu bukan izin yang bisa dipakai hari ini."
          ]
        }
      ]
    }
  }
};
