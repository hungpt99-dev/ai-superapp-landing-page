import { EyeOff, BarChart3, GitBranch, Bug, Layers, X, Check } from 'lucide-react'

const PROBLEMS = [
  {
    icon: EyeOff,
    title: 'No visibility into agent behaviour',
    examples: 'LangGraph, CrewAI, AutoGPT in production',
    pains: ['Unstructured logs you cannot query', 'Cannot tell which step failed or why', 'Black-box execution with zero insight'],
  },
  {
    icon: BarChart3,
    title: 'No production monitoring',
    examples: 'Every AI framework, any cloud',
    pains: ['Latency, errors and costs scattered across tools', 'No unified dashboard for agent health', 'Alerts only after users complain'],
  },
  {
    icon: GitBranch,
    title: 'Cannot visualize multi-agent flows',
    examples: 'Planner → Research → Tool → Writer pipelines',
    pains: ['No graph view of who calls whom', 'Hard to reason about complex agent dependencies', 'Debugging requires reading raw code'],
  },
  {
    icon: Bug,
    title: 'Difficult debugging',
    examples: 'Production failures, flaky runs',
    pains: ['No run inspector or step-by-step trace', 'Cannot replay a failed run to reproduce', 'Prompt and reasoning logs are lost'],
  },
  {
    icon: Layers,
    title: 'Fragmented ecosystem',
    examples: 'Mix of LangGraph + CrewAI + custom agents',
    pains: ['Every framework has different observability APIs', 'No single pane of glass across agents', 'Integration overhead for each new tool'],
  },
]

export default function Problem() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            AI agents in production are a <span className="gradient-text">black box.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            There is no standard platform for observing, monitoring, and debugging AI agents at scale. Teams are flying blind.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PROBLEMS.slice(0, 3).map(({ icon: Icon, title, examples, pains }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Icon size={18} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-100">{title}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">{examples}</p>
              <ul className="flex flex-col gap-2">
                {pains.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                    <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PROBLEMS.slice(3).map(({ icon: Icon, title, examples, pains }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Icon size={18} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-100">{title}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">{examples}</p>
              <ul className="flex flex-col gap-2">
                {pains.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                    <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solution summary */}
        <div className="glass rounded-2xl p-8 glow text-center">
          <p className="text-sm text-indigo-400 font-semibold uppercase tracking-widest mb-3">The Solution</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
            AgentHub gives you full observability and control over every AI agent in production.
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Real-time monitoring dashboard across all agents',
              'Workflow graph visualization for multi-agent flows',
              'Step-by-step run inspector and deterministic replay',
              'Unified platform—LangGraph, CrewAI, AutoGPT and more',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-left text-gray-300 bg-white/5 rounded-xl px-4 py-3">
                <Check size={15} className="text-indigo-400 mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
