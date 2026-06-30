import { useCallback, useEffect, useRef, useState } from 'react'
import { useTick, extend } from '@pixi/react'
import { Assets, Graphics, Sprite, Texture } from 'pixi.js'
import { Screen, StageData } from './stages/index.ts'

extend({ Sprite })

const PLAYER_W = 30
const PLAYER_H = 40
const SPEED = 4
const GRAVITY = 0.6
const JUMP_FORCE = -12
const GROUND_H = 40

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

export function Game({ width, height, stage, onClear }: { width: number; height: number; stage: StageData; onClear?: () => void }) {
  const groundY = height - GROUND_H
  const keys = useRef<Set<string>>(new Set())
  const jumpRequested = useRef(false)
  const [hazardTex, setHazardTex] = useState<Texture | null>(null)
  const [bgTextures, setBgTextures] = useState<Map<string, Texture>>(new Map())

  useEffect(() => {
    Assets.load<Texture>('/animel.png').then(setHazardTex)
  }, [])

  // Load background textures for all screens
  useEffect(() => {
    const srcs = new Set<string>()
    for (const screen of stage.screens) {
      for (const bg of screen.backgrounds) srcs.add(bg.src)
    }
    if (srcs.size === 0) return
    Promise.all([...srcs].map(src => Assets.load<Texture>(src).then(tex => [src, tex] as const))).then(entries => {
      setBgTextures(new Map(entries))
    })
  }, [stage])

  const [state, setState] = useState<GameState>({
    screenIndex: 0,
    playerX: PLAYER_W,
    playerY: groundY - PLAYER_H,
    vy: 0,
    onGround: true,
    dead: false,
    cleared: false,
  })

  useEffect(() => {
    if (state.cleared && onClear) onClear()
  }, [state.cleared, onClear])

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
      if (playerY + PLAYER_H >= groundY) {
        playerY = groundY - PLAYER_H
        vy = 0
        onGround = true
      }

      // Platform collision
      for (const p of currentScreen.platforms) {
        const px = p.x
        const py = toScreenY(p.y, p.h, groundY)
        const overlapX = playerX + PLAYER_W > px && playerX < px + p.w
        if (!overlapX) continue

        // Landing on top
        if (prev.playerY + PLAYER_H <= py + 1 && playerY + PLAYER_H >= py) {
          playerY = py - PLAYER_H
          vy = 0
          onGround = true
        }
        // Hitting bottom
        else if (prev.playerY >= py + p.h - 1 && playerY < py + p.h) {
          playerY = py + p.h
          vy = 0
        }
        // Side collision
        else if (playerY + PLAYER_H > py && playerY < py + p.h) {
          playerX = prev.playerX
        }
      }

      // Hazard collision
      for (const h of currentScreen.hazards) {
        const hx = h.x
        const hy = toScreenY(h.y, h.h, groundY)
        const overlapX = playerX + PLAYER_W > hx && playerX < hx + h.w
        const overlapY = playerY + PLAYER_H > hy && playerY < hy + h.h
        if (overlapX && overlapY) return { ...prev, playerX, playerY, vy, onGround, dead: true }
      }

      // Goal collision
      if (currentScreen.goal) {
        const gl = currentScreen.goal
        const gx = gl.x
        const gy = toScreenY(gl.y, gl.h, groundY)
        const overlapX = playerX + PLAYER_W > gx && playerX < gx + gl.w
        const overlapY = playerY + PLAYER_H > gy && playerY < gy + gl.h
        if (overlapX && overlapY) return { ...prev, playerX, playerY, vy, onGround, cleared: true }
      }

      // Screen transition: right edge
      if (playerX + PLAYER_W > width) {
        if (screenIndex < stage.screens.length - 1) {
          return { screenIndex: screenIndex + 1, playerX: 0, playerY: groundY - PLAYER_H, vy: 0, onGround: true, dead: false, cleared: false }
        } else {
          playerX = width - PLAYER_W
        }
      }

      // Screen transition: left edge
      if (playerX < 0) {
        if (screenIndex > 0) {
          return { screenIndex: screenIndex - 1, playerX: width - PLAYER_W, playerY: groundY - PLAYER_H, vy: 0, onGround: true, dead: false, cleared: false }
        } else {
          playerX = 0
        }
      }

      return { screenIndex, playerX, playerY, vy, onGround, dead: false, cleared: false }
    })
  }, [width, height, groundY, stage])

  useTick(tick)

  const currentScreen: Screen = stage.screens[state.screenIndex]

  return (
    <>
      {/* Backgrounds */}
      {currentScreen.backgrounds.map((bg, i) => {
        const tex = bgTextures.get(bg.src)
        if (!tex) return null
        return <pixiSprite key={`bg-${i}`} texture={tex} x={bg.x} y={toScreenY(bg.y, bg.h, groundY)} width={bg.w} height={bg.h} />
      })}

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
      {hazardTex && currentScreen.hazards.map((h, i) => (
        <pixiSprite key={`hz-${i}`} texture={hazardTex} x={h.x} y={toScreenY(h.y, h.h, groundY)} width={h.w} height={h.h} />
      ))}

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
      <pixiGraphics
        draw={(g: Graphics) => { g.clear(); g.rect(0, 0, PLAYER_W, PLAYER_H); g.fill(0x4488ff) }}
        x={state.playerX}
        y={state.playerY}
      />

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
