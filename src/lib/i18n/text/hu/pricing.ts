import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  matrix: {
    "kicker": "FUNKCIÓMÁTRIX",
    "title": "Tagságok összehasonlítása",
    "note": "Arany pipa: benne van. Vonal: nincs benne. Hamarosan: a csomag része, de még nem jelent meg. Egyik csomag sem vásárol ratinget, párosítást vagy sorelsőbbséget.",
    "checkout": "Fizetés még nincs, ezért ma minden fiók Free.",
    "feature": "Funkció",
    "included": "Benne van",
    "notIncluded": "Nincs benne",
    "soon": "Hamarosan",
    "rows": {
      "site": "Nyilvános oldal és Steam OpenID bejelentkezés",
      "ladder": "Rating Points létra és standard rangemblémák",
      "squads": "Ötfős klánrekord a Squadsban",
      "stats": "Játékosstatisztika: rating-alakulás grafikon",
      "gauges": "Játékosstatisztika: fejlövés-% és pontosság mérők",
      "letter": "Köszönőlevél és e-mailes támogatás",
      "rankArt": "Prémium rangművészet és rangkódex",
      "card": "Animált prémium profilkártya",
      "badges": "Különleges jelvények és az ELITE SEAL",
      "analysis": "Bővített meccselemzés",
      "beta": "Korai hozzáférés béta funkciókhoz",
      "support": "Kiemelt támogatás Premium tagoknak",
      "advantage": "Rating-növelés, párosítási vagy sorelőny"
    }
  },
  plansR11: {
    "termsPlusStats": "Játékosstatisztika: a rating alakulásának grafikonja a rögzített meccsekből. A fejlövés-% és a pontosság mérői hamarosan érkeznek.",
    "codexTitle": "Prémium rangkódex és animált kártya",
    "codexBody": "Ez a Premiumban foglalt rangművészet és animált profilkártya. Kozmetikai művészet ugyanazon a Rating Points létrán, versenyelőny nélkül.",
    "codexLink": "A prémium rangkódex megnyitása"
  },
  premiumExtras: {
    "card": {
      "previewTag": "ELŐNÉZET",
      "previewNote": "Az animált Premium profilkártya előnézete. A név és az értékek minták. Egy valódi profil csak akkor mutatja ezt a kártyát, ha a tárolt csomagja Premium.",
      "planTag": "A.C.E PREMIUM",
      "seal": "ELITE PECSÉT",
      "rank": "Rang",
      "rating": "Értékelés",
      "sampleName": "Mintajátékos",
      "ownTitle": "A Premium profilkártyád"
    },
    "analysis": {
      "metaTitle": "Bővített meccselemzés",
      "metaDescription": "A Premium meccselemzés elrendezése: halálozási hőtérkép, fejlövés-arány és körönkénti teljesítmény. Hamarosan, amint létezik demófeldolgozás.",
      "kicker": "PREMIUM · MECCSELEMZÉS",
      "title": "Bővített meccselemzés",
      "lede": "Halálozási hőtérkép, fejlövés-arány és körönkénti teljesítmény a rögzített meccseidhez. Ehhez demófeldolgozás kell, ami még nem létezik.",
      "sampleTag": "MINTAELRENDEZÉS — NEM A TE ADATAID",
      "soon": "Hamarosan",
      "soonCaption": "Kitöltődik, amint létezik demófeldolgozás. Semmi lent nem valódi statisztika.",
      "heatmap": "Halálozási hőtérkép",
      "headshot": "Fejlövés %",
      "rounds": "Körönkénti teljesítmény",
      "noData": "Nincs adat",
      "locked": "A bővített meccselemzés az A.C.E Premium része (7 $/hó). Hamarosan: fizetés még nincs, így ma egyetlen fiók sem Premium.",
      "premiumNote": "A csomagod Premium. Az elemzésed itt jelenik meg, amint létezik demófeldolgozás.",
      "signIn": "Jelentkezz be Steammel, hogy ellenőrizd az elemzéshez való hozzáférésed.",
      "plansLink": "Csomagok megtekintése"
    },
    "terms": {
      "metaTitle": "Premium feltételek",
      "metaDescription": "Mit tartalmaz az A.C.E Plus és Premium, mit nem tartalmaz egyik csomag sem, és hogyan működik a lemondás.",
      "kicker": "ACE-LEGAL / PREMIUM FELTÉTELEK",
      "title": "A.C.E Premium feltételek",
      "intro": "Ezek a feltételek leírják, mit tartalmaznak a fizetős csomagok. Kiegészítik a /terms oldalon található Felhasználási feltételeket. Fizetés még nincs, így ma semmit nem lehet megvásárolni.",
      "pricesTitle": "1. Csomagok, árak és lemondás",
      "prices": "Free {free}. Plus havi {plus}. Premium havi {premium}. A csomagok havonta megújulnak. Bármikor lemondhatod az irányítópult beállításaiban, kötbér nélkül. A megkezdett hónapokat nem térítjük vissza, ahogy a Felhasználási feltételek is rögzítik.",
      "plusTitle": "2. Mit tartalmaz a Plus",
      "plus1": "Mindent, ami a Free-ben van.",
      "plus2": "Hamarosan: köszönőlevél és e-mailes támogatás a support@ace-platform.gg címen, amint létezik fizetés.",
      "premiumTitle": "3. Mit tartalmaz a Premium",
      "prem1": "Mindent, ami a Plusban van.",
      "prem2": "Prémium rangművészet és a prémium rangkódex: az eredeti, illusztrált A.C.E. emblémakészlet a profilodon. Csak kozmetikai, ugyanazon a Rating Points létrán.",
      "prem3": "Az animált Premium profilkártya.",
      "prem4": "Különleges jelvények és az ELITE PECSÉT.",
      "prem5": "Hamarosan: bővített meccselemzés (halálozási hőtérkép, fejlövés %, körönkénti teljesítmény), amint létezik demófeldolgozás.",
      "prem6": "Hamarosan: korai hozzáférés béta funkciókhoz, amikor megnyílik egy béta.",
      "prem7": "Hamarosan: kiemelt támogatás Premium tagoknak.",
      "neverTitle": "4. Mit nem tartalmaz egyik csomag sem",
      "never": "Egyik csomag sem ad versenyelőnyt. Egyik csomag sem ad Rating Pointsot és nem emeli az értékelést. Egyik csomag sem ad párosítási előnyt, elsőbbségi sort vagy könnyebb ellenfeleket.",
      "soonTitle": "5. Hamarosan érkező funkciók",
      "soon": "Semmi, ami Hamarosan jelölést kapott, nem ígéret a megjelenéséig. Addig az ár nem tartalmazza.",
      "languageTitle": "6. Nyelv",
      "language": "A fordítások a kényelmet szolgálják. Ha egy fordítás eltér az angol szövegtől, az angol szöveg az irányadó.",
      "contact": "Kérdések: support@ace-platform.gg",
      "footerLink": "Premium feltételek",
      "pricingLink": "A Premium feltételek elolvasása"
    }
  },
  "meta": {
    "title": "Árak",
    "description": "A.C.E. tagság: Free {free}, Plus {plus}/hó, Premium {premium}/hó. Egész számra rögzített megjelenített árak."
  },
  "period": {
    "monthly": "/hó"
  },
  "hero": {
    "badge": "Tagság",
    "title": "Hozzáférési szintek",
    "lede": "Free {free}. Plus {plus}/hó. Premium {premium}/hó. Ezek az összegek egész számra rögzítettek. A fizetős csomagok soha nem vásárolnak értékelést vagy könnyebb ellenfeleket."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafit",
      "title": "Nyílt hozzáférés",
      "points": [
        "Jelentkezz be Steam OpenID-vel. Az A.C.E. soha nem kéri a Steam-jelszavadat.",
        "A tárolt értékelés 1 000-ről indul. Egyetlen meccseredmény sem változtatta meg.",
        "Minden nyilvános oldal: játék, tornák, ranglista, csapatok és szabályok."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Játékosstatisztika és támogatás",
      "points": [
        "Minden, ami a Free-ben.",
        "Játékosstatisztika: a rating alakulásának grafikonja a rögzített A.C.E. meccsekből. A fejlövés-% és a pontosság mérői hamarosan érkeznek.",
        "Hamarosan: köszönőlevél és e-mailes támogatás a support@ace-platform.gg címen, amint lesz fizetés. A Plus nem vásárol ratinget vagy könnyebb ellenfeleket."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Profilgrafika, jelvények és elemzés",
      "points": [
        "Mindent, ami a Plusban van.",
        "Prémium rangművészet és a prémium rangkódex, az animált profilkártya, különleges jelvények és az ELITE SEAL.",
        "Hamarosan: bővített meccselemzés, korai béta-hozzáférés és kiemelt támogatás Premium tagoknak.",
        "Nincs versenyelőny: nincs Rating Points-növelés és nincs párosítási előny."
      ]
    }
  },
  "card": {
    "elite": "ELITE",
    "stayFree": "Maradok a Free-n",
    "freeNote": "Most nyitva",
    "choose": "{plan} választása",
    "chooseAria": "{plan} választása havi {price} áron"
  },
  "billing": {
    "kicker": "SZÁMLÁZÁSI IDŐVONAL",
    "title": "Hogyan működik majd a számlázás, ha lesz",
    "body": "A Plus pontosan {plus}/hó. A Premium pontosan {premium}/hó.",
    "display": {
      "label": "01 · MEGJELENÍTÉS",
      "body": "Free {free}. Plus {plus}/hó. Premium {premium}/hó. A fizetős szintek soha nem vásárolnak értékelést vagy könnyebb ellenfeleket."
    },
    "rolling": {
      "label": "02 · GÖRDÜLŐ CIKLUS",
      "body": "Ha lesz számlázás, a díjak havi gördülő ciklusban újulnak meg. A töredékhónap nem téríthető vissza. A lemondás leállítja a következő ciklust, és nem törli a jelenlegi előre fizetett időszakot."
    },
    "today": {
      "label": "03 · MA"
    }
  },
  "compare": {
    "kicker": "Amit az A.C.E. ma ígérhet",
    "title": "Tagságok összehasonlítása",
    "note": "Minden sor az oldal mai állapotát tükrözi. A fizetés hamarosan érkezik, és egy fizetős csomag soha nem nyit sort és nem vásárol előnyt.",
    "caption": "Free, Plus és Premium összehasonlítva az oldal mai működése szerint",
    "includedToday": "Ma tartalmazza",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Nyilvános oldal",
        "detail": "Kezdőlap, játék, tornák, ranglista, csapatok, szabályok és feltételek."
      },
      "steamSignIn": {
        "feature": "Steam-bejelentkezés",
        "detail": "Hivatalos Steam OpenID. Az A.C.E. soha nem kéri a Steam-jelszavadat."
      },
      "startingRating": {
        "feature": "Kezdő értékelés",
        "detail": "Az új fiókon tárolt szám bármely rögzített meccs előtt."
      },
      "recordedMatches": {
        "feature": "Rögzített meccsek",
        "detail": "Befejezett A.C.E.-meccsből írt győzelmek és vereségek."
      },
      "rankedQueue": {
        "feature": "Ranked sor",
        "detail": "A MECCS KERESÉSE zárva marad, amíg valódi sor nem létezik."
      },
      "cs2Servers": {
        "feature": "CS2-szerverek",
        "detail": "Ez az oldal nem küld szervercímet vagy csatlakozási linket."
      },
      "antiCheatClient": {
        "feature": "Csalásellenes kliens",
        "detail": "Erről az oldalról semmi nem töltődik le."
      },
      "charge": {
        "feature": "Terhelés",
        "detail": "A Plus vagy Premium választása nem kér kártyát."
      },
      "ratingForSale": {
        "feature": "Eladó értékelés",
        "detail": "Egy fizetős címke soha nem vásárol értékelést vagy könnyebb ellenfeleket."
      },
      "prizeOrWeapon": {
        "feature": "Díj vagy fegyver",
        "detail": "Nem kerül kiszállításra skin, kés vagy díjalap."
      },
      "goldEliteSeal": {
        "feature": "Elit pecsét és különleges jelvények",
        "detail": "Csak Premium, a szerveren tárolt szintből olvasva. Kozmetikai. A fizetés nem állítja be ezt a szintet."
      }
    },
    "cells": {
      "open": "Nyitva",
      "yes": "Igen",
      "noneYet": "Még nincs",
      "closed": "Zárva",
      "notConnected": "Hamarosan",
      "notShipped": "Nem jelent meg",
      "noCharge": "Nincs terhelés",
      "notForSale": "Nem eladó",
      "none": "Nincs",
      "no": "Nem",
      "storedTierOnly": "Csak tárolt szint"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus nyugta",
      "metaDescription": "Az ezen az oldalon megjelenített A.C.E. Plus levél. A fizetés nem él, így semmit nem terhelünk és e-mailt sem küldünk.",
      "planName": "A.C.E. Plus",
      "nextLabel": "Folytatás az A.C.E.-n",
      "nextBody": "A nyilvános oldalak nyitva maradnak. Ez a választás nem nyit sort és nem változtatja meg a tárolt szintet."
    },
    "premium": {
      "metaTitle": "Premium nyugta",
      "metaDescription": "Az ezen az oldalon megjelenített A.C.E. Premium levél. A fizetés nem él, így semmit nem terhelünk és e-mailt sem küldünk.",
      "planName": "A.C.E. Premium",
      "nextLabel": "A Premium feltételek elolvasása",
      "nextBody": "A Premium: prémium rangművészet, animált profilkártya, különleges jelvények és az ELITE SEAL, valamint minden, ami a Plusban van. Klán mentése a Squadsban minden fióknak ingyenes."
    }
  },
  "letter": {
    "kicker": "{plan} · havi {price}",
    "title": "Köszönjük a választásodat",
    "flag": "Ez a levél az oldalon jelenik meg. E-mail nem ment ki. Kártyát nem terheltünk. A fizetés nem él, és a tárolt tagsági szint nem változott.",
    "greeting": "Kedves játékos!",
    "intro": "Köszönjük, hogy a(z) {plan} csomagot választottad. Ez az oldal a nyugta. Rögzíti a megjelenített árat, hogy a választás ma mit tartalmaz, mit nem, és az oldalon közzétett támogatási címet.",
    "selected": {
      "title": "Amit választottál",
      "items": [
        "Csomag neve: {plan}.",
        "Megjelenített ár: havi {price}. Az összeg címke, nem terhelés.",
        "Fizetés: nincs. A csomag választása nem kér kártyát.",
        "E-mail: nincs. Az A.C.E. nem küldi el ezt a levelet postafiókba.",
        "Tárolt szint: változatlan. A különleges jelvények és az elit pecsét csak akkor jelennek meg, ha a fiók már Premiumot tárol.",
        "Értékelés: nem eladó. Egy új fiók továbbra is 1 000-ről indul."
      ]
    },
    "today": {
      "title": "Amit ma használhatsz",
      "items": [
        "A nyilvános oldal: kezdőlap, játék, tornák, ranglista, csapatok, szabályok és feltételek.",
        "Steam-bejelentkezés a hivatalos Steam OpenID-n keresztül. Az A.C.E. soha nem kéri a Steam-jelszavadat.",
        "Ugyanazok a nyilvános oldalak, mint a Free-ben. Ez az ár nem nyit külön sort."
      ]
    },
    "excluded": {
      "title": "Amit ez a választás nem tartalmaz",
      "items": [
        "Élő ranked sort. A MECCS KERESÉSE zárva marad.",
        "Counter-Strike 2 szervert, szervercímet vagy csatlakozási linket.",
        "Csalásellenes letöltést. Az A.C.E Shield fejlesztés alatt áll.",
        "Díjat, skint, kést vagy díjalapot.",
        "Helyet a 100 csapatos táblán. A tábla a szezon indulásáig 0 regisztráltat mutat.",
        "Könnyebb ellenfeleket, vásárolt értékelést vagy a Free-től eltérő nyilvános oldalt."
      ]
    },
    "trouble": {
      "title": "Ha valami nem működik",
      "items": [
        "Terhelésre vagy fizetős szintre számítottál. Semmi nem lett alkalmazva. A fiók változatlan.",
        "Ezt a levelet postafiókban vártad. Csak ezen az oldalon létezik.",
        "A Steam nem csatlakozott. Használd a Profil csatlakoztatása gombot, és előbb fogadd el a feltételek jelölőnégyzetét. Soha ne írd be a Steam-jelszavadat az A.C.E.-be.",
        "Segítségre van szükséged. Használd az alábbi támogatási címet, vagy nyisd meg az oldal súgóoldalait."
      ]
    },
    "support": {
      "title": "Támogatás",
      "addressBefore": "Az oldalon feltüntetett támogatási cím: ",
      "addressAfter": ".",
      "helpBefore": "Segítség az oldalon: ",
      "supportLink": "Támogatás",
      "helpAnd": " és ",
      "contactLink": "Kapcsolat",
      "rulesBefore": ". A szabályok itt találhatók: ",
      "rulesLink": "Szabályok",
      "rulesAnd": " és ",
      "termsLink": "Feltételek",
      "helpAfter": ". A Támogatás oldalon lévő felszólítás nem nyit jegyet, és a Kapcsolat oldalon beírt szöveg nem kerül továbbításra."
    },
    "next": {
      "title": "Következő lépés"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM TELEMETRIA",
    "copy": "VEZÉRLŐPULT-TELEMETRIA ZÁROLVA — Frissítsd előfizetésedet A.C.E. Plus vagy Premium csomagra a dinamikus valós idejű statisztikai görbék és fegyverspecialitás-indexek feloldásához.",
    "cta": "Árlisták megnyitása"
  }
};
