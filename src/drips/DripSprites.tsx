import { useEffect, useState } from 'react'
import { Assets, Texture } from 'pixi.js'
import { DripInstance } from './types'

interface Props {
  /** 落下中の雫一覧 */
  fallingDrips: DripInstance[]
  /** 雫画像パス */
  imagePath: string
}

/**
 * 落下中の雫を描画するコンポーネント。
 * Game.tsxのロジックを汚さず、コンポーネントとして配置するだけで使える。
 */
export function DripSprites({ fallingDrips, imagePath }: Props) {
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    Assets.load<Texture>(imagePath).then(setTexture)
  }, [imagePath])

  if (!texture || fallingDrips.length === 0) return null

  return (
    <>
      {fallingDrips.map((drip, i) => (
        <pixiSprite
          key={`drip-${drip.defIndex}-${i}`}
          texture={texture}
          x={drip.x}
          y={drip.y}
          width={drip.w}
          height={drip.h}
        />
      ))}
    </>
  )
}
