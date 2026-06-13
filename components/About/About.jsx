import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Target, BookOpen, MapPin } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { label: 'Projects Completed', value: 12, suffix: '+', icon: '🚀' },
  { label: 'Certifications', value: 6, suffix: '', icon: '🏆' },
  { label: 'Technologies Learned', value: 20, suffix: '+', icon: '⚡' },
  { label: 'Years of Experience', value: 3, suffix: '+', icon: '📅' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-indigo-600/20 rounded-2xl blur-xl" />
                <div className="relative glass rounded-2xl p-8 border border-teal-500/20">
                  <div className="w-full h-64 bg-gradient-to-br from-teal-900/50 via-slate-800 to-indigo-900/50 rounded-xl flex flex-col items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center mb-3">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-teal-300 font-mono text-sm">Muhammad Muqri Muzamil</span>
                  </div>

                  {/* Info rows */}
                  {[
                    { icon: BookOpen, label: 'University', value: 'UniSZA' },
                    { icon: Target, label: 'Major', value: 'Computer Network Security' },
                    { icon: MapPin, label: 'Location', value: 'Kangar, Perlis, Malaysia' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-mono">{label}</div>
                        <div className="text-sm text-slate-200 font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Securing the <span className="text-teal-400">Digital Frontier</span>
                </h3>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    I'm a dedicated Computer Science student majoring in <span className="text-teal-300">Computer Network Security</span> at Universiti Sultan Zainal Abidin (UniSZA). With a strong passion for cybersecurity, I specialize in identifying vulnerabilities and building robust defense mechanisms.
                  </p>
                  <p>
                    My hands-on experience spans <span className="text-teal-300">vulnerability assessment</span>, network traffic analysis, and digital investigations using industry-standard tools like Burp Suite, Wireshark, Autopsy, and FTK.
                  </p>
                  <p>
                    My thesis research focuses on <span className="text-teal-300">Client-Side Encryption</span> to prevent cloud storage data leakage — a critical area in today's cloud-first world. I'm passionate about bridging the gap between theoretical knowledge and practical security solutions.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-mono text-teal-400 tracking-wider uppercase mb-4">Career Objective</h4>
                <p className="text-slate-400 leading-relaxed border-l-2 border-teal-500/50 pl-4">
                  To leverage my cybersecurity expertise in a dynamic environment where I can contribute to organizational security, grow professionally, and help protect digital assets from evolving threats.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass glass-hover rounded-2xl p-6 text-center border border-white/5">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-display font-black gradient-text mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
