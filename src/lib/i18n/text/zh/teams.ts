import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E. 小队管理",
    "description": "你的 5v5 小队工作区。邀请需要经过验证的 Steam 会话;反作弊检查将随 A.C.E Shield 推出。"
  },
  "hero": {
    "kicker": "战队",
    "title": "小队",
    "lede": "一排五个空席位。只有在 Steam 登录并创建战队后,才会保存战队。"
  },
  "gate": {
    "kickerPremium": "在 Premium 信函之后",
    "kickerDefault": "战队记录",
    "title": "你们是五人战队吗?",
    "intro": "席位 1 是通过 Steam 登录的玩家。席位 2 至 5 必须已有 A.C.E. 账户。保存战队不会收取 $7,不会发送邮件,也不会将战队放上 100 队榜单。",
    "yes": "是,五名玩家",
    "no": "否,保留空席位",
    "seatsOpen": "五个席位保持空置。未保存任何内容。",
    "connectSteam": "请先连接 Steam。按钮会带你回到本页面。A.C.E. 绝不会索要 Steam 密码。",
    "alreadyMember": "{name} 已属于 {team}。此表单不会创建第二支战队。",
    "thisAccount": "此账户",
    "acceptTerms": "保存战队前请先接受条款。",
    "notStored": "战队未保存。",
    "clanName": "战队名称",
    "captainSeat": "席位 1,队长:{name}",
    "signedInSteam": "已登录的 Steam 账户",
    "seatLabel": "席位 {seat} 的 SteamID 或 A.C.E. 账户 ID",
    "submit": "保存五人战队",
    "saved": "战队名称已保存,四个邀请待处理。这些玩家在接受前不会进入阵容。这并不是 100 队榜单上的席位。未扣任何费用。"
  },
  "squadDesk": {
    "kicker": "小队服务台",
    "title": "基于书面规则的问题",
    "intro": "此服务台仅读取本页面公布的事实。它不会检测作弊、开启比赛或更改账户。",
    "questionLabel": "问题",
    "placeholder": "询问五个席位、$7 信函或支持",
    "ask": "提问",
    "fallback": "此服务台仅根据本页面的书面规则回答:Premium 信函、五个席位、Steam OpenID 和支持。",
    "facts": {
      "email": "不会发送邮件。Premium 信函保留在 /premium/receipt。",
      "charge": "Premium 为每月 $7。即将推出:目前没有支付,因此不会扣费。",
      "board": "已保存的战队是阵容记录,不会放上 100 队榜单。在赛季开始前,该榜单仍显示 0 支已报名。",
      "steam": "登录使用官方 Steam OpenID。A.C.E. 绝不会索要 Steam 密码。从本页面前往 Steam 后,会返回此处。",
      "roster": "席位 1 是已登录的队长。席位 2 至 5 必须已有 A.C.E. 账户。邀请在每位玩家接受前保持待处理。",
      "badge": "反作弊上线后,席位徽章将成为真正的 A.C.E Shield 检查。",
      "support": "请打开本网站的“支持”或“联系我们”。支持请求不会创建工单,在联系页面输入的文字也不会被发送。",
      "rating": "新评分从 1,000 开始。本页面不出售评分、不开启队列、不连接 CS2 服务器,也不发放奖品。"
    }
  },
  "squad": {
    "roles": {
      "awper": "狙击手",
      "entryFragger": "突破手",
      "lurker": "自由人",
      "igl": "指挥",
      "support": "辅助"
    },
    "rankLabel": "段位 {level}",
    "noAgents": "尚未保存未加入战队的玩家。",
    "notice": "邀请仅由已登录的队长发送。席位上的徽章并非实时反作弊检查。"
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E. 锦标赛 — 100 队精英淘汰赛",
      "description": "100 队淘汰赛。点击战队可打开其阵容,再查看每位玩家的资料。报名即将开放。"
    },
    "intro": {
      "title": "A.C.E. 锦标赛 — 100 队精英淘汰赛",
      "lede": "公布的赛制为 100 队淘汰赛,下图即为该布局。点击战队可打开阵容抽屉。报名人数为 0 / 100。没有宣传或提供任何现金奖励。",
      "formatValue": "100 队对阵矩阵",
      "briefTitle": "100 队运营简报",
      "briefBody": "一套竞技布局覆盖全部 100 支队伍。报名开放后,最先通过审核的 28 支战队获得首轮轮空并晋级第二轮,其余 72 支战队参加第一轮。未填满席位上的名称为占位,直至战队报名。完整规则手册位于对阵树下方。比赛大厅将随竞技测试版开放,奖品按赛事确认。"
    },
    "timeline": {
      "ariaLabel": "赛事上线时间线",
      "kicker": "锦标赛路线图",
      "title": "赛事上线时间线",
      "stageLabel": "第 {id} 阶段",
      "stages": {
        "registrations": {
          "title": "开放报名",
          "state": "预览"
        },
        "calibration": {
          "title": "区域定级赛",
          "state": "已锁定"
        },
        "quarterFinals": {
          "title": "精英职业四分之一决赛",
          "state": "已锁定"
        },
        "finals": {
          "title": "巅峰总决赛",
          "state": "已锁定"
        }
      },
      "disclaimer": "报名开始后,第 01 阶段最先开放,第 02–04 阶段随后进行。奖金池将在公布时于赛事页面确认。"
    },
    "bracket": {
      "kicker": "100 队淘汰赛 · 即将推出",
      "title": "100 队对阵矩阵",
      "statusUnavailable": "报名即将开放。在此之前,对阵表显示示例战队。",
      "statusEmpty": "报名即将开放。在此之前,对阵表显示示例战队。",
      "statusStored": "{count} 支已报名战队优先排位。其余席位显示示例战队。后续轮次将随比赛记录逐步填充。",
      "openSlot": "空席位",
      "openCompetitorSlot": "空参赛席位",
      "openRoster": "打开 {name} 的阵容",
      "bye": "👑 [轮空 — 直接进入第 2 轮]",
      "championStage": "冠军舞台",
      "leftWing": "左半区",
      "rightWing": "右半区",
      "emptySlotNotice": "此参赛席位为空。尚未保存任何战队。",
      "grandFinalNotice": "在两场半决赛都记录完成前,总决赛保持空缺。",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "关闭战队资料",
      "kicker": "锦标赛资料 · 预览",
      "matchesPlayed": "已赛场次",
      "winRate": "综合胜率",
      "streak": "当前赛事连胜",
      "rosterHeading": "5 人阵容矩阵",
      "openSeat": "空席位 {seat}",
      "noPlayer": "未保存玩家",
      "previous": "上一支战队",
      "count": "第 {index} / {total} 支战队",
      "next": "下一支战队",
      "close": "关闭资料",
      "disclosure": "玩家选择分享后,其设备和库存将显示在这里。A.C.E. 不收集硬件数据。"
    },
    "player": {
      "level": "等级 {level} · RP {rating}",
      "record": "胜–负 {wins}–{losses}",
      "kdNotStored": "未保存 K/D",
      "openProfileAria": "打开 {name} 的资料",
      "openProfile": "打开资料",
      "badge": "就绪 / 符合反作弊要求",
      "badgeNote": "A.C.E Shield 检查 · 即将推出",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "鼠标",
        "dpi": "DPI",
        "keyboard": "键盘",
        "monitor": "显示器",
        "headset": "耳机"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · 未分享",
    "gpu": "GPU · 未分享",
    "mouse": "鼠标 · 未分享",
    "dpi": "DPI · 未分享",
    "keyboard": "未分享",
    "monitor": "刷新率 · 未分享",
    "headset": "未分享"
  },
  "profileDisclosure": "A.C.E. 不存储硬件清单,也不运行反作弊客户端。表现趋势图和战斗矩阵需要 A.C.E. Plus 或 Premium 会话。在本页面输入的 Steam 个人资料链接不会被保存,也不是官方账号。",
  "errors": {
    "signInRequired": "需要登录。",
    "nameLength": "战队名称须为 2 至 32 个字符。",
    "alreadyCaptain": "此账户已是某支战队的队长。",
    "nameTaken": "已存在同名战队。",
    "idRequired": "需要 SteamID 或 A.C.E. 账户 ID。",
    "noAccountForToken": "该 SteamID 或账户 ID 没有对应的 A.C.E. 账户。",
    "clanNeedsFour": "五人战队需要已登录的队长加上四个 SteamID。",
    "seatNeedsId": "四个席位都需要 SteamID 或 A.C.E. 账户 ID。",
    "seatsDistinct": "每个席位需要不同的玩家。",
    "captainHoldsSeat": "队长已占据席位 1。请填写另外四名玩家。",
    "fewerThanFour": "这些 ID 对应的账户少于四个。",
    "selfInvite": "队长不能邀请自己的账户。",
    "captainOnly": "只有指定的队长才能发送邀请。",
    "rosterLimit": "CS2 阵容为包括队长在内的五名玩家。",
    "alreadyOnRoster": "该玩家已在阵容中。",
    "noAccountForId": "该 ID 没有对应的 A.C.E. 账户。",
    "inviteNotFound": "未找到邀请。",
    "inviteNotPending": "此邀请已不再处于待处理状态。",
    "rosterFull": "阵容已满。",
    "createFailed": "无法创建战队。",
    "inviteFailed": "邀请失败。",
    "updateInviteFailed": "无法更新邀请。"
  }
};
