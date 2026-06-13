import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Link2, GitBranch, Send, CheckCircle } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setLoading(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muqrimuzammil099@gmail.com',
      href: 'mailto:muqrimuzammil099@gmail.com',
      color: 'teal',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '011-10572361',
      href: 'tel:01110572361',
      color: 'indigo',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kangar, Perlis, Malaysia',
      href: null,
      color: 'pink',
    },
  ]

  const socials = [
    { icon: Link2, href: 'https://www.linkedin.com/in/muqri-muzamil/', label: 'LinkedIn', color: 'text-blue-400 hover:text-blue-300' },
    { icon: GitBranch, href: 'https://github.com/muqrimuzamil', label: 'GitHub', color: 'text-slate-400 hover:text-white' },
  ]

  const colorMap = {
    teal: 'bg-teal-500/10 text-teal-400',
    indigo: 'bg-indigo-500/10 text-indigo-400',
    pink: 'bg-pink-500/10 text-pink-400',
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">Let's Talk</span>
          <h2 className="section-title text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 max-w-md mx-auto text-sm">
            Open to internship opportunities, collaborations, and conversations about cybersecurity.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Let's work together
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you have a project in mind, want to discuss cybersecurity challenges, or just want to connect — my inbox is always open.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="glass rounded-xl p-4 border border-white/5 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm text-slate-200 font-medium hover:text-teal-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm text-slate-200 font-medium">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div>
                <div className="text-xs text-slate-500 font-mono mb-3 tracking-wider uppercase">Follow Me</div>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/5 ${color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl p-8 border border-white/5">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm">I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm text-teal-400 hover:text-teal-300 font-mono transition-colors"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Your Name', placeholder: 'Muhammad Ali', type: 'text' },
                      { name: 'email', label: 'Email Address', placeholder: 'ali@example.com', type: 'email' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-xs text-slate-400 font-mono mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:bg-teal-500/5 transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 font-mono mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Internship Opportunity / Collaboration"
                      required
                      className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 font-mono mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-300 resize-none"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary text-white flex items-center justify-center gap-2 py-3.5 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
