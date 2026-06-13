import { Shield, Link2, GitBranch, Mail, Heart, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                MM<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Cybersecurity student passionate about securing the digital world. Specializing in network security, digital forensics, and penetration testing.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-4">Quick Links</div>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-slate-500 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-4">Connect</div>
            <div className="space-y-3">
              <a href="mailto:muqrimuzammil099@gmail.com" className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                muqrimuzammil099@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/muqri-muzamil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal-400 transition-colors">
                <Link2 className="w-3.5 h-3.5" />
                linkedin.com/in/muqri-muzamil
              </a>
              <a href="https://github.com/muqrimuzamil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-teal-400 transition-colors">
                <GitBranch className="w-3.5 h-3.5" />
                github.com/muqrimuzamil
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © 2025 Muhammad Muqri Muzamil. Made with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> in Malaysia.
          </p>
          <button
            onClick={scrollTop}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/30 transition-all border border-white/5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
