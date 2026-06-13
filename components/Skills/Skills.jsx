import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../shared/ScrollReveal'

const skillCategories = [
  {
    id: 'security',
    label: 'Cybersecurity',
    icon: '🔐',
    color: 'from-teal-500 to-cyan-400',
    glow: 'rgba(20,184,166,0.3)',
    skills: [
      { name: 'Digital Forensics', level: 85 },
      { name: 'Network Security', level: 88 },
      { name: 'Penetration Testing', level: 80 },
      { name: 'Incident Response', level: 75 },
      { name: 'Malware Analysis', level: 70 },
      { name: 'SIEM', level: 72 },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    icon: '💻',
    color: 'from-indigo-500 to-purple-500',
    glow: 'rgba(99,102,241,0.3)',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'Java', level: 72 },
      { name: 'PHP', level: 70 },
      { name: 'C++', level: 65 },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: '🌐',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236,72,153,0.3)',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Node.js', level: 72 },
      { name: 'Laravel', level: 70 },
      { name: 'Next.js', level: 65 },
      { name: 'Express.js', level: 68 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.3)',
    skills: [
      { name: 'Wireshark', level: 90 },
      { name: 'Burp Suite', level: 85 },
      { name: 'Git & GitHub', level: 82 },
      { name: 'Nmap', level: 80 },
      { name: 'Metasploit', level: 75 },
      { name: 'Docker', level: 65 },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    icon: '🗄️',
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(16,185,129,0.3)',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Supabase', level: 68 },
    ],
  },
]

function SkillBar({ name, level, color, delay = 0 }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono text-teal-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

// Tech pill tags
const techPills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'Laravel', 'Next.js', 'Express.js',
  'Wireshark', 'Burp Suite', 'Nmap', 'Metasploit', 'Autopsy', 'FTK',
  'MySQL', 'MongoDB', 'PostgreSQL', 'Supabase', 'Docker', 'Git', 'Linux',
  'Kali Linux', 'OSINT', 'CTF', 'Cloud Security', 'TCP/IP',
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('security')
  const active = skillCategories.find(c => c.id === activeTab)

  return (
    <section id="skills" className="py-24 relative" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">What I Know</span>
          <h2 className="section-title text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'text-white shadow-lg'
                    : 'glass text-slate-400 hover:text-white border border-white/5'
                }`}
                style={activeTab === cat.id ? {
                  background: `linear-gradient(135deg, ${cat.glow.replace('0.3', '1')}, ${cat.glow})`,
                  boxShadow: `0 8px 24px ${cat.glow}`,
                } : {}}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Skills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 border border-white/5 mb-16 max-w-3xl mx-auto"
            style={{ boxShadow: `0 0 40px ${active.glow}` }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{active.icon}</span>
              <h3 className="text-xl font-display font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                {active.label}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12">
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={active.color}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tech Pills */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="text-sm text-slate-500 font-mono">Technologies I've worked with</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techPills.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-1.5 glass rounded-full text-xs font-mono text-slate-300 border border-white/5 hover:border-teal-500/40 hover:text-teal-300 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
