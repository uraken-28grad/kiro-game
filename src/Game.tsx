import { useCallback, useEffect, useRef, useState } from 'react'
import { useTick, extend } from '@pixi/react'
import { Assets, Graphics, Sprite, Texture } from 'pixi.js'
import { Screen, StageData } from './stages/index.ts'

extend({ Sprite })

const DEFAULT_PLAYER_W = 30
const DEFAULT_PLAYER_H = 40
const SPEED = 4
const GRAVITY = 0.6
const JUMP_FORCE = -12
const GROUND_H = 40
const HAZARD_SPEED = 1.5

/** 動くハザードの状態 */
interface HazardState {
  x: number
  y: number
  w: number
  h: number
  vx: number
  vy: number
}

interface GameState {
  screenIndex: number
  playerX: number
  playerY: number
  vy: number
  onGround: boolean
  dead: boolean
  cleared: boolean
}

/** ステージ座標(y=地面上面基準, 上方向正) → 画面座標(y=上端基準, 下方向正) に変換 */
function toScreenY(stageY: number, h: number, groundY: number): number {
  return groundY - stageY - h
}

/** ランダムに左右どちらかの方向を生成 */
function randomDirection(): { vx: number; vy: number } {
  return { vx: Math.random() < 0.5 ? HAZARD_SPEED : -HAZARD_SPEED, vy: 0 }
}

/** ハザードの初期状態を生成（画面座標系） */
function initHazardStates(screen: Screen, groundY: number, renderSize?: { w: number; h: number }): HazardState[] {
  return screen.hazards.map(h => {
    const dir = randomDirection()
    const w = renderSize?.w ?? h.w
    const rh = renderSize?.h ?? h.h
    return {
      x: h.x,
      y: toScreenY(h.y, rh, groundY),
      w,
      h: rh,
      vx: dir.vx,
      vy: dir.vy,
    }
  })
}

export function Game({ width, height, stage, onClear, onDeath }: { width: number; height: number; stage: StageData; onClear?: () => void; onDeath?: () => void }) {
  const playerW = stage.playerSize?.w ?? DEFAULT_PLAYER_W
  const playerH = stage.playerSize?.h ?? DEFAULT_PLAYER_H
  const groundY = height - GROUND_H
  const keys = useRef<Set<string>>(new Set())
  const jumpRequested = useRef(false)
  const goalReached = useRef(false)
  const [hazardTextures, setHazardTextures] = useState<Map<string, Texture>>(new Map())
  const [playerTex, setPlayerTex] = useState<Texture | null>(null)
  const [bgTextures, setBgTextures] = useState<Map<string, Texture>>(new Map())

  // ステージ5以上かどうか
  const movingHazards = stage.id >= 5

  // 動くハザードの状態を ref で管理（毎フレーム更新するため）
  const hazardStatesRef = useRef<HazardState[]>([])
  const [hazardPositions, setHazardPositions] = useState<HazardState[]>([])

  useEffect(() => {
    // Load all hazard images (stage-level + screen-level)
    const hazardSrcs = new Set<string>()
    hazardSrcs.add(stage.hazardImage ?? '/animal.png')
    for (const screen of stage.screens) {
      if (screen.hazardImage) hazardSrcs.add(screen.hazardImage)
    }
    Promise.all([...hazardSrcs].map(src => Assets.load<Texture>(src).then(tex => [src, tex] as const))).then(entries => {
      setHazardTextures(new Map(entries))
    })

    const playerImagePath = stage.playerImage ?? '/animal2.png'
    Assets.load<Texture>(playerImagePath).then(setPlayerTex)
  }, [stage])

  // Load background textures for all screens
  useEffect(() => {
    const srcs = new Set<string>()
    for (const screen of stage.screens) {
      if (screen.background) srcs.add(screen.background)
    }
    if (srcs.size === 0) return
    Promise.all([...srcs].map(src => Assets.load<Texture>(src).then(tex => [src, tex] as const))).then(entries => {
      setBgTextures(new Map(entries))
    })
  }, [stage])

  const [state, setState] = useState<GameState>({
    screenIndex: 0,
    playerX: playerW,
    playerY: groundY - playerH,
    vy: 0,
    onGround: true,
    dead: false,
    cleared: false,
  })

  // 画面が変わったらハザード状態を初期化
  useEffect(() => {
    if (movingHazards) {
      const screen = stage.screens[state.screenIndex]
      const hzSize = screen.hazardSize ?? stage.hazardSize
      const states = initHazardStates(screen, groundY, hzSize)
      hazardStatesRef.current = states
      setHazardPositions([...states])
    }
  }, [state.screenIndex, movingHazards, stage, groundY])

  useEffect(() => {
    if (state.cleared && onClear) onClear()
  }, [state.cleared, onClear])

  useEffect(() => {
    if (state.dead && onDeath) onDeath()
  }, [state.dead, onDeath])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      e.preventDefault()
      keys.current.add(e.key)
      if (e.key === ' ') jumpRequested.current = true
    }
    const up = (e: KeyboardEvent) => keys.current.delete(e.key)
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  const tick = useCallback(() => {
    // ハザードを動かす（ステージ5以上のみ）
    if (movingHazards) {
      const hazards = hazardStatesRef.current
      if (hazards.length > 0) {
        // 位置を更新
        for (const h of hazards) {
          h.x += h.vx
        }

        // 壁との衝突判定（画面内に留める）
        for (const h of hazards) {
          if (h.x < 0) {
            h.x = 0
            h.vx = Math.abs(h.vx)
          } else if (h.x + h.w > width) {
            h.x = width - h.w
            h.vx = -Math.abs(h.vx)
          }
        }

        // ハザード同士の衝突判定
        for (let i = 0; i < hazards.length; i++) {
          for (let j = i + 1; j < hazards.length; j++) {
            const a = hazards[i]
            const b = hazards[j]
            const overlapX = a.x + a.w > b.x && a.x < b.x + b.w
            const overlapY = a.y + a.h > b.y && a.y < b.y + b.h
            if (overlapX && overlapY) {
              // 方向を反転
              a.vx = -a.vx
              b.vx = -b.vx
              // 重ならないように引き離す
              a.x += a.vx
              b.x += b.vx
            }
          }
        }

        setHazardPositions([...hazards])
      }
    }

    setState(prev => {
      if (prev.dead || prev.cleared) return prev
      let { screenIndex, playerX, playerY, vy, onGround } = prev
      const currentScreen: Screen = stage.screens[screenIndex]

      // Horizontal movement
      if (keys.current.has('ArrowRight')) playerX += SPEED
      if (keys.current.has('ArrowLeft')) playerX -= SPEED

      // Jump
      if (jumpRequested.current && onGround) vy = JUMP_FORCE
      jumpRequested.current = false

      // Gravity
      vy += GRAVITY
      playerY += vy
      onGround = false

      // Ground collision
      if (playerY + playerH >= groundY) {
        playerY = groundY - playerH
        vy = 0
        onGround = true
      }

      // Platform collision
      for (const p of currentScreen.platforms) {
        const px = p.x
        const py = toScreenY(p.y, p.h, groundY)
        const overlapX = playerX + playerW > px && playerX < px + p.w
        if (!overlapX) continue

        // Landing on top
        if (prev.playerY + playerH <= py + 1 && playerY + playerH >= py) {
          playerY = py - playerH
          vy = 0
          onGround = true
        }
        // Hitting bottom
        else if (prev.playerY >= py + p.h - 1 && playerY < py + p.h) {
          playerY = py + p.h
          vy = 0
        }
        // Side collision
        else if (playerY + playerH > py && playerY < py + p.h) {
          playerX = prev.playerX
        }
      }

      // Hazard collision（動くハザード or 固定ハザード）
      const hzW = currentScreen.hazardSize?.w ?? stage.hazardSize?.w
      const hzH = currentScreen.hazardSize?.h ?? stage.hazardSize?.h
      if (movingHazards) {
        const hazards = hazardStatesRef.current
        for (const h of hazards) {
          const overlapX = playerX + playerW > h.x && playerX < h.x + (hzW ?? h.w)
          const overlapY = playerY + playerH > h.y && playerY < h.y + (hzH ?? h.h)
          if (overlapX && overlapY) return { ...prev, playerX, playerY, vy, onGround, dead: true }
        }
      } else {
        for (const h of currentScreen.hazards) {
          const hw = hzW ?? h.w
          const hh = hzH ?? h.h
          const hx = h.x
          const hy = toScreenY(h.y, hh, groundY)
          const overlapX = playerX + playerW > hx && playerX < hx + hw
          const overlapY = playerY + playerH > hy && playerY < hy + hh
          if (overlapX && overlapY) return { ...prev, playerX, playerY, vy, onGround, dead: true }
        }
      }

      // Goal collision
      if (currentScreen.goal) {
        const gl = currentScreen.goal
        const gx = gl.x
        const gy = toScreenY(gl.y, gl.h, groundY)
        const overlapX = playerX + playerW > gx && playerX < gx + gl.w
        const overlapY = playerY + playerH > gy && playerY < gy + gl.h
        if (overlapX && overlapY) {
          // ゴール内に入ったら出られない（位置をクランプ）
          if (playerX < gx) playerX = gx
          if (playerX + playerW > gx + gl.w) playerX = gx + gl.w - playerW
          if (playerY < gy) playerY = gy
          if (playerY + playerH > gy + gl.h) playerY = gy + gl.h - playerH
          vy = 0
          goalReached.current = true
          return { screenIndex, playerX, playerY, vy, onGround: true, dead: false, cleared: true }
        }
      }

      // Screen transition: right edge
      if (playerX + playerW > width) {
        if (screenIndex < stage.screens.length - 1) {
          return { screenIndex: screenIndex + 1, playerX: 0, playerY: groundY - playerH, vy: 0, onGround: true, dead: false, cleared: false }
        } else {
          playerX = width - playerW
        }
      }

      // Screen transition: left edge
      if (playerX < 0) {
        if (screenIndex > 0) {
          return { screenIndex: screenIndex - 1, playerX: width - playerW, playerY: groundY - playerH, vy: 0, onGround: true, dead: false, cleared: false }
        } else {
          playerX = 0
        }
      }

      return { screenIndex, playerX, playerY, vy, onGround, dead: false, cleared: false }
    })
  }, [width, height, groundY, stage, movingHazards, playerW, playerH])

  useTick(tick)

  const currentScreen: Screen = stage.screens[state.screenIndex]

  return (
    <>
      {/* Background - full screen, fixed, behind everything */}
      {currentScreen.background && bgTextures.get(currentScreen.background) && (
        <pixiSprite texture={bgTextures.get(currentScreen.background)!} x={0} y={0} width={width} height={height} />
      )}

      {/* Ground */}
      <pixiGraphics draw={(g: Graphics) => { g.clear(); g.rect(0, groundY, width, GROUND_H); g.fill(0x2ecc71) }} />

      {/* Platforms */}
      <pixiGraphics draw={(g: Graphics) => {
        g.clear()
        for (const p of currentScreen.platforms) {
          g.rect(p.x, toScreenY(p.y, p.h, groundY), p.w, p.h)
        }
        g.fill(0x8b4513)
      }} />

      {/* Hazards */}
      {(() => {
        const hazardImgSrc = currentScreen.hazardImage ?? stage.hazardImage ?? '/animal.png'
        const hazardTex = hazardTextures.get(hazardImgSrc)
        const hzSize = currentScreen.hazardSize ?? stage.hazardSize
        if (movingHazards) {
          return hazardTex && hazardPositions.map((h, i) => (
            <pixiSprite key={`hz-${i}`} texture={hazardTex} x={h.x} y={h.y} width={hzSize?.w ?? h.w} height={hzSize?.h ?? h.h} />
          ))
        } else {
          return hazardTex && currentScreen.hazards.map((h, i) => {
            const hw = hzSize?.w ?? h.w
            const hh = hzSize?.h ?? h.h
            return <pixiSprite key={`hz-${i}`} texture={hazardTex} x={h.x} y={toScreenY(h.y, hh, groundY)} width={hw} height={hh} />
          })
        }
      })()}

      {/* Goal */}
      {currentScreen.goal && (
        <pixiGraphics draw={(g: Graphics) => {
          g.clear()
          const gl = currentScreen.goal!
          g.rect(gl.x, toScreenY(gl.y, gl.h, groundY), gl.w, gl.h)
          g.fill(0xffd700)
        }} />
      )}

      {/* Player */}
      {playerTex ? (
        <pixiSprite texture={playerTex} x={state.playerX} y={state.playerY} width={playerW} height={playerH} />
      ) : (
        <pixiGraphics
          draw={(g: Graphics) => { g.clear(); g.rect(0, 0, playerW, playerH); g.fill(0x4488ff) }}
          x={state.playerX}
          y={state.playerY}
        />
      )}

      {/* Dead overlay */}
      {state.dead && (
        <pixiGraphics draw={(g: Graphics) => {
          g.clear(); g.rect(0, 0, width, height); g.fill({ color: 0x000000, alpha: 0.6 })
          g.rect(width / 2 - 80, height / 2 - 20, 160, 40); g.fill(0xcc0000)
        }} />
      )}

      {/* Cleared overlay */}
      {state.cleared && (
        <pixiGraphics draw={(g: Graphics) => {
          g.clear(); g.rect(0, 0, width, height); g.fill({ color: 0x000000, alpha: 0.6 })
        }} />
      )}
    </>
  )
}
