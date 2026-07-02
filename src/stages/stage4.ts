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
      goal: { x: 620, y: 0, w: 30, h: 60 },
    },
  ],
};
