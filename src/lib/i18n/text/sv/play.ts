import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "premium": {
    "tag": "PREMIUM",
    "sample": "PREMIUM-EXEMPEL",
    "note": "Platser märkta Premium-exempel visar den illustrerade Premium-rankbilden endast som visning. Det är exempelspelare, inte prenumeranter. Premium-bilden är rent kosmetisk och ändrar aldrig rating eller matchning.",
    "artAlt": "Illustrerad Premium-rankbild {rank}"
  },
  "room": {
    "showcaseTag": "VISNING · Exempelspelare, ingen livematch. Kön är stängd.",
    "showcaseShort": "VISNING",
    "queueClosed": "KÖN STÄNGD",
    "floorRp": "Rankgolv {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar för {name}",
    "sampleChat": "Exempelrader. Inte skickade, inte live.",
    "sampleLine": "EXEMPEL",
    "operatorA": "Originell A.C.E-operatörskonst för lag A: en hjälmförsedd taktisk operatör i grafitgrå utrustning med guldaccenter",
    "operatorB": "Originell A.C.E-operatörskonst för lag B: en huvklädd rebellkrigare i grafitgrå utrustning med guldaccenter",
    "artNote": "Originell A.C.E-karaktärskonst. Detta är inte spelmodeller."
  },
  "meta": {
    "title": "Spela",
    "description": "Rankad 5v5-matchning öppnar när A.C.E Shield anti-fusk är live."
  },
  "boards": {
    "label": "Köbrädor",
    "title": "Tre 5v5-brädor",
    "note": "Valet stannar på den här sidan. Rankad sökning är stängd, och att välja en bräda letar inte efter motståndare.",
    "items": {
      "open": {
        "name": "Öppen bräda",
        "rules": [
          "Grupp av valfri storlek, upp till fem",
          "Inget ratingfönster",
          "Steam OpenID är identitetskontrollen",
          "Avsedd för öppen träning när en kö finns"
        ]
      },
      "calibration": {
        "name": "Kalibreringsbräda",
        "rules": [
          "Solo, duo eller trio",
          "Ett planerat fönster på {points} ratingpoäng",
          "En Steam-profil måste redan vara sparad",
          "Använder A.C.E:s ratingregel · sökning kommer snart"
        ]
      },
      "elite": {
        "name": "Elitbräda",
        "rules": [
          "Solo eller duo",
          "Ett planerat fönster på {points} ratingpoäng",
          "Sparat medlemskap måste vara Plus eller Premium",
          "Striktare skriftliga villkor. Ingen prispott är kopplad"
        ]
      }
    }
  },
  "veto": {
    "kicker": "KARTVETO",
    "title": "Välj kartan",
    "lede": "Avböj kartor tills en återstår. Den här lobbyn startar inte Counter-Strike 2 och öppnar ingen server.",
    "mapSelected": "Vald karta: {map}",
    "yourBan": "Ditt bann",
    "opponentBan": "Motståndarens bann",
    "selected": "Vald",
    "declined": "Avböjd",
    "decline": "Avböj",
    "reset": "Återställ veto",
    "declinedToast": "{map} avböjdes. Den här sidan öppnar ingen server.",
    "lockKicker": "5v5-MATCHRUM",
    "lockTitle": "{map} är kartan som återstår",
    "lockBody": "Ditt matchrum. Tävlingsmatcher startar här när tävlingsbetan öppnar.",
    "close": "Stäng"
  },
  "arena": {
    "ariaLabel": "Förhandsvisning av matchrum",
    "captain": "Kapten",
    "mapPlates": "Kartbilder",
    "selectMap": "Välj {map}",
    "settings": {
      "region": "Region",
      "mode": "Läge",
      "antiCheat": "Anti-fusk",
      "simulator": "Förhandsvisning"
    },
    "chat": {
      "title": "LAGCHATT",
      "kicker": "LAGCHATT · KOMMER SNART",
      "captainName": "{name} (kapten)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "nu kör vi",
        "dust 2 passar oss",
        "redo"
      ],
      "inputLabel": "Meddelande i lagchatten",
      "placeholder": "Skriv till laget…",
      "send": "Skicka"
    },
    "tiles": {
      "map": "Karta",
      "server": "Server",
      "serverValue": "EU West · kommer snart",
      "mode": "Läge"
    },
    "identity": {
      "title": "IDENTITETSVERIFIERING",
      "kicker": "IDENTITETSKONTROLLER · KOMMER SNART",
      "rows": [
        "E-postverifiering · kommer snart",
        "Telefonverifiering · kommer snart",
        "Ansiktskontroll · kommer snart"
      ]
    },
    "security": {
      "title": "MATCHSÄKERHET",
      "kicker": "A.C.E SHIELD · UNDER UTVECKLING",
      "rows": [
        "Anti-fusk-skydd · under utveckling",
        "Serverintegritetskontroll · under utveckling",
        "Kryptering av matchdata · under utveckling"
      ]
    },
    "findMatchReason": "Matchning öppnar med tävlingsbetan. Rankade köer körs inte ännu."
  }
};
