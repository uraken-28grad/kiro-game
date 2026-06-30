export interface Rect { x: number; y: number; w: number; h: number }

export interface StageData {
  id: number
  name: string
  playerStart: { x: number; y: number }
  platforms: (groundY: number) => Rect[]
  hazards: (groundY: number) => Rect[]
  goal: (groundY: number) => Rect
}

import { stage1 } from './stage1'
import { stage2 } from './stage2'
import { stage3 } from './stage3'
import { stage4 } from './stage4'
import { stage5 } from './stage5'

export const stages: StageData[] = [stage1, stage2, stage3, stage4, stage5]
