import type { Ui } from "./en";

export const UI_ES: Ui = {
  "nav": {
    "home": "Inicio",
    "play": "Jugar",
    "ranks": "Rangos",
    "tournaments": "Torneos",
    "leaderboard": "Clasificación",
    "teams": "Equipos",
    "getPremium": "Hazte Premium",
    "maps": "Mapas",
    "prizes": "Premios",
    "shop": "Tienda",
    "rules": "Reglas",
    "antiCheat": "Antitrampas",
    "features": "Funciones",
    "pricing": "Precios",
    "compete": "Competir",
    "explore": "Explorar"
  },
  "footer": {
    "platform": "Plataforma",
    "competition": "Competición",
    "company": "Empresa",
    "legal": "Legal",
    "tagline": "Clasificaciones competitivas de Counter-Strike 2, construidas en torno al juego limpio.",
    "follow": "Sigue a A.C.E.",
    "rights": "Todos los derechos reservados.",
    "legalLine": "© 2026 A.C.E. Plataforma independiente, sin afiliación con Valve. Counter-Strike y CS2 son marcas de Valve Corporation."
  },
  "soon": {
    "label": "Próximamente"
  },
  "cta": {
    "kicker": "Temporada 1",
    "title": "¿Listo para competir?",
    "body": "Conecta Steam, calíbrate y escala.",
    "play": "Jugar A.C.E",
    "ranks": "Explorar los rangos"
  },
  "status": {
    "title": "Estado de la plataforma",
    "steam": "Inicio de sesión con Steam OpenID",
    "shield": "A.C.E Shield · fase de despliegue",
    "servers": "Servidores competitivos · beta competitiva",
    "billing": "Integración de pagos",
    "available": "Disponible",
    "inDevelopment": "En desarrollo",
    "comingSoon": "Próximamente",
    "designed": "Diseñado"
  },
  "ranksTabs": {
    "label": "Rangos",
    "tiers": "Niveles y divisiones",
    "codex": "Códice de calibración"
  },
  "maps": {
    "kicker": "Grupo de mapas competitivo",
    "title": "Mapas y retransmisión",
    "lede": "Siete mapas forman el grupo competitivo de A.C.E. Los equipos vetan y eligen entre ellos durante el veto descrito en el reglamento. Las retransmisiones de torneos aparecen en la pantalla de abajo.",
    "rulebook": "Leer las reglas del veto",
    "screen": "Pantalla de retransmisión",
    "offAir": "Fuera del aire",
    "noBroadcast": "No hay ninguna retransmisión ahora mismo.",
    "nextLabel": "Próxima retransmisión",
    "notScheduled": "se anunciará aquí pronto",
    "embeddedFrom": "En directo desde {provider}.",
    "pool": "Grupo de mapas activo",
    "poolMeta": "{count} mapas · veto BO1 / BO3",
    "mapLabel": "Mapa {n}",
    "settings": {
      "dust": "Pueblo desértico",
      "mirage": "Barrio del mercado",
      "inferno": "Pueblo antiguo",
      "nuke": "Planta industrial",
      "ancient": "Ruinas en la selva",
      "anubis": "Templo de los canales",
      "train": "Patio ferroviario"
    },
    "notes": {
      "dust": "Líneas de visión largas en A y puertas de mid estrechas.",
      "mirage": "El control del mid decide la mayoría de rondas.",
      "inferno": "Pasos estrechos y ejecuciones cargadas de utilidad.",
      "nuke": "Zonas superpuestas y rotaciones verticales rápidas.",
      "ancient": "La presión de mid a B marca la mitad.",
      "anubis": "Mid acuático y ataques abiertos a B.",
      "train": "Cobertura entre vagones y largos pasillos en A."
    }
  },
  "prizes": {
    "kicker": "Premios del campeonato",
    "title": "Premios",
    "lede": "La selección de recompensas que preparamos para los campeones de la Temporada 1. Las bolsas de premios se confirman en la página de cada evento al anunciarse, según la sección 18 del reglamento.",
    "rulebook": "Reglas de premios",
    "cardKicker": "Recompensa legendaria",
    "slots": {
      "first": "1.er puesto · por jugador",
      "second": "2.º puesto · por jugador",
      "mvp": "Premio MVP"
    },
    "facts": {
      "pool": "Bolsa de premios",
      "items": "Objetos de recompensa",
      "delivery": "Entrega",
      "season": "Temporada"
    },
    "factValues": {
      "season": "Temporada 1"
    }
  },
  "rules": {
    "kicker": "Reglamento de competición A.C.E.",
    "title": "Reglas de competición",
    "version": "Versión {version} · vigente desde {date}",
    "intro": "Las reglas con las que se juega toda competición A.C.E. Las cláusulas marcadas con «Se aplica al desplegarse» entran en vigor cuando se lanza el sistema del que dependen.",
    "pending": "Se aplica al desplegarse",
    "contents": "Índice",
    "penalties": {
      "offence": "Infracción",
      "first": "Primera infracción",
      "repeat": "Reincidencia",
      "rule": "Regla"
    },
    "englishNote": "",
    "sections": [
      "Alcance y definiciones",
      "Elegibilidad",
      "Cuentas e identidad",
      "Equipos y plantillas",
      "Capitanes",
      "Grupo de mapas y veto",
      "Desarrollo del partido",
      "Configuración del partido",
      "Problemas de servidor y técnicos",
      "Pausas",
      "Desconexiones",
      "Abandonos e incomparecencias",
      "Conducta",
      "Trampas e integridad competitiva",
      "Disputas y apelaciones",
      "Sanciones",
      "Retransmisión",
      "Premios",
      "Rating Points",
      "Modificaciones"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Antitrampas",
    "lede": "A.C.E Shield es el sistema de integridad que se está construyendo para cada partido de A.C.E.: controles de cliente, servidor, partido y comportamiento trabajando juntos, con la privacidad primero.",
    "statusLabel": "Fase de despliegue",
    "pillarsTitle": "Pilares de la arquitectura",
    "pillars": {
      "client": {
        "title": "Integridad del cliente",
        "body": "Un cliente ligero verifica el entorno de juego durante el partido e informa de señales de manipulación."
      },
      "server": {
        "title": "Integridad del servidor",
        "body": "Los servidores usan configuraciones bloqueadas, plugins firmados y registros a prueba de manipulación."
      },
      "match": {
        "title": "Integridad del partido",
        "body": "Cada ronda se graba con demos y registros de eventos para poder revisar cualquier resultado."
      },
      "behaviour": {
        "title": "Análisis de comportamiento",
        "body": "Modelos estadísticos señalan patrones anómalos de puntería, reacción e información para revisión humana."
      },
      "identity": {
        "title": "Identidad",
        "body": "Cuentas Steam OpenID, un jugador por cuenta, con controles contra la evasión de sanciones."
      }
    },
    "roadmapTitle": "Hoja de ruta",
    "phases": {
      "p1": {
        "title": "Fase 1 · Arquitectura",
        "body": "Modelo de amenazas, flujos de datos y diseño de privacidad."
      },
      "p2": {
        "title": "Fase 2 · Integridad de servidor y partido",
        "body": "Configuraciones bloqueadas, captura de demos y registros a prueba de manipulación."
      },
      "p3": {
        "title": "Fase 3 · Análisis de comportamiento",
        "body": "Herramientas de revisión y primeros modelos estadísticos."
      },
      "p4": {
        "title": "Fase 4 · Integridad del cliente",
        "body": "Beta del cliente Shield con auditoría de seguridad pública."
      },
      "p5": {
        "title": "Fase 5 · Beta competitiva",
        "body": "Shield obligatorio en partidas clasificatorias y torneos."
      }
    },
    "privacyTitle": "Principios de privacidad",
    "privacy": [
      "Solo recogemos lo necesario para proteger un partido y decimos exactamente qué es.",
      "No se recogen identificadores de hardware hasta que exista una implementación segura, documentada y revisada de forma independiente.",
      "Los datos de partido se guardan durante un periodo fijo y después se eliminan.",
      "Toda sanción puede apelarse y la revisa una persona."
    ],
    "faqTitle": "Preguntas",
    "faq": [
      {
        "q": "¿Está activo A.C.E Shield hoy?",
        "a": "Todavía no. Está en desarrollo; cada fase de arriba muestra su estado actual."
      },
      {
        "q": "¿Necesitará acceso al kernel?",
        "a": "El diseño empieza con controles en modo usuario y análisis en el servidor. Cualquier acceso más profundo se documentaría y revisaría públicamente antes."
      },
      {
        "q": "¿Premium afecta al antitrampas?",
        "a": "No. Las reglas de integridad son iguales para todos. Los planes de pago nunca compran ventaja competitiva."
      },
      {
        "q": "¿Cómo denuncio a un tramposo?",
        "a": "Desde la página de contacto. Las denuncias se revisan según la sección 14 del reglamento."
      }
    ]
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Construye tu identidad competitiva. Calibra tu habilidad. Sube en los rangos de A.C.E.",
      "connectSteam": "Conectar Steam",
      "openDashboard": "Abrir panel",
      "exploreRanks": "Explorar rangos"
    },
    "status": {
      "title": "Estado de la plataforma",
      "steam": "Inicio de sesión con Steam",
      "shield": "A.C.E. Shield",
      "servers": "Servidores competitivos",
      "tournaments": "Torneos",
      "billing": "Facturación",
      "available": "Disponible",
      "inDevelopment": "En desarrollo",
      "comingSoon": "Próximamente",
      "preparing": "En preparación",
      "billingOff": "No activo · no se cobran pagos"
    },
    "card": {
      "matches": "Partidas",
      "wl": "V/D",
      "kd": "K/D",
      "noMatches": "Sin partidas registradas",
      "division": "División {division}"
    },
    "journey": {
      "title": "Tu trayectoria competitiva",
      "currentRp": "RP actuales",
      "current": "Actual",
      "next": "Siguiente",
      "toGo": "{rp} RP para la siguiente división",
      "top": "División más alta alcanzada",
      "basis": "Calculado a partir de tus RP guardados y la tabla de rangos publicada."
    },
    "board": {
      "emptyTitle": "Aún no hay partidas clasificatorias",
      "emptyBody": "Los jugadores aparecen aquí tras su primera partida clasificatoria registrada. Nada en esta tabla es inventado.",
      "previewTag": "VISTA PREVIA",
      "lobbyTitle": "Sala",
      "matchFoundTitle": "Partida encontrada",
      "previewNote": "Solo una vista previa del diseño: no hay cola ni servidor en marcha y los nombres son marcadores.",
      "accept": "Aceptar",
      "waiting": "Esperando jugadores",
      "note": "Cuentas reales con al menos una partida clasificatoria registrada, ordenadas por RP guardados. Sin filas de muestra ni inventadas."
    },
    "toast": {
      "region": "Notificaciones",
      "dismiss": "Cerrar notificación",
      "signedIn": "Sesión iniciada como {name}",
      "signedOut": "Has cerrado sesión.",
      "authFailed": "El inicio de sesión con Steam no se completó. Inténtalo de nuevo."
    },
    "sound": {
      "on": "Sonidos de interfaz: activados",
      "off": "Sonidos de interfaz: desactivados"
    },
    "chat": {
      "open": "Abrir chat de soporte",
      "close": "Cerrar chat de soporte",
      "title": "Soporte A.C.E.",
      "greeting": "¡Hola! Soy el asistente de soporte de A.C.E. Pregúntame sobre rangos, planes, reglas o tu cuenta.",
      "placeholder": "Escribe tu pregunta…",
      "send": "Enviar",
      "unavailable": "El chat de soporte aún no está disponible.",
      "disclaimer": "Las respuestas automáticas pueden equivocarse. Las sanciones y decisiones sobre cuentas las toma solo la administración.",
      "escalate": "Enviar al equipo",
      "escalated": "Guardado como ticket de soporte. La administración lo revisará.",
      "error": "Algo salió mal. Inténtalo de nuevo.",
      "rateLimited": "Demasiados mensajes. Espera un momento.",
      "thinking": "Escribiendo…",
      "tooLong": "El mensaje es demasiado largo (máx. {max} caracteres)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Plataforma competitiva",
      "h1a": "Compite.",
      "h1b": "Calibra.",
      "h1c": "Asciende.",
      "sub": "CS2 clasificatorio con inicio de sesión de Steam, una escalera de RP pública y planes que nunca compran ventaja.",
      "trust1": "Solo CS2",
      "trust2": "Inicio de sesión con Steam OpenID",
      "trust3": "$0 · $4 · $7 — sin pagar para ganar",
      "trust4": "10 rangos · empiezas con 1.200 RP",
      "stepsKicker": "Cómo funciona",
      "stepsTitle": "Tres pasos hasta tu primer rango",
      "step1t": "Conecta Steam",
      "step1b": "Inicia sesión con Steam OpenID. A.C.E. nunca ve tu contraseña de Steam.",
      "step2t": "Calibra",
      "step2b": "Empiezas en el nivel 3 con 1.200 RP. Cada partida registrada mueve tus RP según reglas publicadas.",
      "step3t": "Asciende",
      "step3b": "Una victoria da hasta +30 RP (+32 como mejor jugador); una derrota cuesta hasta −30. Tu rango siempre sigue a tus RP.",
      "ranksTitle": "Diez rangos. Una tabla pública.",
      "ranksBody": "Los colores de las insignias son fijos por nivel y tu rango siempre se calcula con tus RP guardados.",
      "ranksCta": "Ver todos los rangos",
      "plansTitle": "Planes que nunca compran victorias",
      "plansBody": "Los planes de pago son solo estéticos y de comodidad. El pago aún no está activo, así que hoy todos están en Gratis.",
      "plansCta": "Comparar planes",
      "free": "Gratis",
      "perMonth": "/mes",
      "signedInKicker": "Bienvenido de nuevo"
    },
    "profile": {
      "kicker": "JUGADOR",
      "notFound": "Jugador no encontrado",
      "notFoundBody": "Ninguna cuenta de A.C.E. usa este Steam ID, o el perfil no es público.",
      "rating": "Puntuación",
      "rank": "Rango",
      "record": "Historial",
      "memberSince": "Miembro desde {date}",
      "steamProfile": "Perfil de Steam",
      "yourProfile": "Este es tu perfil",
      "backToBoard": "Volver a la clasificación"
    },
    "board": {
      "podium": "Mejores jugadores",
      "viewProfile": "Ver perfil"
    },
    "chat": {
      "sources": "Fuentes",
      "noMatch": "No encontré esto en el contenido del sitio de A.C.E. Puedes enviar tu pregunta al equipo como ticket.",
      "s1": "¿Cuánto cuesta Premium?",
      "s2": "¿Cómo gano RP?",
      "s3": "¿Cómo denuncio a un tramposo?",
      "kbNote": "Las respuestas provienen del contenido del sitio de A.C.E."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Centro de mando",
      "welcome": "Bienvenido de nuevo, {name}",
      "quick": "Acciones rápidas",
      "qProfile": "Perfil público",
      "qBoard": "Clasificación",
      "qRanks": "Tabla de rangos",
      "qPlay": "Jugar",
      "statRp": "Puntuación",
      "statRank": "Rango",
      "statRecord": "Balance",
      "statWinRate": "Porcentaje de victorias",
      "statPlan": "Plan",
      "toNext": "{rp} RP para {next}",
      "top": "Cima de la clasificación",
      "activity": "Actividad reciente",
      "activityEmpty": "Aún no hay actividad registrada. Las partidas y los inicios de sesión aparecerán aquí cuando ocurran.",
      "evSignIn": "Sesión iniciada con Steam",
      "evRating": "Puntuación {before} → {after}",
      "noRecord": "Aún no hay partidas",
      "account": "Cuenta"
    },
    "nf": {
      "code": "Error 404",
      "title": "Esta página está fuera del mapa",
      "body": "Puede que el enlace sea antiguo o esté mal escrito. Todo A.C.E. está a un clic desde aquí.",
      "home": "Volver al inicio",
      "ranks": "Ver rangos"
    },
    "err": {
      "code": "Algo falló",
      "title": "Se produjo un error inesperado",
      "body": "No se ha cobrado nada y tu cuenta está a salvo. Inténtalo de nuevo o vuelve al inicio.",
      "retry": "Reintentar"
    }
  },
  "r41": {
    "vf": {
      "label": "Jugador verificado",
      "tip": "Verificado: Steam vinculado, cuenta en regla y revisada por A.C.E."
    },
    "st": {
      "kicker": "Rendimiento",
      "title": "Estadísticas del jugador",
      "lede": "Cada cifra procede de partidas registradas de A.C.E. Nada es estimado.",
      "empty": "Aún no hay partidas registradas. Las estadísticas aparecerán tras la primera partida clasificatoria.",
      "winRate": "Porcentaje de victorias",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "Clutches ganados",
      "entry": "Éxito de entrada",
      "utility": "Daño de utilidad",
      "heatmap": "Actividad",
      "heatmapEmpty": "Aún no hay días de juego",
      "rpChart": "Progreso de RP",
      "rpEmpty": "Aún no hay cambios de puntuación",
      "maps": "Mapas",
      "weapons": "Armas",
      "multi": "Multikills",
      "totals": "Totales",
      "matches": "Partidas",
      "kills": "Bajas",
      "deaths": "Muertes",
      "open": "Ver estadísticas",
      "less": "Menos",
      "more": "Más",
      "none": "—"
    },
    "ab": {
      "title": "Acerca de A.C.E.",
      "lede": "Una plataforma competitiva de Counter-Strike 2 basada en una tabla de rangos pública y planes que nunca compran ventaja.",
      "b1": "A.C.E. gestiona partidas clasificatorias, ladders y torneos de CS2. El acceso es con Steam OpenID; nunca vemos tu contraseña de Steam.",
      "b2": "Tu rango se calcula solo con resultados registrados y reglas publicadas. Los planes de pago son solo estéticos y de comodidad.",
      "b3": "A.C.E. es una plataforma independiente y no está afiliada a Valve."
    },
    "ss": {
      "title": "Estado de los servidores",
      "lede": "Comprobaciones en vivo de este servidor al abrir la página. Nada aquí es estimado.",
      "web": "Sitio web",
      "db": "Base de datos",
      "match": "Servidores de partidas",
      "ok": "Operativo",
      "down": "No disponible",
      "notLive": "Aún no activo",
      "checked": "Comprobado {time}"
    },
    "rp": {
      "title": "Reportar a un jugador",
      "lede": "Cuenta a los operadores lo que pasó. Una persona revisa cada reporte.",
      "target": "SteamID64 del jugador",
      "reason": "Motivo",
      "rCheat": "Trampas",
      "rToxic": "Comportamiento abusivo",
      "rOther": "Otro",
      "details": "Detalles (opcional)",
      "submit": "Enviar reporte",
      "signIn": "Inicia sesión con Steam para enviar un reporte.",
      "sent": "Reporte recibido. Los operadores revisan cada reporte.",
      "invalid": "Introduce un SteamID64 válido (17 dígitos).",
      "open": "Reportar a un jugador"
    },
    "nt": {
      "title": "Notificaciones",
      "empty": "Estás al día.",
      "markRead": "Marcar todo como leído"
    },
    "se": {
      "title": "Temporadas",
      "lede": "Las temporadas reiniciarán la clasificación y darán insignias de fin de temporada.",
      "none": "Aún no ha empezado ninguna temporada. La primera se anunciará aquí."
    }
  },
  "r41b": {
    "lv": {
      "nav": "En directo",
      "title": "Retransmisiones en directo",
      "lede": "Streams oficiales de torneos de A.C.E. Una retransmisión aparece aquí solo mientras los operadores la tienen en antena.",
      "none": "No hay retransmisión en directo ahora",
      "noneBody": "Cuando un stream oficial salga al aire aparecerá aquí. Mientras tanto, mira los torneos de abajo.",
      "schedule": "Próximos torneos",
      "noSchedule": "Aún no hay torneos programados.",
      "onAir": "En antena",
      "watch": "Ver en directo"
    }
  },
  "r46": {
    "aria": "Lo que representa A.C.E.",
    "fair": "Protección del juego limpio",
    "fairSub": "Inicio con Steam, reglas publicadas y reportes de jugadores revisados por admins.",
    "calib": "Calibración competitiva",
    "calibSub": "Partidas de posicionamiento y una escalera pública de RP de 100 a 3.000.",
    "elite": "Jugadores de élite",
    "eliteSub": "Diez rangos y cinco insignias de prestigio, ganados solo con RP."
  },
  "r45": {
    "title": "Más allá de Legend",
    "lede": "Cinco insignias de prestigio por encima de A.C.E. Legend, una cada 200 RP de 2.150 a 2.950. Solo se ganan jugando.",
    "plus": "Plus · platino",
    "premium": "Premium · fuego dorado",
    "fair": "El mismo RP para todos. Los umbrales de prestigio, el emparejamiento y la clasificación son iguales en todos los planes. Nada de esto se compra.",
    "finish": "El acabado de prestigio requiere Plus o Premium. Los jugadores Free alcanzan los mismos umbrales y los ven como un hito de texto.",
    "link": "Reglas completas de insignias"
  },
  "r44": {
    "kicker": "Tu rango",
    "next": "Siguiente",
    "winRate": "Tasa de victorias",
    "noMatches": "Aún no hay partidas clasificatorias. Tu primer resultado aparecerá aquí.",
    "finishPlus": "Plus · acabado platino",
    "finishPremium": "Premium · acabado de fuego dorado",
    "progressAria": "Progreso hacia {name}",
    "matches": "Partidas"
  },
  "r42": {
    "playTitle": "Jugar ahora",
    "playSub": "Encuentra una partida clasificatoria de CS2 y sube",
    "newPill": "NUEVO",
    "shopAria": "Abrir la tienda"
  },
  "r41c": {
    "v5": {
      "vTier": "Las victorias y las derrotas se multiplican por {t7} en los niveles 7–9 y por {t10} en el nivel 10 ({top}), así que un balance del 50 % mantiene tu rango en cualquier nivel.",
      "vPlacement": "Tus primeras {n} partidas se mueven {pk}× más rápido para que encuentres tu nivel pronto. Durante la clasificación tu rating no puede superar el nivel {maxTier} ({cap} RP).",
      "vAbandon": "Cuenta como una derrota doble, al menos −{abandon} RP, sea cual sea el resultado, y sin bonus de MVP.",
      "ex2": "Cada derrota por el camino suma victorias. En los niveles 7–9 una victoria da +{win7} y una derrota cuesta −{loss7}, así que ganar más del {breakEven} % de las partidas igualadas te mantiene subiendo."
    },
    "pr": {
      "kicker": "Prestigio",
      "title": "Reglas de insignias",
      "lede": "Cómo se gana cada insignia de A.C.E. Las insignias son solo estéticas: nunca cambian el emparejamiento, los RP ni ninguna regla.",
      "ranks": "Las insignias de rango (niveles 1–10) siguen tus RP. Todos ven el mismo rango y el mismo color fijo de nivel.",
      "prestige": "Las insignias de prestigio son cinco metas a largo plazo por encima de {elite} RP: una cada 200 RP de 2.150 a 2.950.",
      "free": "Free: tu insignia sigue siendo A.C.E. Legend y tu nivel de prestigio se muestra como un hito en texto. Tus RP nunca tienen tope.",
      "plus": "Plus: el set de prestigio de platino.",
      "premium": "Premium: el set de prestigio dorado animado.",
      "lose": "Si bajas de un umbral de prestigio, la insignia baja con tus RP; si lo vuelves a alcanzar, vuelve.",
      "level": "Prestigio {n} · {name}",
      "from": "Desde {rp} RP",
      "milestone": "Prestigio {n} alcanzado",
      "perk": "Set de insignias de prestigio (2.150–3.000 RP), ganado con RP",
      "open": "Reglas de insignias",
      "wins": "Unas {n} victorias en partidas igualadas tras el nivel anterior"
    }
  },
  "r48": {
    "kicker": "Clasificatoria 5v5",
    "title": "Cola en solitario",
    "lede": "Únete solo. Cuando haya diez jugadores, A.C.E equilibra dos equipos por RP, hace una comprobación de listos y un veto de mapas entre capitanes, y empieza la partida en nuestro servidor.",
    "inQueue": "En cola",
    "count": "{n} / {total} jugadores en cola",
    "waiting": "Faltan {n}",
    "elapsed": "Buscando {time}",
    "join": "Entrar en la cola",
    "leave": "Salir de la cola",
    "signIn": "Inicia sesión con Steam para entrar en la cola",
    "serverBusy": "Hay una partida en curso en el servidor. La siguiente sala se forma cuando termine; puedes seguir en la cola.",
    "readyTitle": "Partida encontrada",
    "readyLede": "Acepta en {s} segundos. Quien no acepte sale y los demás vuelven a la cola.",
    "accept": "Aceptar",
    "decline": "Rechazar",
    "accepted": "{n} / {total} aceptaron",
    "youAccepted": "Has aceptado. Esperando al resto.",
    "vetoTitle": "Veto de mapas",
    "vetoLede": "Los capitanes (el RP más alto de cada lado) vetan por turnos hasta que queda un mapa Active Duty.",
    "yourTurn": "Tu turno: veta un mapa",
    "theirTurn": "El capitán de {team} está vetando",
    "turnLeft": "Quedan {s} s",
    "ban": "Vetar",
    "bannedBy": "Vetado por {team}",
    "autoBan": "Vetado automáticamente (se acabó el tiempo)",
    "teamA": "Equipo Alfa",
    "teamB": "Equipo Bravo",
    "captain": "Capitán",
    "launching": "Creando la partida en el servidor…",
    "liveTitle": "Partida lista",
    "connect": "Conectar al servidor",
    "connectNote": "Abre CS2 desde Steam. Tienes 5 minutos para entrar o la partida se cancela.",
    "console": "O pega en la consola de CS2: connect {address}",
    "map": "Mapa",
    "avgRp": "Media {rp} RP",
    "cancelled": "La sala se canceló. Quienes aceptaron han vuelto a la cola.",
    "failed": "El servidor no pudo iniciar la partida. Nadie perdió RP. Vuelve a entrar en la cola.",
    "done": "Partida terminada. Los resultados y el RP vienen del informe del servidor.",
    "testTag": "Sala de prueba",
    "lobbyNote": "Aquí solo aparecen jugadores reales de A.C.E. Los rangos y el RP son sus valores guardados.",
    "errors": {
      "steam-required": "Vincula una cuenta de Steam para entrar en la cola.",
      "not-eligible": "Tu cuenta no puede entrar en la cola ahora mismo.",
      "in-match": "Ya estás en una sala.",
      "not-your-turn": "Espera tu turno.",
      "not-captain": "Solo los capitanes vetan mapas.",
      "unavailable": "La cola no está disponible. Inténtalo de nuevo en un momento.",
      "sign-in": "Inicia sesión con Steam primero."
    }
  }
};
