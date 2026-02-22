import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Zap, Github, Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const NAV = [
  {
    group: 'Getting Started',
    items: [
      { label: 'Overview', path: '/docs/overview' },
      { label: 'Quickstart', path: '/docs/quickstart' },
    ],
  },
  {
    group: 'SDK Reference',
    items: [
      { label: 'defineModule', path: '/docs/sdk' },
      { label: 'Permissions', path: '/docs/sdk#permissions' },
      { label: 'AI Client', path: '/docs/sdk#ai-client' },
      { label: 'Storage API', path: '/docs/sdk#storage' },
      { label: 'UI API', path: '/docs/sdk#ui' },
      { label: 'Event Bus', path: '/docs/sdk#events' },
      { label: 'Computer API', path: '/docs/sdk#computer' },
      { label: 'Memory API', path: '/docs/sdk#memory' },
    ],
  },
  {
    group: 'REST API',
    items: [
      { label: 'Authentication', path: '/docs/api' },
      { label: 'Devices', path: '/docs/api#devices' },
      { label: 'Bots', path: '/docs/api#bots' },
      { label: 'Workspaces', path: '/docs/api#workspaces' },
      { label: 'Marketplace', path: '/docs/api#marketplace' },
    ],
  },
]

export default function DocsLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (location.pathname === '/docs') {
      navigate('/docs/overview', { replace: true })
    }
  }, [location.pathname, navigate])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-white/10 bg-gray-950/90 backdrop-blur-md flex items-center px-4 gap-4">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Zap size={14} className="text-white" />
          </span>
          <span className="font-bold text-sm tracking-tight hidden sm:block">
            Agent<span className="gradient-text">Hub</span>
          </span>
        </NavLink>

        <span className="text-white/20 hidden sm:block">/</span>
        <span className="text-sm text-gray-400 font-medium hidden sm:block">Docs</span>

        <div className="flex-1" />

        <a
          href="https://github.com/nextlevelbuilder"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-lg glass text-gray-400 hover:text-white transition-colors"
        >
          <Github size={15} />
        </a>
        <NavLink
          to="/"
          className="hidden sm:flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          ← Back to home
        </NavLink>
        <button
          className="sm:hidden w-8 h-8 flex items-center justify-center rounded-lg glass text-gray-400"
          onClick={() => setSidebarOpen(v => !v)}
        >
          {sidebarOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </header>

      <div className="pt-14 flex">
        {/* Sidebar */}
        <aside
          className={`fixed sm:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r border-white/10 bg-gray-950 overflow-y-auto transition-transform duration-200 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
          }`}
        >
          <nav className="p-5 flex flex-col gap-7">
            {NAV.map(({ group, items }) => (
              <div key={group}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                  {group}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {items.map(({ label, path }) => {
                    const isHash = path.includes('#')
                    if (isHash) {
                      const [base, hash] = path.split('#')
                      return (
                        <li key={path}>
                          <NavLink
                            to={base}
                            onClick={() => {
                              setSidebarOpen(false)
                              setTimeout(() => {
                                document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
                              }, 100)
                            }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <ChevronRight size={12} className="text-gray-600" />
                            {label}
                          </NavLink>
                        </li>
                      )
                    }
                    return (
                      <li key={path}>
                        <NavLink
                          to={path}
                          onClick={() => setSidebarOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              isActive
                                ? 'bg-indigo-600/20 text-indigo-300 font-medium'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`
                          }
                        >
                          <ChevronRight size={12} className="text-gray-600" />
                          {label}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/60 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 px-6 py-10 max-w-4xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
