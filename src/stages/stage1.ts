import { StageData } from "./index";

export const stage1: StageData = {
  id: 1,
  name: "四国中央・新居浜",
  playerImage: "/niihama/teki/hashiteruinu.png",
  playerSize: { w: 100, h: 100 },
  hazardSize: { w: 100, h: 100 },

  screens: [
    {
      background: "/niihama/bessi.jpg",
      platforms: [
        { x: 200, y: 50, w: 120, h: 20 },
        { x: 450, y: 80, w: 120, h: 20 },
      ],
      hazards: [],
      deathMessage:
        "新居浜市にある別子銅山\n跡東洋のマチュピチュと呼ばれている",
    },
    {
      background: "/niihama/niihama-Minetopia-1.jpg",
      hazardImage: "/niihama/teki/dou.png",
      platforms: [
        { x: 150, y: 60, w: 100, h: 20 },
        { x: 350, y: 100, w: 100, h: 20 },
        { x: 550, y: 60, w: 100, h: 20 },
      ],
      hazards: [{ x: 280, y: 0, w: 20, h: 20 }],
      deathMessage:
        "新居浜市のマイントピア別子の観光と移動ができる観光列車\n乗るとわくわくする",
    },
    {
      background: "/niihama/shikokuchuo-tomisatokeikoku.jpg",
      hazardImage: "/niihama/teki/paper.png",
      platforms: [
        { x: 100, y: 70, w: 100, h: 20 },
        { x: 300, y: 120, w: 100, h: 20 },
        { x: 500, y: 70, w: 100, h: 20 },
      ],
      hazards: [{ x: 220, y: 0, w: 20, h: 20 }],
      deathMessage:
        "四国中央市に位置する藤原大橋\n紅葉と渓谷の壮大な絶景が広がる",
    },
    {
      background: "/niihama/shikokuchuo-kawanoejou.jpg",
      hazardImage: "/niihama/teki/paper.png",
      platforms: [
        { x: 150, y: 80, w: 100, h: 20 },
        { x: 400, y: 130, w: 100, h: 20 },
      ],
      hazards: [{ x: 300, y: 0, w: 20, h: 20 }],
      deathMessage: "四国中央市にある川之江城\n天守閣からは絶景が見れるらしい",
      goal: { x: 600, y: 0, w: 30, h: 60 },
    },
  ],
};
