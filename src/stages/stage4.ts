import { StageData } from './index'

export const stage4: StageData = {
  id: 4,
  name: '溶岩地帯',
  screens: [
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 70, w: 50, h: 70 },
        { x: 300, y: 140, w: 60, h: 20 },
        { x: 500, y: 100, w: 70, h: 100 },
      ],
      hazards: [
        { x: 200, y: 0, w: 30, h: 20 },
        { x: 420, y: 0, w: 30, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 80, y: 110, w: 60, h: 60 },
        { x: 280, y: 180, w: 50, h: 20 },
        { x: 460, y: 200, w: 70, h: 20 },
      ],
      hazards: [
        { x: 170, y: 0, w: 30, h: 20 },
        { x: 380, y: 0, w: 30, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 120, y: 90, w: 50, h: 90 },
        { x: 320, y: 160, w: 60, h: 20 },
        { x: 500, y: 220, w: 80, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 30, h: 20 },
      ],
      goal: { x: 570, y: 0, w: 30, h: 60 },
    },
  ],
}
