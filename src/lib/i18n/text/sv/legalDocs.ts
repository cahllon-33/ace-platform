import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  "translationNotice": "Den här sidan är en översättning som tillhandahålls för enkelhetens skull. Om översättningen och den engelska texten skiljer sig åt gäller den engelska texten.",
  "terms": {
    "meta": {
      "title": "Användarvillkor",
      "description": "Användarvillkor för A.C.E., en tävlingsplats för Counter-Strike 2. Rankat, betalningar och anti-fusk är inte aktiva."
    },
    "kicker": "ACE-LEGAL / ANVÄNDARVILLKOR",
    "title": "Användarvillkor",
    "lede": "Dessa villkor gäller användningen av A.C.E.:s publika webbplats och tillhörande konto-API:er. Matchlängd, kartpool, trupplåsning och protester beskrivs i tävlingsregelboken på /rules, som utgör en del av dessa villkor.",
    "sections": {
      "operator": {
        "title": "1. Operatör och oberoende",
        "paragraphs": [
          "Tjänsten drivs av A.C.E. Competitions Ltd. (organisationsnummer publiceras senare). Genom att använda webbplatsen godkänner du dessa villkor, integritetspolicyn, cookiepolicyn och tävlingsregelboken."
        ]
      },
      "eligibility": {
        "title": "2. Behörighet och konton",
        "paragraphs": [
          "Du måste ha uppnått den ålder som krävs för att använda Steam i ditt land. Konton skapas endast via officiellt Steam OpenID. Du får inte dela ett konto för att kringgå en begränsning. A.C.E. ber aldrig om ett Steam-lösenord."
        ]
      },
      "notActive": {
        "title": "3. Vad webbplatsen inte är",
        "paragraphs": [
          "Rankad matchning, aktiva CS2-spelservrar, fungerande AI-anti-fusk, betalning och priser är inte aktiva. Lobbyklockor och integritetspaneler är förhandsvisningar om inte en sida anger något annat."
        ]
      },
      "subscriptions": {
        "title": "4. Planerade prenumerationer",
        "paragraphs": [
          "Plus ($4/mån) och Premium ($7/mån) är visningspriser. Det finns ännu ingen betalning på den här webbplatsen, och planknapparna visar Kommer snart. När betalning finns gäller uppsägningsregeln på /pricing: månadsvis löpande prenumeration, uppsägning i panelens inställningar, delvis använda månader återbetalas inte."
        ]
      },
      "antiCheat": {
        "title": "5. Anti-fusk-klient (inte lanserad)",
        "paragraphs": [
          "Det finns ingen nedladdningsbar anti-fusk-klient på den här webbplatsen. Tävlingsreglerna på /rules samlar inte in någon hårdvaruidentifierare och bannar ingen enhet. Kontodelning för att kringgå en begränsning är förbjuden."
        ]
      },
      "liability": {
        "title": "6. Ansvarsbegränsning",
        "paragraphs": [
          "I den utsträckning lagen tillåter ansvarar A.C.E. inte för förlorad rank, förlorade kosmetiska föremål som aldrig var riktiga föremål eller avbrott hos tredje part som Steam / CS2. Tvingande konsumenträttigheter i ditt land undantas inte där de inte kan avtalas bort."
        ]
      },
      "copyright": {
        "title": "7. Upphovsrätt till webbplatsens originalmaterial",
        "paragraphs": [
          "Originaltext, sidlayout, emblem och grafik som skapats för den här webbplatsen tillhör A.C.E. Competitions Ltd. Du får inte kopiera, återpublicera eller skrapa detta originalmaterial för en annan produkt utan skriftligt tillstånd. Där lagen tillåter kan A.C.E. hävda den rätten, även genom ett anspråk. Detta meddelande inleder inget mål, fastställer inget skadestånd och garanterar inget domstolsutfall.",
          "Counter-Strike 2, Steam och kartnamnen Dust II, Mirage, Inferno, Nuke, Ancient, Anubis och Train tillhör Valve. A.C.E. gör inga anspråk på dem. Att öppna den här webbplatsen upphäver ingen laglig rättighet och ingår inget avtal."
        ]
      },
      "contact": {
        "title": "8. Kontakt",
        "paragraphs": [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — organisationsnummer publiceras senare."
        ]
      }
    }
  },
  "privacy": {
    "meta": {
      "title": "Integritetspolicy",
      "description": "A.C.E.:s integritetspolicy: strikt nödvändiga data, endast Steam OpenID, inga Steam-lösenord, ingen försäljning av beteendedata."
    },
    "kicker": "ACE-PRIVACY / GDPR / STRIKT NÖDVÄNDIGHET",
    "title": "Integritetspolicy",
    "lede": "Den här integritetspolicyn förklarar vad A.C.E. Competitions Ltd. lagrar när du använder den här webbplatsen. Översättningar tillhandahålls för enkelhetens skull; den engelska versionen är referenstexten. Detta är inget påstående om att varje framtida produktdel redan finns.",
    "strictNecessity": {
      "title": "Principen om strikt nödvändighet",
      "intro": "Vi samlar in den minsta mängd kontodata som krävs för att identifiera en tävlingsspelare och stoppa uppenbart bedrägeri i vår egen tjänst. Vi samlar inte in onödiga loggar, skrapar inte privata Steam-inventarier och säljer inte tredje parts beteendedata.",
      "storedIntro": "Lagras för närvarande efter en lyckad inloggning med Steam OpenID:",
      "stored": [
        {
          "label": "Verifierat 64-bitars SteamID",
          "body": "som returneras av Steams officiella OpenID-intyg och kontrolleras på servern innan ett A.C.E.-konto skapas eller uppdateras."
        },
        {
          "label": "Publikt Steam-visningsnamn",
          "body": "när en Steam Web API-nyckel är konfigurerad. Det är ett profilnamn, inte en e-postinkorg."
        },
        {
          "label": "A.C.E.-kontoposter",
          "body": "såsom ranknivå, ratingpoäng, vinster/förluster, lagmedlemskap och hashvärden för sessionstoken."
        }
      ],
      "notCollected": {
        "before": "E-postadresser och krypterade hårdvaruprofiler",
        "strong": "samlas inte in på den här webbplatsen i dag",
        "after": ". Face Scan- och HWID-korten i lobbyn är designförhandsvisningar. Om en framtida anti-fusk-klient eller supportkanal kräver en e-postadress eller ett hårdvarufingeravtryck begränsas insamlingen till bedrägeriförebyggande, redovisas här först och säljs inte som reklamdata."
      }
    },
    "neverCollect": {
      "title": "Vad vi aldrig samlar in",
      "items": [
        "Steam-lösenord. Inloggning sker endast via Steam OpenID / Steams officiella flöde.",
        "Betalkortsnummer. Betalning är inte implementerad.",
        "Kärntelemetri. Ingen anti-fusk-klient följer med den här webbplatsen."
      ]
    },
    "steamBoundary": {
      "title": "Inbäddningar från tredje part och gränsen för Steam OpenID",
      "callback": {
        "before": "Steam-inloggningen lämnar A.C.E., autentiserar hos Steam och återvänder till",
        "after": ". Servern verifierar OpenID-intyget (inklusive den påstådda identiteten och Steams signerade parametrar) innan en session skrivs. Steams integritetspolicy styr de data Steam har. A.C.E. sparar endast det verifierade SteamID:t och de publika profilfält som behövs för att driva kontot."
      },
      "footerLinks": "Ikonerna för externa nätverk i sidfoten är kataloglänkar till publika webbplatser. De är inte officiella A.C.E.-konton och bäddar inte in spårningswidgetar."
    },
    "rights": {
      "title": "Rättigheter enligt GDPR",
      "before": "Om du befinner dig i en region med rättigheter till personuppgifter kan du begära åtkomst till, rättelse eller radering av dina A.C.E.-kontodata genom att mejla",
      "after": ". Hårdvaruspärrar för rankat anti-fusk är inte aktiva; att radera ett webbplatskonto är ingen VAC-överklagan i CS2."
    },
    "cookies": {
      "title": "Cookies",
      "before": "Se",
      "link": "cookiepolicyn",
      "after": "och samtyckespanelen. Nödvändiga sessionscookies krävs efter inloggning. Valfria kategorier används inte förrän en spårare faktiskt läggs till."
    },
    "controller": {
      "title": "Personuppgiftsansvarig",
      "body": "A.C.E. Competitions Ltd. Organisationsnummer publiceras senare. Kontakt: support@ace-platform.gg."
    }
  },
  "cookiePolicy": {
    "meta": {
      "title": "Cookiepolicy",
      "description": "A.C.E.:s granskning av cookies och telemetri. Endast nödvändiga sessionscookies om du inte samtycker till reserverade valfria kategorier."
    },
    "kicker": "ACE-PRIVACY / COOKIES / TELEMETRIGRANSKNING",
    "title": "Cookiepolicy",
    "lede": "Den här sidan är telemetri- och integritetsgranskningen för ace-platform.gg. Den beskriver vilka cookies webbplatsen faktiskt använder, kategorier som reserverats för senare och vad som inte samlas in.",
    "audit": {
      "title": "100 % telemetrigranskning (aktuell version)",
      "body": "A.C.E. kör inga annonspixlar, Google Analytics, Meta Pixel, SDK:er för fingeravtryck eller andra beteendespårare från tredje part på den här publika webbplatsen. De valfria ”Analysspårare” och ”Marknadsföringsspårare” i samtyckespanelen är endast kategorier. Att kryssa i dem laddar inget skript i dag. Om en spårare läggs till senare läser den först den sparade inställningen och förblir avstängd om du inte har samtyckt."
    },
    "essential": {
      "title": "Nödvändiga cookies [Krävs / Låst]",
      "session": {
        "label": "Sessionscookie",
        "body": "— sätts endast efter ett verifierat Steam OpenID-svar. HttpOnly, kan inte läsas av sidans JavaScript och används för att hålla dig inloggad på A.C.E."
      },
      "necessity": "Dessa cookies är strikt nödvändiga för att driva ett autentiserat konto. De är inga reklam-ID:n."
    },
    "analytics": {
      "title": "Analysspårare [Valfria]",
      "before": "Reserverad. Ingen leverantör av produktanalys är konfigurerad. Ditt val sparas lokalt i",
      "after": "så att ett framtida förstapartsmått kan respektera det."
    },
    "marketing": {
      "title": "Marknadsföringsspårare [Valfria]",
      "body": "Reserverad. A.C.E. säljer, hyr ut eller förmedlar inga beteendeprofiler. Det finns ingen tagghanterare för marknadsföring på webbplatsen."
    },
    "change": {
      "title": "Så ändrar du ditt val",
      "body": "Använd Cookieinställningar i sidfoten eller rensa webbplatsdata i din webbläsare. Att avvisa valfria kategorier blockerar aldrig Steam-inloggning."
    }
  }
};
