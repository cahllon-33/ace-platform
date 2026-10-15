import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Codexul de calibrare",
    "description": "Rangurile A.C.E. explicate. Fiecare întrebare deschide un răspuns complet despre Rating Points și regulile acelui rang. Codexul nu înregistrează un meci.",
    "articleTitle": "{title} — Codexul de calibrare"
  },
  "groups": {
    "ladder": {
      "title": "Scara",
      "kicker": "Cum se citește un rang"
    },
    "points": {
      "title": "Rating Points",
      "kicker": "Singurul număr stocat"
    },
    "ranks": {
      "title": "Fiecare rang",
      "kicker": "Regulile acelui semn"
    },
    "desk": {
      "title": "Biroul de meci",
      "kicker": "Ce poate și ce nu poate face biroul"
    }
  },
  "index": {
    "title": "Codexul de calibrare",
    "lede": "Zece ranguri. Un singur număr stocat. Deschide orice întrebare pentru răspunsul complet. Biroul de meci continuă pe paginile următoare.",
    "status": "Acest codex explică scara scrisă. Nu înregistrează un meci și nu modifică un rating stocat.",
    "searchLabel": "Caută în codex",
    "searchPlaceholder": "Încearcă 1950, Recruit sau egal",
    "empty": "Nicio intrare nu corespunde căutării.",
    "columnLabel": "Coloana A.C.E. {n}",
    "pagerLabel": "Paginile codexului",
    "first": "Prima",
    "previous": "Anterioară",
    "next": "Următoare",
    "last": "Ultima",
    "pageOf": "Pagina {n} din {m}"
  },
  "article": {
    "breadcrumb": "A.C.E. · Codexul de calibrare",
    "status": "Această pagină explică scara scrisă. Nu înregistrează un meci și nu modifică un rating stocat.",
    "emblemAlt": "Emblema {name}, rangul {level}",
    "emblemCaption": "Rangul {level} · {name} · {crystal}",
    "examples": {
      "heading": "Exemple calculate de motor",
      "intro": "Fiecare rând apelează aceeași funcție Rating Point folosită de scară. Datele de intrare sunt exemple. Nu sunt salvate într-un cont.",
      "columns": {
        "yourPoints": "Punctele tale",
        "otherSide": "Cealaltă parte",
        "result": "Rezultat",
        "storedAfter": "Stocat după",
        "change": "Schimbare"
      },
      "results": {
        "win": "Victorie",
        "loss": "Înfrângere",
        "draw": "Egal"
      }
    },
    "turnLabel": "Continuă prin codex",
    "previous": "Anterioară",
    "next": "Următoare",
    "alsoIn": "Tot în A.C.E.",
    "backToBoard": "Înapoi la tabla rangurilor"
  },
  "rankArticle": {
    "title": "{name} — Rangul {level}",
    "band": {
      "heading": "Intervalul",
      "range": "{name} este rangul {level}. Eticheta de cristal de pe emblemă este {crystal}. Un rating stocat de la {from} până la {to} poartă acest rang."
    },
    "code": {
      "heading": "Regula rangului",
      "hold": "Menținere. Contul poartă {name} cât timp Rating Points stocate sunt în acest interval. Rangul se citește din număr. Nu se alege dintr-un meniu.",
      "gateNext": "Poartă. Următorul rang se deschide la {next} Rating Points.",
      "gateLast": "Poartă. Nu există un rang următor. Intervalul se termină la 3.000 Rating Points.",
      "record": "Înregistrare. Un rang se schimbă doar când un rezultat înregistrat modifică Rating Points. Deschiderea acestei pagini nu înregistrează un rezultat.",
      "emblem": "Emblemă. Imaginea identifică rangul. O achiziție, o previzualizare de skin sau un cosmetic nu mută pragul."
    },
    "emblem": {
      "heading": "La ce servește emblema",
      "material": "Studiul de material pentru acest semn este: {material}. Rândul descrie grafica. Nu este o statistică și nu este o cerință.",
      "sample": "Procentul de victorii afișat lângă emblemă pe tabla rangurilor este o etichetă exemplu. Nu trebuie atins înainte ca rangul să poată fi purtat."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit este placa de intrare. Conturile noi nu mai încep aici: încep cu 1.200 Rating Points, în Vanguard. La Recruit se ajunge doar pierzând teren.",
      "detail": "Poarta Operative este 1.100. Tabelul scării deschide Recruit la 0, dar motorul nu va stoca un rating sub 100. Între 100 și 1.099 contul rămâne Recruit."
    },
    "rank-2-operative": {
      "stance": "Operative se află chiar sub numărul de start. Un cont care coboară sub 1.200 ajunge aici înainte de Recruit.",
      "detail": "Intervalul are o lățime de o sută de puncte. Se închide la 1.199. Vanguard se deschide la 1.200."
    },
    "rank-3-vanguard": {
      "stance": "Vanguard este locul în care începe fiecare cont nou, cu 1.200 Rating Points. Urcarea de aici este primul pas real în clasament.",
      "detail": "Intervalul merge de la 1.200 la 1.299. Specialist se deschide la 1.300."
    },
    "rank-4-specialist": {
      "stance": "Specialist este rangul meșteșugului. Eticheta de cristal a emblemei este GOLD. Numele oficial stocat în scară este Specialist. Sunt același nivel.",
      "detail": "Intervalul merge de la 1.300 la 1.399. Veteran se deschide la 1.400."
    },
    "rank-5-veteran": {
      "stance": "Veteran este semnul din mijloc. Patru ranguri sunt sub acest prag și cinci deasupra.",
      "detail": "Intervalul merge de la 1.400 la 1.499. Elite se deschide la 1.500. Eticheta de cristal a acestei embleme este PLATINUM."
    },
    "rank-6-elite": {
      "stance": "Elite este numele din motor. DIAMOND este eticheta de cristal de pe aceeași emblemă. Niciuna nu este un al doilea rating.",
      "detail": "Intervalul merge de la 1.500 la 1.599. Master se deschide la 1.600."
    },
    "rank-7-master": {
      "stance": "Master este primul rang a cărui etichetă de cristal și nume oficial folosesc același cuvânt. Pragul este 1.600.",
      "detail": "Intervalul merge de la 1.600 la 1.699. Grandmaster se deschide la 1.700."
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster este treapta de safir. Pragul este 1.700, tot de o sută de puncte, iar Sovereign așteaptă la 1.800.",
      "detail": "Intervalul merge de la 1.700 la 1.799. Nimic de pe această pagină nu consumă un meci pentru a-l trece."
    },
    "rank-9-sovereign": {
      "stance": "Sovereign este treapta largă dinaintea lui Legend. Eticheta de cristal este IMMORTAL. Numele oficial este Sovereign.",
      "detail": "Intervalul merge de la 1.800 la 1.949. Sunt 150 de puncte, nu 100. 1.949 poartă încă Sovereign. Legend se deschide la 1.950."
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E. Legend este ultimul semn. Eticheta de cristal este ACE ELITE. Numele oficial este A.C.E. Legend.",
      "detail": "Intervalul se deschide la 1.950 și se termină la plafonul motorului, 3.000. Nu există un al unsprezecelea rang. Un rating stocat nu poate urca peste 3.000."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "Ce este un rang A.C.E.",
      "lede": "Un rang este semnul care conține Rating Points stocate. Zece semne acoperă întreaga scară, de la Recruit la A.C.E. Legend.",
      "sections": [
        {
          "heading": "Un număr, un semn",
          "paragraphs": [
            "Contul stochează un rating competitiv. Scara citește acel număr și returnează cel mai înalt rang al cărui prag a fost atins. Nu deții două ranguri simultan.",
            "Recruit este rangul 1. A.C.E. Legend este rangul 10. Numele oficial este numele din scară. Cuvântul mai scurt de pe emblemă este eticheta de cristal a aceluiași rang.",
            "Acest codex explică scara scrisă. Nu înregistrează un meci și nu modifică un rating stocat."
          ]
        },
        {
          "heading": "Cum sunt așezate pragurile",
          "paragraphs": [
            "Recruit acoperă începutul scării. Operative se deschide la 1.100. De la Vanguard la Grandmaster, fiecare prag nou este cu 100 de puncte mai sus: 1.200, 1.300, 1.400, 1.500, 1.600, apoi 1.700.",
            "Sovereign se deschide la 1.800 și păstrează contul până la 1.949. A.C.E. Legend se deschide la 1.950. Plafonul motorului este 3.000, așa că Legend este cel mai lung interval."
          ]
        },
        {
          "heading": "Ce nu este un rang",
          "paragraphs": [
            "Un rang nu este o limită de populație. Legend este un prag, nu o listă de o mie de conturi.",
            "Un rang nu este un premiu, un skin sau o coadă. Site-ul public poate afișa semnul. Nu rulează un meci care să scrie unul nou."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Nume oficial și nume de cristal",
      "lede": "Fiecare rang are două etichete. Numele oficial este scara. Numele de cristal este cuvântul gravat în emblemă.",
      "sections": [
        {
          "heading": "De ce există ambele",
          "paragraphs": [
            "Motorul și profilul folosesc numele oficial: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Emblema poartă și o etichetă de cristal: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Eticheta este grafică. Nu creează un al unsprezecelea rang și nu stochează un al doilea număr."
          ]
        },
        {
          "heading": "Unde diferă",
          "paragraphs": [
            "Eticheta de cristal a lui Specialist este GOLD. A lui Veteran, PLATINUM. A lui Elite, DIAMOND. A lui Sovereign, IMMORTAL. A lui A.C.E. Legend, ACE ELITE. În fiecare caz pragul aparține tot numelui oficial.",
            "Master și Grandmaster folosesc același cuvânt în ambele locuri."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "Cele trei divizii de pe tablă",
      "lede": "Diviziile III, II și I sunt un ajutor de citire pictat pe intervalul unui rang. Contul nu stochează o divizie.",
      "sections": [
        {
          "heading": "Ce se stochează",
          "paragraphs": [
            "Un cont autentificat stochează un nivel de rang și un rating competitiv. Nivelul de rang urmează ratingul. Nu există o coloană de divizie lângă ele.",
            "Pe tabla rangurilor, intervalul rangului selectat este împărțit în trei pași de afișare, ca ochiul să vadă partea de jos, mijlocul și partea de sus a pragului. Divizia III este capătul de jos al intervalului. Divizia I este capătul de sus."
          ]
        },
        {
          "heading": "Ce sunt etichetele",
          "paragraphs": [
            "Procentele de victorii și marcajele de progres de pe acele etichete sunt exemple. Nu sunt o a doua scară și nu sunt o țintă pe care trebuie s-o depășești.",
            "Schimbarea etichetei de divizie nu modifică un rating stocat. Doar un rezultat înregistrat poate face asta, iar această pagină nu înregistrează unul."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Ce nu poate muta un rang",
      "lede": "Semnul urmează Rating Points stocate. Tot restul site-ului lasă semnul unde este.",
      "sections": [
        {
          "heading": "În afara motorului",
          "paragraphs": [
            "O previzualizare de skin, un card de magazin, o etichetă de abonament și un cosmetic nu adaugă Rating Points. Plata unui plan nu este un rang.",
            "Deschiderea tablei rangurilor, rotirea unei embleme sau citirea acestui codex nu înregistrează un meci.",
            "Un raport, o notă de suport și un aranjament de turneu nu rescriu ratingul stocat."
          ]
        },
        {
          "heading": "Singura cale",
          "paragraphs": [
            "Calea scrisă este un rezultat de meci înregistrat trecut prin motorul Rating Point. Nicio pagină publică a acestui site nu scrie astăzi acel rezultat.",
            "Până când există un rezultat, un cont nou rămâne la ratingul de pornire, iar un cont existent păstrează ratingul deja stocat."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Ce sunt Rating Points",
      "lede": "Rating Points sunt numărul competitiv stocat în cont. Rangul este doar intervalul în care cade acel număr.",
      "sections": [
        {
          "heading": "Câmpul stocat",
          "paragraphs": [
            "Versiunea motorului este {version}. Un cont nou pornește de la {startingRating} Rating Points. Numărul stocat nu poate scădea sub {minRating} și nu poate urca peste {maxRating}.",
            "Profilurile și tabla rangurilor citesc acest număr când ești autentificat. Când nu ești, tabla afișează pragul de calibrare al emblemei selectate. Acel prag este un exemplu, nu contul tău."
          ]
        },
        {
          "heading": "Ce măsoară numărul",
          "paragraphs": [
            "Motorul îți compară ratingul cu ratingul mediu al părții adverse. Nu ține un scor separat pentru un premiu individual, o rată de headshot sau utilitare. Acele cifre nu fac parte din această versiune.",
            "Un număr mai mare înseamnă că scara se așteaptă să câștigi mai des împotriva unui număr mai mic. Numele rangurilor sunt citirea publică a acelei scale."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Unde pornește un cont nou",
      "lede": "Autentificarea prin Steam creează contul cu 1.200 Rating Points, rangul 3, Vanguard, fără victorii și fără înfrângeri.",
      "sections": [
        {
          "heading": "Semnul de pornire",
          "paragraphs": [
            "1.200 este pragul de jos al Vanguard. Operative și Recruit sunt dedesubt, așa că un cont nou începe la mijlocul primei părți a clasamentului, nu la bază.",
            "O nouă autentificare nu resetează un rating deja salvat. Primele 10 meciuri înregistrate sunt de plasament: în timpul lor ratingul nu poate urca peste nivelul 5. Codexul nu inventează un istoric de victorii și înfrângeri."
          ]
        },
        {
          "heading": "Cum îl vezi",
          "paragraphs": [
            "După autentificarea Steam, panoul și tabla rangurilor pot afișa ratingul stocat. Dacă baza de date nu poate fi accesată, pagina spune asta în loc să inventeze un număr.",
            "Rangul de start rămâne Vanguard până când un rezultat înregistrat scoate ratingul din intervalul 1.200–1.299. Acest site nu scrie astăzi un astfel de rezultat."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Cum mută un rezultat înregistrat Rating Points",
      "lede": "O victorie sau o înfrângere înregistrată se măsoară față de ratingul mediu al celeilalte echipe. Împotriva unei echipe egale o victorie înseamnă +15, iar o înfrângere −15. Regulile complete sunt pe pagina Ranguri.",
      "sections": [
        {
          "heading": "Pasul",
          "paragraphs": [
            "Scorul așteptat este șansa pe care motorul o atribuie înainte de meci, doar pe baza celor două ratinguri. La ratinguri egale este o jumătate, așa că o victorie valorează 15 Rating Points, iar o înfrângere costă 15.",
            "Împotriva unui rating mai mare, o victorie valorează mai mult de 15, iar o înfrângere costă mai puțin. Împotriva unuia mai mic, invers. O victorie aduce mereu între 8 și 20, iar o înfrângere costă mereu între 8 și 23. La nivelurile 7–9 câștigurile din victorii se înmulțesc cu 0,8, iar la nivelul 10 cu 0,7, așa că vârful clasamentului durează mai mult. Ratingul rămâne între 100 și 3.000.",
            "La un rezultat de echipă, fiecare jucător este măsurat față de ratingul mediu al celeilalte echipe. Un bonus MVP de 2 RP este planificat pentru momentul în care serverul va înregistra eliminările; până atunci nu se aplică niciun bonus personal."
          ]
        },
        {
          "heading": "Egalul",
          "paragraphs": [
            "Un egal nu schimbă nimic: fiecare jucător își păstrează ratingul. Abandonarea sau părăsirea unui meci costă 50 RP, indiferent de rezultat.",
            "Tabelul de pe această pagină este motorul lucrând pe date exemplu. Acele rânduri nu sunt meciuri stocate și nu sunt contul tău."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Pragul, plafonul și un rang sărit",
      "lede": "Numărul stocat se oprește la 100 și la 3.000. Rangul urmează mereu numărul, deci un rang nu poate fi sărit printr-un buton.",
      "sections": [
        {
          "heading": "Opririle",
          "paragraphs": [
            "O înfrângere la 100 Rating Points rămâne la 100. O victorie la 3.000 rămâne la 3.000. Pragul lui Recruit pe scară este scris 0, dar numărul stocat nu folosește niciodată spațiul de sub 100.",
            "1.949 este Sovereign. 1.950 este A.C.E. Legend. Nu există un semn intermediar."
          ]
        },
        {
          "heading": "Fără salt",
          "paragraphs": [
            "Dacă un rezultat înregistrat ar sări numărul de la 1.050 la 1.260, contul ar purta Vanguard, deoarece 1.260 este în acel interval. Rangurile intermediare nu sunt puse la coadă ca promovări separate. Numărul este citit o singură dată.",
            "Nicio pagină a acestui site nu face acel salt. Exemplul arată doar cum citește scara un număr."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Unde ar apărea un link de meci",
      "lede": "Un link de meci este adresa unui server de joc. Acest site nu emite unul.",
      "sections": [
        {
          "heading": "Biroul pe care îl poți deschide",
          "paragraphs": [
            "Pagina de joc arată un aranjament pentru zece jucători și un control FIND MATCH. Acel control rămâne închis. Nu poate deschide un server Counter-Strike 2 și nu dă nimănui o adresă.",
            "Numărul de persoane de pe site nu este numărul de persoane dintr-un joc. Populația pentru un meci este 0."
          ]
        },
        {
          "heading": "Unde ar sta un link mai târziu",
          "paragraphs": [
            "Dacă ar exista un server de meci, adresa și parola lui ar fi afișate pe biroul de meci după ce cei zece jucători au acceptat. Un jucător s-ar alătura din Steam. Nicio adresă nu este stocată pe acest site și nicio parolă nu este generată.",
            "Autentificarea Steam leagă contul. Nu aruncă un jucător pe o hartă."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Ce este biroul ranked",
      "lede": "Biroul ranked este aranjamentul paginii de joc pentru un 5v5. Este un birou închis, nu o coadă deschisă.",
      "sections": [
        {
          "heading": "Ce este desenat",
          "paragraphs": [
            "Două părți, câte cinci locuri, și o etichetă de căpitan pe primul loc. Lista hărților și linia de chat de lângă ele fac parte din același aranjament.",
            "Rândurile de securitate de pe acea pagină sunt marcate cu starea lor. Niciunul nu este încă o verificare activă; vezi foaia de parcurs la /anti-cheat."
          ]
        },
        {
          "heading": "Ce nu face biroul",
          "paragraphs": [
            "FIND MATCH nu caută adversari. Nu modifică Rating Points. Rangul unui cont este tot numărul stocat, citit de scara din acest codex.",
            "Nu există o coadă de top separată deasupra lui Legend. A.C.E. Legend este ultimul semn și se deschide la 1.950 Rating Points."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Ajutor de la biroul de meci",
      "lede": "Suportul de pe acest site este un birou scris. Nu deschide o linie vocală live în timpul unui meci.",
      "sections": [
        {
          "heading": "Ce face pagina de suport",
          "paragraphs": [
            "Pagina de suport listează birourile și oferă un control de tichet. Alegerea acelui control nu creează un caz și nu ajunge la o persoană în timpul unui meci, deoarece niciun meci nu rulează.",
            "O întrebare despre reguli aparține codului competiției de la /rules. O întrebare despre scară aparține acestui codex."
          ]
        },
        {
          "heading": "Un protest, odată ce există un meci",
          "paragraphs": [
            "Codul scris spune că căpitanul poate depune un protest înainte de începerea hărții următoare, numind harta, runda și articolul. Acest site nu stochează demo-uri și nu rulează servere de joc, deci acea depunere nu are astăzi unde să ajungă.",
            "Un scor de aranjament nu este un meci jucat. Personalul ar scrie un rezultat de serie doar după o serie reală."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "Așteptarea a zece jucători",
      "lede": "O hartă competitivă are nevoie de zece titulari. Biroul nu ține astăzi acea așteptare.",
      "sections": [
        {
          "heading": "Ceasul scris",
          "paragraphs": [
            "Odată ce un meci are o oră de start publicată, cei cinci titulari ai unei părți trebuie să fie prezenți cu 15 minute înainte. Propoziția se află în codul competiției. Ceasul nu pornește pe acest site, deoarece niciun meci nu este publicat.",
            "Numele afișate pe pagina de joc sunt previzualizări. Nu sunt oameni care stau la coadă."
          ]
        },
        {
          "heading": "Ce nu se întâmplă cât privești",
          "paragraphs": [
            "Pagina nu rezervă un server, nu trimite o notificare și nu numără invers până la acceptare. Părăsirea paginii nu abandonează un meci, deoarece nu erai în unul."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "Căpitanul la birou",
      "lede": "Un căpitan vorbește pentru o parte. Rolurile din lobby devin active odată cu beta-ul competitiv.",
      "sections": [
        {
          "heading": "Ce atribuie codul",
          "paragraphs": [
            "Căpitanul se ocupă de veto, pauze și protest. Ceilalți titulari joacă. O rezervă poate intra doar între hărți.",
            "Pe o hartă, căpitanii elimină câte o hartă până rămâne una. Pool-ul este Ancient, Anubis, Dust II, Inferno, Mirage, Nuke și Train. Capul de serie mai bun este Team A și alege dacă elimină primul sau al doilea; la capi de serie egali decide aruncarea monedei. Niciun veto nu este deschis astăzi."
          ]
        },
        {
          "heading": "Pauze",
          "paragraphs": [
            "Pauzele se aplică doar după ce există un server de meci. Aici nu există. Cota scrisă per echipă pe o hartă este de trei pauze tactice de 30 de secunde, plus încă una în prelungiri, și 10 minute de pauză tehnică în total. Textul complet este la /rules.",
            "Pe pagina echipelor, căpitanul este și calitatea de membru care poate trimite o invitație în lot. Acea invitație este separată de un lobby de meci."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "Când o parte nu este pregătită",
      "lede": "Codul competiției descrie o neprezentare pentru un meci cu o oră de start publicată. Acest site nu emite acea neprezentare.",
      "sections": [
        {
          "heading": "Regula scrisă",
          "paragraphs": [
            "Cinci titulari trebuie să fie pregătiți cu 15 minute înaintea startului publicat. O parte care este încă incompletă la 15 minute după start pierde seria prin neprezentare, odată ce există un meci. Dacă ambele părți lipsesc, ambele sunt eliminate, iar personalul scrie locul.",
            "Un clan care începe o hartă cu mai puțin de cinci titulari eligibili și nu are o rezervă care poate intra pierde acea hartă prin neprezentare."
          ]
        },
        {
          "heading": "Ce nu va face acest site",
          "paragraphs": [
            "Nimic de aici nu urmărește un lobby și nu scrie singur o neprezentare. Un buton de pe pagina de joc nu poate abandona o hartă care nu a fost niciodată încărcată.",
            "Un scor de aranjament pe arborele turneului nu este un meci jucat și nu este o neprezentare."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "Intrarea în eliminatoriile cu 100 de clanuri",
      "lede": "Pagina turneului este un arbore de 100 de clanuri. Înregistrarea este 0 din 100. Înscrierile nu sunt deschise.",
      "sections": [
        {
          "heading": "Ce poți deschide",
          "paragraphs": [
            "Apasă un clan din arbore pentru a-i citi lotul, apoi deschide un jucător. Numele de pe locurile libere sunt previzualizări, nu înscrieri acceptate.",
            "Arborele nu configurează un server și nu trimite un link de meci."
          ]
        },
        {
          "heading": "Calificarea directă, când se deschid înscrierile",
          "paragraphs": [
            "Regula scrisă, pentru o înscriere viitoare, este că primele 28 de clanuri acceptate sar peste runda 1. Acea calificare directă nu este un premiu și nu poate fi revendicată cât înregistrarea rămâne 0 din 100.",
            "Lungimea seriei, pool-ul de hărți și protestele sunt în codul competiției de la /rules."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Cum se formează un lot",
      "lede": "Un căpitan invită un jucător care are deja un cont A.C.E. Nu există un link public de partajare, iar parola Steam nu este cerută niciodată.",
      "sections": [
        {
          "heading": "Invitația care există",
          "paragraphs": [
            "Pe pagina echipelor, un căpitan autentificat lipește un SteamID64 sau un ID de cont A.C.E. Contul trebuie să fie deja legat prin Steam OpenID. Serverul scrie o invitație în așteptare când baza de date o acceptă.",
            "Lotul are cinci jucători, inclusiv căpitanul. Un căpitan nu își poate invita propriul cont. Un jucător deja în lot este refuzat. Dacă baza de date nu funcționează, invitația eșuează și nu se stochează nimic."
          ]
        },
        {
          "heading": "Ce nu este o invitație",
          "paragraphs": [
            "Invitația nu trimite o scrisoare, nu deschide un lobby privat și nu generează un link pe care să-l poți posta. Nu plasează clanul în eliminatorii.",
            "Codul eliminatoriilor permite două rezerve numite odată ce există o înscriere în turneu. Înscrierile nu sunt deschise, deci acele locuri nu sunt astăzi un permis pe care să-l poți folosi."
          ]
        }
      ]
    }
  }
};
