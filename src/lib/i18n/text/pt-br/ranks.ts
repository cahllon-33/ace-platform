import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Ranks competitivos",
    description:
      "As dez patentes A.C.E., de Iron Recruit a A.C.E. Legend, com divisões e pisos de classificação.",
  },
  hero: {
    kicker: "CALIBRAÇÃO",
    title: "Ranks competitivos",
    lede: "Dez patamares de Recruit a A.C.E. Legend, cada um com as divisões {divisions}. Arraste ou use as setas para girar um emblema. Conectado, você vê sua própria classificação; senão, o piso de cada patamar.",
  },
  codexLink: "Abrir o Códice de Calibração",
  document: {
    title: "Documento de calibração em dez patentes",
    body: "Os nomes do motor são a escada oficial. Os apelidos de cristal são arte do lobby. As taxas de vitória no quadro são números de vitrine até o lançamento do matchmaking ranqueado. Cosméticos pagos nunca movem um jogador entre esses patamares.",
    level: "NÍVEL {level} · {crystal}",
    detail: "Rating mínimo {rating}. Estudo de material: {material}.",
  },
  tiers: {
    1: { tagline: "CALIBRAÇÃO INICIAL", material: "Textura de placa de ferro bruto / obsidiana" },
    2: { tagline: "OPERADOR DE CAMPO", material: "Núcleo de cristal de bronze escovado" },
    3: { tagline: "LINHA DE FRENTE", material: "Fragmentos de ouro rosé com nuances vermelho-escuras profundas" },
    4: { tagline: "OFÍCIO DE PRECISÃO", material: "Bloco de fragmentos de diamante em prata cromada" },
    5: { tagline: "NÚCLEO EXPERIENTE", material: "Aura de núcleo fundido de latão envelhecido" },
    6: { tagline: "PADRÃO OURO", material: "Brilho de cristal em fragmentos de ouro vibrante" },
    7: { tagline: "ASCENSÃO CIANO", material: "Matriz de cristal de plasma azul-ciano" },
    8: { tagline: "TEMPESTADE DE SAFIRA", material: "Núcleo de cristal relâmpago azul-safira hiperluminoso" },
    9: { tagline: "COROA DO VAZIO", material: "Núcleo de fragmentos estelares roxo do vazio cósmico profundo" },
    10: { tagline: "A ELITE DA ELITE", material: "Estrutura de coroa de ouro radiante fundido de luxo" },
  },
  board: {
    selectEmblem: "Selecionar o emblema do rank A.C.E. {name}, nível {level}",
    emblemAlt: "Emblema de perfil cristalino 3D personalizado A.C.E., nível {level}, {crystal}, {name}",
    emblemAltLegend: "Emblema de perfil cristalino 3D personalizado A.C.E., nível {level}",
    premium: "PATAMAR MÁXIMO",
  },
  division: {
    label: "Divisão {division}",
    select: "Selecionar a divisão {division}",
    summary: "{divisions} divisões cada / {levels} níveis no total",
  },
  card: {
    rank: "Rank {level}",
    targetWinRate: "Meta de {winRate} de vitórias",
    calibrationTarget: "Meta de calibração",
    floor: "Piso",
    samplesNote: "Metas de cada patamar.",
    progressMockup: "Progresso",
  },
  turntable: {
    stageLabel: "Emblema orbital {name}. Arraste para girar.",
    dragToRotate: "ARRASTE PARA GIRAR",
    rankSystem: "SISTEMA DE RANKS",
  },
  emblem: {
    kicker: "Marca de calibração",
    rankLabel: "Rank {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} marcas de colocação são preenchidas a partir das vitórias e derrotas salvas. Estes nós não iniciam uma partida.",
  },
};
