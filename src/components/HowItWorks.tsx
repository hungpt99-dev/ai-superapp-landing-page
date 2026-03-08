import { Plug, Radio, LayoutDashboard, Bug } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: Plug,
    title: 'Connect your agents',
    description:
      'Integrate AgentHub in minutes using our SDK, REST API, or webhook endpoint. Works with LangGraph, CrewAI, AutoGPT, and any custom agent framework.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    icon: Radio,
    title: 'Events stream automatically',
    description:
      'Every significant action — agent_started, tool_called, llm_prompt_sent, llm_response_received, agent_completed — is captured and streamed to the platform in real time.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    step: '03',
    icon: LayoutDashboard,
    title: 'Monitor and visualize',
    description:
      'See live metrics (runs, latency, error rate, LLM cost) on a unified dashboard. Explore multi-agent workflows as interactive DAG graphs updated in real time.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    icon: Bug,
    title: 'Debug and replay',
    description:
      'Open any run in the inspector to see every step, prompt, reasoning trace, and tool call. Replay failed runs deterministically to reproduce and fix production issues fast.',
    color: 'from-pink-500 to-rose-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Full observability in <span className="gradient-text">4 steps</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            No infrastructure to manage. Connect your agents and gain instant production observability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {STEPS.map(({ step, icon: Icon, title, description, color }) => (
            <div
              key={step}
              className="glass rounded-2xl p-7 hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-600 mb-1">Step {step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-14 glass rounded-2xl p-6">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">Event flow example</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-center">
            {[
              { label: 'Agent starts',         note: 'agent_started event emitted',         emoji: '🤖' },
              { label: 'Tool called',           note: 'tool_called + result captured',        emoji: '🔧' },
              { label: 'LLM prompt sent',       note: 'prompt & tokens logged',              emoji: '🧠' },
              { label: 'Run completed',         note: 'full trace stored for replay',        emoji: '✅' },
            ].map((item, i, arr) => (
              <div key={item.label} className="flex items-center gap-3 flex-1">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.note}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="hidden sm:block text-gray-700 text-xl shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
