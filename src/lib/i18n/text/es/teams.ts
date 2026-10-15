import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "Gestión de escuadras A.C.E.",
    "description": "Tu espacio de equipo 5v5. Las invitaciones requieren una sesión de Steam verificada; las comprobaciones anti-cheat llegarán con A.C.E Shield."
  },
  "hero": {
    "kicker": "EQUIPOS",
    "title": "Escuadras",
    "lede": "Cinco plazas abiertas en fila. Un clan solo se guarda después de iniciar sesión con Steam y crear un equipo."
  },
  "gate": {
    "kickerPremium": "Registro de clan tras elegir tu plan",
    "kickerDefault": "Registro del clan",
    "title": "¿Formas parte de un equipo de cinco?",
    "intro": "La plaza 1 es el jugador con sesión iniciada en Steam. Las plazas 2 a 5 ya deben tener cuentas A.C.E. Guardar un clan no cobra $7, no envía correo y no coloca al clan en el cuadro de 100 equipos.",
    "yes": "Sí, cinco jugadores",
    "no": "No, dejar las plazas abiertas",
    "seatsOpen": "Las cinco plazas siguen abiertas. No se guardó nada.",
    "connectSteam": "Conecta Steam primero. El botón vuelve a esta página. A.C.E. nunca pide una contraseña de Steam.",
    "alreadyMember": "{name} ya pertenece a {team}. Este formulario no crea un segundo clan.",
    "thisAccount": "Esta cuenta",
    "acceptTerms": "Acepta los términos antes de guardar un clan.",
    "notStored": "El clan no se guardó.",
    "clanName": "Nombre del clan",
    "captainSeat": "Plaza 1, capitán: {name}",
    "signedInSteam": "Cuenta de Steam con sesión iniciada",
    "seatLabel": "SteamID o ID de cuenta A.C.E. de la plaza {seat}",
    "submit": "Guardar el clan de cinco jugadores",
    "saved": "El nombre del clan se ha guardado y hay cuatro invitaciones pendientes. Esos jugadores no están en la plantilla hasta que acepten. Esto no es una plaza en el cuadro de 100 equipos. No se cobró nada."
  },
  "squadDesk": {
    "kicker": "Mesa de escuadra",
    "title": "Preguntas sobre las reglas escritas",
    "intro": "Esta mesa solo lee los datos publicados en esta página. No detecta trampas, no abre una partida y no modifica ninguna cuenta.",
    "questionLabel": "Pregunta",
    "placeholder": "Pregunta por los cinco puestos, los planes o el soporte",
    "ask": "Preguntar",
    "fallback": "Este mostrador solo responde con las reglas escritas en esta página: los planes, los cinco puestos, Steam OpenID y el soporte.",
    "facts": {
      "email": "No se envía ningún correo. Los recibos de plan se quedan en este sitio.",
      "charge": "Premium cuesta $7 al mes. Próximamente: aún no hay pago, así que no se cobra nada.",
      "board": "Un clan guardado es un registro de plantilla. No se coloca en el cuadro de 100 equipos. Ese cuadro sigue mostrando 0 inscritos hasta que se abra una temporada.",
      "steam": "El inicio de sesión usa el Steam OpenID oficial. A.C.E. nunca pide una contraseña de Steam. Desde esta página, Steam te devuelve aquí.",
      "roster": "La plaza 1 es el capitán con sesión iniciada. Las plazas 2 a 5 ya deben tener cuentas A.C.E. Las invitaciones siguen pendientes hasta que cada jugador acepte.",
      "badge": "Las insignias de cada puesto serán comprobaciones reales de A.C.E Shield cuando se lance el anti-cheat.",
      "support": "Abre Soporte o Contacto en este sitio web. Un aviso de soporte no abre un ticket, y el texto escrito en Contacto no se entrega.",
      "rating": "Una puntuación nueva empieza en 1.200. Esta página no vende puntuación, no abre una cola, no conecta un servidor de CS2 ni entrega premios."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Soporte"
    },
    "rankLabel": "Rango {level}",
    "noAgents": "Todavía no hay jugadores sin asignar guardados.",
    "notice": "Las invitaciones solo se envían si el capitán ha iniciado sesión. La insignia de una plaza no es una comprobación de anticheat en vivo."
  },
  "tournaments": {
    "meta": {
      "title": "Campeonato A.C.E. — Eliminatoria de élite de 100 equipos",
      "description": "La eliminatoria de 100 equipos. Haz clic en un clan para abrir su plantilla y luego cada perfil de jugador. Las inscripciones abrirán pronto."
    },
    "intro": {
      "title": "CAMPEONATO A.C.E. — ELIMINATORIA DE ÉLITE DE 100 EQUIPOS",
      "lede": "El cuadro publicado es una eliminatoria de 100 equipos. El gráfico de abajo es ese diseño. Al hacer clic en un clan se abre el panel de su plantilla. La inscripción es 0 de 100. No se anuncia ni se financia ningún premio en metálico.",
      "formatValue": "Matriz de cuadro de 100 equipos",
      "briefTitle": "Informe de operaciones de 100 equipos",
      "briefBody": "Un único formato competitivo cubre los 100 equipos. Cuando se abran las inscripciones, los primeros 28 clanes aceptados pasan directamente a la ronda 2. Los otros 72 clanes juegan la ronda 1. Los nombres de las plazas vacías son provisionales hasta que se inscriban los clanes. El reglamento completo está debajo del cuadro. Los lobbies de partida se abrirán con la beta competitiva, y los premios se confirman en cada evento."
    },
    "bracket": {
      "kicker": "Eliminatoria de 100 equipos · próximamente",
      "title": "Matriz de cuadro de 100 equipos",
      "statusUnavailable": "Las inscripciones abrirán pronto. Hasta entonces, el cuadro muestra clanes de muestra.",
      "statusEmpty": "Las inscripciones abrirán pronto. Hasta entonces, el cuadro muestra clanes de muestra.",
      "statusStored": "Los {count} clanes inscritos se colocan primero. Las plazas restantes muestran clanes de muestra. Las rondas posteriores se completan a medida que se registran partidas.",
      "openSlot": "Plaza abierta",
      "openCompetitorSlot": "Plaza de participante abierta",
      "openRoster": "Abrir la plantilla de {name}",
      "bye": "👑 [EXENTO - CABEZA DE SERIE EN RONDA 2]",
      "championStage": "FASE DEL CAMPEÓN",
      "leftWing": "Ala izquierda",
      "rightWing": "Ala derecha",
      "emptySlotNotice": "Esta plaza de participante está vacía. Todavía no hay ningún clan guardado.",
      "grandFinalNotice": "La gran final sigue abierta hasta que se registren las dos semifinales.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "CF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "Cerrar el perfil del equipo",
      "kicker": "Perfil de campeonato · vista previa",
      "matchesPlayed": "Partidas jugadas",
      "winRate": "Porcentaje de victorias combinado",
      "streak": "Racha activa de torneo",
      "rosterHeading": "Matriz de plantilla de 5 jugadores",
      "openSeat": "Plaza abierta {seat}",
      "noPlayer": "Ningún jugador guardado",
      "previous": "Clan anterior",
      "count": "Clan {index} de {total}",
      "next": "Clan siguiente",
      "close": "Cerrar perfil",
      "disclosure": "La configuración y el inventario de los jugadores aparecerán aquí cuando decidan compartirlos. A.C.E. no recopila datos de hardware."
    },
    "player": {
      "level": "NV {level} · RP {rating}",
      "record": "V–D {wins}–{losses}",
      "kdNotStored": "K/D no guardado",
      "openProfileAria": "Abrir el perfil de {name}",
      "openProfile": "Abrir perfil",
      "badge": "LISTO / CUMPLE CON EL ANTICHEAT",
      "badgeNote": "Comprobación A.C.E Shield · próximamente",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Ratón",
        "dpi": "DPI",
        "keyboard": "Teclado",
        "monitor": "Monitor",
        "headset": "Auriculares"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · no compartido",
    "gpu": "GPU · no compartida",
    "mouse": "Ratón · no compartido",
    "dpi": "DPI · no compartido",
    "keyboard": "No compartido",
    "monitor": "Frecuencia de actualización · no compartida",
    "headset": "No compartido"
  },
  "profileDisclosure": "A.C.E. no guarda inventarios de hardware y no ejecuta ningún cliente de anticheat. Los gráficos de tendencia de rendimiento y la matriz de combate requieren una sesión de A.C.E. Plus o Premium. Un enlace de perfil de Steam escrito en esta página no se guarda y no es un identificador oficial.",
  "errors": {
    "signInRequired": "Es necesario iniciar sesión.",
    "nameLength": "Los nombres de equipo deben tener entre 2 y 32 caracteres.",
    "alreadyCaptain": "Esta cuenta ya es capitana de un equipo.",
    "nameTaken": "Ya existe un equipo con ese nombre.",
    "idRequired": "Se necesita un SteamID o un ID de cuenta A.C.E.",
    "noAccountForToken": "No existe ninguna cuenta A.C.E. para ese SteamID o ID de cuenta.",
    "clanNeedsFour": "Un clan de cinco jugadores necesita al capitán con sesión iniciada más cuatro SteamID.",
    "seatNeedsId": "Cada una de las cuatro plazas necesita un SteamID o un ID de cuenta A.C.E.",
    "seatsDistinct": "Cada plaza necesita un jugador distinto.",
    "captainHoldsSeat": "El capitán ya ocupa la plaza 1. Usa otros cuatro jugadores.",
    "fewerThanFour": "Esos ID pertenecen a menos de cuatro cuentas.",
    "selfInvite": "Un capitán no puede invitar a su propia cuenta.",
    "captainOnly": "Solo el capitán designado puede enviar invitaciones.",
    "rosterLimit": "Una plantilla de CS2 tiene cinco jugadores, incluido el capitán.",
    "alreadyOnRoster": "Ese jugador ya está en la plantilla.",
    "noAccountForId": "No existe ninguna cuenta A.C.E. para ese ID.",
    "inviteNotFound": "No se encontró la invitación.",
    "inviteNotPending": "Esta invitación ya no está pendiente.",
    "rosterFull": "La plantilla ya está completa.",
    "createFailed": "No se pudo crear el equipo.",
    "inviteFailed": "La invitación falló.",
    "updateInviteFailed": "No se pudo actualizar la invitación."
  }
};
