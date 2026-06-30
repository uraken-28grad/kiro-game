import { StageData } from './index'

export const stage5: StageData = {
  id: 5,
  name: '最終試練',
  screens: [
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 100, w: 50, h: 20 },
        { x: 280, y: 180, w: 50, h: 20 },
        { x: 460, y: 130, w: 50, h: 20 },
      ],
      hazards: [
        { x: 190, y: 0, w: 25, h: 20 },
        { x: 380, y: 0, w: 25, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 80, y: 140, w: 50, h: 20 },
        { x: 250, y: 220, w: 50, h: 20 },
        { x: 430, y: 160, w: 50, h: 20 },
      ],
      hazards: [
        { x: 160, y: 0, w: 25, h: 20 },
        { x: 340, y: 0, w: 25, h: 20 },
        { x: 520, y: 0, w: 25, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 120, w: 50, h: 20 },
        { x: 300, y: 200, w: 50, h: 20 },
        { x: 480, y: 270, w: 50, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 25, h: 20 },
        { x: 400, y: 0, w: 25, h: 20 },
      ],
      goal: { x: 570, y: 0, w: 30, h: 60 },
    },
  ],
}
