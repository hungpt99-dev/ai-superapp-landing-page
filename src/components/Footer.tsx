import { Zap, Github, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const LINKS: Record<string, Array<{ label: string; to: string; external?: boolean }>> = {
  Product: [
    { label: 'Features',  to: '/#features' },
    { label: 'Agents',    to: '/#agents' },
    { label: 'Pricing',   to: '/#pricing'  },
    { label: 'Changelog', to: '#'          },
  ],
  Developers: [
    { label: 'SDK Docs',       to: '/docs/sdk'       },
    { label: 'API Reference',  to: '/docs/api'       },
    { label: 'Quickstart',     to: '/docs/quickstart' },
    { label: 'GitHub',         to: 'https://github.com/nextlevelbuilder', external: true },
  ],
  Company: [
    { label: 'About',           to: '#' },
    { label: 'Blog',            to: '#' },
    { label: 'Privacy Policy',  to: '#' },
    { label: 'Terms of Service',to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Zap size={16} className="text-white" />
              </span>
              <span className="font-bold text-lg tracking-tight">
                Agent<span className="gradient-text">Hub</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Your real AI assistant. Private, fast, and powerful.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-widest">{category}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.to} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">© 2026 AgentHub. All rights reserved.</p>
          <p className="text-gray-700 text-xs">
            Built with ❤️ — open source desktop, private by design
          </p>
        </div>
      </div>
    </footer>
  )
}
