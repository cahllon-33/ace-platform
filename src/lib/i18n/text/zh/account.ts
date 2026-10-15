import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  statsConsole: {
    "metaTitle": "玩家数据",
    "kicker": "玩家数据",
    "title": "玩家数据",
    "lede": "基于你已记录的 A.C.E. 比赛的积分变化，并配有爆头率和命中率仪表。包含在 A.C.E Plus（每月 $4）和 A.C.E Premium（每月 $7）中。",
    "movementTitle": "积分变化",
    "movementNote": "每个点都是从一场已记录的 A.C.E. 比赛写入的积分变化。",
    "noMatches": "尚无已记录的比赛，因此图表为空。你的第一场 A.C.E. 比赛被记录后将显示数据。",
    "currentLabel": "当前积分",
    "netLabel": "净变化",
    "changesLabel": "已记录变化",
    "hsTitle": "爆头率",
    "accTitle": "命中率（命中 / 射击）",
    "gaugeSoon": "即将推出：这些仪表需要比赛录像解析，目前尚不存在。",
    "soon": "即将推出",
    "sample": "示例 · 仅为形状，并非真实数据",
    "lockedTitle": "玩家数据属于 A.C.E Plus 和 Premium",
    "lockedBody": "你保存的方案是 Free。Plus（每月 $4）和 Premium（每月 $7）都能解锁本页。即将推出：结账功能尚未上线。",
    "signIn": "使用 Steam 登录以查看你的玩家数据。",
    "plansLink": "查看方案",
    "rosterNote": "示例阵容资料：这些选手没有已记录的 A.C.E. 比赛，因此数据不显示任何数字。",
    "dashTitle": "数据与分析",
    "dashStats": "打开玩家数据",
    "dashAnalysis": "打开比赛分析（Premium）",
    "chartAria": "积分变化图"
  },
  "dashboard": {
    "meta": {
      "title": "指挥台"
    },
    "kicker": "已验证",
    "title": "指挥台",
    "lede": "已通过 Steam OpenID 登录。会话保存在 HttpOnly Cookie 中,而非 localStorage。在真正的反作弊上线前,排位搜索保持关闭。",
    "eliteBadge": "精英",
    "stats": {
      "accountStatus": "账户状态",
      "subscription": "订阅",
      "rank": "A.C.E. 段位",
      "ratingPoints": "评分",
      "wins": "胜场",
      "losses": "负场",
      "accountId": "内部账户 ID"
    },
    "accountStatuses": {
      "ACTIVE": "正常",
      "SUSPENDED": "已停用",
      "BANNED": "已封禁",
      "TEMP_BANNED": "临时封禁",
      "PERM_BANNED": "永久封禁",
      "UNDER_REVIEW": "审核中"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "队长",
      "PLAYER": "玩家"
    },
    "settings": {
      "title": "控制面板设置",
      "billingNotLive": "在支付上线之前,所有账户均为 Free。",
      "cancelReason": "没有可取消的付费订阅。支付尚未实现。",
      "cancelButton": "取消订阅"
    },
    "rankedReason": "在经过验证的反作弊集成上线前,排位匹配不可用。",
    "rankedButton": "寻找排位比赛",
    "roster": {
      "title": "5v5 阵容",
      "body": "一名队长,四个邀请。队长可邀请其他 A.C.E. 账户 ID,这些账户仅在通过 Steam 登录验证后创建。"
    },
    "pendingInvites": "待处理的邀请"
  },
  "forms": {
    "requestFailed": "请求失败。",
    "createTeam": {
      "acceptRequired": "请接受服务条款、反作弊最终用户许可协议和隐私政策以继续。",
      "failed": "无法创建战队。",
      "nameLabel": "新 5v5 战队名称",
      "submitAria": "创建新的 5v5 战队",
      "submit": "创建战队"
    },
    "invite": {
      "failed": "邀请失败。",
      "label": "通过 SteamID 或 A.C.E. 账户 ID 邀请自由玩家",
      "submitAria": "发送战队邀请",
      "submit": "发送邀请"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "玩家资料",
      "title": "{name} · A.C.E. 资料",
      "description": "A.C.E. 玩家档案。Plus 和 Premium 会话可解锁遥测趋势图。"
    },
    "kicker": "玩家身份",
    "bannerPlaceholder": "资料横幅 · 即将推出",
    "levelBadge": "等级 {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "阵容等级 {level}。",
    "trend": {
      "title": "竞技评分表现趋势",
      "note": "连续比赛记录中的评分变化。"
    },
    "combat": {
      "title": "详细战斗数据矩阵",
      "kills": "总击杀",
      "deaths": "总死亡",
      "kd": "计算 K/D",
      "headshots": "总爆头",
      "headshotPct": "爆头率区间",
      "knifeKills": "特殊刀杀"
    },
    "weapon": {
      "title": "招牌武器专精",
      "note": "主要定级武器",
      "accuracy": "命中率评级",
      "kills": "武器总击杀"
    },
    "gear": {
      "title": "电脑配置",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "显示器刷新率(Hz)",
      "mouse": "鼠标型号",
      "dpi": "当前 DPI 设置"
    },
    "networksTitle": "Steam 个人资料链接",
    "back": "返回战队阵容"
  },
  "networks": {
    "note": "在此输入的链接仅保留在此浏览器中,不会被保存。A.C.E. 绝不会索要 Steam 密码。",
    "labels": {
      "steam": "Steam 个人资料"
    },
    "open": "打开 {label} >"
  },
  "ratingTrend": {
    "chartAria": "竞技评分表现趋势",
    "pointAria": "第 {match} 场:评分 {rating}",
    "axisLabel": "M{match}",
    "idle": "将鼠标悬停在节点上可查看评分记录。",
    "readout": "第 {match} 场 · 评分 {rating}"
  },
  "loginError": {
    "meta": {
      "title": "登录错误"
    },
    "title": "Steam 登录未完成",
    "notConfigured": "此服务器尚未配置 Steam OpenID。A.C.E. 绝不会索要 Steam 密码。",
    "unavailable": "Steam 未响应验证请求。请稍后重试。A.C.E. 绝不会索要 Steam 密码。",
    "unverified": "服务器无法验证 OpenID 回调。A.C.E. 绝不会索要 Steam 密码。",
    "returnHome": "返回首页"
  }
};
