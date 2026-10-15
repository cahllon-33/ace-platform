import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  premiumExtras: {
    "card": {
      "previewTag": "미리보기",
      "previewNote": "애니메이션 Premium 프로필 카드 미리보기입니다. 이름과 수치는 예시입니다. 실제 프로필은 저장된 플랜이 Premium일 때만 이 카드를 표시합니다.",
      "planTag": "A.C.E PREMIUM",
      "seal": "ELITE 인장",
      "rank": "랭크",
      "rating": "레이팅",
      "sampleName": "예시 플레이어",
      "ownTitle": "내 Premium 프로필 카드"
    },
    "analysis": {
      "metaTitle": "확장 매치 분석",
      "metaDescription": "Premium 매치 분석 레이아웃: 사망 히트맵, 헤드샷 비율, 라운드별 성과. 데모 분석이 생기면 곧 제공됩니다.",
      "kicker": "PREMIUM · 매치 분석",
      "title": "확장 매치 분석",
      "lede": "기록된 매치의 사망 히트맵, 헤드샷 비율, 라운드별 성과. 아직 존재하지 않는 데모 분석이 필요합니다.",
      "sampleTag": "예시 레이아웃 — 내 데이터가 아님",
      "soon": "곧 제공",
      "soonCaption": "데모 분석이 생기면 채워집니다. 아래 어떤 것도 실제 통계가 아닙니다.",
      "heatmap": "사망 히트맵",
      "headshot": "헤드샷 %",
      "rounds": "라운드별 성과",
      "noData": "데이터 없음",
      "locked": "확장 매치 분석은 A.C.E Premium(월 $7)에 포함됩니다. 곧 제공: 결제가 아직 없어 현재 Premium 계정은 없습니다.",
      "premiumNote": "플랜이 Premium입니다. 데모 분석이 생기면 여기에 분석이 표시됩니다.",
      "signIn": "Steam으로 로그인해 분석 이용 권한을 확인하세요.",
      "plansLink": "플랜 보기"
    },
    "terms": {
      "metaTitle": "Premium 약관",
      "metaDescription": "A.C.E Plus와 Premium에 포함된 것, 어떤 플랜에도 포함되지 않은 것, 해지 방법.",
      "kicker": "ACE-LEGAL / PREMIUM 약관",
      "title": "A.C.E Premium 약관",
      "intro": "이 약관은 유료 플랜에 포함된 내용을 설명합니다. /terms의 서비스 약관을 보완합니다. 결제가 아직 없어 현재는 아무것도 구매할 수 없습니다.",
      "pricesTitle": "1. 플랜, 가격, 해지",
      "prices": "Free {free}. Plus 월 {plus}. Premium 월 {premium}. 플랜은 매월 갱신됩니다. 대시보드 설정에서 언제든지 위약금 없이 해지할 수 있습니다. 서비스 약관에 명시된 대로 부분 월은 환불되지 않습니다.",
      "plusTitle": "2. Plus 포함 내용",
      "plus1": "Free의 모든 것.",
      "plus2": "곧 제공: 결제가 생기면 감사 편지와 support@ace-platform.gg 이메일 지원.",
      "premiumTitle": "3. Premium 포함 내용",
      "prem1": "Plus의 모든 것.",
      "prem2": "프리미엄 랭크 아트: 프로필에 표시되는 오리지널 일러스트 A.C.E. 엠블럼 세트.",
      "prem3": "애니메이션 Premium 프로필 카드.",
      "prem4": "특별 배지와 ELITE 인장.",
      "prem5": "곧 제공: 데모 분석이 생기면 확장 매치 분석(사망 히트맵, 헤드샷 %, 라운드별 성과).",
      "prem6": "베타가 열리면 베타 기능 조기 이용.",
      "prem7": "72시간 응답 목표의 우선 지원. 이는 목표이며 보장이 아닙니다.",
      "neverTitle": "4. 어떤 플랜에도 포함되지 않는 것",
      "never": "어떤 플랜도 경쟁상의 이점을 주지 않습니다. 어떤 플랜도 Rating Points를 추가하거나 레이팅을 올리지 않습니다. 어떤 플랜도 매치메이킹 이점, 우선 대기열, 더 쉬운 상대를 주지 않습니다.",
      "soonTitle": "5. 곧 제공되는 기능",
      "soon": "곧 제공으로 표시된 것은 출시 전까지 약속된 것이 아닙니다. 그때까지 가격에 포함되지 않습니다.",
      "languageTitle": "6. 언어",
      "language": "번역은 편의를 위해 제공됩니다. 번역이 영어 원문과 다르면 영어 원문이 적용됩니다.",
      "contact": "문의: support@ace-platform.gg",
      "footerLink": "Premium 약관",
      "pricingLink": "Premium 약관 읽기"
    }
  },
  meta: {
    title: "요금",
    description:
      "A.C.E. 멤버십: 무료 {free}, Plus 월 {plus}, Premium 월 {premium}. 표시 가격은 정수 금액으로 고정됩니다.",
  },
  period: {
    monthly: "/월",
  },
  hero: {
    badge: "멤버십",
    title: "이용 등급",
    lede: "무료 {free}. Plus 월 {plus}. Premium 월 {premium}. 이 금액은 정수로 고정되어 있습니다. 유료 플랜으로 레이팅이나 더 쉬운 상대를 살 수 없습니다.",
  },
  tiers: {
    free: {
      name: "무료",
      note: "그래파이트",
      title: "오픈 액세스",
      points: [
        "Steam OpenID로 로그인합니다. A.C.E.는 Steam 비밀번호를 절대 요구하지 않습니다.",
        "저장된 레이팅은 1,000에서 시작합니다. 어떤 매치 결과도 이 값을 바꾸지 않았습니다.",
        "모든 공개 페이지: 플레이, 토너먼트, 순위표, 팀, 규칙.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "감사 편지와 지원 안내",
      points: [
        "무료 플랜의 모든 기능.",
        "곧 제공: 감사 편지(포함 사항, 미포함 사항, support@ace-platform.gg)는 결제가 생긴 뒤에만 열립니다. 오늘은 버튼이 비활성화되어 있습니다.",
        "레이팅이나 더 쉬운 상대를 사지 않습니다. 골드 프로필 배지는 모든 플레이어의 저장된 경기 데이터에서 나옵니다. 엘리트 인장과 특별 배지는 저장된 등급이 이미 Premium일 때만 표시됩니다.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "프로필 아트, 배지, 분석",
      points: [
        "Plus의 모든 것.",
        "프리미엄 랭크 아트, 애니메이션 프로필 카드, 특별 배지, ELITE 인장.",
        "곧 제공: 확장 매치 분석, 베타 조기 이용, 우선 지원(응답 목표 72시간).",
        "경쟁상의 이점 없음: Rating Points 추가 없음, 매치메이킹 이점 없음.",
      ],
    },
  },
  card: {
    elite: "엘리트",
    stayFree: "무료 유지",
    freeNote: "지금 이용 가능",
    choose: "{plan} 선택",
    chooseAria: "{plan} 선택, 월 {price}",
  },
  billing: {
    kicker: "결제 일정 매트릭스",
    title: "결제가 생기면 작동하는 방식",
    body: "Plus는 정확히 월 {plus}입니다. Premium은 정확히 월 {premium}입니다.",
    display: {
      label: "01 · 표시",
      body: "무료 {free}. Plus 월 {plus}. Premium 월 {premium}. 유료 티어로 레이팅이나 더 쉬운 상대를 살 수 없습니다.",
    },
    rolling: {
      label: "02 · 월간 자동 주기",
      body: "결제가 생기면 요금은 월 단위 주기로 갱신됩니다. 한 달 중 일부만 사용한 기간은 환불되지 않습니다. 해지하면 다음 주기가 중단되며, 이미 결제된 현재 기간은 사라지지 않습니다.",
    },
    today: {
      label: "03 · 현재",
    },
  },
  compare: {
    kicker: "A.C.E.가 오늘 약속할 수 있는 것",
    title: "멤버십 비교",
    note: "모든 항목은 현재 사이트 상태를 반영합니다. 결제는 곧 제공되며, 유료 플랜은 대기열을 열거나 유리함을 사 주지 않습니다.",
    caption: "현재 사이트가 실제로 하는 일 기준으로 비교한 무료, Plus, Premium",
    includedToday: "현재 포함",
    columns: {
      free: "무료",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "공개 사이트",
        detail: "홈, 플레이, 토너먼트, 순위표, 팀, 규칙, 약관.",
      },
      steamSignIn: {
        feature: "Steam 로그인",
        detail: "공식 Steam OpenID. A.C.E.는 Steam 비밀번호를 절대 요구하지 않습니다.",
      },
      startingRating: {
        feature: "시작 레이팅",
        detail: "기록된 매치가 없는 신규 계정에 저장되는 수치입니다.",
      },
      recordedMatches: {
        feature: "기록된 매치",
        detail: "완료된 A.C.E. 매치에서 기록된 승리와 패배입니다.",
      },
      rankedQueue: {
        feature: "랭크 대기열",
        detail: "실제 대기열이 생기기 전까지 매치 찾기는 닫혀 있습니다.",
      },
      cs2Servers: {
        feature: "CS2 서버",
        detail: "이 사이트는 서버 주소나 접속 링크를 보내지 않습니다.",
      },
      antiCheatClient: {
        feature: "안티치트 클라이언트",
        detail: "이 웹사이트에서 다운로드되는 것은 없습니다.",
      },
      charge: {
        feature: "청구",
        detail: "Plus 또는 Premium을 선택해도 카드 정보를 받지 않습니다.",
      },
      ratingForSale: {
        feature: "레이팅 판매",
        detail: "유료 라벨로 레이팅이나 더 쉬운 상대를 살 수 없습니다.",
      },
      prizeOrWeapon: {
        feature: "상금 또는 무기",
        detail: "스킨, 나이프, 상금 풀은 지급되지 않습니다.",
      },
      goldEliteSeal: {
        feature: "엘리트 인장 및 특별 배지",
        detail:
          "Premium 전용이며, 서버에 저장된 등급에서 읽어 옵니다. 꾸미기 전용. 결제로 이 등급이 설정되지 않습니다.",
      },
    },
    cells: {
      open: "열림",
      yes: "예",
      noneYet: "아직 없음",
      closed: "닫힘",
      notConnected: "곧 출시",
      notShipped: "제공되지 않음",
      noCharge: "청구 없음",
      notForSale: "판매하지 않음",
      none: "없음",
      no: "아니요",
      storedTierOnly: "저장된 티어만",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Plus 영수증",
      metaDescription:
        "이 웹사이트에 표시되는 A.C.E. Plus 편지입니다. 결제가 운영 중이 아니므로 아무것도 청구되지 않으며 이메일도 발송되지 않습니다.",
      planName: "A.C.E. Plus",
      nextLabel: "A.C.E.에서 계속하기",
      nextBody:
        "공개 페이지는 계속 열려 있습니다. 이 선택은 대기열을 열지 않으며 저장된 티어를 바꾸지 않습니다.",
    },
    premium: {
      metaTitle: "Premium 영수증",
      metaDescription:
        "이 웹사이트에 표시되는 A.C.E. Premium 편지입니다. 결제가 운영 중이 아니므로 아무것도 청구되지 않으며 이메일도 발송되지 않습니다.",
      planName: "A.C.E. Premium",
      nextLabel: "스쿼드로 계속하기",
      nextBody:
        "스쿼드로 계속하세요. 페이지에서 5인 팀인지 묻습니다. 1번 자리는 로그인한 Steam 계정입니다. 2번부터 5번 자리는 다른 플레이어입니다. 클랜을 저장해도 이 가격은 청구되지 않습니다.",
    },
  },
  letter: {
    kicker: "{plan} · 월 {price}",
    title: "선택해 주셔서 감사합니다",
    flag: "이 편지는 웹사이트에 표시됩니다. 이메일은 발송되지 않았습니다. 카드에 청구되지 않았습니다. 결제는 운영 중이 아니며, 저장된 멤버십 티어도 바뀌지 않았습니다.",
    greeting: "플레이어님께,",
    intro:
      "{plan}을(를) 선택해 주셔서 감사합니다. 이 페이지가 영수증입니다. 표시 가격, 현재 이 선택에 포함된 것과 포함되지 않은 것, 그리고 이 웹사이트에 게시된 지원 주소를 기록합니다.",
    selected: {
      title: "선택한 내용",
      items: [
        "플랜 이름: {plan}.",
        "표시 가격: 월 {price}. 이 수치는 라벨일 뿐 청구가 아닙니다.",
        "결제: 없음. 이 플랜을 선택해도 카드 정보를 받지 않습니다.",
        "이메일: 없음. A.C.E.는 이 편지를 받은편지함으로 보내지 않습니다.",
        "저장된 등급: 변경 없음. 특별 배지와 엘리트 인장은 계정에 이미 Premium이 저장되어 있을 때만 표시됩니다.",
        "레이팅: 판매하지 않음. 신규 계정은 여전히 1,000에서 시작합니다.",
      ],
    },
    today: {
      title: "오늘 이용할 수 있는 것",
      items: [
        "공개 사이트: 홈, 플레이, 토너먼트, 순위표, 팀, 규칙, 약관.",
        "공식 Steam OpenID를 통한 Steam 로그인. A.C.E.는 Steam 비밀번호를 절대 요구하지 않습니다.",
        "무료와 같은 공개 페이지. 이 가격으로 별도의 대기열이 열리지 않습니다.",
      ],
    },
    excluded: {
      title: "이 선택에 포함되지 않는 것",
      items: [
        "실시간 랭크 대기열. 매치 찾기는 닫혀 있습니다.",
        "Counter-Strike 2 서버, 서버 주소, 접속 링크.",
        "안티치트 다운로드. A.C.E Shield는 개발 중입니다.",
        "상금, 스킨, 나이프, 상금 풀.",
        "100팀 보드의 자리. 시즌이 열리기 전까지 그 보드는 계속 등록 0으로 표시됩니다.",
        "더 쉬운 상대, 구매한 레이팅, 무료와 다른 공개 사이트.",
      ],
    },
    trouble: {
      title: "문제가 생겼다면",
      items: [
        "청구나 유료 티어 적용을 예상했다면: 아무것도 적용되지 않았습니다. 계정은 그대로입니다.",
        "이 편지가 받은편지함에 올 것으로 예상했다면: 이 편지는 이 페이지에만 존재합니다.",
        "Steam이 연결되지 않았다면: 먼저 약관 체크박스에 동의한 뒤 프로필 연결을 사용하세요. A.C.E.에 Steam 비밀번호를 절대 입력하지 마세요.",
        "도움이 필요하다면: 아래 지원 주소를 이용하거나 이 웹사이트의 도움말 페이지를 여세요.",
      ],
    },
    support: {
      title: "지원",
      addressBefore: "이 웹사이트에 게시된 지원 주소는 ",
      addressAfter: "입니다.",
      helpBefore: "사이트 도움말: ",
      supportLink: "지원",
      helpAnd: " 및 ",
      contactLink: "문의",
      rulesBefore: ". 규칙은 ",
      rulesLink: "규칙",
      rulesAnd: " 및 ",
      termsLink: "약관",
      helpAfter:
        "에 있습니다. 지원 페이지의 안내는 티켓을 열지 않으며, 문의 페이지에 입력한 내용은 전달되지 않습니다.",
    },
    next: {
      title: "다음 단계",
    },
  },
  telemetry: {
    kicker: "PLUS / PREMIUM 텔레메트리",
    copy: "대시보드 텔레메트리 잠김 — 구독 플랜을 A.C.E. Plus 또는 Premium으로 업그레이드하면 동적 실시간 전적 곡선과 무기 숙련도 지표가 잠금 해제됩니다.",
    cta: "요금표 열기",
  },
};
