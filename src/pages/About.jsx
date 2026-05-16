import { motion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const skills = [
  'Python', 'React', 'React Native', 'Node.js', 'JavaScript',
  'HTML & CSS', 'Git / GitHub', 'Machine Learning', 'NumPy', 'Pandas',
  'SciPy', 'Expo', 'SQL', 'Figma',
]

export default function About() {
  return (
    <main className="page">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-grid">
        <div className="about-left">
          <motion.div
            className="about-avatar"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="avatar-placeholder">GR</div>
          </motion.div>

          <motion.div
            className="about-card"
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h3>Skills</h3>
            <div className="skill-tags">
              {skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="about-right">
          <motion.section
            className="about-card"
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h3>Who I Am</h3>
            <p>
              I'm Gervis — a Computer Science student at the University of
              Colorado Boulder (graduating May 2026) with a background in Music
              Production from the Los Angeles Film School. I love building things
              that live at the intersection of logic and creativity: from ML
              models to mobile apps to original beats.
            </p>
          </motion.section>

          <motion.section
            className="about-card"
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h3>Education</h3>
            <div className="edu-item">
              <div className="edu-header">
                <span className="edu-school">University of Colorado Boulder</span>
                <span className="edu-date">Sept 2022 – May 2026</span>
              </div>
              <p className="edu-degree">B.S. Computer Science</p>
              <p className="edu-detail">
                Relevant coursework: Data Structures, Algorithms, Data Science,
                Software Development Methods, Machine Learning
              </p>
            </div>
            <div className="edu-item">
              <div className="edu-header">
                <span className="edu-school">Los Angeles Film School</span>
                <span className="edu-date">Sept 2020 – May 2022</span>
              </div>
              <p className="edu-degree">A.A. Music Production</p>
            </div>
          </motion.section>

          <motion.section
            className="about-card"
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h3>Experience</h3>
            <div className="exp-item">
              <div className="edu-header">
                <span className="edu-school">Mobile App Developer — Harwood Museum of Art</span>
                <span className="edu-date">2023 – Present</span>
              </div>
              <p className="edu-detail">
                Building a cross-platform art exhibit guide app with interactive
                mapping, road-trip route functionality, and dynamically loaded
                artist/artwork data using React Native, Expo, and Map APIs.
              </p>
            </div>
            <div className="exp-item">
              <div className="edu-header">
                <span className="edu-school">E-Commerce Clerk — King Soopers</span>
                <span className="edu-date">Nov 2022 – Present</span>
              </div>
              <p className="edu-detail">
                Process and prepare online orders for curbside pickup in a
                fast-paced environment, maintaining high standards of efficiency
                and accuracy in order fulfillment.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}
