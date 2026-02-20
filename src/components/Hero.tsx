import { ArrowRight, Shield, Cpu, Puzzle, LayoutDashboard, KeyRound, Zap } from 'lucide-react'

const BADGES = [
  { icon: Cpu,             label: 'Real AI runs on your machine'  },
  { icon: Shield,          label: 'Keys never leave your device'  },
  { icon: Puzzle,          label: '20+ Mini-Apps & growing'       },
  { icon: LayoutDashboard, label: 'One dashboard, everything'     },
  { icon: KeyRound,        label: 'Bring your own API key'        },
  { icon: Zap,             label: 'Zero token markup'             },
]

const STATS = [
  { value: '20+',   label: 'Mini-Apps'        },
  { value: '100%',  label: 'Local execution'   },
  { value: '$0',    label: 'AI token markup'   },
  { value: '1-click', label: 'Setup'           },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/12 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-600/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Eyebrow */}
      <div className="relative animate-fade-in mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
          Now in Beta — Join the waitlist
        </span>
      </div>

      {/* Headline */}
      <h1
        className="relative max-w-5xl text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight animate-fade-up"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        Your <span className="gradient-text">real AI assistant</span>,<br />
        runs on your machine.
      </h1>

      {/* Sub */}
      <p
        className="relative mt-6 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-up"
        style={{ animationDelay: '0.25s', opacity: 0 }}
      >
        Bring your own API keys and run <strong className="text-white font-medium">20+ Mini-Apps</strong> locally with{' '}
        <strong className="text-white font-medium">zero token markup</strong>.
        One platform to install, manage, and automate your entire AI workflow.
      </p>

      {/* CTAs */}
      <div
        className="relative mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        <a
          href="#pricing"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all glow hover:glow"
        >
          Download for free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#mini-apps"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl glass hover:bg-white/10 text-gray-200 font-semibold text-base transition-all"
        >
          Browse Mini-Apps
          <Puzzle size={16} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Stats bar */}
      <div
        className="relative mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl animate-fade-up"
        style={{ animationDelay: '0.5s', opacity: 0 }}
      >
        {STATS.map(({ value, label }) => (
          <div key={label} className="glass rounded-xl px-4 py-3 text-center">
            <div className="text-2xl font-extrabold gradient-text">{value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div
        className="relative mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 animate-fade-up"
        style={{ animationDelay: '0.6s', opacity: 0 }}
      >
        {BADGES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
            <Icon size={13} className="text-indigo-400" />
            {label}
          </div>
        ))}
      </div>

      {/* Hero visual — dashboard mockup */}
      <div
        className="relative mt-20 w-full max-w-4xl animate-fade-up"
        style={{ animationDelay: '0.7s', opacity: 0 }}
      >
        <div className="glass rounded-2xl overflow-hidden glow">
          {/* Fake window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-gray-600">AI SuperApp — Dashboard</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
              Desktop Agent Online
            </span>
          </div>
          {/* Dashboard layout */}
          <div className="flex min-h-[280px]">
            {/* Sidebar */}
            <div className="hidden sm:flex w-44 flex-col gap-1 p-3 border-r border-white/10 bg-white/[0.02]">
              {[
                { emoji: '🏠', label: 'Dashboard',    active: true  },
                { emoji: '🧩', label: 'Mini-Apps',    active: false },
                { emoji: '💻', label: 'Devices',      active: false },
                { emoji: '📊', label: 'Analytics',    active: false },
                { emoji: '⚙️', label: 'Settings',     active: false },
              ].map(({ emoji, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active ? 'bg-indigo-600/20 text-indigo-300' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span>{emoji}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            {/* Main area */}
            <div className="flex-1 p-5 flex flex-col gap-4">
              {/* Top row: running app + device status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Active Mini-Apps', value: '3',        color: 'text-indigo-400'  },
                  { label: 'Runs today',        value: '47',       color: 'text-green-400'   },
                  { label: 'Tokens saved',      value: '$0.00',    color: 'text-yellow-400'  },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-white/5 rounded-xl px-4 py-3">
                    <div className={`text-xl font-extrabold ${color}`}>{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
              {/* Active mini-apps */}
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600 uppercase tracking-widest">Running</p>
                {[
                  { emoji: '✍️', name: 'SEO Writer',     status: 'Generating...', color: 'text-blue-400'   },
                  { emoji: '💻', name: 'Code Assistant', status: 'Idle',          color: 'text-purple-400' },
                  { emoji: '🔍', name: 'Research Agent', status: 'Searching...',  color: 'text-green-400'  },
                ].map(({ emoji, name, status, color }) => (
                  <div key={name} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{emoji}</span>
                      <span className="text-sm font-medium text-gray-300">{name}</span>
                    </div>
                    <span className={`text-xs ${color}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-700 mt-3">
          Manage all your AI tools from one clean dashboard
        </p>
      </div>
    </section>
  )
}
