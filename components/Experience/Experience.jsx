import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

const timelineItems = [
  {
    year: '2022 – Present',
    type: 'Education',
    icon: GraduationCap,
    color: 'teal',
    title: 'Bachelor of Computer Science (Hons)',
    subtitle: 'Universiti Sultan Zainal Abidin (UniSZA)',
    description: 'Major in Computer Network Security with specialization in Security Information. Conducting thesis research on Client-Side Encryption to prevent cloud storage data leakage.',
    tags: ['Network Security', 'Digital Forensics', 'Cloud Security'],
  },
  {
    year: '2024',
    type: 'Project',
    icon: Code2,
    color: 'indigo',
    title: 'Cybercrime Investigation Dashboard',
    subtitle: 'Final Year Project',
    description: 'Built a full-stack dashboard for analyzing and visualizing cybercrime data, integrating forensic tools and machine learning for threat detection.',
    tags: ['React', 'Python', 'Machine Learning', 'Digital Forensics'],
  },
  {
    year: '2023',
    type: 'Certification',
    icon: Award,
    color: 'amber',
    title: 'Google Cybersecurity Certificate',
    subtitle: 'Google / Coursera',
    description: 'Completed an 8-course professional certification covering threat analysis, SIEM tools, network security, Python automation, and incident response.',
    tags: ['SIEM', 'Python', 'Threat Analysis', 'Incident Response'],
  },
  {
    year: '2023',
    type: 'Project',
    icon: Code2,
    color: 'pink',
    title: 'Network Traffic Analyzer',
    subtitle: 'Academic Project',
    description: 'Developed a real-time network traffic monitoring tool using Python and Wireshark APIs to detect anomalies and potential intrusion attempts.',
    tags: ['Python', 'Wireshark', 'Network Analysis', 'Anomaly Detection'],
  },
  {
    year: '2023',
    type: 'Certification',
    icon: Award,
    color: 'green',
    title: 'Cisco Networking Fundamentals',
    subtitle: 'Cisco Networking Academy',
    description: 'Completed networking fundamentals covering TCP/IP, routing protocols, network configuration, and basic cybersecurity principles.',
    tags: ['TCP/IP', 'Routing', 'Network Config'],
  },
  {
    year: '2022',
    type: 'Education',
    icon: GraduationCap,
    color: 'teal',
    title: 'Foundation in Computer Science',
    subtitle: 'UniSZA Foundation Centre',
    description: 'Completed foundation studies with excellent results, building strong fundamentals in mathematics, programming, and computer systems.',
    tags: ['Programming', 'Mathematics', 'Computer Systems'],
  },
]

const colorMap = {
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', dot: 'bg-teal-500', glow: 'shadow-teal-500/30' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', dot: 'bg-indigo-500', glow: 'shadow-indigo-500/30' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-500', glow: 'shadow-amber-500/30' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', dot: 'bg-pink-500', glow: 'shadow-pink-500/30' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-500', glow: 'shadow-green-500/30' },
}

function TimelineCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[item.color]
  const Icon = item.icon
  const isRight = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex gap-6 lg:gap-12 items-start ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}
    >
      {/* Card */}
      <div className={`flex-1 ${isRight ? 'lg:text-right' : ''}`}>
        <div className={`glass rounded-2xl p-6 border ${c.border} hover:shadow-lg ${c.glow} transition-all duration-300 glass-hover`}>
          <div className={`flex items-center gap-3 mb-4 ${isRight ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-4 h-4 ${c.text}`} />
            </div>
            <div>
              <span className={`text-xs font-mono ${c.text} tracking-wider uppercase`}>{item.type}</span>
              <div className="text-xs text-slate-500 font-mono">{item.year}</div>
            </div>
          </div>

          <h3 className="text-base font-display font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
            {item.title}
          </h3>
          <div className={`text-sm ${c.text} font-medium mb-3`}>{item.subtitle}</div>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

          <div className={`flex flex-wrap gap-2 ${isRight ? 'lg:justify-end' : ''}`}>
            {item.tags.map(tag => (
              <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${c.bg} ${c.text} font-mono`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center flex-shrink-0 mt-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-opacity-20 ring-current shadow-lg z-10`}
          style={{ boxShadow: `0 0 12px currentColor` }}
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">My Journey</span>
          <h2 className="section-title text-white">
            Experience & <span className="gradient-text">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[calc(50%-1px)] hidden lg:block top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(20,184,166,0.5), rgba(99,102,241,0.5), transparent)' }}
          />
          {/* Mobile line */}
          <div
            className="absolute left-[calc(100%+24px)] lg:hidden top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(20,184,166,0.5), transparent)' }}
          />

          <div className="space-y-10">
            {timelineItems.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
