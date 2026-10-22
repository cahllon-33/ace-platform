import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E osztagkezelés",
    "description": "Az 5v5 osztagod munkatere. A meghívókhoz ellenőrzött Steam-munkamenet kell; a csalásellenes ellenőrzések az A.C.E Shielddel érkeznek."
  },
  "hero": {
    "kicker": "CSAPATOK",
    "title": "Squads",
    "lede": "Öt nyitott hely egy sorban. Klán csak Steam-bejelentkezés és létrehozott csapat után tárolódik."
  },
  "gate": {
    "kickerPremium": "Klánrekord a csomagválasztás után",
    "kickerDefault": "Klánrekord",
    "title": "Ötfős csapat vagytok?",
    "intro": "Az 1. hely a Steammel bejelentkezett játékos. A 2–5. helyeknek már A.C.E-fiókkal kell rendelkezniük. Egy klán mentése nem terhel 7 $-t, nem küld e-mailt, és nem helyezi a klánt a 100 csapatos táblára.",
    "yes": "Igen, öt játékos",
    "no": "Nem, a helyek maradjanak nyitva",
    "seatsOpen": "Az öt hely nyitva marad. Semmi nem lett tárolva.",
    "connectSteam": "Előbb csatlakoztasd a Steamet. A gomb visszatér erre az oldalra. Az A.C.E soha nem kéri a Steam-jelszavadat.",
    "alreadyMember": "{name} már a(z) {team} tagja. Ezzel az űrlappal nem jön létre második klán.",
    "thisAccount": "Ez a fiók",
    "acceptTerms": "Klán mentése előtt fogadd el a feltételeket.",
    "notStored": "A klán nem lett tárolva.",
    "clanName": "Klán neve",
    "captainSeat": "1. hely, kapitány: {name}",
    "signedInSteam": "Bejelentkezett Steam-fiók",
    "seatLabel": "{seat}. hely SteamID vagy A.C.E-fiókazonosító",
    "submit": "Ötfős klán mentése",
    "saved": "A klán neve tárolva, és négy meghívó függőben van. Ezek a játékosok csak elfogadás után kerülnek a keretbe. Ez nem hely a 100 csapatos táblán. Semmit nem terheltünk."
  },
  "squadDesk": {
    "kicker": "Osztagpult",
    "title": "Kérdések az írott szabályokból",
    "intro": "Ez a pult csak az ezen az oldalon közzétett tényeket olvassa. Nem észlel csalást, nem nyit meccset és nem módosít fiókot.",
    "questionLabel": "Kérdés",
    "placeholder": "Kérdezz az öt helyről, a csomagokról vagy a támogatásról",
    "ask": "Kérdezés",
    "fallback": "Ez a pult csak az oldalon leírt szabályok alapján válaszol: csomagok, az öt hely, Steam OpenID és támogatás.",
    "facts": {
      "email": "Nem küldünk e-mailt. A csomagnyugták ezen az oldalon maradnak.",
      "charge": "A Premium havi 7 $. Hamarosan: még nincs fizetés, így semmit nem terhelünk.",
      "board": "A tárolt klán keretrekord. Nem kerül a 100 csapatos táblára. A tábla a szezon indulásáig 0 regisztráltat mutat.",
      "steam": "A bejelentkezés hivatalos Steam OpenID-t használ. Az A.C.E soha nem kéri a Steam-jelszavadat. Erről az oldalról a Steam ide tér vissza.",
      "roster": "Az 1. hely a bejelentkezett kapitány. A 2–5. helyeknek már A.C.E-fiókkal kell rendelkezniük. A meghívók függőben maradnak, amíg minden játékos el nem fogadja.",
      "badge": "A helyjelvények élő A.C.E Shield ellenőrzésekké válnak, amikor a csalásellenes rendszer elindul.",
      "support": "Nyisd meg a Támogatás vagy Kapcsolat oldalt ezen az oldalon. A támogatási felszólítás nem nyit jegyet, és a Kapcsolat oldalon beírt szöveg nem kerül továbbításra.",
      "rating": "Egy új értékszám 1200-ról indul. Ez az oldal nem árul értékszámot, nem nyit sort, nem csatlakoztat CS2-szervert és nem ad át díjat."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry Fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Support"
    },
    "rankLabel": "{level}. rang",
    "noAgents": "Még nincs tárolt csapat nélküli játékos.",
    "notice": "Meghívót csak bejelentkezett kapitány küldhet. A helyen lévő jelvény nem élő csalásellenes ellenőrzés."
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E bajnokság — 100 csapatos elit kieséses torna",
      "description": "A 100 csapatos kieséses torna. Kattints egy klánra a keret megnyitásához, majd az egyes játékosprofilokhoz. A nevezés hamarosan nyílik."
    },
    "intro": {
      "title": "A.C.E. BAJNOKSÁG — 100 CSAPATOS ELIT KIESÉSES TORNA",
      "lede": "A közzétett mezőny egy 100 csapatos kieséses torna. Az alábbi grafikon ez az elrendezés. Egy klánra kattintva megnyílik a keretfiók. Nevezés: 0 / 100. Pénzdíjat nem hirdetünk és nem finanszírozunk.",
      "formatValue": "100 csapatos ágrajzmátrix",
      "briefTitle": "100 csapatos műveleti összefoglaló",
      "briefBody": "Egyetlen versenyelrendezés fedi le a teljes 100 csapatos mezőnyt. Amikor a nevezés megnyílik, az első 28 elfogadott klán erőnyerőként kihagyja az 1. fordulót és a 2. fordulóba jut. A többi 72 klán játssza az 1. fordulót. A kitöltetlen helyek nevei helyőrzők, amíg a klánok nem neveznek. A teljes szabálykönyv a fa alatt található. A meccslobbik a versenybétával nyílnak, és a díjakat eseményenként erősítik meg."
    },
    "bracket": {
      "kicker": "100 csapatos kieséses torna · hamarosan",
      "title": "100 csapatos ágrajzmátrix",
      "statusUnavailable": "A nevezés hamarosan nyílik. Addig az ágrajz előnézeti klánokat mutat.",
      "statusEmpty": "A nevezés hamarosan nyílik. Addig az ágrajz előnézeti klánokat mutat.",
      "statusStored": "{count} nevezett klán kerül elsőként a helyére. A maradék helyek előnézeti klánokat mutatnak. A későbbi fordulók a meccsek rögzítésével telnek meg.",
      "openSlot": "Nyitott hely",
      "openCompetitorSlot": "Nyitott versenyzői hely",
      "openRoster": "{name} keretének megnyitása",
      "bye": "👑 [ERŐNYERŐ - 2. FORDULÓBA KIEMELVE]",
      "championStage": "BAJNOKI SZAKASZ",
      "leftWing": "Bal szárny",
      "rightWing": "Jobb szárny",
      "emptySlotNotice": "Ez a versenyzői hely üres. Még nincs tárolt klán.",
      "grandFinalNotice": "A nagydöntő nyitva marad, amíg mindkét elődöntő rögzítésre nem kerül.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "Csapatprofil bezárása",
      "kicker": "Bajnoki profil · előnézet",
      "matchesPlayed": "Játszott meccsek",
      "winRate": "Összesített győzelmi arány",
      "streak": "Aktív tornasorozat",
      "rosterHeading": "5 fős keretmátrix",
      "openSeat": "Nyitott hely {seat}",
      "noPlayer": "Nincs tárolt játékos",
      "previous": "Előző klán",
      "count": "Klán {index} / {total}",
      "next": "Következő klán",
      "close": "Profil bezárása",
      "disclosure": "A játékosok felszerelései és készletei itt jelennek meg, ha a játékosok megosztják őket. Az A.C.E nem gyűjt hardveradatot."
    },
    "player": {
      "level": "SZINT {level} · RP {rating}",
      "record": "Gy–V {wins}–{losses}",
      "kdNotStored": "K/D nincs tárolva",
      "openProfileAria": "{name} profiljának megnyitása",
      "openProfile": "Profil megnyitása",
      "badge": "KÉSZ / CSALÁSELLENES MEGFELELŐSÉG",
      "badgeNote": "A.C.E Shield ellenőrzés · hamarosan",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Egér",
        "dpi": "DPI",
        "keyboard": "Billentyűzet",
        "monitor": "Monitor",
        "headset": "Headset"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · nincs megosztva",
    "gpu": "GPU · nincs megosztva",
    "mouse": "Egér · nincs megosztva",
    "dpi": "DPI · nincs megosztva",
    "keyboard": "Nincs megosztva",
    "monitor": "Frissítési frekvencia · nincs megosztva",
    "headset": "Nincs megosztva"
  },
  "profileDisclosure": "Az A.C.E nem tárol hardverkészleteket és nem futtat csalásellenes klienst. A teljesítménytrend-grafikonokhoz és a harci mátrixhoz A.C.E Plus vagy Premium munkamenet szükséges. Az ezen az oldalon beírt Steam-profil link nem kerül mentésre és nem hivatalos azonosító.",
  "errors": {
    "signInRequired": "Bejelentkezés szükséges.",
    "nameLength": "A csapatnévnek 2 és 32 karakter között kell lennie.",
    "alreadyCaptain": "Ez a fiók már egy csapat kapitánya.",
    "nameTaken": "Ilyen nevű csapat már létezik.",
    "idRequired": "SteamID vagy A.C.E-fiókazonosító szükséges.",
    "noAccountForToken": "Ehhez a SteamID-hez vagy fiókazonosítóhoz nem tartozik A.C.E-fiók.",
    "clanNeedsFour": "Egy ötfős klánhoz a bejelentkezett kapitány és négy SteamID kell.",
    "seatNeedsId": "Mind a négy helyhez SteamID vagy A.C.E-fiókazonosító kell.",
    "seatsDistinct": "Minden helyre másik játékos kell.",
    "captainHoldsSeat": "A kapitány már az 1. helyen van. Használj négy másik játékost.",
    "fewerThanFour": "Ezek az azonosítók négynél kevesebb fiókhoz tartoznak.",
    "selfInvite": "A kapitány nem hívhatja meg a saját fiókját.",
    "captainOnly": "Csak a kijelölt kapitány küldhet meghívót.",
    "rosterLimit": "Egy CS2 keret öt játékosból áll, a kapitánnyal együtt.",
    "alreadyOnRoster": "Ez a játékos már a keretben van.",
    "noAccountForId": "Ehhez az azonosítóhoz nem tartozik A.C.E-fiók.",
    "inviteNotFound": "A meghívó nem található.",
    "inviteNotPending": "Ez a meghívó már nincs függőben.",
    "rosterFull": "A keret már megtelt.",
    "createFailed": "Nem sikerült csapatot létrehozni.",
    "inviteFailed": "A meghívás sikertelen.",
    "updateInviteFailed": "Nem sikerült frissíteni a meghívót."
  }
};
