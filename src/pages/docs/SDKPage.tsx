import { Terminal, Package, Shield, Activity, Database, Radio, Brain } from 'lucide-react'

function CodeBlock({ lang = 'typescript', code }: { lang?: string; code: string }) {
  return (
    <div className="rounded-xl overflow-hidden mb-6">
      <div className="flex items-center gap-2 bg-gray-900 border-b border-white/10 px-4 py-2">
        <Terminal size={12} className="text-gray-500" />
        <span className="text-xs text-gray-500">{lang}</span>
      </div>
      <pre className="bg-gray-900 p-4 text-xs text-gray-300 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function SectionHeading({ id, icon: Icon, color, title, subtitle }: {
  id: string
  icon: React.ElementType
  color: string
  title: string
  subtitle: string
}) {
  return (
    <div id={id} className="flex items-start gap-4 mb-6 scroll-mt-20">
      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={18} />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-0.5">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}

function PropTable({ rows }: { rows: Array<{ name: string; type: string; required?: boolean; desc: string }> }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03]">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Property</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Type</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Req</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className={`${i % 2 === 0 ? '' : 'bg-white/[0.02]'} border-b border-white/5 last:border-0`}>
              <td className="px-4 py-3 font-mono text-indigo-300 text-xs">{r.name}</td>
              <td className="px-4 py-3 font-mono text-purple-300 text-xs">{r.type}</td>
              <td className="px-4 py-3 text-xs">{r.required ? <span className="text-rose-400">yes</span> : <span className="text-gray-600">—</span>}</td>
              <td className="px-4 py-3 text-gray-400 text-xs leading-relaxed">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SDKPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">SDK Reference</p>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">AgentHub SDK</h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          The official TypeScript and Python SDK for instrumenting your AI agents.
          Initialise <code className="text-indigo-300 bg-indigo-900/30 px-1.5 py-0.5 rounded text-sm">AgentHubClient</code> once,
          then register agents, ingest events, and query metrics — all from a single interface.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <SectionHeading
          id="installation"
          icon={Package}
          color="bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
          title="Installation"
          subtitle="Install via npm or pip."
        />
        <CodeBlock lang="shell" code={`# TypeScript / JavaScript
npm install @agenthub/sdk

# Python
pip install agenthub-sdk`} />
      </section>

      {/* Initialisation */}
      <section className="mb-12">
        <SectionHeading
          id="init"
          icon={Shield}
          color="bg-amber-500/10 border-amber-500/30 text-amber-400"
          title="Initialisation"
          subtitle="Create a client with your API key."
        />
        <CodeBlock lang="typescript" code={`import { AgentHubClient } from '@agenthub/sdk'

const hub = new AgentHubClient({
  apiKey: process.env.AGENTHUB_API_KEY,
  baseUrl: 'https://api.agenthub.io',  // omit for cloud default
})`} />
        <PropTable rows={[
          { name: 'apiKey', type: 'string', required: true, desc: 'Your AgentHub API key.' },
          { name: 'baseUrl', type: 'string', desc: 'Override for self-hosted deployments.' },
          { name: 'timeout', type: 'number', desc: 'Request timeout in ms. Default: 10000.' },
        ]} />
      </section>

      {/* Agent Registry */}
      <section className="mb-12">
        <SectionHeading
          id="agents"
          icon={Brain}
          color="bg-purple-500/10 border-purple-500/30 text-purple-400"
          title="Agent Registry"
          subtitle="Register and manage agent definitions."
        />
        <CodeBlock lang="typescript" code={`const agent = await hub.agents.register({
  name: 'research-agent',
  version: '1.0.0',
  framework: 'langchain',   // langchain | langgraph | crewai | autogpt | custom
  description: 'Web research and summarisation agent',
  tags: ['research', 'production'],
})

console.log(agent.id)  // agt_01abc...

// List all registered agents
const agents = await hub.agents.list({ tag: 'production' })`} />
        <PropTable rows={[
          { name: 'name', type: 'string', required: true, desc: 'Unique name for the agent.' },
          { name: 'version', type: 'string', required: true, desc: 'Semantic version string.' },
          { name: 'framework', type: 'AgentFramework', required: true, desc: 'The AI framework the agent uses.' },
          { name: 'description', type: 'string', desc: 'Human-readable description.' },
          { name: 'tags', type: 'string[]', desc: 'Labels for filtering in the dashboard.' },
        ]} />
      </section>

      {/* Event Ingestion */}
      <section className="mb-12">
        <SectionHeading
          id="events"
          icon={Radio}
          color="bg-green-500/10 border-green-500/30 text-green-400"
          title="Event Ingestion"
          subtitle="Stream structured events from your running agents."
        />
        <CodeBlock lang="typescript" code={`await hub.events.ingest({
  agentId: agent.id,
  runId: 'run_xyz123',          // group events by execution run
  type: 'llm_prompt_sent',
  payload: {
    model: 'gpt-4o',
    prompt: messages,
    temperature: 0.7,
  },
  timestamp: new Date().toISOString(),
})`} />

        <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Event Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['agent_started', 'Agent execution began'],
                ['tool_called', 'Agent invoked a tool or function'],
                ['llm_prompt_sent', 'Prompt dispatched to the LLM'],
                ['llm_response_received', 'LLM response received'],
                ['agent_completed', 'Agent run finished successfully'],
                ['agent_failed', 'Agent run terminated with an error'],
                ['custom', 'User-defined event — any payload schema'],
              ].map(([type, desc], i) => (
                <tr key={type} className={`${i % 2 === 0 ? '' : 'bg-white/[0.02]'} border-b border-white/5 last:border-0`}>
                  <td className="px-4 py-3 font-mono text-green-300 text-xs">{type}</td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Workflows & Tasks */}
      <section className="mb-12">
        <SectionHeading
          id="workflows"
          icon={Activity}
          color="bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
          title="Workflows & Tasks"
          subtitle="Track multi-step agent pipelines."
        />
        <CodeBlock lang="typescript" code={`// Create a workflow (a named multi-step pipeline)
const workflow = await hub.workflows.create({
  agentId: agent.id,
  name: 'daily-report-pipeline',
  description: 'Research → draft → review → send',
})

// Log individual tasks within the workflow
const task = await hub.tasks.create({
  workflowId: workflow.id,
  name: 'web-research',
  status: 'running',
})

// Update task status when done
await hub.tasks.update(task.id, { status: 'completed', durationMs: 1420 })`} />
      </section>

      {/* Metrics */}
      <section className="mb-12">
        <SectionHeading
          id="metrics"
          icon={Database}
          color="bg-rose-500/10 border-rose-500/30 text-rose-400"
          title="Metrics"
          subtitle="Query cost, latency, and error data for any agent."
        />
        <CodeBlock lang="typescript" code={`const metrics = await hub.metrics.getForAgent(agent.id, {
  from: '2026-03-01T00:00:00Z',
  to:   '2026-03-08T00:00:00Z',
})

console.log(metrics.totalRuns)        // 842
console.log(metrics.avgLatencyMs)     // 1230
console.log(metrics.totalTokens)      // 4_200_000
console.log(metrics.estimatedCostUsd) // 12.60
console.log(metrics.errorRate)        // 0.02`} />
      </section>

      {/* Framework Integrations */}
      <section className="mb-12">
        <SectionHeading
          id="integrations"
          icon={Terminal}
          color="bg-gray-500/10 border-gray-500/30 text-gray-400"
          title="Framework Integrations"
          subtitle="Drop-in wrappers for popular agent frameworks."
        />
        <CodeBlock lang="typescript" code={`// LangChain — wrap an existing chain
import { LangChainInstrumentation } from '@agenthub/sdk/langchain'

const instrumented = LangChainInstrumentation.wrap(myChain, {
  hub,
  agentId: agent.id,
})

// CrewAI — decorate a crew
import { CrewAIInstrumentation } from '@agenthub/sdk/crewai'

CrewAIInstrumentation.instrument(myCrew, { hub, agentId: agent.id })`} />
        <CodeBlock lang="python" code={`# Python — LangGraph
from agenthub.integrations.langgraph import instrument_graph

graph = instrument_graph(my_langgraph_app, hub=hub, agent_id=agent_id)`} />
      </section>
    </div>
  )
}
