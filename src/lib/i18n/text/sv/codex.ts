import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Kalibreringskodex",
    "description": "A.C.E.:s ranker förklarade. Varje fråga öppnar ett fullständigt svar om ratingpoäng och reglerna för den ranken. Kodexen registrerar inga matchresultat.",
    "articleTitle": "{title} — Kalibreringskodex"
  },
  "groups": {
    "ladder": {
      "title": "Stegen",
      "kicker": "Så läses en rank"
    },
    "points": {
      "title": "Ratingpoäng",
      "kicker": "Det enda sparade talet"
    },
    "ranks": {
      "title": "Varje rank",
      "kicker": "Reglerna för det märket"
    },
    "desk": {
      "title": "Matchdesken",
      "kicker": "Vad desken kan och inte kan göra"
    }
  },
  "index": {
    "title": "Kalibreringskodex",
    "lede": "Tio ranker. Ett sparat tal. Öppna en fråga för hela svaret. Matchdesken fortsätter på de senare sidorna.",
    "status": "Den här kodexen förklarar den skrivna stegen. Den registrerar inga matchresultat och ändrar ingen sparad rating.",
    "searchLabel": "Sök i kodexen",
    "searchPlaceholder": "Prova 1950, Recruit eller oavgjort",
    "empty": "Ingen post matchar sökningen.",
    "columnLabel": "A.C.E.-kolumn {n}",
    "pagerLabel": "Kodexsidor",
    "first": "Första",
    "previous": "Föregående",
    "next": "Nästa",
    "last": "Sista",
    "pageOf": "Sida {n} av {m}"
  },
  "article": {
    "breadcrumb": "A.C.E. · Kalibreringskodex",
    "status": "Den här sidan förklarar den skrivna stegen. Den registrerar inga matchresultat och ändrar ingen sparad rating.",
    "emblemAlt": "{name}-emblem, rank {level}",
    "emblemCaption": "Rank {level} · {name} · {crystal}",
    "examples": {
      "heading": "Räkneexempel från motorn",
      "intro": "Varje rad anropar samma ratingpoängfunktion som stegen använder. Indata är exempel. De sparas inte på något konto.",
      "columns": {
        "yourPoints": "Dina poäng",
        "otherSide": "Motståndare",
        "result": "Resultat",
        "storedAfter": "Sparat efter",
        "change": "Förändring"
      },
      "results": {
        "win": "Vinst",
        "loss": "Förlust",
        "draw": "Oavgjort"
      }
    },
    "turnLabel": "Fortsätt genom kodexen",
    "previous": "Föregående",
    "next": "Nästa",
    "alsoIn": "Mer på A.C.E.",
    "backToBoard": "Tillbaka till rankbrädan"
  },
  "rankArticle": {
    "title": "{name} — rank {level}",
    "band": {
      "heading": "Intervallet",
      "range": "{name} är rank {level}. Kristallnamnet på emblemet är {crystal}. En sparad rating från {from} till {to} bär den här ranken."
    },
    "code": {
      "heading": "Rankregler",
      "hold": "Behåll. Kontot bär {name} så länge dess sparade ratingpoäng ligger inom intervallet. Ranken läses från talet. Den väljs inte i en meny.",
      "gateNext": "Tröskel. Nästa rank öppnar vid {next} ratingpoäng.",
      "gateLast": "Tröskel. Det finns ingen nästa rank. Intervallet slutar vid 3 000 ratingpoäng.",
      "record": "Registrering. En rank ändras bara när ett registrerat resultat ändrar ratingpoängen. Att öppna den här sidan registrerar inget resultat.",
      "emblem": "Emblem. Bilden identifierar ranken. Ett köp, en skin-förhandsvisning eller ett kosmetiskt föremål flyttar inte golvet."
    },
    "emblem": {
      "heading": "Vad emblemet är till för",
      "material": "Materialstudien för märket är: {material}. Raden beskriver konstverket. Det är ingen statistik och inget krav.",
      "sample": "Vinstprocenten bredvid emblemet på rankbrädan är ett exempelmärke. Den behöver inte uppnås för att bära ranken."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit är ingångsplattan. Nya konton börjar inte längre här: de börjar med 1 200 Rating Points i Vanguard. Recruit nås bara genom att tappa poäng.",
      "detail": "Tröskeln till Operative är 1 100. Stegtabellen öppnar Recruit vid 0, men motorn sparar ingen rating under 100. Mellan 100 och 1 099 förblir kontot Recruit."
    },
    "rank-2-operative": {
      "stance": "Operative ligger strax under startsiffran. Ett konto som sjunker under 1 200 hamnar här innan det når Recruit.",
      "detail": "Intervallet är hundra poäng brett. Det slutar vid 1 199. Vanguard öppnar vid 1 200."
    },
    "rank-3-vanguard": {
      "stance": "Vanguard är där varje nytt konto börjar, med 1 200 Rating Points. Att klättra härifrån är det första riktiga steget uppför stegen.",
      "detail": "Intervallet går från 1 200 till 1 299. Specialist öppnar vid 1 300."
    },
    "rank-4-specialist": {
      "stance": "Specialist är hantverksranken. Emblemets kristallnamn är GOLD. Det officiella namnet i stegen är Specialist. Det är samma golv.",
      "detail": "Intervallet går från 1 300 till 1 399. Veteran öppnar vid 1 400."
    },
    "rank-5-veteran": {
      "stance": "Veteran är mittmärket. Fyra ranker ligger under golvet och fem över.",
      "detail": "Intervallet går från 1 400 till 1 499. Elite öppnar vid 1 500. Kristallnamnet på emblemet är PLATINUM."
    },
    "rank-6-elite": {
      "stance": "Elite är motornamnet. DIAMOND är kristallnamnet på samma emblem. Inget av namnen är en andra rating.",
      "detail": "Intervallet går från 1 500 till 1 599. Master öppnar vid 1 600."
    },
    "rank-7-master": {
      "stance": "Master är den första ranken där kristallnamnet och det officiella namnet är samma ord. Golvet är 1 600.",
      "detail": "Intervallet går från 1 600 till 1 699. Grandmaster öppnar vid 1 700."
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster är safirsteget. Golvet är 1 700, fortfarande hundra poäng brett, och Sovereign väntar vid 1 800.",
      "detail": "Intervallet går från 1 700 till 1 799. Inget på den här sidan förbrukar en match för att passera det."
    },
    "rank-9-sovereign": {
      "stance": "Sovereign är det breda steget före Legend. Kristallnamnet är IMMORTAL. Det officiella namnet är Sovereign.",
      "detail": "Intervallet går från 1 800 till 1 949. Det är 150 poäng, inte 100. 1 949 bär fortfarande Sovereign. Legend öppnar vid 1 950."
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E. Legend är det sista märket. Kristallnamnet är ACE ELITE. Det officiella namnet är A.C.E. Legend.",
      "detail": "Intervallet öppnar vid 1 950 och slutar vid motorns tak, 3 000. Det finns ingen elfte rank. En sparad rating kan inte överstiga 3 000."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "Vad en A.C.E.-rank är",
      "lede": "En rank är märket som innehåller dina sparade ratingpoäng. Tio märken täcker hela stegen, från Recruit till A.C.E. Legend.",
      "sections": [
        {
          "heading": "Ett tal, ett märke",
          "paragraphs": [
            "Kontot sparar en tävlingsrating. Stegen läser talet och returnerar den högsta rank vars golv talet har nått. Du har aldrig två ranker samtidigt.",
            "Recruit är rank 1. A.C.E. Legend är rank 10. Det officiella namnet är namnet i stegen. Det kortare ordet på emblemet är kristallnamnet för samma rank.",
            "Den här kodexen förklarar den skrivna stegen. Den registrerar inga matchresultat och ändrar ingen sparad rating."
          ]
        },
        {
          "heading": "Hur golven ligger",
          "paragraphs": [
            "Recruit täcker stegens början. Operative öppnar vid 1 100. Från Vanguard till Grandmaster ligger varje nytt golv 100 poäng högre: 1 200, 1 300, 1 400, 1 500, 1 600 och sedan 1 700.",
            "Sovereign öppnar vid 1 800 och gäller till 1 949. A.C.E. Legend öppnar vid 1 950. Motorns tak är 3 000, så Legend är det längsta intervallet."
          ]
        },
        {
          "heading": "Vad en rank inte är",
          "paragraphs": [
            "En rank är inget tak för antalet spelare. Legend är ett golv, inte en lista över tusen konton.",
            "En rank är inget pris, inget skin och ingen kö. Den publika webbplatsen kan visa märket. Den kör ingen match som skriver ett nytt."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Officiellt namn och kristallnamn",
      "lede": "Varje rank har två namn. Det officiella namnet är stegen. Kristallnamnet är ordet som är inristat i emblemet.",
      "sections": [
        {
          "heading": "Varför båda finns",
          "paragraphs": [
            "Motorn och profilen använder det officiella namnet: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Emblemet bär också ett kristallnamn: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Det namnet är konst. Det skapar ingen elfte rank och sparar inget andra tal."
          ]
        },
        {
          "heading": "Där de skiljer sig",
          "paragraphs": [
            "Specialists kristallnamn är GOLD. Veterans är PLATINUM. Elites är DIAMOND. Sovereigns är IMMORTAL. A.C.E. Legends är ACE ELITE. I samtliga fall tillhör golvet det officiella namnet.",
            "Master och Grandmaster använder samma ord på båda ställena."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "De tre divisionerna på brädan",
      "lede": "Division III, II och I är ett läsmedel som målas över en ranks intervall. Kontot sparar ingen division.",
      "sections": [
        {
          "heading": "Vad som sparas",
          "paragraphs": [
            "Ett inloggat konto sparar en ranknivå och en tävlingsrating. Ranknivån följer ratingen. Det finns ingen divisionskolumn bredvid dem.",
            "På rankbrädan delas den valda rankens intervall i tre visningssteg så att ögat ser botten, mitten och toppen av golvet. Division III är intervallets nedre del. Division I är den övre."
          ]
        },
        {
          "heading": "Vad märkena är",
          "paragraphs": [
            "Vinstprocenten och framstegsmärkena på dessa märken är exempel. De är ingen andra stege och inget mål du måste klara.",
            "Att byta divisionsmärke ändrar inte en sparad rating. Det kan bara ett registrerat resultat göra, och den här sidan registrerar inga."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Vad som inte kan flytta en rank",
      "lede": "Märket följer de sparade ratingpoängen. Allt annat på webbplatsen lämnar märket där det är.",
      "sections": [
        {
          "heading": "Utanför motorn",
          "paragraphs": [
            "En skin-förhandsvisning, ett butikskort, en prenumerationsetikett och ett kosmetiskt föremål ger inga ratingpoäng. Att betala för en plan är ingen rank.",
            "Att öppna rankbrädan, rotera ett emblem eller läsa den här kodexen registrerar ingen match.",
            "En anmälan, en supportanteckning och en turneringslayout skriver inte om den sparade ratingen."
          ]
        },
        {
          "heading": "Den enda vägen",
          "paragraphs": [
            "Den skrivna vägen är ett registrerat matchresultat som körs genom ratingpoängmotorn. Ingen publik sida på webbplatsen skriver ett sådant resultat i dag.",
            "Tills ett resultat finns stannar ett nytt konto på sin startrating, och ett befintligt konto behåller den rating som redan är sparad."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Vad ratingpoäng är",
      "lede": "Ratingpoäng är det tävlingstal som sparas på kontot. Ranken är bara intervallet talet hamnar i.",
      "sections": [
        {
          "heading": "Det sparade fältet",
          "paragraphs": [
            "Motorversionen är {version}. Ett nytt konto börjar på {startingRating} ratingpoäng. Det sparade talet kan inte gå under {minRating} och inte över {maxRating}.",
            "Profiler och rankbrädan läser talet när du är inloggad. När du inte är inloggad visar brädan kalibreringsgolvet för det emblem du valt. Golvet är ett exempel, inte ditt konto."
          ]
        },
        {
          "heading": "Vad talet mäter",
          "paragraphs": [
            "Motorn jämför din rating med motståndarsidans genomsnittliga rating. Den håller inget separat värde för en individuell utmärkelse, en huvudskottsandel eller granatanvändning. Sådana siffror ingår inte i den här versionen.",
            "Ett högre tal betyder att stegen förväntar sig att du vinner oftare mot ett lägre tal. Ranknamnen är den publika avläsningen av skalan."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Där ett nytt konto börjar",
      "lede": "Steam-inloggningen skapar kontot med 1 200 Rating Points, rang 3, Vanguard, utan vinster och förluster.",
      "sections": [
        {
          "heading": "Det första märket",
          "paragraphs": [
            "1 200 är Vanguards golv. Operative och Recruit ligger under, så ett nytt konto börjar mitt i stegens tidiga del, inte längst ned.",
            "En ny inloggning återställer inte en redan sparad rating. De första 10 registrerade matcherna är placering: under dem kan ratingen inte stiga över nivå 5. Codexen hittar inte på någon vinst- och förluststatistik."
          ]
        },
        {
          "heading": "Så ser du den",
          "paragraphs": [
            "Efter Steam-inloggning kan panelen och rankbrädan visa den sparade ratingen. Om databasen inte går att nå säger sidan det i stället för att hitta på ett tal.",
            "Startrangen förblir Vanguard tills ett registrerat resultat flyttar ratingen ut ur intervallet 1 200–1 299. Den här webbplatsen skriver inget sådant resultat i dag."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Hur ett registrerat resultat flyttar ratingpoäng",
      "lede": "En registrerad vinst eller förlust mäts mot det andra lagets genomsnittliga rating. Mot ett jämnt lag ger en vinst +15 och en förlust −15. De fullständiga reglerna finns på sidan Ranger.",
      "sections": [
        {
          "heading": "Steget",
          "paragraphs": [
            "Förväntat resultat är chansen som motorn tilldelar före matchen, enbart utifrån de två ratingarna. Vid lika rating är den en halv, så en vinst är värd 15 Rating Points och en förlust kostar 15.",
            "Mot en högre rating är en vinst värd mer än 15 och en förlust kostar mindre. Mot en lägre är det tvärtom. En vinst ger alltid 8 till 25 och en förlust kostar alltid 8 till 25. På nivå 7–9 multipliceras vinstpoäng med 0,8 och på nivå 10 med 0,7, så toppen av stegen tar längre tid. Ratingen hålls mellan 100 och 3 000.",
            "Vid ett lagresultat mäts varje spelare mot det andra lagets genomsnittliga rating. En MVP-bonus på 2 RP är planerad för när servern registrerar kills; fram till dess tillämpas ingen personlig bonus."
          ]
        },
        {
          "heading": "Oavgjort",
          "paragraphs": [
            "Oavgjort ändrar ingenting: varje spelare behåller sin rating. Att lämna eller överge en match kostar 50 RP oavsett resultat.",
            "Tabellen på den här sidan är motorn som räknar på exempelvärden. Raderna är inga sparade matcher och inte ditt konto."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Golvet, taket och en överhoppad rank",
      "lede": "Det sparade talet stannar vid 100 och vid 3 000. Ranken följer alltid talet, så en rank kan inte hoppas över med en knapp.",
      "sections": [
        {
          "heading": "Stoppen",
          "paragraphs": [
            "En förlust vid 100 ratingpoäng stannar på 100. En vinst vid 3 000 stannar på 3 000. Recruits golv i stegen är skrivet som 0, men det sparade talet använder aldrig utrymmet under 100.",
            "1 949 är Sovereign. 1 950 är A.C.E. Legend. Det finns inget mellanliggande märke."
          ]
        },
        {
          "heading": "Inga hopp",
          "paragraphs": [
            "Om ett registrerat resultat lyfte talet från 1 050 till 1 260 skulle kontot bära Vanguard, eftersom 1 260 ligger inom det intervallet. Rankerna däremellan köas inte som separata befordringar. Talet läses en gång.",
            "Ingen sida på webbplatsen utför ett sådant hopp. Exemplet visar bara hur stegen läser ett tal."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Där en matchlänk skulle visas",
      "lede": "En matchlänk är adressen till en spelserver. Den här webbplatsen utfärdar ingen.",
      "sections": [
        {
          "heading": "Desken du kan öppna",
          "paragraphs": [
            "Spelsidan visar en layout för tio spelare och en HITTA MATCH-knapp. Knappen förblir stängd. Den kan inte öppna en Counter-Strike 2-server och ger ingen en adress.",
            "Antalet personer på webbplatsen är inte antalet personer i ett spel. Antalet deltagare i en match är 0."
          ]
        },
        {
          "heading": "Där en länk skulle finnas senare",
          "paragraphs": [
            "Om en matchserver fanns skulle adressen och dess lösenord visas på matchdesken efter att de tio spelarna accepterat. En spelare skulle ansluta från Steam. Ingen adress sparas på webbplatsen och inget lösenord genereras.",
            "Steam-inloggning kopplar kontot. Den placerar ingen spelare på en karta."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Vad den rankade desken är",
      "lede": "Den rankade desken är spelsidans layout för 5v5. Det är en stängd desk, inte en öppen kö.",
      "sections": [
        {
          "heading": "Vad som visas",
          "paragraphs": [
            "Två sidor med fem platser vardera och en kaptensetikett på första platsen. Kartlistan och chattraden bredvid hör till samma layout.",
            "Säkerhetsraderna på sidan är märkta med sin status. Ingen av dem är en aktiv kontroll ännu; se /anti-cheat för färdplanen."
          ]
        },
        {
          "heading": "Vad desken inte gör",
          "paragraphs": [
            "HITTA MATCH söker inte efter motståndare. Den ändrar inte ratingpoängen. Kontots rank är fortfarande det sparade talet, avläst av stegen i den här kodexen.",
            "Det finns ingen separat toppkö över Legend. A.C.E. Legend är det sista märket och öppnar vid 1 950 ratingpoäng."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Hjälp från matchdesken",
      "lede": "Support på den här webbplatsen är en skriftlig desk. Den öppnar ingen direkt röstlinje inne i en match.",
      "sections": [
        {
          "heading": "Vad supportsidan gör",
          "paragraphs": [
            "Supportsidan listar deskarna och erbjuder en ärendeknapp. Att välja knappen skapar inget ärende och når ingen person under en match, eftersom ingen match pågår.",
            "En regelfråga hör till tävlingsreglerna på /rules. En stegfråga hör till den här kodexen."
          ]
        },
        {
          "heading": "En protest, när en match finns",
          "paragraphs": [
            "De skrivna reglerna säger att kaptenen får lämna in en protest innan nästa karta börjar och ange karta, rond och artikel. Webbplatsen sparar inga demos och kör inga spelservrar, så en sådan protest har ingenstans att landa i dag.",
            "Ett layoutresultat är ingen spelad match. Arrangörerna skulle bara registrera ett serieresultat efter en riktig serie."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "I väntan på tio spelare",
      "lede": "En tävlingskarta kräver tio startspelare. Desken hanterar ingen sådan väntan i dag.",
      "sections": [
        {
          "heading": "Den skrivna klockan",
          "paragraphs": [
            "När en match har en publicerad starttid ska fem startspelare per sida vara på plats 15 minuter före start. Den meningen finns i tävlingsreglerna. Klockan startar inte på webbplatsen, eftersom ingen match är publicerad.",
            "Namnen på spelsidan är exempel. Det är inga personer som står i kö."
          ]
        },
        {
          "heading": "Vad som inte händer medan du tittar",
          "paragraphs": [
            "Sidan reserverar ingen server, skickar ingen avisering och räknar inte ned till en accept. Att lämna sidan innebär inte att du överger en match, eftersom du inte var i någon."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "Kaptenen vid desken",
      "lede": "En kapten talar för varje sida. Lobbyroller aktiveras med tävlingsbetan.",
      "sections": [
        {
          "heading": "Vad reglerna tilldelar",
          "paragraphs": [
            "Kaptenen sköter vetot, pauserna och en protest. De övriga startspelarna spelar. En reserv får bara gå in mellan kartor.",
            "På en karta bannar kaptenerna en karta i taget tills en karta återstår. Poolen är Ancient, Anubis, Dust II, Inferno, Mirage, Nuke och Train. Högre seed är lag A och väljer om det bannar först eller sist; vid lika seed avgör ett myntkast. Inget veto är öppet i dag."
          ]
        },
        {
          "heading": "Pauser",
          "paragraphs": [
            "Pauser gäller bara när en matchserver finns. Här finns ingen. Den skrivna kvoten per lag och karta är tre taktiska pauser på 30 sekunder, plus en till i övertid, och totalt 10 minuters teknisk paus. Hela texten finns på /rules.",
            "På lagsidan är kaptenen också den medlem som får skicka truppinbjudningar. Den inbjudan är skild från en matchlobby."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "När en sida inte är redo",
      "lede": "Tävlingsreglerna beskriver walkover för en match med publicerad starttid. Den här webbplatsen utdömer ingen walkover.",
      "sections": [
        {
          "heading": "Den skrivna regeln",
          "paragraphs": [
            "Fem startspelare måste vara redo 15 minuter före den publicerade starten. En sida som fortfarande är kort 15 minuter efter start förlorar serien på walkover, när en match finns. Om båda sidor saknas tas båda bort och arrangörerna registrerar platsen.",
            "En klan som startar en karta med färre än fem behöriga startspelare och saknar en reserv som kan gå in förlorar den kartan på walkover."
          ]
        },
        {
          "heading": "Vad webbplatsen inte gör",
          "paragraphs": [
            "Inget här bevakar en lobby och skriver en walkover på egen hand. En knapp på spelsidan kan inte ge upp en karta som aldrig laddades.",
            "Ett layoutresultat i turneringsträdet är ingen spelad match och ingen walkover."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "Att delta i utslagningen med 100 klaner",
      "lede": "Turneringssidan är ett träd med 100 klaner. Registrerade: 0 av 100. Anmälan är inte öppen.",
      "sections": [
        {
          "heading": "Vad du kan öppna",
          "paragraphs": [
            "Klicka på en klan i trädet för att läsa truppen och öppna sedan en spelare. Namn på öppna platser är exempel, inte godkända anmälningar.",
            "Trädet seedar ingen server och skickar ingen matchlänk."
          ]
        },
        {
          "heading": "Frilotten, när anmälan öppnar",
          "paragraphs": [
            "Den skrivna regeln för en framtida anmälan är att de första 28 godkända klanerna hoppar över omgång 1. Frilotten är inget pris och kan inte göras anspråk på medan registreringen står på 0 av 100.",
            "Serielängd, kartpool och protester finns i tävlingsreglerna på /rules."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Hur en trupp sätts ihop",
      "lede": "En kapten bjuder in en spelare som redan har ett A.C.E.-konto. Det finns ingen publik delningslänk, och ett Steam-lösenord efterfrågas aldrig.",
      "sections": [
        {
          "heading": "Inbjudan som finns",
          "paragraphs": [
            "På lagsidan klistrar en inloggad kapten in ett SteamID64 eller ett A.C.E.-konto-ID. Kontot måste redan vara kopplat via Steam OpenID. Servern skriver en väntande inbjudan när databasen godtar den.",
            "Truppen har fem spelare inklusive kaptenen. En kapten kan inte bjuda in sitt eget konto. En spelare som redan finns i truppen nekas. Om databasen ligger nere misslyckas inbjudan och ingen inbjudan sparas."
          ]
        },
        {
          "heading": "Vad en inbjudan inte är",
          "paragraphs": [
            "Inbjudan skickar inget brev, öppnar ingen privat lobby och skapar ingen länk som du kan publicera. Den placerar inte klanen i utslagningen.",
            "Utslagningsreglerna tillåter två namngivna reserver när en turneringsanmälan finns. Anmälan är inte öppen, så de platserna är inget pass du kan använda i dag."
          ]
        }
      ]
    }
  }
};
