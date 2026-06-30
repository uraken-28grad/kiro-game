import { StageData } from './index'

export const stage1: StageData = {
  id: 1,
  name: 'はじまりの丘',
  screens: [
    {
      backgrounds: [
        { src: '/niihama/bessiClear.jpg', x: 0, y: 0, w: 800, h: 400 },
      ],
      platforms: [
        { x: 200, y: 60, w: 60, h: 60 },
        { x: 400, y: 130, w: 80, h: 20 },
      ],
      hazards: [
        { x: 320, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 80, w: 70, h: 20 },
        { x: 300, y: 150, w: 80, h: 20 },
        { x: 500, y: 100, w: 60, h: 60 },
      ],
      hazards: [
        { x: 220, y: 0, w: 20, h: 20 },
        { x: 430, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 150, y: 100, w: 80, h: 20 },
        { x: 350, y: 160, w: 70, h: 20 },
      ],
      hazards: [
        { x: 270, y: 0, w: 20, h: 20 },
      ],
      goal: { x: 550, y: 0, w: 30, h: 60 },
    },
  ],
}
