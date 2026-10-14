import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Gestión de escuadras A.C.E.",
    description:
      "Espacio conceptual de escuadras 5v5. Las plantillas, los agentes libres y las insignias de anticheat son diseños de vista previa. Las invitaciones en vivo requieren una sesión verificada de Steam.",
  },
  hero: {
    kicker: "EQUIPOS",
    title: "Escuadras",
    lede: "Cinco plazas abiertas en fila. Un clan solo se guarda después de iniciar sesión con Steam y crear un equipo.",
  },
  gate: {
    kickerPremium: "Después de la carta Premium",
    kickerDefault: "Registro del clan",
    title: "¿Formas parte de un equipo de cinco?",
    intro:
      "La plaza 1 es el jugador con sesión iniciada en Steam. Las plazas 2 a 5 ya deben tener cuentas A.C.E. Guardar un clan no cobra $7, no envía correo y no coloca al clan en el cuadro de 100 equipos.",
    yes: "Sí, cinco jugadores",
    no: "No, dejar las plazas abiertas",
    seatsOpen: "Las cinco plazas siguen abiertas. No se guardó nada.",
    connectSteam:
      "Conecta Steam primero. El botón vuelve a esta página. A.C.E. nunca pide una contraseña de Steam.",
    alreadyMember: "{name} ya pertenece a {team}. Este formulario no crea un segundo clan.",
    thisAccount: "Esta cuenta",
    acceptTerms: "Acepta los términos antes de guardar un clan.",
    notStored: "El clan no se guardó.",
    clanName: "Nombre del clan",
    captainSeat: "Plaza 1, capitán: {name}",
    signedInSteam: "Cuenta de Steam con sesión iniciada",
    seatLabel: "SteamID o ID de cuenta A.C.E. de la plaza {seat}",
    submit: "Guardar el clan de cinco jugadores",
    saved:
      "El nombre del clan se ha guardado y hay cuatro invitaciones pendientes. Esos jugadores no están en la plantilla hasta que acepten. Esto no es una plaza en el cuadro de 100 equipos. No se cobró nada.",
  },
  squadDesk: {
    kicker: "Mesa de escuadra",
    title: "Preguntas sobre las reglas escritas",
    intro:
      "Esta mesa solo lee los datos publicados en esta página. No detecta trampas, no abre una partida y no modifica ninguna cuenta.",
    questionLabel: "Pregunta",
    placeholder: "Pregunta por las cinco plazas, la carta de $7 o el soporte",
    ask: "Preguntar",
    fallback:
      "Esta mesa solo responde a partir de las reglas escritas de esta página: la carta Premium, las cinco plazas, Steam OpenID y Soporte.",
    facts: {
      email: "No se envía ningún correo. La carta Premium permanece en /premium/receipt.",
      charge:
        "No se cobra nada. Premium a $7 al mes es un precio de pantalla. El pago no está activo y el nivel guardado no cambia.",
      board:
        "Un clan guardado es un registro de plantilla. No se coloca en el cuadro de 100 equipos. Ese cuadro sigue mostrando 0 inscritos hasta que se abra una temporada.",
      steam:
        "El inicio de sesión usa el Steam OpenID oficial. A.C.E. nunca pide una contraseña de Steam. Desde esta página, Steam te devuelve aquí.",
      roster:
        "La plaza 1 es el capitán con sesión iniciada. Las plazas 2 a 5 ya deben tener cuentas A.C.E. Las invitaciones siguen pendientes hasta que cada jugador acepte.",
      badge:
        "La insignia de una plaza es una muestra de diseño. No es una comprobación de anticheat en vivo y no se descarga nada.",
      support:
        "Abre Soporte o Contacto en este sitio web. Un aviso de soporte no abre un ticket, y el texto escrito en Contacto no se entrega.",
      rating:
        "Una puntuación nueva empieza en 1,000. Esta página no vende puntuación, no abre una cola, no conecta un servidor de CS2 y no entrega ningún premio.",
    },
  },
  squad: {
    roles: {
      awper: "AWPer",
      entryFragger: "Entry fragger",
      lurker: "Lurker",
      igl: "IGL",
      support: "Soporte",
    },
    rankLabel: "Rango {level}",
    noAgents: "Todavía no hay jugadores sin asignar guardados.",
    notice:
      "Las invitaciones solo se envían si el capitán ha iniciado sesión. La insignia de una plaza no es una comprobación de anticheat en vivo.",
  },
  tournaments: {
    meta: {
      title: "Campeonato A.C.E. — Eliminatoria de élite de 100 equipos",
      description:
        "Diseño de eliminatoria de 100 equipos. Haz clic en un clan para abrir su plantilla y luego abre el perfil de cada jugador. La inscripción es 0 de 100.",
    },
    intro: {
      title: "CAMPEONATO A.C.E. — ELIMINATORIA DE ÉLITE DE 100 EQUIPOS",
      lede: "El cuadro publicado es una eliminatoria de 100 equipos. El gráfico de abajo es ese diseño. Al hacer clic en un clan se abre el panel de su plantilla. La inscripción es 0 de 100. No se anuncia ni se financia ningún premio en metálico.",
      formatValue: "Matriz de cuadro de 100 equipos",
      briefTitle: "Informe de operaciones de 100 equipos",
      briefBody:
        "Un único diseño competitivo cubre todo el cuadro de 100 equipos. Cuando se abra la inscripción, los primeros 28 clanes aceptados quedarán exentos de la ronda 1 y pasarán a la ronda 2. Los otros 72 clanes juegan la ronda 1. Los nombres de las plazas sin cubrir son etiquetas provisionales, no participantes inscritos. El código completo está debajo del árbol. No hay ningún lobby de partida abierto ni se financia ningún pozo de premios.",
    },
    timeline: {
      ariaLabel: "Calendario de lanzamiento del torneo",
      kicker: "HOJA DE RUTA DEL CAMPEONATO",
      title: "CALENDARIO DE LANZAMIENTO DEL TORNEO",
      stageLabel: "Fase {id}",
      stages: {
        registrations: { title: "Inscripciones abiertas", state: "PULSO DE VISTA PREVIA" },
        calibration: { title: "Cuadros regionales de calibración", state: "BLOQUEADA" },
        quarterFinals: { title: "Cuartos de final Elite Pro", state: "BLOQUEADA" },
        finals: { title: "Gran final Apex", state: "BLOQUEADA" },
      },
      disclaimer:
        "La fase 01 parpadea como vista previa de diseño. La inscripción no está abierta (0 de 100). Las fases 02–04 están bloqueadas. La Gran final Apex incluye solo una cifra conceptual de $50,000: no se financia ningún pozo de premios.",
    },
    bracket: {
      kicker: "Eliminatoria de 100 equipos · vista previa de diseño",
      title: "Matriz de cuadro de 100 equipos",
      statusUnavailable:
        "PostgreSQL no está conectado. Las 100 plazas de participantes usan nombres de clan provisionales, no equipos inscritos. Los marcadores de las series siguen en 0.",
      statusEmpty:
        "Todavía no hay clanes guardados. Los 100 nombres de participantes son un diseño provisional. No son un cuadro de participantes confirmados.",
      statusStored:
        "{count} clanes de la base de datos se colocan primero. Las plazas restantes usan nombres provisionales. Las rondas posteriores siguen abiertas hasta que se registren las partidas.",
      openSlot: "Plaza abierta",
      openCompetitorSlot: "Plaza de participante abierta",
      openRoster: "Abrir la plantilla de {name}",
      bye: "👑 [EXENTO - CABEZA DE SERIE EN RONDA 2]",
      championStage: "FASE DEL CAMPEÓN",
      leftWing: "Ala izquierda",
      rightWing: "Ala derecha",
      emptySlotNotice: "Esta plaza de participante está vacía. Todavía no hay ningún clan guardado.",
      grandFinalNotice: "La gran final sigue abierta hasta que se registren las dos semifinales.",
      rounds: {
        r128: "R1",
        r64: "R64",
        r32: "R32",
        r16: "R16",
        qf: "CF",
        sf: "SF",
      },
    },
    profile: {
      closeBackdrop: "Cerrar el perfil del equipo",
      kicker: "Perfil maestro del campeonato · muestra de diseño",
      matchesPlayed: "Partidas jugadas",
      winRate: "Porcentaje de victorias combinado",
      streak: "Racha activa de torneo",
      rosterHeading: "Matriz de plantilla de 5 jugadores",
      openSeat: "Plaza abierta {seat}",
      noPlayer: "Ningún jugador guardado",
      previous: "Clan anterior",
      count: "Clan {index} de {total}",
      next: "Clan siguiente",
      close: "Cerrar perfil",
      disclosure:
        "Maqueta de prueba: todas las configuraciones de sistema, los inventarios de jugadores y las variables de base de datos de este perfil son muestras conceptuales de diseño de preinscripción. No se está ejecutando ningún cliente de anticheat, no se guarda ningún hardware y estas cifras no son resultados de partidas.",
    },
    player: {
      level: "NV {level} · RP {rating}",
      record: "V–D {wins}–{losses}",
      kdNotStored: "K/D no guardado",
      openProfileAria: "Abrir el perfil de {name}",
      openProfile: "Abrir perfil",
      badge: "LISTO / CUMPLE CON EL ANTICHEAT",
      badgeNote: "Muestra de diseño · no es una comprobación en vivo",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Ratón",
        dpi: "DPI",
        keyboard: "Teclado",
        monitor: "Monitor",
        headset: "Auriculares",
      },
    },
  },
  gearPlaceholder: {
    processor: "Marcador · CPU no recogida",
    gpu: "Marcador · GPU no recogida",
    mouse: "Marcador · modelo de ratón no recogido",
    dpi: "Marcador · DPI no recogido",
    keyboard: "Marcador · no recogido",
    monitor: "Marcador · Hz no recogidos",
    headset: "Marcador · no recogido",
  },
  profileDisclosure:
    "A.C.E. no guarda inventarios de hardware y no ejecuta ningún cliente de anticheat. Los gráficos de tendencia de rendimiento y la matriz de combate requieren una sesión de A.C.E. Plus o Premium. Un enlace de perfil de Steam escrito en esta página no se guarda y no es un identificador oficial.",
  errors: {
    signInRequired: "Es necesario iniciar sesión.",
    nameLength: "Los nombres de equipo deben tener entre 2 y 32 caracteres.",
    alreadyCaptain: "Esta cuenta ya es capitana de un equipo.",
    nameTaken: "Ya existe un equipo con ese nombre.",
    idRequired: "Se necesita un SteamID o un ID de cuenta A.C.E.",
    noAccountForToken: "No existe ninguna cuenta A.C.E. para ese SteamID o ID de cuenta.",
    clanNeedsFour: "Un clan de cinco jugadores necesita al capitán con sesión iniciada más cuatro SteamID.",
    seatNeedsId: "Cada una de las cuatro plazas necesita un SteamID o un ID de cuenta A.C.E.",
    seatsDistinct: "Cada plaza necesita un jugador distinto.",
    captainHoldsSeat: "El capitán ya ocupa la plaza 1. Usa otros cuatro jugadores.",
    fewerThanFour: "Esos ID pertenecen a menos de cuatro cuentas.",
    selfInvite: "Un capitán no puede invitar a su propia cuenta.",
    captainOnly: "Solo el capitán designado puede enviar invitaciones.",
    rosterLimit: "Una plantilla de CS2 tiene cinco jugadores, incluido el capitán.",
    alreadyOnRoster: "Ese jugador ya está en la plantilla.",
    noAccountForId: "No existe ninguna cuenta A.C.E. para ese ID.",
    inviteNotFound: "No se encontró la invitación.",
    inviteNotPending: "Esta invitación ya no está pendiente.",
    rosterFull: "La plantilla ya está completa.",
    createFailed: "No se pudo crear el equipo.",
    inviteFailed: "La invitación falló.",
    updateInviteFailed: "No se pudo actualizar la invitación.",
  },
};
