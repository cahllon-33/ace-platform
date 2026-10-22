import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "statsConsole": {
    "metaTitle": "플레이어 통계",
    "kicker": "플레이어 통계",
    "title": "플레이어 통계",
    "lede": "기록된 A.C.E 경기의 레이팅 변화와 헤드샷 %, 명중률 게이지. A.C.E Plus(월 $4)와 A.C.E Premium(월 $7)에 포함됩니다.",
    "movementTitle": "레이팅 변화",
    "movementNote": "각 점은 기록된 A.C.E 경기에서 기록된 레이팅 변화입니다.",
    "noMatches": "아직 기록된 경기가 없어 그래프가 비어 있습니다. 첫 A.C.E 경기가 기록되면 채워집니다.",
    "currentLabel": "현재 레이팅",
    "netLabel": "순변화",
    "changesLabel": "기록된 변화",
    "hsTitle": "헤드샷 %",
    "accTitle": "명중률 (명중 / 발사)",
    "gaugeSoon": "곧 제공: 이 게이지에는 경기 데모 분석이 필요하며 아직 존재하지 않습니다.",
    "soon": "곧 제공",
    "sample": "샘플 · 형태만, 실제 데이터 아님",
    "lockedTitle": "플레이어 통계는 A.C.E Plus와 Premium에 포함됩니다",
    "lockedBody": "저장된 플랜은 Free입니다. Plus(월 $4)와 Premium(월 $7) 모두 이 페이지를 엽니다. 곧 제공: 아직 결제가 없습니다.",
    "signIn": "플레이어 통계를 보려면 Steam으로 로그인하세요.",
    "plansLink": "플랜 보기",
    "rosterNote": "예시 로스터 프로필: 이 선수들은 기록된 A.C.E 경기가 없어 통계에 숫자가 표시되지 않습니다.",
    "dashTitle": "통계 및 분석",
    "dashStats": "플레이어 통계 열기",
    "dashAnalysis": "경기 분석 열기 (Premium)",
    "chartAria": "레이팅 변화 차트"
  },
  "dashboard": {
    "meta": {
      "title": "커맨드 덱"
    },
    "kicker": "인증됨",
    "title": "커맨드 덱",
    "lede": "Steam OpenID로 로그인했습니다. 세션은 localStorage가 아닌 HttpOnly 쿠키에 저장됩니다. 안티치트가 실제로 존재하기 전까지 랭크 매치 찾기는 닫혀 있습니다.",
    "eliteBadge": "엘리트",
    "stats": {
      "accountStatus": "계정 상태",
      "subscription": "구독",
      "rank": "A.C.E 랭크",
      "ratingPoints": "레이팅 포인트",
      "wins": "승리",
      "losses": "패배",
      "accountId": "내부 계정 ID"
    },
    "accountStatuses": {
      "ACTIVE": "활성",
      "SUSPENDED": "정지됨",
      "BANNED": "차단됨",
      "TEMP_BANNED": "일시 차단됨",
      "PERM_BANNED": "영구 차단됨",
      "UNDER_REVIEW": "검토 중"
    },
    "tiers": {
      "FREE": "무료",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "주장",
      "PLAYER": "플레이어"
    },
    "settings": {
      "title": "대시보드 설정 프로필",
      "billingNotLive": "결제가 생기기 전까지 모든 계정은 Free입니다.",
      "cancelReason": "해지할 유료 구독이 없습니다. 결제는 구현되어 있지 않습니다.",
      "cancelButton": "구독 해지"
    },
    "rankedReason": "검증된 안티치트 연동이 생기기 전까지 랭크 매치메이킹은 거부됩니다.",
    "rankedButton": "랭크 매치 찾기",
    "roster": {
      "title": "5v5 로스터",
      "body": "주장 1명. 초대 4건. 주장은 다른 A.C.E 계정 ID를 초대하며, 이 ID는 검증된 Steam 로그인 후에만 생성됩니다."
    },
    "pendingInvites": "대기 중인 초대"
  },
  "forms": {
    "requestFailed": "요청에 실패했습니다.",
    "createTeam": {
      "acceptRequired": "계속하려면 이용 약관, 안티치트 EULA, 개인정보 처리방침에 동의하세요.",
      "failed": "팀을 만들 수 없습니다.",
      "nameLabel": "새 5v5 팀 이름",
      "submitAria": "새 5v5 팀 창설",
      "submit": "팀 창설"
    },
    "invite": {
      "failed": "초대에 실패했습니다.",
      "label": "SteamID 또는 A.C.E 계정 ID로 자유 계약 선수 초대",
      "submitAria": "팀 초대 보내기",
      "submit": "초대 보내기"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "플레이어 프로필",
      "title": "{name} · A.C.E 프로필",
      "description": "A.C.E 플레이어 신상 파일입니다. Plus 및 Premium 세션에서는 텔레메트리 추세 그래프가 잠금 해제됩니다."
    },
    "kicker": "플레이어 신원",
    "bannerPlaceholder": "프로필 배너 · 곧 출시",
    "levelBadge": "레벨 {level}",
    "rosterLevel": "로스터 레벨 {level}.",
    "trend": {
      "title": "경쟁 레이팅 성과 추세",
      "note": "연속된 매치 기록 로그에 따른 레이팅 포인트입니다."
    },
    "combat": {
      "title": "상세 전투 데이터 매트릭스",
      "kills": "총 킬",
      "deaths": "총 데스",
      "kd": "계산된 K/D",
      "headshots": "총 헤드샷",
      "headshotPct": "헤드샷 비율 범위",
      "knifeKills": "특수 나이프 킬"
    },
    "weapon": {
      "title": "대표 무기 특화",
      "note": "주력 캘리브레이션 무기 플랫폼",
      "accuracy": "정확도 등급",
      "kills": "무기 총 킬"
    },
    "gear": {
      "title": "데스크톱 사양",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "모니터 주사율 (Hz)",
      "mouse": "마우스 모델",
      "dpi": "사용 중인 DPI 설정"
    },
    "networksTitle": "Steam 프로필 링크",
    "back": "클랜 로스터로 돌아가기"
  },
  "networks": {
    "note": "여기에 입력한 링크는 이 브라우저에만 남으며 저장되지 않습니다. A.C.E는 Steam 비밀번호를 절대 요구하지 않습니다.",
    "labels": {
      "steam": "Steam 프로필"
    },
    "open": "{label} 열기 >"
  },
  "ratingTrend": {
    "chartAria": "경쟁 레이팅 성과 추세",
    "pointAria": "매치 {match}: 레이팅 {rating}",
    "axisLabel": "{match}경기",
    "idle": "노드에 마우스를 올리면 레이팅 기록을 확인할 수 있습니다.",
    "readout": "매치 {match} · 레이팅 {rating}"
  },
  "loginError": {
    "meta": {
      "title": "로그인 오류"
    },
    "title": "Steam 로그인이 완료되지 않았습니다",
    "notConfigured": "이 서버에는 아직 Steam OpenID가 구성되어 있지 않습니다. A.C.E는 Steam 비밀번호를 절대 요구하지 않습니다.",
    "unavailable": "Steam이 인증 요청에 응답하지 않았습니다. 잠시 후 다시 시도하세요. A.C.E는 Steam 비밀번호를 절대 요구하지 않습니다.",
    "unverified": "서버에서 OpenID 콜백을 검증할 수 없었습니다. A.C.E는 Steam 비밀번호를 절대 요구하지 않습니다.",
    "returnHome": "홈으로 돌아가기"
  }
};
