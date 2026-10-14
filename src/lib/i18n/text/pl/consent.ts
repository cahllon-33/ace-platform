import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E. to niezależny serwis rozgrywek Counter-Strike 2. Nie jest powiązany z Valve Corporation, nie działa z jej upoważnienia ani nie jest przez nią wspierany. Steam i Counter-Strike są znakami ich właścicieli. Regulamin rozgrywek to własny tekst A.C.E. dotyczący tej gry.",
  acceptance: {
    label: "Wyraźnie akceptuję Warunki korzystania z usługi, umowę licencyjną (EULA) antycheatu i Politykę prywatności.",
    readBefore: "Przeczytaj:",
    termsLink: "Warunki",
    afterTerms: ",",
    rulesLink: "Zasady / EULA",
    afterRules: " oraz",
    privacyLink: "Prywatność",
    after: ".",
  },
  categories: {
    legend: "Kategorie plików cookie",
    essential: "Niezbędne pliki cookie",
    required: "Wymagane / zablokowane",
    analytics: "Śledzenie analityczne",
    marketing: "Śledzenie marketingowe",
    optional: "Opcjonalne",
  },
  banner: {
    kicker: "KOMUNIKAT STRONY A.C.E.",
    copy: {
      before:
        "Przycisk akceptacji zapisuje wybór plików cookie w tej przeglądarce. To nie jest podpis elektroniczny, nie zbiera telemetrii urządzenia, nie uruchamia klienta antycheatu i nie otwiera kolejki rankingowej. Przeczytaj",
      termsLink: "Warunki korzystania z usługi",
      afterTerms: ",",
      rulesLink: "Zasady",
      afterRules: " oraz",
      cookiePolicyLink: "Politykę plików cookie",
      after: "przed przejściem dalej.",
    },
    acceptLabel: "Zaakceptuj wybór plików cookie. To nie otwiera kolejki ani nie uruchamia klienta antycheatu.",
    accept: "AKCEPTUJ WYBÓR COOKIE >",
    rejectLabel: "Odrzuć opcjonalne analityczne i marketingowe pliki cookie",
    reject: "ODRZUĆ OPCJONALNE",
  },
  settings: {
    openLabel: "Otwórz ustawienia plików cookie",
    open: "Ustawienia cookie",
    title: "Ustawienia cookie",
    body: "Niezbędne sesyjne pliki cookie są wymagane do Steam OpenID. Opcjonalne flagi analityczne i marketingowe są przechowywane tylko tutaj. Na tej stronie nie działają dziś żadne skrypty reklamowe ani analityczne.",
    cookiePolicyLink: "Polityka plików cookie",
    saveLabel: "Zapisz preferencje plików cookie",
    save: "Zapisz",
    closeLabel: "Zamknij ustawienia plików cookie",
    close: "Zamknij",
  },
  subscriptionDisclosure:
    "Dziś nie rozpoczyna się żadna subskrypcja: kasa nie działa, nic nie jest pobierane i nic się nie odnawia. Gdy rozliczenia powstaną, będzie to plan miesięczny, który można anulować w ustawieniach panelu; za już opłacony miesiąc nie przysługuje zwrot.",
  planned: {
    fallbackLabel: "Planowana czynność",
    badge: "Planowane — niedostępne",
  },
};
