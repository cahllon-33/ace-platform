import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "경쟁 랭크",
    description:
      "Iron Recruit부터 A.C.E. Legend까지, 디비전과 레이팅 하한이 있는 A.C.E.의 10개 등급.",
  },
  hero: {
    kicker: "캘리브레이션",
    title: "경쟁 랭크",
    lede: "Recruit부터 A.C.E. Legend까지 10개 등급, 각 등급은 디비전 {divisions}을(를) 가집니다. 드래그하거나 화살표 키로 엠블럼을 회전하세요. 로그인하면 내 레이팅이, 아니면 각 등급의 하한이 표시됩니다.",
  },
  codexLink: "캘리브레이션 코덱스 열기",
  document: {
    title: "10티어 캘리브레이션 문서",
    body: "엔진 이름이 공식 등급 체계입니다. 크리스털 별칭은 로비 아트입니다. 보드의 승률 칩은 랭크 매치메이킹 출시 전까지 쇼케이스 수치입니다. 유료 꾸미기 아이템은 플레이어를 등급 간에 이동시키지 않습니다.",
    level: "레벨 {level} · {crystal}",
    detail: "최소 레이팅 {rating}. 소재 연구: {material}.",
  },
  tiers: {
    1: { tagline: "입문 캘리브레이션", material: "원철 / 흑요석 플레이트 질감" },
    2: { tagline: "현장 요원", material: "브러시드 브론즈 크리스털 코어" },
    3: { tagline: "최전방", material: "짙은 진홍빛 언더톤의 로즈 골드 파편" },
    4: { tagline: "정밀한 기술", material: "크롬 실버 다이아몬드 파편 블록" },
    5: { tagline: "노련한 핵심", material: "에이징 브라스 용융 코어 오라" },
    6: { tagline: "골드 스탠더드", material: "선명한 골드 파편 크리스털 플레어" },
    7: { tagline: "시안 상승", material: "시안 블루 플라스마 크리스털 매트릭스" },
    8: { tagline: "사파이어 폭풍", material: "강렬하게 빛나는 사파이어 블루 번개 크리스털 코어" },
    9: { tagline: "보이드 왕관", material: "깊은 우주 보이드 퍼플 항성 파편 코어" },
    10: { tagline: "엘리트 중의 엘리트", material: "럭셔리 용융 광휘 골드 왕관 프레임워크" },
  },
  board: {
    selectEmblem: "A.C.E. {name} 랭크 엠블럼 선택, 레벨 {level}",
    emblemAlt: "A.C.E. 커스텀 3D 크리스털 레벨 {level} {crystal} {name} 엠블럼 프로필 배지",
    emblemAltLegend: "A.C.E. 커스텀 3D 크리스털 레벨 {level} 엠블럼 프로필 배지",
    premium: "최상위 등급",
  },
  division: {
    label: "디비전 {division}",
    select: "디비전 {division} 선택",
    summary: "티어당 디비전 {divisions}개 / 총 레벨 {levels}개",
  },
  card: {
    rank: "랭크 {level}",
    targetWinRate: "목표 승률 {winRate}",
    calibrationTarget: "캘리브레이션 목표",
    floor: "하한",
    samplesNote: "등급별 목표 수치.",
    progressMockup: "진행도",
  },
  turntable: {
    stageLabel: "{name} 궤도 엠블럼. 드래그하여 회전하세요.",
    dragToRotate: "드래그하여 회전",
    rankSystem: "랭크 시스템",
  },
  emblem: {
    kicker: "캘리브레이션 마크",
    rankLabel: "랭크 {level} · {name}",
  },
  calibration: {
    placementNote:
      "저장된 승패를 바탕으로 배치 마크 {total}개 중 {complete}개가 채워졌습니다. 이 노드들은 매치를 시작하지 않습니다.",
  },
};
