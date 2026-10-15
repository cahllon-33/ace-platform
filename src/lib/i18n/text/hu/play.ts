import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "premium": {
    "tag": "PREMIUM",
    "sample": "PREMIUM MINTA",
    "note": "A Premium mintával jelölt helyek az illusztrált Premium rangképet csak bemutatásként mutatják. Ezek mintajátékosok, nem előfizetők. A Premium kép csak kozmetikai, és soha nem változtat a pontszámon vagy a párosításon.",
    "artAlt": "{rank} illusztrált Premium rangkép"
  },
  "room": {
    "showcaseTag": "BEMUTATÓ · Mintajátékosok, nem élő meccs. A sor zárva.",
    "showcaseShort": "BEMUTATÓ",
    "queueClosed": "SOR ZÁRVA",
    "floorRp": "Rang alsó határa {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "{name} avatarja",
    "sampleChat": "Mintasorok. Nincsenek elküldve, nem élők.",
    "sampleLine": "MINTA",
    "operatorA": "Eredeti A.C.E operátor-művészet az A csapatnak: sisakos taktikai operátor grafitszürke felszerelésben, arany díszekkel",
    "operatorB": "Eredeti A.C.E operátor-művészet a B csapatnak: kapucnis lázadó harcos grafitszürke felszerelésben, arany díszekkel",
    "artNote": "Eredeti A.C.E karakterművészet. Ezek nem játékmodellek."
  },
  "meta": {
    "title": "Játék",
    "description": "A ranked 5v5 párosítás akkor nyílik, amikor az A.C.E Shield csalásellenes rendszer élesedik."
  },
  "boards": {
    "label": "Sortáblák",
    "title": "Három 5v5 tábla",
    "note": "A választás ezen az oldalon marad. A ranked keresés zárva van, és egy tábla kiválasztása nem keres ellenfeleket.",
    "items": {
      "open": {
        "name": "Nyílt tábla",
        "rules": [
          "Bármilyen méretű csapat, legfeljebb öt fő",
          "Nincs értékelési ablak",
          "A Steam OpenID az azonosság ellenőrzése",
          "Nyílt edzésre írva, ha lesz sor"
        ]
      },
      "calibration": {
        "name": "Kalibrációs tábla",
        "rules": [
          "Egyedül, ketten vagy hárman",
          "Tervezett {points} értékelési pontos ablak",
          "Egy Steam-profilnak már tárolva kell lennie",
          "Az A.C.E. értékelési szabályát használja · a keresés hamarosan"
        ]
      },
      "elite": {
        "name": "Elit tábla",
        "rules": [
          "Egyedül vagy ketten",
          "Tervezett {points} értékelési pontos ablak",
          "A tárolt tagságnak Plus vagy Premium szintűnek kell lennie",
          "Szigorúbb írásos belépés. Nincs díjalap"
        ]
      }
    }
  },
  "veto": {
    "kicker": "PÁLYAVÉTÓ",
    "title": "Válaszd ki a pályát",
    "lede": "Utasíts el pályákat, amíg egy marad. Ez a lobbi nem indítja a Counter-Strike 2-t és nem nyit szervert.",
    "mapSelected": "Kiválasztott pálya: {map}",
    "yourBan": "A te tiltásod",
    "opponentBan": "Az ellenfél tiltása",
    "selected": "Kiválasztva",
    "declined": "Elutasítva",
    "decline": "Elutasítás",
    "reset": "Vétó visszaállítása",
    "declinedToast": "{map} elutasítva. Ez az oldal nem nyit szervert.",
    "lockKicker": "5v5 MECCSSZOBA",
    "lockTitle": "{map} a megmaradt pálya",
    "lockBody": "A meccsszobád. A versenymeccsek itt indulnak, amikor a versenybéta megnyílik.",
    "close": "Bezárás"
  },
  "arena": {
    "ariaLabel": "Meccsszoba előnézete",
    "captain": "Kapitány",
    "mapPlates": "Pályatáblák",
    "selectMap": "{map} kiválasztása",
    "settings": {
      "region": "Régió",
      "mode": "Mód",
      "antiCheat": "Csalásellenes",
      "simulator": "Előnézet"
    },
    "chat": {
      "title": "CSAPATCSEVEGÉS",
      "kicker": "CSAPATCSEVEGÉS · HAMAROSAN",
      "captainName": "{name} (kapitány)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "hajrá",
        "a dust 2 jó nekünk",
        "kész"
      ],
      "inputLabel": "Csapatcsevegés üzenet",
      "placeholder": "Üzenet a csapatnak…",
      "send": "Küldés"
    },
    "tiles": {
      "map": "Pálya",
      "server": "Szerver",
      "serverValue": "EU West · hamarosan",
      "mode": "Mód"
    },
    "identity": {
      "title": "AZONOSSÁGELLENŐRZÉS",
      "kicker": "AZONOSSÁGI ELLENŐRZÉSEK · HAMAROSAN",
      "rows": [
        "E-mail-ellenőrzés · hamarosan",
        "Telefonos ellenőrzés · hamarosan",
        "Arcellenőrzés · hamarosan"
      ]
    },
    "security": {
      "title": "MECCSBIZTONSÁG",
      "kicker": "A.C.E SHIELD · FEJLESZTÉS ALATT",
      "rows": [
        "Csalás elleni védelem · fejlesztés alatt",
        "Szerverintegritás-ellenőrzés · fejlesztés alatt",
        "Meccsadatok titkosítása · fejlesztés alatt"
      ]
    },
    "findMatchReason": "A párosítás a versenybétával nyílik. A ranked sorok még nem futnak."
  }
};
