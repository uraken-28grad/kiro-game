import { useEffect, useState } from 'react'
import { Assets, Texture } from 'pixi.js'
import { GeyserState } from './types'

interface Props {
  /** 現在噴出中の間欠泉 */
  activeGeysers: GeyserState[]
  /** 間欠泉画像パス */
  imagePath: string
  /** 地面の画面Y座標 */
  groundY: number
}

/** ステージ座標(y=地面上面基準, 上方向正) → 画面座標(y=上端基準, 下方向正) に変換 */
function toScreenY(stageY: number, h: number, groundY: number): number {
  return groundY - stageY - h
}

/**
 * 噴出中の間欠泉を描画するコンポーネント。
 * Game.tsxのロジックを汚さず、コンポーネントとして配置するだけで使える。
 */
export function GeyserSprites({ activeGeysers, imagePath, groundY }: Props) {
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    Assets.load<Texture>(imagePath).then(setTexture)
  }, [imagePath])

  if (!texture || activeGeysers.length === 0) return null

  return (
    <>
      {activeGeysers.map((g, i) => (
        <pixiSprite
          key={`geyser-${i}`}
          texture={texture}
          x={g.def.x}
          y={toScreenY(g.def.y, g.def.h, groundY)}
          width={g.def.w}
          height={g.def.h}
        />
      ))}
    </>
  )
}
