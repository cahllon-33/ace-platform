import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Reglamento competitivo",
    description:
      "Código de competición de A.C.E. para un árbol de 100 clanes de Counter-Strike 2. MR12, prórroga, economía, pausas y la exención de la Ronda 1. La inscripción está cerrada. No hay ningún premio financiado.",
  },
  document: {
    header: {
      kicker: "CÓDIGO DE COMPETICIÓN DE A.C.E.",
      title: "Reglamento competitivo",
      lede: "La duración de la partida, la economía, el reloj y las pausas siguen la configuración competitiva pública de Counter-Strike 2. El árbol de 100 clanes, la exención de la Ronda 1 y el orden del veto son reglas de A.C.E. para este formato. El código solo entra en vigor para un clan después de que ese clan sea aceptado. La inscripción está cerrada.",
      notice:
        "A.C.E. no opera ningún servidor de Counter-Strike 2. El inicio de sesión con Steam usa únicamente Steam OpenID. Esta página no otorga ningún premio ni modifica ninguna puntuación.",
    },
    articleLabel: "ARTÍCULO {code}",
    articles: [
      {
        title: "Ámbito",
        paragraphs: [
          "Este es el código de competición de A.C.E. Se aplica a un clan solo después de que A.C.E. acepte a ese clan en un evento. La inscripción está cerrada: 0 de 100. Las colas clasificatorias, los servidores de partida, los pagos, los premios y un cliente antitrampas descargable no están activos. Un clic en el navegador no es una ronda ganada, y una captura de pantalla no es un marcador.",
        ],
      },
      {
        title: "El mapa",
        paragraphs: [
          "Una partida enfrenta a cinco jugadores contra cinco. El tiempo reglamentario dura como máximo 24 rondas. El primer bando que gane 13 rondas se lleva el mapa, y el mapa termina en ese momento. Los bandos cambian después de 12 rondas. En la primera ronda de la nueva mitad, cada jugador empieza con $800.",
        ],
      },
      {
        title: "El reloj",
        paragraphs: [
          "Una ronda dura 1 minuto y 55 segundos. El temporizador de la bomba es de 40 segundos. Una desactivación tarda 10 segundos, o 5 segundos con kit. El menú de compra permanece abierto durante 20 segundos desde el inicio de la ronda, y solo se puede comprar en la zona de aparición. Las partidas competitivas oficiales congelan la ronda durante 20 segundos al inicio. El calentamiento dura 2 minutos, o 15 segundos una vez que los diez jugadores están conectados.",
        ],
      },
      {
        title: "Economía",
        paragraphs: [
          "Un jugador no puede tener más de $16,000. En un mapa de bomba, el equipo recibe $3,250 por una victoria por eliminación o por tiempo, $3,500 por una victoria por detonación y $3,500 por una victoria por desactivación. Quien planta la bomba recibe $300. Quien la desactiva recibe $300. Un bando perdedor que plantó la bomba recibe $600 adicionales.",
          "Una ronda perdida paga $1,400 más $500 por cada derrota ya acumulada en la racha de ese bando. La configuración competitiva empieza la racha en 1, así que la primera ronda perdida paga $1,900. La bonificación sube después a $2,400 y $2,900 hasta un máximo de $3,400. Una ronda ganada reinicia la racha. Una baja paga la recompensa fijada para esa arma. Si el arma no fija una recompensa especial, la baja paga $300. El fuego amigo está activado, y una bala que impacta a un compañero inflige el 33 por ciento de su daño.",
        ],
      },
      {
        title: "Prórroga",
        paragraphs: [
          "Un mapa empatado 12–12 pasa a prórroga. Un bloque consta de seis rondas. Los bandos cambian después de tres. El primer bando que gane cuatro rondas en el bloque se lleva el mapa. Un bloque que termina 3–3 da paso a otro bloque, y los bloques continúan hasta que un bando gane uno. Cada jugador empieza cada mitad de la prórroga con $10,000. El emparejamiento competitivo oficial puede detenerse tras un bloque y registrar un empate. Este árbol no registra empates.",
        ],
      },
      {
        title: "Pausas",
        paragraphs: [
          "Estas pausas solo se aplican cuando existe un servidor de partida. En este sitio web no existe ninguno. Cada bando puede pedir tres pausas tácticas de 30 segundos por mapa, y no puede pedir una durante la pausa del otro bando. Al inicio del primer bloque de prórroga hay disponible una pausa táctica. Cada bando también puede pedir una pausa técnica de 120 segundos por mapa. Si un jugador se desconecta, el capitán puede usar esa pausa técnica dentro de los 30 segundos posteriores a la desconexión para que el jugador pueda reconectarse. Si el jugador no ha vuelto cuando termina la pausa, el mapa continúa. Pedir una pausa para retrasar una ronda perdida constituye una infracción de conducta.",
        ],
      },
      {
        title: "El cuadro y la exención de la Ronda 1",
        paragraphs: [
          "El formato del campeonato es un árbol de eliminación directa para 100 clanes. Un clan que pierde una serie queda eliminado. Los nombres que ocupan plazas abiertas son muestras del formato, no clanes aceptados.",
          "Cuando se abra la inscripción, los clanes se numerarán en el orden en que A.C.E. los acepte. Los primeros 28 clanes aceptados reciben una exención. La exención solo omite la Ronda 1 y sitúa al clan en la Ronda 2. Es un pase de cuadro. No es una entrada de pago ni un premio. Los clanes del 29 al 100 juegan la Ronda 1. Si dos aceptaciones comparten la misma marca de tiempo, se ordena primero la que completó antes su plantilla de cinco titulares. Un clan que se retira antes del bloqueo de plantilla pierde la exención, y el siguiente clan aceptado en el orden la recibe.",
        ],
      },
      {
        title: "Duración de las series",
        paragraphs: [
          "La Ronda 1, la Ronda de 64 y la Ronda de 32 se juegan a un mapa. Los octavos de final, los cuartos de final y las dos semifinales se juegan al mejor de tres. La gran final se juega al mejor de cinco.",
        ],
      },
      {
        title: "Mapas y veto",
        paragraphs: [
          "El grupo de mapas es la lista competitiva pública: Ancient, Anubis, Cache, Dust II, Inferno, Mirage y Nuke. Si esa lista pública cambia antes de que se abra la inscripción, la lista de sustitución se publicará en esta página antes del primer veto.",
          "En una serie a un mapa, los capitanes vetan un mapa cada vez hasta que queda uno. El número de inscripción más bajo veta primero. En una serie al mejor de tres, cada capitán veta una vez, después cada uno elige un mapa, después cada uno veta una vez, y el último mapa es el decisivo. El número de inscripción más bajo veta primero y el otro capitán elige primero. En una serie al mejor de cinco, cada capitán veta una vez, después alternan elecciones hasta elegir cuatro mapas, y el mapa restante es el decisivo. El número de inscripción más bajo veta primero y elige en tercer lugar. En un mapa elegido por un capitán, el otro capitán escoge el bando inicial. En el último mapa restante, el número de inscripción más bajo escoge el bando inicial. Un capitán que permanece en silencio durante diez minutos después de abrirse el veto cede el siguiente veto o elección al rival. Hoy no hay ningún veto abierto.",
        ],
      },
      {
        title: "Plantilla",
        paragraphs: [
          "Un clan inscribe a cinco titulares y puede designar a dos suplentes. Cada titular necesita una cuenta de A.C.E. vinculada mediante Steam OpenID. A.C.E. nunca pide una contraseña de Steam. Un único capitán habla en nombre del clan en el veto, las pausas y las reclamaciones. Un suplente solo puede entrar entre mapas. Están prohibidos compartir cuentas, usar una cuenta prestada y que el mismo jugador figure en dos clanes del mismo árbol. Este sitio web no recoge identificadores de hardware y no ejecuta ningún cliente antitrampas.",
        ],
      },
      {
        title: "Disponibilidad",
        paragraphs: [
          "Estos plazos solo se aplican cuando existe una partida. Cinco titulares deben estar listos 15 minutos antes del inicio publicado. Un bando que no esté listo 15 minutos después del inicio publicado pierde la serie por incomparecencia. Si ambos bandos están ausentes, ambos son eliminados y el personal decide la plaza. Un clan que empieza un mapa con menos de cinco titulares elegibles, y no tiene un suplente que pueda entrar, pierde ese mapa por incomparecencia. Nada en este sitio declara una incomparecencia automática.",
        ],
      },
      {
        title: "Conducta",
        paragraphs: [
          "El acoso, el discurso de odio, el amaño de partidas, las apuestas sobre tu propia serie, el ghosting y el retraso deliberado son infracciones. Una infracción probada puede eliminar al clan del árbol. Esta página no analiza a ningún jugador y no declara limpio a ningún jugador.",
        ],
      },
      {
        title: "El resultado registrado",
        paragraphs: [
          "El capitán puede presentar una reclamación antes de que empiece el siguiente mapa. La reclamación indica el mapa, la ronda y el artículo. Este sitio web no almacena demos y no ejecuta servidores de juego. El personal anota el resultado de la serie en el cuadro. Ese resultado escrito es el marcador que muestra A.C.E. No supone la renuncia a ningún derecho legal. Un marcador del formato no es una partida jugada.",
        ],
      },
      {
        title: "Lo que no está en marcha",
        paragraphs: [
          "La inscripción está cerrada. No hay en marcha ningún servidor de partida, emisión, envío de correo ni bolsa de premios. Desde esta página no se otorga dinero, skins ni tokens. Los marcadores del árbol permanecen en 0 hasta que se registre una serie real.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Hoja de ruta del campeonato",
      title: "Calendario de lanzamiento del torneo",
      stageLabel: "Fase {n}",
      stages: [
        {
          title: "Apertura de inscripciones",
          status: "CERRADO · 0 DE 100",
          body: "Los primeros 28 clanes aceptados cuando se abra la inscripción reciben una exención de la Ronda 1 y pasan a la Ronda 2. Los otros 72 juegan la Ronda 1. Este sitio no envía ningún correo de inscripción.",
        },
        {
          title: "Cuadros regionales de calibración",
          status: "BLOQUEADO",
          body: "De la Ronda de 64 a los octavos de final. A un mapa hasta los octavos de final; después, al mejor de tres. No hay ningún calendario de emisiones en marcha.",
        },
        {
          title: "Cuartos de final Elite Pro",
          status: "BLOQUEADO",
          body: "Los cuartos de final y las semifinales se juegan al mejor de tres con el veto de mapas del código que aparece más abajo. No hay ninguna retransmisión en directo en marcha.",
        },
        {
          title: "Gran Final Apex",
          status: "BLOQUEADO",
          body: "La gran final se juega al mejor de cinco. No hay financiado ningún premio en dinero, skins ni tokens.",
        },
      ],
    },
    code: {
      kicker: "Código de competición",
      title: "Código de eliminatoria de 100 clanes",
      lede: "Reglas escritas para el árbol de 100 clanes. Originales de A.C.E. La inscripción está cerrada, no se está jugando ninguna partida y no hay ningún premio financiado. Una regla sobre un lobby, una pausa o una incomparecencia solo se aplica cuando existe una serie real.",
      articleLabel: "Artículo {id}",
      articles: [
        {
          title: "Cuadro",
          body: "El campeonato es un árbol de eliminación directa para 100 clanes. Cada clan entra por un lado del ala doble. Un clan que pierde una serie queda eliminado. El árbol sigue siendo un formato hasta que A.C.E. abra la inscripción y registre resultados reales. Los nombres provisionales en las plazas abiertas no son clanes aceptados.",
        },
        {
          title: "Orden de inscripción y exención de la Ronda 1",
          body: "La inscripción está cerrada: 0 de 100. Cuando se abra la inscripción, los clanes se numerarán en el orden en que A.C.E. los acepte. Los primeros 28 clanes aceptados reciben una exención. Esa exención solo omite la Ronda 1 y sitúa al clan en la Ronda 2. Es un pase de cuadro, no una entrada de pago ni un premio. Los clanes del 29 al 100 juegan la Ronda 1. Si dos aceptaciones comparten la misma marca de tiempo, se ordena primero la que completó antes su plantilla de cinco titulares. Un clan que se retira antes del bloqueo de plantilla pierde la exención, y el siguiente clan aceptado en el orden la recibe.",
        },
        {
          title: "Plantilla",
          body: "Un clan inscribe a cinco titulares y puede designar a dos suplentes. Cada titular necesita una cuenta de A.C.E. vinculada mediante Steam OpenID. Un único capitán habla en nombre del clan en los vetos, las pausas y las reclamaciones. Los suplentes solo pueden entrar entre mapas. Están prohibidos compartir cuentas, usar cuentas prestadas y que un jugador figure en dos clanes del mismo árbol. Este sitio web no recoge identificadores de hardware y no ejecuta ningún cliente antitrampas.",
        },
        {
          title: "Duración de las series",
          body: "La Ronda 1, la Ronda de 64 y la Ronda de 32 se juegan a un mapa. Los octavos de final, los cuartos de final y las dos semifinales se juegan al mejor de tres. La gran final se juega al mejor de cinco. Gana un mapa el primer bando que llegue a 13 rondas. Con 12–12, el mapa pasa a prórroga: gana quien llegue primero a 4 rondas ganadas, los bandos cambian después de 3 rondas y cada bando empieza la prórroga con 10,000 de dinero. Una prórroga empatada se vuelve a jugar con la misma regla.",
        },
        {
          title: "Grupo de mapas y veto",
          body: "El grupo de mapas es Ancient, Anubis, Cache, Dust II, Inferno, Mirage y Nuke. En una serie a un mapa, los capitanes vetan un mapa cada vez hasta que queda uno, y el número de inscripción más bajo veta primero. En una serie al mejor de tres, cada capitán veta una vez, después cada uno elige un mapa, después cada uno veta una vez, y el último mapa es el decisivo. El número de inscripción más bajo veta primero y el otro capitán elige primero. En una serie al mejor de cinco, cada capitán veta una vez, después alternan elecciones hasta elegir cuatro mapas, y el mapa restante es el decisivo. El número de inscripción más bajo veta primero y elige en tercer lugar. En un mapa elegido, el otro capitán escoge el bando inicial. En el último mapa restante, el número de inscripción más bajo escoge el bando inicial. Un capitán que permanece en silencio durante diez minutos después de abrirse el veto cede el siguiente veto o elección al rival. El código de partida completo está en /rules.",
        },
        {
          title: "Inicio, pausas y desconexiones",
          body: "Estos plazos solo se aplican cuando existe una partida. No están en marcha en este sitio web y no hay ningún lobby abierto. Cinco titulares deben estar listos 15 minutos antes del inicio publicado. Cada bando puede pedir tres pausas tácticas de 30 segundos por mapa y una pausa técnica de 120 segundos. Al inicio del primer bloque de prórroga hay disponible una pausa táctica. Un jugador desconectado puede reconectarse durante una pausa técnica pedida dentro de los 30 segundos posteriores a la desconexión. Si el jugador no ha vuelto cuando termina esa pausa, el mapa continúa sin él. Nada en este sitio declara una incomparecencia automática. El código de partida completo está en /rules.",
        },
        {
          title: "Ausencia",
          body: "Un bando que no esté listo 15 minutos después del inicio publicado pierde la serie por incomparecencia. Si ambos bandos están ausentes, ambos son eliminados y la siguiente plaza queda abierta hasta que el personal anote un resultado. Un clan que presenta menos de cinco titulares elegibles al inicio, y no tiene un suplente que pueda entrar, pierde ese mapa por incomparecencia.",
        },
        {
          title: "Conducta",
          body: "El acoso, el discurso de odio, el amaño de partidas, las apuestas sobre tu propia serie y el retraso deliberado son infracciones. Una infracción probada elimina al clan del árbol. Cuando existan partidas, el chat durante una serie en directo se limitará a la alineación, las pausas y el marcador. Esta página no analiza a los jugadores y no afirma que un jugador esté limpio.",
        },
        {
          title: "Reclamaciones",
          body: "El capitán presenta una reclamación en el canal de la partida antes de que empiece el siguiente mapa. La reclamación indica el mapa, la ronda y el artículo del reglamento. El personal puede pedir a ambos capitanes una demo que hayan guardado los jugadores. Este sitio web no almacena demos y no ejecuta servidores de juego. El árbitro principal anota el resultado de la serie en el cuadro. Ese resultado escrito es el marcador que muestra A.C.E. No supone la renuncia a ningún derecho legal y no convierte un marcador del formato en una partida jugada.",
        },
        {
          title: "Lo que esta página no hace",
          body: "La inscripción está cerrada. No hay en marcha ningún servidor de partida, emisión, envío de correo ni bolsa de premios. Desde esta página no se otorga dinero, skins ni tokens. Los marcadores del árbol permanecen en 0 hasta que se registre una serie real. El código anterior es la regla escrita para el formato de 100 clanes. Solo entra en vigor para un clan después de que ese clan sea aceptado de verdad.",
        },
      ],
    },
  },
};
