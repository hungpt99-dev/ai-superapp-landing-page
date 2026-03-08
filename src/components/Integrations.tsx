import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const FRAMEWORKS = [
  {
    name: 'LangGraph',
    description: 'Monitor LangGraph agents with automatic event capture for every node, edge, and state transition.',
    badge: null,
    color: 'from-green-500/15 to-teal-500/15',
    border: 'border-green-500/20',
    icon: '🔗',
  },
  {
    name: 'CrewAI',
    description: 'Track CrewAI multi-agent crews — see which agent is active, what tools they called, and the final output.',
    badge: 'Popular',
    color: 'from-indigo-500/15 to-purple-500/15',
    border: 'border-indigo-500/20',
    icon: '🤝',
  },
  {
    name: 'AutoGPT',
    description: 'Observe AutoGPT runs end-to-end with goal tracking, memory access logs, and browser/tool call inspection.',
    badge: null,
    color: 'from-blue-500/15 to-indigo-500/15',
    border: 'border-blue-500/20',
    icon: '⚡',
  },
  {
    name: 'OpenClaw',
    description: 'First-class OpenClaw integration — plug in the AgentHub SDK and get full telemetry in under 5 minutes.',
    badge: 'New',
    color: 'from-orange-500/15 to-red-500/15',
    border: 'border-orange-500/20',
    icon: '🦀',
  },
  {
    name: 'Custom Agent',
    description: 'Any agent that can make HTTP calls can send events to AgentHub. No SDK required — just POST to our API.',
    badge: null,
    color: 'from-purple-500/15 to-pink-500/15',
    border: 'border-purple-500/20',
    icon: '🛠️',
  },
  {
    name: 'LangChain',
    description: 'Wrap any LangChain chain or agent with our callback handler to capture every LLM call, tool, and decision.',
    badge: null,
    color: 'from-yellow-500/15 to-orange-500/15',
    border: 'border-yellow-500/20',
    icon: '⛓️',
  },
]

const BENEFITS = [
  'No framework lock-in — use any AI agent library',
  'Under 5-minute integration for supported frameworks',
  'OpenTelemetry export for existing observability stacks',
  'Bring your own custom agent via REST API',
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Integrations</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Works with{' '}
            <span className="gradient-text">every framework.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Connect AgentHub to your existing AI stack in minutes. No refactoring required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {FRAMEWORKS.map(({ name, description, badge, color, border, icon }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} hover:scale-[1.02] transition-all group cursor-pointer flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{icon}</span>
                {badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-medium">
                    {badge}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{description}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all">
                View docs <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits block */}
        <div className="glass rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">Framework-agnostic</p>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Your stack, your choice.<br />
                <span className="gradient-text">Full observability regardless.</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AgentHub is built to work with the AI agent ecosystem as it exists today — not to replace your tools,
                but to give you the visibility you need to operate them in production.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {BENEFITS.map(b => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/docs/quickstart"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all"
            >
              Quickstart guide <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/docs/sdk"
              className="px-6 py-3 rounded-xl glass hover:bg-white/10 text-gray-200 font-semibold text-sm transition-all"
            >
              SDK reference
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
