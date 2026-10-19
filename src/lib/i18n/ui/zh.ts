import type { Ui } from "./en";

export const UI_ZH: Ui = {
  "nav": {
    "home": "首页",
    "play": "开始游戏",
    "ranks": "段位",
    "tournaments": "赛事",
    "leaderboard": "排行榜",
    "teams": "战队",
    "getPremium": "开通高级会员",
    "maps": "地图",
    "prizes": "奖品",
    "shop": "商店",
    "rules": "规则",
    "antiCheat": "反作弊",
    "features": "功能",
    "pricing": "价格",
    "compete": "竞技",
    "explore": "探索"
  },
  "footer": {
    "platform": "平台",
    "competition": "赛事",
    "company": "公司",
    "legal": "法律信息",
    "tagline": "以公平竞技为核心的 Counter-Strike 2 竞技天梯。",
    "follow": "关注 A.C.E.",
    "rights": "保留所有权利。",
    "legalLine": "© 2026 A.C.E. Competitions Ltd. 独立平台，与 Valve 无关联。Counter-Strike 和 CS2 是 Valve Corporation 的商标。"
  },
  "soon": {
    "label": "即将推出"
  },
  "cta": {
    "kicker": "第 1 赛季",
    "title": "准备好竞技了吗？",
    "body": "连接 Steam，完成定级，一路向上。",
    "play": "开始 A.C.E",
    "ranks": "了解段位"
  },
  "status": {
    "title": "平台状态",
    "steam": "Steam OpenID 登录",
    "shield": "A.C.E Shield · 部署阶段",
    "servers": "竞技服务器 · 竞技测试版",
    "billing": "支付接入",
    "available": "已上线",
    "inDevelopment": "开发中",
    "comingSoon": "即将推出",
    "designed": "已设计"
  },
  "ranksTabs": {
    "label": "段位",
    "tiers": "段位与分级",
    "codex": "定级指南"
  },
  "maps": {
    "kicker": "竞技地图池",
    "title": "地图与直播",
    "lede": "A.C.E. 竞技地图池由七张地图组成。各队在规则手册规定的地图禁选环节中从中禁用和选择。赛事直播将显示在下方屏幕上。",
    "rulebook": "查看禁选规则",
    "screen": "直播屏幕",
    "offAir": "未在直播",
    "noBroadcast": "当前没有直播。",
    "nextLabel": "下一场直播",
    "notScheduled": "即将在此公布",
    "embeddedFrom": "直播来自 {provider}。",
    "pool": "当前地图池",
    "poolMeta": "{count} 张地图 · BO1 / BO3 禁选",
    "mapLabel": "地图 {n}",
    "settings": {
      "dust": "沙漠小镇",
      "mirage": "集市街区",
      "inferno": "古老村庄",
      "nuke": "工业设施",
      "ancient": "丛林遗迹",
      "anubis": "运河神殿",
      "train": "铁路调车场"
    },
    "notes": {
      "dust": "A 点视野开阔，中路门道狭窄。",
      "mirage": "中路控制决定大多数回合。",
      "inferno": "狭窄通道，进攻依赖道具。",
      "nuke": "上下重叠的包点与快速垂直转点。",
      "ancient": "中路压向 B 点决定半场走势。",
      "anubis": "水路中路与开阔的 B 点进攻。",
      "train": "车厢间的掩体与 A 点长线。"
    }
  },
  "prizes": {
    "kicker": "冠军奖品",
    "title": "奖品",
    "lede": "这是我们为第 1 赛季冠军准备的奖励阵容。奖金池将在各赛事页面公布时，依据规则手册第 18 条予以确认。",
    "rulebook": "奖品规则",
    "cardKicker": "传奇奖励",
    "slots": {
      "first": "冠军 · 每名选手",
      "second": "亚军 · 每名选手",
      "mvp": "MVP 奖"
    },
    "facts": {
      "pool": "奖金池",
      "items": "奖励物品",
      "delivery": "发放",
      "season": "赛季"
    },
    "factValues": {
      "season": "第 1 赛季"
    }
  },
  "rules": {
    "kicker": "A.C.E. 竞赛规则手册",
    "title": "竞赛规则",
    "version": "版本 {version} · 自 {date} 起生效",
    "intro": "所有 A.C.E. 赛事均依据本规则进行。标注“部署后适用”的条款将在其所依赖的系统上线后生效。",
    "pending": "部署后适用",
    "contents": "目录",
    "penalties": {
      "offence": "违规行为",
      "first": "首次违规",
      "repeat": "再次违规",
      "rule": "条款"
    },
    "englishNote": "",
    "sections": [
      "适用范围与定义",
      "参赛资格",
      "账号与身份",
      "战队与阵容",
      "队长",
      "地图池与禁选",
      "比赛流程",
      "比赛设置",
      "服务器与技术问题",
      "暂停",
      "掉线",
      "弃权与缺席",
      "行为规范",
      "作弊与竞技公正",
      "争议与申诉",
      "处罚",
      "直播",
      "奖品",
      "Rating Points",
      "修订"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "反作弊",
    "lede": "A.C.E Shield 是正在为每场 A.C.E. 比赛打造的公正系统：客户端、服务器、比赛与行为检测协同工作，并以隐私优先为设计原则。",
    "statusLabel": "部署阶段",
    "pillarsTitle": "架构支柱",
    "pillars": {
      "client": {
        "title": "客户端完整性",
        "body": "轻量客户端在比赛中校验游戏环境，并上报篡改迹象。"
      },
      "server": {
        "title": "服务器完整性",
        "body": "比赛服务器使用锁定配置、签名插件与防篡改日志。"
      },
      "match": {
        "title": "比赛完整性",
        "body": "每个回合都通过录像与事件日志记录，任何结果都可复核。"
      },
      "behaviour": {
        "title": "行为分析",
        "body": "统计模型标记异常的瞄准、反应和信息模式，交由人工审核。"
      },
      "identity": {
        "title": "身份",
        "body": "Steam OpenID 账号，一人一号，并检测规避封禁行为。"
      }
    },
    "roadmapTitle": "路线图",
    "phases": {
      "p1": {
        "title": "阶段 1 · 架构",
        "body": "威胁模型、数据流与隐私设计。"
      },
      "p2": {
        "title": "阶段 2 · 服务器与比赛完整性",
        "body": "锁定的服务器配置、录像采集、防篡改日志。"
      },
      "p3": {
        "title": "阶段 3 · 行为分析",
        "body": "审核工具与首批统计模型。"
      },
      "p4": {
        "title": "阶段 4 · 客户端完整性",
        "body": "Shield 客户端测试版，并接受公开安全审查。"
      },
      "p5": {
        "title": "阶段 5 · 竞技测试版",
        "body": "排位赛与赛事强制使用 Shield。"
      }
    },
    "privacyTitle": "隐私原则",
    "privacy": [
      "我们只收集保护比赛所必需的数据，并明确说明具体内容。",
      "在有文档记录、经独立审查的安全实现之前，不收集任何硬件标识符。",
      "比赛数据仅保存固定期限，随后删除。",
      "任何处罚均可申诉，并由人工复核。"
    ],
    "faqTitle": "常见问题",
    "faq": [
      {
        "q": "A.C.E Shield 现在已启用吗？",
        "a": "尚未启用。它正在开发中，上方每个阶段都显示了当前状态。"
      },
      {
        "q": "需要内核权限吗？",
        "a": "设计从用户模式检测和服务器端分析开始。任何更深层的权限都会先公开记录并接受审查。"
      },
      {
        "q": "高级会员会影响反作弊吗？",
        "a": "不会。公正规则对所有选手一视同仁，付费方案绝不提供竞技优势。"
      },
      {
        "q": "如何举报作弊者？",
        "a": "请通过联系页面举报。举报将依据规则手册第 14 条进行审核。"
      }
    ]
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "打造你的竞技身份。校准你的实力。攀登 A.C.E. 段位。",
      "connectSteam": "连接 Steam",
      "openDashboard": "打开控制台",
      "exploreRanks": "查看段位"
    },
    "status": {
      "title": "平台状态",
      "steam": "Steam 登录",
      "shield": "A.C.E. Shield",
      "servers": "竞技服务器",
      "tournaments": "锦标赛",
      "billing": "计费",
      "available": "可用",
      "inDevelopment": "开发中",
      "comingSoon": "即将推出",
      "preparing": "准备中",
      "billingOff": "未启用 · 不收取任何费用"
    },
    "card": {
      "matches": "比赛",
      "wl": "胜/负",
      "kd": "K/D",
      "noMatches": "暂无记录的比赛",
      "division": "第 {division} 分级"
    },
    "journey": {
      "title": "你的竞技之路",
      "currentRp": "当前 RP",
      "current": "当前",
      "next": "下一级",
      "toGo": "距下一分级还差 {rp} RP",
      "top": "已达到最高分级",
      "basis": "根据你已保存的 RP 和公开的段位表计算。"
    },
    "board": {
      "emptyTitle": "暂无排位比赛",
      "emptyBody": "玩家在第一场排位比赛被记录后会出现在这里。此榜单没有任何虚构内容。",
      "previewTag": "预览",
      "lobbyTitle": "大厅",
      "matchFoundTitle": "已找到比赛",
      "previewNote": "仅为布局预览：没有运行中的队列或服务器，名称均为占位。",
      "accept": "接受",
      "waiting": "等待玩家"
    },
    "toast": {
      "region": "通知",
      "dismiss": "关闭通知",
      "signedIn": "已以 {name} 身份登录",
      "signedOut": "你已退出登录。",
      "authFailed": "Steam 登录未完成，请重试。"
    },
    "sound": {
      "on": "界面音效：开",
      "off": "界面音效：关"
    },
    "chat": {
      "open": "打开客服聊天",
      "close": "关闭客服聊天",
      "title": "A.C.E. 客服",
      "greeting": "你好！我是 A.C.E. 客服助手。可以问我关于段位、套餐、规则或账号的问题。",
      "placeholder": "输入你的问题…",
      "send": "发送",
      "unavailable": "客服聊天暂不可用。",
      "disclaimer": "自动回复可能有误。封禁和账号决定仅由管理团队作出。",
      "escalate": "发送给团队",
      "escalated": "已保存为客服工单，管理团队会进行审核。",
      "error": "出了点问题，请重试。",
      "rateLimited": "消息过多，请稍候。",
      "thinking": "正在输入…",
      "tooLong": "消息过长（最多 {max} 个字符）。"
    }
  }
};
