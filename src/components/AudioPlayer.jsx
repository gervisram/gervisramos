import { useState, useRef, useEffect } from 'react'
import './AudioPlayer.css'

export default function AudioPlayer({ track, isActive, onPlay }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!isActive && playing) {
      audioRef.current.pause()
      setPlaying(false)
    }
  }, [isActive])

  function togglePlay() {
    const audio = audioRef.current
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      onPlay()
      audio.play()
      setPlaying(true)
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    setProgress((audio.currentTime / audio.duration) * 100 || 0)
  }

  function handleLoadedMetadata() {
    setDuration(audioRef.current.duration)
  }

  function handleEnded() {
    setPlaying(false)
    setProgress(0)
  }

  function handleSeek(e) {
    const audio = audioRef.current
    const pct = e.target.value
    audio.currentTime = (pct / 100) * audio.duration
    setProgress(pct)
  }

  function handleVolume(e) {
    const v = parseFloat(e.target.value)
    audioRef.current.volume = v
    setVolume(v)
  }

  function fmt(secs) {
    if (!secs || isNaN(secs)) return '0:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const elapsed = duration ? (progress / 100) * duration : 0

  return (
    <div className={`audio-player ${playing ? 'playing' : ''}`}>
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      <button className="play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button>

      <div className="player-meta">
        <div className="player-title-row">
          <span className="player-title">{track.title}</span>
          <span className="player-time">{fmt(elapsed)} / {fmt(duration)}</span>
        </div>
        <input
          className="seek-bar"
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleSeek}
        />
      </div>

      <div className="volume-wrap">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="vol-icon">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
        <input
          className="vol-bar"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      </div>

      {playing && (
        <div className="visualizer">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )}
    </div>
  )
}
