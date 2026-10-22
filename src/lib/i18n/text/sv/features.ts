import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Funktioner",
      "description": "Specificerad arkitektur för A.C.E:s anti-fusk-kärna, biometrisk Face Scan-koppling och tio nivåer av färdighetskalibrering. Systemen är inte aktiva på den här webbplatsen."
    },
    "header": {
      "kicker": "ACE-FEATURES / KERNEL / FACE-SCAN / CALIBRATION",
      "title": "Specifikation av plattformens funktioner",
      "lede": "Den här sidan är den tekniska kartan över tre planerade A.C.E-system: den autonoma anti-fusk-kärnan, biometrisk Face Scan-koppling och tionivåstegen för färdighetskalibrering. Inget på sidan är en aktiv kärna, en aktiv kameraprodukt eller en aktiv rankad kö. Steam OpenID, 5v5-lag, slutspelslayouter och Elo-liknande ratingberäkning finns i det här kodförrådet. Dedikerade CS2-servrar, betalningar, priser och en nedladdningsbar integritetsklient finns inte."
    },
    "kernel": {
      "title": "Arkitektur för anti-fusk-kärnan",
      "paragraphs": [
        "Det specificerade Autonomous Secure Shell är en hårdvarukopplad integritetsklient som skulle köras bredvid Counter-Strike 2 på spelarens dator och rapportera ett signerat ALLOW- eller DENY-läge till A.C.E:s hanterade servrar. Kärnan är fail-closed: om klienten saknas, är stoppad, föråldrad, förfalskad eller overifierad nekas rankad åtkomst. Webbläsaren avgör aldrig behörighet. Därför är rankad HITTA MATCH på den här webbplatsen redan stängd.",
        "Planerade kärnlager omfattar en handskakning i användarläge som binder det verifierade 64-bitars SteamID:t till A.C.E-kontot, attestering av hårdvaruidentifierare (HWID), en signaturbevakningslista för kända fuskfamiljer och en behörighetsväg mellan servrar skyddad av en delad hemlighet. Enligt specifikationen leder en fusksignatur, en nekad integritetskontroll eller en förfalskad enhetsidentifierare till omedelbar ändring av kontostatus till BANNED eller PERM_BANNED och, när en betalprodukt finns, till att förbetald prenumerationstid förverkas helt utan återbetalning. Ingen sådan klient följer med den här webbplatsen. Nedladdningskorten Kommer snart är endast designförhandsvisningar."
      ],
      "stats": [
        {
          "label": "KÄRNSTATUS",
          "value": "Under utveckling"
        },
        {
          "label": "RANKAD KÖ",
          "value": "Fail-closed"
        },
        {
          "label": "HWID-LAGRING",
          "value": "Samlas inte in på den här webbplatsen"
        }
      ]
    },
    "faceScan": {
      "title": "Biometrisk Face Scan-koppling",
      "paragraphs": [
        "Face Scan är ett specificerat framtida lager för identitetsbindning, inte en kameraprodukt på den här webbplatsen. Den planerade designen skulle, endast efter uttryckligt samtycke och en separat juridisk granskning, binda en livenesskontrollerad ansiktsmall till samma A.C.E-konto som redan har ett serververifierat SteamID. Syftet är att motverka kontodelning för att kringgå en tidigare begränsning. A.C.E samlar i dag inte in ansiktsbilder, ansiktsvektorer, e-postadresser eller hårdvarufingeravtryck. Den aktuella integritetshållningen är strikt nödvändighet: endast verifierat 64-bitars SteamID och publikt Steam-visningsnamn.",
        "Om Face Scan någon gång implementeras ersätter den inte Steam OpenID, används inte för att sälja beteendebaserad reklam och öppnar inte rankade köer på egen hand. Rankad åtkomst kräver fortfarande en verifierad anti-fusk-väg. Tills den granskningen finns är varje Face Scan-panel i lobbyn en designförhandsvisning."
      ]
    },
    "calibration": {
      "title": "Tio nivåer av färdighetskalibrering",
      "intro": "Competitive Calibration använder de publicerade A.C.E-reglerna för Rating Points (version {version}: steg {kFactor}, skala {scale}). Nya konton börjar på rang 3 (Vanguard), med FREE-abonnemang, status ACTIVE och {startingRating} i tävlingsrating. Kristallnamnen i lobbyn är visuella alias. Betald kosmetika köper aldrig rating, lättare motståndare, 128-tick-servrar eller köprioritet. Det finns ingen aktiv 128-tick-produkt till salu.",
      "table": {
        "level": "Nivå",
        "engineName": "Motornamn",
        "crystalAlias": "Kristallnamn",
        "minRating": "Lägsta rating"
      },
      "divisions": {
        "before": "Divisionerna I, II och III i lobbyn är exempelmärken. De ändrar bara layoutmått. Matchning per division finns inte. Se ",
        "middle": " för 3D-vridbordet och ",
        "after": " för den bindande tävlingstexten."
      }
    }
  },
  "loot": {
    "kicker": "Kosmetika · kommer snart",
    "title": "A.C.E. BELÖNINGSARKITEKTUR — VAPENDROPPAR",
    "lede": "Original-finishar från A.C.E som kommer med butiken. Kosmetika påverkar aldrig tävlingen.",
    "checkout": "Kassa · Paddle"
  },
  "identityPreview": {
    "badge": "Förhandsvisning — ej bekräftad",
    "cards": {
      "faceScan": {
        "title": "Live Face Scan verifierad",
        "copy": "Liveness-kontroll är en planerad leverantörskontroll. Inga biometriska data samlas in i dag."
      },
      "hardwareId": {
        "title": "Hårdvaru-ID kopplat",
        "copy": "Enhetsbindning är en planerad integritetssignal. Inga hårdvaruidentifierare samlas in i dag."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Förhandsvisning",
    "kicker": "Kommer snart",
    "returnHome": "Till startsidan",
    "pages": {
      "support": {
        "title": "Support",
        "body": "Vår publika supportdesk öppnar med tävlingsbetan."
      },
      "anti-cheat": {
        "title": "Översikt över anti-fusk",
        "body": "A.C.E har ingen fungerande anti-fusk-produkt. Rankad matchning förblir stängd tills en riktig integration finns."
      },
      "download-client": {
        "title": "Ladda ned klient",
        "body": "Det finns ingen A.C.E-skrivbordsklient att ladda ned. En inbyggd klient ingår inte i det nuvarande webbstadiet."
      },
      "mobile-app": {
        "title": "Mobilapp",
        "body": "A.C.E:s mobilapp finns på färdplanen."
      },
      "news": {
        "title": "Nyheter",
        "body": "A.C.E:s nyhetsrum öppnar snart."
      },
      "about": {
        "title": "Om oss",
        "body": "A.C.E är en oberoende tävlingsplats för Counter-Strike 2 i publik förhandsversion. Den är inte ansluten till Valve."
      },
      "advertising": {
        "title": "Annonsering",
        "body": "Förfrågningar om partnerskap och annonsering öppnar snart."
      },
      "developers": {
        "title": "Utvecklare",
        "body": "Det finns inget publikt utvecklarprogram ännu. Serverbehörighets-API:erna i kodförrådet är interna adaptrar, inte ett partner-SDK."
      },
      "press": {
        "title": "Press",
        "body": "Presskitet kommer snart."
      },
      "jobs": {
        "title": "Jobb",
        "body": "Lediga tjänster listas här."
      },
      "terms": {
        "title": "Användarvillkor",
        "body": "De gällande användarvillkoren publiceras på /terms. Turneringens regelbok finns på /rules."
      },
      "privacy": {
        "title": "Integritetspolicy",
        "body": "Integritetspolicyn publiceras på /privacy. Steam OpenID är det enda inloggningssättet; Steam-lösenord samlas aldrig in."
      },
      "eula": {
        "title": "Anti-fusk-EULA",
        "body": "Det finns ingen anti-fusk-EULA eftersom anti-fusket inte är aktivt. Rankat förblir stängt."
      }
    }
  }
};
