import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "{n}. rangszint",
    "chip": "Premium",
    "artAlt": "{rank} Premium rangkép"
  },
  "rpRules": {
    "kicker": "A.C.E RATING POINTS SZABÁLYOK",
    "title": "Így változnak a Rating Points",
    "lede": "Szabályverzió: {version}. Minden új játékos {start} RP-vel kezd a 3. szinten, {tier}. A létra szándékosan lassú: a középső fölötti minden szint több győzelmet kíván, mint az előző.",
    "tableTitle": "A szabályok",
    "colRule": "Szabály",
    "colValue": "Érték",
    "rStart": "Kezdő értékszám",
    "vStart": "{start} RP, 3. szint ({tier})",
    "rWin": "Győzelem egyenlő csapat ellen",
    "vWin": "+{win} RP",
    "rLoss": "Vereség egyenlő csapat ellen",
    "vLoss": "−{loss} RP",
    "rOdds": "Az ellenfél ereje",
    "vOdds": "Az értékszámodat a másik csapat átlagos értékszámához hasonlítjuk ({scale} skála). Erősebb csapat legyőzése többet ér, a vereség ellene kevesebbe kerül; gyengébb csapat ellen fordítva.",
    "rClamp": "Meccsenkénti korlátok",
    "vClamp": "Egy győzelem +{winMin} és +{winMax} RP között ad. Egy vereség −{lossMin} és −{lossMax} RP között kerül.",
    "rTier": "Győzelmek a felső szinteken",
    "vTier": "A győzelmi nyereséget a 7–9. szinten {t7}-del, a 10. szinten ({top}) {t10}-del szorozzuk. A vereségeket soha nem csökkentjük.",
    "rMvp": "A meccs MVP-je",
    "vMvp": "A legtöbb ölést szerző játékos; egyenlőség esetén a több sebzés, majd a kevesebb halál dönt. +{mvp} RP győzelemnél és {mvp} RP-vel kisebb veszteség vereségnél, sosem a meccsenkénti korlátokon túl. Hamarosan: a szerver még nem rögzíti az öléseket, ezért ma nem jár MVP-bónusz.",
    "rPlacement": "Besorolás",
    "vPlacement": "Az első {n} meccsed. A besorolás alatt az értékszámod nem emelkedhet a(z) {maxTier}. szint ({cap} RP) fölé.",
    "rDraw": "Döntetlen",
    "vDraw": "0 RP mindenkinek.",
    "rAbandon": "Meccs elhagyása vagy félbehagyása",
    "vAbandon": "−{abandon} RP az eredménytől függetlenül, MVP-bónusz nélkül.",
    "rLimits": "Értékszám-tartomány",
    "vLimits": "{floor}–{ceiling} RP",
    "rDecay": "Inaktivitás",
    "vDecay": "Nincs csökkenés. Az értékszámod nem esik, amíg távol vagy.",
    "rPaid": "Fizetős csomagok",
    "vPaid": "Nincs hatásuk. A Free, Plus és Premium játékosokra pontosan ugyanazok a szabályok vonatkoznak.",
    "tierTableTitle": "Szintenként, egyenlő csapat ellen",
    "colTier": "Szint",
    "colFloor": "Ettől",
    "colWin": "Győzelem",
    "colLoss": "Vereség",
    "examplesTitle": "Kidolgozott példák",
    "ex1": "{start} → {elite} RP ({top}) egyenlő csapatok ellen, csak győzelmekkel: {w1} győzelem +15-tel a 6. szintig, majd {w2} győzelem +{win7}-vel a 7–9. szinten. Összesen {total} győzelem.",
    "ex2": "Minden közbeeső vereség további győzelmeket követel. A 7–9. szinten egy győzelem +{win7}-et ad, de egy vereség továbbra is −{loss}-be kerül, ezért a kiegyenlített meccsek legalább {breakEven}%-át meg kell nyerned a további emelkedéshez.",
    "ex3": "Átlagosan 200 RP-vel erősebb csapat ellen a győzelem +{strongWin}-et ad, a vereség −{strongLoss}-be kerül.",
    "ex4": "Átlagosan 200 RP-vel gyengébb csapat ellen a győzelem +{weakWin}-et ad, a vereség −{weakLoss}-be kerül.",
    "note": "Ezeket a számokat ugyanaz a kód számolja, amely egy ellenőrzött meccseredményt alkalmaz. Ezek példák, nem tárolt meccsek."
  },
  "premiumCodex": {
    "kicker": "PRÉMIUM RANGKÓDEX",
    "title": "Prémium rangkódex",
    "lede": "Tíz illusztrált kristályembléma, rangonként egy. Ez kozmetikai profilművészet ugyanazon a Rating Points létrán, mint a standard rangok. Nem változtat a ratingen, a párosításon és a sorban álláson.",
    "cosmetic": "Kozmetikai művészet · ugyanaz az RP-létra · csak A.C.E Premium 7 $/hó",
    "imgAlt": "{name} prémium rangművészet, {level}. szint"
  },
  "premiumRanks": {
    "kicker": "PRÉMIUM RANGOK",
    "plan": "A.C.E PREMIUM · csak 7 $/hó",
    "title": "Prémium ranggrafika",
    "lede": "Az eredeti illusztrált A.C.E. rangkészlet: tíz kristályembléma III/II/I divíziókkal, az értékelési protokoll, a Legend részletkártya és a húzással forgatható 3D nézegető. Ez profilgrafika a Premium tagoknak. Ugyanazt a Rating Points létrát olvassa, mint a standard rangok, és semmilyen versenyelőnyt nem ad.",
    "demo": "Demóértékek: a táblán látható haladás, győzelmi arány és divízió minták, nem élő statisztikák. Bejelentkezve a megjelenített értékelés a tárolt értékelésed.",
    "locked": "Hamarosan: fizetés még nincs, így ma egyetlen fiók sem Premium. A szerver csak akkor alkalmaz prémium ranggrafikát egy profilra, ha a tárolt csomagja Premium.",
    "standardKicker": "STANDARD RANGOK",
    "standardNote": "Minden fiók ezeket a 3D vektoros emblémákat viseli.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Ranggrafika a profilodon",
    "pickerStandard": "Standard",
    "pickerPremium": "Prémium",
    "pickerLocked": "A prémium ranggrafika az A.C.E Premiumhoz tartozik (7 $/hó). Hamarosan: fizetés még nincs.",
    "pickerSaved": "Mentve.",
    "pickerFailed": "Nincs mentve. A prémium ranggrafikához A.C.E Premium kell."
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
    "floor": "Alsó határ"
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
