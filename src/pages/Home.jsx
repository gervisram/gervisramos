import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <main className="home">
      <div className="home-inner">
      <div className="home-content">
        <motion.p
          className="home-eyebrow"
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          Hey, I'm
        </motion.p>

        <motion.h1
          className="home-name"
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          Gervis Ramos
        </motion.h1>

        <motion.p
          className="home-tagline"
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          CS Student&nbsp;&nbsp;·&nbsp;&nbsp;Music Producer&nbsp;&nbsp;·&nbsp;&nbsp;App Developer
        </motion.p>

        <motion.p
          className="home-bio"
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          I build apps, train ML models, and make beats. Currently finishing my
          Computer Science degree at CU Boulder while working on projects that
          bridge technology and creativity.
        </motion.p>

        <motion.div
          className="home-ctas"
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/music" className="btn btn-secondary">
            Play My Music
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="home-photo"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
      >
        <div className="home-photo-placeholder">
          <span>Photo</span>
          <p>Replace with your image in <code>public/images/hero.jpg</code></p>
        </div>
      </motion.div>
      </div>

      <div className="home-bg-orb orb-1" />
      <div className="home-bg-orb orb-2" />
    </main>
  )
}
