import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Kodeks kalibracji",
    description:
      "Rangi A.C.E. wyjaśnione. Każde pytanie otwiera pełną odpowiedź na temat punktów oceny i zasad danej rangi. Kodeks nie zalicza żadnego meczu.",
    articleTitle: "{title} — Kodeks kalibracji",
  },
  groups: {
    ladder: {
      title: "Drabina rang",
      kicker: "Jak odczytuje się rangę",
    },
    points: {
      title: "Punkty oceny",
      kicker: "Jedna zapisana liczba",
    },
    ranks: {
      title: "Poszczególne rangi",
      kicker: "Zasady danego znaku",
    },
    desk: {
      title: "Pulpit meczowy",
      kicker: "Co pulpit może, a czego nie może",
    },
  },
  index: {
    title: "Kodeks kalibracji",
    lede: "Dziesięć rang. Jedna zapisana liczba. Otwórz dowolne pytanie, aby przeczytać pełną odpowiedź. Opis pulpitu meczowego znajduje się na dalszych stronach.",
    status:
      "Ten kodeks wyjaśnia spisaną drabinę rang. Nie zalicza żadnego meczu i nie zmienia zapisanej oceny.",
    searchLabel: "Przeszukaj kodeks",
    searchPlaceholder: "Spróbuj: 1950, Recruit albo remis",
    empty: "Żaden wpis nie pasuje do tego wyszukiwania.",
    columnLabel: "Kolumna A.C.E. {n}",
    pagerLabel: "Strony kodeksu",
    first: "Pierwsza",
    previous: "Poprzednia",
    next: "Następna",
    last: "Ostatnia",
    pageOf: "Strona {n} z {m}",
  },
  article: {
    breadcrumb: "A.C.E. · Kodeks kalibracji",
    status:
      "Ta strona wyjaśnia spisaną drabinę rang. Nie zalicza żadnego meczu i nie zmienia zapisanej oceny.",
    emblemAlt: "Emblemat {name}, ranga {level}",
    emblemCaption: "Ranga {level} · {name} · {crystal}",
    examples: {
      heading: "Przykłady obliczeń z silnika",
      intro:
        "Każdy wiersz wywołuje tę samą funkcję punktów oceny, której używa drabina rang. Dane wejściowe są przykładowe. Nie są zapisywane na żadnym koncie.",
      columns: {
        yourPoints: "Twoje punkty",
        otherSide: "Druga strona",
        result: "Wynik",
        storedAfter: "Zapisane po",
        change: "Zmiana",
      },
      results: {
        win: "Wygrana",
        loss: "Przegrana",
        draw: "Remis",
      },
    },
    turnLabel: "Czytaj dalej w kodeksie",
    previous: "Poprzedni",
    next: "Następny",
    alsoIn: "Także w A.C.E.",
    backToBoard: "Wróć do tablicy rang",
  },
  rankArticle: {
    title: "{name} — ranga {level}",
    band: {
      heading: "Przedział",
      range:
        "{name} to ranga {level}. Etykieta kryształu na emblemacie to {crystal}. Zapisana ocena od {from} do {to} oznacza tę rangę.",
    },
    code: {
      heading: "Zasady rangi",
      hold: "Utrzymanie. Konto nosi rangę {name}, dopóki jego zapisane punkty oceny mieszczą się w tym przedziale. Ranga jest odczytywana z liczby. Nie wybiera się jej z menu.",
      gateNext: "Próg. Następna ranga zaczyna się od {next} punktów oceny.",
      gateLast: "Próg. Nie ma następnej rangi. Przedział kończy się na 3000 punktów oceny.",
      record:
        "Zapis. Ranga zmienia się tylko wtedy, gdy zapisany wynik zmienia punkty oceny. Otwarcie tej strony nie zapisuje żadnego wyniku.",
      emblem:
        "Emblemat. Obraz identyfikuje rangę. Zakup, podgląd skórki ani przedmiot kosmetyczny nie przesuwają progu.",
    },
    emblem: {
      heading: "Do czego służy emblemat",
      material:
        "Studium materiału dla tego znaku to: {material}. Ten opis dotyczy grafiki. Nie jest statystyką ani wymaganiem.",
      sample:
        "Procent wygranych pokazany obok tego emblematu na tablicy rang to przykładowa etykieta. Nie trzeba go osiągnąć, aby nosić tę rangę.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit to ranga wejściowa. Nowe konto połączone ze Steam jest zapisywane z 1000 punktów oceny, a 1000 nadal oznacza rangę Recruit.",
      detail:
        "Próg rangi Operative wynosi 1100. Tabela drabiny otwiera rangę Recruit od 0, ale silnik nie zapisze oceny poniżej 100. Od 100 do 1099 konto pozostaje w randze Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative to pierwsza ranga, której próg leży powyżej liczby startowej. Jej osiągnięcie oznacza, że zapisana ocena opuściła rangę wejściową.",
      detail: "Przedział ma szerokość stu punktów. Kończy się na 1199. Ranga Vanguard zaczyna się od 1200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard to przednia krawędź wczesnej drabiny. Konto jest już powyżej zarówno oceny startowej, jak i progu rangi Operative.",
      detail: "Przedział obejmuje wartości od 1200 do 1299. Ranga Specialist zaczyna się od 1300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist to ranga warsztatu. Etykieta kryształu na emblemacie brzmi GOLD. Oficjalna nazwa zapisana w drabinie to Specialist. Chodzi o ten sam próg.",
      detail: "Przedział obejmuje wartości od 1300 do 1399. Ranga Veteran zaczyna się od 1400.",
    },
    "rank-5-veteran": {
      stance: "Veteran to środkowy znak. Poniżej tego progu znajdują się cztery rangi, a powyżej pięć.",
      detail:
        "Przedział obejmuje wartości od 1400 do 1499. Ranga Elite zaczyna się od 1500. Etykieta kryształu na tym emblemacie to PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite to nazwa używana przez silnik. DIAMOND to etykieta kryształu na tym samym emblemacie. Żadna z tych etykiet nie jest drugą oceną.",
      detail: "Przedział obejmuje wartości od 1500 do 1599. Ranga Master zaczyna się od 1600.",
    },
    "rank-7-master": {
      stance:
        "Master to pierwsza ranga, której etykieta kryształu i oficjalna nazwa to to samo słowo. Próg wynosi 1600.",
      detail: "Przedział obejmuje wartości od 1600 do 1699. Ranga Grandmaster zaczyna się od 1700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster to szafirowy stopień. Próg wynosi 1700, przedział nadal ma szerokość stu punktów, a ranga Sovereign czeka od 1800.",
      detail:
        "Przedział obejmuje wartości od 1700 do 1799. Nic na tej stronie nie zużywa meczu, aby go przekroczyć.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign to szeroki stopień przed rangą Legend. Etykieta kryształu to IMMORTAL. Oficjalna nazwa to Sovereign.",
      detail:
        "Przedział obejmuje wartości od 1800 do 1949. To 150 punktów, a nie 100. 1949 nadal oznacza rangę Sovereign. Ranga Legend zaczyna się od 1950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E. Legend to ostatni znak. Etykieta kryształu to ACE ELITE. Oficjalna nazwa to A.C.E. Legend.",
      detail:
        "Przedział zaczyna się od 1950 i kończy na suficie silnika, czyli 3000. Nie ma jedenastej rangi. Zapisana ocena nie może wzrosnąć powyżej 3000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "Czym jest ranga A.C.E.",
      lede: "Ranga to znak, w którego przedziale mieszczą się Twoje zapisane punkty oceny. Dziesięć znaków obejmuje całą drabinę, od rangi Recruit do A.C.E. Legend.",
      sections: [
        {
          heading: "Jedna liczba, jeden znak",
          paragraphs: [
            "Konto przechowuje ocenę rywalizacyjną. Drabina odczytuje tę liczbę i zwraca najwyższą rangę, której próg liczba osiągnęła. Nie można mieć dwóch rang jednocześnie.",
            "Recruit to ranga 1. A.C.E. Legend to ranga 10. Oficjalna nazwa to nazwa zapisana w drabinie. Krótsze słowo na emblemacie to etykieta kryształu tej samej rangi.",
            "Ten kodeks wyjaśnia spisaną drabinę rang. Nie zalicza żadnego meczu i nie zmienia zapisanej oceny.",
          ],
        },
        {
          heading: "Jak rozmieszczone są progi",
          paragraphs: [
            "Recruit obejmuje początek drabiny. Ranga Operative zaczyna się od 1100. Od rangi Vanguard do Grandmaster każdy kolejny próg jest o 100 punktów wyższy: 1200, 1300, 1400, 1500, 1600, a następnie 1700.",
            "Ranga Sovereign zaczyna się od 1800 i obejmuje konto aż do 1949. Ranga A.C.E. Legend zaczyna się od 1950. Sufit silnika wynosi 3000, więc Legend ma najdłuższy przedział.",
          ],
        },
        {
          heading: "Czym ranga nie jest",
          paragraphs: [
            "Ranga nie jest limitem liczby graczy. Legend to próg, a nie lista tysiąca kont.",
            "Ranga nie jest nagrodą, skórką ani kolejką. Publiczna strona może pokazać znak. Nie prowadzi meczu, który zapisałby nowy.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Nazwa oficjalna i nazwa kryształu",
      lede: "Każda ranga ma dwie etykiety. Nazwa oficjalna pochodzi z drabiny. Nazwa kryształu to słowo wyryte w emblemacie.",
      sections: [
        {
          heading: "Dlaczego istnieją obie",
          paragraphs: [
            "Silnik i profil używają nazwy oficjalnej: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Emblemat nosi także etykietę kryształu: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Ta etykieta jest elementem grafiki. Nie tworzy jedenastej rangi i nie przechowuje drugiej liczby.",
          ],
        },
        {
          heading: "Gdzie się różnią",
          paragraphs: [
            "Etykieta kryształu rangi Specialist to GOLD. Rangi Veteran — PLATINUM. Rangi Elite — DIAMOND. Rangi Sovereign — IMMORTAL. Rangi A.C.E. Legend — ACE ELITE. W każdym przypadku próg nadal należy do nazwy oficjalnej.",
            "Master i Grandmaster używają tego samego słowa w obu miejscach.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "Trzy dywizje na tablicy",
      lede: "Dywizje III, II i I to pomoc w odczycie nałożona na przedział rangi. Konto nie przechowuje dywizji.",
      sections: [
        {
          heading: "Co jest zapisywane",
          paragraphs: [
            "Zalogowane konto przechowuje poziom rangi i ocenę rywalizacyjną. Poziom rangi wynika z oceny. Obok nich nie ma kolumny dywizji.",
            "Na tablicy rang przedział wybranej rangi jest podzielony na trzy stopnie wyświetlania, aby oko mogło rozróżnić dół, środek i górę tego progu. Dywizja III to dolny koniec przedziału. Dywizja I to górny koniec.",
          ],
        },
        {
          heading: "Czym są etykiety",
          paragraphs: [
            "Procenty wygranych i znaczniki postępu na tych etykietach są przykładowe. Nie są drugą drabiną ani celem, który trzeba osiągnąć.",
            "Zmiana etykiety dywizji nie zmienia zapisanej oceny. Może to zrobić tylko zapisany wynik, a ta strona żadnego nie zapisuje.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "Co nie może zmienić rangi",
      lede: "Znak wynika z zapisanych punktów oceny. Wszystko inne na stronie pozostawia znak bez zmian.",
      sections: [
        {
          heading: "Poza silnikiem",
          paragraphs: [
            "Podgląd skórki, karta w sklepie, etykieta subskrypcji ani przedmiot kosmetyczny nie dodają punktów oceny. Opłacenie planu nie jest rangą.",
            "Otwarcie tablicy rang, obracanie emblematu ani czytanie tego kodeksu nie zalicza żadnego meczu.",
            "Zgłoszenie, notatka pomocy ani układ turnieju nie zmieniają zapisanej oceny.",
          ],
        },
        {
          heading: "Jedyna droga",
          paragraphs: [
            "Spisaną drogą jest zapisany wynik meczu przetworzony przez silnik punktów oceny. Żadna publiczna strona w tym serwisie nie zapisuje dziś takiego wyniku.",
            "Dopóki taki wynik nie istnieje, nowe konto pozostaje przy ocenie startowej, a istniejące konto zachowuje już zapisaną ocenę.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "Czym są punkty oceny",
      lede: "Punkty oceny to liczba rywalizacyjna zapisana na koncie. Ranga to tylko przedział, w który ta liczba wpada.",
      sections: [
        {
          heading: "Zapisane pole",
          paragraphs: [
            "Wersja silnika to {version}. Nowe konto zaczyna od {startingRating} punktów oceny. Zapisana liczba nie może spaść poniżej {minRating} ani wzrosnąć powyżej {maxRating}.",
            "Profile i tablica rang odczytują tę liczbę, gdy jesteś zalogowany. Gdy nie jesteś zalogowany, tablica pokazuje próg kalibracji wybranego emblematu. Ten próg jest przykładem, a nie Twoim kontem.",
          ],
        },
        {
          heading: "Co mierzy ta liczba",
          paragraphs: [
            "Silnik porównuje Twoją ocenę ze średnią oceną drużyny przeciwnej. Nie prowadzi osobnego wyniku za indywidualne wyróżnienia, odsetek trafień w głowę ani użycie granatów. Te wartości nie są częścią tej wersji.",
            "Wyższa liczba oznacza, że drabina spodziewa się częstszych wygranych z graczem o niższej liczbie. Nazwy rang to publiczny odczyt tej skali.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Od czego zaczyna nowe konto",
      lede: "Logowanie przez Steam tworzy konto z 1000 punktów oceny, rangą 1, Recruit, bez wygranych i bez przegranych.",
      sections: [
        {
          heading: "Znak początkowy",
          paragraphs: [
            "1000 mieści się w randze Recruit. Ranga Operative zaczyna się dopiero od 1100, więc nowe konto nie pomija rangi wejściowej.",
            "Ponowne zalogowanie nie resetuje już zapisanej oceny. Kodeks nie prowadzi meczów kwalifikacyjnych i nie wymyśla bilansu wygranych i przegranych.",
          ],
        },
        {
          heading: "Jak to sprawdzić",
          paragraphs: [
            "Po zalogowaniu przez Steam panel i tablica rang mogą pokazać zapisaną ocenę. Jeśli baza danych jest niedostępna, strona informuje o tym zamiast wymyślać liczbę.",
            "Ranga startowa pozostaje rangą Recruit, dopóki zapisany wynik nie przesunie oceny powyżej progu 1100. Ta strona nie zapisuje dziś żadnego takiego wyniku.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Jak zapisany wynik zmienia punkty oceny",
      lede: "Silnik używa jednego współczynnika kroku, 32, i jednej skali, 400. Wynik to wygrana, przegrana albo remis względem średniej drugiej strony.",
      sections: [
        {
          heading: "Krok",
          paragraphs: [
            "Wynik oczekiwany to szansa, jaką silnik przypisuje przed meczem wyłącznie na podstawie dwóch ocen. Przy równej ocenie ta szansa wynosi połowę, więc wygrana jest warta 16 punktów oceny, a przegrana kosztuje 16.",
            "Przeciwko wyższej ocenie wygrana jest warta więcej niż 16, a przegrana kosztuje mniej niż 16. Przeciwko niższej ocenie wygrana jest warta mniej niż 16, a przegrana kosztuje więcej niż 16. Wynik jest zaokrąglany do liczby całkowitej, a następnie utrzymywany w zakresie od 100 do 3000.",
            "Przy wyniku drużynowym każdy gracz danej strony jest porównywany ze średnimi punktami oceny drugiej strony. Obecny silnik daje każdemu graczowi tej strony tę samą ścieżkę. Nie dodaje premii za indywidualne wyróżnienie.",
          ],
        },
        {
          heading: "Remis",
          paragraphs: [
            "Remis to połowa wyniku. Jeśli obie oceny są równe, wynik oczekiwany już wynosi połowę, więc remis zmienia liczbę o zero.",
            "Tabela na tej stronie pokazuje działanie silnika na przykładowych danych. Te wiersze nie są zapisanymi meczami i nie są Twoim kontem.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "Dolna granica, sufit i pominięta ranga",
      lede: "Zapisana liczba zatrzymuje się na 100 i na 3000. Ranga zawsze wynika z liczby, więc żadnej rangi nie można pominąć przyciskiem.",
      sections: [
        {
          heading: "Granice",
          paragraphs: [
            "Przegrana przy 100 punktach oceny pozostawia 100. Wygrana przy 3000 pozostawia 3000. Próg rangi Recruit w drabinie jest zapisany jako 0, ale zapisana liczba nigdy nie korzysta z zakresu poniżej 100.",
            "1949 to ranga Sovereign. 1950 to A.C.E. Legend. Nie ma znaku pośredniego.",
          ],
        },
        {
          heading: "Bez pomijania",
          paragraphs: [
            "Gdyby zapisany wynik podniósł liczbę z 1050 do 1260, konto nosiłoby rangę Vanguard, ponieważ 1260 mieści się w tym przedziale. Rangi pośrednie nie są kolejkowane jako osobne awanse. Liczba jest odczytywana jeden raz.",
            "Żadna strona w tym serwisie nie wykonuje takiego skoku. Przykład pokazuje jedynie, jak drabina odczytuje liczbę.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Gdzie pojawiłby się link do meczu",
      lede: "Link do meczu to adres serwera gry. Ta strona go nie wydaje.",
      sections: [
        {
          heading: "Pulpit, który możesz otworzyć",
          paragraphs: [
            "Strona gry pokazuje układ dziesięciu graczy i przycisk ZNAJDŹ MECZ. Ten przycisk pozostaje zamknięty. Nie może otworzyć serwera Counter-Strike 2 i nikomu nie przekazuje adresu.",
            "Liczba osób na stronie nie jest liczbą osób w grze. Liczba graczy w meczu wynosi 0.",
          ],
        },
        {
          heading: "Gdzie link znalazłby się później",
          paragraphs: [
            "Gdyby istniał serwer meczu, adres i hasło do niego byłyby pokazane na pulpicie meczowym po zaakceptowaniu meczu przez dziesięciu graczy. Gracz dołączałby przez Steam. Na tej stronie nie jest przechowywany żaden adres ani generowane żadne hasło.",
            "Logowanie przez Steam łączy konto. Nie przenosi gracza na mapę.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "Czym jest pulpit rankingowy",
      lede: "Pulpit rankingowy to układ strony gry dla meczu 5v5. Jest to zamknięty pulpit, a nie otwarta kolejka.",
      sections: [
        {
          heading: "Co jest narysowane",
          paragraphs: [
            "Dwie strony, po pięć miejsc każda, oraz etykieta kapitana na pierwszym miejscu. Lista map i linia czatu obok nich należą do tego samego układu.",
            "Wiersze bezpieczeństwa na tej stronie są oznaczone swoim statusem. Żaden z nich nie jest jeszcze działającą kontrolą; plan rozwoju znajdziesz na /anti-cheat.",
          ],
        },
        {
          heading: "Czego pulpit nie robi",
          paragraphs: [
            "ZNAJDŹ MECZ nie szuka przeciwników. Nie zmienia punktów oceny. Ranga na koncie to nadal zapisana liczba odczytywana przez drabinę opisaną w tym kodeksie.",
            "Nie ma osobnej najwyższej kolejki ponad rangą Legend. A.C.E. Legend to ostatni znak i zaczyna się od 1950 punktów oceny.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Pomoc z pulpitu meczowego",
      lede: "Pomoc na tej stronie to pisemne stanowisko. Nie otwiera linii głosowej na żywo w trakcie meczu.",
      sections: [
        {
          heading: "Co robi strona pomocy",
          paragraphs: [
            "Strona pomocy wymienia działy i oferuje przycisk zgłoszenia. Wybranie tego przycisku nie tworzy sprawy i nie łączy z nikim w trakcie meczu, ponieważ żaden mecz się nie toczy.",
            "Pytanie o zasady należy do regulaminu rozgrywek pod adresem /rules. Pytanie o drabinę rang należy do tego kodeksu.",
          ],
        },
        {
          heading: "Protest, gdy mecz już istnieje",
          paragraphs: [
            "Spisany regulamin mówi, że kapitan może złożyć protest przed rozpoczęciem następnej mapy, wskazując mapę, rundę i artykuł. Ta strona nie przechowuje dem i nie prowadzi serwerów gry, więc takie zgłoszenie nie ma dziś dokąd trafić.",
            "Wynik w układzie pokazowym nie jest rozegranym meczem. Obsługa turnieju wpisałaby wynik serii dopiero po prawdziwej serii.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "Oczekiwanie na dziesięciu graczy",
      lede: "Mapa rywalizacyjna wymaga dziesięciu podstawowych zawodników. Pulpit nie prowadzi dziś tego oczekiwania.",
      sections: [
        {
          heading: "Spisany zegar",
          paragraphs: [
            "Gdy mecz ma opublikowaną godzinę rozpoczęcia, pięciu podstawowych zawodników każdej strony musi stawić się 15 minut przed tą godziną. To zdanie znajduje się w regulaminie rozgrywek. Zegar nie uruchamia się na tej stronie, ponieważ żaden mecz nie jest opublikowany.",
            "Nazwy widoczne na stronie gry to podgląd. Nie są to osoby czekające w kolejce.",
          ],
        },
        {
          heading: "Co się nie dzieje, gdy patrzysz",
          paragraphs: [
            "Strona nie rezerwuje serwera, nie wysyła powiadomienia i nie odlicza czasu do akceptacji. Opuszczenie strony nie oznacza porzucenia meczu, ponieważ w żadnym nie brałeś udziału.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "Kapitan na pulpicie",
      lede: "Jeden kapitan mówi w imieniu strony. Role w lobby ruszą wraz z betą rywalizacji.",
      sections: [
        {
          heading: "Co przydziela regulamin",
          paragraphs: [
            "Kapitan odpowiada za weto, przerwy i protest. Pozostali podstawowi zawodnicy grają. Rezerwowy może wejść do gry wyłącznie między mapami.",
            "Na jednej mapie kapitanowie banują po jednej mapie, aż zostanie jedna. Pula to Ancient, Anubis, Dust II, Inferno, Mirage, Nuke i Train. Wyższy seed to drużyna A i wybiera, czy banuje pierwsza, czy druga; przy równych seedach decyduje rzut monetą. Dziś żadne veto nie jest otwarte.",
          ],
        },
        {
          heading: "Przerwy",
          paragraphs: [
            "Pauzy obowiązują dopiero, gdy istnieje serwer meczowy. Tutaj go nie ma. Pisemny limit na drużynę na mapę to trzy pauzy taktyczne po 30 sekund, plus jedna w dogrywce, oraz łącznie 10 minut pauzy technicznej. Pełny tekst jest na /rules.",
            "Na stronie drużyn kapitan to także członkostwo, które może wysłać zaproszenie do składu. To zaproszenie nie jest związane z lobby meczu.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Gdy strona nie jest gotowa",
      lede: "Regulamin rozgrywek opisuje walkower w meczu, który ma opublikowaną godzinę rozpoczęcia. Ta strona nie przyznaje takiego walkowera.",
      sections: [
        {
          heading: "Spisana zasada",
          paragraphs: [
            "Pięciu podstawowych zawodników musi być gotowych 15 minut przed opublikowaną godziną rozpoczęcia. Strona, której nadal brakuje zawodników 15 minut po rozpoczęciu, przegrywa serię walkowerem, gdy mecz już istnieje. Jeśli nieobecne są obie strony, obie zostają usunięte, a obsługa turnieju wpisuje rozstrzygnięcie dla tego miejsca.",
            "Klan, który rozpoczyna mapę z mniej niż pięcioma uprawnionymi podstawowymi zawodnikami i nie ma rezerwowego, który mógłby wejść do gry, przegrywa tę mapę walkowerem.",
          ],
        },
        {
          heading: "Czego ta strona nie zrobi",
          paragraphs: [
            "Nic tutaj nie obserwuje lobby i nie wpisuje walkowera samodzielnie. Przycisk na stronie gry nie może oddać mapy, która nigdy nie została wczytana.",
            "Wynik w układzie pokazowym drabinki turniejowej nie jest rozegranym meczem ani walkowerem.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Udział w turnieju pucharowym 100 klanów",
      lede: "Strona turnieju to drabinka 100 klanów. Rejestracja: 0 ze 100. Zapisy nie są otwarte.",
      sections: [
        {
          heading: "Co możesz otworzyć",
          paragraphs: [
            "Kliknij klan w drabince, aby zobaczyć jego skład, a potem otwórz gracza. Nazwy na wolnych miejscach to podgląd, a nie przyjęte zgłoszenia.",
            "Drabinka nie rozstawia serwera i nie wysyła linku do meczu.",
          ],
        },
        {
          heading: "Wolny los, gdy zapisy się otworzą",
          paragraphs: [
            "Spisana zasada dla przyszłych zapisów mówi, że pierwsze 28 przyjętych klanów pomija 1. rundę. Ten wolny los nie jest nagrodą i nie można go odebrać, dopóki rejestracja pozostaje na poziomie 0 ze 100.",
            "Długość serii, pula map i protesty są opisane w regulaminie rozgrywek pod adresem /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Jak kompletuje się skład",
      lede: "Kapitan zaprasza gracza, który ma już konto A.C.E. Nie ma publicznego linku do udostępnienia, a hasło Steam nigdy nie jest wymagane.",
      sections: [
        {
          heading: "Zaproszenie, które istnieje",
          paragraphs: [
            "Na stronie drużyn zalogowany kapitan wkleja SteamID64 albo identyfikator konta A.C.E. Konto musi być już połączone przez Steam OpenID. Serwer zapisuje oczekujące zaproszenie, gdy baza danych je przyjmie.",
            "Skład liczy pięciu graczy, wliczając kapitana. Kapitan nie może zaprosić własnego konta. Gracz, który już jest w składzie, zostaje odrzucony. Jeśli baza danych nie działa, zaproszenie się nie udaje i nie jest zapisywane.",
          ],
        },
        {
          heading: "Czym zaproszenie nie jest",
          paragraphs: [
            "Zaproszenie nie wysyła listu, nie otwiera prywatnego lobby i nie generuje linku, który można opublikować. Nie umieszcza klanu w turnieju pucharowym.",
            "Regulamin turnieju pucharowego dopuszcza dwóch wskazanych rezerwowych, gdy istnieje już zgłoszenie do turnieju. Zapisy nie są otwarte, więc te miejsca nie są dziś przepustką, z której można skorzystać.",
          ],
        },
      ],
    },
  },
};
