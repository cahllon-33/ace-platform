import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "meta": {
    "title": "Kilpailurankingit",
    "description": "A.C.E.:n kymmenen rankingia Iron Recruitista A.C.E. Legendiin divisioonineen ja luokituslattioineen."
  },
  "hero": {
    "kicker": "KALIBROINTI",
    "title": "Kilpailurankingit",
    "lede": "Kymmenen tasoa Recruitista A.C.E. Legendiin, kussakin divisioonat {divisions}. Vedä tai käytä nuolinäppäimiä emblemin kiertämiseen. Kirjautuneena näet oman luokituksesi; muuten kunkin tason lattian."
  },
  "codexLink": "Avaa Kalibrointikoodeksi",
  "document": {
    "title": "Kymmenen tason kalibrointiasiakirja",
    "body": "Moottorin nimet ovat virallinen ranking. Kristallinimet ovat aulataidetta. Taulun voittoprosenttimerkit ovat esittelylukuja, kunnes ranked-matchmaking käynnistyy. Maksulliset kosmetiikat eivät koskaan siirrä pelaajaa lattioiden välillä.",
    "level": "TASO {level} · {crystal}",
    "detail": "Vähimmäisluokitus {rating}. Materiaalitutkielma: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "LÄHTÖKALIBROINTI",
      "material": "Raakarauta / obsidiaanilaattapinta"
    },
    "2": {
      "tagline": "KENTTÄOPERATIIVI",
      "material": "Harjattu pronssikristalliydin"
    },
    "3": {
      "tagline": "ETULINJA",
      "material": "Ruusukultasirpaleita tummanpunaisin vivahtein"
    },
    "4": {
      "tagline": "TARKKUUSTYÖ",
      "material": "Kromihopeinen timanttisirpalekappale"
    },
    "5": {
      "tagline": "KOKENUT YDIN",
      "material": "Vanhennetun messingin sula ydinaura"
    },
    "6": {
      "tagline": "KULTAINEN STANDARDI",
      "material": "Eloisa kultasirpalekristallin hehku"
    },
    "7": {
      "tagline": "SYAANINOUSU",
      "material": "Syaaninsininen plasmakristallimatriisi"
    },
    "8": {
      "tagline": "SAFIIRIMYRSKY",
      "material": "Safiirinsininen hehkuva salamakristalliydin"
    },
    "9": {
      "tagline": "TYHJYYDEN KRUUNU",
      "material": "Syvä kosminen tyhjyydenvioletti tähtisirpaleydin"
    },
    "10": {
      "tagline": "ELIITIN ELIITTI",
      "material": "Ylellinen sula säteilevä kultakruunurunko"
    }
  },
  "board": {
    "selectEmblem": "Valitse A.C.E. {name} -emblemi, taso {level}",
    "emblemAlt": "A.C.E.:n mukautettu 3D-kristallinen taso {level} {crystal} {name} -emblemin profiilimerkki",
    "emblemAltLegend": "A.C.E.:n mukautettu 3D-kristallinen tason {level} emblemin profiilimerkki",
    "premium": "HUIPPUTASO"
  },
  "division": {
    "label": "Divisioona {division}",
    "select": "Valitse divisioona {division}",
    "summary": "{divisions} divisioonaa kussakin / {levels} tasoa yhteensä"
  },
  "card": {
    "rank": "Ranking {level}",
    "targetWinRate": "{winRate} tavoitevoittoprosentti",
    "calibrationTarget": "Kalibrointitavoite",
    "floor": "Lattia",
    "samplesNote": "Tavoiteluvut kullekin tasolle.",
    "progressMockup": "Edistyminen"
  },
  "turntable": {
    "stageLabel": "{name} kiertoratemblemi. Vedä kiertääksesi.",
    "dragToRotate": "VEDÄ KIERTÄÄKSESI",
    "rankSystem": "RANKINGJÄRJESTELMÄ"
  },
  "emblem": {
    "kicker": "Kalibrointimerkki",
    "rankLabel": "Ranking {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} sijoitusmerkkiä täytetty tallennetuista voitoista ja tappioista. Nämä solmut eivät käynnistä ottelua."
  }
};
