import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  meta: {
    title: "Precios",
    description:
      "Membresía A.C.E.: Gratis {free}, Plus {plus}/mes, Premium {premium}/mes. Precios de pantalla fijados en enteros.",
  },
  period: {
    monthly: "/mes",
  },
  hero: {
    badge: "Membresía",
    title: "Niveles de acceso",
    lede: "Gratis {free}. Plus {plus}/mes. Premium {premium}/mes. Esas cifras están fijadas en enteros. Los planes de pago nunca compran puntuación ni rivales más fáciles.",
  },
  tiers: {
    free: {
      name: "GRATIS",
      note: "Grafito",
      title: "Acceso abierto",
      points: [
        "Inicia sesión con Steam OpenID. A.C.E. nunca pide una contraseña de Steam.",
        "Una puntuación guardada empieza en 1,000. Ningún resultado de partida la ha cambiado.",
        "Todas las páginas públicas: jugar, torneos, clasificación, equipos y reglas.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Carta de agradecimiento y soporte",
      points: [
        "Todo lo de Gratis.",
        "Abre una carta de agradecimiento en este sitio: qué incluye, qué no incluye y support@ace-platform.gg.",
        "No compra puntuación ni rivales más fáciles. Las insignias doradas del perfil salen de los datos de partida guardados de cada jugador. El sello élite y las insignias especiales solo aparecen si el nivel guardado ya es Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Carta de agradecimiento y escuadra de cinco jugadores",
      points: [
        "Todo lo de Gratis.",
        "Abre una carta de agradecimiento en este sitio: qué incluye, qué no incluye y support@ace-platform.gg.",
        "Después abre Escuadras: un capitán con sesión iniciada en Steam puede guardar un clan de cinco jugadores.",
        "Sin premio, arma, cola en vivo ni servidor de juego. Un clan guardado no es una plaza en el cuadro de 100 equipos.",
      ],
    },
  },
  card: {
    elite: "ÉLITE",
    stayFree: "Seguir en Gratis",
    freeNote: "Disponible ya",
    choose: "Elegir {plan}",
    chooseAria: "Elegir {plan} por {price} al mes",
  },
  billing: {
    kicker: "MATRIZ DEL CALENDARIO DE FACTURACIÓN",
    title: "Cómo funcionará la facturación cuando exista",
    body: "Plus cuesta exactamente {plus}/mes. Premium cuesta exactamente {premium}/mes.",
    display: {
      label: "01 · PANTALLA",
      body: "Gratis {free}. Plus {plus}/mes. Premium {premium}/mes. Los niveles de pago nunca compran puntuación ni rivales más fáciles.",
    },
    rolling: {
      label: "02 · CICLO RENOVABLE",
      body: "Cuando exista facturación, los cargos se renovarán en un ciclo mensual continuo. El uso de un mes parcial no es reembolsable. La cancelación detiene el siguiente ciclo y no elimina el periodo prepagado en curso.",
    },
    today: {
      label: "03 · HOY",
    },
  },
  compare: {
    kicker: "Lo que A.C.E. puede prometer hoy",
    title: "Comparación de membresías",
    note: "Cada fila refleja el estado actual del sitio. El pago llegará pronto, y un plan de pago nunca abre una cola ni compra ventaja.",
    caption: "Gratis, Plus y Premium comparados según lo que hace el sitio hoy",
    includedToday: "Incluido hoy",
    columns: {
      free: "Gratis",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Sitio público",
        detail: "Inicio, jugar, torneos, clasificación, equipos, reglas y términos.",
      },
      steamSignIn: {
        feature: "Inicio de sesión con Steam",
        detail: "Steam OpenID oficial. A.C.E. nunca pide una contraseña de Steam.",
      },
      startingRating: {
        feature: "Puntuación inicial",
        detail: "El número guardado en una cuenta nueva antes de cualquier partida registrada.",
      },
      recordedMatches: {
        feature: "Partidas registradas",
        detail: "Victorias y derrotas escritas a partir de una partida A.C.E. terminada.",
      },
      rankedQueue: {
        feature: "Cola clasificatoria",
        detail: "BUSCAR PARTIDA sigue cerrado hasta que exista una cola real.",
      },
      cs2Servers: {
        feature: "Servidores de CS2",
        detail: "Este sitio no envía una dirección de servidor ni un enlace de conexión.",
      },
      antiCheatClient: {
        feature: "Cliente de anticheat",
        detail: "No se descarga nada desde este sitio web.",
      },
      charge: {
        feature: "Cargo",
        detail: "Elegir Plus o Premium no cobra ninguna tarjeta.",
      },
      ratingForSale: {
        feature: "Puntuación en venta",
        detail: "Una etiqueta de pago nunca compra puntuación ni rivales más fáciles.",
      },
      prizeOrWeapon: {
        feature: "Premio o arma",
        detail: "No se entrega ningún skin, cuchillo ni pozo de premios.",
      },
      goldEliteSeal: {
        feature: "Sello élite e insignias especiales",
        detail:
          "Solo Premium, leído del nivel guardado en el servidor. Cosmético. El pago no establece ese nivel.",
      },
    },
    cells: {
      open: "Abierto",
      yes: "Sí",
      noneYet: "Aún ninguno",
      closed: "Cerrada",
      notConnected: "Próximamente",
      notShipped: "No disponible",
      noCharge: "Sin cargo",
      notForSale: "No está en venta",
      none: "Ninguno",
      no: "No",
      storedTierOnly: "Solo nivel guardado",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Recibo de Plus",
      metaDescription:
        "La carta de A.C.E. Plus que se muestra en este sitio web. El pago no está activo, así que no se cobra nada y no se envía ningún correo.",
      planName: "A.C.E. Plus",
      nextLabel: "Continuar en A.C.E.",
      nextBody:
        "Las páginas públicas siguen abiertas. Esta selección no abre una cola y no cambia el nivel guardado.",
    },
    premium: {
      metaTitle: "Recibo de Premium",
      metaDescription:
        "La carta de A.C.E. Premium que se muestra en este sitio web. El pago no está activo, así que no se cobra nada y no se envía ningún correo.",
      planName: "A.C.E. Premium",
      nextLabel: "Continuar a Escuadras",
      nextBody:
        "Continúa a Escuadras. La página te preguntará si formas parte de un equipo de cinco. La plaza 1 es la cuenta de Steam con sesión iniciada. Las plazas 2 a 5 son los demás jugadores. Guardar un clan sigue sin cobrar este precio.",
    },
  },
  letter: {
    kicker: "{plan} · {price} al mes",
    title: "Gracias por tu elección",
    flag: "Esta carta se muestra en el sitio web. No se envió ningún correo. No se cobró ninguna tarjeta. El pago no está activo y el nivel de membresía guardado no se ha cambiado.",
    greeting: "Estimado jugador:",
    intro:
      "Gracias por elegir {plan}. Esta página es el recibo. Recoge el precio de pantalla, lo que esa selección incluye hoy, lo que no incluye y la dirección de soporte publicada en este sitio web.",
    selected: {
      title: "Qué se ha seleccionado",
      items: [
        "Nombre del plan: {plan}.",
        "Precio de pantalla: {price} al mes. La cifra es una etiqueta, no un cargo.",
        "Pago: ninguno. Elegir este plan no cobra ninguna tarjeta.",
        "Correo: ninguno. A.C.E. no envía esta carta a ninguna bandeja de entrada.",
        "Nivel guardado: sin cambios. Las insignias especiales y el sello élite solo aparecen si la cuenta ya tiene Premium guardado.",
        "Puntuación: no está en venta. Una cuenta nueva sigue empezando en 1,000.",
      ],
    },
    today: {
      title: "Lo que puedes usar hoy",
      items: [
        "El sitio público: inicio, jugar, torneos, clasificación, equipos, reglas y términos.",
        "Inicio de sesión con Steam mediante el Steam OpenID oficial. A.C.E. nunca pide una contraseña de Steam.",
        "Las mismas páginas públicas que Gratis. Este precio no abre una cola aparte.",
      ],
    },
    excluded: {
      title: "Lo que esta selección no incluye",
      items: [
        "Una cola clasificatoria en vivo. BUSCAR PARTIDA sigue cerrado.",
        "Un servidor de Counter-Strike 2, una dirección de servidor ni un enlace de conexión.",
        "Una descarga anti-cheat. A.C.E Shield está en desarrollo.",
        "Un premio, un skin, un cuchillo ni un pozo de premios.",
        "Una plaza en el cuadro de 100 equipos. Ese cuadro sigue mostrando 0 inscritos hasta que se abra una temporada.",
        "Rivales más fáciles, una puntuación comprada ni un sitio público distinto al de Gratis.",
      ],
    },
    trouble: {
      title: "Si algo no funciona",
      items: [
        "Esperabas un cargo o un nivel de pago. No se aplicó ninguno. La cuenta sigue como estaba.",
        "Esperabas esta carta en tu bandeja de entrada. Solo existe en esta página.",
        "Steam no se conectó. Usa Conectar perfil y marca primero la casilla de los términos. Nunca escribas una contraseña de Steam en A.C.E.",
        "Necesitas ayuda. Usa la dirección de soporte de abajo o abre las páginas de ayuda de este sitio web.",
      ],
    },
    support: {
      title: "Soporte",
      addressBefore: "La dirección de soporte publicada en este sitio web es ",
      addressAfter: ".",
      helpBefore: "Ayuda en el sitio: ",
      supportLink: "Soporte",
      helpAnd: " y ",
      contactLink: "Contacto",
      rulesBefore: ". Las reglas están en ",
      rulesLink: "Reglas",
      rulesAnd: " y ",
      termsLink: "Términos",
      helpAfter:
        ". Un aviso en Soporte no abre un ticket, y el texto escrito en Contacto no se entrega.",
    },
    next: {
      title: "Siguiente paso",
    },
  },
  telemetry: {
    kicker: "TELEMETRÍA PLUS / PREMIUM",
    copy: "TELEMETRÍA DEL PANEL BLOQUEADA — Mejora tu plan de suscripción a A.C.E. Plus o Premium para desbloquear curvas de estadísticas dinámicas en tiempo real e índices de especialidad por arma.",
    cta: "Abrir las tablas de precios",
  },
};
