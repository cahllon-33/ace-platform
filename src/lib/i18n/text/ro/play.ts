import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "PREZENTARE · Jucători exemplu, nu un meci live. Coada este închisă.",
    "showcaseShort": "PREZENTARE",
    "queueClosed": "COADĂ ÎNCHISĂ",
    "floorRp": "Pragul rangului {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatarul lui {name}",
    "sampleChat": "Mesaje exemplu. Netrimise, nu live.",
    "sampleLine": "EXEMPLU",
    "operatorA": "Artă originală de operator A.C.E pentru echipa A: un operator tactic cu cască, echipament grafit cu accente aurii",
    "operatorB": "Artă originală de operator A.C.E pentru echipa B: un luptător rebel cu glugă, echipament grafit cu accente aurii",
    "artNote": "Artă originală de personaje A.C.E. Nu sunt modele din joc."
  },
  "meta": {
    "title": "Joacă",
    "description": "Matchmakingul ranked 5v5 se deschide când anti-cheatul A.C.E Shield devine activ."
  },
  "boards": {
    "label": "Table de coadă",
    "title": "Trei table 5v5",
    "note": "Alegerea rămâne pe această pagină. Căutarea ranked este închisă, iar alegerea unei table nu caută adversari.",
    "items": {
      "open": {
        "name": "Tablă deschisă",
        "rules": [
          "Grup de orice mărime, până la cinci",
          "Fără interval de rating",
          "Steam OpenID este verificarea identității",
          "Scris pentru antrenament deschis când va exista o coadă"
        ]
      },
      "calibration": {
        "name": "Tablă de calibrare",
        "rules": [
          "Solo, duo sau trio",
          "Interval planificat de {points} puncte de rating",
          "Un profil Steam trebuie să fie deja stocat",
          "Folosește regula de rating A.C.E. · căutare în curând"
        ]
      },
      "elite": {
        "name": "Tablă de elită",
        "rules": [
          "Solo sau duo",
          "Interval planificat de {points} puncte de rating",
          "Abonamentul stocat trebuie să fie Plus sau Premium",
          "Intrare scrisă mai strictă. Fără fond de premii"
        ]
      }
    }
  },
  "veto": {
    "kicker": "VETO HĂRȚI",
    "title": "Alege harta",
    "lede": "Refuză hărți până rămâne una. Acest lobby nu pornește Counter-Strike 2 și nu deschide un server.",
    "mapSelected": "Hartă selectată: {map}",
    "yourBan": "Interdicția ta",
    "opponentBan": "Interdicția adversarului",
    "selected": "Selectată",
    "declined": "Refuzată",
    "decline": "Refuză",
    "reset": "Resetează veto",
    "declinedToast": "{map} a fost refuzată. Această pagină nu deschide un server.",
    "lockKicker": "CAMERĂ DE MECI 5v5",
    "lockTitle": "{map} este harta rămasă",
    "lockBody": "Camera ta de meci. Meciurile competitive încep aici când se deschide beta competitivă.",
    "close": "Închide"
  },
  "arena": {
    "ariaLabel": "Previzualizare cameră de meci",
    "captain": "Căpitan",
    "ping": "Ping {ping}",
    "mapPlates": "Plăci de hărți",
    "selectMap": "Selectează {map}",
    "settings": {
      "region": "Regiune",
      "mode": "Mod",
      "antiCheat": "Anti-cheat",
      "simulator": "Previzualizare"
    },
    "chat": {
      "title": "CHAT DE ECHIPĂ",
      "kicker": "CHAT DE ECHIPĂ · ÎN CURÂND",
      "captainName": "{name} (căpitan)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "hai că putem",
        "dust 2 e bună pentru noi",
        "gata"
      ],
      "inputLabel": "Mesaj în chatul echipei",
      "placeholder": "Mesaj către echipă…",
      "send": "Trimite"
    },
    "tiles": {
      "map": "Hartă",
      "server": "Server",
      "serverValue": "EU West · în curând",
      "mode": "Mod"
    },
    "identity": {
      "title": "VERIFICAREA IDENTITĂȚII",
      "kicker": "VERIFICĂRI DE IDENTITATE · ÎN CURÂND",
      "rows": [
        "Verificare e-mail · în curând",
        "Verificare telefon · în curând",
        "Verificare facială · în curând"
      ]
    },
    "security": {
      "title": "SECURITATEA MECIULUI",
      "kicker": "A.C.E SHIELD · ÎN DEZVOLTARE",
      "rows": [
        "Protecție anti-cheat · în dezvoltare",
        "Verificarea integrității serverului · în dezvoltare",
        "Criptarea datelor de meci · în dezvoltare"
      ]
    },
    "findMatchReason": "Matchmakingul se deschide odată cu beta competitivă. Cozile ranked nu rulează încă."
  },
};
