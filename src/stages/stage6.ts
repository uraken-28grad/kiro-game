import { StageData } from "./index";

export const stage6: StageData = {
  id: 6,
  name: "宇和島・愛南",
  playerImage: "/uwajima/fish_tai.png",
  playerSize: { w: 100, h: 70 },
  hazardImage: "/uwajima/teki/animal_bull_kowai.png",
  hazardSize: { w: 70, h: 70 },
  screens: [
    {
      background: "/uwajima/komomisaki.jpg",
      platforms: [
        { x: 120, y: 80, w: 50, h: 20 },
        { x: 300, y: 190, w: 45, h: 20 },
        { x: 480, y: 130, w: 50, h: 20 },
      ],
      hazards: [
        // { x: 210, y: 0, w: 25, h: 20 },
        // { x: 390, y: 0, w: 25, h: 20 },
        { x: 560, y: 0, w: 25, h: 20 },
      ],
      deathMessage: "高茂岬\n海の雄大さを感じれる\nとてつもなく絶景",
    },
    {
      background: "/uwajima/kurobae.jpg",
      platforms: [
        { x: 80, y: 140, w: 45, h: 20 },
        { x: 240, y: 80, w: 45, h: 20 },
        { x: 410, y: 200, w: 45, h: 20 },
        { x: 580, y: 120, w: 45, h: 20 },
      ],
      hazards: [
        // { x: 150, y: 0, w: 25, h: 20 },
        // { x: 330, y: 0, w: 25, h: 20 },
        { x: 500, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "宇和島港戎山防波場灯台\n宇和島湾最奥部に位置している\n海を照らす灯台",
    },
    {
      background: "/uwajima/uwajima_castle.jpg",
      platforms: [
        { x: 100, y: 70, w: 45, h: 20 },
        { x: 280, y: 180, w: 45, h: 20 },
        { x: 450, y: 260, w: 45, h: 20 },
      ],
      hazards: [
        // { x: 190, y: 0, w: 25, h: 20 },
        // { x: 370, y: 0, w: 25, h: 20 },
        { x: 540, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "宇和島城\n宇和島の中心部に位置するお城\n安土桃山時代に築かれた",
    },
    {
      background: "/uwajima/yuzumizugaura.jpg",
      platforms: [
        { x: 100, y: 90, w: 45, h: 20 },
        { x: 280, y: 170, w: 45, h: 20 },
        { x: 460, y: 250, w: 45, h: 20 },
      ],
      hazards: [
        // { x: 190, y: 0, w: 25, h: 20 },
        // { x: 370, y: 0, w: 25, h: 20 },
        { x: 550, y: 0, w: 25, h: 20 },
      ],
      deathMessage: "遊子水荷浦の段畑\n宇和海と一緒の絶景が楽しめる",
      goal: { x: 620, y: 0, w: 30, h: 60 },
    },
  ],
};
