import { StageData } from "./index";

export const stage2: StageData = {
  id: 2,
  name: "今治・西条",
  playerImage: "/imabari/teki/bird_kiji.png",
  playerSize: { w: 100, h: 100 },
  hazardImage: "/imabari/teki/kaizoku_viking.png",
  hazardSize: {w: 100, h:100},
  screens: [
    {
      backgrounds: [
        { src: "/imabari/saijou_yama.jpg", x: 0, y: 0, w: 1000, h: 500 },
      ],
      platforms: [
        { x: 150, y: 70, w: 100, h: 20 },
        { x: 380, y: 120, w: 90, h: 20 },
      ],
      hazards: [{ x: 280, y: 0, w: 20, h: 20 }],
    },
    {
      backgrounds: [
        { src: "/imabari/saijou_jinja.jpg", x: 0, y: 0, w: 1000, h: 500 },
      ],
      platforms: [
        { x: 100, y: 80, w: 90, h: 20 },
        { x: 300, y: 140, w: 90, h: 20 },
        { x: 520, y: 90, w: 90, h: 20 },
      ],
      hazards: [
        { x: 210, y: 0, w: 20, h: 20 },
        { x: 430, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [
        { src: "/imabari/imabari_siro.jpg", x: 0, y: 0, w: 1000, h: 500 },
      ],
      platforms: [
        { x: 120, y: 100, w: 80, h: 20 },
        { x: 320, y: 150, w: 80, h: 20 },
        { x: 500, y: 100, w: 80, h: 20 },
      ],
      hazards: [{ x: 230, y: 0, w: 20, h: 20 }],
    },
    {
      backgrounds: [
        {
          src: "/imabari/shimanami_tenboudai.jpg",
          x: 0,
          y: 0,
          w: 1000,
          h: 500,
        },
      ],
      platforms: [
        { x: 100, y: 60, w: 80, h: 20 },
        { x: 300, y: 130, w: 80, h: 20 },
        { x: 500, y: 180, w: 80, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 20, h: 20 },
        { x: 420, y: 0, w: 20, h: 20 },
      ],
      goal: { x: 620, y: 0, w: 30, h: 60 },
    },
  ],
};
