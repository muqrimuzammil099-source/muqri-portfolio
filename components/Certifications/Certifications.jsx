import { motion } from 'framer-motion'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

const certs = [
  {
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    year: '2023',
    status: 'Completed',
    color: 'teal',
    icon: '🔐',
    description: '8-course professional program covering threat analysis, SIEM, network security, Python automation, and incident response.',
    skills: ['SIEM', 'Python', 'Network Security', 'Incident Response'],
    link: '#',
  },
  {
    title: 'Cisco Networking Fundamentals',
    issuer: 'Cisco Networking Academy',
    year: '2023',
    status: 'Completed',
    color: 'indigo',
    icon: '🌐',
    description: 'Comprehensive networking certification covering TCP/IP protocols, routing, switching, and basic network security concepts.',
    skills: ['TCP/IP', 'Routing', 'Switching', 'Network Config'],
    link: '#',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'In Progress',
    color: 'amber',
    icon: '☁️',
    description: 'Foundational AWS certification covering cloud concepts, security, technology, and billing for cloud infrastructure.',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'IAM'],
    link: '#',
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2024',
    status: 'In Progress',
    color: 'pink',
    icon: '🛡️',
    description: 'Industry-recognized certification covering core security functions including threats, attacks, cryptography, and identity management.',
    skills: ['Cryptography', 'Threat Detection', 'Identity Mgmt', 'PKI'],
    link: '#',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    status: 'Pursuing',
    color: 'green',
    icon: '💻',
    description: 'Advanced certification in ethical hacking methodologies, penetration testing tools, and advanced security techniques.',
    skills: ['Pen Testing', 'OSINT', 'Exploitation', 'Reporting'],
    link: '#',
  },
  {
    title: 'Digital Forensics Essentials',
    issuer: 'EC-Council / CodeRed',
    year: '2023',
    status: 'Completed',
    color: 'cyan',
    icon: '🔍',
    description: 'Specialized training in digital forensics fundamentals, evidence handling, investigation techniques, and forensic reporting.',
    skills: ['Evidence Handling', 'Autopsy', 'Investigation', 'Reporting'],
    link: '#',
  },
]

const colorMap = {
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', badge: 'bg-teal-500/20 text-teal-300' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', badge: 'bg-indigo-500/20 text-indigo-300' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', badge: 'bg-pink-500/20 text-pink-300' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', badge: 'bg-green-500/20 text-green-300' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300' },
}

const statusStyle = {
  'Completed': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'In Progress': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Pursuing': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">Credentials</span>
          <h2 className="section-title text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => {
            const c = colorMap[cert.color]
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-6 border ${c.border} transition-all duration-300 flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${statusStyle[cert.status]}`}>
                    {cert.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-display font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {cert.title}
                </h3>
                <div className={`text-sm ${c.text} font-medium mb-1`}>{cert.issuer}</div>
                <div className="text-xs text-slate-500 font-mono mb-3">{cert.year}</div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map(skill => (
                    <span key={skill} className={`text-xs px-2 py-0.5 rounded-full ${c.badge} font-mono`}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={cert.link}
                  className={`flex items-center gap-1.5 text-xs ${c.text} hover:opacity-80 transition-opacity font-mono mt-auto`}
                >
                  <Award className="w-3.5 h-3.5" />
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
