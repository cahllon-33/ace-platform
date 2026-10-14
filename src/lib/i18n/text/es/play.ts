import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Jugar",
    description: "El emparejamiento clasificatorio 5v5 permanece cerrado ante fallo hasta que el anticheat sea real.",
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
          "Usa la regla de puntuación de A.C.E., sin búsqueda en vivo",
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
    lockKicker: "DISEÑO 5v5",
    lockTitle: "{map} es el mapa restante",
    lockBody:
      "La plantilla de abajo es un diseño. Esta página no carga una partida competitiva, no mete a los jugadores en una partida y no envía una dirección de servidor.",
    close: "Cerrar",
  },
  arena: {
    ariaLabel: "Vista previa del diseño de partida encontrada",
    captain: "Capitán",
    ping: "Ping {ping}",
    mapPlates: "Placas de mapa",
    selectMap: "Seleccionar la placa de mapa de diseño {map}",
    settings: {
      region: "Región",
      mode: "Modo",
      antiCheat: "Anticheat",
      simulator: "Simulador",
    },
    chat: {
      title: "CHAT DE EQUIPO",
      kicker: "TERMINAL SIMULADA · SIN CONEXIÓN DE RED",
      captainName: "{name} (Capitán)",
      layoutName: "{name} (diseño)",
      samples: ["gl hf", "vamos allá", "dust 2 nos viene bien", "listo"],
      inputLabel: "Mensaje de chat de diseño",
      placeholder: "Mensaje al equipo… (solo diseño)",
      send: "Añadir línea de chat de diseño",
    },
    tiles: {
      map: "Mapa",
      server: "Servidor",
      serverValue: "EU Oeste · {ping} (muestra)",
      mode: "Modo",
    },
    identity: {
      title: "VERIFICACIÓN DE IDENTIDAD",
      kicker: "COMPROBACIONES DE DISEÑO · NO SON PROVEEDORES EN VIVO",
      rows: [
        "Código de correo verificado (diseño)",
        "Código SMS de teléfono verificado (diseño)",
        "Escaneo facial en vivo verificado (diseño)",
      ],
    },
    security: {
      title: "SEGURIDAD DE PARTIDA",
      kicker: "SIMULADOR · IA NO DESPLEGADA",
      rows: [
        "Protección anticheat — pulso de diseño",
        "Comprobación de integridad del servidor — simulada",
        "Datos de partida cifrados — conceptual",
      ],
    },
    findMatchReason: "BUSCAR PARTIDA no puede abrir un servidor de CS2 en vivo. El modo clasificatorio está cerrado ante fallo. La población es 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} no está incluido en esta plantilla de diseño.",
    banner: "DISEÑO DE ARENA · NO ES UNA PARTIDA EN VIVO",
    mapPlate: "PLACA DE MAPA · DUST II · SIN SERVIDOR DE 128 TICKS",
    rosterNote: "Alias de diseño. No es una plantilla conectada.",
    teamA: "EQUIPO A · TACTICAL ALLIANCE",
    teamB: "EQUIPO B · SHADOW LEGION",
    clockLabel: "RELOJ DE DISEÑO",
    clockNote: "Este reloj se repite en bucle. La cola está cerrada.",
    chatKicker: "CHAT DE EQUIPO",
    chatLines: [
      "Manteniendo el diseño hasta que el reloj se reinicie.",
      "Dust II es una placa de mapa en esta página.",
      "No hay ningún servidor conectado para esta plantilla.",
    ],
    chatField: "Los mensajes no se envían.",
    identityKicker: "CUADRÍCULA DE IDENTIDAD",
    identityRows: [
      "No se envía correo con el ticket de partida.",
      "No se está ejecutando ninguna comprobación de núcleo.",
      "No hay ningún flujo de telemetría en vivo conectado.",
    ],
    findMatch: "BUSCAR PARTIDA COMPETITIVA",
    closedNotice: "Este botón no abre ningún servidor. La cola clasificatoria está cerrada. La población es 0.",
  },
};
