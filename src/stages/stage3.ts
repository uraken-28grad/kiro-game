import { StageData } from "./index";

export const stage3: StageData = {
  id: 3,
  name: "お祭り",
  playerImage: "/festival/jiki_mikoshi.png",
  playerSize: { w: 100, h: 100 },
  hazardSize: { w: 100, h: 100 },
  screens: [
    {
      background: "/festival/iyo_mishima.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_boy.png",
      platforms: [
        { x: 120, y: 80, w: 80, h: 20 },
        { x: 320, y: 140, w: 80, h: 20 },
        { x: 530, y: 80, w: 80, h: 20 },
      ],
      hazards: [{ x: 230, y: 0, w: 20, h: 20 }],
    },
    {
      background: "/festival/taiko.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_girl.png",
      platforms: [
        { x: 80, y: 100, w: 70, h: 20 },
        { x: 260, y: 160, w: 70, h: 20 },
        { x: 440, y: 100, w: 70, h: 20 },
        { x: 600, y: 160, w: 70, h: 20 },
      ],
      hazards: [
        { x: 170, y: 0, w: 20, h: 20 },
        { x: 360, y: 0, w: 20, h: 20 },
      ],
    },
    {
      background: "/festival/uwajima_matsuri.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_boy.png",
      platforms: [
        { x: 100, y: 120, w: 70, h: 20 },
        { x: 280, y: 180, w: 70, h: 20 },
        { x: 460, y: 120, w: 70, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 20, h: 20 },
        { x: 380, y: 0, w: 20, h: 20 },
      ],
    },
    {
      background: "/festival/matsuyama_matsuri.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_girl.png",
      platforms: [
        { x: 100, y: 90, w: 70, h: 20 },
        { x: 300, y: 160, w: 70, h: 20 },
        { x: 500, y: 220, w: 70, h: 20 },
      ],
      hazards: [
        { x: 210, y: 0, w: 20, h: 20 },
        { x: 420, y: 0, w: 20, h: 20 },
      ],
    },
    {
      background: "/festival/saijou_matsuri.jpg",
      hazardImage: "/festival/teki/omatsuri_happi_boy.png",
      platforms: [
        { x: 120, y: 100, w: 70, h: 20 },
        { x: 320, y: 170, w: 70, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 20, h: 20 },
        { x: 450, y: 0, w: 20, h: 20 },
      ],
      goal: { x: 580, y: 0, w: 30, h: 60 },
    },
  ],
};
