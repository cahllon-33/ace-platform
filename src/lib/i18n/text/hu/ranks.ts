import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumRanks: {
    kicker: "PRÉMIUM RANGOK",
    plan: "A.C.E PREMIUM · csak 7 $/hó",
    title: "Prémium ranggrafika",
    lede: "Az eredeti illusztrált A.C.E. rangkészlet: tíz kristályembléma III/II/I divíziókkal, az értékelési protokoll, a Legend részletkártya és a húzással forgatható 3D nézegető. Ez profilgrafika a Premium tagoknak. Ugyanazt a Rating Points létrát olvassa, mint a standard rangok, és semmilyen versenyelőnyt nem ad.",
    demo: "Demóértékek: a táblán látható haladás, győzelmi arány és divízió minták, nem élő statisztikák. Bejelentkezve a megjelenített értékelés a tárolt értékelésed.",
    locked: "Hamarosan: fizetés még nincs, így ma egyetlen fiók sem Premium. A szerver csak akkor alkalmaz prémium ranggrafikát egy profilra, ha a tárolt csomagja Premium.",
    standardKicker: "STANDARD RANGOK",
    standardNote: "Minden fiók ezeket a 3D vektoros emblémákat viseli.",
    legendTag: "PREMIUM",
    pickerTitle: "Ranggrafika a profilodon",
    pickerStandard: "Standard",
    pickerPremium: "Prémium",
    pickerLocked: "A prémium ranggrafika az A.C.E Premiumhoz tartozik (7 $/hó). Hamarosan: fizetés még nincs.",
    pickerSaved: "Mentve.",
    pickerFailed: "Nincs mentve. A prémium ranggrafikához A.C.E Premium kell.",
  },
  "meta": {
    "title": "Versenyrangok",
    "description": "A tíz A.C.E. rang az Iron Recruittól az A.C.E. Legendig, divíziókkal és értékelési alsó határokkal."
  },
  "hero": {
    "kicker": "KALIBRÁCIÓ",
    "title": "Versenyrangok",
    "lede": "Tíz szint a Recruittól az A.C.E. Legendig, mindegyik {divisions} divízióval. Húzd vagy használd a nyílbillentyűket az embléma forgatásához. Bejelentkezve a saját értékelésedet látod, egyébként minden szint alsó határát."
  },
  "codexLink": "Kalibrációs kódex megnyitása",
  "document": {
    "title": "Tízszintű kalibrációs dokumentum",
    "body": "A motor nevei a hivatalos rangsor. A kristálynevek lobbigrafikák. A táblán lévő győzelmi arány-címkék bemutató számok, amíg a ranked párosítás el nem indul. A fizetős kozmetikumok soha nem mozgatnak játékost ezek között a határok között.",
    "level": "{level}. SZINT · {crystal}",
    "detail": "Minimális értékelés {rating}. Anyagtanulmány: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "BELÉPŐ KALIBRÁCIÓ",
      "material": "Nyersvas / obszidián lemeztextúra"
    },
    "2": {
      "tagline": "TEREPI OPERATÍV",
      "material": "Csiszolt bronz kristálymag"
    },
    "3": {
      "tagline": "ELŐRETOLT ÉL",
      "material": "Rozéarany szilánkok mélyvörös árnyalattal"
    },
    "4": {
      "tagline": "PRECÍZIÓS MESTERSÉG",
      "material": "Krómezüst gyémántszilánk-tömb"
    },
    "5": {
      "tagline": "TAPASZTALT MAG",
      "material": "Ósárgaréz olvadt mag aurája"
    },
    "6": {
      "tagline": "ARANY STANDARD",
      "material": "Élénk aranyszilánk kristályfény"
    },
    "7": {
      "tagline": "CIÁN EMELKEDÉS",
      "material": "Ciánkék plazmakristály-mátrix"
    },
    "8": {
      "tagline": "ZAFÍRVIHAR",
      "material": "Zafírkék, izzó villámkristály-mag"
    },
    "9": {
      "tagline": "AZ ŰR KORONÁJA",
      "material": "Mély kozmikus űrlila csillagszilánk-mag"
    },
    "10": {
      "tagline": "AZ ELIT ELITJE",
      "material": "Luxus olvadt, ragyogó aranykorona-váz"
    }
  },
  "board": {
    "selectEmblem": "A.C.E. {name} rangembléma kiválasztása, {level}. szint",
    "emblemAlt": "A.C.E. egyedi 3D kristályos {level}. szintű {crystal} {name} embléma profiljelvény",
    "emblemAltLegend": "A.C.E. egyedi 3D kristályos {level}. szintű embléma profiljelvény",
    "premium": "CSÚCSSZINT"
  },
  "division": {
    "label": "{division}. divízió",
    "select": "{division}. divízió kiválasztása",
    "summary": "Egyenként {divisions} divízió / összesen {levels} szint"
  },
  "card": {
    "rank": "{level}. rang",
    "targetWinRate": "{winRate} cél győzelmi arány",
    "calibrationTarget": "Kalibrációs cél",
    "floor": "Alsó határ",
    "samplesNote": "Célszámok minden szinthez.",
    "progressMockup": "Haladás"
  },
  "turntable": {
    "stageLabel": "{name} orbitális embléma. Húzd a forgatáshoz.",
    "dragToRotate": "HÚZD A FORGATÁSHOZ",
    "rankSystem": "RANGRENDSZER"
  },
  "emblem": {
    "kicker": "Kalibrációs jel",
    "rankLabel": "{level}. rang · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} helyezési jel kitöltve a tárolt győzelmekből és vereségekből. Ezek a csomópontok nem indítanak meccset."
  }
};
