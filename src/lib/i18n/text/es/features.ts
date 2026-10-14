import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  page: {
    meta: {
      title: "Funciones",
      description:
        "Arquitectura especificada del núcleo anticheat de A.C.E., vinculación biométrica por escaneo facial y diez escalones de calibración de habilidad. Estos sistemas no están en vivo en este sitio web.",
    },
    header: {
      kicker: "ACE-FEATURES / NÚCLEO / ESCANEO FACIAL / CALIBRACIÓN",
      title: "Especificación de funciones de la plataforma",
      lede: "Esta página es el mapa técnico de nivel de producción de tres sistemas previstos de A.C.E.: el núcleo anticheat autónomo, la vinculación biométrica por escaneo facial y la escalera de calibración de habilidad de diez escalones. Nada en esta página es un núcleo en vivo, un producto de cámara en vivo ni una cola clasificatoria en vivo. Steam OpenID, los equipos 5v5, los diseños de cuadro y el cálculo de puntuación de tipo Elo existen en este repositorio. Los servidores dedicados de CS2, los pagos, los premios y un cliente de integridad descargable no existen.",
    },
    kernel: {
      title: "Arquitectura del núcleo anticheat",
      paragraphs: [
        "La Envoltura segura autónoma especificada es un cliente de integridad vinculado al hardware que se ejecutaría junto a Counter-Strike 2 en el equipo del jugador y comunicaría un estado firmado ALLOW o DENY a los servidores gestionados por A.C.E. El diseño del núcleo se cierra ante fallo: si el cliente falta, está detenido, desactualizado, suplantado o no verificado, se deniega la admisión clasificatoria. El navegador nunca decide la elegibilidad. BUSCAR PARTIDA clasificatorio en este sitio web ya se cierra ante fallo por ese motivo.",
        "Las capas previstas del núcleo incluyen un enlace en modo usuario que vincula el SteamID verificado de 64 bits a la cuenta A.C.E., una superficie de certificación del identificador de hardware (HWID), una lista de vigilancia de firmas de familias de trampas conocidas y una ruta de elegibilidad de servidor a servidor protegida por un secreto compartido. Una validación de firma de trampas, una comprobación de integridad rechazada o un identificador de dispositivo suplantado se especifican para producir un cambio inmediato del estado de la cuenta a BANNED o PERM_BANNED y, cuando exista un producto de facturación, la pérdida total del tiempo de suscripción prepagado sin ninguna obligación de reembolso. Con este sitio web no se entrega ningún cliente de ese tipo. Las tarjetas de descarga Próximamente son solo diseño.",
      ],
      stats: [
        { label: "ESTADO DEL NÚCLEO", value: "No desplegado" },
        { label: "COLA CLASIFICATORIA", value: "Cerrada ante fallo" },
        { label: "ALMACÉN DE HWID", value: "No se recoge en este sitio" },
      ],
    },
    faceScan: {
      title: "Vinculación biométrica por escaneo facial",
      paragraphs: [
        "El escaneo facial es una capa futura de vinculación de identidad especificada, no un producto de cámara en este sitio web. El diseño previsto, solo tras un consentimiento explícito y una revisión legal aparte, vincularía una plantilla facial con prueba de vida a la misma cuenta A.C.E. que ya tiene un SteamID verificado por el servidor. El objetivo es impedir que se comparta una cuenta para eludir una restricción previa. A.C.E. no recoge hoy imágenes faciales, representaciones faciales, direcciones de correo ni huellas de hardware. La postura de privacidad en vigor sigue siendo la de estricta necesidad: solo el SteamID verificado de 64 bits y el nombre visible público de Steam.",
        "Si alguna vez se implementa el escaneo facial, no sustituirá a Steam OpenID, no se usará para vender publicidad conductual y no desbloqueará por sí solo las colas clasificatorias. La admisión clasificatoria seguirá exigiendo una vía de anticheat verificada. Hasta que exista esa revisión, cualquier panel de escaneo facial en el lobby es un marcador de diseño.",
      ],
    },
    calibration: {
      title: "Diez escalones de calibración de habilidad",
      intro:
        "La calibración competitiva usa una fórmula documentada de tipo Elo (versión {version}, factor K {kFactor}, escala {scale}). Las cuentas nuevas empiezan en el rango 1 (Recruit), con suscripción GRATIS, estado ACTIVO y {startingRating} de puntuación competitiva. Las etiquetas de cristal del lobby son alias visuales. Los cosméticos de pago nunca compran puntuación, rivales más fáciles, servidores de 128 ticks ni prioridad en la cola. No hay ningún producto de 128 ticks en vivo a la venta.",
      table: {
        level: "Nivel",
        engineName: "Nombre del motor",
        crystalAlias: "Alias de cristal",
        minRating: "Puntuación mín.",
      },
      divisions: {
        before:
          "Las divisiones I, II y III del lobby son fichas de muestra. Solo cambian métricas de diseño. El emparejamiento en vivo por división no existe. Consulta ",
        middle: " para el torno 3D y ",
        after: " para el texto de competición vinculante.",
      },
    },
  },
  loot: {
    kicker: "Cosméticos de prueba · pago simulado",
    title: "ARQUITECTURA DE BOTÍN A.C.E. — BOTINES DE ARMAS",
    lede: "Nombres de acabado originales de A.C.E. sobre tipos de armas de CS2. No son objetos de Valve, no son skins intercambiables y no son premios reales. Los pagos son simulados.",
    mockDrop: "Botín simulado",
    multiplierLabel: "Requisitos del multiplicador de porcentaje de victorias",
    ladderLabel: "Botines semanales de la escalera",
    multiplierValue: "Plantilla {multiplier}×",
    ladderValue: "Hueco semanal · simulado",
    checkout: "Pago simulado",
  },
  communityRail: {
    kicker: "Feed de diseño · no está en vivo",
    newsTitle: "Últimas noticias de la escalera",
    newsItems: [
      "El cuadro sigue vacío: 0 de 100 equipos.",
      "La búsqueda clasificatoria sigue cerrada hasta que exista el anticheat.",
    ],
    prizesTitle: "Premios diarios de skins",
    prizesBody:
      "No se entregan premios. Las tarjetas de cosméticos de este sitio son simulaciones de prueba. Los pagos son simulados.",
  },
  identityPreview: {
    badge: "Vista previa: no confirmado",
    cards: {
      faceScan: {
        title: "Escaneo facial en vivo verificado",
        copy: "La prueba de vida de identidad es una comprobación prevista de un proveedor. Esta tarjeta es una vista previa de diseño. No se ha realizado ningún escaneo ni se guardan datos biométricos.",
      },
      hardwareId: {
        title: "ID de hardware vinculado",
        copy: "La vinculación del dispositivo es una señal de integridad prevista. Esta tarjeta es una vista previa de diseño. No se ha recogido ninguna huella de hardware.",
      },
    },
  },
  preview: {
    fallbackTitle: "Vista previa",
    kicker: "Destino de diseño · no es un producto en vivo",
    returnHome: "Volver al inicio",
    pages: {
      support: {
        title: "Soporte",
        body: "Todavía no hay un servicio de soporte público atendido. Este enlace es un destino provisional del pie de página.",
      },
      "anti-cheat": {
        title: "Resumen del anticheat",
        body: "A.C.E. no tiene un producto de anticheat funcional. El emparejamiento clasificatorio sigue cerrado hasta que exista una integración real.",
      },
      "download-client": {
        title: "Descargar cliente",
        body: "No hay ningún cliente de escritorio de A.C.E. para descargar. Un cliente nativo no forma parte de la etapa web actual.",
      },
      "mobile-app": {
        title: "Aplicación móvil",
        body: "No hay ninguna aplicación móvil de A.C.E. Esto es solo un enlace de diseño del pie de página.",
      },
      news: {
        title: "Noticias",
        body: "No hay una sala de noticias en vivo. Esto es solo un enlace de diseño del pie de página.",
      },
      about: {
        title: "Quiénes somos",
        body: "A.C.E. es un sitio independiente de competición de Counter-Strike 2 en vista previa pública. No está afiliado a Valve.",
      },
      advertising: {
        title: "Publicidad",
        body: "No hay espacios publicitarios a la venta. Esto es solo un enlace de diseño del pie de página.",
      },
      developers: {
        title: "Desarrolladores",
        body: "Todavía no hay un programa público para desarrolladores. Las API de elegibilidad de servidores de este repositorio son adaptadores internos, no un SDK para socios.",
      },
      press: {
        title: "Prensa",
        body: "No hay kit de prensa ni sala de noticias. Esto es solo un enlace de diseño del pie de página.",
      },
      jobs: {
        title: "Empleo",
        body: "No hay ofertas de empleo publicadas. Esto es solo un enlace de diseño del pie de página.",
      },
      terms: {
        title: "Términos del servicio",
        body: "Los Términos del servicio vigentes están publicados en /terms. El reglamento del torneo está en /rules.",
      },
      privacy: {
        title: "Política de privacidad",
        body: "La Política de privacidad está publicada en /privacy. Steam OpenID es la única forma de iniciar sesión; nunca se recogen contraseñas de Steam.",
      },
      eula: {
        title: "EULA de anticheat",
        body: "No hay un EULA de anticheat porque el anticheat no está activo. El modo clasificatorio sigue cerrado ante fallo.",
      },
    },
  },
};
