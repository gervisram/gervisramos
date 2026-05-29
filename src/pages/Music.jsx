import { useState } from 'react'
import { motion } from 'framer-motion'
import AudioPlayer from '../components/AudioPlayer'
import './Music.css'
import musicImage from '../assets/persWeb_musicpage_pic.jpg'

const tracks = [
  { id: 1, title: 'Track 01', src: '/gervisramos/music/persWeb_song1.mp3' },
  { id: 2, title: 'Track 02', src: '/gervisramos/music/persWeb_song3.mp3' },
  { id: 3, title: 'Track 03', src: '/gervisramos/music/persWeb_song2.mp3' },
]

export default function Music() {
  const [activeId, setActiveId] = useState(null)

  return (
    <main className="page">
      <motion.div
        className="music-banner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="music-banner-placeholder">
          <img src={musicImage} alt='Music Page Image' />
        </div>
      </motion.div>

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
        Outside of coding, music production is another one of my passions. I studied
        at the Los Angeles Film School before my time at CU Boulder.
        Take a listen:
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

    </main>
  )
}
