import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Jugar",
    description: "El emparejamiento clasificatorio 5v5 abrirá cuando el anti-cheat A.C.E Shield esté activo.",
  },
  boards: {
    label: "Tablones de cola",
    title: "Tres tablones 5v5",
    note: "La elección se queda en esta página. La búsqueda clasificatoria está cerrada, y elegir un tablón no busca rivales.",
    items: {
      open: {
        name: "Tablón abierto",
        rules: [
          "Un grupo de cualquier tamaño, hasta cinco",
          "Sin margen de puntuación",
          "Steam OpenID es la comprobación de identidad",
          "Pensado para práctica abierta cuando exista una cola",
        ],
      },
      calibration: {
        name: "Tablón de calibración",
        rules: [
          "En solitario, dúo o trío",
          "Un margen previsto de {points} puntos de puntuación",
          "Ya debe haber un perfil de Steam guardado",
          "Usa la regla de puntuación de A.C.E. · búsqueda próximamente",
        ],
      },
      elite: {
        name: "Tablón de élite",
        rules: [
          "En solitario o dúo",
          "Un margen previsto de {points} puntos de puntuación",
          "La membresía guardada debe ser Plus o Premium",
          "Entrada escrita más estricta. No hay ningún pozo de premios asociado",
        ],
      },
    },
  },
  veto: {
    kicker: "VETO DE MAPAS",
    title: "Elige el mapa",
    lede: "Descarta mapas hasta que quede uno. Este lobby no inicia Counter-Strike 2 y no abre ningún servidor.",
    mapSelected: "Mapa seleccionado: {map}",
    yourBan: "Tu veto",
    opponentBan: "Veto del rival",
    selected: "Seleccionado",
    declined: "Descartado",
    decline: "Descartar",
    reset: "Reiniciar veto",
    declinedToast: "{map} se ha descartado. Esta página no abre ningún servidor.",
    lockKicker: "SALA DE PARTIDA 5v5",
    lockTitle: "{map} es el mapa restante",
    lockBody:
      "Tu sala de partida. Las partidas competitivas empezarán aquí cuando abra la beta competitiva.",
    close: "Cerrar",
  },
  arena: {
    ariaLabel: "Vista previa de la sala de partida",
    captain: "Capitán",
    ping: "Ping {ping}",
    mapPlates: "Placas de mapa",
    selectMap: "Seleccionar {map}",
    settings: {
      region: "Región",
      mode: "Modo",
      antiCheat: "Anticheat",
      simulator: "Vista previa",
    },
    chat: {
      title: "CHAT DE EQUIPO",
      kicker: "CHAT DE EQUIPO · PRÓXIMAMENTE",
      captainName: "{name} (Capitán)",
      layoutName: "{name}",
      samples: ["gl hf", "vamos allá", "dust 2 nos viene bien", "listo"],
      inputLabel: "Mensaje del chat de equipo",
      placeholder: "Escribe al equipo…",
      send: "Enviar",
    },
    tiles: {
      map: "Mapa",
      server: "Servidor",
      serverValue: "EU Oeste · próximamente",
      mode: "Modo",
    },
    identity: {
      title: "VERIFICACIÓN DE IDENTIDAD",
      kicker: "VERIFICACIÓN DE IDENTIDAD · PRÓXIMAMENTE",
      rows: [
        "Verificación de correo · próximamente",
        "Verificación de teléfono · próximamente",
        "Verificación facial · próximamente",
      ],
    },
    security: {
      title: "SEGURIDAD DE PARTIDA",
      kicker: "A.C.E SHIELD · EN DESARROLLO",
      rows: [
        "Protección anti-cheat · en desarrollo",
        "Comprobación de integridad del servidor · en desarrollo",
        "Cifrado de datos de partida · en desarrollo",
      ],
    },
    findMatchReason: "El emparejamiento se abrirá con la beta competitiva. Las colas clasificatorias aún no están en marcha.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} se unirá a una plantilla cuando abran las partidas.",
    banner: "ARENA · BETA COMPETITIVA PRÓXIMAMENTE",
    mapPlate: "PLACA DE MAPA · DUST II · SIN SERVIDOR DE 128 TICKS",
    rosterNote: "Indicativos de muestra.",
    teamA: "EQUIPO A · TACTICAL ALLIANCE",
    teamB: "EQUIPO B · SHADOW LEGION",
    clockLabel: "RELOJ DE PARTIDA",
    clockNote: "Este reloj se repite en bucle. La cola está cerrada.",
    chatKicker: "CHAT DE EQUIPO",
    chatLines: [
      "En espera hasta que se reinicie el reloj.",
      "Dust II es una placa de mapa en esta página.",
      "No hay ningún servidor conectado para esta plantilla.",
    ],
    chatField: "Los mensajes no se envían.",
    identityKicker: "CUADRÍCULA DE IDENTIDAD",
    identityRows: [
      "No se envía correo con el ticket de partida.",
      "No se está ejecutando ninguna comprobación de núcleo.",
      "La telemetría en directo llegará con la beta competitiva.",
    ],
    findMatch: "BUSCAR PARTIDA COMPETITIVA",
    closedNotice: "El emparejamiento se abrirá con la beta competitiva. Las colas clasificatorias aún no están en marcha.",
  },
};
