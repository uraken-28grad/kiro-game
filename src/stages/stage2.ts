import { StageData } from './index'

export const stage2: StageData = {
  id: 2,
  name: '地下洞窟',
  screens: [
    {
      backgrounds: [],
      platforms: [
        { x: 150, y: 80, w: 80, h: 20 },
        { x: 350, y: 150, w: 60, h: 20 },
      ],
      hazards: [
        { x: 260, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 90, w: 100, h: 90 },
        { x: 350, y: 170, w: 70, h: 20 },
        { x: 520, y: 120, w: 60, h: 60 },
      ],
      hazards: [
        { x: 240, y: 0, w: 20, h: 20 },
        { x: 450, y: 0, w: 20, h: 20 },
      ],
    },
    {
      backgrounds: [],
      platforms: [
        { x: 100, y: 60, w: 60, h: 60 },
        { x: 300, y: 160, w: 90, h: 20 },
      ],
      hazards: [
        { x: 200, y: 0, w: 20, h: 20 },
      ],
      goal: { x: 550, y: 0, w: 30, h: 60 },
    },
  ],
}
