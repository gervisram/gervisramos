import { motion } from 'framer-motion'
import projects from '../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <main className="page">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="project-card"
            style={{ '--accent': project.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="project-accent-bar" />
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
