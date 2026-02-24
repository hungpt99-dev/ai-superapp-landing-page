import { ArrowRight, Code2, TrendingUp, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

const CATEGORIES = [
  { label: 'All',         active: true  },
  { label: 'Writing',     active: false },
  { label: 'Development', active: false },
  { label: 'Automation',  active: false },
  { label: 'Finance',     active: false },
]

const APPS = [
  {
    emoji: '🔬',
    name: 'Research Assistant',
    category: 'Productivity',
    description: 'Search the web, analyze documents, and build structured reports with citations.',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/20',
    tag: 'Featured',
  },
  {
    emoji: '👨‍💻',
    name: 'Code Reviewer',
    category: 'Development',
    description: 'Automated code reviews with security, style, and performance checks using local file access.',
    color: 'from-indigo-500/20 to-purple-500/20',
    border: 'border-indigo-500/20',
    tag: null,
  },
  {
    emoji: '✍️',
    name: 'Writing Assistant',
    category: 'Writing',
    description: 'Draft emails, reports, and blog posts in a tone you control.',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/20',
    tag: null,
  },
  {
    emoji: '🛠️',
    name: 'Custom Agent',
    category: 'Build your own',
    description: 'Use the SDK to author an agent tailored to your workflow and install it locally.',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
    tag: 'SDK',
  },
]

const DEV_STATS = [
  { icon: Code2,      value: 'TypeScript SDK',  label: 'Open‑source, typed' },
  { icon: TrendingUp, value: 'Plugin system',    label: 'tools, providers, UI'   },
  { icon: DollarSign, value: '70% revenue',     label: 'Goes to you, the builder' },
]

export default function MiniApps() {
  return (
    <section id="agents" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Agent Marketplace</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Give your AI assistant{' '}
            <span className="gradient-text">superpowers.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Agents are your AI assistant's skills — writing, coding, research, automation and more.
            Install in one click, or build your own and earn 70% of every sale.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(({ label, active }) => (
            <button
              key={label}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active
                  ? 'bg-indigo-600 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS.map(({ emoji, name, category, description, color, border, tag, runs }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} hover:scale-[1.02] transition-all group cursor-pointer flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{emoji}</span>
                {tag && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-medium">
                    {tag}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-bold text-white text-lg">{name}</h3>
                <span className="text-xs text-gray-500">{category}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{runs}</span>
                <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all">
                  Install <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer SDK block */}
        <div className="mt-14 glass rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">For Developers</p>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Build agents.<br />
                <span className="gradient-text">Earn from your tools.</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Use our open-source TypeScript SDK to build and publish agents to thousands of users.
                You keep 70% of every sale — we handle distribution, billing, and updates.
              </p>
              <Link
                to="/docs/sdk"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all glow-sm"
              >
                Read the SDK docs <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid gap-3">
              {DEV_STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
