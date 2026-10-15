import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Kalibrasyon Kodeksi",
    "description": "A.C.E. rütbeleri açıklandı. Her soru, Derece Puanları ve o rütbenin kuralları hakkında tam bir yanıt açar. Kodeks maç sonucu işlemez.",
    "articleTitle": "{title} — Kalibrasyon Kodeksi"
  },
  "groups": {
    "ladder": {
      "title": "Sıralama",
      "kicker": "Bir rütbe nasıl okunur"
    },
    "points": {
      "title": "Derece Puanları",
      "kicker": "Kayıtlı tek sayı"
    },
    "ranks": {
      "title": "Her rütbe",
      "kicker": "O işaretin kuralları"
    },
    "desk": {
      "title": "Maç masası",
      "kicker": "Masanın yapabildikleri ve yapamadıkları"
    }
  },
  "index": {
    "title": "Kalibrasyon Kodeksi",
    "lede": "On rütbe. Kayıtlı tek bir sayı. Tam yanıt için herhangi bir soruyu açın. Maç masası sonraki sayfalarda devam eder.",
    "status": "Bu kodeks yazılı sıralamayı açıklar. Maç sonucu işlemez ve kayıtlı dereceyi değiştirmez.",
    "searchLabel": "Kodekste ara",
    "searchPlaceholder": "1950, Recruit veya beraberlik deneyin",
    "empty": "Bu aramayla eşleşen kayıt yok.",
    "columnLabel": "A.C.E. sütunu {n}",
    "pagerLabel": "Kodeks sayfaları",
    "first": "İlk",
    "previous": "Önceki",
    "next": "Sonraki",
    "last": "Son",
    "pageOf": "Sayfa {n} / {m}"
  },
  "article": {
    "breadcrumb": "A.C.E. · Kalibrasyon Kodeksi",
    "status": "Bu sayfa yazılı sıralamayı açıklar. Maç sonucu işlemez ve kayıtlı dereceyi değiştirmez.",
    "emblemAlt": "{name} amblemi, rütbe {level}",
    "emblemCaption": "Rütbe {level} · {name} · {crystal}",
    "examples": {
      "heading": "Motordan örnek hesaplamalar",
      "intro": "Her satır, sıralamanın kullandığı aynı Derece Puanı işlevini çağırır. Girdiler örnektir. Hiçbir hesaba kaydedilmez.",
      "columns": {
        "yourPoints": "Puanınız",
        "otherSide": "Rakip taraf",
        "result": "Sonuç",
        "storedAfter": "Kayıttan sonra",
        "change": "Değişim"
      },
      "results": {
        "win": "Galibiyet",
        "loss": "Mağlubiyet",
        "draw": "Beraberlik"
      }
    },
    "turnLabel": "Kodeksi okumaya devam et",
    "previous": "Önceki",
    "next": "Sonraki",
    "alsoIn": "A.C.E.'de ayrıca",
    "backToBoard": "Rütbe panosuna dön"
  },
  "rankArticle": {
    "title": "{name} — Rütbe {level}",
    "band": {
      "heading": "Aralık",
      "range": "{name}, {level}. rütbedir. Amblemdeki kristal adı {crystal}. {from} ile {to} arasındaki kayıtlı derece bu rütbeyi taşır."
    },
    "code": {
      "heading": "Rütbe kuralları",
      "hold": "Koruma. Kayıtlı Derece Puanları bu aralıkta kaldıkça hesap {name} rütbesini taşır. Rütbe sayıdan okunur, bir menüden seçilmez.",
      "gateNext": "Eşik. Sonraki rütbe {next} Derece Puanı'nda açılır.",
      "gateLast": "Eşik. Sonraki rütbe yok. Aralık 3.000 Derece Puanı'nda biter.",
      "record": "Kayıt. Rütbe yalnızca kaydedilmiş bir sonuç Derece Puanlarını değiştirdiğinde değişir. Bu sayfayı açmak sonuç kaydetmez.",
      "emblem": "Amblem. Görsel rütbeyi tanımlar. Satın alma, kaplama önizlemesi veya kozmetik tabanı oynatmaz."
    },
    "emblem": {
      "heading": "Amblemin işlevi",
      "material": "Bu işaretin malzeme çalışması: {material}. Bu satır çizimi tanımlar. Bir istatistik veya gereklilik değildir.",
      "sample": "Rütbe panosunda bu amblemin yanında görünen kazanma oranı örnek bir etikettir. Rütbeyi taşımak için ulaşılması gerekmez."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit giriş levhasıdır. Yeni hesaplar artık burada başlamaz: Vanguard'da 1.200 Rating Points ile başlar. Recruit'e yalnızca puan kaybederek inilir.",
      "detail": "Operative eşiği 1.100'dür. Sıralama tablosu Recruit'i 0'dan başlatır, ancak motor 100'ün altında derece kaydetmez. 100 ile 1.099 arasında hesap Recruit kalır."
    },
    "rank-2-operative": {
      "stance": "Operative, başlangıç sayısının hemen altındadır. 1.200'ün altına düşen bir hesap Recruit'e ulaşmadan önce buraya gelir.",
      "detail": "Aralık yüz puan genişliğindedir ve 1.199'da kapanır. Vanguard 1.200'de açılır."
    },
    "rank-3-vanguard": {
      "stance": "Vanguard, her yeni hesabın 1.200 Rating Points ile başladığı yerdir. Buradan yükselmek, merdivende atılan ilk gerçek adımdır.",
      "detail": "Aralık 1.200'den 1.299'a kadardır. Specialist 1.300'de açılır."
    },
    "rank-4-specialist": {
      "stance": "Specialist zanaat rütbesidir. Amblemin kristal adı GOLD'dur. Sıralamayla kaydedilen resmi ad Specialist'tir. İkisi aynı tabandır.",
      "detail": "Aralık 1.300'den 1.399'a kadardır. Veteran 1.400'de açılır."
    },
    "rank-5-veteran": {
      "stance": "Veteran orta işarettir. Bu tabanın altında dört, üstünde beş rütbe vardır.",
      "detail": "Aralık 1.400'den 1.499'a kadardır. Elite 1.500'de açılır. Bu amblemin kristal adı PLATINUM'dur."
    },
    "rank-6-elite": {
      "stance": "Elite motor adıdır. DIAMOND aynı amblemin kristal adıdır. İkisi de ikinci bir derece değildir.",
      "detail": "Aralık 1.500'den 1.599'a kadardır. Master 1.600'de açılır."
    },
    "rank-7-master": {
      "stance": "Master, kristal adı ile resmi adın aynı kelime olduğu ilk rütbedir. Taban 1.600'dür.",
      "detail": "Aralık 1.600'den 1.699'a kadardır. Grandmaster 1.700'de açılır."
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster safir basamaktır. Taban 1.700'dür, hâlâ yüz puan genişliğindedir ve Sovereign 1.800'de bekler.",
      "detail": "Aralık 1.700'den 1.799'a kadardır. Bu sayfadaki hiçbir şey onu geçmek için bir maç harcamaz."
    },
    "rank-9-sovereign": {
      "stance": "Sovereign, Legend'dan önceki geniş basamaktır. Kristal adı IMMORTAL, resmi adı Sovereign'dır.",
      "detail": "Aralık 1.800'den 1.949'a kadardır. Bu 100 değil, 150 puandır. 1.949 hâlâ Sovereign'dır. Legend 1.950'de açılır."
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E. Legend son işarettir. Kristal adı ACE ELITE, resmi adı A.C.E. Legend'dır.",
      "detail": "Aralık 1.950'de açılır ve motorun tavanı olan 3.000'de biter. On birinci rütbe yoktur. Kayıtlı derece 3.000'i aşamaz."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "A.C.E. rütbesi nedir",
      "lede": "Rütbe, kayıtlı Derece Puanlarınızı içeren işarettir. On işaret, Recruit'ten A.C.E. Legend'a kadar tüm sıralamayı kapsar.",
      "sections": [
        {
          "heading": "Tek sayı, tek işaret",
          "paragraphs": [
            "Hesap bir rekabet derecesi saklar. Sıralama bu sayıyı okur ve sayının tabanına ulaştığı en yüksek rütbeyi döndürür. Aynı anda iki rütbeniz olamaz.",
            "Recruit 1. rütbedir. A.C.E. Legend 10. rütbedir. Resmi ad, sıralamadaki addır. Amblemdeki daha kısa kelime aynı rütbenin kristal adıdır.",
            "Bu kodeks yazılı sıralamayı açıklar. Maç sonucu işlemez ve kayıtlı dereceyi değiştirmez."
          ]
        },
        {
          "heading": "Tabanlar nasıl dizilir",
          "paragraphs": [
            "Recruit sıralamanın başlangıcını kapsar. Operative 1.100'de açılır. Vanguard'dan Grandmaster'a kadar her yeni taban 100 puan daha yüksektir: 1.200, 1.300, 1.400, 1.500, 1.600, ardından 1.700.",
            "Sovereign 1.800'de açılır ve hesabı 1.949'a kadar tutar. A.C.E. Legend 1.950'de açılır. Motor tavanı 3.000'dir, bu yüzden Legend en uzun aralıktır."
          ]
        },
        {
          "heading": "Rütbe ne değildir",
          "paragraphs": [
            "Rütbe bir nüfus sınırı değildir. Legend bir tabandır, bin hesaplık bir liste değildir.",
            "Rütbe bir ödül, kaplama veya sıra değildir. Herkese açık site işareti gösterebilir. Yeni bir işaret yazan maç çalıştırmaz."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Resmi ad ve kristal adı",
      "lede": "Her rütbenin iki etiketi vardır. Resmi ad sıralamadır. Kristal adı amblemin üzerine kazınmış kelimedir.",
      "sections": [
        {
          "heading": "Neden ikisi de var",
          "paragraphs": [
            "Motor ve profil resmi adı kullanır: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Amblem ayrıca bir kristal adı taşır: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Bu ad çizimdir. On birinci bir rütbe yaratmaz ve ikinci bir sayı saklamaz."
          ]
        },
        {
          "heading": "Nerede ayrışırlar",
          "paragraphs": [
            "Specialist'in kristal adı GOLD'dur. Veteran'ınki PLATINUM, Elite'inki DIAMOND, Sovereign'ınki IMMORTAL, A.C.E. Legend'ınki ACE ELITE'tir. Her durumda taban yine resmi ada aittir.",
            "Master ve Grandmaster her iki yerde de aynı kelimeyi kullanır."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "Panodaki üç lig",
      "lede": "III, II ve I. ligler, bir rütbenin aralığı üzerine çizilmiş bir okuma yardımıdır. Hesap lig saklamaz.",
      "sections": [
        {
          "heading": "Neler saklanır",
          "paragraphs": [
            "Oturum açmış bir hesap bir rütbe seviyesi ve bir rekabet derecesi saklar. Rütbe seviyesi dereceyi izler. Yanlarında lig sütunu yoktur.",
            "Rütbe panosunda, seçili rütbenin aralığı üç gösterim basamağına bölünür; böylece göz o tabanın altını, ortasını ve üstünü görebilir. III. lig aralığın alt ucu, I. lig üst ucudur."
          ]
        },
        {
          "heading": "Etiketler nedir",
          "paragraphs": [
            "Bu etiketlerdeki kazanma oranları ve ilerleme işaretleri örnektir. İkinci bir sıralama değildir ve aşmanız gereken bir hedef değildir.",
            "Lig etiketini değiştirmek kayıtlı dereceyi değiştirmez. Bunu yalnızca kaydedilmiş bir sonuç yapabilir ve bu sayfa sonuç kaydetmez."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Rütbeyi neler oynatamaz",
      "lede": "İşaret kayıtlı Derece Puanlarını izler. Sitedeki diğer her şey işareti olduğu yerde bırakır.",
      "sections": [
        {
          "heading": "Motorun dışında",
          "paragraphs": [
            "Kaplama önizlemesi, mağaza kartı, abonelik etiketi ve kozmetik Derece Puanı eklemez. Bir plan için ödeme yapmak rütbe değildir.",
            "Rütbe panosunu açmak, bir amblemi döndürmek veya bu kodeksi okumak maç sonucu işlemez.",
            "Bir şikâyet, destek notu veya turnuva düzeni kayıtlı dereceyi yeniden yazmaz."
          ]
        },
        {
          "heading": "Tek yol",
          "paragraphs": [
            "Yazılı yol, Derece Puanı motorundan geçirilen kaydedilmiş bir maç sonucudur. Bugün bu sitedeki hiçbir herkese açık sayfa bu sonucu yazmaz.",
            "Bir sonuç oluşana kadar yeni hesap başlangıç derecesinde kalır, mevcut hesap ise kayıtlı derecesini korur."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Derece Puanları nedir",
      "lede": "Derece Puanları, hesapta saklanan rekabet sayısıdır. Rütbe yalnızca bu sayının düştüğü aralıktır.",
      "sections": [
        {
          "heading": "Kayıtlı alan",
          "paragraphs": [
            "Motor sürümü {version}. Yeni bir hesap {startingRating} Derece Puanı ile başlar. Kayıtlı sayı {minRating} altına düşemez ve {maxRating} üstüne çıkamaz.",
            "Oturum açtığınızda profiller ve rütbe panosu bu sayıyı okur. Oturum açmadığınızda pano, seçtiğiniz amblemin kalibrasyon tabanını gösterir. Bu taban bir örnektir, sizin hesabınız değildir."
          ]
        },
        {
          "heading": "Sayının ölçtüğü",
          "paragraphs": [
            "Motor derecenizi rakip tarafın ortalama derecesiyle karşılaştırır. Bireysel ödül, kafadan vuruş oranı veya bomba kullanımı için ayrı bir puan tutmaz. Bu rakamlar bu sürümün parçası değildir.",
            "Daha yüksek sayı, sıralamanın daha düşük bir sayıya karşı daha sık kazanmanızı beklediği anlamına gelir. Rütbe adları bu ölçeğin herkese açık okumasıdır."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Yeni hesap nereden başlar",
      "lede": "Steam ile giriş, hesabı 1.200 Rating Points, 3. rütbe, Vanguard olarak, galibiyetsiz ve mağlubiyetsiz oluşturur.",
      "sections": [
        {
          "heading": "İlk işaret",
          "paragraphs": [
            "1.200, Vanguard'ın tabanıdır. Operative ve Recruit bunun altındadır; bu yüzden yeni bir hesap merdivenin en altından değil, erken bölümün ortasından başlar.",
            "Yeniden giriş yapmak kayıtlı bir puanı sıfırlamaz. Kaydedilen ilk 10 maç yerleştirme maçıdır: bu süre içinde puan 5. kademenin üstüne çıkamaz. Kodeks bir galibiyet–mağlubiyet kaydı uydurmaz."
          ]
        },
        {
          "heading": "Nasıl görülür",
          "paragraphs": [
            "Steam ile oturum açtıktan sonra panel ve rütbe panosu kayıtlı dereceyi gösterebilir. Veritabanına ulaşılamazsa sayfa sayı uydurmak yerine bunu belirtir.",
            "Başlangıç rütbesi, kaydedilmiş bir sonuç puanı 1.200–1.299 aralığının dışına taşıyana kadar Vanguard kalır. Bu site bugün böyle bir sonuç yazmaz."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Kaydedilmiş bir sonuç Derece Puanlarını nasıl değiştirir",
      "lede": "Kaydedilmiş bir galibiyet veya mağlubiyet, diğer takımın ortalama puanına göre ölçülür. Denk bir takıma karşı galibiyet +15, mağlubiyet −15'tir. Kuralların tamamı Rütbeler sayfasındadır.",
      "sections": [
        {
          "heading": "Adım",
          "paragraphs": [
            "Beklenen skor, motorun maçtan önce yalnızca iki puana dayanarak verdiği olasılıktır. Puanlar eşitse bu yarıdır; bu yüzden galibiyet 15 Rating Points değerindedir ve mağlubiyet 15 kaybettirir.",
            "Daha yüksek bir puana karşı galibiyet 15'ten fazla değerlidir ve mağlubiyet daha az kaybettirir. Daha düşük bir puana karşı tam tersi. Galibiyet her zaman 8 ile 25 arası kazandırır, mağlubiyet her zaman 8 ile 25 arası kaybettirir. 7–9. kademelerde galibiyet kazançları 0,8, 10. kademede 0,7 ile çarpılır; bu yüzden merdivenin zirvesi daha uzun sürer. Puan 100 ile 3.000 arasında tutulur.",
            "Takım sonucunda her oyuncu diğer takımın ortalama puanına göre ölçülür. Sunucu öldürmeleri kaydetmeye başladığında 2 RP'lik bir maç MVP bonusu planlanıyor; o zamana kadar kişisel bonus uygulanmaz."
          ]
        },
        {
          "heading": "Beraberlik",
          "paragraphs": [
            "Beraberlik hiçbir şeyi değiştirmez: her oyuncu puanını korur. Bir maçı bırakmak veya maçtan ayrılmak, sonuç ne olursa olsun 50 RP'ye mal olur.",
            "Bu sayfadaki tablo, motorun örnek girdiler üzerinde çalışmasıdır. Bu satırlar kayıtlı maçlar değildir ve sizin hesabınız değildir."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Taban, tavan ve atlanan rütbe",
      "lede": "Kayıtlı sayı 100'de ve 3.000'de durur. Rütbe her zaman sayıyı izler, bu yüzden bir düğmeyle rütbe atlanamaz.",
      "sections": [
        {
          "heading": "Duraklar",
          "paragraphs": [
            "100 Derece Puanı'nda alınan mağlubiyet 100'de kalır. 3.000'de alınan galibiyet 3.000'de kalır. Recruit'in sıralama tabanı 0 olarak yazılıdır, ancak kayıtlı sayı 100'ün altındaki boşluğu asla kullanmaz.",
            "1.949 Sovereign'dır. 1.950 A.C.E. Legend'dır. Arada bir işaret yoktur."
          ]
        },
        {
          "heading": "Atlama yok",
          "paragraphs": [
            "Kaydedilmiş bir sonuç sayıyı 1.050'den 1.260'a sıçratsaydı, 1.260 o aralıkta olduğu için hesap Vanguard rütbesini taşırdı. Aradaki rütbeler ayrı terfiler olarak sıraya alınmaz. Sayı bir kez okunur.",
            "Bu sitede hiçbir sayfa böyle bir sıçrama yapmaz. Örnek yalnızca sıralamanın bir sayıyı nasıl okuduğunu gösterir."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Maç bağlantısının görüneceği yer",
      "lede": "Maç bağlantısı bir oyun sunucusunun adresidir. Bu site böyle bir bağlantı vermez.",
      "sections": [
        {
          "heading": "Açabileceğiniz masa",
          "paragraphs": [
            "Oyna sayfası on oyunculuk bir düzen ve MAÇ BUL düğmesi gösterir. Bu düğme kapalı kalır. Bir Counter-Strike 2 sunucusu açamaz ve kimseye adres vermez.",
            "Sitedeki kişi sayısı oyun içindeki kişi sayısı değildir. Bir maçın katılımcı sayısı 0'dır."
          ]
        },
        {
          "heading": "Bağlantının ileride duracağı yer",
          "paragraphs": [
            "Bir maç sunucusu olsaydı, on oyuncu kabul ettikten sonra adres ve şifresi maç masasında gösterilirdi. Oyuncu Steam'den katılırdı. Bu sitede adres saklanmaz ve şifre üretilmez.",
            "Steam ile oturum açma hesabı bağlar. Oyuncuyu bir haritaya bırakmaz."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Dereceli masa nedir",
      "lede": "Dereceli masa, oyna sayfasındaki 5v5 düzenidir. Açık bir sıra değil, kapalı bir masadır.",
      "sections": [
        {
          "heading": "Neler çizilir",
          "paragraphs": [
            "Her biri beş koltuklu iki taraf ve ilk koltukta kaptan etiketi. Yanlarındaki harita listesi ve sohbet satırı aynı düzenin parçasıdır.",
            "O sayfadaki güvenlik satırları durumlarıyla işaretlenmiştir. Hiçbiri henüz çalışan bir kontrol değildir; yol haritası için /anti-cheat sayfasına bakın."
          ]
        },
        {
          "heading": "Masanın yapmadıkları",
          "paragraphs": [
            "MAÇ BUL rakip aramaz. Derece Puanlarını değiştirmez. Hesaptaki rütbe hâlâ bu kodeksteki sıralamanın okuduğu kayıtlı sayıdır.",
            "Legend'ın üstünde ayrı bir üst sıra yoktur. A.C.E. Legend son işarettir ve 1.950 Derece Puanı'nda açılır."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Maç masasından yardım",
      "lede": "Bu sitedeki destek yazılı bir masadır. Maç içinde canlı sesli hat açmaz.",
      "sections": [
        {
          "heading": "Destek sayfasının yaptığı",
          "paragraphs": [
            "Destek sayfası masaları listeler ve bir destek talebi düğmesi sunar. Bu düğmeyi seçmek bir vaka oluşturmaz ve maç sırasında bir kişiye ulaşmaz, çünkü devam eden maç yoktur.",
            "Kural sorusu /rules adresindeki rekabet kurallarına aittir. Sıralama sorusu bu kodekse aittir."
          ]
        },
        {
          "heading": "Bir maç olduğunda itiraz",
          "paragraphs": [
            "Yazılı kurallar, kaptanın bir sonraki harita başlamadan önce harita, raunt ve maddeyi belirterek itiraz edebileceğini söyler. Bu site demo saklamaz ve oyun sunucusu çalıştırmaz, bu yüzden bugün bu itirazın gideceği bir yer yoktur.",
            "Düzen skoru oynanmış bir maç değildir. Yetkililer bir seri sonucunu yalnızca gerçek bir seriden sonra yazar."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "On oyuncuyu beklemek",
      "lede": "Rekabetçi bir harita on as oyuncu gerektirir. Masa bugün bu beklemeyi yürütmez.",
      "sections": [
        {
          "heading": "Yazılı saat",
          "paragraphs": [
            "Bir maçın yayımlanmış başlangıç saati olduğunda, her taraftaki beş as oyuncu başlangıçtan 15 dakika önce hazır olmalıdır. Bu cümle rekabet kurallarında yer alır. Yayımlanmış maç olmadığı için saat bu sitede başlamaz.",
            "Oyna sayfasında gösterilen adlar örnektir. Sırada bekleyen kişiler değildir."
          ]
        },
        {
          "heading": "Siz izlerken olmayanlar",
          "paragraphs": [
            "Sayfa sunucu ayırmaz, bildirim göndermez veya kabul için geri sayım yapmaz. Sayfadan ayrılmak bir maçı terk etmek değildir, çünkü bir maçta değildiniz."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "Masadaki kaptan",
      "lede": "Her taraf adına bir kaptan konuşur. Lobi rolleri rekabetçi beta ile devreye girer.",
      "sections": [
        {
          "heading": "Kuralların belirlediği",
          "paragraphs": [
            "Kaptan vetoyu, duraklamaları ve itirazı yönetir. Diğer as oyuncular oynar. Yedek yalnızca haritalar arasında girebilir.",
            "Tek haritada kaptanlar tek harita kalana kadar birer birer harita yasaklar. Havuz Ancient, Anubis, Dust II, Inferno, Mirage, Nuke ve Train'dir. Üst seed A takımıdır ve önce mi sonra mı yasaklayacağını seçer; seed eşitse yazı tura belirler. Bugün açık bir veto yoktur."
          ]
        },
        {
          "heading": "Duraklamalar",
          "paragraphs": [
            "Duraklamalar yalnızca bir maç sunucusu olduğunda geçerlidir. Burada yok. Yazılı hak, takım başına her haritada 30 saniyelik üç taktik duraklama, uzatmada bir ek duraklama ve toplam 10 dakikalık teknik duraklamadır. Tam metin /rules adresindedir.",
            "Takımlar sayfasında kaptan, kadro daveti gönderebilen üyedir de. Bu davet maç lobisinden ayrıdır."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "Bir taraf hazır olmadığında",
      "lede": "Rekabet kuralları, yayımlanmış başlangıç saati olan bir maç için hükmen mağlubiyeti tanımlar. Bu site hükmen mağlubiyet vermez.",
      "sections": [
        {
          "heading": "Yazılı kural",
          "paragraphs": [
            "Beş as oyuncu yayımlanan başlangıçtan 15 dakika önce hazır olmalıdır. Bir maç olduğunda, başlangıçtan 15 dakika sonra hâlâ eksik olan taraf seriyi hükmen kaybeder. İki taraf da yoksa ikisi de çıkarılır ve yetkililer slotu yazar.",
            "Bir haritaya beşten az uygun as oyuncuyla başlayan ve girebilecek yedeği olmayan klan o haritayı hükmen kaybeder."
          ]
        },
        {
          "heading": "Bu sitenin yapmayacakları",
          "paragraphs": [
            "Burada hiçbir şey bir lobiyi izleyip kendi kendine hükmen mağlubiyet yazmaz. Oyna sayfasındaki bir düğme hiç yüklenmemiş bir haritayı teslim edemez.",
            "Turnuva ağacındaki düzen skoru oynanmış bir maç veya hükmen mağlubiyet değildir."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "100 klanlık elemeye katılmak",
      "lede": "Turnuva sayfası 100 klanlık bir ağaçtır. Kayıt 100'de 0. Katılım açık değildir.",
      "sections": [
        {
          "heading": "Açabilecekleriniz",
          "paragraphs": [
            "Kadrosunu okumak için ağaçtaki bir klana tıklayın, ardından bir oyuncuyu açın. Boş slotlardaki adlar örnektir, kabul edilmiş başvurular değildir.",
            "Ağaç sunucu atamaz ve maç bağlantısı göndermez."
          ]
        },
        {
          "heading": "Katılım açıldığında bay",
          "paragraphs": [
            "Gelecekteki katılım için yazılı kural, kabul edilen ilk 28 klanın 1. turu atlamasıdır. Bu bay bir ödül değildir ve kayıt 100'de 0'da kaldığı sürece talep edilemez.",
            "Seri uzunluğu, harita havuzu ve itirazlar /rules adresindeki rekabet kurallarındadır."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Kadro nasıl kurulur",
      "lede": "Kaptan, zaten A.C.E. hesabı olan bir oyuncuyu davet eder. Herkese açık paylaşım bağlantısı yoktur ve asla Steam şifresi istenmez.",
      "sections": [
        {
          "heading": "Var olan davet",
          "paragraphs": [
            "Takımlar sayfasında oturum açmış bir kaptan bir SteamID64 veya A.C.E. hesap kimliği yapıştırır. Hesap zaten Steam OpenID ile bağlanmış olmalıdır. Veritabanı kabul ettiğinde sunucu bekleyen bir davet yazar.",
            "Kadro kaptan dahil beş oyuncudan oluşur. Kaptan kendi hesabını davet edemez. Zaten kadroda olan oyuncu reddedilir. Veritabanı çalışmıyorsa davet başarısız olur ve davet kaydedilmez."
          ]
        },
        {
          "heading": "Davet ne değildir",
          "paragraphs": [
            "Davet mektup göndermez, özel lobi açmaz veya paylaşabileceğiniz bir bağlantı oluşturmaz. Klanı elemeye yerleştirmez.",
            "Eleme kuralları, bir turnuva başvurusu olduğunda iki adlandırılmış yedeğe izin verir. Katılım açık değildir, bu yüzden bu koltuklar bugün kullanabileceğiniz bir hak değildir."
          ]
        }
      ]
    }
  }
};
