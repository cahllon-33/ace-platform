import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  premiumExtras: {
    "card": {
      "previewTag": "VISTA PREVIA",
      "previewNote": "Vista previa de la tarjeta de perfil Premium animada. El nombre y los valores son ejemplos. Un perfil real solo muestra esta tarjeta cuando su plan guardado es Premium.",
      "planTag": "A.C.E PREMIUM",
      "seal": "SELLO ELITE",
      "rank": "Rango",
      "rating": "Rating",
      "sampleName": "Jugador de ejemplo",
      "ownTitle": "Tu tarjeta de perfil Premium"
    },
    "analysis": {
      "metaTitle": "Análisis de partida ampliado",
      "metaDescription": "Diseño del análisis de partidas Premium: mapa de calor de muertes, porcentaje de headshots y rendimiento por ronda. Próximamente, cuando exista el análisis de demos.",
      "kicker": "PREMIUM · ANÁLISIS DE PARTIDA",
      "title": "Análisis de partida ampliado",
      "lede": "Un mapa de calor de muertes, el porcentaje de headshots y el rendimiento por ronda de tus partidas registradas. Requiere análisis de demos, que aún no existe.",
      "sampleTag": "DISEÑO DE EJEMPLO — NO SON TUS DATOS",
      "soon": "Próximamente",
      "soonCaption": "Se completará cuando exista el análisis de demos. Nada de lo que hay abajo es una estadística real.",
      "heatmap": "Mapa de calor de muertes",
      "headshot": "% de headshots",
      "rounds": "Rendimiento por ronda",
      "noData": "Sin datos",
      "locked": "El análisis de partida ampliado forma parte de A.C.E Premium (7 $/mes). Próximamente: el pago aún no existe, así que hoy ninguna cuenta es Premium.",
      "premiumNote": "Tu plan es Premium. Tu análisis aparecerá aquí cuando exista el análisis de demos.",
      "signIn": "Inicia sesión con Steam para comprobar tu acceso al análisis.",
      "plansLink": "Ver planes"
    },
    "terms": {
      "metaTitle": "Condiciones Premium",
      "metaDescription": "Qué incluyen A.C.E Plus y Premium, qué no incluye ningún plan y cómo funciona la cancelación.",
      "kicker": "ACE-LEGAL / CONDICIONES PREMIUM",
      "title": "Condiciones de A.C.E Premium",
      "intro": "Estas condiciones describen qué incluyen los planes de pago. Complementan los Términos de servicio en /terms. El pago aún no existe, así que hoy no se puede comprar nada.",
      "pricesTitle": "1. Planes, precios y cancelación",
      "prices": "Free {free}. Plus {plus} al mes. Premium {premium} al mes. Los planes se renuevan cada mes. Puedes cancelar en cualquier momento en los ajustes del panel sin penalización. Los meses parciales no se reembolsan, como indican los Términos de servicio.",
      "plusTitle": "2. Qué incluye Plus",
      "plus1": "Todo lo de Free.",
      "plus2": "Próximamente: una carta de agradecimiento y soporte por correo en support@ace-platform.gg, cuando exista el pago.",
      "premiumTitle": "3. Qué incluye Premium",
      "prem1": "Todo lo de Plus.",
      "prem2": "Arte de rango Premium: el conjunto original ilustrado de emblemas A.C.E. en tu perfil.",
      "prem3": "La tarjeta de perfil Premium animada.",
      "prem4": "Insignias especiales y el SELLO ELITE.",
      "prem5": "Próximamente: análisis de partida ampliado (mapa de calor de muertes, % de headshots, rendimiento por ronda), cuando exista el análisis de demos.",
      "prem6": "Acceso anticipado a funciones beta cuando se abra una beta.",
      "prem7": "Soporte prioritario con un objetivo de respuesta de 72 horas. Es un objetivo, no una garantía.",
      "neverTitle": "4. Qué no incluye ningún plan",
      "never": "Ningún plan da ventaja competitiva. Ningún plan añade Rating Points ni aumenta un rating. Ningún plan da ventaja en el emparejamiento, cola prioritaria ni rivales más fáciles.",
      "soonTitle": "5. Funciones próximamente",
      "soon": "Nada marcado como Próximamente está prometido hasta que se publique. Hasta entonces, el precio no lo incluye.",
      "languageTitle": "6. Idioma",
      "language": "Las traducciones se ofrecen por comodidad. Si una traducción difiere del texto en inglés, se aplica el texto en inglés.",
      "contact": "Preguntas: support@ace-platform.gg",
      "footerLink": "Condiciones Premium",
      "pricingLink": "Leer las condiciones Premium"
    }
  },
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
        "Próximamente: la carta de agradecimiento (qué incluye, qué no y support@ace-platform.gg) solo se abre cuando exista el pago. Hoy el botón está desactivado.",
        "No compra puntuación ni rivales más fáciles. Las insignias doradas del perfil salen de los datos de partida guardados de cada jugador. El sello élite y las insignias especiales solo aparecen si el nivel guardado ya es Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Arte de perfil, insignias y análisis",
      points: [
        "Todo lo de Plus.",
        "Arte de rango Premium, la tarjeta de perfil animada, insignias especiales y el SELLO ELITE.",
        "Próximamente: análisis de partida ampliado, acceso anticipado a betas y soporte prioritario (objetivo de respuesta de 72 horas).",
        "Sin ventaja competitiva: sin aumento de Rating Points ni ventaja en el emparejamiento.",
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
