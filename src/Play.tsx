import { useCallback, useEffect, useRef, useState } from 'react'
import { Application, extend, useTick } from '@pixi/react'
import { Container, Graphics } from 'pixi.js'

extend({ Container, Graphics })

const PLAYER_W = 30
const PLAYER_H = 40
const SPEED = 4
const GRAVITY = 0.6
const JUMP_FORCE = -12
const GROUND_H = 40

interface Rect { x: number; y: number; w: number; h: number }

function generate(canvasH: number) {
  const groundY = canvasH - GROUND_H
  const platforms: Rect[] = [
    { x: 400, y: groundY - 60, w: 60, h: 60 },
    { x: 650, y: groundY - 130, w: 80, h: 20 },
    { x: 900, y: groundY - 100, w: 60, h: 100 },
    { x: 1150, y: groundY - 160, w: 90, h: 20 },
    { x: 1400, y: groundY - 50, w: 80, h: 50 },
    { x: 1650, y: groundY - 180, w: 70, h: 20 },
    { x: 1900, y: groundY - 80, w: 60, h: 80 },
    { x: 2200, y: groundY - 140, w: 80, h: 20 },
  ]
  const hazards: Rect[] = [
    { x: 550, y: groundY - 20, w: 20, h: 20 },
    { x: 1050, y: groundY - 20, w: 20, h: 20 },
    { x: 1550, y: groundY - 20, w: 20, h: 20 },
    { x: 2050, y: groundY - 20, w: 20, h: 20 },
    { x: 2450, y: groundY - 20, w: 20, h: 20 },
  ]
  return { platforms, hazards }
}

interface GameState {
  cameraX: number
  playerY: number
  vy: number
  onGround: boolean
  dead: boolean
}

function Game({ width, height }: { width: number; height: number }) {
  const groundY = height - GROUND_H
  const world = useRef(generate(height))
  const keys = useRef<Set<string>>(new Set())
  const jumpRequested = useRef(false)

  const [state, setState] = useState<GameState>({
    cameraX: 0,
    playerY: groundY - PLAYER_H,
    vy: 0,
    onGround: true,
    dead: false,
  })

  useEffect(() => { world.current = generate(height) }, [height])

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
      if (prev.dead) return prev
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

      // ground
      if (playerY + PLAYER_H >= groundY) {
        playerY = groundY - PLAYER_H
        vy = 0
        onGround = true
      }

      // platforms
      for (const o of world.current.platforms) {
        const overlapX = playerWorldX + PLAYER_W > o.x && playerWorldX < o.x + o.w
        if (!overlapX) continue

        // land on top
        if (prev.playerY + PLAYER_H <= o.y + 1 && playerY + PLAYER_H >= o.y) {
          playerY = o.y - PLAYER_H
          vy = 0
          onGround = true
        }
        // hit bottom
        else if (prev.playerY >= o.y + o.h - 1 && playerY < o.y + o.h) {
          playerY = o.y + o.h
          vy = 0
        }
        // side
        else if (playerY + PLAYER_H > o.y && playerY < o.y + o.h) {
          cameraX = prev.cameraX
        }
      }

      // hazards
      for (const h of world.current.hazards) {
        const overlapX = playerWorldX + PLAYER_W > h.x && playerWorldX < h.x + h.w
        const overlapY = playerY + PLAYER_H > h.y && playerY < h.y + h.h
        if (overlapX && overlapY) return { cameraX, playerY, vy, onGround, dead: true }
      }

      return { cameraX, playerY, vy, onGround, dead: false }
    })
  }, [width, height, groundY])

  useTick(tick)

  const playerScreenX = width / 2 - PLAYER_W / 2

  return (
    <>
      {/* ground */}
      <pixiGraphics draw={(g: Graphics) => { g.clear(); g.rect(0, groundY, width, GROUND_H); g.fill(0x2ecc71) }} />
      {/* platforms */}
      <pixiGraphics draw={(g: Graphics) => {
        g.clear()
        for (const o of world.current.platforms) g.rect(o.x - state.cameraX, o.y, o.w, o.h)
        g.fill(0x8b4513)
      }} />
      {/* hazards */}
      <pixiGraphics draw={(g: Graphics) => {
        g.clear()
        for (const h of world.current.hazards) g.rect(h.x - state.cameraX, h.y, h.w, h.h)
        g.fill(0xff1493)
      }} />
      {/* player */}
      <pixiGraphics
        draw={(g: Graphics) => { g.clear(); g.rect(0, 0, PLAYER_W, PLAYER_H); g.fill(0x4488ff) }}
        x={playerScreenX}
        y={state.playerY}
      />
      {/* game over overlay */}
      {state.dead && (
        <pixiGraphics draw={(g: Graphics) => {
          g.clear(); g.rect(0, 0, width, height); g.fill({ color: 0x000000, alpha: 0.6 })
          g.rect(width / 2 - 80, height / 2 - 20, 160, 40); g.fill(0xcc0000)
        }} />
      )}
    </>
  )
}

function Play() {
  const [size, setSize] = useState({ w: window.innerWidth / 2, h: window.innerHeight / 2 })
  const [key, setKey] = useState(0)

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth / 2, h: window.innerHeight / 2 })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Application width={size.w} height={size.h} background={0x87ceeb}>
        <Game key={key} width={size.w} height={size.h} />
      </Application>
      <button
        onClick={() => setKey(k => k + 1)}
        style={{ marginTop: 12, padding: '8px 24px', fontSize: 16, cursor: 'pointer' }}
      >
        やり直し
      </button>
    </div>
  )
}

export default Play
