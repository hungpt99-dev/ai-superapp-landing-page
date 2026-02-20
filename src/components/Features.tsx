import {
  Lock, Wifi, Puzzle, Zap, BarChart3,
  RefreshCw, ShieldCheck, LayoutDashboard, MonitorSmartphone,
  PackageCheck, Users,
} from 'lucide-react'

const FEATURE_GROUPS = [
  {
    group: '🤖 Real AI Assistant',
    subtitle: 'Your machine is the engine. 100% local. 100% private.',
    items: [
      {
        icon: MonitorSmartphone,
        title: 'Runs on Your Machine',
        description: 'Every AI call, every tool execution, every file operation happens on your desktop — not in some cloud VM you don\'t control.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10 border-indigo-400/20',
      },
      {
        icon: Zap,
        title: 'Zero Cloud Latency',
        description: 'Every AI call runs on your hardware — no round-trips to distant servers. Responses are instant, even on complex, multi-step tasks.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10 border-yellow-400/20',
      },
      {
        icon: Lock,
        title: 'Full Privacy',
        description: 'Your prompts, outputs, and data never leave your machine. The relay forwards requests but never stores or reads your content.',
        color: 'text-green-400',
        bg: 'bg-green-400/10 border-green-400/20',
      },
      {
        icon: Zap,
        title: 'Real-Time Streaming',
        description: 'Token-by-token streaming from your desktop to any browser. Feels instant, works anywhere.',
        color: 'text-pink-400',
        bg: 'bg-pink-400/10 border-pink-400/20',
      },
    ],
  },
  {
    group: '🧩 Mini-App Ecosystem',
    subtitle: 'Install, run, and build AI tools in one place.',
    items: [
      {
        icon: Puzzle,
        title: 'Growing Marketplace',
        description: 'Browse 20+ community-built Mini-Apps across writing, coding, finance, and automation. New apps ship every week.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10 border-purple-400/20',
      },
      {
        icon: PackageCheck,
        title: 'One-Click Install',
        description: 'Install any Mini-App with a single click. Permissions are reviewed up front — no surprises, no hidden access.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10 border-cyan-400/20',
      },
      {
        icon: ShieldCheck,
        title: 'Permission Engine',
        description: 'Every Mini-App declares what it needs — file system, clipboard, network. You grant or deny each permission explicitly.',
        color: 'text-rose-400',
        bg: 'bg-rose-400/10 border-rose-400/20',
      },
      {
        icon: Users,
        title: 'Open SDK',
        description: 'Build and publish your own Mini-Apps with our TypeScript SDK. Developers earn 70% of every sale.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10 border-orange-400/20',
      },
    ],
  },
  {
    group: '📊 Easy Management',
    subtitle: 'One dashboard to control everything.',
    items: [
      {
        icon: LayoutDashboard,
        title: 'Unified Dashboard',
        description: 'See all your Mini-Apps, devices, workspaces, and run history in one place — clean, fast, no clutter.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10 border-blue-400/20',
      },
      {
        icon: BarChart3,
        title: 'Usage Analytics',
        description: 'Track token usage, run counts, and Mini-App performance across all workspaces. Spot costs before they grow.',
        color: 'text-teal-400',
        bg: 'bg-teal-400/10 border-teal-400/20',
      },
      {
        icon: Wifi,
        title: 'Multi-Device',
        description: 'Register multiple desktop agents and switch between them from the web. Your AI follows you everywhere.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10 border-sky-400/20',
      },
      {
        icon: RefreshCw,
        title: 'Auto Reconnect',
        description: 'The agent maintains a self-healing background connection. No babysitting — it just stays online.',
        color: 'text-lime-400',
        bg: 'bg-lime-400/10 border-lime-400/20',
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
            Real AI assistant. Rich ecosystem.<br />
            <span className="gradient-text">Simple management.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Three pillars that make AI SuperApp unlike anything else.
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
