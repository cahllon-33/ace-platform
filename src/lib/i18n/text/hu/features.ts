import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funkciók",
      "description": "Specifikált A.C.E. Anti-Cheat kernelarchitektúra, biometrikus Face Scan összekapcsolás és tíz képességkalibrációs szint. Ezek a rendszerek nem élnek ezen az oldalon."
    },
    "header": {
      "kicker": "ACE-FUNKCIÓK / KERNEL / FACE-SCAN / KALIBRÁCIÓ",
      "title": "Platformfunkció-specifikáció",
      "lede": "Ez az oldal három tervezett A.C.E. rendszer gyártási szintű műszaki térképe: az autonóm csalásellenes kernel, a biometrikus Face Scan összekapcsolás és a tízszintű képességkalibrációs létra. Semmi ezen az oldalon nem élő kernel, élő kameratermék vagy élő ranked sor. A Steam OpenID, az 5v5 csapatok, az ágrajz-elrendezések és az Elo-típusú értékelési számítás megtalálhatók ebben a repóban. Dedikált CS2-szerverek, fizetések, díjak és letölthető integritáskliens nincsenek."
    },
    "kernel": {
      "title": "Anti-Cheat kernelarchitektúra",
      "paragraphs": [
        "A specifikált Autonomous Secure Shell egy hardverhez kötött integritáskliens, amely a Counter-Strike 2 mellett futna a játékos gépén, és aláírt ALLOW vagy DENY állapotot jelentene az A.C.E. által kezelt szervereknek. A kernel fail-closed kialakítású: ha a kliens hiányzik, le van állítva, elavult, hamisított vagy nem ellenőrzött, a ranked belépés megtagadva. A böngésző soha nem dönt a jogosultságról. A ranked MECCS KERESÉSE ezen az oldalon emiatt már zárva van.",
        "A tervezett kernelrétegek: felhasználói módú kézfogás, amely az ellenőrzött 64 bites SteamID-t az A.C.E.-fiókhoz köti; hardverazonosító (HWID) tanúsítási felület; ismert csalócsaládok aláírásfigyelő listája; és közös titokkal védett szerver–szerver jogosultsági útvonal. Csalóaláírás észlelése, megtagadott integritásellenőrzés vagy hamisított eszközazonosító a specifikáció szerint azonnal BANNED vagy PERM_BANNED fiókállapotot eredményez, és ha létezik számlázási termék, az előre fizetett előfizetési idő teljes elvesztését, visszatérítési kötelezettség nélkül. Ilyen kliens nem érkezik ezzel az oldallal. A Hamarosan letöltőkártyák csak elrendezések."
      ],
      "stats": [
        {
          "label": "KERNEL ÁLLAPOTA",
          "value": "Fejlesztés alatt"
        },
        {
          "label": "RANKED SOR",
          "value": "Fail-closed"
        },
        {
          "label": "HWID-TÁR",
          "value": "Ezen az oldalon nem gyűjtjük"
        }
      ]
    },
    "faceScan": {
      "title": "Biometrikus Face Scan összekapcsolás",
      "paragraphs": [
        "A Face Scan egy specifikált jövőbeli identitáskötési réteg, nem kameratermék ezen az oldalon. A tervezett kialakítás csak kifejezett hozzájárulás és külön jogi felülvizsgálat után kötne egy élőségellenőrzött arcsablont ugyanahhoz az A.C.E.-fiókhoz, amely már szerver által ellenőrzött SteamID-vel rendelkezik. A cél a korábbi korlátozás kijátszására használt fiókmegosztás megakadályozása. Az A.C.E. ma nem gyűjt arcképeket, arcbeágyazásokat, e-mail-címeket vagy hardver-ujjlenyomatokat. Az élő adatvédelmi irányelv továbbra is a Szigorú Szükségesség: csak ellenőrzött 64 bites SteamID és nyilvános Steam megjelenítendő név.",
        "Ha a Face Scan valaha megvalósul, nem váltja fel a Steam OpenID-t, nem használják viselkedésalapú hirdetések eladására, és önmagában nem nyit ranked sorokat. A ranked belépéshez továbbra is ellenőrzött csalásellenes útvonal kell. Amíg ez a felülvizsgálat nincs meg, a lobbi bármely Face Scan panelje tervezési előnézet."
      ]
    },
    "calibration": {
      "title": "Tíz képességkalibrációs szint",
      "intro": "A Competitive Calibration a közzétett A.C.E Rating Points szabályokat használja (verzió: {version}; lépés: {kFactor}; skála: {scale}). Az új fiókok a 3. rangon (Vanguard) kezdenek, FREE előfizetéssel, ACTIVE állapotban és {startingRating} versenyértékszámmal. A lobbi kristálynevei vizuális álnevek. A fizetős kozmetikumok soha nem vásárolnak értékszámot, könnyebb ellenfeleket, 128 tickes szervereket vagy sorelsőbbséget. Nincs eladó, működő 128 tickes termék.",
      "table": {
        "level": "Szint",
        "engineName": "Motornév",
        "crystalAlias": "Kristályálnév",
        "minRating": "Min. értékelés"
      },
      "divisions": {
        "before": "A lobbi I., II. és III. divíziója bemutató címke. Csak az elrendezési mérőszámokat változtatják. Divízió szerinti élő párosítás nem létezik. Lásd: ",
        "middle": " a 3D forgóasztalhoz és ",
        "after": " a kötelező versenyszöveghez."
      }
    }
  },
  "loot": {
    "kicker": "Kozmetikumok · hamarosan",
    "title": "A.C.E. LOOT ARCHITEKTÚRA — FEGYVERDROPOK",
    "lede": "Eredeti A.C.E. bevonatok, a bolttal érkeznek. A kozmetikumok soha nem befolyásolják a versenyt.",
    "mockDrop": "Hamarosan",
    "multiplierLabel": "Győzelmi arány szorzó követelmények",
    "ladderLabel": "Heti létradropok",
    "multiplierValue": "{multiplier}× sablon",
    "ladderValue": "Heti hely · hamarosan",
    "checkout": "Fizetés · hamarosan"
  },
  "communityRail": {
    "kicker": "Hírfolyam · hamarosan",
    "newsTitle": "Legfrissebb létrahírek",
    "newsItems": [
      "Az ágrajz üres — 0 / 100 csapat.",
      "A ranked keresés zárva marad, amíg nincs csalásellenes rendszer."
    ],
    "prizesTitle": "Napi skindíjak",
    "prizesBody": "A jutalmak és a fizetés az 1. szezonnal nyílnak."
  },
  "identityPreview": {
    "badge": "Előnézet — nem megerősített",
    "cards": {
      "faceScan": {
        "title": "Élő Face Scan ellenőrizve",
        "copy": "Az identitás élőségvizsgálata tervezett szolgáltatói ellenőrzés. Ma nem gyűjtünk biometrikus adatot."
      },
      "hardwareId": {
        "title": "Hardverazonosító összekapcsolva",
        "copy": "Az eszközkötés tervezett integritásjel. Ma nem gyűjtünk hardverazonosítót."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Előnézet",
    "kicker": "Hamarosan",
    "returnHome": "Vissza a kezdőlapra",
    "pages": {
      "support": {
        "title": "Támogatás",
        "body": "Nyilvános ügyfélszolgálatunk a versenybétával nyílik."
      },
      "anti-cheat": {
        "title": "Csalásellenes áttekintés",
        "body": "Az A.C.E.-nek nincs működő csalásellenes terméke. A ranked párosítás zárva marad, amíg valódi integráció nem létezik."
      },
      "download-client": {
        "title": "Kliens letöltése",
        "body": "Nincs letölthető A.C.E. asztali kliens. Natív kliens nem része a jelenlegi webes szakasznak."
      },
      "mobile-app": {
        "title": "Mobilalkalmazás",
        "body": "Az A.C.E. mobilalkalmazás az ütemtervben szerepel."
      },
      "news": {
        "title": "Hírek",
        "body": "Az A.C.E. hírszoba hamarosan nyílik."
      },
      "about": {
        "title": "Rólunk",
        "body": "Az A.C.E. független Counter-Strike 2 versenyoldal nyilvános előnézetben. Nem áll kapcsolatban a Valve-val."
      },
      "advertising": {
        "title": "Hirdetés",
        "body": "A partnerségi és hirdetési megkeresések hamarosan nyílnak."
      },
      "developers": {
        "title": "Fejlesztők",
        "body": "Még nincs nyilvános fejlesztői program. A repó szerverjogosultsági API-jai belső adapterek, nem partner SDK."
      },
      "press": {
        "title": "Sajtó",
        "body": "A sajtócsomag hamarosan érkezik."
      },
      "jobs": {
        "title": "Állások",
        "body": "A nyitott pozíciók itt lesznek felsorolva."
      },
      "terms": {
        "title": "Felhasználási feltételek",
        "body": "Az irányadó Felhasználási feltételek a /terms oldalon vannak közzétéve. A torna szabálykönyve a /rules oldalon."
      },
      "privacy": {
        "title": "Adatvédelmi szabályzat",
        "body": "Az Adatvédelmi szabályzat a /privacy oldalon van közzétéve. A Steam OpenID az egyetlen bejelentkezési mód; Steam-jelszót soha nem gyűjtünk."
      },
      "eula": {
        "title": "Anti-Cheat EULA",
        "body": "Nincs Anti-Cheat EULA, mert a csalásellenes rendszer nem aktív. A ranked zárva marad."
      }
    }
  }
};
