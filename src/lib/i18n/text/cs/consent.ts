import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E. je nezávislý soutěžní web pro Counter-Strike 2. Není přidružen ke společnosti Valve Corporation, není jí autorizován ani podporován. Steam a Counter-Strike jsou ochranné známky svých vlastníků. Soutěžní řád je vlastním textem A.C.E. pro tuto hru.",
  acceptance: {
    label: "Výslovně přijímám Podmínky služby, licenční smlouvu anti-cheatu (EULA) a Zásady ochrany soukromí.",
    readBefore: "Přečtěte si",
    termsLink: "Podmínky",
    afterTerms: ",",
    rulesLink: "Pravidla / EULA",
    afterRules: " a",
    privacyLink: "Soukromí",
    after: ".",
  },
  categories: {
    legend: "Kategorie souborů cookie",
    essential: "Nezbytné soubory cookie",
    required: "Povinné / uzamčené",
    analytics: "Analytické sledovače",
    marketing: "Marketingové sledovače",
    optional: "Volitelné",
  },
  banner: {
    kicker: "OZNÁMENÍ WEBU A.C.E.",
    copy: {
      before:
        "Tlačítko Přijmout uloží volby souborů cookie pro tento prohlížeč. Nejde o elektronický podpis, nesbírá telemetrii zařízení, nespouští klienta anti-cheatu a neotevírá soutěžní frontu. Než budete pokračovat, přečtěte si",
      termsLink: "Podmínky služby",
      afterTerms: ",",
      rulesLink: "Pravidla",
      afterRules: " a",
      cookiePolicyLink: "Zásady souborů cookie",
      after: ".",
    },
    acceptLabel: "Přijmout volby souborů cookie. Tím se neotevře fronta ani nespustí klient anti-cheatu.",
    accept: "PŘIJMOUT VOLBY COOKIE >",
    rejectLabel: "Odmítnout volitelné analytické a marketingové soubory cookie",
    reject: "ODMÍTNOUT VOLITELNÉ",
  },
  settings: {
    openLabel: "Otevřít nastavení souborů cookie",
    open: "Nastavení cookie",
    title: "Nastavení souborů cookie",
    body: "Nezbytné relační soubory cookie jsou vyžadovány pro Steam OpenID. Volitelné analytické a marketingové příznaky se ukládají pouze zde. Na tomto webu dnes neběží žádné reklamní ani analytické skripty.",
    cookiePolicyLink: "Zásady souborů cookie",
    saveLabel: "Uložit předvolby souborů cookie",
    save: "Uložit",
    closeLabel: "Zavřít nastavení souborů cookie",
    close: "Zavřít",
  },
  subscriptionDisclosure:
    "Již brzy: platba zatím neexistuje, takže žádné předplatné nemůže začít, nic se neúčtuje a nic se neobnovuje. Až bude fakturace existovat, půjde o měsíční plán, který zrušíte v nastavení panelu; již zaplacený měsíc se nevrací.",
  planned: {
    fallbackLabel: "Plánovaná akce",
    badge: "Plánováno — není k dispozici",
  },
};
