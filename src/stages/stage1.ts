import { StageData } from './index'

export const stage1: StageData = {
  id: 1,
  name: '四国中央・新居浜',
  screens: [
    {
      backgrounds: [
        { src: '/niihama/bessiClear.jpg', x: 0, y: 0, w: 800, h: 400 },
      ],
      platforms: [
        { x: 200, y: 50, w: 120, h: 20 },
        { x: 450, y: 80, w: 120, h: 20 },
      ],
      hazards: [],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 150, y: 60, w: 100, h: 20 },
        { x: 350, y: 100, w: 100, h: 20 },
        { x: 550, y: 60, w: 100, h: 20 },
      ],
      hazards: [
        { x: 280, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 70, w: 100, h: 20 },
        { x: 300, y: 120, w: 100, h: 20 },
        { x: 500, y: 70, w: 100, h: 20 },
      ],
      hazards: [
        { x: 220, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 150, y: 80, w: 100, h: 20 },
        { x: 400, y: 130, w: 100, h: 20 },
      ],
      hazards: [
        { x: 300, y: 0, w: 20, h: 20 },
      ],
      goal: { x: 600, y: 0, w: 30, h: 60 },
    },
  ],
}
