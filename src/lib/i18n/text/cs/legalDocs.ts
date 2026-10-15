import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Tato stránka je překladem poskytnutým pro vaše pohodlí. Pokud se překlad a anglický text liší, platí anglický text.",
  terms: {
    meta: {
      title: "Podmínky služby",
      description:
        "Podmínky služby webu A.C.E. pro tento soutěžní web Counter-Strike 2. Rankingové hry, platby a anti-cheat nejsou v provozu.",
    },
    kicker: "ACE-LEGAL / PODMÍNKY SLUŽBY",
    title: "Podmínky služby",
    lede: "Tyto podmínky upravují používání veřejného webu A.C.E. a připojených účtových rozhraní API. Délka zápasu, mapový fond, uzamčení soupisky a protesty jsou podrobně popsány v Soutěžním řádu na /rules, který je součástí těchto podmínek.",
    sections: {
      operator: {
        title: "1. Provozovatel a nezávislost",
        paragraphs: [
          "Službu provozuje společnost A.C.E. Competitions Ltd. (registrační číslo společnosti bude zveřejněno). Používáním webu přijímáte tyto Podmínky, Zásady ochrany osobních údajů, Zásady cookies a Soutěžní řád.",
        ],
      },
      eligibility: {
        title: "2. Způsobilost a účty",
        paragraphs: [
          "Musíte mít věk dostatečný k používání služby Steam ve své zemi. Účty se zakládají pouze prostřednictvím oficiálního Steam OpenID. Účet nesmíte sdílet za účelem obejití omezení. A.C.E. nikdy nežádá heslo ke službě Steam.",
        ],
      },
      notActive: {
        title: "3. Čím tento web není",
        paragraphs: [
          "Hodnocený matchmaking, běžící herní servery CS2, funkční AI Anti-Cheat, platby ani ceny nejsou aktivní. Hodiny v lobby a panely integrity jsou náhledy, pokud stránka neuvádí jinak.",
        ],
      },
      subscriptions: {
        title: "4. Navrhovaná předplatná",
        paragraphs: [
          "Plus ($4/měs.) a Premium ($7/měs.) jsou pouze zobrazené ceny. Na tomto webu zatím není platba a tlačítka tarifů ukazují „Již brzy“. Až bude platba spuštěna, platí pravidlo zrušení z /pricing: měsíční obnovované předplatné, zrušení v nastavení panelu, neúplné měsíce se nevracejí.",
        ],
      },
      antiCheat: {
        title: "5. Klient anti-cheatu (není dodáván)",
        paragraphs: [
          "Na tomto webu není k dispozici žádný klient anti-cheatu ke stažení. Soutěžní řád na /rules nesbírá hardwarový identifikátor a nezakazuje zařízení. Sdílení účtu za účelem obejití omezení je zakázáno.",
        ],
      },
      liability: {
        title: "6. Omezení odpovědnosti",
        paragraphs: [
          "V rozsahu povoleném právními předpisy A.C.E. neodpovídá za ztracenou hodnost, za ztracenou kosmetiku, která nikdy nebyla skutečným předmětem, ani za výpadky Steam / CS2 způsobené třetí stranou. Kogentní spotřebitelská práva ve vaší zemi nejsou vyloučena tam, kde se jich nelze vzdát.",
        ],
      },
      copyright: {
        title: "7. Autorská práva k původnímu obsahu webu",
        paragraphs: [
          "Původní texty, rozvržení stránek, emblémy a grafika vytvořené pro tento web patří společnosti A.C.E. Competitions Ltd. Tento původní obsah nesmíte bez písemného souhlasu kopírovat, znovu zveřejňovat ani automaticky stahovat pro jiný produkt. Tam, kde to právo dovoluje, může A.C.E. toto právo vymáhat, a to i formou žaloby. Toto upozornění nezahajuje žádné řízení, nestanoví výši náhrady škody a nezaručuje výsledek soudního řízení.",
          "Counter-Strike 2, Steam a názvy map Dust II, Mirage, Inferno, Nuke, Ancient, Anubis a Train patří společnosti Valve. A.C.E. si je nenárokuje. Otevření tohoto webu neruší žádné zákonné právo a neuzavírá smlouvu.",
        ],
      },
      contact: {
        title: "8. Kontakt",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Registrační číslo společnosti bude zveřejněno.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Zásady ochrany soukromí",
      description:
        "Zásady ochrany soukromí A.C.E.: pouze nezbytně nutné údaje, výhradně Steam OpenID, žádná hesla ke službě Steam, žádný prodej údajů o chování.",
    },
    kicker: "ACE-PRIVACY / GDPR / NEZBYTNÁ NUTNOST",
    title: "Zásady ochrany soukromí",
    lede: "Tyto Zásady ochrany soukromí vysvětlují, co společnost A.C.E. Competitions Ltd. ukládá, když používáte tento web. Překlady jsou poskytovány pro vaše pohodlí; referenčním textem je anglická verze. Nejde o tvrzení, že všechny budoucí části produktu už existují.",
    strictNecessity: {
      title: "Zásada nezbytné nutnosti",
      intro:
        "Shromažďujeme minimum údajů o účtu potřebných k identifikaci soutěžního hráče a k zastavení zjevných podvodů v naší vlastní službě. Neshromažďujeme zbytečné záznamy, nestahujeme soukromý inventář Steam a neprodáváme údaje o chování třetím stranám.",
      storedIntro: "Po úspěšném přihlášení přes Steam OpenID se v současnosti ukládá:",
      stored: [
        {
          label: "Ověřené 64bitové SteamID",
          body: "vrácené oficiálním tvrzením OpenID služby Steam a ověřené na serveru předtím, než je účet A.C.E. vytvořen nebo aktualizován.",
        },
        {
          label: "Veřejné zobrazované jméno Steam",
          body: "pokud je nastaven klíč Steam Web API. Jde o řetězec přezdívky, nikoli o e-mailovou schránku.",
        },
        {
          label: "Záznamy účtu A.C.E.",
          body: "například úroveň hodnosti, body hodnocení, výhry/prohry, členství v týmu a hashe tokenů relace.",
        },
      ],
      notCollected: {
        before: "E-mailové adresy a šifrované hardwarové profily",
        strong: "se na tomto webu v současnosti neshromažďují",
        after:
          ". Karty Face Scan a HWID v lobby jsou náhledy designu. Pokud budoucí klient Anti-Cheat nebo kanál podpory bude vyžadovat e-mail nebo hardwarový otisk, sběr se omezí na prevenci podvodů, bude zde nejprve zveřejněn a nebude prodáván jako reklamní data.",
      },
    },
    neverCollect: {
      title: "Co nikdy neshromažďujeme",
      items: [
        "Hesla ke službě Steam. Přihlášení probíhá výhradně přes Steam OpenID / oficiální postup služby Steam.",
        "Čísla platebních karet. Pokladna není implementována.",
        "Telemetrii jádra. S tímto webem se nedodává žádný klient anti-cheatu.",
      ],
    },
    steamBoundary: {
      title: "Hranice vložených prvků třetích stran a Steam OpenID",
      callback: {
        before: "Přihlášení přes Steam opustí A.C.E., proběhne ověření na straně Steam a poté se vrátí na",
        after:
          ". Server ověří tvrzení OpenID (včetně deklarované identity a podepsaných parametrů služby Steam) dříve, než zapíše relaci. Údaje, které uchovává Steam, se řídí zásadami ochrany soukromí služby Steam. A.C.E. trvale ukládá pouze ověřené SteamID a veřejná pole profilu potřebná k provozu účtu.",
      },
      footerLinks:
        "Ikony externích sítí v zápatí jsou odkazy adresáře na veřejné weby. Nejsou to oficiální účty A.C.E. a nevkládají sledovací widgety.",
    },
    rights: {
      title: "Práva ve stylu GDPR",
      before:
        "Pokud se nacházíte v oblasti, kde platí práva týkající se osobních údajů, můžete požádat o přístup k údajům svého účtu A.C.E., jejich opravu nebo výmaz e-mailem na adresu",
      after:
        ". Hardwarové blokace rankingového anti-cheatu nejsou v provozu; smazání účtu na webu není odvoláním proti zákazu VAC v CS2.",
    },
    cookies: {
      title: "Soubory cookie",
      before: "Viz",
      link: "Zásady souborů cookie",
      after:
        "a panel souhlasu. Nezbytné soubory cookie relace jsou po přihlášení vyžadovány. Volitelné kategorie se nepoužívají, dokud nebude skutečně přidán nějaký sledovací nástroj.",
    },
    controller: {
      title: "Správce údajů",
      body: "A.C.E. Competitions Ltd. Registrační číslo společnosti bude zveřejněno. Kontakt: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Zásady souborů cookie",
      description:
        "Audit souborů cookie a telemetrie A.C.E. z hlediska soukromí. Pouze nezbytné soubory cookie relace, pokud se nepřihlásíte k vyhrazeným volitelným kategoriím.",
    },
    kicker: "ACE-PRIVACY / COOKIES / AUDIT TELEMETRIE",
    title: "Zásady souborů cookie",
    lede: "Tato stránka je auditem telemetrie z hlediska soukromí pro ace-platform.gg. Popisuje soubory cookie, které tento web skutečně používá, kategorie vyhrazené pro pozdější použití a to, co se neshromažďuje.",
    audit: {
      title: "100% audit telemetrie (aktuální sestavení)",
      body: "A.C.E. na tomto veřejném webu nepoužívá reklamní pixely, Google Analytics, Meta Pixel, SDK pro fingerprinting ani jiné sledovací nástroje chování třetích stran. Volitelné „Analytické sledovací nástroje“ a „Marketingové sledovací nástroje“ v panelu souhlasu jsou pouze kategorie. Jejich zaškrtnutí dnes nenačte žádný skript. Pokud bude sledovací nástroj přidán později, nejprve načte uloženou volbu a zůstane vypnutý, pokud jste s ním nesouhlasili.",
    },
    essential: {
      title: "Nezbytné soubory cookie [povinné / uzamčené]",
      session: {
        label: "Soubor cookie relace",
        body: "— nastavuje se až po ověřeném návratu ze Steam OpenID. HttpOnly, nečitelný pro JavaScript stránky, slouží k udržení vašeho přihlášení na A.C.E.",
      },
      necessity:
        "Tyto soubory cookie jsou nezbytně nutné k provozu ověřeného účtu. Nejsou to reklamní identifikátory.",
    },
    analytics: {
      title: "Analytické sledovací nástroje [volitelné]",
      before: "Vyhrazeno. Není nastaven žádný dodavatel produktové analytiky. Vaše volba se ukládá lokálně v",
      after: "tak, aby ji mohlo respektovat budoucí měření používání první strany.",
    },
    marketing: {
      title: "Marketingové sledovací nástroje [volitelné]",
      body: "Vyhrazeno. A.C.E. neprodává, nepronajímá ani nezprostředkovává profily chování. Na tomto webu není žádný marketingový správce značek.",
    },
    change: {
      title: "Jak změnit svou volbu",
      body: "Použijte Nastavení souborů cookie v zápatí, nebo vymažte data webu ve svém prohlížeči. Odmítnutí volitelných kategorií nikdy neblokuje přihlášení přes Steam.",
    },
  },
};
