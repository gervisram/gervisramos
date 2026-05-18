import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const socials = [
  {
    label: 'GitHub',
    handle: '@gervisram',
    href: 'https://github.com/gervisram',
    icon: <FaGithub size={22} />,
  },
  {
    label: 'LinkedIn',
    handle: 'gervisramos',
    href: 'https://linkedin.com/in/gervisramos',
    icon: <FaLinkedin size={22} />,
  },
  {
    label: 'Email',
    handle: 'gera3767@colorado.edu',
    href: 'mailto:gera3767@colorado.edu',
    icon: <MdEmail size={22} />,
  },
  {
    label: 'Instagram',
    handle: '@gervisramos',
    href: 'https://instagram.com/gervisramos',
    icon: <FaInstagram size={22} />,
  },
  {
    label: 'TikTok',
    handle: '@gerberlicious01',
    href: 'https://tiktok.com/@gerberlicious01',
    icon: <FaTiktok size={22} />,
  }
]

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = fields
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:gera3767@colorado.edu?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main className="page">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-grid">
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {sent ? (
            <div className="contact-thanks">
              <h3>Thanks for reaching out!</h3>
              <p>Your mail client should have opened. I'll get back to you soon.</p>
              <button className="btn btn-primary" onClick={() => setSent(false)} style={{ marginTop: 20 }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={fields.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What's on your mind?"
                  required
                  value={fields.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="socials-heading">Find Me Online</h3>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="social-card"
            >
              <span className="social-icon">{s.icon}</span>
              <div className="social-info">
                <span className="social-label">{s.label}</span>
                <span className="social-handle">{s.handle}</span>
              </div>
              <span className="social-arrow">→</span>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="resume-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a
          href="/gervisramos/resume.pdf"
          download="Gervis_Ramos_Resume.pdf"
          className="btn btn-primary resume-btn"
        >
          Download Resume
        </a>
      </motion.div>
    </main>
  )
}
