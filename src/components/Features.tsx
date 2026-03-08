import {
  Activity, GitBranch, Search, RefreshCw,
  LayoutDashboard, BarChart3, DollarSign, Bell,
  Database, Settings, Users, Network,
  Plug, Code2, Webhook, Globe,
} from 'lucide-react'

const FEATURE_GROUPS = [
  {
    group: '🔍 Observability & Debugging',
    subtitle: 'See exactly what your agents are doing at every step.',
    items: [
      {
        icon: Search,
        title: 'Run Inspector',
        description: 'Step-by-step trace of every agent run — tool calls, LLM prompts, reasoning, and outputs captured in sequence.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10 border-indigo-400/20',
      },
      {
        icon: RefreshCw,
        title: 'Run Replay',
        description: 'Deterministically replay any past run to reproduce bugs, test fixes, and validate performance improvements.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10 border-purple-400/20',
      },
      {
        icon: Activity,
        title: 'Prompt & Reasoning Trace',
        description: 'Full prompt history, model responses, and chain-of-thought reasoning logged per agent per run.',
        color: 'text-pink-400',
        bg: 'bg-pink-400/10 border-pink-400/20',
      },
      {
        icon: Bell,
        title: 'Error Monitoring & Alerts',
        description: 'Instant alerts on agent failures, performance regressions, and cost anomalies via email or webhook.',
        color: 'text-red-400',
        bg: 'bg-red-400/10 border-red-400/20',
      },
    ],
  },
  {
    group: '📊 Monitoring & Metrics',
    subtitle: 'Real-time production dashboards for all your agents.',
    items: [
      {
        icon: LayoutDashboard,
        title: 'Real-time Dashboard',
        description: 'Live overview of active agents, run counts, latency percentiles, error rates, and LLM usage across your entire fleet.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10 border-blue-400/20',
      },
      {
        icon: BarChart3,
        title: 'Performance Metrics',
        description: 'P50/P95/P99 latency, throughput, success rate, and token usage tracked over time with historical charts.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10 border-sky-400/20',
      },
      {
        icon: DollarSign,
        title: 'Cost Tracking',
        description: 'Track LLM spend per agent, per workflow, and per team. Break down token usage and set budget alerts.',
        color: 'text-green-400',
        bg: 'bg-green-400/10 border-green-400/20',
      },
      {
        icon: GitBranch,
        title: 'Workflow Visualization',
        description: 'Interactive DAG graph of multi-agent workflows — see Planner → Research → Tool → Writer flows in real time.',
        color: 'text-teal-400',
        bg: 'bg-teal-400/10 border-teal-400/20',
      },
    ],
  },
  {
    group: '🤖 Agent Lifecycle Management',
    subtitle: 'Register, version, and manage agents across their full lifecycle.',
    items: [
      {
        icon: Database,
        title: 'Agent Registry',
        description: 'Central registry for all your agents with versioning, metadata, capability declarations, and deployment history.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10 border-yellow-400/20',
      },
      {
        icon: Settings,
        title: 'Lifecycle Management',
        description: 'Track agent status (active, idle, error, deprecated). Promote, roll back, or retire agent versions with audit trail.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10 border-orange-400/20',
      },
      {
        icon: Users,
        title: 'Multi-agent Collaboration',
        description: 'Model and monitor agent-to-agent communication — which agents delegate to which, and how data flows between them.',
        color: 'text-violet-400',
        bg: 'bg-violet-400/10 border-violet-400/20',
      },
      {
        icon: Network,
        title: 'Workflow Automation',
        description: 'Define multi-step agentic workflows as reusable templates and trigger them via API, schedule, or event.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10 border-indigo-400/20',
      },
    ],
  },
  {
    group: '🔌 Integrations',
    subtitle: 'Works with every major AI agent framework out of the box.',
    items: [
      {
        icon: Plug,
        title: 'Framework SDKs',
        description: 'First-class SDKs for LangGraph, CrewAI, AutoGPT, and OpenClaw. Drop-in integrations that take under 5 minutes.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10 border-cyan-400/20',
      },
      {
        icon: Code2,
        title: 'REST API',
        description: 'Ingest events from any agent via a simple REST API. No framework lock-in — bring your own custom agent.',
        color: 'text-lime-400',
        bg: 'bg-lime-400/10 border-lime-400/20',
      },
      {
        icon: Webhook,
        title: 'Webhooks',
        description: 'Push run results, alerts, and status changes to any endpoint — Slack, PagerDuty, or your own systems.',
        color: 'text-rose-400',
        bg: 'bg-rose-400/10 border-rose-400/20',
      },
      {
        icon: Globe,
        title: 'OpenTelemetry Export',
        description: 'Export traces and metrics to Datadog, Grafana, Jaeger, or any OTLP-compatible observability backend.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10 border-purple-400/20',
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
            Everything you need to operate<br />
            <span className="gradient-text">AI agents in production.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Full-stack observability, monitoring, and lifecycle management for any AI agent framework.
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
