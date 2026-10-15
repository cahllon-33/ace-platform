import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "EXHIBICIÓN · Jugadores de muestra, no es una partida en directo. La cola está cerrada.",
    "showcaseShort": "EXHIBICIÓN",
    "queueClosed": "COLA CERRADA",
    "floorRp": "Mínimo del rango {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar de {name}",
    "sampleChat": "Líneas de muestra. No enviadas, no en directo.",
    "sampleLine": "MUESTRA",
    "operatorA": "Arte original de operador A.C.E para el equipo A: un operador táctico con casco, equipo antracita y detalles dorados",
    "operatorB": "Arte original de operador A.C.E para el equipo B: un combatiente rebelde encapuchado, equipo antracita y detalles dorados",
    "artNote": "Arte original de personajes A.C.E. No son modelos del juego."
  },
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
};
