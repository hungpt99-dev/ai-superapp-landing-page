import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features',     href: '#features'     },
  { label: 'Agents',       href: '#agents'       },
  { label: 'Pricing',      href: '#pricing'      },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-white/10' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-shadow">
            <Zap size={16} className="text-white" />
          </span>
          <span className="font-bold text-lg tracking-tight">
            Agent<span className="gradient-text">Hub</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
              Docs
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
            Sign in
          </a>
          <a
            href="#pricing"
            className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors glow-sm"
          >
            Get started free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/docs"
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Docs
          </Link>
          <a
            href="#pricing"
            className="mt-2 text-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get started free
          </a>
        </div>
      )}
    </header>
  )
}
