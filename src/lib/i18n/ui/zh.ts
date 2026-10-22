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
    "legalLine": "© 2026 A.C.E. 独立平台，与 Valve 无关联。Counter-Strike 和 CS2 是 Valve Corporation 的商标。"
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
      "waiting": "等待玩家",
      "note": "至少有一场已记录排位赛的真实账号，按已保存的 RP 排序。没有展示行或虚构行。"
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
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · 竞技平台",
      "h1a": "竞技。",
      "h1b": "校准。",
      "h1c": "晋升。",
      "sub": "使用 Steam 登录、公开 RP 天梯，以及永不出售优势的方案的排位 CS2。",
      "trust1": "仅限 CS2",
      "trust2": "Steam OpenID 登录",
      "trust3": "$0 · $4 · $7 — 不能花钱取胜",
      "trust4": "10 个段位 · 以 1,200 RP 起步",
      "stepsKicker": "运作方式",
      "stepsTitle": "三步获得首个段位",
      "step1t": "连接 Steam",
      "step1b": "通过 Steam OpenID 登录。A.C.E. 永远看不到你的 Steam 密码。",
      "step2t": "校准",
      "step2b": "你从第 3 级、1,200 RP 起步。每场记录的比赛都会按公开规则调整你的 RP。",
      "step3t": "晋升",
      "step3b": "胜利最多 +30 RP（最佳选手 +32），失败最多 −30。你的段位始终跟随 RP。",
      "ranksTitle": "十个段位。一张公开表格。",
      "ranksBody": "徽章颜色按等级固定，段位始终根据你保存的 RP 计算。",
      "ranksCta": "查看所有段位",
      "plansTitle": "不卖胜利的方案",
      "plansBody": "付费方案仅提供外观与便利。支付尚未开通，所以今天所有人都是 Free。",
      "plansCta": "比较方案",
      "free": "免费",
      "perMonth": "/月",
      "signedInKicker": "欢迎回来"
    },
    "profile": {
      "kicker": "玩家",
      "notFound": "未找到玩家",
      "notFoundBody": "没有 A.C.E. 账户使用此 Steam ID，或该资料未公开。",
      "rating": "评分",
      "rank": "段位",
      "record": "战绩",
      "memberSince": "{date} 加入",
      "steamProfile": "Steam 资料",
      "yourProfile": "这是你的资料",
      "backToBoard": "返回排行榜"
    },
    "board": {
      "podium": "顶尖玩家",
      "viewProfile": "查看资料"
    },
    "chat": {
      "sources": "来源",
      "noMatch": "我在 A.C.E. 网站内容中没有找到这个。你可以把问题作为工单发送给团队。",
      "s1": "Premium 多少钱？",
      "s2": "如何获得 RP？",
      "s3": "如何举报作弊者？",
      "kbNote": "回答来自 A.C.E. 网站内容。"
    }
  },
  "r40": {
    "dash": {
      "kicker": "指挥中心",
      "welcome": "欢迎回来，{name}",
      "quick": "快捷操作",
      "qProfile": "公开资料",
      "qBoard": "排行榜",
      "qRanks": "段位表",
      "qPlay": "开始游戏",
      "statRp": "积分",
      "statRank": "段位",
      "statRecord": "战绩",
      "statWinRate": "胜率",
      "statPlan": "方案",
      "toNext": "距离{next}还差{rp} RP",
      "top": "阶梯之巅",
      "activity": "最近动态",
      "activityEmpty": "暂无记录的动态。比赛和登录发生后会显示在这里。",
      "evSignIn": "通过 Steam 登录",
      "evRating": "积分 {before} → {after}",
      "noRecord": "暂无比赛",
      "account": "账户"
    },
    "nf": {
      "code": "错误 404",
      "title": "此页面不在地图上",
      "body": "链接可能已过期或输入有误。从这里一键即可到达 A.C.E. 的任何页面。",
      "home": "返回首页",
      "ranks": "查看段位"
    },
    "err": {
      "code": "出了点问题",
      "title": "发生了意外错误",
      "body": "没有产生任何扣费，你的账户是安全的。请重试或返回首页。",
      "retry": "重试"
    }
  },
  "r41": {
    "vf": {
      "label": "已认证玩家",
      "tip": "已认证：已绑定 Steam，账户状态良好，经 A.C.E. 审核。"
    },
    "st": {
      "kicker": "表现",
      "title": "玩家数据",
      "lede": "每个数字都来自已记录的 A.C.E. 比赛，没有任何估算。",
      "empty": "暂无已记录的比赛。首场排位赛后数据会显示在这里。",
      "winRate": "胜率",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "残局获胜",
      "entry": "首杀成功",
      "utility": "道具伤害",
      "heatmap": "活跃度",
      "heatmapEmpty": "暂无比赛日",
      "rpChart": "RP 走势",
      "rpEmpty": "暂无积分变化",
      "maps": "地图",
      "weapons": "武器",
      "multi": "多杀",
      "totals": "总计",
      "matches": "比赛",
      "kills": "击杀",
      "deaths": "死亡",
      "open": "查看数据",
      "less": "少",
      "more": "多",
      "none": "—"
    },
    "ab": {
      "title": "关于 A.C.E.",
      "lede": "一个围绕唯一公开段位表、且付费方案绝不购买优势的 Counter-Strike 2 竞技平台。",
      "b1": "A.C.E. 运营 CS2 排位赛、天梯和锦标赛。通过 Steam OpenID 登录，我们永远看不到你的 Steam 密码。",
      "b2": "你的段位只根据已记录的结果和公开规则计算。付费方案仅提供外观与便利功能。",
      "b3": "A.C.E. 是独立平台，与 Valve 无关联。"
    },
    "ss": {
      "title": "服务器状态",
      "lede": "在你打开页面时由本服务器实时检测，没有任何估算。",
      "web": "网站",
      "db": "数据库",
      "match": "比赛服务器",
      "ok": "运行正常",
      "down": "不可用",
      "notLive": "尚未上线",
      "checked": "检测于 {time}"
    },
    "rp": {
      "title": "举报玩家",
      "lede": "告诉运营人员发生了什么。每条举报都由人工审核。",
      "target": "玩家的 SteamID64",
      "reason": "原因",
      "rCheat": "作弊",
      "rToxic": "恶意行为",
      "rOther": "其他",
      "details": "详情（可选）",
      "submit": "提交举报",
      "signIn": "请先通过 Steam 登录再提交举报。",
      "sent": "已收到举报。运营人员会审核每条举报。",
      "invalid": "请输入有效的 SteamID64（17 位数字）。",
      "open": "举报玩家"
    },
    "nt": {
      "title": "通知",
      "empty": "没有新通知。",
      "markRead": "全部标为已读"
    },
    "se": {
      "title": "赛季",
      "lede": "赛季将重置排名并颁发赛季结束徽章。",
      "none": "尚未开始任何赛季。首个赛季开放时会在此公布。"
    }
  },
  "r41b": {
    "lv": {
      "nav": "直播",
      "title": "赛事直播",
      "lede": "A.C.E. 官方赛事直播。只有在运营人员将其设为直播中时才会显示在这里。",
      "none": "当前没有直播",
      "noneBody": "官方直播开始后会显示在这里。在此之前，请查看下方的赛事。",
      "schedule": "即将开始的赛事",
      "noSchedule": "暂无已安排的赛事。",
      "onAir": "直播中",
      "watch": "观看直播"
    }
  },
  "r46": {
    "aria": "A.C.E. 的坚持",
    "fair": "公平竞技保护",
    "fairSub": "Steam 登录、公开规则，以及由管理员审核的玩家举报。",
    "calib": "竞技校准",
    "calibSub": "定级赛与 100 到 3,000 的公开 RP 天梯。",
    "elite": "精英玩家",
    "eliteSub": "十个段位与五枚荣耀徽章，只能通过 RP 获得。"
  },
  "r45": {
    "title": "超越 Legend",
    "lede": "A.C.E. Legend 之上的五枚荣耀徽章，从 2,150 到 2,950 RP 每 200 RP 一枚。只能通过比赛获得。",
    "plus": "Plus · 铂金",
    "premium": "Premium · 金色火焰",
    "fair": "所有人的 RP 相同。荣耀门槛、匹配和评分在每个方案中都一样。这里没有任何东西可以购买。",
    "finish": "荣耀质感需要 Plus 或 Premium。Free 玩家达到同样的门槛，并以文字里程碑显示。",
    "link": "完整徽章规则"
  },
  "r44": {
    "kicker": "你的段位",
    "next": "下一级",
    "winRate": "胜率",
    "noMatches": "还没有排位比赛。你的第一场结果会显示在这里。",
    "finishPlus": "Plus · 铂金质感",
    "finishPremium": "Premium · 金色火焰质感",
    "progressAria": "距离 {name} 的进度",
    "matches": "比赛"
  },
  "r42": {
    "playTitle": "立即开玩",
    "playSub": "寻找 CS2 排位赛，开始攀升",
    "newPill": "新",
    "shopAria": "打开商店"
  },
  "r41c": {
    "v5": {
      "vTier": "第 7–9 段的胜利和失败都乘以 {t7}，第 10 段（{top}）乘以 {t10}，因此 50% 的胜率在任何段位都能保住你的段位。",
      "vPlacement": "你的前 {n} 场比赛变化快 {pk} 倍，帮你尽快找到自己的水平。定级期间积分不会超过第 {maxTier} 段（{cap} RP）。",
      "vAbandon": "无论结果如何都算作双倍失败，至少 −{abandon} RP，且没有 MVP 奖励。",
      "ex2": "途中的每场失败都会增加所需胜场。第 7–9 段胜利 +{win7}、失败 −{loss7}，因此在势均力敌的比赛中胜率超过 {breakEven}% 就能继续上升。"
    },
    "pr": {
      "kicker": "荣耀",
      "title": "徽章规则",
      "lede": "A.C.E. 每枚徽章的获得方式。徽章仅为外观：绝不改变匹配、RP 或任何规则。",
      "ranks": "段位徽章（第 1–10 段）跟随你的 RP。所有人看到相同的段位和相同的固定段位颜色。",
      "prestige": "荣耀徽章是 {elite} RP 之上的五个长期目标：从 2,150 到 2,950，每 200 RP 一枚。",
      "free": "Free：徽章保持 A.C.E. Legend，荣耀等级以文字里程碑显示。你的 RP 永不封顶。",
      "plus": "Plus：铂金荣耀系列。",
      "premium": "Premium：动态黄金荣耀系列。",
      "lose": "跌破荣耀门槛时徽章随 RP 回落；再次达到时恢复。",
      "level": "荣耀 {n} · {name}",
      "from": "{rp} RP 起",
      "milestone": "已达成荣耀 {n}",
      "perk": "荣耀徽章系列（2,150–3,000 RP），凭 RP 获得",
      "open": "徽章规则",
      "wins": "从上一阶段起约需在势均力敌的比赛中赢 {n} 场"
    }
  },
  "r48": {
    "kicker": "排位 5v5",
    "title": "单排队列",
    "lede": "独自加入即可。凑满十人后，A.C.E 按 RP 平衡两支队伍，进行准备确认和队长地图禁用，然后在我们的服务器上开始比赛。",
    "inQueue": "排队中",
    "count": "队列中 {n} / {total} 名玩家",
    "waiting": "还差 {n} 人",
    "elapsed": "已搜索 {time}",
    "join": "加入队列",
    "leave": "离开队列",
    "signIn": "使用 Steam 登录后加入队列",
    "serverBusy": "服务器上正在进行一场比赛。结束后会组建下一个房间；你现在仍可排队。",
    "readyTitle": "找到比赛",
    "readyLede": "请在 {s} 秒内接受。未接受者将被移出，其他人回到队列。",
    "accept": "接受",
    "decline": "拒绝",
    "accepted": "已接受 {n} / {total}",
    "youAccepted": "你已接受，正在等待其他人。",
    "vetoTitle": "地图禁用",
    "vetoLede": "双方队长（各队 RP 最高者）轮流禁用，直到只剩一张 Active Duty 地图。",
    "yourTurn": "轮到你：禁用一张地图",
    "theirTurn": "{team} 队长正在禁用",
    "turnLeft": "剩余 {s} 秒",
    "ban": "禁用",
    "bannedBy": "由 {team} 禁用",
    "autoBan": "自动禁用（超时）",
    "teamA": "阿尔法队",
    "teamB": "布拉沃队",
    "captain": "队长",
    "launching": "正在服务器上创建比赛…",
    "liveTitle": "比赛已就绪",
    "connect": "连接服务器",
    "connectNote": "通过 Steam 打开 CS2。你有 5 分钟加入，否则比赛取消。",
    "console": "或粘贴到 CS2 控制台：connect {address}",
    "map": "地图",
    "avgRp": "平均 {rp} RP",
    "cancelled": "房间已取消。已接受的玩家已回到队列。",
    "failed": "服务器无法开始这场比赛。没有人损失 RP。请重新排队。",
    "done": "比赛结束。结果和 RP 以服务器报告为准。",
    "testTag": "测试房间",
    "lobbyNote": "这里只显示真实的 A.C.E 玩家。段位和 RP 为其已保存的数值。",
    "errors": {
      "steam-required": "请先绑定 Steam 账号再排队。",
      "not-eligible": "你的账号目前无法排队。",
      "in-match": "你已在一个房间中。",
      "not-your-turn": "请等待你的回合。",
      "not-captain": "只有队长可以禁用地图。",
      "unavailable": "队列暂不可用，请稍后再试。",
      "sign-in": "请先使用 Steam 登录。"
    }
  },
  "r48b": {
    "estimate": "预计等待 {time}",
    "estimateNone": "进行几场比赛后会显示等待预估",
    "region": "服务器地区：{region}",
    "latency": "网站延迟 {ms} 毫秒 · 游戏内 ping 在连接后显示",
    "alertsOn": "开启比赛提醒",
    "alertsActive": "比赛提醒已开启",
    "soundOn": "声音开",
    "soundOff": "声音关",
    "notifTitle": "找到 A.C.E 比赛",
    "notifBody": "请在 20 秒内接受。",
    "winChance": "胜率 {p}%",
    "leaverWarn": "中途离开比赛或未连接将被暂停排队：30 分钟，重复时最长 7 天。",
    "dodgeWarn": "拒绝或错过准备确认将被暂停：24 小时内依次 2、5、15、30、然后 60 分钟。",
    "copyIp": "复制 IP",
    "copied": "已复制",
    "liveScore": "实时比分",
    "round": "第 {n} 回合",
    "activeMatch": "你有一场进行中的比赛",
    "reconnect": "重新连接",
    "resultsTitle": "比赛结果",
    "win": "胜利",
    "loss": "失败",
    "draw": "平局",
    "rpChange": "{delta} RP",
    "rpPending": "服务器报告核实后显示 RP。",
    "kills": "击杀",
    "deaths": "死亡",
    "assists": "助攻",
    "damage": "伤害",
    "mvps": "MVP",
    "hs": "爆头",
    "cooldown": "排队暂停：剩余 {time}",
    "banned": "你已被禁止排队。",
    "bannedUntil": "禁止排队至 {date}",
    "errBanned": "你已被禁止排队。",
    "errCooldown": "你正处于排队暂停。"
  },
  "r48c": {
    "launching": "正在启动 CS2 并为你连接…",
    "hint": "如果 CS2 没有打开，说明浏览器阻止了启动。请点击加入比赛。",
    "join": "加入比赛",
    "watch": "观看直播"
  },
  "r49": {
    "soon": "结账即将开放",
    "signIn": "使用 Steam 登录后即可订阅",
    "subscribe": "订阅 {plan}",
    "opening": "正在打开安全结账…",
    "failed": "无法打开结账，请重试。",
    "processing": "付款已发送至 Paddle。Paddle 确认后您的方案会立即更新，通常在一分钟内。",
    "current": "您当前的方案",
    "agree": "订阅即表示您同意服务条款、退款政策和隐私政策。付款由 Paddle 作为记录商户（Merchant of Record）处理。",
    "terms": "服务条款",
    "refunds": "退款政策",
    "privacy": "隐私政策",
    "cookies": "Cookie 政策",
    "planTitle": "会员",
    "renews": "将于 {date} 续订或结束",
    "pastDue": "付款失败。Paddle 会重试；请更新付款方式以保留方案。",
    "canceled": "订阅已结束。您目前为 Free。",
    "manage": "管理订阅",
    "manageNote": "在 Paddle 客户门户中更换付款方式、下载发票或取消订阅。",
    "seePlans": "查看方案",
    "legalEnglish": "此法律页面为英文。以英文文本为准。",
    "signInBuy": "使用 Steam 登录后即可购买",
    "pendingConfirm": "付款已发送至 Paddle。Paddle 确认后立即添加。",
    "shopTitle": "装饰",
    "shopEmpty": "暂无在售装饰。",
    "shopDown": "商店当前不可用。",
    "cosmeticOnly": "仅为装饰。不提供游戏优势，不影响匹配或 RP。",
    "kindFrame": "头像框",
    "kindBanner": "横幅",
    "kindEffect": "段位卡特效",
    "kindName": "名字颜色",
    "buy": "购买 · {price}",
    "owned": "已拥有",
    "equip": "装备",
    "unequip": "卸下",
    "entryTitle": "赛事报名",
    "entryFee": "报名费：{price}",
    "freeEntry": "免费报名",
    "payEnter": "付款并报名",
    "registered": "已报名",
    "team": "战队",
    "captainOnly": "只有战队队长可以为战队报名。",
    "prizeNote": "奖品仅为非现金：装饰或订阅时长。报名费绝不用于现金奖金。",
    "communityTitle": "社区",
    "communityLede": "关注 A.C.E，获取比赛新闻、赛事和精彩集锦。",
    "followOn": "A.C.E 的 {network}"
  }
};
