import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Kalibrační kodex",
    description:
      "Vysvětlení hodností A.C.E. Každá otázka otevírá úplnou odpověď o bodech hodnocení a pravidlech dané hodnosti. Kodex nezapočítává žádný zápas.",
    articleTitle: "{title} — Kalibrační kodex",
  },
  groups: {
    ladder: {
      title: "Žebříček",
      kicker: "Jak se hodnost čte",
    },
    points: {
      title: "Body hodnocení",
      kicker: "Jediné uložené číslo",
    },
    ranks: {
      title: "Jednotlivé hodnosti",
      kicker: "Pravidla pro daný odznak",
    },
    desk: {
      title: "Zápasový pult",
      kicker: "Co pult dokáže a co ne",
    },
  },
  index: {
    title: "Kalibrační kodex",
    lede: "Deset hodností. Jedno uložené číslo. Otevřete libovolnou otázku a zobrazí se úplná odpověď. Zápasový pult pokračuje na dalších stránkách.",
    status:
      "Tento kodex vysvětluje psaný žebříček. Nezapočítává žádný zápas a nemění uložené hodnocení.",
    searchLabel: "Hledat v kodexu",
    searchPlaceholder: "Zkuste 1950, Recruit nebo remíza",
    empty: "Hledání neodpovídá žádná položka.",
    columnLabel: "Sloupec A.C.E. {n}",
    pagerLabel: "Stránky kodexu",
    first: "První",
    previous: "Předchozí",
    next: "Další",
    last: "Poslední",
    pageOf: "Stránka {n} z {m}",
  },
  article: {
    breadcrumb: "A.C.E. · Kalibrační kodex",
    status:
      "Tato stránka vysvětluje psaný žebříček. Nezapočítává žádný zápas a nemění uložené hodnocení.",
    emblemAlt: "Emblém {name}, hodnost {level}",
    emblemCaption: "Hodnost {level} · {name} · {crystal}",
    examples: {
      heading: "Propočtené příklady z enginu",
      intro:
        "Každý řádek volá stejnou funkci bodů hodnocení, jakou používá žebříček. Vstupy jsou příklady. Neukládají se do žádného účtu.",
      columns: {
        yourPoints: "Vaše body",
        otherSide: "Druhá strana",
        result: "Výsledek",
        storedAfter: "Uloženo poté",
        change: "Změna",
      },
      results: {
        win: "Výhra",
        loss: "Prohra",
        draw: "Remíza",
      },
    },
    turnLabel: "Pokračovat kodexem",
    previous: "Předchozí",
    next: "Další",
    alsoIn: "Také v A.C.E.",
    backToBoard: "Zpět na tabuli hodností",
  },
  rankArticle: {
    title: "{name} — hodnost {level}",
    band: {
      heading: "Pásmo",
      range:
        "{name} je hodnost {level}. Krystalový štítek na emblému zní {crystal}. Tuto hodnost nese uložené hodnocení od {from} do {to}.",
    },
    code: {
      heading: "Pravidla hodnosti",
      hold: "Držení. Účet nese hodnost {name}, dokud jeho uložené body hodnocení leží v tomto pásmu. Hodnost se čte z čísla. Nevybírá se z nabídky.",
      gateNext: "Brána. Další hodnost se otevírá při {next} bodech hodnocení.",
      gateLast: "Brána. Žádná další hodnost neexistuje. Pásmo končí na 3 000 bodech hodnocení.",
      record:
        "Záznam. Hodnost se mění pouze tehdy, když zaznamenaný výsledek změní body hodnocení. Otevření této stránky žádný výsledek nezaznamenává.",
      emblem:
        "Emblém. Obrázek identifikuje hodnost. Nákup, náhled skinu ani kosmetika dolní hranici neposouvají.",
    },
    emblem: {
      heading: "K čemu emblém slouží",
      material:
        "Materiálová studie tohoto odznaku je: {material}. Tento řádek popisuje grafiku. Není to statistika ani požadavek.",
      sample:
        "Údaj o úspěšnosti výher zobrazený vedle tohoto emblému na tabuli hodností je ukázkový štítek. Není nutné ho dosáhnout, aby bylo možné hodnost nést.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit je vstupní stupeň. Nový účet propojený se Steam se ukládá s 1 000 body hodnocení a 1 000 stále odpovídá hodnosti Recruit.",
      detail:
        "Brána do hodnosti Operative je 1 100. Tabulka žebříčku otevírá Recruit na 0, ale engine neuloží hodnocení nižší než 100. Mezi 100 a 1 099 zůstává účet v hodnosti Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative je první hodnost, jejíž dolní hranice leží nad výchozím číslem. Jejím dosažením uložené hodnocení opustilo vstupní stupeň.",
      detail: "Pásmo je široké sto bodů. Končí na 1 199. Vanguard se otevírá na 1 200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard je přední hrana raného žebříčku. Účet už je za výchozím hodnocením i za dolní hranicí hodnosti Operative.",
      detail: "Pásmo sahá od 1 200 do 1 299. Specialist se otevírá na 1 300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist je hodnost řemesla. Krystalový štítek na emblému zní GOLD. Oficiální název uložený v žebříčku je Specialist. Jde o tutéž dolní hranici.",
      detail: "Pásmo sahá od 1 300 do 1 399. Veteran se otevírá na 1 400.",
    },
    "rank-5-veteran": {
      stance: "Veteran je prostřední odznak. Pod touto hranicí leží čtyři hodnosti a nad ní pět.",
      detail:
        "Pásmo sahá od 1 400 do 1 499. Elite se otevírá na 1 500. Krystalový štítek na tomto emblému zní PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite je název v enginu. DIAMOND je krystalový štítek na stejném emblému. Žádný z těchto štítků není druhým hodnocením.",
      detail: "Pásmo sahá od 1 500 do 1 599. Master se otevírá na 1 600.",
    },
    "rank-7-master": {
      stance:
        "Master je první hodnost, jejíž krystalový štítek a oficiální název používají stejné slovo. Dolní hranice je 1 600.",
      detail: "Pásmo sahá od 1 600 do 1 699. Grandmaster se otevírá na 1 700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster je safírový stupeň. Dolní hranice je 1 700, pásmo je stále široké sto bodů a na 1 800 čeká Sovereign.",
      detail:
        "Pásmo sahá od 1 700 do 1 799. Nic na této stránce nespotřebuje zápas k jeho překročení.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign je široký stupeň před hodností Legend. Krystalový štítek zní IMMORTAL. Oficiální název je Sovereign.",
      detail:
        "Pásmo sahá od 1 800 do 1 949. To je 150 bodů, ne 100. Hodnota 1 949 stále odpovídá hodnosti Sovereign. Legend se otevírá na 1 950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E. Legend je poslední odznak. Krystalový štítek zní ACE ELITE. Oficiální název je A.C.E. Legend.",
      detail:
        "Pásmo začíná na 1 950 a končí na stropu enginu, 3 000. Jedenáctá hodnost neexistuje. Uložené hodnocení nemůže vystoupat nad 3 000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "Co je hodnost A.C.E.",
      lede: "Hodnost je odznak, do jehož pásma spadají vaše uložené body hodnocení. Deset odznaků pokrývá celý žebříček, od hodnosti Recruit po A.C.E. Legend.",
      sections: [
        {
          heading: "Jedno číslo, jeden odznak",
          paragraphs: [
            "Účet ukládá soutěžní hodnocení. Žebříček toto číslo přečte a vrátí nejvyšší hodnost, jejíž dolní hranice číslo dosáhlo. Nikdy nedržíte dvě hodnosti zároveň.",
            "Recruit je hodnost 1. A.C.E. Legend je hodnost 10. Oficiální název je název v žebříčku. Kratší slovo na emblému je krystalový štítek téže hodnosti.",
            "Tento kodex vysvětluje psaný žebříček. Nezapočítává žádný zápas a nemění uložené hodnocení.",
          ],
        },
        {
          heading: "Jak jsou rozloženy dolní hranice",
          paragraphs: [
            "Recruit pokrývá začátek žebříčku. Operative se otevírá na 1 100. Od hodnosti Vanguard po Grandmaster je každá další dolní hranice o 100 bodů vyšší: 1 200, 1 300, 1 400, 1 500, 1 600 a poté 1 700.",
            "Sovereign se otevírá na 1 800 a drží účet až do 1 949. A.C.E. Legend se otevírá na 1 950. Strop enginu je 3 000, takže Legend má nejdelší pásmo.",
          ],
        },
        {
          heading: "Čím hodnost není",
          paragraphs: [
            "Hodnost není omezení počtu hráčů. Legend je dolní hranice, ne seznam tisíce účtů.",
            "Hodnost není cena, skin ani fronta. Veřejný web může odznak zobrazit. Nespouští zápas, který by zapsal nový.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Oficiální název a krystalový název",
      lede: "Každá hodnost má dva štítky. Oficiální název patří žebříčku. Krystalový název je slovo vyryté do emblému.",
      sections: [
        {
          heading: "Proč existují oba",
          paragraphs: [
            "Engine i profil používají oficiální název: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Emblém nese také krystalový štítek: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Tento štítek je grafika. Nevytváří jedenáctou hodnost a neukládá druhé číslo.",
          ],
        },
        {
          heading: "Kde se liší",
          paragraphs: [
            "Krystalový štítek hodnosti Specialist je GOLD. U hodnosti Veteran je to PLATINUM. U hodnosti Elite DIAMOND. U hodnosti Sovereign IMMORTAL. U hodnosti A.C.E. Legend ACE ELITE. Ve všech případech dolní hranice stále patří oficiálnímu názvu.",
            "Master a Grandmaster používají na obou místech stejné slovo.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "Tři divize na tabuli",
      lede: "Divize III, II a I jsou pomůcka pro čtení vykreslená napříč pásmem hodnosti. Účet žádnou divizi neukládá.",
      sections: [
        {
          heading: "Co se ukládá",
          paragraphs: [
            "Přihlášený účet ukládá úroveň hodnosti a soutěžní hodnocení. Úroveň hodnosti se řídí hodnocením. Vedle nich žádný sloupec pro divizi neexistuje.",
            "Na tabuli hodností je pásmo vybrané hodnosti rozděleno do tří zobrazovacích stupňů, aby bylo vidět spodek, střed a vrchol dané úrovně. Divize III je dolní konec pásma. Divize I je horní konec.",
          ],
        },
        {
          heading: "Co jsou štítky",
          paragraphs: [
            "Procenta úspěšnosti výher a značky postupu na těchto štítcích jsou ukázky. Nejsou druhým žebříčkem a nejsou cílem, který musíte splnit.",
            "Změna štítku divize nemění uložené hodnocení. To dokáže jen zaznamenaný výsledek a tato stránka žádný nezaznamenává.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "Co nemůže pohnout hodností",
      lede: "Odznak se řídí uloženými body hodnocení. Vše ostatní na webu nechává odznak tam, kde je.",
      sections: [
        {
          heading: "Mimo engine",
          paragraphs: [
            "Náhled skinu, karta obchodu, štítek předplatného ani kosmetika nepřidávají body hodnocení. Zaplacení tarifu není hodnost.",
            "Otevření tabule hodností, otočení emblému ani čtení tohoto kodexu nezapočítává zápas.",
            "Nahlášení, poznámka podpory ani turnajové rozvržení nepřepisují uložené hodnocení.",
          ],
        },
        {
          heading: "Jediná cesta",
          paragraphs: [
            "Psanou cestou je zaznamenaný výsledek zápasu zpracovaný enginem bodů hodnocení. Žádná veřejná stránka na tomto webu dnes takový výsledek nezapisuje.",
            "Dokud výsledek neexistuje, nový účet zůstává na svém výchozím hodnocení a stávající účet si ponechává již uložené hodnocení.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "Co jsou body hodnocení",
      lede: "Body hodnocení jsou soutěžní číslo uložené v účtu. Hodnost je jen pásmo, do kterého toto číslo spadá.",
      sections: [
        {
          heading: "Uložené pole",
          paragraphs: [
            "Verze enginu je {version}. Nový účet začíná s {startingRating} body hodnocení. Uložené číslo nemůže klesnout pod {minRating} a nemůže vystoupat nad {maxRating}.",
            "Profily a tabule hodností čtou toto číslo, když jste přihlášeni. Když přihlášeni nejste, tabule zobrazuje kalibrační dolní hranici vybraného emblému. Tato hranice je ukázka, ne váš účet.",
          ],
        },
        {
          heading: "Co číslo měří",
          paragraphs: [
            "Engine porovnává vaše hodnocení s průměrným hodnocením protější strany. Nevede samostatné skóre pro individuální ocenění, podíl zásahů do hlavy ani práci s granáty. Tyto údaje nejsou součástí této verze.",
            "Vyšší číslo znamená, že žebříček očekává, že proti nižšímu číslu budete vyhrávat častěji. Názvy hodností jsou veřejným čtením této stupnice.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Kde nový účet začíná",
      lede: "Přihlášení přes Steam vytvoří účet s 1 000 body hodnocení, hodností 1, Recruit, bez výher a bez proher.",
      sections: [
        {
          heading: "Úvodní odznak",
          paragraphs: [
            "1 000 leží v pásmu Recruit. Operative se otevírá až na 1 100, takže nový účet vstupní stupeň nepřeskočí.",
            "Opakované přihlášení již uložené hodnocení nevynuluje. Kodex nespouští umísťovací zápasy a nevymýšlí bilanci výher a proher.",
          ],
        },
        {
          heading: "Jak ho zobrazit",
          paragraphs: [
            "Po přihlášení přes Steam může přehled a tabule hodností zobrazit uložené hodnocení. Pokud je databáze nedostupná, stránka to oznámí, místo aby si číslo vymyslela.",
            "Výchozí hodnost zůstává Recruit, dokud zaznamenaný výsledek neposune hodnocení přes 1 100. Žádný takový výsledek se z tohoto webu dnes nezapisuje.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Jak zaznamenaný výsledek mění body hodnocení",
      lede: "Engine používá jednu velikost kroku, 32, a jednu stupnici, 400. Výsledkem je výhra, prohra nebo remíza proti průměru druhé strany.",
      sections: [
        {
          heading: "Krok",
          paragraphs: [
            "Očekávané skóre je šance, kterou engine přiřadí před zápasem pouze na základě obou hodnocení. Proti stejnému hodnocení je tato šance jedna polovina, takže výhra má hodnotu 16 bodů hodnocení a prohra stojí 16.",
            "Proti vyššímu hodnocení má výhra hodnotu vyšší než 16 a prohra stojí méně než 16. Proti nižšímu hodnocení má výhra hodnotu nižší než 16 a prohra stojí více než 16. Výsledek se zaokrouhlí na celé číslo a poté se udržuje mezi 100 a 3 000.",
            "U týmového výsledku se každý hráč na straně poměřuje s průměrnými body hodnocení druhé strany. Současný engine dává každému hráči na dané straně stejnou cestu. Nepřidává bonus za osobní ocenění.",
          ],
        },
        {
          heading: "Remíza",
          paragraphs: [
            "Remíza je poloviční výsledek. Pokud jsou obě hodnocení stejná, očekávané skóre je už jedna polovina, takže remíza posune číslo o nulu.",
            "Tabulka na této stránce ukazuje engine pracující s ukázkovými vstupy. Tyto řádky nejsou uložené zápasy a nejsou vaším účtem.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "Dolní hranice, strop a přeskočená hodnost",
      lede: "Uložené číslo se zastaví na 100 a na 3 000. Hodnost se vždy řídí číslem, takže ji nelze přeskočit tlačítkem.",
      sections: [
        {
          heading: "Zarážky",
          paragraphs: [
            "Prohra při 100 bodech hodnocení zůstane na 100. Výhra při 3 000 zůstane na 3 000. Dolní hranice hodnosti Recruit v žebříčku je zapsána jako 0, ale uložené číslo mezeru pod 100 nikdy nevyužije.",
            "1 949 je Sovereign. 1 950 je A.C.E. Legend. Žádný mezistupeň neexistuje.",
          ],
        },
        {
          heading: "Žádné přeskakování",
          paragraphs: [
            "Pokud by zaznamenaný výsledek posunul číslo z 1 050 na 1 260, účet by nesl hodnost Vanguard, protože 1 260 leží v jejím pásmu. Hodnosti mezi tím se neřadí jako samostatná povýšení. Číslo se čte jednou.",
            "Žádná stránka na tomto webu takový skok neprovádí. Příklad pouze ukazuje, jak žebříček čte číslo.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Kde by se objevil odkaz na zápas",
      lede: "Odkaz na zápas je adresa herního serveru. Tento web žádnou nevydává.",
      sections: [
        {
          heading: "Pult, který můžete otevřít",
          paragraphs: [
            "Stránka hraní zobrazuje rozvržení pro deset hráčů a ovládací prvek NAJÍT ZÁPAS. Tento prvek zůstává uzavřený. Nemůže otevřít server Counter-Strike 2 a nikomu nepředá adresu.",
            "Počet lidí na webu není počtem lidí ve hře. Počet hráčů v zápase je 0.",
          ],
        },
        {
          heading: "Kde by odkaz byl později",
          paragraphs: [
            "Pokud by zápasový server existoval, adresa a její heslo by se zobrazily na zápasovém pultu poté, co by deset hráčů zápas přijalo. Hráč by se připojil přes Steam. Na tomto webu se neukládá žádná adresa a negeneruje se žádné heslo.",
            "Přihlášení přes Steam propojí účet. Hráče na mapu nepřenese.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "Co je rankingový pult",
      lede: "Rankingový pult je rozvržení stránky hraní pro zápas 5v5. Je to uzavřený pult, ne otevřená fronta.",
      sections: [
        {
          heading: "Co je vykresleno",
          paragraphs: [
            "Dvě strany, každá s pěti místy, a štítek kapitána na prvním místě. Seznam map a řádek chatu vedle nich jsou součástí stejného rozvržení.",
            "Bezpečnostní řádky na této stránce jsou označeny jako rozvržení, maketa nebo koncept. Nejde o probíhající kontrolu.",
          ],
        },
        {
          heading: "Co pult nedělá",
          paragraphs: [
            "NAJÍT ZÁPAS nehledá soupeře. Nemění body hodnocení. Hodnost na účtu je stále uložené číslo, které čte žebříček popsaný v tomto kodexu.",
            "Nad hodností Legend neexistuje žádná samostatná nejvyšší fronta. A.C.E. Legend je poslední odznak a otevírá se na 1 950 bodech hodnocení.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Pomoc od zápasového pultu",
      lede: "Podpora na tomto webu je psaný pult. Neotevírá živou hlasovou linku uvnitř zápasu.",
      sections: [
        {
          heading: "Co dělá stránka podpory",
          paragraphs: [
            "Stránka podpory uvádí jednotlivé pulty a nabízí prvek pro požadavek. Zvolení tohoto prvku nevytvoří případ a během zápasu se nedostane k žádné osobě, protože žádný zápas neprobíhá.",
            "Otázka k pravidlům patří do soutěžního řádu na /rules. Otázka k žebříčku patří do tohoto kodexu.",
          ],
        },
        {
          heading: "Protest, až bude zápas existovat",
          paragraphs: [
            "Psaný řád říká, že kapitán smí podat protest před začátkem další mapy a uvést mapu, kolo a článek. Tento web neukládá dema a neprovozuje herní servery, takže takové podání dnes nemá kam dorazit.",
            "Skóre v rozvržení není odehraný zápas. Personál by zapsal výsledek série až po skutečné sérii.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "Čekání na deset hráčů",
      lede: "Soutěžní mapa potřebuje deset základních hráčů. Pult dnes takové čekání neobsluhuje.",
      sections: [
        {
          heading: "Psaná časomíra",
          paragraphs: [
            "Jakmile má zápas zveřejněný začátek, pět základních hráčů každé strany musí být připraveno 15 minut před tímto začátkem. Tato věta je v soutěžním řádu. Časomíra se na tomto webu nespouští, protože žádný zápas není zveřejněn.",
            "Ukázková jména na stránce hraní jsou rozvržení. Nejsou to lidé čekající ve frontě.",
          ],
        },
        {
          heading: "Co se neděje, zatímco se díváte",
          paragraphs: [
            "Stránka nerezervuje server, neposílá oznámení a neodpočítává čas do přijetí. Opuštěním stránky neopouštíte zápas, protože jste v žádném nebyli.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "Kapitán u pultu",
      lede: "Za stranu jedná jeden kapitán. Na současném pultu je tato role štítkem v rozvržení, ne živou lobby.",
      sections: [
        {
          heading: "Co řád přiděluje",
          paragraphs: [
            "Kapitán obstarává veto, pauzy a protest. Ostatní základní hráči hrají. Náhradník smí nastoupit pouze mezi mapami.",
            "U zápasu na jednu mapu kapitáni zakazují po jedné mapě, dokud nezbude jediná. Mapový fond tvoří Ancient, Anubis, Cache, Dust II, Inferno, Mirage a Nuke. Jako první zakazuje nižší přihlašovací číslo. Dnes není otevřeno žádné veto.",
          ],
        },
        {
          heading: "Pauzy",
          paragraphs: [
            "Pauzy platí až poté, co bude existovat zápasový server. Zde žádný neexistuje. Psaný nárok jsou tři taktické pauzy po 30 sekundách a jedna technická pauza v délce 120 sekund na mapu. Úplné znění je na /rules.",
            "Na stránce týmů je kapitán zároveň členem, který smí odeslat pozvánku do soupisky. Tato pozvánka je oddělená od zápasové lobby.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Když strana není připravena",
      lede: "Soutěžní řád popisuje kontumaci u zápasu, který má zveřejněný začátek. Tento web takovou kontumaci neuděluje.",
      sections: [
        {
          heading: "Psané pravidlo",
          paragraphs: [
            "Pět základních hráčů musí být připraveno 15 minut před zveřejněným začátkem. Strana, které 15 minut po začátku stále někdo chybí, prohrává sérii kontumačně, jakmile bude zápas existovat. Pokud chybějí obě strany, jsou vyřazeny obě a místo vyplní personál.",
            "Klan, který zahájí mapu s méně než pěti způsobilými základními hráči a nemá náhradníka, který by mohl nastoupit, prohrává tuto mapu kontumačně.",
          ],
        },
        {
          heading: "Co tento web neudělá",
          paragraphs: [
            "Nic zde nesleduje lobby a samo nezapisuje kontumaci. Tlačítko na stránce hraní nemůže vzdát mapu, která se nikdy nenačetla.",
            "Skóre v rozvržení turnajového pavouka není odehraný zápas ani kontumace.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Vstup do vyřazovací soutěže 100 klanů",
      lede: "Stránka turnajů je pavouk pro 100 klanů. Registrace je 0 ze 100. Přihlášky nejsou otevřené.",
      sections: [
        {
          heading: "Co můžete otevřít",
          paragraphs: [
            "Klikněte na klan v pavouku, abyste si přečetli jeho soupisku, a poté otevřete hráče. Zástupná jména jsou ukázky. Nejsou to přijaté přihlášky.",
            "Pavouk nenasazuje server a neposílá odkaz na zápas.",
          ],
        },
        {
          heading: "Volný los, až se otevřou přihlášky",
          paragraphs: [
            "Psané pravidlo pro budoucí přihlášky stanoví, že prvních 28 přijatých klanů přeskočí 1. kolo. Tento volný los není cena a nelze ho uplatnit, dokud registrace zůstává na 0 ze 100.",
            "Délka série, mapový fond a protesty jsou uvedeny v soutěžním řádu na /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Jak se sestavuje soupiska",
      lede: "Kapitán pozve hráče, který už má účet A.C.E. Neexistuje žádný veřejný odkaz ke sdílení a heslo ke službě Steam se nikdy nevyžaduje.",
      sections: [
        {
          heading: "Pozvánka, která existuje",
          paragraphs: [
            "Na stránce týmů přihlášený kapitán vloží SteamID64 nebo ID účtu A.C.E. Účet už musí být propojen přes Steam OpenID. Server zapíše čekající pozvánku, když ji databáze přijme.",
            "Soupiska má pět hráčů včetně kapitána. Kapitán nemůže pozvat vlastní účet. Hráč, který už v soupisce je, je odmítnut. Pokud databáze nefunguje, pozvánka selže a žádná pozvánka se neuloží.",
          ],
        },
        {
          heading: "Čím pozvánka není",
          paragraphs: [
            "Pozvánka neodesílá dopis, neotevírá soukromou lobby a negeneruje odkaz, který byste mohli zveřejnit. Nezařazuje klan do vyřazovací soutěže.",
            "Vyřazovací řád povoluje dva jmenované náhradníky, jakmile bude existovat přihláška do turnaje. Přihlášky nejsou otevřené, takže tato místa dnes nejsou propustkou, kterou byste mohli použít.",
          ],
        },
      ],
    },
  },
};
