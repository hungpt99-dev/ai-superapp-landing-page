import {
  KeyRound, Lock, Wifi, Puzzle, Zap, BarChart3,
  RefreshCw, ShieldCheck,
} from 'lucide-react'

const FEATURES = [
  {
    icon: KeyRound,
    title: 'Bring Your Own Key',
    description: 'Connect any AI provider — OpenAI, Anthropic, Gemini, Mistral. Pay the provider directly at raw cost, zero markup.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/20',
  },
  {
    icon: Lock,
    title: 'Full Privacy',
    description: 'API keys are encrypted and stored only on your desktop. The cloud relay never sees your AI credentials or prompt content.',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
  {
    icon: Wifi,
    title: 'Remote Access',
    description: 'Control your desktop AI engine from any browser, on any network. No port forwarding or VPN required.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    icon: Puzzle,
    title: 'Mini-App Ecosystem',
    description: 'Install powerful AI Mini-Apps from the marketplace — SEO writers, code assistants, document analyzers, and more.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
  {
    icon: Zap,
    title: 'Streaming Responses',
    description: 'See AI output word-by-word in real time. Smooth, fast streaming from your desktop to your browser.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10 border-indigo-400/20',
  },
  {
    icon: BarChart3,
    title: 'Usage Analytics',
    description: 'Track token usage, Mini-App performance, and automation history across all your workspaces.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
  {
    icon: RefreshCw,
    title: 'Auto Reconnect',
    description: 'The Desktop Agent maintains a persistent, self-healing connection. Background mode keeps it alive while you work.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10 border-orange-400/20',
  },
  {
    icon: ShieldCheck,
    title: 'Permission Engine',
    description: 'Every Mini-App declares the permissions it needs. You approve file, clipboard, and network access explicitly.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10 border-rose-400/20',
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
            Everything you need.<br />
            <span className="gradient-text">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition-colors group flex flex-col gap-4"
            >
              <div className={`w-10 h-10 rounded-lg border ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
