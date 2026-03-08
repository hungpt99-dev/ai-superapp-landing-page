import { NavLink } from 'react-router-dom'
import { ArrowRight, Activity, Server, LayoutDashboard, Plug, GitBranch, Search, DollarSign, Bell, Database } from 'lucide-react'

export default function OverviewPage() {
  return (
    <div className="prose-docs">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
          Documentation
        </p>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          AgentHub Overview
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          AgentHub is the standard infrastructure platform for managing, monitoring, and debugging
          AI agents in production. Think of it as Datadog for AI agents — a unified control plane
          that gives your team full observability across every agent run, workflow, prompt, and cost.
        </p>
      </div>

      <hr className="border-white/10 mb-10" />

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Architecture</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          The platform has three independent layers. Each layer has a clear, single responsibility:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: Plug,
              color: 'text-indigo-400',
              bg: 'bg-indigo-400/10 border-indigo-400/20',
              title: 'Agent SDK / Instrumentation',
              subtitle: 'Runs inside your agents',
              desc: 'A lightweight SDK (or plain HTTP) that instruments your agents and streams structured events (agent_started, tool_called, llm_prompt_sent, etc.) to the backend in real time.',
            },
            {
              icon: Server,
              color: 'text-purple-400',
              bg: 'bg-purple-400/10 border-purple-400/20',
              title: 'AgentHub Backend',
              subtitle: 'Event ingestion & management API',
              desc: 'A Go backend that receives events, stores run history, computes metrics, manages agent registry and workflows, and exposes a REST API for the dashboard and external integrations.',
            },
            {
              icon: LayoutDashboard,
              color: 'text-cyan-400',
              bg: 'bg-cyan-400/10 border-cyan-400/20',
              title: 'Web Dashboard',
              subtitle: 'Your observability UI',
              desc: 'A React + Next.js web app that renders live agent dashboards, workflow DAG visualizations, run inspectors, cost charts, and log explorers. Accessible from any browser.',
            },
          ].map(({ icon: Icon, color, bg, title, subtitle, desc }) => (
            <div key={title} className="glass rounded-xl p-5 flex flex-col gap-3">
              <div className={`w-10 h-10 rounded-lg border ${bg} flex items-center justify-center shrink-0`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{title}</div>
                <div className="text-xs text-gray-500 mb-2">{subtitle}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="glass rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-500 mb-4 font-sans text-xs uppercase tracking-widest">Event flow</p>
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-indigo-400 font-semibold">Your Agent</span>
              <span className="text-gray-600">────────►</span>
              <span className="text-purple-400 font-semibold">POST /v1/events</span>
              <span className="text-gray-600">──►</span>
              <span className="text-cyan-400">Backend (stores event)</span>
            </div>
            <div className="flex items-center gap-3 ml-8">
              <span className="text-gray-600">▼</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-semibold">Backend</span>
              <span className="text-gray-600">──────────►</span>
              <span className="text-green-400 font-semibold">Metrics aggregated</span>
              <span className="text-gray-600">──►</span>
              <span className="text-cyan-400">latency, errors, cost</span>
            </div>
            <div className="flex items-center gap-3 ml-8">
              <span className="text-gray-600">▼</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-pink-400 font-semibold">Web Dashboard</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-purple-400 font-semibold">GET /v1/agents/:id/metrics</span>
              <span className="text-gray-600">──►</span>
              <span className="text-cyan-400">Live charts & alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key concepts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Key Concepts</h2>
        <div className="flex flex-col gap-5">
          {[
            {
              icon: Activity,
              color: 'text-indigo-400',
              title: 'Agents',
              desc: 'The units of AI work you register and monitor. An agent has a name, version, framework (LangGraph, CrewAI, etc.), and lifecycle status (active, idle, error, deprecated). The registry is your central source of truth.',
            },
            {
              icon: Bell,
              color: 'text-purple-400',
              title: 'Events',
              desc: 'Structured telemetry messages emitted by your agents: agent_started, tool_called, llm_prompt_sent, llm_response_received, agent_completed, agent_failed. Events are the raw material for all observability features.',
            },
            {
              icon: GitBranch,
              color: 'text-green-400',
              title: 'Workflows',
              desc: 'Multi-step agentic pipelines composed of tasks. Workflows define how agents collaborate — Planner → Research → Tool → Writer. Visualized as interactive DAG graphs in the dashboard.',
            },
            {
              icon: Search,
              color: 'text-cyan-400',
              title: 'Runs',
              desc: 'A single execution of an agent or workflow. Each run has a full trace — every step, tool call, LLM prompt, reasoning output, and final result. Runs can be inspected step-by-step or replayed deterministically.',
            },
            {
              icon: DollarSign,
              color: 'text-yellow-400',
              title: 'Metrics',
              desc: 'Aggregated performance data computed from events: run count, latency (P50/P95/P99), error rate, token usage, and LLM cost. Available per agent, per workflow, or across your entire fleet.',
            },
            {
              icon: Database,
              color: 'text-rose-400',
              title: 'Logs',
              desc: 'Structured log entries attached to agent runs. Searchable, filterable by agent, run, severity, and time range. Used alongside metrics for root cause analysis.',
            },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="glass rounded-xl p-5 flex gap-4">
              <div className="shrink-0 mt-0.5">
                <Icon size={18} className={color} />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">{title}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's next */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">What's Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              to: '/docs/quickstart',
              title: 'Quickstart',
              desc: 'Connect your first agent and see live events flowing to the dashboard in under 5 minutes.',
              badge: 'Start here',
              badgeColor: 'bg-indigo-600 text-white',
            },
            {
              to: '/docs/sdk',
              title: 'SDK Reference',
              desc: 'Full TypeScript SDK documentation for instrumenting agents and configuring integrations.',
              badge: 'Developers',
              badgeColor: 'bg-purple-600/30 text-purple-300',
            },
            {
              to: '/docs/api',
              title: 'REST API',
              desc: 'Complete API reference for agents, events, workflows, tasks, metrics, and logs.',
              badge: 'API',
              badgeColor: 'bg-cyan-600/30 text-cyan-300',
            },
          ].map(({ to, title, desc, badge, badgeColor }) => (
            <NavLink
              key={to}
              to={to}
              className="glass rounded-xl p-5 flex flex-col gap-3 hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {title}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColor}`}>
                  {badge}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{desc}</p>
              <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all">
                Read more <ArrowRight size={12} />
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}
