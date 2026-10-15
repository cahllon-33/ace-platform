import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumCodex: {
    "kicker": "PREMIUM RÜTBE KODEKSİ",
    "title": "Premium rütbe kodeksi",
    "lede": "Her rütbe için bir tane olmak üzere on resimli kristal amblem. Bu, standart rütbelerle aynı Rating Points merdiveninde kozmetik profil sanatıdır. Reyting, eşleştirme veya sırayı değiştirmez.",
    "cosmetic": "Kozmetik sanat · aynı RP merdiveni · yalnızca A.C.E Premium 7 $/ay",
    "imgAlt": "{name} Premium rütbe sanatı, seviye {level}"
  },
  premiumRanks: {
    kicker: "PREMIUM RÜTBELER",
    plan: "A.C.E PREMIUM · yalnızca ayda 7 $",
    title: "Premium rütbe görselleri",
    lede: "Orijinal resimli A.C.E. rütbe seti: III/II/I bölümlü on kristal amblem, reyting protokolü, Legend ayrıntı kartı ve sürükleyerek döndürülen 3D görüntüleyici. Premium üyeler için profil görselidir. Standart rütbelerle aynı Rating Points merdivenini okur ve hiçbir rekabet avantajı sağlamaz.",
    demo: "Demo değerleri: bu panodaki ilerleme, kazanma oranı ve bölüm değerleri örnektir, canlı istatistik değildir. Giriş yaptığında gösterilen reyting kayıtlı reytingindir.",
    locked: "Yakında: ödeme henüz yok, bu yüzden bugün hiçbir hesap Premium değil. Sunucu Premium rütbe görsellerini yalnızca kayıtlı planı Premium olan bir profile uygular.",
    standardKicker: "STANDART RÜTBELER",
    standardNote: "Her hesap bu 3D vektör amblemleri taşır.",
    legendTag: "PREMIUM",
    pickerTitle: "Profilindeki rütbe görseli",
    pickerStandard: "Standart",
    pickerPremium: "Premium",
    pickerLocked: "Premium rütbe görselleri A.C.E Premium içindir (ayda 7 $). Yakında: ödeme henüz yok.",
    pickerSaved: "Kaydedildi.",
    pickerFailed: "Kaydedilmedi. Premium rütbe görselleri A.C.E Premium gerektirir.",
  },
  "meta": {
    "title": "Rekabetçi Rütbeler",
    "description": "Iron Recruit'ten A.C.E. Legend'a kadar on A.C.E. rütbesi; ligler ve derece tabanlarıyla."
  },
  "hero": {
    "kicker": "KALİBRASYON",
    "title": "Rekabetçi Rütbeler",
    "lede": "Recruit'ten A.C.E. Legend'a on kademe; her birinde {divisions} ligleri var. Bir amblemi döndürmek için sürükleyin veya ok tuşlarını kullanın. Oturum açtıysanız kendi derecenizi, aksi halde her kademenin tabanını görürsünüz."
  },
  "codexLink": "Kalibrasyon Kodeksini aç",
  "document": {
    "title": "On kademeli kalibrasyon belgesi",
    "body": "Motor adları resmi sıralamadır. Kristal adları lobi görselleridir. Tablodaki kazanma oranı etiketleri, dereceli eşleştirme başlayana kadar örnek rakamlardır. Ücretli kozmetikler bir oyuncuyu asla bu tabanlar arasında taşımaz.",
    "level": "SEVİYE {level} · {crystal}",
    "detail": "Minimum derece {rating}. Malzeme çalışması: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "GİRİŞ KALİBRASYONU",
      "material": "Ham demir / obsidyen plaka dokusu"
    },
    "2": {
      "tagline": "SAHA OPERATİFİ",
      "material": "Fırçalanmış bronz kristal çekirdek"
    },
    "3": {
      "tagline": "ÖN CEPHE",
      "material": "Koyu kırmızı alt tonlu rose gold parçaları"
    },
    "4": {
      "tagline": "HASSAS İŞÇİLİK",
      "material": "Krom gümüş elmas parça bloğu"
    },
    "5": {
      "tagline": "TECRÜBELİ ÇEKİRDEK",
      "material": "Eskitilmiş pirinç erimiş çekirdek aurası"
    },
    "6": {
      "tagline": "ALTIN STANDART",
      "material": "Canlı altın kristal parıltısı"
    },
    "7": {
      "tagline": "CAMGÖBEĞİ YÜKSELİŞ",
      "material": "Camgöbeği plazma kristal matrisi"
    },
    "8": {
      "tagline": "SAFİR FIRTINASI",
      "material": "Yoğun parlayan safir mavisi şimşek kristal çekirdek"
    },
    "9": {
      "tagline": "BOŞLUĞUN TACI",
      "material": "Derin kozmik boşluk moru yıldız parçası çekirdeği"
    },
    "10": {
      "tagline": "ELİTLERİN ELİTİ",
      "material": "Lüks, ışıldayan erimiş altın taç çerçevesi"
    }
  },
  "board": {
    "selectEmblem": "A.C.E. {name} rütbe amblemini seç, seviye {level}",
    "emblemAlt": "A.C.E. Özel 3D Kristal Seviye {level} {crystal} {name} amblem profil rozeti",
    "emblemAltLegend": "A.C.E. Özel 3D Kristal Seviye {level} Amblem Profil Rozeti",
    "premium": "EN ÜST KADEME"
  },
  "division": {
    "label": "Lig {division}",
    "select": "Lig {division} seç",
    "summary": "Her birinde {divisions} lig / toplam {levels} seviye"
  },
  "card": {
    "rank": "Rütbe {level}",
    "targetWinRate": "{winRate} hedef kazanma oranı",
    "calibrationTarget": "Kalibrasyon hedefi",
    "floor": "Taban",
    "samplesNote": "Her kademe için hedef rakamlar.",
    "progressMockup": "İlerleme"
  },
  "turntable": {
    "stageLabel": "{name} yörünge amblemi. Döndürmek için sürükleyin.",
    "dragToRotate": "DÖNDÜRMEK İÇİN SÜRÜKLE",
    "rankSystem": "RÜTBE SİSTEMİ"
  },
  "emblem": {
    "kicker": "Kalibrasyon işareti",
    "rankLabel": "Rütbe {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} yerleştirme işareti kayıtlı galibiyet ve mağlubiyetlerden doldu. Bu düğümler maç başlatmaz."
  }
};
