import { StageData } from "./index";

export const stage8: StageData = {
  id: 8,
  name: "松山城",
  playerImage: "/matsuyama-castle/jiki_bushi.png",
  playerSize: { w: 70, h: 100 },
  hazardSize: { w: 50, h: 70 },
  screens: [
    {
      background: "/matsuyama-castle/siro_tien3.jpg",
      hazardImage: "/matsuyama-castle/teki/shuriken.png",
      platforms: [
        // { x: 130, y: 130, w: 40, h: 20 },
        // { x: 310, y: 210, w: 35, h: 20 },
        // { x: 500, y: 130, w: 40, h: 20 },

        { x: 80, y: 80, w: 40, h: 20 },
        { x: 150, y: 130, w: 40, h: 20 },
        { x: 240, y: 180, w: 40, h: 20 },
        { x: 400, y: 100, w: 40, h: 20 },
        { x: 560, y: 180, w: 40, h: 20 },
        { x: 700, y: 120, w: 40, h: 20 },
        { x: 860, y: 80, w: 40, h: 20 },
      ],
      hazards: [
        { x: 210, y: 0, w: 25, h: 20 },
        { x: 400, y: 0, w: 25, h: 20 },
        { x: 570, y: 0, w: 25, h: 20 },
      ],
    },
    {
      background: "/matsuyama-castle/siro_tenshu.jpg",
      hazardImage: "/matsuyama-castle/teki/shuriken.png",
      platforms: [
        // { x: 80, y: 110, w: 35, h: 20 },
        // { x: 240, y: 200, w: 35, h: 20 },
        // { x: 400, y: 110, w: 35, h: 20 },
        // { x: 570, y: 200, w: 35, h: 20 },

        { x: 80, y: 80, w: 40, h: 20 },
        { x: 150, y: 130, w: 40, h: 20 },
        { x: 240, y: 180, w: 40, h: 20 },
        { x: 400, y: 100, w: 40, h: 20 },
        { x: 560, y: 180, w: 40, h: 20 },
        { x: 700, y: 120, w: 40, h: 20 },
        { x: 860, y: 80, w: 40, h: 20 },
      ],
      hazards: [
        // { x: 150, y: 0, w: 25, h: 20 },
        { x: 310, y: 0, w: 25, h: 20 },
        { x: 470, y: 0, w: 25, h: 20 },
        { x: 630, y: 0, w: 25, h: 20 },
      ],
      deathMessage:
        "天守閣\n江戸時代以前に建造されたものがいまだに残っている(12個しかない)\n中には展示物がある",
    },
    {
      background: "/matsuyama-castle/siro_teien2.jpg",
      hazardImage: "/matsuyama-castle/teki/ninja_warui.png",
      platforms: [
        // { x: 100, y: 140, w: 35, h: 20 },
        // { x: 280, y: 220, w: 35, h: 20 },
        // { x: 460, y: 140, w: 35, h: 20 },

        { x: 80, y: 80, w: 40, h: 20 },
        { x: 150, y: 130, w: 40, h: 20 },
        { x: 240, y: 180, w: 40, h: 20 },
        { x: 400, y: 100, w: 40, h: 20 },
        { x: 560, y: 180, w: 40, h: 20 },
        { x: 700, y: 120, w: 40, h: 20 },
        { x: 860, y: 80, w: 40, h: 20 },
      ],

      hazards: [
        // { x: 180, y: 0, w: 25, h: 20 },
        { x: 360, y: 0, w: 25, h: 20 },
        { x: 540, y: 0, w: 25, h: 20 },
        { x: 620, y: 0, w: 25, h: 20 },
      ],
    },
    {
      background: "/matsuyama-castle/siro_teien1.jpg",
      hazardImage: "/matsuyama-castle/teki/ninja_syuriken.png",
      platforms: [
        // { x: 80, y: 100, w: 35, h: 20 },
        // { x: 250, y: 190, w: 35, h: 20 },
        // { x: 420, y: 280, w: 35, h: 20 },
        // { x: 590, y: 160, w: 35, h: 20 },

        { x: 80, y: 80, w: 40, h: 20 },
        { x: 150, y: 130, w: 40, h: 20 },
        { x: 240, y: 180, w: 40, h: 20 },
        { x: 400, y: 100, w: 40, h: 20 },
        { x: 560, y: 180, w: 40, h: 20 },
        { x: 700, y: 120, w: 40, h: 20 },
        { x: 860, y: 80, w: 40, h: 20 },
      ],
      hazards: [
        // { x: 160, y: 0, w: 25, h: 20 },
        { x: 330, y: 0, w: 25, h: 20 },
        { x: 500, y: 0, w: 25, h: 20 },
        { x: 650, y: 0, w: 25, h: 20 },
      ],
    },
    {
      background: "/matsuyama-castle/siro_gaikan.jpg",
      hazardImage: "/matsuyama-castle/teki/ninja_musasabi.png",
      platforms: [
        // { x: 100, y: 120, w: 35, h: 20 },
        // { x: 280, y: 210, w: 35, h: 20 },
        // { x: 460, y: 120, w: 35, h: 20 },

        { x: 80, y: 80, w: 40, h: 20 },
        { x: 150, y: 130, w: 40, h: 20 },
        { x: 240, y: 180, w: 40, h: 20 },
        { x: 400, y: 100, w: 40, h: 20 },
        { x: 560, y: 180, w: 40, h: 20 },
        { x: 700, y: 120, w: 40, h: 20 },
        { x: 860, y: 80, w: 40, h: 20 },
      ],
      hazards: [
        // { x: 190, y: 0, w: 25, h: 20 },
        { x: 370, y: 0, w: 25, h: 20 },
        { x: 540, y: 0, w: 25, h: 20 },
      ],
    },
    {
      background: "/matsuyama-castle/matsuyamajyou.jpg",
      hazardImage: "/matsuyama-castle/teki/ninja_hashiru.png",
      platforms: [
        // { x: 80, y: 130, w: 35, h: 20 },
        // { x: 260, y: 220, w: 35, h: 20 },
        // { x: 440, y: 300, w: 35, h: 20 },

        { x: 80, y: 80, w: 40, h: 20 },
        { x: 150, y: 130, w: 40, h: 20 },
        { x: 240, y: 180, w: 40, h: 20 },
        { x: 400, y: 100, w: 40, h: 20 },
        { x: 560, y: 180, w: 40, h: 20 },
        { x: 700, y: 120, w: 40, h: 20 },
        { x: 860, y: 80, w: 40, h: 20 },
      ],
      hazards: [
        // { x: 170, y: 0, w: 25, h: 20 },
        { x: 350, y: 0, w: 25, h: 20 },
        { x: 530, y: 0, w: 25, h: 20 },
        { x: 600, y: 0, w: 25, h: 20 },
      ],
      goal: { x: 640, y: 0, w: 30, h: 60 },
      deathMessage: "遠くから見た松山城\nこの距離の写真からでも迫力を感じる",
    },
  ],
};
