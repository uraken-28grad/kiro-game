import { StageData } from "./index";

export const stage6: StageData = {
  id: 6,
  name: "宇和島・愛南",
  playerImage: "/uwajima/fish_tai.png",
  playerSize: { w: 100, h: 70 },
  hazardImage: "/uwajima/teki/animal_bull_kowai.png",
  hazardSize: { w: 70, h: 70 },
  goalImage: "/goal-flag.png",
  goalSize: { w: 50, h: 50 },
  destination: "遊子水荷浦の段畑",
  waypoints: ["高茂岬", "宇和島港戎山防波場灯台", "宇和島城"],
  screens: [
    {
      background: "/uwajima/komomisaki.jpg",
      platforms: [
        { x: 120, y: 80, w: 50, h: 20 },
        { x: 300, y: 190, w: 45, h: 20 },
        { x: 480, y: 250, w: 50, h: 20 },
        { x: 680, y: 220, w: 50, h: 20 },
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
        { x: 240, y: 240, w: 45, h: 20 },
        { x: 410, y: 320, w: 45, h: 20 },
        { x: 580, y: 120, w: 45, h: 20 },
      ],
      hazards: [
        { x: 300, y: 0, w: 25, h: 20 },
        { x: 430, y: 0, w: 25, h: 20 },
        { x: 700, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "宇和島港戎山防波場灯台\n宇和島湾最奥部に位置している\n海を照らす灯台",
    },
    {
      background: "/uwajima/uwajima_castle.jpg",
      platforms: [
        { x: 140, y: 70, w: 45, h: 20 },
        { x: 290, y: 180, w: 25, h: 20 },
        { x: 440, y: 170, w: 100, h: 20 },
        { x: 720, y: 195, w: 130, h: 5 },
      ],
      hazards: [
        { x: 190, y: 0, w: 25, h: 20 },
        // { x: 370, y: 0, w: 25, h: 20 },
        { x: 540, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "宇和島城\n宇和島の中心部に位置するお城\n安土桃山時代に築かれた",
    },
    {
      background: "/uwajima/yuzumizugaura.jpg",
      platforms: [
        { x: 150, y: 90, w: 45, h: 20 },
        { x: 360, y: 170, w: 45, h: 20 },
      ],
      hazards: [
        // { x: 190, y: 0, w: 25, h: 20 },
        // { x: 370, y: 0, w: 25, h: 20 },
        { x: 550, y: 0, w: 25, h: 20 },
        { x: 750, y: 0, w: 25, h: 20 },
      ],
      deathMessage: "遊子水荷浦の段畑\n宇和海と一緒の絶景が楽しめる",
      clearMessage: "自然を身近で感じれます\n自然を楽しみに来てみてください！",
      goal: { x: 760, y: 0 },
    },
  ],
};
