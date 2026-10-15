import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "NÄYTÖS · Esimerkkipelaajia, ei live-ottelu. Jono on suljettu.",
    "showcaseShort": "NÄYTÖS",
    "queueClosed": "JONO SULJETTU",
    "floorRp": "Arvon alaraja {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Pelaajan {name} avatar",
    "sampleChat": "Esimerkkirivejä. Ei lähetetty, ei live.",
    "sampleLine": "ESIMERKKI",
    "operatorA": "Alkuperäinen A.C.E-operaattoritaide joukkueelle A: kypäräpäinen taktinen operaattori grafiitinharmaissa varusteissa kultayksityiskohdin",
    "operatorB": "Alkuperäinen A.C.E-operaattoritaide joukkueelle B: huppupäinen kapinallistaistelija grafiitinharmaissa varusteissa kultayksityiskohdin",
    "artNote": "Alkuperäistä A.C.E-hahmotaidetta. Nämä eivät ole pelin malleja."
  },
  "meta": {
    "title": "Pelaa",
    "description": "Ranked 5v5 -matchmaking avautuu, kun A.C.E Shield -huijauksenesto on käytössä."
  },
  "boards": {
    "label": "Jonotaulut",
    "title": "Kolme 5v5-taulua",
    "note": "Valinta pysyy tällä sivulla. Ranked-haku on suljettu, eikä taulun valinta etsi vastustajia.",
    "items": {
      "open": {
        "name": "Avoin taulu",
        "rules": [
          "Minkä kokoinen ryhmä tahansa, enintään viisi",
          "Ei luokitusikkunaa",
          "Steam OpenID on henkilöllisyyden tarkistus",
          "Kirjoitettu avoimeen harjoitteluun, kun jono on olemassa"
        ]
      },
      "calibration": {
        "name": "Kalibrointitaulu",
        "rules": [
          "Yksin, kaksin tai kolmisin",
          "Suunniteltu {points} luokituspisteen ikkuna",
          "Steam-profiilin on oltava jo tallennettu",
          "Käyttää A.C.E.-luokitussääntöä · haku tulossa pian"
        ]
      },
      "elite": {
        "name": "Eliittitaulu",
        "rules": [
          "Yksin tai kaksin",
          "Suunniteltu {points} luokituspisteen ikkuna",
          "Tallennetun jäsenyyden on oltava Plus tai Premium",
          "Tiukempi kirjattu pääsy. Palkintopottia ei ole"
        ]
      }
    }
  },
  "veto": {
    "kicker": "KARTTAVETO",
    "title": "Valitse kartta",
    "lede": "Hylkää karttoja, kunnes yksi on jäljellä. Tämä aula ei käynnistä Counter-Strike 2:ta eikä avaa palvelinta.",
    "mapSelected": "Valittu kartta: {map}",
    "yourBan": "Sinun bannisi",
    "opponentBan": "Vastustajan banni",
    "selected": "Valittu",
    "declined": "Hylätty",
    "decline": "Hylkää",
    "reset": "Nollaa veto",
    "declinedToast": "{map} hylättiin. Tämä sivu ei avaa palvelinta.",
    "lockKicker": "5v5-OTTELUHUONE",
    "lockTitle": "{map} on jäljellä oleva kartta",
    "lockBody": "Otteluhuoneesi. Kilpailuottelut alkavat täältä, kun kilpailubeta avautuu.",
    "close": "Sulje"
  },
  "arena": {
    "ariaLabel": "Otteluhuoneen esikatselu",
    "captain": "Kapteeni",
    "ping": "Ping {ping}",
    "mapPlates": "Karttalaatat",
    "selectMap": "Valitse {map}",
    "settings": {
      "region": "Alue",
      "mode": "Tila",
      "antiCheat": "Huijauksenesto",
      "simulator": "Esikatselu"
    },
    "chat": {
      "title": "JOUKKUECHAT",
      "kicker": "JOUKKUECHAT · TULOSSA PIAN",
      "captainName": "{name} (kapteeni)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "mennään",
        "dust 2 sopii meille",
        "valmis"
      ],
      "inputLabel": "Joukkuechatin viesti",
      "placeholder": "Viesti joukkueelle…",
      "send": "Lähetä"
    },
    "tiles": {
      "map": "Kartta",
      "server": "Palvelin",
      "serverValue": "EU West · tulossa pian",
      "mode": "Tila"
    },
    "identity": {
      "title": "HENKILÖLLISYYDEN VAHVISTUS",
      "kicker": "HENKILÖLLISYYSTARKISTUKSET · TULOSSA PIAN",
      "rows": [
        "Sähköpostivahvistus · tulossa pian",
        "Puhelinvahvistus · tulossa pian",
        "Kasvotarkistus · tulossa pian"
      ]
    },
    "security": {
      "title": "OTTELUN TURVALLISUUS",
      "kicker": "A.C.E SHIELD · KEHITTEILLÄ",
      "rows": [
        "Huijauksenestosuoja · kehitteillä",
        "Palvelimen eheystarkistus · kehitteillä",
        "Otteludatan salaus · kehitteillä"
      ]
    },
    "findMatchReason": "Matchmaking avautuu kilpailubetan myötä. Ranked-jonot eivät ole vielä käynnissä."
  },
};
