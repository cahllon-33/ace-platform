import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  premiumExtras: {
    "card": {
      "previewTag": "PREGLED",
      "previewNote": "Pregled animirane Premium kartice profila. Ime i vrijednosti su primjeri. Pravi profil prikazuje ovu karticu samo kad je njegov spremljeni plan Premium.",
      "planTag": "A.C.E PREMIUM",
      "seal": "PEČAT ELITE",
      "rank": "Rang",
      "rating": "Rejting",
      "sampleName": "Primjer igrača",
      "ownTitle": "Tvoja Premium kartica profila"
    },
    "analysis": {
      "metaTitle": "Proširena analiza meča",
      "metaDescription": "Raspored Premium analize mečeva: toplinska karta smrti, postotak headshotova i učinak po rundi. Uskoro, kad bude postojala obrada demo snimki.",
      "kicker": "PREMIUM · ANALIZA MEČA",
      "title": "Proširena analiza meča",
      "lede": "Toplinska karta smrti, postotak headshotova i učinak po rundi za tvoje zabilježene mečeve. Za to je potrebna obrada demo snimki, koja još ne postoji.",
      "sampleTag": "PRIMJER RASPOREDA — NISU TVOJI PODACI",
      "soon": "Uskoro",
      "soonCaption": "Popunit će se kad bude postojala obrada demo snimki. Ništa ispod nije stvarna statistika.",
      "heatmap": "Toplinska karta smrti",
      "headshot": "% headshotova",
      "rounds": "Učinak po rundi",
      "noData": "Nema podataka",
      "locked": "Proširena analiza meča dio je A.C.E Premium (7 $/mj.). Uskoro: plaćanje još ne postoji, pa danas nijedan račun nije Premium.",
      "premiumNote": "Tvoj plan je Premium. Analiza će se pojaviti ovdje kad bude postojala obrada demo snimki.",
      "signIn": "Prijavi se putem Steama da provjeriš pristup analizi.",
      "plansLink": "Pogledaj planove"
    },
    "terms": {
      "metaTitle": "Premium uvjeti",
      "metaDescription": "Što uključuju A.C.E Plus i Premium, što ne uključuje nijedan plan i kako funkcionira otkazivanje.",
      "kicker": "ACE-LEGAL / PREMIUM UVJETI",
      "title": "Uvjeti A.C.E Premium",
      "intro": "Ovi uvjeti opisuju što uključuju plaćeni planovi. Dopunjuju Uvjete korištenja na /terms. Plaćanje još ne postoji, pa danas ništa nije moguće kupiti.",
      "pricesTitle": "1. Planovi, cijene i otkazivanje",
      "prices": "Free {free}. Plus {plus} mjesečno. Premium {premium} mjesečno. Planovi se obnavljaju mjesečno. Možeš otkazati u bilo kojem trenutku u postavkama nadzorne ploče bez kazne. Djelomični mjeseci se ne vraćaju, kako navode Uvjeti korištenja.",
      "plusTitle": "2. Što uključuje Plus",
      "plus1": "Sve iz Free.",
      "plus2": "Uskoro: zahvalnica i podrška e-poštom na support@ace-platform.gg, kad bude postojalo plaćanje.",
      "premiumTitle": "3. Što uključuje Premium",
      "prem1": "Sve iz Plus.",
      "prem2": "Premium grafika rangova: izvorni ilustrirani set amblema A.C.E. na tvom profilu.",
      "prem3": "Animirana Premium kartica profila.",
      "prem4": "Posebne značke i PEČAT ELITE.",
      "prem5": "Uskoro: proširena analiza meča (toplinska karta smrti, % headshotova, učinak po rundi), kad bude postojala obrada demo snimki.",
      "prem6": "Rani pristup beta značajkama kad se beta otvori.",
      "prem7": "Prioritetna podrška s ciljanim vremenom odgovora od 72 sata. To je cilj, ne jamstvo.",
      "neverTitle": "4. Što ne uključuje nijedan plan",
      "never": "Nijedan plan ne daje natjecateljsku prednost. Nijedan plan ne dodaje Rating Points niti povećava rejting. Nijedan plan ne daje prednost pri sparivanju, prioritetni red ni lakše protivnike.",
      "soonTitle": "5. Značajke „Uskoro“",
      "soon": "Ništa označeno kao Uskoro nije obećano dok ne bude objavljeno. Do tada cijena to ne uključuje.",
      "languageTitle": "6. Jezik",
      "language": "Prijevodi su pruženi radi praktičnosti. Ako se prijevod razlikuje od engleskog teksta, primjenjuje se engleski tekst.",
      "contact": "Pitanja: support@ace-platform.gg",
      "footerLink": "Premium uvjeti",
      "pricingLink": "Pročitaj Premium uvjete"
    }
  },
  "meta": {
    "title": "Cijene",
    "description": "A.C.E. članstvo: Free {free}, Plus {plus}/mj., Premium {premium}/mj. Prikazane cijene zaključane na cijele brojeve."
  },
  "period": {
    "monthly": "/mj."
  },
  "hero": {
    "badge": "Članstvo",
    "title": "Razine pristupa",
    "lede": "Free {free}. Plus {plus}/mj. Premium {premium}/mj. Ti su iznosi zaključani na cijele brojeve. Plaćeni planovi nikad ne kupuju rejting ni lakše protivnike."
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "Grafit",
      "title": "Otvoreni pristup",
      "points": [
        "Prijavi se putem Steam OpenID-a. A.C.E. nikad ne traži Steam lozinku.",
        "Spremljeni rejting počinje od 1.000. Nijedan rezultat meča ga nije promijenio.",
        "Sve javne stranice: igraj, turniri, ljestvica, timovi i pravila."
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "Zahvalnica i podrška",
      "points": [
        "Sve iz plana Free.",
        "Uskoro: zahvalnica (što je uključeno, što nije, i support@ace-platform.gg) otvara se tek kad postoji plaćanje. Gumb je danas onemogućen.",
        "Ne kupuje rejting ni lakše protivnike. Zlatne profilne značke dolaze iz spremljenih podataka mečeva za svakog igrača. Elitni pečat i posebne značke prikazuju se samo kad je spremljena razina već Premium."
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "Grafika profila, značke i analiza",
      "points": [
        "Sve iz Plus.",
        "Premium grafika rangova, animirana kartica profila, posebne značke i PEČAT ELITE.",
        "Uskoro: proširena analiza meča, rani pristup beti i prioritetna podrška (cilj odgovora 72 sata).",
        "Bez natjecateljske prednosti: bez povećanja Rating Pointsa i bez prednosti pri sparivanju."
      ]
    }
  },
  "card": {
    "elite": "ELITE",
    "stayFree": "Ostani na Free",
    "freeNote": "Otvoreno sada",
    "choose": "Odaberi {plan}",
    "chooseAria": "Odaberi {plan} za {price} mjesečno"
  },
  "billing": {
    "kicker": "MATRICA VREMENSKE CRTE NAPLATE",
    "title": "Kako će naplata raditi kad bude postojala",
    "body": "Plus je točno {plus}/mj. Premium je točno {premium}/mj.",
    "display": {
      "label": "01 · PRIKAZ",
      "body": "Free {free}. Plus {plus}/mj. Premium {premium}/mj. Plaćene razine nikad ne kupuju rejting ni lakše protivnike."
    },
    "rolling": {
      "label": "02 · KONTINUIRANI CIKLUS",
      "body": "Kad naplata bude postojala, naknade se obnavljaju u mjesečnom kontinuiranom ciklusu. Djelomični mjesec ne vraća se. Otkazivanje zaustavlja sljedeći ciklus i ne briše trenutačno unaprijed plaćeno razdoblje."
    },
    "today": {
      "label": "03 · DANAS"
    }
  },
  "compare": {
    "kicker": "Što A.C.E. može obećati danas",
    "title": "Usporedba članstava",
    "note": "Svaki redak odražava stranicu danas. Plaćanje stiže uskoro, a plaćeni plan nikad ne otvara red niti kupuje prednost.",
    "caption": "Free, Plus i Premium uspoređeni prema onome što stranica danas radi",
    "includedToday": "Uključeno danas",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "Javna stranica",
        "detail": "Početna, igraj, turniri, ljestvica, timovi, pravila i uvjeti."
      },
      "steamSignIn": {
        "feature": "Steam prijava",
        "detail": "Službeni Steam OpenID. A.C.E. nikad ne traži Steam lozinku."
      },
      "startingRating": {
        "feature": "Početni rejting",
        "detail": "Broj spremljen na novom računu prije bilo kojeg zabilježenog meča."
      },
      "recordedMatches": {
        "feature": "Zabilježeni mečevi",
        "detail": "Pobjede i porazi zapisani iz završenog A.C.E. meča."
      },
      "rankedQueue": {
        "feature": "Ranked red",
        "detail": "PRONAĐI MEČ ostaje zatvoren dok ne postoji stvarni red."
      },
      "cs2Servers": {
        "feature": "CS2 poslužitelji",
        "detail": "Ova stranica ne šalje adresu poslužitelja ni poveznicu za spajanje."
      },
      "antiCheatClient": {
        "feature": "Anti-cheat klijent",
        "detail": "S ove se stranice ništa ne preuzima."
      },
      "charge": {
        "feature": "Naplata",
        "detail": "Odabir Plusa ili Premiuma ne uzima karticu."
      },
      "ratingForSale": {
        "feature": "Rejting na prodaju",
        "detail": "Plaćena oznaka nikad ne kupuje rejting ni lakše protivnike."
      },
      "prizeOrWeapon": {
        "feature": "Nagrada ili oružje",
        "detail": "Ne isporučuje se skin, nož ni nagradni fond."
      },
      "goldEliteSeal": {
        "feature": "Elitni pečat i posebne značke",
        "detail": "Samo Premium, očitano iz spremljene razine na poslužitelju. Kozmetičko. Plaćanje ne postavlja tu razinu."
      }
    },
    "cells": {
      "open": "Otvoreno",
      "yes": "Da",
      "noneYet": "Još ništa",
      "closed": "Zatvoreno",
      "notConnected": "Uskoro",
      "notShipped": "Nije objavljeno",
      "noCharge": "Bez naplate",
      "notForSale": "Nije na prodaju",
      "none": "Ništa",
      "no": "Ne",
      "storedTierOnly": "Samo spremljena razina"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus potvrda",
      "metaDescription": "A.C.E. Plus pismo prikazano na ovoj stranici. Plaćanje nije aktivno, pa se ništa ne naplaćuje i ne šalje se e-pošta.",
      "planName": "A.C.E. Plus",
      "nextLabel": "Nastavi na A.C.E.",
      "nextBody": "Javne stranice ostaju otvorene. Ovaj odabir ne otvara red i ne mijenja spremljenu razinu."
    },
    "premium": {
      "metaTitle": "Premium potvrda",
      "metaDescription": "A.C.E. Premium pismo prikazano na ovoj stranici. Plaćanje nije aktivno, pa se ništa ne naplaćuje i ne šalje se e-pošta.",
      "planName": "A.C.E. Premium",
      "nextLabel": "Nastavi na Squads",
      "nextBody": "Nastavi na Squads. Stranica će pitati jeste li tim od pet. Mjesto 1 je prijavljeni Steam račun. Mjesta 2 do 5 su ostali igrači. Spremanje klana ni tada ne naplaćuje ovu cijenu."
    }
  },
  "letter": {
    "kicker": "{plan} · {price} mjesečno",
    "title": "Hvala na odabiru",
    "flag": "Ovo se pismo prikazuje na stranici. E-pošta nije poslana. Kartica nije terećena. Plaćanje nije aktivno, a spremljena razina članstva nije promijenjena.",
    "greeting": "Dragi igraču,",
    "intro": "Hvala što si odabrao {plan}. Ova stranica je potvrda. Bilježi prikazanu cijenu, što taj odabir danas uključuje, što ne uključuje i adresu podrške objavljenu na ovoj stranici.",
    "selected": {
      "title": "Što je odabrano",
      "items": [
        "Naziv plana: {plan}.",
        "Prikazana cijena: {price} mjesečno. Iznos je oznaka, ne naplata.",
        "Plaćanje: nema. Odabir ovog plana ne uzima karticu.",
        "E-pošta: nema. A.C.E. ne šalje ovo pismo u pretinac.",
        "Spremljena razina: nepromijenjena. Posebne značke i elitni pečat pojavljuju se samo kad račun već sprema Premium.",
        "Rejting: nije na prodaju. Novi račun i dalje počinje od 1.000."
      ]
    },
    "today": {
      "title": "Što danas možeš koristiti",
      "items": [
        "Javnu stranicu: početna, igraj, turniri, ljestvica, timovi, pravila i uvjeti.",
        "Steam prijavu putem službenog Steam OpenID-a. A.C.E. nikad ne traži Steam lozinku.",
        "Iste javne stranice kao Free. Ova cijena ne otvara zaseban red."
      ]
    },
    "excluded": {
      "title": "Što ovaj odabir ne uključuje",
      "items": [
        "Ranked red uživo. PRONAĐI MEČ ostaje zatvoren.",
        "Counter-Strike 2 poslužitelj, adresu poslužitelja ili poveznicu za spajanje.",
        "Anti-cheat preuzimanje. A.C.E Shield je u razvoju.",
        "Nagradu, skin, nož ili nagradni fond.",
        "Mjesto na ploči od 100 timova. Ploča i dalje pokazuje 0 prijavljenih dok sezona ne počne.",
        "Lakše protivnike, kupljeni rejting ili javnu stranicu različitu od Free."
      ]
    },
    "trouble": {
      "title": "Ako nešto ne radi",
      "items": [
        "Očekivao si naplatu ili plaćenu razinu. Ništa nije primijenjeno. Račun ostaje kakav je bio.",
        "Očekivao si ovo pismo u pretincu. Postoji samo na ovoj stranici.",
        "Steam se nije povezao. Koristi Poveži profil i najprije označi okvir uvjeta. Nikad ne upisuj Steam lozinku u A.C.E.",
        "Trebaš pomoć. Koristi adresu podrške ispod ili otvori stranice pomoći na ovoj stranici."
      ]
    },
    "support": {
      "title": "Podrška",
      "addressBefore": "Adresa podrške ispisana na ovoj stranici je ",
      "addressAfter": ".",
      "helpBefore": "Pomoć na stranici: ",
      "supportLink": "Podrška",
      "helpAnd": " i ",
      "contactLink": "Kontakt",
      "rulesBefore": ". Pravila su na ",
      "rulesLink": "Pravila",
      "rulesAnd": " i ",
      "termsLink": "Uvjeti",
      "helpAfter": ". Upit na Podršci ne otvara zahtjev, a tekst upisan na Kontaktu ne dostavlja se."
    },
    "next": {
      "title": "Sljedeći korak"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM TELEMETRIJA",
    "copy": "TELEMETRIJA NADZORNE PLOČE ZAKLJUČANA — Nadogradi pretplatu na A.C.E. Plus ili Premium za otključavanje dinamičnih krivulja statistike u stvarnom vremenu i indeksa specijalnosti oružja.",
    "cta": "Otvori tablice cijena"
  }
};
