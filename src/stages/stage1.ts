import { StageData } from "./index";

export const stage1: StageData = {
  id: 1,
  name: "四国中央・新居浜",
  playerImage: "/niihama/teki/hashiteruinu.png",
  playerSize: { w: 100, h: 100 },
  hazardSize: { w: 100, h: 100 },
  goalImage: "/goal-flag.png",
  goalSize: { w: 100, h: 100 },

  screens: [
    {
      background: "/niihama/bessi.webp",
      hazardImage: "/niihama/teki/dou.png",
      platforms: [
        { x: 200, y: 50, w: 120, h: 20 },
        { x: 450, y: 80, w: 120, h: 20 },
        { x: 700, y: 0, w: 50, h: 120 },
      ],
      hazards: [{ x: 750, y: 0, w: 10, h: 10 }],
      deathMessage:
        "新居浜市にある別子銅山\n跡東洋のマチュピチュと呼ばれている",
    },
    {
      background: "/niihama/niihama-Minetopia-1.webp",
      hazardImage: "/niihama/teki/dou.png",
      platforms: [
        { x: 150, y: 60, w: 100, h: 20 },
        { x: 350, y: 130, w: 100, h: 20 },
        { x: 550, y: 60, w: 100, h: 20 },
      ],
      hazards: [{ x: 400, y: 0, w: 20, h: 20 }],
      deathMessage:
        "新居浜市のマイントピア別子の観光と移動ができる観光列車\n乗るとわくわくする",
    },
    {
      background: "/niihama/shikokuchuo-tomisatokeikoku.webp",
      hazardImage: "/niihama/teki/paper.png",
      platforms: [
        { x: 100, y: 70, w: 100, h: 20 },
        { x: 300, y: 120, w: 100, h: 20 },
        { x: 500, y: 170, w: 100, h: 20 },
        { x: 700, y: 250, w: 100, h: 20 },
        { x: 900, y: 400, w: 100, h: 20 },
      ],
      hazards: [{ x: 500, y: 0, w: 20, h: 20 }],
      deathMessage:
        "四国中央市に位置する藤原大橋\n紅葉と渓谷の壮大な絶景が広がる",
    },
    {
      background: "/niihama/shikokuchuo-kawanoejou.webp",
      hazardImage: "/niihama/teki/paper.png",
      platforms: [
        { x: 150, y: 80, w: 100, h: 20 },
        { x: 400, y: 130, w: 100, h: 20 },
      ],
      hazards: [{ x: 300, y: 0, w: 20, h: 20 }],
      deathMessage: "四国中央市にある川之江城\n天守閣からは絶景が見れるらしい",
      clearMessage: "おめでとう",
      goal: { x: 600, y: 0 },
    },
  ],
};
