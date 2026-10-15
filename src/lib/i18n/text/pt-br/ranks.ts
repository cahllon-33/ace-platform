import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumCodex: {
    "kicker": "CÓDICE DE RANKS PREMIUM",
    "title": "Códice de ranks Premium",
    "lede": "Dez emblemas de cristal ilustrados, um por rank. É arte de perfil cosmética na mesma escada de Rating Points dos ranks padrão. Não altera o rating, o matchmaking nem a fila.",
    "cosmetic": "Arte cosmética · mesma escada RP · apenas A.C.E Premium US$ 7/mês",
    "imgAlt": "Arte de rank Premium {name}, nível {level}"
  },
  premiumRanks: {
    kicker: "RANKS PREMIUM",
    plan: "A.C.E PREMIUM · somente US$ 7/mês",
    title: "Arte de rank Premium",
    lede: "O conjunto original ilustrado de ranks A.C.E.: dez emblemas de cristal com divisões III/II/I, o protocolo de rating, o card de detalhe Legend e o visualizador 3D que gira ao arrastar. É arte de perfil para membros Premium. Lê a mesma escada de Rating Points dos ranks padrão e não dá nenhuma vantagem competitiva.",
    demo: "Valores de demonstração: progresso, taxa de vitórias e divisões neste painel são exemplos, não estatísticas ao vivo. Com login feito, o rating mostrado é o seu rating salvo.",
    locked: "Em breve: o checkout ainda não existe, então hoje nenhuma conta é Premium. O servidor só aplica a arte de rank Premium a um perfil cujo plano salvo seja Premium.",
    standardKicker: "RANKS PADRÃO",
    standardNote: "Todas as contas usam estes emblemas vetoriais 3D.",
    legendTag: "PREMIUM",
    pickerTitle: "Arte de rank no seu perfil",
    pickerStandard: "Padrão",
    pickerPremium: "Premium",
    pickerLocked: "A arte de rank Premium é para o A.C.E Premium (US$ 7/mês). Em breve: o checkout ainda não existe.",
    pickerSaved: "Salvo.",
    pickerFailed: "Não salvo. A arte de rank Premium exige A.C.E Premium.",
  },
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
