import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "meta": {
    "title": "Igraj",
    "description": "Ranked 5v5 matchmaking otvara se kad A.C.E Shield anti-cheat proradi."
  },
  "boards": {
    "label": "Ploče redova",
    "title": "Tri 5v5 ploče",
    "note": "Izbor ostaje na ovoj stranici. Ranked pretraga je zatvorena, a odabir ploče ne traži protivnike.",
    "items": {
      "open": {
        "name": "Otvorena ploča",
        "rules": [
          "Grupa bilo koje veličine, do pet",
          "Bez raspona rejtinga",
          "Steam OpenID je provjera identiteta",
          "Napisano za otvoreni trening kad red postoji"
        ]
      },
      "calibration": {
        "name": "Kalibracijska ploča",
        "rules": [
          "Solo, duo ili trio",
          "Planirani raspon od {points} bodova rejtinga",
          "Steam profil mora već biti spremljen",
          "Koristi A.C.E. pravilo rejtinga · pretraga uskoro"
        ]
      },
      "elite": {
        "name": "Elitna ploča",
        "rules": [
          "Solo ili duo",
          "Planirani raspon od {points} bodova rejtinga",
          "Spremljeno članstvo mora biti Plus ili Premium",
          "Stroži pisani ulaz. Nema nagradnog fonda"
        ]
      }
    }
  },
  "veto": {
    "kicker": "VETO MAPA",
    "title": "Odaberi mapu",
    "lede": "Odbijaj mape dok ne ostane jedna. Ovo predvorje ne pokreće Counter-Strike 2 i ne otvara poslužitelj.",
    "mapSelected": "Odabrana mapa: {map}",
    "yourBan": "Tvoja zabrana",
    "opponentBan": "Zabrana protivnika",
    "selected": "Odabrano",
    "declined": "Odbijeno",
    "decline": "Odbij",
    "reset": "Poništi veto",
    "declinedToast": "{map} je odbijena. Ova stranica ne otvara poslužitelj.",
    "lockKicker": "5v5 SOBA ZA MEČ",
    "lockTitle": "{map} je preostala mapa",
    "lockBody": "Tvoja soba za meč. Natjecateljski mečevi počinju ovdje kad se otvori natjecateljska beta.",
    "close": "Zatvori"
  },
  "arena": {
    "ariaLabel": "Pregled sobe za meč",
    "captain": "Kapetan",
    "ping": "Ping {ping}",
    "mapPlates": "Ploče mapa",
    "selectMap": "Odaberi {map}",
    "settings": {
      "region": "Regija",
      "mode": "Način",
      "antiCheat": "Anti-cheat",
      "simulator": "Pregled"
    },
    "chat": {
      "title": "TIMSKI CHAT",
      "kicker": "TIMSKI CHAT · USKORO",
      "captainName": "{name} (kapetan)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "idemo",
        "dust 2 nam odgovara",
        "spreman"
      ],
      "inputLabel": "Poruka timskog chata",
      "placeholder": "Poruka timu…",
      "send": "Pošalji"
    },
    "tiles": {
      "map": "Mapa",
      "server": "Poslužitelj",
      "serverValue": "EU West · uskoro",
      "mode": "Način"
    },
    "identity": {
      "title": "PROVJERA IDENTITETA",
      "kicker": "PROVJERE IDENTITETA · USKORO",
      "rows": [
        "Provjera e-pošte · uskoro",
        "Provjera telefona · uskoro",
        "Provjera lica · uskoro"
      ]
    },
    "security": {
      "title": "SIGURNOST MEČA",
      "kicker": "A.C.E SHIELD · U RAZVOJU",
      "rows": [
        "Anti-cheat zaštita · u razvoju",
        "Provjera integriteta poslužitelja · u razvoju",
        "Šifriranje podataka meča · u razvoju"
      ]
    },
    "findMatchReason": "Matchmaking se otvara s natjecateljskom betom. Ranked redovi još ne rade."
  },
  "matchFound": {
    "ariaSignedIn": "{title}. {name} pridružuje se postavi kad se mečevi otvore.",
    "banner": "ARENA · NATJECATELJSKA BETA USKORO",
    "mapPlate": "PLOČA MAPE · DUST II · NEMA 128-TICK POSLUŽITELJA",
    "rosterNote": "Pregledni pozivni znakovi.",
    "teamA": "TIM A · TACTICAL ALLIANCE",
    "teamB": "TIM B · SHADOW LEGION",
    "clockLabel": "SAT MEČA",
    "clockNote": "Ovaj sat se ponavlja. Red je zatvoren.",
    "chatKicker": "TIMSKI CHAT",
    "chatLines": [
      "Čekanje dok se sat ne resetira.",
      "Dust II je ploča mape na ovoj stranici.",
      "Za ovu postavu nije spojen nijedan poslužitelj."
    ],
    "chatField": "Poruke se ne šalju.",
    "identityKicker": "MREŽA IDENTITETA",
    "identityRows": [
      "Pošta s ulaznicom za meč ne šalje se.",
      "Nijedna provjera jezgre nije pokrenuta.",
      "Telemetrija uživo stiže s natjecateljskom betom."
    ],
    "findMatch": "PRONAĐI NATJECATELJSKI MEČ",
    "closedNotice": "Matchmaking se otvara s natjecateljskom betom. Ranked redovi još ne rade."
  }
};
