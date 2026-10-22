import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Razina ranga {n}",
    "chip": "Premium",
    "artAlt": "Premium grafika ranga {rank}"
  },
  "rpRules": {
    "kicker": "A.C.E PRAVILA RATING POINTS",
    "title": "Kako se mijenjaju Rating Points",
    "lede": "Verzija pravila {version}. Svaki novi igrač počinje s {start} RP na razini 3, {tier}. Ljestvica je namjerno spora: svaka razina iznad sredine traži više pobjeda od prethodne.",
    "tableTitle": "Pravila",
    "colRule": "Pravilo",
    "colValue": "Vrijednost",
    "rStart": "Početni rejting",
    "vStart": "{start} RP, razina 3 ({tier})",
    "rWin": "Pobjeda protiv jednakog tima",
    "vWin": "+{win} RP",
    "rLoss": "Poraz od jednakog tima",
    "vLoss": "−{loss} RP",
    "rOdds": "Snaga protivnika",
    "vOdds": "Tvoj rejting uspoređuje se s prosječnim rejtingom drugog tima (skala {scale}). Pobjeda nad jačim timom donosi više, a poraz od njega košta manje; protiv slabijeg tima je obrnuto.",
    "rClamp": "Granice po meču",
    "vClamp": "Pobjeda donosi od +{winMin} do +{winMax} RP. Poraz košta od −{lossMin} do −{lossMax} RP.",
    "rTier": "Pobjede na visokim razinama",
    "vTier": "Dobici od pobjede množe se s {t7} na razinama 7–9 i s {t10} na razini 10 ({top}). Porazi se nikad ne smanjuju.",
    "rMvp": "MVP meča",
    "vMvp": "Igrač s najviše ubojstava; pri izjednačenju odlučuje veća šteta, zatim manje smrti. +{mvp} RP pri pobjedi i {mvp} RP manji gubitak pri porazu, nikad preko granica po meču. Uskoro: poslužitelj još ne bilježi ubojstva, pa se danas ne primjenjuje MVP bonus.",
    "rPlacement": "Plasman",
    "vPlacement": "Tvojih prvih {n} mečeva. Tijekom plasmana rejting ne može porasti iznad razine {maxTier} ({cap} RP).",
    "rDraw": "Neriješeno",
    "vDraw": "0 RP za sve.",
    "rAbandon": "Napuštanje ili izlazak iz meča",
    "vAbandon": "−{abandon} RP bez obzira na rezultat i bez MVP bonusa.",
    "rLimits": "Raspon rejtinga",
    "vLimits": "Od {floor} do {ceiling} RP",
    "rDecay": "Neaktivnost",
    "vDecay": "Nema opadanja. Rejting ti ne pada dok nisi aktivan.",
    "rPaid": "Plaćeni planovi",
    "vPaid": "Bez učinka. Igrači Free, Plus i Premium kreću se po potpuno istim pravilima.",
    "tierTableTitle": "Po razini, protiv jednakog tima",
    "colTier": "Razina",
    "colFloor": "Od",
    "colWin": "Pobjeda",
    "colLoss": "Poraz",
    "examplesTitle": "Izračunati primjeri",
    "ex1": "Od {start} do {elite} RP ({top}) protiv jednakih timova, samo pobjedama: {w1} pobjeda po +{win} do razine 6, zatim {w2} pobjeda po +{win7} na razinama 7–9. Ukupno {total} pobjeda.",
    "ex2": "Svaki poraz usput dodaje pobjede. Na razinama 7–9 pobjeda donosi +{win7}, ali poraz i dalje košta −{loss}, pa moraš dobiti barem {breakEven} % izjednačenih mečeva da bi nastavio rasti.",
    "ex3": "Protiv tima s prosječno 200 RP više od tebe pobjeda donosi +{strongWin}, a poraz košta −{strongLoss}.",
    "ex4": "Protiv tima s prosječno 200 RP manje od tebe pobjeda donosi +{weakWin}, a poraz košta −{weakLoss}.",
    "note": "Ove brojke izračunava isti kod koji primjenjuje potvrđeni rezultat meča. To su primjeri, a ne spremljeni mečevi."
  },
  "premiumCodex": {
    "kicker": "PREMIUM KODEKS RANGOVA",
    "title": "Premium kodeks rangova",
    "lede": "Deset ilustriranih kristalnih amblema, po jedan za svaki rang. To je kozmetička umjetnost profila na istoj ljestvici Rating Points kao standardni rangovi. Ne mijenja rating, matchmaking ni red čekanja.",
    "cosmetic": "Kozmetička umjetnost · ista RP ljestvica · samo A.C.E Premium 7 $/mj.",
    "imgAlt": "Premium umjetnost ranga {name}, razina {level}"
  },
  "premiumRanks": {
    "kicker": "PREMIUM RANGOVI",
    "plan": "A.C.E PREMIUM · samo 7 $/mj.",
    "title": "Premium grafika rangova",
    "lede": "Izvorni ilustrirani set rangova A.C.E: deset kristalnih amblema s divizijama III/II/I, protokol rejtinga, kartica detalja Legend i 3D preglednik koji se okreće povlačenjem. To je grafika profila za Premium članove. Čita istu ljestvicu Rating Pointsa kao standardni rangovi i ne daje nikakvu natjecateljsku prednost.",
    "demo": "Demo vrijednosti: napredak, postotak pobjeda i divizije na ovoj ploči su primjeri, ne statistika uživo. Kad si prijavljen, prikazani rejting je tvoj spremljeni rejting.",
    "locked": "Premium izgled rangova dio je A.C.E Premiuma, koji se kupuje putem Paddle naplate. Poslužitelj ga primjenjuje na profil samo kad je spremljeni plan Premium.",
    "standardKicker": "STANDARDNI RANGOVI",
    "standardNote": "Svaki račun nosi ove 3D vektorske ambleme.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Grafika ranga na tvom profilu",
    "pickerStandard": "Standardna",
    "pickerPremium": "Premium",
    "pickerLocked": "Premium izgled rangova namijenjen je A.C.E Premiumu (7 $ mjesečno), dostupnom putem Paddle naplate.",
    "pickerSaved": "Spremljeno.",
    "pickerFailed": "Nije spremljeno. Premium grafika rangova zahtijeva A.C.E Premium."
  },
  "meta": {
    "title": "Natjecateljski rangovi",
    "description": "Deset A.C.E rangova, od Iron Recruita do A.C.E Legenda, s divizijama i donjim granicama rejtinga."
  },
  "hero": {
    "kicker": "KALIBRACIJA",
    "title": "Natjecateljski rangovi",
    "lede": "Deset razina od Recruita do A.C.E Legenda, svaka s divizijama {divisions}. Povuci ili koristi strelice za okretanje amblema. Kad si prijavljen, vidiš svoj rejting; inače donju granicu svake razine."
  },
  "codexLink": "Otvori Kalibracijski kodeks",
  "document": {
    "title": "Kalibracijski dokument s deset razina",
    "body": "Nazivi iz motora službena su ljestvica. Kristalni nazivi su umjetnost predvorja. Oznake postotka pobjeda na ploči prikazne su brojke dok ranked matchmaking ne krene. Plaćena kozmetika nikad ne pomiče igrača između ovih granica.",
    "level": "RAZINA {level} · {crystal}",
    "detail": "Minimalni rejting {rating}. Studija materijala: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "ULAZNA KALIBRACIJA",
      "material": "Tekstura ploče od sirovog željeza / opsidijana"
    },
    "2": {
      "tagline": "TERENSKI OPERATIVAC",
      "material": "Jezgra od brušene bronce"
    },
    "3": {
      "tagline": "PREDNJI RUB",
      "material": "Krhotine ružičastog zlata s tamnocrvenim tonovima"
    },
    "4": {
      "tagline": "PRECIZNI ZANAT",
      "material": "Blok dijamantnih krhotina od krom-srebra"
    },
    "5": {
      "tagline": "ISKUSNA JEZGRA",
      "material": "Aura rastaljene jezgre od starog mjedi"
    },
    "6": {
      "tagline": "ZLATNI STANDARD",
      "material": "Bljesak kristala od živog zlata"
    },
    "7": {
      "tagline": "CIJAN USPON",
      "material": "Matrica kristala cijan plazme"
    },
    "8": {
      "tagline": "SAFIRNA OLUJA",
      "material": "Safirnoplava užarena munjevita kristalna jezgra"
    },
    "9": {
      "tagline": "KRUNA PRAZNINE",
      "material": "Jezgra zvjezdanih krhotina duboke kozmičke ljubičaste"
    },
    "10": {
      "tagline": "ELITA ELITE",
      "material": "Luksuzni okvir krune od rastaljenog blistavog zlata"
    }
  },
  "board": {
    "selectEmblem": "Odaberi A.C.E {name} amblem ranga, razina {level}",
    "emblemAlt": "A.C.E prilagođena 3D kristalna profilna značka amblema razine {level} {crystal} {name}",
    "emblemAltLegend": "A.C.E prilagođena 3D kristalna profilna značka amblema razine {level}",
    "premium": "NAJVIŠA RAZINA"
  },
  "division": {
    "label": "Divizija {division}",
    "select": "Odaberi diviziju {division}",
    "summary": "Po {divisions} divizije / ukupno {levels} razina"
  },
  "card": {
    "rank": "Rang {level}",
    "targetWinRate": "{winRate} ciljani postotak pobjeda",
    "floor": "Donja granica"
  },
  "turntable": {
    "stageLabel": "{name} orbitalni amblem. Povuci za okretanje.",
    "dragToRotate": "POVUCI ZA OKRETANJE",
    "rankSystem": "SUSTAV RANGOVA"
  },
  "emblem": {
    "kicker": "Kalibracijska oznaka",
    "rankLabel": "Rang {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} oznaka plasmana popunjeno iz spremljenih pobjeda i poraza. Ovi čvorovi ne pokreću meč."
  }
};
