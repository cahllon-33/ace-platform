import type { TextBag } from "../types";

export const tournamentRoadmap: TextBag["tournamentRoadmap"] = {
  "kicker": "锦标赛路线图",
  "title": "赛事上线时间线",
  "stageLabel": "第 {n} 阶段",
  "stages": [
    {
      "title": "开放报名",
      "status": "已关闭 · 0 / 100",
      "body": "报名开放后最先通过审核的 28 支战队将获得首轮轮空,直接晋级第二轮。其余 72 支战队参加第一轮。本网站不会发送任何报名邮件。"
    },
    {
      "title": "区域定级赛",
      "status": "已锁定",
      "body": "64 强至 16 强。16 强之前为单图制,之后为三局两胜。目前没有转播安排。"
    },
    {
      "title": "精英职业四分之一决赛",
      "status": "已锁定",
      "body": "四分之一决赛和半决赛采用三局两胜,按 /rules 规则手册中的地图禁选流程进行。目前没有直播。"
    },
    {
      "title": "巅峰总决赛",
      "status": "已锁定",
      "body": "总决赛为五局三胜。奖品将在公布时于赛事页面确认。"
    }
  ]
};
