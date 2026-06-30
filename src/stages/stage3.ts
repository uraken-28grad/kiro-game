import { StageData } from './index'

export const stage3: StageData = {
  id: 3,
  name: '空中回廊',
  screens: [
    {
      backgrounds: [],
      platforms: [
        { x: 120, y: 120, w: 70, h: 20 },
        { x: 320, y: 200, w: 60, h: 20 },
        { x: 500, y: 150, w: 80, h: 20 },
      ],
      hazards: [
        { x: 230, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 80, y: 100, w: 60, h: 20 },
        { x: 250, y: 180, w: 70, h: 20 },
        { x: 450, y: 240, w: 80, h: 20 },
      ],
      hazards: [
        { x: 160, y: 0, w: 20, h: 20 },
        { x: 370, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 130, w: 70, h: 20 },
        { x: 300, y: 190, w: 70, h: 20 },
        { x: 500, y: 250, w: 70, h: 20 },
      ],
      hazards: [
        { x: 420, y: 0, w: 20, h: 20 },
      ],
      goal: { x: 580, y: 0, w: 30, h: 60 },
    },
  ],
}
