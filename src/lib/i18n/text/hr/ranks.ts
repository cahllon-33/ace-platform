import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "meta": {
    "title": "Natjecateljski rangovi",
    "description": "Deset A.C.E. rangova, od Iron Recruita do A.C.E. Legenda, s divizijama i donjim granicama rejtinga."
  },
  "hero": {
    "kicker": "KALIBRACIJA",
    "title": "Natjecateljski rangovi",
    "lede": "Deset razina od Recruita do A.C.E. Legenda, svaka s divizijama {divisions}. Povuci ili koristi strelice za okretanje amblema. Kad si prijavljen, vidiš svoj rejting; inače donju granicu svake razine."
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
    "selectEmblem": "Odaberi A.C.E. {name} amblem ranga, razina {level}",
    "emblemAlt": "A.C.E. prilagođena 3D kristalna profilna značka amblema razine {level} {crystal} {name}",
    "emblemAltLegend": "A.C.E. prilagođena 3D kristalna profilna značka amblema razine {level}",
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
    "calibrationTarget": "Kalibracijski cilj",
    "floor": "Donja granica",
    "samplesNote": "Ciljane brojke za svaku razinu.",
    "progressMockup": "Napredak"
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
