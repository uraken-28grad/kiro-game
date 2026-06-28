import { useCallback, useEffect, useRef, useState } from 'react'
import { useTick, extend } from '@pixi/react'
import { Assets, Graphics, Sprite, Texture } from 'pixi.js'
import { Rect, StageData } from './stages'

extend({ Sprite })

const PLAYER_W = 30
const PLAYER_H = 40
const SPEED = 4
const GRAVITY = 0.6
const JUMP_FORCE = -12
const GROUND_H = 40

interface GameState {
  cameraX: number
  playerY: number
  vy: number
  onGround: boolean
  dead: boolean
  cleared: boolean
}

export function Game({ width, height, stage, onClear }: { width: number; height: number; stage: StageData; onClear?: () => void }) {
  const groundY = height - GROUND_H
  const world = useRef<{ platforms: Rect[]; hazards: Rect[]; goal: Rect }>({ platforms: stage.platforms(groundY), hazards: stage.hazards(groundY), goal: stage.goal(groundY) })
  const keys = useRef<Set<string>>(new Set())
  const jumpRequested = useRef(false)
  const [hazardTex, setHazardTex] = useState<Texture | null>(null)

  useEffect(() => {
    Assets.load<Texture>('/animel.png').then(setHazardTex)
  }, [])

  const [state, setState] = useState<GameState>({
    cameraX: stage.playerStart.x,
    playerY: groundY - PLAYER_H + stage.playerStart.y,
    vy: 0,
    onGround: true,
    dead: false,
    cleared: false,
  })

  useEffect(() => {
    world.current = { platforms: stage.platforms(groundY), hazards: stage.hazards(groundY), goal: stage.goal(groundY) }
  }, [stage, groundY])

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
      let { cameraX, playerY, vy, onGround } = prev

      if (keys.current.has('ArrowRight')) cameraX += SPEED
      if (keys.current.has('ArrowLeft')) cameraX -= SPEED
      if (jumpRequested.current && onGround) vy = JUMP_FORCE
      jumpRequested.current = false

      vy += GRAVITY
      playerY += vy

      const playerScreenX = width / 2 - PLAYER_W / 2
      const playerWorldX = playerScreenX + cameraX
      onGround = false

      if (playerY + PLAYER_H >= groundY) {
        playerY = groundY - PLAYER_H
        vy = 0
        onGround = true
      }

      for (const o of world.current.platforms) {
        const overlapX = playerWorldX + PLAYER_W > o.x && playerWorldX < o.x + o.w
        if (!overlapX) continue
        if (prev.playerY + PLAYER_H <= o.y + 1 && playerY + PLAYER_H >= o.y) {
          playerY = o.y - PLAYER_H; vy = 0; onGround = true
        } else if (prev.playerY >= o.y + o.h - 1 && playerY < o.y + o.h) {
          playerY = o.y + o.h; vy = 0
        } else if (playerY + PLAYER_H > o.y && playerY < o.y + o.h) {
          cameraX = prev.cameraX
        }
      }

      for (const h of world.current.hazards) {
        const overlapX = playerWorldX + PLAYER_W > h.x && playerWorldX < h.x + h.w
        const overlapY = playerY + PLAYER_H > h.y && playerY < h.y + h.h
        if (overlapX && overlapY) return { cameraX, playerY, vy, onGround, dead: true, cleared: false }
      }

      const gl = world.current.goal
      const goalOverlapX = playerWorldX + PLAYER_W > gl.x && playerWorldX < gl.x + gl.w
      const goalOverlapY = playerY + PLAYER_H > gl.y && playerY < gl.y + gl.h
      if (goalOverlapX && goalOverlapY) return { cameraX, playerY, vy, onGround, dead: false, cleared: true }

      return { cameraX, playerY, vy, onGround, dead: false, cleared: false }
    })
  }, [width, groundY])

  useTick(tick)

  const playerScreenX = width / 2 - PLAYER_W / 2

  return (
    <>
      <pixiGraphics draw={(g: Graphics) => { g.clear(); g.rect(0, groundY, width, GROUND_H); g.fill(0x2ecc71) }} />
      <pixiGraphics draw={(g: Graphics) => {
        g.clear()
        for (const o of world.current.platforms) g.rect(o.x - state.cameraX, o.y, o.w, o.h)
        g.fill(0x8b4513)
      }} />
      {hazardTex && world.current.hazards.map((h, i) => (
        <pixiSprite key={i} texture={hazardTex} x={h.x - state.cameraX} y={h.y} width={h.w} height={h.h} />
      ))}
      {/* goal */}
      <pixiGraphics draw={(g: Graphics) => {
        g.clear()
        const gl = world.current.goal
        g.rect(gl.x - state.cameraX, gl.y, gl.w, gl.h)
        g.fill(0xffd700)
      }} />
      <pixiGraphics
        draw={(g: Graphics) => { g.clear(); g.rect(0, 0, PLAYER_W, PLAYER_H); g.fill(0x4488ff) }}
        x={playerScreenX}
        y={state.playerY}
      />
      {state.dead && (
        <pixiGraphics draw={(g: Graphics) => {
          g.clear(); g.rect(0, 0, width, height); g.fill({ color: 0x000000, alpha: 0.6 })
          g.rect(width / 2 - 80, height / 2 - 20, 160, 40); g.fill(0xcc0000)
        }} />
      )}
      {state.cleared && (
        <pixiGraphics draw={(g: Graphics) => {
          g.clear(); g.rect(0, 0, width, height); g.fill({ color: 0x000000, alpha: 0.6 })
        }} />
      )}
    </>
  )
}
