import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  premiumExtras: {
    "card": {
      "previewTag": "NÁHLED",
      "previewNote": "Náhled animované prémiové profilové karty. Jméno a hodnoty jsou ukázkové. Skutečný profil tuto kartu zobrazí jen tehdy, když je jeho uložený plán Premium.",
      "planTag": "A.C.E PREMIUM",
      "seal": "PEČEŤ ELITE",
      "rank": "Hodnost",
      "rating": "Rating",
      "sampleName": "Ukázkový hráč",
      "ownTitle": "Tvoje prémiová profilová karta"
    },
    "analysis": {
      "metaTitle": "Rozšířená analýza zápasu",
      "metaDescription": "Rozvržení prémiové analýzy zápasů: heatmapa úmrtí, podíl headshotů a výkon po kolech. Již brzy, jakmile bude existovat zpracování dem.",
      "kicker": "PREMIUM · ANALÝZA ZÁPASU",
      "title": "Rozšířená analýza zápasu",
      "lede": "Heatmapa úmrtí, podíl headshotů a výkon po kolech pro tvé zaznamenané zápasy. Vyžaduje to zpracování dem, které zatím neexistuje.",
      "sampleTag": "UKÁZKOVÉ ROZVRŽENÍ — NEJSOU TO TVÁ DATA",
      "soon": "Již brzy",
      "soonCaption": "Doplní se, jakmile bude existovat zpracování dem. Nic níže není skutečná statistika.",
      "heatmap": "Heatmapa úmrtí",
      "headshot": "% headshotů",
      "rounds": "Výkon po kolech",
      "noData": "Žádná data",
      "locked": "Rozšířená analýza zápasu je součástí A.C.E Premium (7 $/měsíc). Již brzy: platba zatím neexistuje, takže dnes žádný účet není Premium.",
      "premiumNote": "Tvůj plán je Premium. Tvá analýza se tu objeví, jakmile bude existovat zpracování dem.",
      "signIn": "Přihlas se přes Steam a ověř si přístup k analýze.",
      "plansLink": "Zobrazit plány"
    },
    "terms": {
      "metaTitle": "Podmínky Premium",
      "metaDescription": "Co zahrnují A.C.E Plus a Premium, co nezahrnuje žádný plán a jak funguje zrušení.",
      "kicker": "ACE-LEGAL / PODMÍNKY PREMIUM",
      "title": "Podmínky A.C.E Premium",
      "intro": "Tyto podmínky popisují, co zahrnují placené plány. Doplňují Podmínky služby na /terms. Platba zatím neexistuje, takže dnes nelze nic koupit.",
      "pricesTitle": "1. Plány, ceny a zrušení",
      "prices": "Free {free}. Plus {plus} měsíčně. Premium {premium} měsíčně. Plány se obnovují měsíčně. Zrušit můžeš kdykoli v nastavení nástěnky bez sankce. Načaté měsíce se nevracejí, jak uvádějí Podmínky služby.",
      "plusTitle": "2. Co zahrnuje Plus",
      "plus1": "Vše z Free.",
      "plus2": "Již brzy: děkovný dopis a e-mailová podpora na support@ace-platform.gg, jakmile bude existovat platba.",
      "premiumTitle": "3. Co zahrnuje Premium",
      "prem1": "Vše z Plus.",
      "prem2": "Prémiová grafika hodností: původní ilustrovaná sada emblémů A.C.E. na tvém profilu.",
      "prem3": "Animovaná prémiová profilová karta.",
      "prem4": "Speciální odznaky a PEČEŤ ELITE.",
      "prem5": "Již brzy: rozšířená analýza zápasu (heatmapa úmrtí, % headshotů, výkon po kolech), jakmile bude existovat zpracování dem.",
      "prem6": "Předběžný přístup k beta funkcím, když se beta otevře.",
      "prem7": "Prioritní podpora s cílovou dobou odpovědi 72 hodin. Je to cíl, ne záruka.",
      "neverTitle": "4. Co nezahrnuje žádný plán",
      "never": "Žádný plán nedává soutěžní výhodu. Žádný plán nepřidává Rating Points ani nezvyšuje rating. Žádný plán nedává výhodu v matchmakingu, prioritní frontu ani snazší soupeře.",
      "soonTitle": "5. Funkce Již brzy",
      "soon": "Nic označeného Již brzy není slíbeno, dokud to nevyjde. Do té doby to cena nezahrnuje.",
      "languageTitle": "6. Jazyk",
      "language": "Překlady jsou poskytnuty pro pohodlí. Pokud se překlad liší od anglického textu, platí anglický text.",
      "contact": "Dotazy: support@ace-platform.gg",
      "footerLink": "Podmínky Premium",
      "pricingLink": "Přečíst podmínky Premium"
    }
  },
  meta: {
    title: "Ceník",
    description:
      "Členství A.C.E.: Zdarma {free}, Plus {plus}/měs., Premium {premium}/měs. Zobrazené ceny jsou uzamčené na celá čísla.",
  },
  period: {
    monthly: "/měs.",
  },
  hero: {
    badge: "Členství",
    title: "Úrovně přístupu",
    lede: "Zdarma {free}. Plus {plus}/měs. Premium {premium}/měs. Tyto částky jsou uzamčené na celá čísla. Placené tarify nikdy nekupují hodnocení ani snadnější soupeře.",
  },
  tiers: {
    free: {
      name: "ZDARMA",
      note: "Grafit",
      title: "Otevřený přístup",
      points: [
        "Přihlášení přes Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam.",
        "Uložené hodnocení začíná na 1 000. Žádný výsledek zápasu ho zatím nezměnil.",
        "Všechny veřejné stránky: hra, turnaje, žebříček, týmy a pravidla.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Děkovný dopis a podpora",
      points: [
        "Vše z plánu Zdarma.",
        "Již brzy: děkovný dopis (co zahrnuje, co ne a support@ace-platform.gg) se otevře až po zavedení platby. Dnes je tlačítko vypnuté.",
        "Nekupuje hodnocení ani slabší soupeře. Zlaté odznaky profilu vycházejí z uložených zápasových dat každého hráče. Elitní pečeť a speciální odznaky se zobrazí, jen když je uložená úroveň již Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Grafika profilu, odznaky a analýza",
      points: [
        "Vše z Plus.",
        "Prémiová grafika hodností, animovaná profilová karta, speciální odznaky a PEČEŤ ELITE.",
        "Již brzy: rozšířená analýza zápasu, předběžný přístup k betám a prioritní podpora (cílová odpověď 72 hodin).",
        "Žádná soutěžní výhoda: žádné navýšení Rating Points ani výhoda v matchmakingu.",
      ],
    },
  },
  card: {
    elite: "ELITA",
    stayFree: "Zůstat u tarifu zdarma",
    freeNote: "Dostupné hned",
    choose: "Zvolit {plan}",
    chooseAria: "Zvolit {plan} za {price} měsíčně",
  },
  billing: {
    kicker: "MATICE ČASOVÉ OSY VYÚČTOVÁNÍ",
    title: "Jak bude vyúčtování fungovat, až bude existovat",
    body: "Plus stojí přesně {plus}/měs. Premium stojí přesně {premium}/měs.",
    display: {
      label: "01 · ZOBRAZENÍ",
      body: "Zdarma {free}. Plus {plus}/měs. Premium {premium}/měs. Placené tarify nikdy nekupují hodnocení ani snadnější soupeře.",
    },
    rolling: {
      label: "02 · PRŮBĚŽNÝ CYKLUS",
      body: "Až bude vyúčtování existovat, platby se budou obnovovat v průběžném měsíčním cyklu. Částečně využitý měsíc se nevrací. Zrušení zastaví další cyklus a nemaže aktuální předplacené období.",
    },
    today: {
      label: "03 · DNES",
    },
  },
  compare: {
    kicker: "Co může A.C.E. slíbit už dnes",
    title: "Srovnání členství",
    note: "Každý řádek odpovídá dnešnímu stavu webu. Platba bude brzy k dispozici a placený plán nikdy neotevírá frontu ani nekupuje výhodu.",
    caption: "Srovnání tarifů Zdarma, Plus a Premium podle toho, co web dělá dnes",
    includedToday: "Zahrnuto dnes",
    columns: {
      free: "Zdarma",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Veřejný web",
        detail: "Domů, hra, turnaje, žebříček, týmy, pravidla a podmínky.",
      },
      steamSignIn: {
        feature: "Přihlášení přes Steam",
        detail: "Oficiální Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam.",
      },
      startingRating: {
        feature: "Počáteční hodnocení",
        detail: "Číslo uložené u nového účtu před jakýmkoli zaznamenaným zápasem.",
      },
      recordedMatches: {
        feature: "Zaznamenané zápasy",
        detail: "Výhry a prohry zapsané z dokončeného zápasu A.C.E.",
      },
      rankedQueue: {
        feature: "Rankingová fronta",
        detail: "NAJÍT ZÁPAS zůstává zavřené, dokud nebude existovat skutečná fronta.",
      },
      cs2Servers: {
        feature: "Servery CS2",
        detail: "Tento web neposílá adresu serveru ani odkaz pro připojení.",
      },
      antiCheatClient: {
        feature: "Klient anti-cheatu",
        detail: "Z tohoto webu se nic nestahuje.",
      },
      charge: {
        feature: "Platba",
        detail: "Volba Plus nebo Premium nestrhává platbu z karty.",
      },
      ratingForSale: {
        feature: "Prodej hodnocení",
        detail: "Placený štítek nikdy nekupuje hodnocení ani snadnější soupeře.",
      },
      prizeOrWeapon: {
        feature: "Cena nebo zbraň",
        detail: "Nedoručuje se žádný skin, nůž ani fond cen.",
      },
      goldEliteSeal: {
        feature: "Elitní pečeť a speciální odznaky",
        detail:
          "Pouze Premium, načteno z úrovně uložené na serveru. Kosmetické. Platba tuto úroveň nenastavuje.",
      },
    },
    cells: {
      open: "Otevřeno",
      yes: "Ano",
      noneYet: "Zatím žádné",
      closed: "Zavřeno",
      notConnected: "Již brzy",
      notShipped: "Nedodáno",
      noCharge: "Bez platby",
      notForSale: "Není na prodej",
      none: "Žádné",
      no: "Ne",
      storedTierOnly: "Jen uložený tarif",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Potvrzení Plus",
      metaDescription:
        "Dopis A.C.E. Plus zobrazený na tomto webu. Pokladna není v provozu, takže se nic neúčtuje a neodesílá se žádný e-mail.",
      planName: "A.C.E. Plus",
      nextLabel: "Pokračovat na A.C.E.",
      nextBody:
        "Veřejné stránky zůstávají otevřené. Tato volba neotevírá frontu a nemění uložený tarif.",
    },
    premium: {
      metaTitle: "Potvrzení Premium",
      metaDescription:
        "Dopis A.C.E. Premium zobrazený na tomto webu. Pokladna není v provozu, takže se nic neúčtuje a neodesílá se žádný e-mail.",
      planName: "A.C.E. Premium",
      nextLabel: "Pokračovat na Týmy",
      nextBody:
        "Pokračujte na Týmy. Stránka se zeptá, zda jste pětičlenný tým. Místo 1 je přihlášený účet Steam. Místa 2 až 5 jsou ostatní hráči. Uložení klanu tuto cenu stále neúčtuje.",
    },
  },
  letter: {
    kicker: "{plan} · {price} měsíčně",
    title: "Děkujeme za váš výběr",
    flag: "Tento dopis se zobrazuje na webu. Žádný e-mail nebyl odeslán. Z žádné karty nebyla stržena platba. Pokladna není v provozu a uložený tarif členství se nezměnil.",
    greeting: "Milý hráči,",
    intro:
      "Děkujeme, že jste zvolili {plan}. Tato stránka je potvrzením. Zaznamenává zobrazenou cenu, co tato volba dnes zahrnuje, co nezahrnuje, a adresu podpory zveřejněnou na tomto webu.",
    selected: {
      title: "Co bylo zvoleno",
      items: [
        "Název tarifu: {plan}.",
        "Zobrazená cena: {price} měsíčně. Částka je štítek, ne platba.",
        "Platba: žádná. Volba tohoto tarifu nestrhává platbu z karty.",
        "E-mail: žádný. A.C.E. tento dopis neodesílá do schránky.",
        "Uložená úroveň: beze změny. Speciální odznaky a elitní pečeť se zobrazí, jen když má účet již uloženo Premium.",
        "Hodnocení: není na prodej. Nový účet stále začíná na 1 000.",
      ],
    },
    today: {
      title: "Co můžete používat už dnes",
      items: [
        "Veřejný web: domů, hra, turnaje, žebříček, týmy, pravidla a podmínky.",
        "Přihlášení přes Steam pomocí oficiálního Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam.",
        "Stejné veřejné stránky jako u tarifu zdarma. Tato cena neotevírá samostatnou frontu.",
      ],
    },
    excluded: {
      title: "Co tato volba nezahrnuje",
      items: [
        "Živou rankingovou frontu. NAJÍT ZÁPAS zůstává zavřené.",
        "Server Counter-Strike 2, adresu serveru ani odkaz pro připojení.",
        "Stažení anti-cheatu. A.C.E Shield je ve vývoji.",
        "Cenu, skin, nůž ani fond cen.",
        "Místo na tabuli 100 týmů. Tato tabule ukazuje 0 registrovaných, dokud se neotevře sezóna.",
        "Snadnější soupeře, koupené hodnocení ani jiný veřejný web než u tarifu zdarma.",
      ],
    },
    trouble: {
      title: "Pokud něco nefunguje",
      items: [
        "Čekali jste platbu nebo placený tarif. Nic z toho nebylo použito. Účet zůstává, jak byl.",
        "Čekali jste tento dopis ve schránce. Existuje pouze na této stránce.",
        "Steam se nepřipojil. Použijte Připojit profil a nejprve zaškrtněte souhlas s podmínkami. Nikdy nezadávejte heslo ke službě Steam do A.C.E.",
        "Potřebujete pomoc. Použijte adresu podpory níže nebo otevřete stránky nápovědy na tomto webu.",
      ],
    },
    support: {
      title: "Podpora",
      addressBefore: "Adresa podpory uvedená na tomto webu je ",
      addressAfter: ".",
      helpBefore: "Nápověda na webu: ",
      supportLink: "Podpora",
      helpAnd: " a ",
      contactLink: "Kontakt",
      rulesBefore: ". Pravidla najdete na stránkách ",
      rulesLink: "Pravidla",
      rulesAnd: " a ",
      termsLink: "Podmínky",
      helpAfter:
        ". Výzva na stránce Podpora neotevírá požadavek a text napsaný na stránce Kontakt se nedoručuje.",
    },
    next: {
      title: "Další krok",
    },
  },
  telemetry: {
    kicker: "TELEMETRIE PLUS / PREMIUM",
    copy: "TELEMETRIE PŘEHLEDU UZAMČENA — Přejděte na předplatné A.C.E. Plus nebo Premium a odemkněte dynamické křivky statistik v reálném čase a indexy specializace na zbraně.",
    cta: "Otevřít ceník",
  },
};
