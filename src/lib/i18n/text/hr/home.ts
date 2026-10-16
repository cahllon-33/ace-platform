import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "liveStats": {
    "kicker": "UŽIVO",
    "online": "Trenutno online",
    "registered": "Registrirani igrači",
    "earlyTitle": "Rani pristup",
    "earlyBody": "Pridruži se prvim igračima na A.C.E. Brojke uživo pojavit će se ovdje kad zajednica naraste.",
    "unavailable": "Brojke uživo trenutno nisu dostupne.",
    "note": "Stvarne brojke, osvježavaju se svakih 30 sekundi."
  },
  "ops": {
    "identityKicker": "CENTAR IDENTITETA",
    "signedOutTitle": "Prijavi se putem Steama",
    "signedOutBody": "Poveži se službenim Steam OpenID-om da ovdje vidiš svoj Steam avatar, amblem ranga i Rating Points. A.C.E. nikad ne traži Steam lozinku.",
    "connect": "Prijavi se putem Steama",
    "openDeck": "Otvori Command Deck",
    "avatarAlt": "Steam avatar igrača {name}",
    "emblemAlt": "Amblem ranga {rank}",
    "rp": "Rating Points",
    "wins": "Pobjede",
    "losses": "Porazi",
    "winRate": "Postotak pobjeda",
    "matches": "Mečevi",
    "kd": "K/D",
    "na": "n/d",
    "kdNote": "K/D prikazuje n/d jer A.C.E. još ne bilježi ubojstva i smrti.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "U RAZVOJU",
    "shieldTitle": "Status integriteta",
    "shieldBody": "A.C.E Shield je u razvoju. Danas se ništa ne instalira, ne skenira i ne prati, pa nijedan račun nema presudu o integritetu.",
    "shieldClient": "Anti-cheat klijent",
    "shieldClientValue": "Nije objavljen",
    "shieldServer": "Poslužitelji mečeva",
    "shieldServerValue": "Nisu povezani",
    "shieldHardware": "Skeniranje hardvera",
    "shieldHardwareValue": "Ne prikuplja se",
    "shieldLink": "Kako će A.C.E Shield raditi",
    "seasonKicker": "SEZONA 1",
    "seasonChip": "DATUMI NISU NAJAVLJENI",
    "seasonTitle": "Praćenje sezone 1",
    "seasonBody": "Sezona 1 još nema datum početka ni završetka, pa nema odbrojavanja. Datumi će biti objavljeni na ovoj stranici prije početka sezone.",
    "statsKicker": "TVOJA STATISTIKA",
    "statsSignedOut": "Prijavi se putem Steama da vidiš svoju statistiku.",
    "statsEmpty": "Još nema zabilježenih mečeva. Pobjede i porazi pojavit će se nakon tvog prvog zabilježenog A.C.E. meča.",
    "statsLive": "Pobjede i porazi dolaze s tvog spremljenog A.C.E. računa.",
    "statsLink": "Otvori statistiku igrača"
  },
  "meta": {
    "title": "A.C.E. — Natjecateljska CS2 platforma",
    "description": "A.C.E. je planirana natjecateljska platforma za Counter-Strike 2 za identitet igrača, kalibraciju, timove i turnire. Ova javna stranica je pregled. Ranked matchmaking, anti-cheat, plaćanja i nagrade nisu aktivni."
  },
  "opening": {
    "dialogLabel": "A.C.E. uvod",
    "line": "A.C.E: Autonomni anti-cheat, natjecateljska kalibracija, elitni igrači",
    "enter": "Uđi na stranicu"
  },
  "hero": {
    "logoAlt": "A.C.E. Autonomni anti-cheat, natjecateljska kalibracija, elitni igrači",
    "arenaAlt": "A.C.E. ploča arene. Originalna slika pozornice, ne Valveova umjetnost. Na zaslonu piše televizija igara. Prijenos uživo je isključen."
  },
  "broadcast": {
    "kicker": "PRAĆENJE TURNIRA",
    "title": "Pult za prijenos",
    "lede": "Natjecateljski skup mapa nalazi se na ovom pultu: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis i Train. Ovo su originalne ploče. Nijedan turnir nije u eteru, a ova stranica ne reproducira Valveov meč.",
    "offAir": "NIJE U ETERU · {map}"
  },
  "jumpNav": {
    "label": "Kategorije početne",
    "play": "Igraj",
    "prizes": "Nagrade",
    "teams": "Timovi",
    "leaderboard": "Ljestvica",
    "ranks": "Rangovi",
    "systems": "Sustavi"
  },
  "charter": {
    "kicker": "GLAVNI RADNI PROSTOR PREDVORJA",
    "title": "A.C.E. NATJECATELJSKO PREDVORJE ZA MATCHMAKING I CENTAR ZA RASPOREĐIVANJE",
    "badge": "POSLUŽITELJI · USKORO",
    "lede": "Ovo predvorje ne dodjeljuje poslužitelj, ne pokreće anti-cheat klijent i ne isplaćuje nagradu.",
    "modules": [
      {
        "kicker": "MEČ PRONAĐEN · 5v5",
        "copy": "Okvir 5v5 na ovoj stranici zatvoreni je red. Ne dodjeljuje poslužitelj.",
        "chips": [
          "NEMA 128-TICK POSLUŽITELJA",
          "RED ZATVOREN"
        ]
      },
      {
        "kicker": "FIKSNI 3D RANGOVI",
        "copy": "Deset razina od Recruita do A.C.E. Legenda. Spremljeni rejting pojavljuje se nakon Steam prijave. Ova stranica ne bilježi meč.",
        "chips": [
          "PRAVILO REJTINGA ZABILJEŽENO",
          "OKRETNI STOL NA OVOJ STRANICI"
        ]
      },
      {
        "kicker": "NAGRADE SKINOVA",
        "copy": "Prvenstvene nagrade objavljuju se uz svaki događaj.",
        "chips": [
          "NIŠTA SE NE ISPORUČUJE",
          "NEMA PROVJERE DROPA"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELITE"
  },
  "membership": {
    "compareLink": "Pogledaj cijelu tablicu usporedbe"
  },
  "loot": {
    "wear": {
      "factoryNew": "Factory New",
      "minimalWear": "Minimal Wear"
    }
  },
  "serverHub": {
    "badge": "POSLUŽITELJI IGRE · USKORO",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}. Poslužitelj uskoro.",
    "note": "Regionalni 128-tick poslužitelji stižu s natjecateljskom betom."
  },
  "telemetry": {
    "badge": "PREGLED · USKORO",
    "lines": [
      "A.C.E SHIELD: U RAZVOJU",
      "MATRICA HARDVERSKIH ZABRANA: NE PRIKUPLJA SE IDENTIFIKATOR",
      "A.C.E. SHIELD VEZA: KLIJENT NIJE INSTALIRAN"
    ],
    "note": "Ova stranica ne pokreće kernel klijent, ne skenira memoriju i ne izdaje hardversku zabranu."
  },
  "comingSoon": {
    "badge": "NIJE DOSTUPNO",
    "body": "A.C.E. desktop klijent nije ponuđen za preuzimanje. Sezona 1 na ovoj stranici ne instalira softver niti otvara prijavu."
  },
  "operative": {
    "kicker": "Filmski taktički prikaz · originalno CSS okruženje · nije Valveova umjetnost",
    "title": "Dublje u CS2: vrhunska natjecateljska platforma",
    "lede": "Pravedniji mečevi, bolji suigrači. Rangovi koji vrijede, nagrade koje se broje.",
    "note": "Tekst kampanje. Ranked redovi, poslužitelji uživo i nagrade nisu aktivni."
  },
  "howStatus": {
    "label": "A.C.E. PODSUSTAV REGISTRACIJE — KALIBRACIJSKI MOTOR SPREMAN",
    "note": "Ranked redovi otvaraju se kad A.C.E Shield i kalibracija krenu uživo."
  },
  "shell": {
    "primaryNav": "Glavno",
    "mobileNav": "Mobilno",
    "elite": "ELITE",
    "notificationsTitle": "Obavijesti · uskoro",
    "notificationsAria": "Obavijesti. Nula nepročitanih.",
    "connectProfileTitle": "Poveži profil",
    "openProfileAria": "Otvori Command Deck profil",
    "connectProfileAria": "Poveži profil putem Steam OpenID-a",
    "signOutAria": "Odjavi se s A.C.E."
  },
  "notFound": {
    "kicker": "IZNIMKA MREŽE",
    "title": "POGREŠKA 404 — RADARSKA TELEMETRIJA IZGUBLJENA",
    "body": "Koordinata koju si zatražio ne postoji u našoj aktivnoj mreži poslužitelja.",
    "homeAria": "Povratak u predvorje početne stranice A.C.E.",
    "cta": "POVRATAK U PREDVORJE"
  },
  "error": {
    "kicker": "Pogreška",
    "title": "Nešto je pošlo po zlu",
    "body": "Ova javna stranica nije se mogla prikazati. Možeš pokušati ponovno. Na ovoj pregledu stranici nisu zatraženi podaci računa.",
    "retryAria": "Ponovno učitaj ovu stranicu",
    "retry": "Pokušaj ponovno"
  }
};
