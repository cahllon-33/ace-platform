import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — Plataforma competitiva de CS2",
    description:
      "A.C.E. es una plataforma competitiva planificada de Counter-Strike 2 para la identidad de los jugadores, la calibración, los equipos y los torneos. Este sitio web público es una vista previa. El emparejamiento clasificatorio, el anticheat, los pagos y los premios no están activos.",
  },
  opening: {
    dialogLabel: "Apertura de A.C.E.",
    line: "A.C.E: Anticheat autónomo, calibración competitiva, jugadores de élite",
    enter: "Entrar al sitio",
  },
  hero: {
    logoAlt: "A.C.E. Anticheat autónomo, calibración competitiva, jugadores de élite",
    arenaAlt:
      "Placa de la arena A.C.E. Imagen original del escenario, no es arte de Valve. La pantalla lleva la etiqueta televisión de partidas. La emisión en directo está apagada.",
  },
  broadcast: {
    kicker: "SEGUIMIENTO DE TORNEOS",
    title: "Mesa de retransmisión",
    lede: "El grupo de mapas competitivos está en esta mesa: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis y Train. Son placas originales. No hay ningún torneo en emisión, y esta página no reproduce una partida de Valve.",
    offAir: "FUERA DE EMISIÓN · {map}",
  },
  jumpNav: {
    label: "Categorías de inicio",
    play: "Jugar",
    prizes: "Premios",
    teams: "Equipos",
    leaderboard: "Clasificación",
    ranks: "Rangos",
    systems: "Sistemas",
  },
  charter: {
    kicker: "ESPACIO MAESTRO DEL LOBBY",
    title: "LOBBY DE EMPAREJAMIENTO COMPETITIVO Y CENTRO DE DESPACHO A.C.E.",
    badge: "SERVIDORES · PRÓXIMAMENTE",
    lede: "Este lobby no asigna un servidor, no inicia un cliente de anticheat y no paga ningún premio.",
    modules: [
      {
        kicker: "PARTIDA ENCONTRADA · 5v5",
        copy: "El marco 5v5 de esta página es una cola cerrada. No asigna un servidor.",
        chips: ["SIN SERVIDOR DE 128 TICKS", "COLA CERRADA"],
      },
      {
        kicker: "RANGOS 3D FIJOS",
        copy: "Diez escalones, de Recruit a A.C.E. Legend. Una puntuación guardada aparece después de iniciar sesión con Steam. Esta página no aplica ninguna partida.",
        chips: ["REGLA DE PUNTUACIÓN REGISTRADA", "TORNO EN ESTA PÁGINA"],
      },
      {
        kicker: "RECOMPENSAS DE SKINS",
        copy: "Las recompensas del campeonato se anuncian con cada evento.",
        chips: ["NINGÚN OBJETO ENTREGADO", "SIN COMPROBACIÓN DE BOTÍN"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Perfil_del_jugador]",
    notAvailable: "n/d",
    elite: "ÉLITE",
  },
  membership: {
    compareLink: "Ver la tabla comparativa completa",
  },
  loot: {
    exampleCard: "Próximamente",
    wear: {
      factoryNew: "Recién fabricado",
      minimalWear: "Casi nuevo",
    },
  },
  serverHub: {
    badge: "SERVIDORES DE JUEGO · PRÓXIMAMENTE",
    nodes: {
      fra: "Nodo perimetral Fráncfort",
      sto: "Núcleo Estocolmo",
      tlv: "Relé Tel Aviv",
    },
    tileAria: "{name}. Servidor próximamente.",
    tileSample: "Próximamente · {sample}",
    note: "Los servidores regionales de 128 ticks llegarán con la beta competitiva.",
  },
  telemetry: {
    badge: "VISTA PREVIA · PRÓXIMAMENTE",
    lines: [
      "A.C.E SHIELD: EN DESARROLLO",
      "MATRIZ DE BLOQUEO DE HARDWARE: NO SE RECOGE NINGÚN IDENTIFICADOR",
      "ENLACE A.C.E. SHIELD: NO HAY NINGÚN CLIENTE INSTALADO",
    ],
    note: "Este sitio web no ejecuta un cliente de núcleo, no analiza la memoria y no aplica ningún bloqueo de hardware.",
  },
  comingSoon: {
    badge: "NO DISPONIBLE",
    body: "El cliente de escritorio de A.C.E. no se ofrece para descargar. La temporada 1 en este sitio web no instala software ni abre ningún registro de entrada.",
  },
  operative: {
    kicker: "Ventana táctica cinematográfica · entorno CSS original · no es arte de Valve",
    title: "Profundiza en CS2: la plataforma competitiva definitiva",
    lede: "Partidas más justas, mejores compañeros. Rangos que importan, recompensas que cuentan.",
    note: "Texto de campaña. Las colas clasificatorias, los servidores en vivo y los premios no están activos.",
    hudLeft: "CT — SITIO A",
    hudRight: "T — AVANCE POR MEDIO",
    hudCenter: "ENTORNO DEL EQUIPO",
    plannedReason: "El juego clasificatorio sigue cerrado hasta que se implemente y verifique una integración de anticheat real.",
  },
  howStatus: {
    label: "SUBSISTEMA DE REGISTRO A.C.E. — MOTOR DE CALIBRACIÓN LISTO",
    note: "Las colas clasificatorias abrirán cuando A.C.E Shield y la calibración estén activos.",
  },
  shell: {
    primaryNav: "Principal",
    mobileNav: "Móvil",
    elite: "ÉLITE",
    notificationsTitle: "Notificaciones · próximamente",
    notificationsAria: "Notificaciones. Cero sin leer.",
    connectProfileTitle: "Conectar perfil",
    openProfileAria: "Abrir el perfil del puesto de mando",
    connectProfileAria: "Conectar perfil mediante Steam OpenID",
    signOutAria: "Cerrar sesión en A.C.E.",
  },
  notFound: {
    kicker: "EXCEPCIÓN DE CUADRÍCULA",
    title: "ERROR 404 — TELEMETRÍA DE RADAR PERDIDA",
    body: "La coordenada que has solicitado no existe en nuestra cuadrícula de servidores activa.",
    homeAria: "Volver al lobby de la página de inicio de A.C.E.",
    cta: "VOLVER AL LOBBY",
  },
  error: {
    kicker: "Error",
    title: "Algo salió mal",
    body: "No se pudo mostrar esta página pública. Puedes intentarlo de nuevo. En este sitio web de vista previa no se solicitaron datos de la cuenta.",
    retryAria: "Recargar esta página",
    retry: "Intentar de nuevo",
  },
};
