import { StageData } from "./index";

export const stage4: StageData = {
  id: 4,
  name: "その他中予",
  playerImage: "/chu-yo/teki/eto_remake_ushi.png",
  playerSize: { w: 100, h: 100 },
  hazardImage: "/chu-yo/teki/koi_takinobori.png",
  hazardSize: { w: 100, h: 100 },
  screens: [
    {
      background: "/chu-yo/botchan.jpg",
      platforms: [
        { x: 100, y: 90, w: 60, h: 20 },
        { x: 280, y: 150, w: 60, h: 20 },
        { x: 460, y: 90, w: 60, h: 20 },
      ],
      hazards: [
        // { x: 190, y: 0, w: 25, h: 20 },
        { x: 380, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "坊ちゃん劇場\n東温市にあるハイレベルなミュージカル劇場\n歴史や偉人をテーマにした作品を上演している",
    },
    {
      background: "/chu-yo/Shimonada.jpg",
      platforms: [
        { x: 80, y: 110, w: 60, h: 20 },
        { x: 240, y: 170, w: 60, h: 20 },
        { x: 420, y: 90, w: 60, h: 20 },
        { x: 580, y: 170, w: 60, h: 20 },
      ],
      hazards: [
        // { x: 160, y: 0, w: 25, h: 20 },
        // { x: 340, y: 0, w: 25, h: 20 },
        { x: 510, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "下灘駅\n松山駅から1時間、海を見ることができる駅\n数々のドラマや映画のロケ地として有名",
    },
    {
      background: "/chu-yo/kuma-kogen.jpg",
      platforms: [
        { x: 100, y: 80, w: 60, h: 20 },
        { x: 300, y: 160, w: 60, h: 20 },
        { x: 500, y: 80, w: 60, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 25, h: 20 },
        { x: 410, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "久万高原町にある日本三大カルストのひとつ\n美しい風景や高山植物を楽しむことができる",
    },
    {
      platforms: [
        { x: 80, y: 100, w: 55, h: 20 },
        { x: 260, y: 180, w: 55, h: 20 },
        { x: 430, y: 90, w: 90, h: 20 },
      ],
      hazards: [
        // { x: 170, y: 0, w: 25, h: 20 },
        // { x: 350, y: 0, w: 25, h: 20 },
        { x: 520, y: 0, w: 25, h: 20 },
      ],
    },
    {
      platforms: [
        { x: 120, y: 90, w: 55, h: 20 },
        { x: 320, y: 160, w: 55, h: 20 },
        { x: 520, y: 230, w: 55, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 25, h: 20 },
        { x: 430, y: 0, w: 25, h: 20 },
      ],
      goal: { x: 620, y: 0 },
    },
  ],
};
