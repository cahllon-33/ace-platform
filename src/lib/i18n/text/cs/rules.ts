import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Soutěžní řád",
    description:
      "Soutěžní řád A.C.E. pro pavouka 100 klanů v Counter-Strike 2. MR12, prodloužení, peníze, pauzy a volný los v 1. kole. Přihlášky jsou uzavřené. Žádná cena není financována.",
  },
  document: {
    header: {
      kicker: "SOUTĚŽNÍ ŘÁD A.C.E.",
      title: "Soutěžní řád",
      lede: "Délka zápasu, peníze, časomíra a pauzy se řídí veřejným soutěžním nastavením Counter-Strike 2. Pavouk pro 100 klanů, volný los v 1. kole a pořadí veta jsou pravidla A.C.E. pro toto rozvržení. Řád začíná pro klan platit až poté, co je klan přijat. Přihlášky jsou uzavřené.",
      notice:
        "A.C.E. neprovozuje žádný server Counter-Strike 2. Přihlášení přes Steam používá výhradně Steam OpenID. Tato stránka neuděluje žádnou cenu a nemění hodnocení.",
    },
    articleLabel: "ČLÁNEK {code}",
    articles: [
      {
        title: "Působnost",
        paragraphs: [
          "Toto je soutěžní řád A.C.E. Na klan se vztahuje až poté, co A.C.E. klan přijme do akce. Přihlášky jsou uzavřené: 0 ze 100. Rankingové fronty, zápasové servery, platby, ceny ani klient anti-cheatu ke stažení nejsou aktivní. Kliknutí v prohlížeči není výhra kola a snímek obrazovky není skóre.",
        ],
      },
      {
        title: "Mapa",
        paragraphs: [
          "Zápas hraje pět hráčů proti pěti. Řádná hrací doba trvá nejvýše 24 kol. Mapu získává strana, která jako první vyhraje 13 kol, a mapa v tu chvíli končí. Strany se mění po 12 kolech. V prvním kole nového poločasu začíná každý hráč s $800.",
        ],
      },
      {
        title: "Časomíra",
        paragraphs: [
          "Kolo trvá 1 minutu 55 sekund. Časovač bomby je 40 sekund. Zneškodnění trvá 10 sekund, se sadou na zneškodnění 5 sekund. Nákupní nabídka zůstává otevřená 20 sekund od začátku kola a nakupovat lze pouze v zóně startu. Oficiální soutěžní hry na začátku kola zmrazí hru na 20 sekund. Rozehrávka trvá 2 minuty, nebo 15 sekund, jakmile je připojeno všech deset hráčů.",
        ],
      },
      {
        title: "Peníze",
        paragraphs: [
          "Hráč nemůže mít více než $16 000. Na mapě s bombou dostane tým za výhru eliminací nebo vypršením času $3 250, za výhru výbuchem bomby $3 500 a za výhru zneškodněním $3 500. Hráč, který bombu položí, dostane $300. Hráč, který ji zneškodní, dostane $300. Prohrávající strana, která bombu položila, dostane navíc $600.",
          "Prohrané kolo vynese $1 400 plus $500 za každou prohru, kterou už má daná strana v sérii. Soutěžní nastavení začíná sérii na hodnotě 1, takže první prohrané kolo vynese $1 900. Bonus pak roste přes $2 400 a $2 900 až ke stropu $3 400. Vyhrané kolo sérii vynuluje. Zabití vynese odměnu nastavenou pro danou zbraň. Pokud zbraň zvláštní odměnu nemá, zabití vynese $300. Palba do vlastních je zapnutá a kulka, která zasáhne spoluhráče, způsobí 33 procent svého poškození.",
        ],
      },
      {
        title: "Prodloužení",
        paragraphs: [
          "Mapa za stavu 12–12 pokračuje prodloužením. Jeden blok má šest kol. Strany se mění po třech kolech. Mapu získává strana, která v bloku jako první vyhraje čtyři kola. Blok, který skončí 3–3, zahajuje další blok a bloky pokračují, dokud jeden z nich některá strana nevyhraje. Každý hráč začíná každý poločas prodloužení s $10 000. Oficiální soutěžní matchmaking může skončit po jednom bloku a zaznamenat remízu. Tento pavouk remízu nezaznamenává.",
        ],
      },
      {
        title: "Pauzy",
        paragraphs: [
          "Tyto pauzy platí až poté, co bude existovat zápasový server. Na tomto webu žádný neexistuje. Každá strana smí na mapě vyvolat tři taktické pauzy po 30 sekundách a nesmí ji vyvolat během pauzy druhé strany. Jedna taktická pauza je k dispozici na začátku prvního bloku prodloužení. Každá strana smí na mapě vyvolat také jednu technickou pauzu v délce 120 sekund. Pokud hráč vypadne, kapitán smí tuto technickou pauzu využít do 30 sekund od výpadku, aby se hráč mohl znovu připojit. Pokud hráč není zpět, když pauza skončí, mapa pokračuje. Vyvolání pauzy za účelem protahování prohraného kola je porušením pravidel chování.",
        ],
      },
      {
        title: "Pole účastníků a volný los v 1. kole",
        paragraphs: [
          "Šampionát je rozvržen jako pavouk jednoduchého vyřazení pro 100 klanů. Klan, který prohraje sérii, vypadává. Jména na volných místech jsou ukázky rozvržení, nikoli přijaté klany.",
          "Až se přihlášky otevřou, klany se očíslují v pořadí, v jakém je A.C.E. přijme. Prvních 28 přijatých klanů obdrží jeden volný los. Volný los přeskakuje pouze 1. kolo a posouvá klan do 2. kola. Jde o postup v pavouku. Není to placená vstupenka ani cena. Klany 29 až 100 hrají 1. kolo. Pokud mají dvě přijetí stejné časové razítko, má přednost klan, který dříve dokončil soupisku pěti základních hráčů. Klan, který odstoupí před uzamčením soupisky, volný los ztrácí a převezme ho další přijatý klan v pořadí.",
        ],
      },
      {
        title: "Délka série",
        paragraphs: [
          "1. kolo, kolo 64 a kolo 32 se hrají na jednu mapu. Osmifinále, čtvrtfinále a obě semifinále se hrají na dvě vítězné mapy (BO3). Velké finále se hraje na tři vítězné mapy (BO5).",
        ],
      },
      {
        title: "Mapy a veto",
        paragraphs: [
          "Mapový fond tvoří veřejný soutěžní seznam: Ancient, Anubis, Cache, Dust II, Inferno, Mirage a Nuke. Pokud se tento veřejný seznam změní před otevřením přihlášek, náhradní seznam bude zveřejněn na této stránce před prvním vetem.",
          "U zápasu na jednu mapu kapitáni zakazují po jedné mapě, dokud nezbude jediná. Jako první zakazuje nižší přihlašovací číslo. U série BO3 každý kapitán jednou zakáže, poté každý vybere jednu mapu, poté každý ještě jednou zakáže a poslední mapa je rozhodující. Nižší přihlašovací číslo zakazuje první a druhý kapitán vybírá první. U série BO5 každý kapitán jednou zakáže, poté se ve výběru střídají, dokud nejsou zvoleny čtyři mapy, a zbývající mapa je rozhodující. Nižší přihlašovací číslo zakazuje první a vybírá třetí. Na mapě, kterou vybral jeden kapitán, volí počáteční stranu druhý kapitán. Na poslední zbývající mapě volí počáteční stranu nižší přihlašovací číslo. Kapitán, který po otevření veta deset minut nereaguje, přenechává následující zákaz nebo výběr soupeři. Dnes není otevřeno žádné veto.",
        ],
      },
      {
        title: "Soupiska",
        paragraphs: [
          "Klan uvádí pět základních hráčů a smí jmenovat dva náhradníky. Každý základní hráč potřebuje účet A.C.E. propojený přes Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam. Jeden kapitán jedná za tým při vetu, pauzách a protestech. Náhradník smí nastoupit pouze mezi mapami. Sdílení účtu, vypůjčený účet a tentýž hráč ve dvou klanech v témže pavouku jsou zakázány. Tento web nesbírá hardwarové identifikátory a nespouští klienta anti-cheatu.",
        ],
      },
      {
        title: "Připravenost",
        paragraphs: [
          "Tyto časy platí až poté, co bude existovat zápas. Pět základních hráčů musí být připraveno 15 minut před zveřejněným začátkem. Strana, která není připravena 15 minut po zveřejněném začátku, prohrává sérii kontumačně. Pokud chybějí obě strany, jsou vyřazeny obě a místo vyplní personál. Klan, který zahájí mapu s méně než pěti způsobilými základními hráči a nemá náhradníka, který by mohl nastoupit, prohrává tuto mapu kontumačně. Nic na tomto webu neuděluje automatickou kontumaci.",
        ],
      },
      {
        title: "Chování",
        paragraphs: [
          "Obtěžování, nenávistné projevy, ovlivňování zápasů, sázení na vlastní sérii, ghosting a úmyslné zdržování jsou porušením pravidel. Prokázané porušení může vést k vyřazení klanu z pavouka. Tato stránka hráče neskenuje a neprohlašuje žádného hráče za prověřeného.",
        ],
      },
      {
        title: "Zaznamenaný výsledek",
        paragraphs: [
          "Kapitán smí podat protest před začátkem další mapy. Protest uvádí mapu, kolo a článek. Tento web neukládá dema a neprovozuje herní servery. Výsledek série zapisuje do pavouka personál. Tento zapsaný výsledek je skóre, které A.C.E. zobrazuje. Nepředstavuje vzdání se žádného zákonného práva. Skóre v rozvržení není odehraný zápas.",
        ],
      },
      {
        title: "Co není v provozu",
        paragraphs: [
          "Registrace je uzavřená. Neběží žádný zápasový server, vysílání, rozesílání pošty ani fond cen. Z této stránky se neuděluje žádná hotovost, skin ani token. Skóre v pavouku zůstává na 0, dokud nebude zaznamenána skutečná série.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Plán šampionátu",
      title: "Časový plán spuštění turnaje",
      stageLabel: "Fáze {n}",
      stages: [
        {
          title: "Otevřené registrace",
          status: "UZAVŘENO · 0 ZE 100",
          body: "Prvních 28 klanů přijatých po otevření přihlášek obdrží volný los v 1. kole a postoupí do 2. kola. Zbylých 72 hraje 1. kolo. Z tohoto webu se neodesílá žádná pošta k přihláškám.",
        },
        {
          title: "Regionální kalibrační pavouky",
          status: "UZAMČENO",
          body: "Od kola 64 po osmifinále. Do osmifinále na jednu mapu, poté na dvě vítězné mapy (BO3). Neběží žádný harmonogram vysílání.",
        },
        {
          title: "Elitní profesionální čtvrtfinále",
          status: "UZAMČENO",
          body: "Čtvrtfinále a semifinále se hrají na dvě vítězné mapy (BO3) podle veta map v řádu níže. Neběží žádný živý přenos.",
        },
        {
          title: "Velké vrcholné finále",
          status: "UZAMČENO",
          body: "Velké finále se hraje na tři vítězné mapy (BO5). Není financována žádná cena v hotovosti, skinech ani tokenech.",
        },
      ],
    },
    code: {
      kicker: "Soutěžní řád",
      title: "Vyřazovací řád pro 100 klanů",
      lede: "Psaná pravidla pro pavouka 100 klanů. Původní text A.C.E. Přihlášky jsou uzavřené, žádný zápas se nehraje a žádná cena není financována. Pravidlo o lobby, pauze nebo kontumaci platí až poté, co bude existovat skutečná série.",
      articleLabel: "Článek {id}",
      articles: [
        {
          title: "Pole účastníků",
          body: "Šampionát je pavouk jednoduchého vyřazení pro 100 klanů. Každý klan vstupuje do jedné strany dvojitého křídla. Klan, který prohraje sérii, vypadává. Pavouk zůstává rozvržením, dokud A.C.E. neotevře přihlášky a nezaznamená skutečné výsledky. Zástupná jména na volných místech nejsou přijaté klany.",
        },
        {
          title: "Pořadí přihlášek a volný los v 1. kole",
          body: "Přihlášky jsou uzavřené: 0 ze 100. Až se přihlášky otevřou, klany se očíslují v pořadí, v jakém je A.C.E. přijme. Prvních 28 přijatých klanů obdrží jeden volný los. Tento volný los přeskakuje pouze 1. kolo a posouvá klan do 2. kola. Jde o postup v pavouku, nikoli o placenou vstupenku ani cenu. Klany 29 až 100 hrají 1. kolo. Pokud mají dvě přijetí stejné časové razítko, má přednost klan, který dříve dokončil soupisku pěti základních hráčů. Klan, který odstoupí před uzamčením soupisky, volný los ztrácí a převezme ho další přijatý klan v pořadí.",
        },
        {
          title: "Soupiska",
          body: "Klan uvádí pět základních hráčů a smí jmenovat dva náhradníky. Každý základní hráč potřebuje účet A.C.E. propojený přes Steam OpenID. Jeden kapitán jedná za tým při vetech, pauzách a protestech. Náhradníci smějí nastoupit pouze mezi mapami. Sdílení účtů, vypůjčené účty a hráč ve dvou klanech v témže pavouku jsou zakázány. Tento web nesbírá hardwarové identifikátory a nespouští klienta anti-cheatu.",
        },
        {
          title: "Délka série",
          body: "1. kolo, kolo 64 a kolo 32 se hrají na jednu mapu. Osmifinále, čtvrtfinále a obě semifinále se hrají na dvě vítězné mapy (BO3). Velké finále se hraje na tři vítězné mapy (BO5). Mapu vyhrává strana, která jako první získá 13 kol. Za stavu 12–12 pokračuje mapa prodloužením: vyhrává ten, kdo první získá 4 kola, strany se mění po 3 kolech a každá strana začíná prodloužení s 10 000 penězi. Nerozhodné prodloužení se hraje znovu podle stejného pravidla.",
        },
        {
          title: "Mapový fond a veto",
          body: "Mapový fond tvoří Ancient, Anubis, Cache, Dust II, Inferno, Mirage a Nuke. U zápasu na jednu mapu kapitáni zakazují po jedné mapě, dokud nezbude jediná, a jako první zakazuje nižší přihlašovací číslo. U série BO3 každý kapitán jednou zakáže, poté každý vybere jednu mapu, poté každý ještě jednou zakáže a poslední mapa je rozhodující. Nižší přihlašovací číslo zakazuje první a druhý kapitán vybírá první. U série BO5 každý kapitán jednou zakáže, poté se ve výběru střídají, dokud nejsou zvoleny čtyři mapy, a zbývající mapa je rozhodující. Nižší přihlašovací číslo zakazuje první a vybírá třetí. Na vybrané mapě volí počáteční stranu druhý kapitán. Na poslední zbývající mapě volí počáteční stranu nižší přihlašovací číslo. Kapitán, který po otevření veta deset minut nereaguje, přenechává následující zákaz nebo výběr soupeři. Úplný zápasový řád je na /rules.",
        },
        {
          title: "Začátek, pauza a odpojení",
          body: "Tyto časy platí až poté, co bude existovat zápas. Na tomto webu neběží a žádná lobby není otevřená. Pět základních hráčů musí být připraveno 15 minut před zveřejněným začátkem. Každá strana smí na mapě vyvolat tři taktické pauzy po 30 sekundách a jednu technickou pauzu v délce 120 sekund. Jedna taktická pauza je k dispozici na začátku prvního bloku prodloužení. Hráč, který vypadl, se smí znovu připojit během technické pauzy vyvolané do 30 sekund od výpadku. Pokud hráč není zpět, když tato pauza skončí, mapa pokračuje bez něj. Nic na tomto webu neuděluje automatickou kontumaci. Úplný zápasový řád je na /rules.",
        },
        {
          title: "Nepřítomnost",
          body: "Strana, která není připravena 15 minut po zveřejněném začátku, prohrává sérii kontumačně. Pokud chybějí obě strany, jsou vyřazeny obě a následující místo zůstává volné, dokud personál nezapíše výsledek. Klan, který na začátku nasadí méně než pět způsobilých základních hráčů a nemá náhradníka, který by mohl nastoupit, prohrává tuto mapu kontumačně.",
        },
        {
          title: "Chování",
          body: "Obtěžování, nenávistné projevy, ovlivňování zápasů, sázení na vlastní sérii a úmyslné zdržování jsou porušením pravidel. Prokázané porušení vede k vyřazení klanu z pavouka. Chat během živé série, až budou zápasy existovat, zůstává omezen na sestavu, pauzy a skóre. Tato stránka hráče neskenuje a netvrdí, že je hráč prověřený.",
        },
        {
          title: "Protesty",
          body: "Kapitán podává protest v zápasovém kanálu před začátkem další mapy. Protest uvádí mapu, kolo a článek pravidel. Personál může oba kapitány požádat o demo, které si hráči uložili. Tento web neukládá dema a neprovozuje herní servery. Výsledek série zapisuje do pavouka hlavní rozhodčí. Tento zapsaný výsledek je skóre, které A.C.E. zobrazuje. Nepředstavuje vzdání se žádného zákonného práva a nečiní ze skóre v rozvržení odehraný zápas.",
        },
        {
          title: "Co tato stránka nedělá",
          body: "Registrace je uzavřená. Neběží žádný zápasový server, vysílání, rozesílání pošty ani fond cen. Z této stránky se neuděluje žádná hotovost, skin ani token. Skóre v pavouku zůstává na 0, dokud nebude zaznamenána skutečná série. Výše uvedený řád je psaným pravidlem pro rozvržení 100 klanů. Pro klan začíná platit až poté, co je klan skutečně přijat.",
        },
      ],
    },
  },
};
