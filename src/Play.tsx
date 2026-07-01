import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Application, extend } from '@pixi/react'
import { Container, Graphics } from 'pixi.js'
import { Game } from './Game'
import { stages } from './stages'

extend({ Container, Graphics })

function Play() {
  const { stageId } = useParams()
  const navigate = useNavigate()
  const stage = stages.find(s => s.id === Number(stageId)) ?? stages[0]
  const [size, setSize] = useState({ w: window.innerWidth / 2, h: window.innerHeight / 2 })
  const [key, setKey] = useState(0)
  const [cleared, setCleared] = useState(false)
  const [deathCount, setDeathCount] = useState(0)

  const handleClear = useCallback(() => setCleared(true), [])
  const handleDeath = useCallback(() => setDeathCount(c => c + 1), [])

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth / 2, h: window.innerHeight / 2 })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleRetry = () => { setCleared(false); setKey(k => k + 1) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      <p style={{ margin: '0 0 8px' }}>Stage {stage.id}: {stage.name} | 💀 {deathCount}</p>
      <div style={{ position: 'relative' }}>
        <Application width={size.w} height={size.h} background={0x87ceeb}>
          <Game key={key} width={size.w} height={size.h} stage={stage} onClear={handleClear} onDeath={handleDeath} />
        </Application>
        {cleared && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(0,0,0,0.6)', pointerEvents: 'none',
          }}>
            <p style={{ color: '#ffd700', fontSize: 36, fontWeight: 'bold', textAlign: 'center' }}>
              GOAL!<br />Congratulations!
            </p>
          </div>
        )}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
        <button onClick={handleRetry} style={{ padding: '8px 24px', fontSize: 16, cursor: 'pointer' }}>
          やり直し
        </button>
        <button onClick={() => navigate('/')} style={{ padding: '8px 24px', fontSize: 16, cursor: 'pointer' }}>
          ステージ選択
        </button>
      </div>
    </div>
  )
}

export default Play
