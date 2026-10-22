import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Značajke",
      "description": "Specificirana arhitektura A.C.E Anti-Cheat jezgre, biometrijsko povezivanje Face Scan i deset razina kalibracije vještine. Ovi sustavi nisu aktivni na ovoj stranici."
    },
    "header": {
      "kicker": "ACE-ZNAČAJKE / JEZGRA / FACE-SCAN / KALIBRACIJA",
      "title": "Specifikacija značajki platforme",
      "lede": "Ova stranica je tehnička karta produkcijske razine za tri planirana A.C.E sustava: autonomnu anti-cheat jezgru, biometrijsko povezivanje Face Scan i ljestvicu kalibracije vještine s deset razina. Ništa na ovoj stranici nije aktivna jezgra, aktivni proizvod s kamerom ni aktivni ranked red. Steam OpenID, 5v5 timovi, rasporedi kostura i Elo izračun rejtinga postoje u ovom repozitoriju. Namjenski CS2 poslužitelji, plaćanja, nagrade i klijent za integritet koji se može preuzeti ne postoje."
    },
    "kernel": {
      "title": "Arhitektura Anti-Cheat jezgre",
      "paragraphs": [
        "Specificirani Autonomous Secure Shell je klijent za integritet vezan uz hardver koji bi radio uz Counter-Strike 2 na računalu igrača i prijavljivao potpisano stanje ALLOW ili DENY poslužiteljima kojima upravlja A.C.E. Dizajn jezgre je fail-closed: ako klijent nedostaje, zaustavljen je, zastario, krivotvoren ili neprovjeren, ranked pristup se odbija. Preglednik nikad ne odlučuje o podobnosti. Ranked PRONAĐI MEČ na ovoj stranici već je zatvoren iz tog razloga.",
        "Planirani slojevi jezgre uključuju rukovanje u korisničkom načinu koje veže provjereni 64-bitni SteamID uz A.C.E račun, površinu za atestaciju hardverskog identifikatora (HWID), popis praćenja potpisa poznatih obitelji varanja i rutu podobnosti poslužitelj–poslužitelj zaštićenu zajedničkom tajnom. Potvrda potpisa varanja, odbijena provjera integriteta ili krivotvoreni identifikator uređaja specificirani su da odmah promijene status računa u BANNED ili PERM_BANNED te, kad postoji proizvod naplate, potpuni gubitak unaprijed plaćenog vremena pretplate bez obveze povrata. Takav klijent ne isporučuje se s ovom stranicom. Kartice preuzimanja Uskoro samo su raspored."
      ],
      "stats": [
        {
          "label": "STANJE JEZGRE",
          "value": "U razvoju"
        },
        {
          "label": "RANKED RED",
          "value": "Fail-closed"
        },
        {
          "label": "HWID SPREMIŠTE",
          "value": "Ne prikuplja se na ovoj stranici"
        }
      ]
    },
    "faceScan": {
      "title": "Biometrijsko povezivanje Face Scan",
      "paragraphs": [
        "Face Scan je specificirani budući sloj vezivanja identiteta, ne proizvod s kamerom na ovoj stranici. Planirani dizajn bi, tek nakon izričitog pristanka i zasebne pravne provjere, vezao predložak lica provjeren na živost uz isti A.C.E račun koji već ima SteamID provjeren na poslužitelju. Svrha je spriječiti dijeljenje računa radi izbjegavanja prethodnog ograničenja. A.C.E danas ne prikuplja slike lica, ugradnje lica, adrese e-pošte ni hardverske otiske. Važeći pristup privatnosti ostaje Stroga nužnost: samo provjereni 64-bitni SteamID i javno Steam ime za prikaz.",
        "Ako se Face Scan ikad implementira, neće zamijeniti Steam OpenID, neće se koristiti za prodaju bihevioralnog oglašavanja i sam neće otvoriti ranked redove. Ranked pristup i dalje zahtijeva provjereni anti-cheat put. Dok ta provjera ne postoji, svaki Face Scan panel u predvorju pregled je dizajna."
      ]
    },
    "calibration": {
      "title": "Deset razina kalibracije vještine",
      "intro": "Competitive Calibration koristi objavljena A.C.E pravila Rating Points (verzija {version}: korak {kFactor}, skala {scale}). Novi računi počinju na rangu 3 (Vanguard), s pretplatom FREE, statusom ACTIVE i {startingRating} natjecateljskog rejtinga. Nazivi kristala u predvorju vizualni su nadimci. Plaćena kozmetika nikad ne kupuje rejting, lakše protivnike, 128-tick poslužitelje ni prednost u redu. Nema aktivnog 128-tick proizvoda u prodaji.",
      "table": {
        "level": "Razina",
        "engineName": "Naziv u motoru",
        "crystalAlias": "Kristalni alias",
        "minRating": "Min. rejting"
      },
      "divisions": {
        "before": "Divizije I, II i III u predvorju prikazne su oznake. Mijenjaju samo mjere rasporeda. Matchmaking uživo po diviziji ne postoji. Vidi ",
        "middle": " za 3D okretni stol i ",
        "after": " za obvezujući natjecateljski tekst."
      }
    }
  },
  "loot": {
    "kicker": "Kozmetika · uskoro",
    "title": "A.C.E LOOT ARHITEKTURA — DROPOVI ORUŽJA",
    "lede": "Originalne A.C.E završne obrade, stižu s trgovinom. Kozmetika nikad ne utječe na natjecanje.",
    "checkout": "Plaćanje · uskoro"
  },
  "identityPreview": {
    "badge": "Pregled — nije potvrđeno",
    "cards": {
      "faceScan": {
        "title": "Face Scan uživo potvrđen",
        "copy": "Provjera živosti identiteta planirana je provjera pružatelja. Danas se ne prikupljaju biometrijski podaci."
      },
      "hardwareId": {
        "title": "Hardverski ID povezan",
        "copy": "Vezivanje uređaja planirani je signal integriteta. Danas se ne prikupljaju hardverski identifikatori."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Pregled",
    "kicker": "Uskoro",
    "returnHome": "Povratak na početnu",
    "pages": {
      "support": {
        "title": "Podrška",
        "body": "Naš javni pult podrške otvara se s natjecateljskom betom."
      },
      "anti-cheat": {
        "title": "Pregled anti-cheata",
        "body": "A.C.E nema funkcionalan anti-cheat proizvod. Ranked matchmaking ostaje zatvoren dok ne postoji stvarna integracija."
      },
      "download-client": {
        "title": "Preuzmi klijent",
        "body": "Nema A.C.E desktop klijenta za preuzimanje. Nativni klijent nije dio trenutne web faze."
      },
      "mobile-app": {
        "title": "Mobilna aplikacija",
        "body": "A.C.E mobilna aplikacija je u planu."
      },
      "news": {
        "title": "Vijesti",
        "body": "A.C.E redakcija otvara se uskoro."
      },
      "about": {
        "title": "O nama",
        "body": "A.C.E je neovisna stranica za Counter-Strike 2 natjecanja u javnom pregledu. Nije povezana s Valveom."
      },
      "advertising": {
        "title": "Oglašavanje",
        "body": "Upiti za partnerstva i oglašavanje otvaraju se uskoro."
      },
      "developers": {
        "title": "Programeri",
        "body": "Javni program za programere još ne postoji. API-ji podobnosti poslužitelja u ovom repozitoriju interni su adapteri, ne SDK za partnere."
      },
      "press": {
        "title": "Tisak",
        "body": "Press paket stiže uskoro."
      },
      "jobs": {
        "title": "Poslovi",
        "body": "Otvorena radna mjesta bit će navedena ovdje."
      },
      "terms": {
        "title": "Uvjeti korištenja",
        "body": "Važeći Uvjeti korištenja objavljeni su na /terms. Pravilnik turnira je na /rules."
      },
      "privacy": {
        "title": "Pravila privatnosti",
        "body": "Pravila privatnosti objavljena su na /privacy. Steam OpenID jedini je način prijave; Steam lozinke se nikad ne prikupljaju."
      },
      "eula": {
        "title": "Anti-Cheat EULA",
        "body": "Ne postoji Anti-Cheat EULA jer anti-cheat nije aktivan. Ranked ostaje zatvoren."
      }
    }
  }
};
