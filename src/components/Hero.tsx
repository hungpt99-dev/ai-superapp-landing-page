import { ArrowRight, Activity, GitBranch, DollarSign, AlertTriangle, BookOpen } from 'lucide-react'

const BADGES = [
  { icon: Activity,      label: 'Real-time monitoring'   },
  { icon: GitBranch,     label: 'Workflow visualization' },
  { icon: DollarSign,    label: 'LLM cost tracking'      },
  { icon: AlertTriangle, label: 'Error alerting'         },
  { icon: BookOpen,      label: 'Run replay & debug'     },
  { icon: Activity,      label: 'Multi-framework support'},
]

const STATS = [
  { value: '14,200',  label: 'Agent runs today'  },
  { value: '3.9s',    label: 'Avg latency'        },
  { value: '1.8%',    label: 'Error rate'         },
  { value: '$132',    label: 'LLM cost today'     },
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

      {/* Headline */}
      <h1
        className="relative max-w-5xl text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight animate-fade-up"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        The control plane for<br />
        <span className="gradient-text">your AI agents.</span>
      </h1>

      {/* Sub */}
      <p
        className="relative mt-6 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-up"
        style={{ animationDelay: '0.25s', opacity: 0 }}
      >
        AgentHub is the standard infrastructure platform for managing, monitoring,
        and debugging AI agents in production. Get full observability into every run,
        workflow, prompt and cost—across LangGraph, CrewAI, AutoGPT, and custom agents.
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
          Start monitoring free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="/docs"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl glass hover:bg-white/10 text-gray-200 font-semibold text-base transition-all"
        >
          View documentation
          <BookOpen size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
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
            <span className="ml-3 text-xs text-gray-600">AgentHub — Dashboard</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
              3 agents running
            </span>
          </div>
          {/* Dashboard layout */}
          <div className="flex min-h-[280px]">
            {/* Sidebar */}
            <div className="hidden sm:flex w-44 flex-col gap-1 p-3 border-r border-white/10 bg-white/[0.02]">
              {[
                { emoji: '🏠', label: 'Dashboard',  active: true  },
                { emoji: '🤖', label: 'Agents',     active: false },
                { emoji: '🔀', label: 'Workflows',  active: false },
                { emoji: '📊', label: 'Metrics',    active: false },
                { emoji: '📝', label: 'Logs',       active: false },
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
              {/* Top row: live metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Agent Runs',   value: '14,200', color: 'text-indigo-400' },
                  { label: 'Avg Latency',  value: '3.9s',   color: 'text-green-400'  },
                  { label: 'Error Rate',   value: '1.8%',   color: 'text-yellow-400' },
                  { label: 'LLM Cost',     value: '$132',   color: 'text-purple-400' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-white/5 rounded-xl px-4 py-3">
                    <div className={`text-xl font-extrabold ${color}`}>{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
              {/* Active agents */}
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600 uppercase tracking-widest">Active Agents</p>
                {[
                  { name: 'research-agent-v2',  status: 'Running',  color: 'text-green-400'  },
                  { name: 'code-review-agent',  status: 'Idle',     color: 'text-gray-500'   },
                  { name: 'data-pipeline-agent',status: 'Error',    color: 'text-red-400'    },
                ].map(({ name, status, color }) => (
                  <div key={name} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${
                        status === 'Running' ? 'bg-green-400 animate-pulse-slow' :
                        status === 'Error'   ? 'bg-red-400'   : 'bg-gray-600'
                      }`} />
                      <span className="text-sm font-mono text-gray-300">{name}</span>
                    </div>
                    <span className={`text-xs ${color}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-700 mt-3">
          Live dashboard — full observability across all your AI agents in production
        </p>
      </div>
    </section>
  )
}
