import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Link2, GitBranch, ChevronDown, Terminal } from 'lucide-react'

const TYPING_STRINGS = [
  'Cybersecurity Student',
  'Penetration Tester',
  'Digital Forensics Analyst',
  'Network Security Enthusiast',
  'Cloud Security Explorer',
]

function useTypingEffect(strings, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx]
    let timeout
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx))
        setCharIdx(c => c + 1)
      }, speed)
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx))
        setCharIdx(c => c - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % strings.length)
      setCharIdx(0)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, strings, speed, pause])

  return displayed
}

function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-teal-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_STRINGS)

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Particles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-teal-500/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-xs font-mono tracking-wider">Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="text-white">Muhammad</span>
              <br />
              <span className="gradient-text">Muqri Muzamil</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-6"
            >
              <Terminal className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="font-mono text-lg text-teal-300">
                {typed}
                <span className="cursor-blink text-teal-400">|</span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Passionate cybersecurity student specializing in network security, digital forensics, and penetration testing. Building secure systems and investigating cyber threats to protect the digital world.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="/resume.pdf"
                download
                className="btn-primary text-white flex items-center gap-2 no-underline"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Link2, href: 'https://www.linkedin.com/in/muqri-muzamil/', label: 'LinkedIn' },
                { icon: GitBranch, href: 'https://github.com/muqrimuzamil', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Orbit rings */}
              <div className="absolute inset-0 -m-8 rounded-full border border-teal-500/20 animate-spin-slow" />
              <div className="absolute inset-0 -m-16 rounded-full border border-indigo-500/10" style={{ animation: 'spin 30s linear infinite reverse' }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-2xl scale-110" />

              {/* Image container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-teal-500/40"
                style={{ boxShadow: '0 0 60px rgba(20,184,166,0.3), inset 0 0 60px rgba(20,184,166,0.05)' }}
              >
                {/* Placeholder avatar */}
                <div className="w-full h-full bg-gradient-to-br from-teal-900 via-slate-800 to-indigo-900 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center mb-3">
                    <span className="text-white font-display font-black text-3xl" style={{ fontFamily: 'Syne, sans-serif' }}>MM</span>
                  </div>
                  <span className="text-teal-300 text-xs font-mono tracking-wider">MUQRI MUZAMIL</span>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass border border-teal-500/30 rounded-xl px-3 py-2"
              >
                <div className="text-xs text-slate-400 font-mono">Status</div>
                <div className="text-sm font-semibold text-teal-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  Open to Work
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -left-4 glass border border-indigo-500/30 rounded-xl px-3 py-2"
              >
                <div className="text-xs text-slate-400 font-mono">Major</div>
                <div className="text-sm font-semibold text-indigo-300">CyberSec</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
