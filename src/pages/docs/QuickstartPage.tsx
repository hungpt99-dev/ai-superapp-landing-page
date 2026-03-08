import { NavLink } from 'react-router-dom'
import { UserPlus, Package, Code2, Radio, LayoutDashboard, ArrowRight, CheckCircle, Terminal } from 'lucide-react'

const STEPS = [
  {
    icon: UserPlus,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10 border-indigo-400/20',
    step: '01',
    title: 'Create your AgentHub account',
    desc: 'Sign up at app.agenthub.com. The free plan includes up to 3 agents and 10,000 events per month — no credit card required.',
    code: `# Or register directly via the API:
curl -X POST https://api.agenthub.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"email":"you@example.com","password":"your-password"}'

# → {"token":"eyJ...","refresh_token":"..."}`,
    note: 'Save the JWT token — you will use it to authenticate all API calls.',
  },
  {
    icon: Package,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    step: '02',
    title: 'Install the AgentHub SDK',
    desc: 'Add the lightweight SDK to your project. It works with any language that can make HTTP calls.',
    code: `# TypeScript / JavaScript
npm install @agenthub/sdk

# Python
pip install agenthub-sdk`,
    note: null,
  },
  {
    icon: Code2,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    step: '03',
    title: 'Register your agent',
    desc: 'Add your agent to the registry so AgentHub can associate events with it. Provide a name, version, and the framework it uses.',
    code: `import { AgentHubClient } from '@agenthub/sdk'

const hub = new AgentHubClient({ apiKey: process.env.AGENTHUB_API_KEY })

// Register agent (idempotent — safe to call on every startup)
const agent = await hub.agents.register({
  name: 'research-agent',
  version: '1.0.0',
  framework: 'langgraph',   // 'crewai' | 'autogpt' | 'langchain' | 'custom'
  description: 'Searches the web and summarises findings.',
  tags: ['research', 'web-search'],
})

console.log('Agent ID:', agent.id)
// → Agent ID: agt_01j8k...`,
    note: 'The agent ID is stable across restarts. Registration is idempotent — safe to call on every startup.',
  },
  {
    icon: Radio,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
    step: '04',
    title: 'Instrument your agent and send events',
    desc: "Wrap your agent logic to emit structured events at each meaningful step — tool calls, LLM calls, and run lifecycle transitions.",
    code: `const runId = crypto.randomUUID()

await hub.events.ingest({ agentId: agent.id, runId,
  type: 'agent_started',
  payload: { goal: 'Research the latest trends in AI agents' } })

await hub.events.ingest({ agentId: agent.id, runId,
  type: 'tool_called',
  payload: { tool: 'web_search',
    input: { query: 'AI agent trends 2026' }, durationMs: 380 } })

await hub.events.ingest({ agentId: agent.id, runId,
  type: 'llm_response_received',
  payload: { model: 'gpt-4o', promptTokens: 512,
    completionTokens: 256, costUsd: 0.0038, durationMs: 1240 } })

await hub.events.ingest({ agentId: agent.id, runId,
  type: 'agent_completed',
  payload: { summary: 'Found 8 relevant articles.' } })`,
    note: 'Events are batched and sent asynchronously — zero latency impact on your agent.',
  },
  {
    icon: LayoutDashboard,
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
    step: '05',
    title: 'View your agent on the dashboard',
    desc: 'Open app.agenthub.com → Agents. Your agent appears with live metrics — run count, average latency, error rate, and LLM cost. Click any run to see a step-by-step trace.',
    code: `# Fetch metrics via the API
curl "https://api.agenthub.com/v1/metrics?agentId={agentId}" \\
  -H "Authorization: Bearer <jwt>"

# → {
#     "runCount": 12,
#     "successRate": 0.92,
#     "avgLatencyMs": 3240,
#     "p95LatencyMs": 5810,
#     "totalCostUsd": 0.47,
#     "errorRate": 0.08
#   }`,
    note: 'Metrics are aggregated in real time as events arrive. No polling lag.',
  },
]

export default function QuickstartPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
          Getting Started
        </p>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Quickstart
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          Connect your first AI agent and see live events on the dashboard in under 5 minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="glass rounded-xl p-5 mb-10 flex flex-col gap-3">
        <p className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <CheckCircle size={15} className="text-green-400" />
          Prerequisites
        </p>
        <ul className="flex flex-col gap-2 text-sm text-gray-400 ml-6 list-disc">
          <li>Node.js 20+ or Python 3.10+ (for the SDK)</li>
          <li>An existing AI agent (LangGraph, CrewAI, AutoGPT, or custom)</li>
          <li>A free AgentHub account (created in Step 1)</li>
        </ul>
      </div>

      <hr className="border-white/10 mb-10" />

      {/* Steps */}
      <div className="flex flex-col gap-12">
        {STEPS.map(({ icon: Icon, color, bg, step, title, desc, code, note }) => (
          <div key={step} className="flex gap-6">
            {/* Step indicator */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className={`w-10 h-10 rounded-lg border ${bg} flex items-center justify-center`}>
                <Icon size={18} className={color} />
              </div>
              <div className="flex-1 w-px bg-white/10" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-gray-600">Step {step}</span>
                <h2 className="text-lg font-bold text-white">{title}</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>

              {/* Code block */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 bg-gray-900 border-b border-white/10 px-4 py-2">
                  <Terminal size={12} className="text-gray-500" />
                  <span className="text-xs text-gray-500">shell</span>
                </div>
                <pre className="bg-gray-900 p-4 text-xs text-gray-300 overflow-x-auto leading-relaxed">
                  <code>{code}</code>
                </pre>
              </div>

              {note && (
                <div className="mt-3 flex items-start gap-2 text-xs text-indigo-300 bg-indigo-900/20 border border-indigo-500/20 rounded-lg px-4 py-3">
                  <CheckCircle size={13} className="text-indigo-400 shrink-0 mt-0.5" />
                  {note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-white/10 my-10" />

      {/* Next steps */}
      <div>
        <h2 className="text-xl font-bold text-white mb-5">You're all set — what's next?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <NavLink
            to="/docs/sdk"
            className="glass rounded-xl p-5 flex flex-col gap-2 hover:bg-white/[0.07] transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                Build an Agent
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-600/30 text-purple-300 font-medium">
                SDK
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full SDK docs — event types, workflows, tasks, and framework-specific integrations.
            </p>
            <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all mt-1">
              SDK Reference <ArrowRight size={12} />
            </div>
          </NavLink>

          <NavLink
            to="/docs/api"
            className="glass rounded-xl p-5 flex flex-col gap-2 hover:bg-white/[0.07] transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                Integrate via API
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-600/30 text-cyan-300 font-medium">
                REST
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Complete API reference for agents, events, workflows, tasks, metrics, and logs.
            </p>
            <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all mt-1">
              API Reference <ArrowRight size={12} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
