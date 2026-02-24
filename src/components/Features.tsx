import {
  Lock, Wifi, Puzzle, Zap, BarChart3, Cpu,
  RefreshCw, ShieldCheck, LayoutDashboard, MonitorSmartphone,
  PackageCheck, Users, Shield, EyeOff,
} from 'lucide-react'

const FEATURE_GROUPS = [
  {
    group: '⚙️ Runtime & orchestration',
    subtitle: 'Layered architecture compiles a deterministic DAG executed across agents.',
    items: [
      {
        icon: Puzzle,
        title: 'Deterministic planner',
        description: 'Core layer turns agent definitions into a fixed, replayable DAG; execution order never varies.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10 border-indigo-400/20',
      },
      {
        icon: Users,
        title: 'Agent delegation',
        description: 'Agents invoke others using a protocol that propagates or restricts capabilities with call‑depth limits.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10 border-purple-400/20',
      },
      {
        icon: BarChart3,
        title: 'Token & budget tracking',
        description: 'Prompt/completion tokens logged per agent and aggregated; budgets enforced at runtime.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10 border-yellow-400/20',
      },
      {
        icon: Lock,
        title: 'Capability checks',
        description: 'Every tool call, memory access and cross‑agent message is verified against grants.',
        color: 'text-green-400',
        bg: 'bg-green-400/10 border-green-400/20',
      },
    ],
  },
  {
    group: '💻 Local & host environments',
    subtitle: 'Runtime packages for desktop with a read‑only web UI.',
    items: [
      {
        icon: Cpu,
        title: 'Desktop runtime',
        description: 'Agent execution and provider calls happen on your machine; no third‑party cloud layer.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10 border-blue-400/20',
      },
      {
        icon: Wifi,
        title: 'Web dashboard only UI',
        description: 'Browser is a remote control that streams state; it does not execute agents.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10 border-sky-400/20',
      },
      {
        icon: MonitorSmartphone,
        title: 'Environment support',
        description: 'Core, execution and adapters run in Node or Tauri; snapshots replay in browser.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10 border-indigo-400/20',
      },
      {
        icon: Lock,
        title: 'Open source',
        description: 'Source for core packages is available on GitHub under MIT.',
        color: 'text-gray-400',
        bg: 'bg-gray-400/10 border-gray-400/20',
      },
    ],
  },
  {
    group: '🛡 Security & Policies',
    subtitle: 'Built‑in enforcement at runtime.',
    items: [
      {
        icon: ShieldCheck,
        title: 'Sandboxed modules',
        description: 'Agents and skills execute in a sandbox with explicit permissions.',
        color: 'text-rose-400',
        bg: 'bg-rose-400/10 border-rose-400/20',
      },
      {
        icon: EyeOff,
        title: 'Memory scope controls',
        description: 'Each agent only sees the memory it is granted.',
        color: 'text-pink-400',
        bg: 'bg-pink-400/10 border-pink-400/20',
      },
      {
        icon: PackageCheck,
        title: 'Policy engine',
        description: 'Budget and access policies evaluated before execution.',
        color: 'text-teal-400',
        bg: 'bg-teal-400/10 border-teal-400/20',
      },
      {
        icon: RefreshCw,
        title: 'Snapshot & replay',
        description: 'Every run can be saved and deterministically replayed for debugging.',
        color: 'text-lime-400',
        bg: 'bg-lime-400/10 border-lime-400/20',
      },
    ],
  },
  {
    group: '📦 Extensibility',
    subtitle: 'Open SDK and marketplace.',
    items: [
      {
        icon: Zap,
        title: 'TypeScript SDK',
        description: 'Define agents, tools and providers programmatically.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10 border-orange-400/20',
      },
      {
        icon: PackageCheck,
        title: 'Plugin architecture',
        description: 'Custom providers, tools, memory backends and UI components.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10 border-yellow-400/20',
      },
      {
        icon: Users,
        title: 'Marketplace',
        description: 'Browse and install community agents with a click.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10 border-purple-400/20',
      },
      {
        icon: Lock,
        title: 'Open platform',
        description: 'Source for core packages available on GitHub.',
        color: 'text-green-400',
        bg: 'bg-green-400/10 border-green-400/20',
      },
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Core runtime features, security, and extensibility.<br />
            <span className="gradient-text">Designed for local control.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            A layered, capability‑checked system with deterministic execution and
            an open SDK.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {FEATURE_GROUPS.map(({ group, subtitle, items }) => (
            <div key={group}>
              <div className="mb-7">
                <h3 className="text-xl font-extrabold text-white mb-1">{group}</h3>
                <p className="text-gray-500 text-sm">{subtitle}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {items.map(({ icon: Icon, title, description, color, bg }) => (
                  <div
                    key={title}
                    className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition-colors group flex flex-col gap-4"
                  >
                    <div className={`w-10 h-10 rounded-lg border ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100 mb-1">{title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
