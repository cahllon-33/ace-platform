import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "meta": {
    "title": "游戏",
    "description": "A.C.E Shield 反作弊上线后,5v5 排位匹配即开放。"
  },
  "boards": {
    "label": "队列面板",
    "title": "三个 5v5 面板",
    "note": "选择仅保留在本页面。排位搜索已关闭,选择面板不会寻找对手。",
    "items": {
      "open": {
        "name": "开放面板",
        "rules": [
          "任意人数组队,最多五人",
          "无评分区间",
          "以 Steam OpenID 进行身份验证",
          "队列上线后用于公开练习"
        ]
      },
      "calibration": {
        "name": "定级面板",
        "rules": [
          "单排、双排或三排",
          "计划评分区间 {points} 分",
          "必须已保存 Steam 个人资料",
          "使用 A.C.E. 评分规则 · 搜索即将推出"
        ]
      },
      "elite": {
        "name": "精英面板",
        "rules": [
          "单排或双排",
          "计划评分区间 {points} 分",
          "已保存的会员必须为 Plus 或 Premium",
          "更严格的准入条件。不设奖金池"
        ]
      }
    }
  },
  "veto": {
    "kicker": "地图禁选",
    "title": "选择地图",
    "lede": "依次禁用地图,直到只剩一张。此大厅不会启动《反恐精英 2》,也不会开启服务器。",
    "mapSelected": "已选地图:{map}",
    "yourBan": "你的禁用",
    "opponentBan": "对手的禁用",
    "selected": "已选",
    "declined": "已禁用",
    "decline": "禁用",
    "reset": "重置禁选",
    "declinedToast": "已禁用 {map}。本页面不会开启服务器。",
    "lockKicker": "5v5 比赛房间",
    "lockTitle": "剩余地图为 {map}",
    "lockBody": "你的比赛房间。竞技测试版开放后,竞技比赛将从这里开始。",
    "close": "关闭"
  },
  "arena": {
    "ariaLabel": "比赛房间预览",
    "captain": "队长",
    "ping": "Ping {ping}",
    "mapPlates": "地图图片",
    "selectMap": "选择 {map}",
    "settings": {
      "region": "地区",
      "mode": "模式",
      "antiCheat": "反作弊",
      "simulator": "预览"
    },
    "chat": {
      "title": "团队聊天",
      "kicker": "团队聊天 · 即将推出",
      "captainName": "{name}(队长)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "冲了",
        "dust 2 适合我们",
        "准备好了"
      ],
      "inputLabel": "团队聊天消息",
      "placeholder": "给队伍发消息…",
      "send": "发送"
    },
    "tiles": {
      "map": "地图",
      "server": "服务器",
      "serverValue": "欧洲西部 · 即将推出",
      "mode": "模式"
    },
    "identity": {
      "title": "身份验证",
      "kicker": "身份核验 · 即将推出",
      "rows": [
        "邮箱验证 · 即将推出",
        "手机验证 · 即将推出",
        "人脸核验 · 即将推出"
      ]
    },
    "security": {
      "title": "比赛安全",
      "kicker": "A.C.E SHIELD · 开发中",
      "rows": [
        "反作弊保护 · 开发中",
        "服务器完整性检查 · 开发中",
        "比赛数据加密 · 开发中"
      ]
    },
    "findMatchReason": "匹配将随竞技测试版开放。排位队列尚未运行。"
  },
  "matchFound": {
    "ariaSignedIn": "{title}。比赛开放后,{name} 将加入阵容。",
    "banner": "竞技场 · 竞技测试版即将推出",
    "mapPlate": "地图图片 · DUST II · 无 128 Tick 服务器",
    "rosterNote": "示例代号。",
    "teamA": "A 队 · 战术联盟",
    "teamB": "B 队 · 暗影军团",
    "clockLabel": "比赛时钟",
    "clockNote": "此时钟循环播放。队列已关闭。",
    "chatKicker": "团队聊天",
    "chatLines": [
      "等待时钟重置。",
      "本页面上的 Dust II 只是地图图片。",
      "此阵容未连接任何服务器。"
    ],
    "chatField": "消息不会发送。",
    "identityKicker": "身份网格",
    "identityRows": [
      "不会发送比赛门票邮件。",
      "未运行任何内核检查。",
      "实时遥测将随竞技测试版推出。"
    ],
    "findMatch": "寻找竞技比赛",
    "closedNotice": "匹配将随竞技测试版开放。排位队列尚未运行。"
  }
};
