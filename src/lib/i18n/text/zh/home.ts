import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "meta": {
    "title": "A.C.E. — CS2 竞技平台",
    "description": "A.C.E. 是一个规划中的《反恐精英 2》竞技平台,涵盖玩家身份、定级、战队和锦标赛。本公开网站为预览版。排位匹配、反作弊、支付和奖品均未启用。"
  },
  "opening": {
    "dialogLabel": "A.C.E. 开场",
    "line": "A.C.E:自主反作弊、竞技定级、精英玩家",
    "enter": "进入网站"
  },
  "hero": {
    "logoAlt": "A.C.E. 自主反作弊、竞技定级、精英玩家",
    "arenaAlt": "A.C.E. 竞技场图。原创舞台图片,并非 Valve 美术。屏幕标注为游戏电视。目前没有直播。"
  },
  "broadcast": {
    "kicker": "赛事观看",
    "title": "转播台",
    "lede": "竞技地图池在此:Dust II、Mirage、Inferno、Nuke、Ancient、Anubis 和 Train。这些都是原创图片。目前没有赛事在播,本页面也不会播放 Valve 比赛。",
    "offAir": "未直播 · {map}"
  },
  "jumpNav": {
    "label": "首页分类",
    "play": "游戏",
    "prizes": "奖品",
    "teams": "战队",
    "leaderboard": "排行榜",
    "ranks": "段位",
    "systems": "系统"
  },
  "charter": {
    "kicker": "主大厅工作区",
    "title": "A.C.E. 竞技匹配大厅与调度中心",
    "badge": "服务器 · 即将推出",
    "lede": "此大厅不会分配服务器、启动反作弊客户端或发放奖品。",
    "modules": [
      {
        "kicker": "已找到比赛 · 5v5",
        "copy": "本页面上的 5v5 框架是已关闭的队列,不会分配服务器。",
        "chips": [
          "无 128 Tick 服务器",
          "队列已关闭"
        ]
      },
      {
        "kicker": "固定 3D 段位",
        "copy": "从 Recruit 到 A.C.E. Legend 共十个段位。使用 Steam 登录后显示已保存的评分。本页面不会计入比赛结果。",
        "chips": [
          "评分规则已存档",
          "本页面的旋转展台"
        ]
      },
      {
        "kicker": "皮肤奖励",
        "copy": "锦标赛奖励将随每项赛事公布。",
        "chips": [
          "不发放物品",
          "不进行掉落判定"
        ]
      }
    ]
  },
  "identity": {
    "profilePlaceholder": "[Player_Profile]",
    "notAvailable": "不适用",
    "elite": "精英"
  },
  "membership": {
    "compareLink": "查看完整对比表"
  },
  "loot": {
    "exampleCard": "即将推出",
    "wear": {
      "factoryNew": "Factory New",
      "minimalWear": "Minimal Wear"
    }
  },
  "serverHub": {
    "badge": "游戏服务器 · 即将推出",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}。服务器即将推出。",
    "tileSample": "即将推出 · {sample}",
    "note": "128 Tick 区域服务器将随竞技测试版推出。"
  },
  "telemetry": {
    "badge": "预览 · 即将推出",
    "lines": [
      "A.C.E SHIELD:开发中",
      "硬件封禁矩阵:不收集任何标识符",
      "A.C.E. SHIELD 连接:未安装客户端"
    ],
    "note": "本网站不运行内核客户端,不扫描内存,也不实施硬件封禁。"
  },
  "comingSoon": {
    "badge": "不可用",
    "body": "A.C.E. 桌面客户端不提供下载。本网站的第 1 赛季不会安装软件或开启签到。"
  },
  "operative": {
    "kicker": "电影感战术视角 · 原创 CSS 场景 · 非 Valve 美术",
    "title": "深入 CS2:终极竞技平台",
    "lede": "更公平的比赛,更好的队友。有分量的段位,有价值的奖励。",
    "note": "宣传文案。排位队列、在线服务器和奖品均未启用。",
    "hudLeft": "CT — A 点",
    "hudRight": "T — 中路推进",
    "hudCenter": "小队环境",
    "plannedReason": "在真正的反作弊集成实现并通过验证之前,排位赛保持关闭。"
  },
  "howStatus": {
    "label": "A.C.E. 注册子系统 — 定级引擎就绪",
    "note": "A.C.E Shield 和定级上线后,排位队列将开放。"
  },
  "shell": {
    "primaryNav": "主导航",
    "mobileNav": "移动端",
    "elite": "精英",
    "notificationsTitle": "通知 · 即将推出",
    "notificationsAria": "通知。0 条未读。",
    "connectProfileTitle": "绑定个人资料",
    "openProfileAria": "打开指挥台个人资料",
    "connectProfileAria": "通过 Steam OpenID 绑定个人资料",
    "signOutAria": "退出 A.C.E."
  },
  "notFound": {
    "kicker": "网格异常",
    "title": "错误 404 — 雷达遥测丢失",
    "body": "你请求的坐标不在我们的活动服务器网格中。",
    "homeAria": "返回 A.C.E. 首页大厅",
    "cta": "返回大厅"
  },
  "error": {
    "kicker": "错误",
    "title": "出了点问题",
    "body": "无法显示此公开页面。你可以重试。此预览网站未请求任何账户数据。",
    "retryAria": "重新加载此页面",
    "retry": "重试"
  }
};
