import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Rangos competitivos",
    description:
      "Diez rangos A.C.E. en un torno 3D de CSS que se gira arrastrando. Los modelos GLTF de estudio podrán sustituir las imágenes fijas cuando se entreguen.",
  },
  hero: {
    kicker: "CALIBRACIÓN",
    title: "Rangos competitivos",
    lede: "De Recruit a A.C.E. Legend, divisiones {divisions}. Cada emblema es una imagen conceptual fija sobre un torno 3D de CSS (arrastra o usa las teclas de flecha). Más adelante se podrá colocar un GLTF en la ranura documentada; aún no hay archivos de modelo en el repositorio. Las cifras de puntuación son las de tu cuenta real cuando has iniciado sesión; si no, se muestra el suelo de calibración.",
  },
  codexLink: "Abrir el Códice de calibración",
  document: {
    title: "Documento de calibración de diez escalones",
    body: "Los nombres del motor son la escalera oficial. Los alias de cristal son arte del lobby. Las fichas de porcentaje de victorias del tablero son muestras de exhibición, no emparejamiento en vivo. Los cosméticos de pago nunca mueven a un jugador entre estos niveles.",
    level: "NIVEL {level} · {crystal}",
    detail: "Puntuación mínima {rating}. Estudio de material: {material}.",
  },
  tiers: {
    1: { tagline: "CALIBRACIÓN INICIAL", material: "Textura de placa de hierro en bruto / obsidiana" },
    2: { tagline: "OPERATIVO DE CAMPO", material: "Núcleo de cristal de bronce cepillado" },
    3: { tagline: "FILO DE VANGUARDIA", material: "Esquirlas de oro rosa con matices rojo oscuro profundo" },
    4: { tagline: "OFICIO DE PRECISIÓN", material: "Bloque de esquirla de diamante plateado cromado" },
    5: { tagline: "NÚCLEO CURTIDO", material: "Aura de núcleo fundido de latón envejecido" },
    6: { tagline: "ESTÁNDAR DE ORO", material: "Destello de cristal de esquirla de oro vibrante" },
    7: { tagline: "ASCENSO CIAN", material: "Matriz de cristal de plasma azul cian" },
    8: { tagline: "TORMENTA DE ZAFIRO", material: "Núcleo de cristal relampagueante azul zafiro de brillo intenso" },
    9: { tagline: "CORONA DEL VACÍO", material: "Núcleo de esquirla estelar púrpura del vacío cósmico profundo" },
    10: { tagline: "LA ÉLITE DE LA ÉLITE", material: "Estructura de corona de oro radiante fundido de lujo" },
  },
  board: {
    selectEmblem: "Seleccionar el emblema de rango A.C.E. {name}, nivel {level}",
    emblemAlt: "Insignia de perfil A.C.E. con emblema cristalino 3D personalizado {name} {crystal} de nivel {level}",
    emblemAltLegend: "Insignia de perfil A.C.E. con emblema cristalino 3D personalizado de nivel {level}",
    premium: "PREMIUM",
  },
  division: {
    label: "División {division}",
    select: "Seleccionar la división {division}",
    summary: "{divisions} divisiones cada uno / {levels} niveles en total",
  },
  card: {
    rank: "Rango {level}",
    targetWinRate: "{winRate} de porcentaje de victorias objetivo",
    calibrationTarget: "Objetivo de calibración",
    floor: "Suelo",
    samplesNote: "Muestras de diseño. No es telemetría en vivo.",
    progressMockup: "Maqueta de progreso",
  },
  turntable: {
    stageLabel: "Emblema orbital de {name}. Arrastra para girarlo.",
    dragToRotate: "ARRASTRA PARA GIRAR",
    rankSystem: "SISTEMA DE RANGOS",
  },
  emblem: {
    kicker: "Marca de calibración",
    rankLabel: "Rango {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} marcas de colocación se rellenan a partir de las victorias y derrotas guardadas. Estos nodos no inician una partida.",
  },
};
