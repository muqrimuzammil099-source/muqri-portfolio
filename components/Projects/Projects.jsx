import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Shield, Wifi, BarChart3, Activity, Brain, Search } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

const projects = [
  {
    title: 'Student Record Search Optimization',
    description: 'Developed an optimized search system for student records using advanced indexing algorithms and secure database design. Improved query performance by 60% while implementing access control and audit logging.',
    tags: ['Python', 'MySQL', 'Algorithms', 'Security'],
    icon: Search,
    gradient: 'from-teal-500/20 to-cyan-500/20',
    border: 'border-teal-500/20',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'Wireless Sensor Network in Healthcare',
    description: 'Designed a secure WSN architecture for healthcare monitoring, implementing end-to-end encryption and anomaly detection to protect sensitive patient data transmitted across sensor nodes.',
    tags: ['IoT', 'Network Security', 'Encryption', 'Python'],
    icon: Wifi,
    gradient: 'from-indigo-500/20 to-purple-500/20',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'Cybercrime Investigation Dashboard',
    description: 'Full-stack dashboard for cybercrime analysis with real-time threat visualization, evidence management, case tracking, and automated report generation for digital forensic investigators.',
    tags: ['React', 'Node.js', 'Digital Forensics', 'Charts'],
    icon: BarChart3,
    gradient: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Network Traffic Analyzer',
    description: 'Real-time network monitoring tool built with Python and Wireshark API integration. Detects anomalies, visualizes traffic patterns, and generates automated alerts for suspicious activities.',
    tags: ['Python', 'Wireshark', 'Network Analysis', 'ML'],
    icon: Activity,
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Threat Intelligence Platform',
    description: 'Automated threat intelligence aggregation platform that collects IOCs from multiple sources, correlates threat data, and provides actionable security insights for SOC teams.',
    tags: ['Python', 'OSINT', 'SIEM', 'API Integration'],
    icon: Brain,
    gradient: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'Digital Forensics Toolkit',
    description: 'A comprehensive Python-based toolkit that automates common digital forensics tasks including memory analysis, file carving, hash verification, metadata extraction, and chain-of-custody documentation.',
    tags: ['Python', 'Autopsy', 'FTK', 'Forensics'],
    icon: Shield,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    github: '#',
    demo: '#',
  },
]

function ProjectCard({ project, index }) {
  const Icon = project.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={`relative group glass rounded-2xl p-6 border ${project.border} transition-all duration-300 flex flex-col h-full`}
      style={{
        background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(' to-', ', ')})`,
      }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-xs font-mono text-teal-300">
          Featured
        </div>
      )}

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center mb-5`}>
        <Icon className={`w-6 h-6 ${project.iconColor}`} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-teal-300 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
        {project.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 font-mono border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={project.github}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors font-mono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch className="w-3.5 h-3.5" />
          GitHub
        </a>
        <a
          href={project.demo}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors font-mono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
            A selection of projects showcasing my skills in cybersecurity, web development, and data analysis.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
