import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "랭크 티어 {n}",
    "chip": "Premium",
    "artAlt": "{rank} 프리미엄 랭크 아트"
  },
  "rpRules": {
    "kicker": "A.C.E 레이팅 포인트 규정",
    "title": "Rating Points 변동 방식",
    "lede": "규정 버전 {version}. 모든 신규 플레이어는 3티어({tier})에서 {start} RP로 시작합니다. 래더는 의도적으로 느립니다. 중간 이상의 티어는 이전 티어보다 더 많은 승리가 필요합니다.",
    "tableTitle": "규정",
    "colRule": "항목",
    "colValue": "값",
    "rStart": "시작 레이팅",
    "vStart": "{start} RP, 3티어({tier})",
    "rWin": "동급 팀 상대 승리",
    "vWin": "+{win} RP",
    "rLoss": "동급 팀 상대 패배",
    "vLoss": "−{loss} RP",
    "rOdds": "상대 전력",
    "vOdds": "내 레이팅은 상대 팀의 평균 레이팅과 비교됩니다(스케일 {scale}). 더 강한 팀을 이기면 더 많이 얻고 지면 덜 잃으며, 더 약한 팀이 상대라면 반대입니다.",
    "rClamp": "경기당 한도",
    "vClamp": "승리 시 +{winMin}~+{winMax} RP. 패배 시 −{lossMin}~−{lossMax} RP.",
    "rTier": "상위 티어 승리",
    "vTier": "승리 획득량은 7~9티어에서 ×{t7}, 10티어({top})에서 ×{t10}이 적용됩니다. 패배 감소량은 절대 줄지 않습니다.",
    "rMvp": "경기 MVP",
    "vMvp": "킬이 가장 많은 플레이어. 동률이면 더 많은 피해량, 그다음 더 적은 데스로 결정합니다. 승리 시 +{mvp} RP, 패배 시 {mvp} RP 덜 잃으며 경기당 한도는 넘지 않습니다. 출시 예정: 서버가 아직 킬을 기록하지 않아 현재 MVP 보너스는 적용되지 않습니다.",
    "rPlacement": "배치",
    "vPlacement": "처음 {n}경기. 배치 기간에는 레이팅이 {maxTier}티어({cap} RP)를 넘어 오를 수 없습니다.",
    "rDraw": "무승부",
    "vDraw": "모두 0 RP.",
    "rAbandon": "경기 이탈 또는 포기",
    "vAbandon": "결과와 관계없이 −{abandon} RP, MVP 보너스 없음.",
    "rLimits": "레이팅 범위",
    "vLimits": "{floor}~{ceiling} RP",
    "rDecay": "비활동",
    "vDecay": "감소 없음. 플레이하지 않는 동안 레이팅이 떨어지지 않습니다.",
    "rPaid": "유료 플랜",
    "vPaid": "영향 없음. Free, Plus, Premium 플레이어는 완전히 같은 규정으로 변동합니다.",
    "tierTableTitle": "티어별(동급 팀 상대)",
    "colTier": "티어",
    "colFloor": "시작",
    "colWin": "승리",
    "colLoss": "패배",
    "examplesTitle": "계산 예시",
    "ex1": "동급 팀 상대로 승리만 했을 때 {start} → {elite} RP({top}): 6티어까지 +15로 {w1}승, 이후 7~9티어에서 +{win7}로 {w2}승. 총 {total}승.",
    "ex2": "도중의 패배마다 필요한 승리가 늘어납니다. 7~9티어에서는 승리가 +{win7}이지만 패배는 여전히 −{loss}이므로, 계속 오르려면 비등한 경기의 최소 {breakEven}%를 이겨야 합니다.",
    "ex3": "평균이 나보다 200 RP 높은 팀 상대로는 승리 시 +{strongWin}, 패배 시 −{strongLoss}.",
    "ex4": "평균이 나보다 200 RP 낮은 팀 상대로는 승리 시 +{weakWin}, 패배 시 −{weakLoss}.",
    "note": "이 수치는 검증된 경기 결과를 적용하는 코드와 같은 코드로 계산합니다. 저장된 경기가 아니라 예시입니다."
  },
  "premiumCodex": {
    "kicker": "PREMIUM 랭크 코덱스",
    "title": "Premium 랭크 코덱스",
    "lede": "랭크마다 하나씩, 열 개의 일러스트 크리스털 엠블럼. 표준 랭크와 같은 Rating Points 래더 위의 외형용 프로필 아트입니다. 레이팅, 매치메이킹, 대기열을 바꾸지 않습니다.",
    "cosmetic": "외형 아트 · 같은 RP 래더 · A.C.E Premium 월 $7 전용",
    "imgAlt": "{name} Premium 랭크 아트, 레벨 {level}"
  },
  "premiumRanks": {
    "kicker": "프리미엄 랭크",
    "plan": "A.C.E PREMIUM · 월 $7 전용",
    "title": "프리미엄 랭크 아트",
    "lede": "오리지널 일러스트 A.C.E. 랭크 세트: III/II/I 디비전이 있는 크리스탈 엠블럼 10개, 레이팅 프로토콜, Legend 상세 카드, 드래그로 회전하는 3D 뷰어. Premium 회원을 위한 프로필 아트입니다. 표준 랭크와 같은 Rating Points 래더를 읽으며 어떤 경쟁상의 이점도 주지 않습니다.",
    "demo": "데모 값: 이 보드의 진행도, 승률, 디비전 수치는 예시이며 실시간 통계가 아닙니다. 로그인하면 표시되는 레이팅은 저장된 레이팅입니다.",
    "locked": "곧 제공: 결제가 아직 없어 현재 Premium 계정은 없습니다. 서버는 저장된 플랜이 Premium인 프로필에만 프리미엄 랭크 아트를 적용합니다.",
    "standardKicker": "표준 랭크",
    "standardNote": "모든 계정은 이 3D 벡터 엠블럼을 사용합니다.",
    "legendTag": "PREMIUM",
    "pickerTitle": "프로필의 랭크 아트",
    "pickerStandard": "표준",
    "pickerPremium": "프리미엄",
    "pickerLocked": "프리미엄 랭크 아트는 A.C.E Premium(월 $7) 전용입니다. 곧 제공: 결제가 아직 없습니다.",
    "pickerSaved": "저장했습니다.",
    "pickerFailed": "저장되지 않았습니다. 프리미엄 랭크 아트에는 A.C.E Premium이 필요합니다."
  },
  "meta": {
    "title": "경쟁 랭크",
    "description": "Iron Recruit부터 A.C.E. Legend까지, 디비전과 레이팅 하한이 있는 A.C.E.의 10개 등급."
  },
  "hero": {
    "kicker": "캘리브레이션",
    "title": "경쟁 랭크",
    "lede": "Recruit부터 A.C.E. Legend까지 10개 등급, 각 등급은 디비전 {divisions}을(를) 가집니다. 드래그하거나 화살표 키로 엠블럼을 회전하세요. 로그인하면 내 레이팅이, 아니면 각 등급의 하한이 표시됩니다."
  },
  "codexLink": "캘리브레이션 코덱스 열기",
  "document": {
    "title": "10티어 캘리브레이션 문서",
    "body": "엔진 이름이 공식 등급 체계입니다. 크리스털 별칭은 로비 아트입니다. 보드의 승률 칩은 랭크 매치메이킹 출시 전까지 쇼케이스 수치입니다. 유료 꾸미기 아이템은 플레이어를 등급 간에 이동시키지 않습니다.",
    "level": "레벨 {level} · {crystal}",
    "detail": "최소 레이팅 {rating}. 소재 연구: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "입문 캘리브레이션",
      "material": "원철 / 흑요석 플레이트 질감"
    },
    "2": {
      "tagline": "현장 요원",
      "material": "브러시드 브론즈 크리스털 코어"
    },
    "3": {
      "tagline": "최전방",
      "material": "짙은 진홍빛 언더톤의 로즈 골드 파편"
    },
    "4": {
      "tagline": "정밀한 기술",
      "material": "크롬 실버 다이아몬드 파편 블록"
    },
    "5": {
      "tagline": "노련한 핵심",
      "material": "에이징 브라스 용융 코어 오라"
    },
    "6": {
      "tagline": "골드 스탠더드",
      "material": "선명한 골드 파편 크리스털 플레어"
    },
    "7": {
      "tagline": "시안 상승",
      "material": "시안 블루 플라스마 크리스털 매트릭스"
    },
    "8": {
      "tagline": "사파이어 폭풍",
      "material": "강렬하게 빛나는 사파이어 블루 번개 크리스털 코어"
    },
    "9": {
      "tagline": "보이드 왕관",
      "material": "깊은 우주 보이드 퍼플 항성 파편 코어"
    },
    "10": {
      "tagline": "엘리트 중의 엘리트",
      "material": "럭셔리 용융 광휘 골드 왕관 프레임워크"
    }
  },
  "board": {
    "selectEmblem": "A.C.E. {name} 랭크 엠블럼 선택, 레벨 {level}",
    "emblemAlt": "A.C.E. 커스텀 3D 크리스털 레벨 {level} {crystal} {name} 엠블럼 프로필 배지",
    "emblemAltLegend": "A.C.E. 커스텀 3D 크리스털 레벨 {level} 엠블럼 프로필 배지",
    "premium": "최상위 등급"
  },
  "division": {
    "label": "디비전 {division}",
    "select": "디비전 {division} 선택",
    "summary": "티어당 디비전 {divisions}개 / 총 레벨 {levels}개"
  },
  "card": {
    "rank": "랭크 {level}",
    "targetWinRate": "목표 승률 {winRate}",
    "floor": "하한"
  },
  "turntable": {
    "stageLabel": "{name} 궤도 엠블럼. 드래그하여 회전하세요.",
    "dragToRotate": "드래그하여 회전",
    "rankSystem": "랭크 시스템"
  },
  "emblem": {
    "kicker": "캘리브레이션 마크",
    "rankLabel": "랭크 {level} · {name}"
  },
  "calibration": {
    "placementNote": "저장된 승패를 바탕으로 배치 마크 {total}개 중 {complete}개가 채워졌습니다. 이 노드들은 매치를 시작하지 않습니다."
  }
};
