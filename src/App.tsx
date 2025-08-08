import { useState, useRef } from 'react'
import './App.css'

interface RainSound {
  id: string
  name: string
  file: string
  description: string
}

const rainSounds: RainSound[] = [
  {
    id: 'gentle',
    name: '優しい雨',
    file: '/audio/gentle-rain.mp3',
    description: '穏やかで心地よい雨音'
  },
  {
    id: 'heavy',
    name: '激しい雨',
    file: '/audio/heavy-rain.mp3',
    description: '力強い雨音'
  },
  {
    id: 'thunderstorm',
    name: '雷雨',
    file: '/audio/thunderstorm.mp3',
    description: '雷を伴う激しい雨'
  },
  {
    id: 'drizzle',
    name: '小雨',
    file: '/audio/light-drizzle.mp3',
    description: 'しとしとと降る小雨'
  }
]

function App() {
  const [currentSound, setCurrentSound] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const playSound = (sound: RainSound) => {
    if (audioRef.current) {
      audioRef.current.pause()
    }

    audioRef.current = new Audio(sound.file)
    audioRef.current.loop = true
    audioRef.current.volume = volume
    
    audioRef.current.play().then(() => {
      setCurrentSound(sound.id)
      setIsPlaying(true)
    }).catch(error => {
      console.error('音声の再生に失敗しました:', error)
    })
  }

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setCurrentSound(null)
    setIsPlaying(false)
  }

  return (
    <div className="rain-app">
      <div className="rain-background">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 1.5}s`
            }}
          />
        ))}
      </div>
      <header>
        <h1>🌧️ RAIN SOUNDS</h1>
        <p>リラックスできる雨の音をお楽しみください</p>
      </header>

      <main>
        <div className="sound-controls">
          {rainSounds.map((sound) => (
            <button
              key={sound.id}
              className={`sound-button ${currentSound === sound.id ? 'active' : ''}`}
              onClick={() => playSound(sound)}
              disabled={isPlaying && currentSound === sound.id}
            >
              <div className="sound-name">{sound.name}</div>
              <div className="sound-description">{sound.description}</div>
            </button>
          ))}
        </div>

        <div className="volume-control">
          <label htmlFor="volume-slider">🔊 音量</label>
          <input
            id="volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="volume-slider"
          />
          <span className="volume-percentage">{Math.round(volume * 100)}%</span>
        </div>

        {isPlaying && (
          <div className="player-controls">
            <p>再生中: {rainSounds.find(s => s.id === currentSound)?.name}</p>
            <button className="stop-button" onClick={stopSound}>
              停止
            </button>
          </div>
        )}
      </main>

      <footer>
        <p>※ 実際の音声ファイルを public/audio/ ディレクトリに配置してください</p>
      </footer>
    </div>
  )
}

export default App
