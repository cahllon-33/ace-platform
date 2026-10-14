import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Regulamin rozgrywek",
    description:
      "Regulamin rozgrywek A.C.E. dla drabinki 100 klanów w Counter-Strike 2. MR12, dogrywka, ekonomia, przerwy i wolny los w 1. rundzie. Zapisy są zamknięte. Żadna nagroda nie jest finansowana.",
  },
  document: {
    header: {
      kicker: "REGULAMIN ROZGRYWEK A.C.E.",
      title: "Regulamin rozgrywek",
      lede: "Długość meczu, ekonomia, zegar i przerwy są zgodne z publicznymi ustawieniami trybu Współzawodnictwa w Counter-Strike 2. Drabinka 100 klanów, wolny los w 1. rundzie i kolejność weta to zasady A.C.E. dla tego układu. Regulamin zaczyna obowiązywać klan dopiero po przyjęciu tego klanu. Zapisy są zamknięte.",
      notice:
        "A.C.E. nie prowadzi serwera Counter-Strike 2. Logowanie przez Steam odbywa się wyłącznie przez Steam OpenID. Ta strona nie przyznaje nagród i nie zmienia oceny.",
    },
    articleLabel: "ARTYKUŁ {code}",
    articles: [
      {
        title: "Zakres",
        paragraphs: [
          "To jest regulamin rozgrywek A.C.E. Obowiązuje klan dopiero wtedy, gdy A.C.E. przyjmie ten klan do wydarzenia. Zapisy są zamknięte: 0 ze 100. Kolejki rankingowe, serwery meczów, płatności, nagrody i klient anticheatu do pobrania nie są aktywne. Kliknięcie w przeglądarce nie jest wygraną rundą, a zrzut ekranu nie jest wynikiem.",
        ],
      },
      {
        title: "Mapa",
        paragraphs: [
          "Mecz to pięciu graczy przeciwko pięciu. Czas regulaminowy trwa najwyżej 24 rundy. Strona, która jako pierwsza wygra 13 rund, zdobywa mapę, a mapa kończy się w tym momencie. Strony zmieniają się po 12 rundach. W pierwszej rundzie nowej połowy każdy gracz zaczyna z $800.",
        ],
      },
      {
        title: "Zegar",
        paragraphs: [
          "Runda trwa 1 minutę i 55 sekund. Zegar bomby wynosi 40 sekund. Rozbrajanie trwa 10 sekund, a z zestawem do rozbrajania 5 sekund. Menu zakupów pozostaje otwarte przez 20 sekund od początku rundy, a kupować można wyłącznie w strefie odrodzenia. W oficjalnych meczach trybu Współzawodnictwa runda jest na początku zamrożona przez 20 sekund. Rozgrzewka trwa 2 minuty albo 15 sekund, gdy połączy się wszystkich dziesięciu graczy.",
        ],
      },
      {
        title: "Ekonomia",
        paragraphs: [
          "Gracz nie może posiadać więcej niż $16 000. Na mapie z bombą drużyna otrzymuje $3250 za wygraną przez eliminację lub upływ czasu, $3500 za wygraną przez detonację i $3500 za wygraną przez rozbrojenie. Gracz, który podłożył bombę, otrzymuje $300. Gracz, który ją rozbroił, otrzymuje $300. Przegrywająca strona, która podłożyła bombę, otrzymuje dodatkowo $600.",
          "Przegrana runda daje $1400 plus $500 za każdą porażkę, która już znajduje się w serii tej strony. Ustawienie trybu Współzawodnictwa zaczyna serię od 1, więc pierwsza przegrana runda daje $1900. Premia rośnie następnie do $2400 i $2900, aż do pułapu $3400. Wygrana runda zeruje serię. Zabójstwo daje nagrodę ustaloną dla danej broni. Jeśli broń nie ma ustalonej specjalnej nagrody, zabójstwo daje $300. Ogień sojuszniczy jest włączony, a pocisk, który trafi kolegę z drużyny, zadaje 33 procent swoich obrażeń.",
        ],
      },
      {
        title: "Dogrywka",
        paragraphs: [
          "Mapa zakończona remisem 12–12 przechodzi do dogrywki. Blok dogrywki liczy sześć rund. Strony zmieniają się po trzech. Strona, która jako pierwsza wygra cztery rundy w bloku, zdobywa mapę. Blok zakończony wynikiem 3–3 rozpoczyna kolejny blok, a bloki są rozgrywane, dopóki jedna ze stron nie wygra któregoś z nich. Każdy gracz zaczyna każdą połowę dogrywki z $10 000. Oficjalne dobieranie w trybie Współzawodnictwa może zakończyć się po jednym bloku i zapisać remis. Ta drabinka nie zapisuje remisów.",
        ],
      },
      {
        title: "Przerwy",
        paragraphs: [
          "Te przerwy obowiązują dopiero wtedy, gdy istnieje serwer meczu. Na tej stronie żaden nie istnieje. Każda strona może na mapie wziąć trzy przerwy taktyczne po 30 sekund i nie może wziąć przerwy w trakcie przerwy drugiej strony. Na początku pierwszego bloku dogrywki dostępna jest jedna przerwa taktyczna. Każda strona może też wziąć na mapie jedną przerwę techniczną trwającą 120 sekund. Jeśli gracz straci połączenie, kapitan może wykorzystać tę przerwę techniczną w ciągu 30 sekund od rozłączenia, aby gracz mógł połączyć się ponownie. Jeśli gracz nie wróci do końca przerwy, mapa jest kontynuowana. Wzięcie przerwy w celu przeciągnięcia przegranej rundy stanowi naruszenie zasad zachowania.",
        ],
      },
      {
        title: "Stawka i wolny los w 1. rundzie",
        paragraphs: [
          "Mistrzostwa mają postać drabinki pucharowej z pojedynczą eliminacją dla 100 klanów. Klan, który przegra serię, odpada. Nazwy widoczne na wolnych miejscach to próbki układu, a nie przyjęte klany.",
          "Po otwarciu zapisów klany są numerowane w kolejności, w jakiej przyjmuje je A.C.E. Pierwsze 28 przyjętych klanów otrzymuje jeden wolny los. Wolny los pozwala pominąć wyłącznie 1. rundę i umieszcza klan w 2. rundzie. Jest to przejście w drabince. Nie jest to płatny bilet ani nagroda. Klany od 29 do 100 grają w 1. rundzie. Jeśli dwa przyjęcia mają ten sam znacznik czasu, pierwszeństwo ma klan, który wcześniej skompletował skład pięciu podstawowych zawodników. Klan, który wycofa się przed blokadą składu, traci wolny los, a przejmuje go następny przyjęty klan w kolejności.",
        ],
      },
      {
        title: "Długość serii",
        paragraphs: [
          "1. runda, 1/32 finału i 1/16 finału są rozgrywane na jednej mapie. 1/8 finału, ćwierćfinały i oba półfinały są rozgrywane w formacie BO3 (do dwóch wygranych map). Wielki finał jest rozgrywany w formacie BO5 (do trzech wygranych map).",
        ],
      },
      {
        title: "Mapy i weto",
        paragraphs: [
          "Pula map to publiczna lista trybu Współzawodnictwa: Ancient, Anubis, Cache, Dust II, Inferno, Mirage i Nuke. Jeśli ta publiczna lista zmieni się przed otwarciem zapisów, lista zastępcza zostanie opublikowana na tej stronie przed pierwszym wetem.",
          "W meczu na jedną mapę kapitanowie wykluczają po jednej mapie, dopóki nie zostanie jedna. Jako pierwszy wyklucza klan z niższym numerem zgłoszenia. W formacie BO3 każdy kapitan raz wyklucza mapę, następnie każdy wybiera jedną mapę, potem każdy ponownie raz wyklucza, a ostatnia mapa jest mapą decydującą. Klan z niższym numerem zgłoszenia wyklucza pierwszy, a drugi kapitan pierwszy wybiera. W formacie BO5 każdy kapitan raz wyklucza mapę, następnie kapitanowie na przemian wybierają mapy, aż zostaną wybrane cztery, a pozostała mapa jest mapą decydującą. Klan z niższym numerem zgłoszenia wyklucza pierwszy i dokonuje trzeciego wyboru. Na mapie wybranej przez jednego kapitana stronę startową wybiera drugi kapitan. Na ostatniej pozostałej mapie stronę startową wybiera klan z niższym numerem zgłoszenia. Kapitan, który przez dziesięć minut od otwarcia weta nie zabierze głosu, oddaje kolejne wykluczenie lub wybór przeciwnikowi. Obecnie żadne weto nie jest otwarte.",
        ],
      },
      {
        title: "Skład",
        paragraphs: [
          "Klan zgłasza pięciu podstawowych zawodników i może wskazać dwóch rezerwowych. Każdy podstawowy zawodnik potrzebuje konta A.C.E. połączonego przez Steam OpenID. A.C.E. nigdy nie prosi o hasło Steam. Jeden kapitan reprezentuje drużynę przy wecie, przerwach i protestach. Rezerwowy może wejść do gry wyłącznie między mapami. Udostępnianie konta, korzystanie z pożyczonego konta oraz występowanie tego samego gracza w dwóch klanach w tej samej drabince są zabronione. Ta strona nie zbiera identyfikatorów sprzętu i nie uruchamia klienta anticheatu.",
        ],
      },
      {
        title: "Gotowość",
        paragraphs: [
          "Te terminy obowiązują dopiero wtedy, gdy istnieje mecz. Pięciu podstawowych zawodników musi być gotowych 15 minut przed opublikowaną godziną rozpoczęcia. Strona, która nie jest gotowa 15 minut po opublikowanej godzinie rozpoczęcia, przegrywa serię walkowerem. Jeśli nieobecne są obie strony, obie zostają usunięte, a obsługa turnieju wpisuje rozstrzygnięcie dla tego miejsca. Klan, który rozpoczyna mapę z mniej niż pięcioma uprawnionymi podstawowymi zawodnikami i nie ma rezerwowego, który mógłby wejść do gry, przegrywa tę mapę walkowerem. Nic na tej stronie nie przyznaje automatycznego walkowera.",
        ],
      },
      {
        title: "Zachowanie",
        paragraphs: [
          "Nękanie, mowa nienawiści, ustawianie meczów, obstawianie zakładów na własną serię, ghosting (korzystanie z podglądu transmisji) i celowe opóźnianie gry stanowią naruszenia. Udowodnione naruszenie może skutkować usunięciem klanu z drabinki. Ta strona nie skanuje graczy i nie uznaje żadnego gracza za oczyszczonego z podejrzeń.",
        ],
      },
      {
        title: "Zapisany wynik",
        paragraphs: [
          "Kapitan może złożyć protest przed rozpoczęciem następnej mapy. Protest wskazuje mapę, rundę i artykuł. Ta strona nie przechowuje dem i nie prowadzi serwerów gry. Obsługa turnieju wpisuje wynik serii do drabinki. Ten wpisany wynik jest wynikiem, który pokazuje A.C.E. Nie stanowi on zrzeczenia się jakiegokolwiek prawa. Wynik w układzie pokazowym nie jest rozegranym meczem.",
        ],
      },
      {
        title: "Co nie działa",
        paragraphs: [
          "Rejestracja jest zamknięta. Nie działa żaden serwer meczu, transmisja, wysyłka poczty ani pula nagród. Ta strona nie przyznaje żadnej gotówki, skórki ani tokena. Wyniki w drabince pozostają na poziomie 0, dopóki nie zostanie zapisana prawdziwa seria.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Plan mistrzostw",
      title: "Harmonogram startu turnieju",
      stageLabel: "Etap {n}",
      stages: [
        {
          title: "Otwarcie zapisów",
          status: "ZAMKNIĘTE · 0 ZE 100",
          body: "Pierwsze 28 klanów przyjętych po otwarciu zapisów otrzymuje wolny los w 1. rundzie i awansuje do 2. rundy. Pozostałe 72 grają w 1. rundzie. Ta strona nie wysyła żadnej poczty dotyczącej zgłoszeń.",
        },
        {
          title: "Regionalne drabinki kalibracyjne",
          status: "ZABLOKOWANE",
          body: "Od 1/32 do 1/8 finału. Jedna mapa aż do 1/8 finału, potem format BO3. Nie działa żaden harmonogram transmisji.",
        },
        {
          title: "Elitarne ćwierćfinały pro",
          status: "ZABLOKOWANE",
          body: "Ćwierćfinały i półfinały są rozgrywane w formacie BO3 z wetem map według poniższego regulaminu. Nie działa żaden przekaz na żywo.",
        },
        {
          title: "Wielki finał na szczycie",
          status: "ZABLOKOWANE",
          body: "Wielki finał jest rozgrywany w formacie BO5. Nie jest finansowana żadna nagroda w postaci gotówki, skórek ani tokenów.",
        },
      ],
    },
    code: {
      kicker: "Regulamin rozgrywek",
      title: "Regulamin pucharowy dla 100 klanów",
      lede: "Spisane zasady drabinki 100 klanów. Oryginalny tekst A.C.E. Zapisy są zamknięte, żaden mecz nie jest rozgrywany i żadna nagroda nie jest finansowana. Zasada dotycząca lobby, przerwy lub walkowera obowiązuje dopiero wtedy, gdy istnieje prawdziwa seria.",
      articleLabel: "Artykuł {id}",
      articles: [
        {
          title: "Stawka",
          body: "Mistrzostwa to drabinka pucharowa z pojedynczą eliminacją dla 100 klanów. Każdy klan trafia na jedną stronę podwójnego skrzydła drabinki. Klan, który przegra serię, odpada. Drabinka pozostaje układem, dopóki A.C.E. nie otworzy zapisów i nie zapisze prawdziwych wyników. Robocze nazwy na wolnych miejscach nie są przyjętymi klanami.",
        },
        {
          title: "Kolejność zgłoszeń i wolny los w 1. rundzie",
          body: "Zapisy są zamknięte: 0 ze 100. Po otwarciu zapisów klany są numerowane w kolejności, w jakiej przyjmuje je A.C.E. Pierwsze 28 przyjętych klanów otrzymuje jeden wolny los. Wolny los pozwala pominąć wyłącznie 1. rundę i umieszcza klan w 2. rundzie. Jest to przejście w drabince, a nie płatny bilet ani nagroda. Klany od 29 do 100 grają w 1. rundzie. Jeśli dwa przyjęcia mają ten sam znacznik czasu, pierwszeństwo ma klan, który wcześniej skompletował skład pięciu podstawowych zawodników. Klan, który wycofa się przed blokadą składu, traci wolny los, a przejmuje go następny przyjęty klan w kolejności.",
        },
        {
          title: "Skład",
          body: "Klan zgłasza pięciu podstawowych zawodników i może wskazać dwóch rezerwowych. Każdy podstawowy zawodnik potrzebuje konta A.C.E. połączonego przez Steam OpenID. Jeden kapitan reprezentuje drużynę przy wecie, przerwach i protestach. Rezerwowi mogą wejść do gry wyłącznie między mapami. Udostępnianie kont, korzystanie z pożyczonych kont oraz występowanie gracza w dwóch klanach w tej samej drabince są zabronione. Ta strona nie zbiera identyfikatorów sprzętu i nie uruchamia klienta anticheatu.",
        },
        {
          title: "Długość serii",
          body: "1. runda, 1/32 finału i 1/16 finału są rozgrywane na jednej mapie. 1/8 finału, ćwierćfinały i oba półfinały są rozgrywane w formacie BO3. Wielki finał jest rozgrywany w formacie BO5. Mapę wygrywa strona, która jako pierwsza zdobędzie 13 rund. Przy wyniku 12–12 mapa przechodzi do dogrywki: wygrywa pierwsza strona z 4 wygranymi rundami, strony zmieniają się po 3 rundach, a każda strona zaczyna dogrywkę z 10 000 jednostek pieniędzy. Nierozstrzygnięta dogrywka jest rozgrywana ponownie według tej samej zasady.",
        },
        {
          title: "Pula map i weto",
          body: "Pula map obejmuje Ancient, Anubis, Cache, Dust II, Inferno, Mirage i Nuke. W meczu na jedną mapę kapitanowie wykluczają po jednej mapie, dopóki nie zostanie jedna, a jako pierwszy wyklucza klan z niższym numerem zgłoszenia. W formacie BO3 każdy kapitan raz wyklucza mapę, następnie każdy wybiera jedną mapę, potem każdy ponownie raz wyklucza, a ostatnia mapa jest mapą decydującą. Klan z niższym numerem zgłoszenia wyklucza pierwszy, a drugi kapitan pierwszy wybiera. W formacie BO5 każdy kapitan raz wyklucza mapę, następnie kapitanowie na przemian wybierają mapy, aż zostaną wybrane cztery, a pozostała mapa jest mapą decydującą. Klan z niższym numerem zgłoszenia wyklucza pierwszy i dokonuje trzeciego wyboru. Na wybranej mapie stronę startową wybiera drugi kapitan. Na ostatniej pozostałej mapie stronę startową wybiera klan z niższym numerem zgłoszenia. Kapitan, który przez dziesięć minut od otwarcia weta nie zabierze głosu, oddaje kolejne wykluczenie lub wybór przeciwnikowi. Pełny regulamin meczowy znajduje się pod adresem /rules.",
        },
        {
          title: "Start, przerwy i rozłączenia",
          body: "Te terminy obowiązują dopiero wtedy, gdy istnieje mecz. Nie działają na tej stronie i żadne lobby nie jest otwarte. Pięciu podstawowych zawodników musi być gotowych 15 minut przed opublikowaną godziną rozpoczęcia. Każda strona może na mapie wziąć trzy przerwy taktyczne po 30 sekund i jedną przerwę techniczną trwającą 120 sekund. Na początku pierwszego bloku dogrywki dostępna jest jedna przerwa taktyczna. Rozłączony gracz może połączyć się ponownie w trakcie przerwy technicznej wziętej w ciągu 30 sekund od rozłączenia. Jeśli gracz nie wróci do końca tej przerwy, mapa jest kontynuowana bez niego. Nic na tej stronie nie przyznaje automatycznego walkowera. Pełny regulamin meczowy znajduje się pod adresem /rules.",
        },
        {
          title: "Nieobecność",
          body: "Strona, która nie jest gotowa 15 minut po opublikowanej godzinie rozpoczęcia, przegrywa serię walkowerem. Jeśli nieobecne są obie strony, obie zostają usunięte, a kolejne miejsce pozostaje otwarte, dopóki obsługa turnieju nie wpisze wyniku. Klan, który na starcie wystawia mniej niż pięciu uprawnionych podstawowych zawodników i nie ma rezerwowego, który mógłby wejść do gry, przegrywa tę mapę walkowerem.",
        },
        {
          title: "Zachowanie",
          body: "Nękanie, mowa nienawiści, ustawianie meczów, obstawianie zakładów na własną serię i celowe opóźnianie gry stanowią naruszenia. Udowodnione naruszenie skutkuje usunięciem klanu z drabinki. Czat podczas trwającej serii, gdy mecze będą już istnieć, ogranicza się do składu, przerw i wyniku. Ta strona nie skanuje graczy i nie twierdzi, że gracz został oczyszczony z podejrzeń.",
        },
        {
          title: "Protesty",
          body: "Kapitan składa protest na kanale meczu przed rozpoczęciem następnej mapy. Protest wskazuje mapę, rundę i artykuł regulaminu. Obsługa turnieju może poprosić obu kapitanów o demo zapisane przez graczy. Ta strona nie przechowuje dem i nie prowadzi serwerów gry. Sędzia główny wpisuje wynik serii do drabinki. Ten wpisany wynik jest wynikiem, który pokazuje A.C.E. Nie stanowi on zrzeczenia się jakiegokolwiek prawa i nie sprawia, że wynik w układzie pokazowym staje się rozegranym meczem.",
        },
        {
          title: "Czego ta strona nie robi",
          body: "Rejestracja jest zamknięta. Nie działa żaden serwer meczu, transmisja, wysyłka poczty ani pula nagród. Ta strona nie przyznaje żadnej gotówki, skórki ani tokena. Wyniki w drabince pozostają na poziomie 0, dopóki nie zostanie zapisana prawdziwa seria. Powyższy regulamin to spisana zasada dla układu 100 klanów. Zaczyna obowiązywać klan dopiero po faktycznym przyjęciu tego klanu.",
        },
      ],
    },
  },
};
