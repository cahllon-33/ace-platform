import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Códice de calibración",
    description:
      "Los rangos de A.C.E., explicados. Cada pregunta abre una respuesta completa sobre los Puntos de Rating y el código de ese rango. El códice no aplica ninguna partida.",
    articleTitle: "{title} — Códice de calibración",
  },
  groups: {
    ladder: {
      title: "La escalera",
      kicker: "Cómo se lee un rango",
    },
    points: {
      title: "Puntos de Rating",
      kicker: "El único número almacenado",
    },
    ranks: {
      title: "Cada rango",
      kicker: "El código de esa insignia",
    },
    desk: {
      title: "La mesa de partidas",
      kicker: "Lo que la mesa puede y no puede hacer",
    },
  },
  index: {
    title: "Códice de calibración",
    lede: "Diez rangos. Un único número almacenado. Abre cualquier pregunta para ver la respuesta completa. La mesa de partidas continúa en las páginas siguientes.",
    status:
      "Este códice explica la escalera escrita. No aplica ninguna partida y no modifica ninguna puntuación almacenada.",
    searchLabel: "Buscar en el códice",
    searchPlaceholder: "Prueba 1950, Recruit o empate",
    empty: "Ninguna entrada coincide con esa búsqueda.",
    columnLabel: "Columna de A.C.E. {n}",
    pagerLabel: "Páginas del códice",
    first: "Primera",
    previous: "Anterior",
    next: "Siguiente",
    last: "Última",
    pageOf: "Página {n} de {m}",
  },
  article: {
    breadcrumb: "A.C.E. · Códice de calibración",
    status:
      "Esta página explica la escalera escrita. No aplica ninguna partida y no modifica ninguna puntuación almacenada.",
    emblemAlt: "Emblema de {name}, rango {level}",
    emblemCaption: "Rango {level} · {name} · {crystal}",
    examples: {
      heading: "Ejemplos resueltos por el motor",
      intro:
        "Cada fila llama a la misma función de Puntos de Rating que usa la escalera. Los datos de entrada son ejemplos. No se guardan en ninguna cuenta.",
      columns: {
        yourPoints: "Tus puntos",
        otherSide: "Bando rival",
        result: "Resultado",
        storedAfter: "Almacenado después",
        change: "Cambio",
      },
      results: {
        win: "Victoria",
        loss: "Derrota",
        draw: "Empate",
      },
    },
    turnLabel: "Seguir por el códice",
    previous: "Anterior",
    next: "Siguiente",
    alsoIn: "También en A.C.E.",
    backToBoard: "Volver al tablero de rangos",
  },
  rankArticle: {
    title: "{name} — Rango {level}",
    band: {
      heading: "La franja",
      range:
        "{name} es el rango {level}. La etiqueta de cristal del emblema es {crystal}. Una puntuación almacenada de {from} a {to} lleva este rango.",
    },
    code: {
      heading: "Código del rango",
      hold: "Permanencia. La cuenta lleva {name} mientras sus Puntos de Rating almacenados estén dentro de esta franja. El rango se lee a partir del número. No se elige en un menú.",
      gateNext: "Umbral. El siguiente rango se abre en {next} Puntos de Rating.",
      gateLast: "Umbral. No hay un rango siguiente. La franja termina en 3,000 Puntos de Rating.",
      record:
        "Registro. Un rango solo cambia cuando un resultado registrado modifica los Puntos de Rating. Abrir esta página no registra ningún resultado.",
      emblem:
        "Emblema. La imagen identifica el rango. Una compra, una vista previa de skin o un cosmético no mueven el suelo.",
    },
    emblem: {
      heading: "Para qué sirve el emblema",
      material:
        "El estudio de material de esta insignia es: {material}. Esa línea describe la ilustración. No es una estadística ni un requisito.",
      sample:
        "La cifra de porcentaje de victorias que aparece junto a este emblema en el tablero de rangos es una ficha de muestra. No hace falta alcanzarla para poder llevar el rango.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit es la placa de entrada. Las cuentas nuevas ya no empiezan aquí: empiezan con 1.200 Rating Points, en Vanguard. A Recruit solo se llega perdiendo terreno.",
      detail:
        "El umbral de Operative es 1,100. La tabla de la escalera abre Recruit en 0, pero el motor no almacena una puntuación inferior a 100. Entre 100 y 1,099 la cuenta sigue siendo Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative está justo por debajo del número inicial. Una cuenta que baja de 1.200 llega aquí antes de alcanzar Recruit.",
      detail: "La franja tiene cien puntos de ancho. Termina en 1,199. Vanguard se abre en 1,200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard es donde empieza cada cuenta nueva, con 1.200 Rating Points. Subir desde aquí es el primer paso real en la escalera.",
      detail: "La franja va de 1,200 a 1,299. Specialist se abre en 1,300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist es el rango del oficio. La etiqueta de cristal del emblema dice GOLD. El nombre oficial almacenado con la escalera es Specialist. Son el mismo suelo.",
      detail: "La franja va de 1,300 a 1,399. Veteran se abre en 1,400.",
    },
    "rank-5-veteran": {
      stance: "Veteran es la insignia intermedia. Hay cuatro rangos por debajo de este suelo y cinco por encima.",
      detail:
        "La franja va de 1,400 a 1,499. Elite se abre en 1,500. La etiqueta de cristal de este emblema es PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite es el nombre del motor. DIAMOND es la etiqueta de cristal del mismo emblema. Ninguna de las dos etiquetas es una segunda puntuación.",
      detail: "La franja va de 1,500 a 1,599. Master se abre en 1,600.",
    },
    "rank-7-master": {
      stance:
        "Master es el primer rango cuya etiqueta de cristal y cuyo nombre oficial usan la misma palabra. El suelo es 1,600.",
      detail: "La franja va de 1,600 a 1,699. Grandmaster se abre en 1,700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster es el escalón de zafiro. El suelo es 1,700, todavía con cien puntos de ancho, y Sovereign espera en 1,800.",
      detail:
        "La franja va de 1,700 a 1,799. Nada en esta página gasta una partida para cruzarla.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign es el escalón ancho antes de Legend. La etiqueta de cristal es IMMORTAL. El nombre oficial es Sovereign.",
      detail:
        "La franja va de 1,800 a 1,949. Son 150 puntos, no 100. 1,949 sigue llevando Sovereign. Legend se abre en 1,950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E. Legend es la última insignia. La etiqueta de cristal es ACE ELITE. El nombre oficial es A.C.E. Legend.",
      detail:
        "La franja se abre en 1,950 y termina en el techo del motor, 3,000. No hay un undécimo rango. Una puntuación almacenada no puede superar 3,000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "Qué es un rango de A.C.E.",
      lede: "Un rango es la insignia que contiene tus Puntos de Rating almacenados. Diez insignias cubren toda la escalera, de Recruit a A.C.E. Legend.",
      sections: [
        {
          heading: "Un número, una insignia",
          paragraphs: [
            "La cuenta almacena una puntuación competitiva. La escalera lee ese número y devuelve el rango más alto cuyo suelo ha alcanzado. No tienes dos rangos a la vez.",
            "Recruit es el rango 1. A.C.E. Legend es el rango 10. El nombre oficial es el nombre que figura en la escalera. La palabra más corta del emblema es la etiqueta de cristal del mismo rango.",
            "Este códice explica la escalera escrita. No aplica ninguna partida y no modifica ninguna puntuación almacenada.",
          ],
        },
        {
          heading: "Cómo se sitúan los suelos",
          paragraphs: [
            "Recruit cubre el inicio de la escalera. Operative se abre en 1,100. De Vanguard a Grandmaster, cada nuevo suelo está 100 puntos más arriba: 1,200, 1,300, 1,400, 1,500, 1,600 y, después, 1,700.",
            "Sovereign se abre en 1,800 y mantiene la cuenta hasta 1,949. A.C.E. Legend se abre en 1,950. El techo del motor es 3,000, así que Legend es la franja más larga.",
          ],
        },
        {
          heading: "Lo que un rango no es",
          paragraphs: [
            "Un rango no es un límite de población. Legend es un suelo, no una lista de mil cuentas.",
            "Un rango no es un premio, una skin ni una cola. El sitio público puede mostrar la insignia. No ejecuta ninguna partida que escriba una nueva.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Nombre oficial y nombre de cristal",
      lede: "Cada rango tiene dos etiquetas. El nombre oficial es el de la escalera. El nombre de cristal es la palabra tallada en el emblema.",
      sections: [
        {
          heading: "Por qué existen ambos",
          paragraphs: [
            "El motor y el perfil usan el nombre oficial: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "El emblema también lleva una etiqueta de cristal: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Esa etiqueta es parte de la ilustración. No crea un undécimo rango ni almacena un segundo número.",
          ],
        },
        {
          heading: "Dónde difieren",
          paragraphs: [
            "La etiqueta de cristal de Specialist es GOLD. La de Veteran es PLATINUM. La de Elite es DIAMOND. La de Sovereign es IMMORTAL. La de A.C.E. Legend es ACE ELITE. En todos los casos, el suelo sigue perteneciendo al nombre oficial.",
            "Master y Grandmaster usan la misma palabra en ambos lugares.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "Las tres divisiones del tablero",
      lede: "Las divisiones III, II y I son una ayuda de lectura pintada sobre la franja de un rango. La cuenta no almacena ninguna división.",
      sections: [
        {
          heading: "Lo que se almacena",
          paragraphs: [
            "Una cuenta con sesión iniciada almacena un nivel de rango y una puntuación competitiva. El nivel de rango sigue a la puntuación. No hay ninguna columna de división junto a ellos.",
            "En el tablero de rangos, la franja del rango seleccionado se divide en tres pasos visuales para que se distingan la parte baja, la media y la alta de ese suelo. La división III es el extremo bajo de la franja. La división I es el extremo alto.",
          ],
        },
        {
          heading: "Qué son las fichas",
          paragraphs: [
            "Los porcentajes de victorias y las marcas de progreso de esas fichas son muestras. No son una segunda escalera ni un objetivo que debas superar.",
            "Cambiar la ficha de división no modifica una puntuación almacenada. Solo un resultado registrado puede hacerlo, y esta página no registra ninguno.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "Lo que no puede mover un rango",
      lede: "La insignia sigue a los Puntos de Rating almacenados. Todo lo demás del sitio deja la insignia donde está.",
      sections: [
        {
          heading: "Fuera del motor",
          paragraphs: [
            "Una vista previa de skin, una tarjeta de la tienda, una etiqueta de suscripción y un cosmético no suman Puntos de Rating. Pagar un plan no es un rango.",
            "Abrir el tablero de rangos, girar un emblema o leer este códice no aplica ninguna partida.",
            "Un reporte, una nota de soporte y un formato de torneo no reescriben la puntuación almacenada.",
          ],
        },
        {
          heading: "El único camino",
          paragraphs: [
            "El camino escrito es un resultado de partida registrado que pasa por el motor de Puntos de Rating. Hoy ninguna página pública de este sitio escribe ese resultado.",
            "Mientras no exista un resultado, una cuenta nueva se queda en su puntuación inicial y una cuenta existente conserva la puntuación ya almacenada.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "Qué son los Puntos de Rating",
      lede: "Los Puntos de Rating son el número competitivo almacenado en la cuenta. El rango es solo la franja en la que cae ese número.",
      sections: [
        {
          heading: "El campo almacenado",
          paragraphs: [
            "La versión del motor es {version}. Una cuenta nueva empieza con {startingRating} Puntos de Rating. El número almacenado no puede bajar de {minRating} ni subir de {maxRating}.",
            "Los perfiles y el tablero de rangos leen este número cuando has iniciado sesión. Si no has iniciado sesión, el tablero muestra el suelo de calibración del emblema que hayas seleccionado. Ese suelo es una muestra, no tu cuenta.",
          ],
        },
        {
          heading: "Qué mide el número",
          paragraphs: [
            "El motor compara tu puntuación con la puntuación media del bando rival. No lleva una puntuación aparte para un premio individual, un porcentaje de disparos a la cabeza o una línea de utilidad. Esas cifras no forman parte de esta versión.",
            "Un número más alto significa que la escalera espera que ganes con más frecuencia frente a un número más bajo. Los nombres de los rangos son la lectura pública de esa escala.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Dónde empieza una cuenta nueva",
      lede: "El inicio de sesión con Steam crea la cuenta con 1.200 Rating Points, rango 3, Vanguard, sin victorias ni derrotas.",
      sections: [
        {
          heading: "La insignia inicial",
          paragraphs: [
            "1.200 es el suelo de Vanguard. Operative y Recruit están por debajo, así que una cuenta nueva empieza en mitad de la primera parte de la escalera, no al fondo.",
            "Volver a iniciar sesión no reinicia una puntuación ya guardada. Las primeras 10 partidas registradas son de clasificación: durante ellas la puntuación no puede pasar del nivel 5. El códice no inventa un historial de victorias y derrotas.",
          ],
        },
        {
          heading: "Cómo verlo",
          paragraphs: [
            "Después de iniciar sesión con Steam, el panel y el tablero de rangos pueden mostrar la puntuación almacenada. Si no se puede acceder a la base de datos, la página lo indica en lugar de inventar un número.",
            "El rango inicial sigue siendo Vanguard hasta que un resultado registrado saque la puntuación de la franja 1.200–1.299. Este sitio no escribe hoy ningún resultado así.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Cómo mueve un resultado registrado los Puntos de Rating",
      lede: "Una victoria o derrota registrada se mide frente a la puntuación media del otro equipo. Contra un equipo igualado una victoria es +20 y una derrota −20. Las reglas completas están en la página de Rangos.",
      sections: [
        {
          heading: "El paso",
          paragraphs: [
            "La puntuación esperada es la probabilidad que el motor asigna antes de la partida, basada solo en las dos puntuaciones. Con puntuaciones iguales es de la mitad, así que una victoria vale 20 Rating Points y una derrota cuesta 15.",
            "Contra un rating mayor, una victoria vale más de 20 y una derrota cuesta menos. Contra uno menor, al revés. Una victoria siempre da de 10 a 30 y una derrota siempre cuesta de 10 a 30. En los niveles 7–9 victorias y derrotas se multiplican por 0,85 y en el nivel 10 por 0,75, así la cima es más estable. El rating se mantiene entre 100 y 3.000.",
            "En un resultado por equipos, cada jugador se mide frente a la puntuación media del otro equipo. Hay previsto un bono MVP de partida de 2 RP para cuando el servidor registre las bajas; hasta entonces no se aplica ningún bono personal.",
          ],
        },
        {
          heading: "Un empate",
          paragraphs: [
            "Un empate no cambia nada: cada jugador conserva su rating. Abandonar o salir de una partida cuesta el doble de una derrota normal, al menos 30 RP, sea cual sea el resultado.",
            "La tabla de esta página es el motor trabajando con datos de ejemplo. Esas filas no son partidas almacenadas ni son tu cuenta.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "El suelo, el techo y un rango saltado",
      lede: "El número almacenado se detiene en 100 y en 3,000. El rango siempre sigue al número, así que ningún botón permite saltarse un rango.",
      sections: [
        {
          heading: "Los topes",
          paragraphs: [
            "Una derrota con 100 Puntos de Rating se queda en 100. Una victoria con 3,000 se queda en 3,000. El suelo de Recruit en la escalera figura como 0, pero el número almacenado nunca usa el tramo por debajo de 100.",
            "1,949 es Sovereign. 1,950 es A.C.E. Legend. No hay ninguna insignia intermedia.",
          ],
        },
        {
          heading: "Sin saltos",
          paragraphs: [
            "Si un resultado registrado hiciera saltar el número de 1,050 a 1,260, la cuenta llevaría Vanguard, porque 1,260 está dentro de esa franja. Los rangos intermedios no se encadenan como ascensos separados. El número se lee una sola vez.",
            "Ninguna página de este sitio realiza ese salto. El ejemplo solo muestra cómo lee la escalera un número.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Dónde aparecería un enlace de partida",
      lede: "Un enlace de partida es la dirección de un servidor de juego. Este sitio web no emite ninguno.",
      sections: [
        {
          heading: "La mesa que puedes abrir",
          paragraphs: [
            "La página de juego muestra un diseño de diez jugadores y un control BUSCAR PARTIDA. Ese control permanece cerrado. No puede abrir un servidor de Counter-Strike 2 y no entrega ninguna dirección a nadie.",
            "El número de personas en el sitio web no es el número de personas dentro de una partida. La población de partida es 0.",
          ],
        },
        {
          heading: "Dónde estaría un enlace más adelante",
          paragraphs: [
            "Si existiera un servidor de partida, la dirección y su contraseña se mostrarían en la mesa de partidas después de que los diez jugadores hubieran aceptado. Un jugador se uniría desde Steam. Este sitio no almacena ninguna dirección ni genera ninguna contraseña.",
            "El inicio de sesión con Steam vincula la cuenta. No mete a ningún jugador en un mapa.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "Qué es la mesa clasificatoria",
      lede: "La mesa clasificatoria es el diseño de la página de juego para un 5v5. Es una mesa cerrada, no una cola abierta.",
      sections: [
        {
          heading: "Lo que se dibuja",
          paragraphs: [
            "Dos bandos, cinco asientos cada uno y una etiqueta de capitán en el primer asiento. La lista de mapas y la línea de chat que los acompañan forman parte del mismo diseño.",
            "Las filas de seguridad de esa página indican su estado. Ninguna es todavía una comprobación activa; consulta la hoja de ruta en /anti-cheat.",
          ],
        },
        {
          heading: "Lo que la mesa no hace",
          paragraphs: [
            "BUSCAR PARTIDA no busca rivales. No modifica los Puntos de Rating. El rango de una cuenta sigue siendo el número almacenado, leído por la escalera de este códice.",
            "No hay ninguna cola superior aparte por encima de Legend. A.C.E. Legend es la última insignia y se abre en 1,950 Puntos de Rating.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Ayuda desde la mesa de partidas",
      lede: "El soporte de este sitio web es una mesa escrita. No abre una línea de voz en directo dentro de una partida.",
      sections: [
        {
          heading: "Lo que hace la página de soporte",
          paragraphs: [
            "La página de soporte enumera las mesas y ofrece un control de ticket. Elegir ese control no crea ningún caso y no contacta con ninguna persona durante una partida, porque no hay ninguna partida en marcha.",
            "Una pregunta sobre las reglas corresponde al código de competición en /rules. Una pregunta sobre la escalera corresponde a este códice.",
          ],
        },
        {
          heading: "Una reclamación, cuando exista una partida",
          paragraphs: [
            "El código escrito dice que el capitán puede presentar una reclamación antes de que empiece el siguiente mapa, indicando el mapa, la ronda y el artículo. Este sitio web no almacena demos y no ejecuta servidores de juego, así que hoy esa reclamación no tiene adónde llegar.",
            "Un marcador del formato no es una partida jugada. El personal solo anotaría un resultado de serie después de una serie real.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "Esperando a diez jugadores",
      lede: "Un mapa competitivo necesita diez titulares. Hoy la mesa no mantiene esa espera.",
      sections: [
        {
          heading: "El reloj escrito",
          paragraphs: [
            "Cuando una partida tenga un inicio publicado, los cinco titulares de un bando deben estar presentes 15 minutos antes de ese inicio. Esa frase figura en el código de competición. El reloj no se pone en marcha en este sitio web, porque no hay ninguna partida publicada.",
            "Los nombres que aparecen en la página de juego son una vista previa. No son personas esperando en una cola.",
          ],
        },
        {
          heading: "Lo que no ocurre mientras miras",
          paragraphs: [
            "La página no reserva ningún servidor, no envía notificaciones y no hace ninguna cuenta atrás hasta una aceptación. Salir de la página no abandona ninguna partida, porque no estabas en ninguna.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "El capitán en la mesa",
      lede: "Un capitán habla por cada bando. Los roles del lobby se activarán con la beta competitiva.",
      sections: [
        {
          heading: "Lo que asigna el código",
          paragraphs: [
            "El capitán se encarga del veto, las pausas y las reclamaciones. Los demás titulares juegan. Un suplente solo puede entrar entre mapas.",
            "En un mapa único, los capitanes vetan un mapa cada vez hasta que queda uno. El pool es Ancient, Anubis, Dust II, Inferno, Mirage, Nuke y Train. El seed más alto es el equipo A y elige si veta primero o segundo; con seeds iguales decide una moneda. Hoy no hay ningún veto abierto.",
          ],
        },
        {
          heading: "Pausas",
          paragraphs: [
            "Las pausas solo se aplican cuando existe un servidor de partida. Aquí no hay ninguno. El cupo escrito por equipo y mapa es de tres pausas tácticas de 30 segundos, más una en la prórroga, y 10 minutos de pausa técnica en total. El texto completo está en /rules.",
            "En la página de equipos, el capitán es también el miembro que puede enviar una invitación a la plantilla. Esa invitación es independiente de un lobby de partida.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Cuando un bando no está listo",
      lede: "El código de competición describe una derrota por incomparecencia para una partida con inicio publicado. Este sitio web no declara esa incomparecencia.",
      sections: [
        {
          heading: "La regla escrita",
          paragraphs: [
            "Cinco titulares deben estar listos 15 minutos antes del inicio publicado. Un bando que siga incompleto 15 minutos después del inicio pierde la serie por incomparecencia, una vez que exista una partida. Si ambos bandos están ausentes, ambos son eliminados y el personal decide la plaza.",
            "Un clan que empieza un mapa con menos de cinco titulares elegibles, y no tiene un suplente que pueda entrar, pierde ese mapa por incomparecencia.",
          ],
        },
        {
          heading: "Lo que este sitio no hará",
          paragraphs: [
            "Nada aquí vigila un lobby ni escribe por sí solo una incomparecencia. Un botón de la página de juego no puede rendir un mapa que nunca se cargó.",
            "Un marcador del formato en el árbol del torneo no es una partida jugada ni una incomparecencia.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Entrar en la eliminatoria de 100 clanes",
      lede: "La página del torneo es un árbol de 100 clanes. La inscripción está en 0 de 100. La inscripción no está abierta.",
      sections: [
        {
          heading: "Lo que puedes abrir",
          paragraphs: [
            "Haz clic en un clan del cuadro para ver su plantilla y luego abre un jugador. Los nombres en plazas libres son vistas previas, no inscripciones aceptadas.",
            "El árbol no asigna ningún servidor y no envía ningún enlace de partida.",
          ],
        },
        {
          heading: "La exención, cuando se abra la inscripción",
          paragraphs: [
            "La regla escrita, para una futura inscripción, es que los primeros 28 clanes aceptados se saltan la ronda 1. Esa exención no es un premio y no se puede reclamar mientras la inscripción siga en 0 de 100.",
            "La duración de las series, el grupo de mapas y las reclamaciones están en el código de competición en /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Cómo se forma una plantilla",
      lede: "Un capitán invita a un jugador que ya tiene una cuenta de A.C.E. No hay ningún enlace público para compartir, y nunca se pide una contraseña de Steam.",
      sections: [
        {
          heading: "La invitación que existe",
          paragraphs: [
            "En la página de equipos, un capitán con sesión iniciada pega un SteamID64 o un ID de cuenta de A.C.E. La cuenta ya debe estar vinculada mediante Steam OpenID. El servidor escribe una invitación pendiente cuando la base de datos la acepta.",
            "La plantilla tiene cinco jugadores, incluido el capitán. Un capitán no puede invitar a su propia cuenta. Se rechaza a un jugador que ya está en la plantilla. Si la base de datos no está disponible, la invitación falla y no se almacena ninguna invitación.",
          ],
        },
        {
          heading: "Lo que no es una invitación",
          paragraphs: [
            "La invitación no envía ninguna carta, no abre un lobby privado y no genera un enlace que puedas publicar. No inscribe al clan en la eliminatoria.",
            "El código de la eliminatoria permite dos suplentes designados una vez que exista una inscripción en el torneo. La inscripción no está abierta, así que esas plazas no son un pase que puedas usar hoy.",
          ],
        },
      ],
    },
  },
};
