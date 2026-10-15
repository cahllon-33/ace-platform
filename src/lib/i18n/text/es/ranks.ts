import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Rangos competitivos",
    description:
      "Los diez rangos de A.C.E., de Iron Recruit a A.C.E. Legend, con divisiones y mínimos de puntuación.",
  },
  hero: {
    kicker: "CALIBRACIÓN",
    title: "Rangos competitivos",
    lede: "Diez niveles de Recruit a A.C.E. Legend, cada uno con las divisiones {divisions}. Arrastra o usa las flechas para girar un emblema. Con la sesión iniciada ves tu propia puntuación; si no, el mínimo de cada nivel.",
  },
  codexLink: "Abrir el Códice de calibración",
  document: {
    title: "Documento de calibración de diez escalones",
    body: "Los nombres del motor forman la escalera oficial. Los alias de cristal son arte del lobby. Los porcentajes de victoria del tablero son cifras de muestra hasta que se lance el emparejamiento clasificatorio. Los cosméticos de pago nunca mueven a un jugador entre estos niveles.",
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
    premium: "NIVEL MÁXIMO",
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
    samplesNote: "Cifras objetivo de cada nivel.",
    progressMockup: "Progreso",
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
