import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "liveStats": {
    "kicker": "EN VIVO",
    "online": "En línea ahora",
    "registered": "Jugadores registrados",
    "earlyTitle": "Acceso anticipado",
    "earlyBody": "Únete a los primeros jugadores de A.C.E. Los contadores en vivo aparecerán aquí cuando crezca la comunidad.",
    "unavailable": "Los contadores en vivo no están disponibles ahora.",
    "note": "Cifras reales, actualizadas cada 30 segundos."
  },
  "ops": {
    "identityKicker": "CENTRO DE IDENTIDAD",
    "signedOutTitle": "Inicia sesión con Steam",
    "signedOutBody": "Conéctate con Steam OpenID oficial para ver aquí tu avatar de Steam, tu emblema de rango y tus Rating Points. A.C.E. nunca pide una contraseña de Steam.",
    "connect": "Iniciar sesión con Steam",
    "openDeck": "Abrir Command Deck",
    "avatarAlt": "Avatar de Steam de {name}",
    "emblemAlt": "Emblema de rango {rank}",
    "rp": "Rating Points",
    "wins": "Victorias",
    "losses": "Derrotas",
    "winRate": "% de victorias",
    "matches": "Partidas",
    "kd": "K/D",
    "na": "n/d",
    "kdNote": "El K/D muestra n/d porque A.C.E. aún no registra bajas ni muertes.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "EN DESARROLLO",
    "shieldTitle": "Estado de integridad",
    "shieldBody": "A.C.E Shield está en desarrollo. Hoy no se instala, analiza ni supervisa nada, así que ninguna cuenta tiene un veredicto de integridad.",
    "shieldClient": "Cliente antitrampas",
    "shieldClientValue": "No publicado",
    "shieldServer": "Servidores de partida",
    "shieldServerValue": "No conectados",
    "shieldHardware": "Análisis de hardware",
    "shieldHardwareValue": "No recopilado",
    "shieldLink": "Cómo funcionará A.C.E Shield",
    "seasonKicker": "TEMPORADA 1",
    "seasonChip": "FECHAS SIN ANUNCIAR",
    "seasonTitle": "Seguimiento de la temporada 1",
    "seasonBody": "La temporada 1 aún no tiene fecha de inicio ni de fin, así que no hay cuenta atrás. Las fechas se publicarán en este sitio antes de que empiece la temporada.",
    "statsKicker": "TUS ESTADÍSTICAS",
    "statsSignedOut": "Inicia sesión con Steam para ver tus estadísticas.",
    "statsEmpty": "Aún no hay partidas registradas. Las victorias y derrotas aparecen tras tu primera partida A.C.E. registrada.",
    "statsLive": "Las victorias y derrotas provienen de tu cuenta A.C.E. guardada.",
    "statsLink": "Abrir estadísticas de jugador"
  },
  "meta": {
    "title": "A.C.E. — Plataforma competitiva de CS2",
    "description": "A.C.E. es una plataforma competitiva planificada de Counter-Strike 2 para la identidad de los jugadores, la calibración, los equipos y los torneos. Este sitio web público es una vista previa. El emparejamiento clasificatorio, el anticheat, los pagos y los premios no están activos."
  },
  "opening": {
    "dialogLabel": "Apertura de A.C.E.",
    "line": "A.C.E: Anticheat autónomo, calibración competitiva, jugadores de élite",
    "enter": "Entrar al sitio"
  },
  "hero": {
    "logoAlt": "A.C.E. Anticheat autónomo, calibración competitiva, jugadores de élite",
    "arenaAlt": "Placa de la arena A.C.E. Imagen original del escenario, no es arte de Valve. La pantalla lleva la etiqueta televisión de partidas. La emisión en directo está apagada."
  },
  "broadcast": {
    "kicker": "SEGUIMIENTO DE TORNEOS",
    "title": "Mesa de retransmisión",
    "lede": "El grupo de mapas competitivos está en esta mesa: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis y Train. Son placas originales. No hay ningún torneo en emisión, y esta página no reproduce una partida de Valve.",
    "offAir": "FUERA DE EMISIÓN · {map}"
  },
  "jumpNav": {
    "label": "Categorías de inicio",
    "play": "Jugar",
    "prizes": "Premios",
    "teams": "Equipos",
    "leaderboard": "Clasificación",
    "ranks": "Rangos",
    "systems": "Sistemas"
  },
  "charter": {
    "kicker": "ESPACIO MAESTRO DEL LOBBY",
    "title": "LOBBY DE EMPAREJAMIENTO COMPETITIVO Y CENTRO DE DESPACHO A.C.E.",
    "badge": "SERVIDORES · PRÓXIMAMENTE",
    "lede": "Este lobby no asigna un servidor, no inicia un cliente de anticheat y no paga ningún premio.",
    "modules": [
      {
        "kicker": "PARTIDA ENCONTRADA · 5v5",
        "copy": "El marco 5v5 de esta página es una cola cerrada. No asigna un servidor.",
        "chips": [
          "SIN SERVIDOR DE 128 TICKS",
          "COLA CERRADA"
        ]
      },
      {
        "kicker": "RANGOS 3D FIJOS",
        "copy": "Diez escalones, de Recruit a A.C.E. Legend. Una puntuación guardada aparece después de iniciar sesión con Steam. Esta página no aplica ninguna partida.",
        "chips": [
          "REGLA DE PUNTUACIÓN REGISTRADA",
          "TORNO EN ESTA PÁGINA"
        ]
      },
      {
        "kicker": "RECOMPENSAS DE SKINS",
        "copy": "Las recompensas del campeonato se anuncian con cada evento.",
        "chips": [
          "NINGÚN OBJETO ENTREGADO",
          "SIN COMPROBACIÓN DE BOTÍN"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ÉLITE"
  },
  "membership": {
    "compareLink": "Ver la tabla comparativa completa"
  },
  "loot": {
    "wear": {
      "factoryNew": "Recién fabricado",
      "minimalWear": "Casi nuevo"
    }
  },
  "serverHub": {
    "badge": "SERVIDORES DE JUEGO · PRÓXIMAMENTE",
    "nodes": {
      "fra": "Nodo perimetral Fráncfort",
      "sto": "Núcleo Estocolmo",
      "tlv": "Relé Tel Aviv"
    },
    "tileAria": "{name}. Servidor próximamente.",
    "note": "Los servidores regionales de 128 ticks llegarán con la beta competitiva."
  },
  "telemetry": {
    "badge": "VISTA PREVIA · PRÓXIMAMENTE",
    "lines": [
      "A.C.E SHIELD: EN DESARROLLO",
      "MATRIZ DE BLOQUEO DE HARDWARE: NO SE RECOGE NINGÚN IDENTIFICADOR",
      "ENLACE A.C.E. SHIELD: NO HAY NINGÚN CLIENTE INSTALADO"
    ],
    "note": "Este sitio web no ejecuta un cliente de núcleo, no analiza la memoria y no aplica ningún bloqueo de hardware."
  },
  "comingSoon": {
    "badge": "NO DISPONIBLE",
    "body": "El cliente de escritorio de A.C.E. no se ofrece para descargar. La temporada 1 en este sitio web no instala software ni abre ningún registro de entrada."
  },
  "operative": {
    "kicker": "Ventana táctica cinematográfica · entorno CSS original · no es arte de Valve",
    "title": "Profundiza en CS2: la plataforma competitiva definitiva",
    "lede": "Partidas más justas, mejores compañeros. Rangos que importan, recompensas que cuentan.",
    "note": "Texto de campaña. Las colas clasificatorias, los servidores en vivo y los premios no están activos."
  },
  "howStatus": {
    "label": "SUBSISTEMA DE REGISTRO A.C.E. — MOTOR DE CALIBRACIÓN LISTO",
    "note": "Las colas clasificatorias abrirán cuando A.C.E Shield y la calibración estén activos."
  },
  "shell": {
    "primaryNav": "Principal",
    "mobileNav": "Móvil",
    "elite": "ÉLITE",
    "notificationsTitle": "Notificaciones · próximamente",
    "notificationsAria": "Notificaciones. Cero sin leer.",
    "connectProfileTitle": "Conectar perfil",
    "openProfileAria": "Abrir el perfil del puesto de mando",
    "connectProfileAria": "Conectar perfil mediante Steam OpenID",
    "signOutAria": "Cerrar sesión en A.C.E."
  },
  "notFound": {
    "kicker": "EXCEPCIÓN DE CUADRÍCULA",
    "title": "ERROR 404 — TELEMETRÍA DE RADAR PERDIDA",
    "body": "La coordenada que has solicitado no existe en nuestra cuadrícula de servidores activa.",
    "homeAria": "Volver al lobby de la página de inicio de A.C.E.",
    "cta": "VOLVER AL LOBBY"
  },
  "error": {
    "kicker": "Error",
    "title": "Algo salió mal",
    "body": "No se pudo mostrar esta página pública. Puedes intentarlo de nuevo. En este sitio web de vista previa no se solicitaron datos de la cuenta.",
    "retryAria": "Recargar esta página",
    "retry": "Intentar de nuevo"
  }
};
