import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
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
      title: "Otevřený přístup už dnes",
      points: [
        "Přihlášení přes Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam.",
        "Uložené hodnocení začíná na 1 000. Žádný výsledek zápasu ho zatím nezměnil.",
        "Veřejné stránky zůstávají otevřené: rozvržení hry, turnaje, žebříček, týmy a pravidla.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Děkovný dopis a podpora",
      points: [
        "Stejný přístup jako u tarifu zdarma. Pokladna není v provozu, takže se tato cena neúčtuje.",
        "Otevře na tomto webu děkovný dopis: co je zahrnuto, co není, a kontakt support@ace-platform.gg.",
        "Nekupuje hodnocení ani snadnější soupeře. Zlatá pečeť se zobrazí jen tehdy, když je uložený tarif už Plus nebo Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Děkovný dopis a pětičlenný tým",
      points: [
        "Stejný přístup jako u tarifu zdarma. Pokladna není v provozu, takže se tato cena neúčtuje.",
        "Otevře na tomto webu děkovný dopis: co je zahrnuto, co není, a kontakt support@ace-platform.gg.",
        "Poté otevře Týmy: kapitán přihlášený přes Steam může uložit pětičlenný klan.",
        "Žádná cena, zbraň, živá fronta ani herní server. Uložený klan není místo na tabuli 100 týmů.",
      ],
    },
  },
  card: {
    elite: "ELITA",
    stayFree: "Zůstat u tarifu zdarma",
    freeNote: "Otevřeno hned · bez pokladny",
    choose: "Zvolit {plan}",
    chooseAria: "Zvolit {plan} za {price} měsíčně",
  },
  billing: {
    kicker: "MATICE ČASOVÉ OSY VYÚČTOVÁNÍ",
    title: "Jak bude vyúčtování fungovat, až bude existovat",
    body: "Plus stojí přesně {plus}/měs. Premium stojí přesně {premium}/měs. Pokladna na tomto webu není v provozu. Volba Plus nebo Premium otevře potvrzení na tomto webu. Žádné z tlačítek nestrhává platbu z karty ani neodesílá e-mail.",
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
    note: "Každý řádek na tomto webu teď platí. Zobrazené ceny nejsou živou pokladnou a placený štítek neotevírá frontu.",
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
        detail: "Domů, rozvržení hry, turnaje, žebříček, týmy, pravidla a podmínky.",
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
        feature: "Zlatá elitní pečeť",
        detail:
          "Zobrazí se jen tehdy, když je uložený tarif už Plus nebo Premium. Pokladna tento tarif nenastavuje.",
      },
    },
    cells: {
      open: "Otevřeno",
      yes: "Ano",
      noneYet: "Zatím žádné",
      closed: "Zavřeno",
      notConnected: "Nepřipojeno",
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
        "Uložený tarif: beze změny. Zlatá pečeť se zobrazí jen tehdy, když účet už má uložený Plus nebo Premium.",
        "Hodnocení: není na prodej. Nový účet stále začíná na 1 000.",
      ],
    },
    today: {
      title: "Co můžete používat už dnes",
      items: [
        "Veřejný web: domů, rozvržení hry, turnaje, žebříček, týmy, pravidla a podmínky.",
        "Přihlášení přes Steam pomocí oficiálního Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam.",
        "Stejné veřejné stránky jako u tarifu zdarma. Tato cena neotevírá samostatnou frontu.",
      ],
    },
    excluded: {
      title: "Co tato volba nezahrnuje",
      items: [
        "Živou rankingovou frontu. NAJÍT ZÁPAS zůstává zavřené.",
        "Server Counter-Strike 2, adresu serveru ani odkaz pro připojení.",
        "Stažení anti-cheatu. Odznak u místa v týmu je ukázka rozvržení, ne živá kontrola.",
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
