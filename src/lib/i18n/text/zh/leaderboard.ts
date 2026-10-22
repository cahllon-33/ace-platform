import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "排行榜",
    "description": "A.C.E 竞技榜。已保存的 Steam 账户优先显示,空位保留为示例行。"
  },
  "hero": {
    "kicker": "排行榜",
    "title": "竞技榜",
    "note": "在玩家绑定 Steam 并获得评分之前,本榜单由示例席位填充。其国家和代表武器仅作示意。武器图片为 A.C.E 工作室原创美术,并非 Valve 皮肤。目前尚未统计击杀,因此代表武器并非最高击杀数据。"
  },
  "facts": {
    "seats": "席位",
    "storedAccounts": "已保存账户",
    "killsStored": "已保存击杀",
    "none": "无"
  },
  "empty": "没有与该名称匹配的示例席位。",
  "podiumLabel": "前三席位",
  "boardLabel": "竞技榜",
  "table": {
    "rank": "排名",
    "player": "玩家",
    "country": "国家/地区",
    "tier": "段位",
    "leadWeapon": "主武器",
    "rating": "评分"
  },
  "tags": {
    "stored": "已保存账户",
    "showcase": "示例"
  },
  "weapon": {
    "sampleRender": "招牌武器",
    "notStored": "未保存",
    "noKillSaved": "未保存击杀",
    "alt": "{name}"
  },
  "countries": {
    "il": "以色列",
    "us": "美国",
    "de": "德国",
    "ua": "乌克兰",
    "se": "瑞典",
    "fr": "法国",
    "pl": "波兰",
    "br": "巴西",
    "jp": "日本",
    "kr": "韩国"
  },
  "search": {
    "openLabel": "打开玩家搜索",
    "srLabel": "搜索排行榜",
    "fieldLabel": "搜索玩家",
    "placeholder": "显示名称"
  }
};
