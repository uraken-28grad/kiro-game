import { useNavigate } from 'react-router-dom'
import { stages } from './stages'

function Home() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 16 }}>
      <h1>Kiro Game</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {stages.map(s => (
          <button key={s.id} onClick={() => navigate(`/play/${s.id}`)} style={{ padding: '10px 32px', fontSize: 16, cursor: 'pointer' }}>
            Stage {s.id}: {s.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Home
