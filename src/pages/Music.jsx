import { useState } from 'react'
import { motion } from 'framer-motion'
import AudioPlayer from '../components/AudioPlayer'
import './Music.css'

const tracks = [
  { id: 1, title: 'Track 01', src: '/gervisramos/music/track-01.mp3' },
  { id: 2, title: 'Track 02', src: '/gervisramos/music/track-02.mp3' },
  { id: 3, title: 'Track 03', src: '/gervisramos/music/track-03.mp3' },
]

export default function Music() {
  const [activeId, setActiveId] = useState(null)

  return (
    <main className="page">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Music
      </motion.h2>

      <motion.p
        className="music-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Music production is how I express creativity outside of code. I studied
        at the Los Angeles Film School and have been making beats ever since.
        Have a listen:
      </motion.p>

      <div className="track-list">
        {tracks.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
          >
            <AudioPlayer
              track={track}
              isActive={activeId === track.id}
              onPlay={() => setActiveId(track.id)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="music-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p>
          <strong>Add your tracks:</strong> Drop your <code>.mp3</code> files into
          the <code>public/music/</code> folder and update the track list in{' '}
          <code>src/pages/Music.jsx</code>.
        </p>
      </motion.div>
    </main>
  )
}
