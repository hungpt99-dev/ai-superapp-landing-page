import { Terminal, Lock, Users, Radio, GitBranch, CheckSquare, BarChart2, FileText, AlertCircle } from 'lucide-react'

function CodeBlock({ lang = 'shell', code }: { lang?: string; code: string }) {
  return (
    <div className="rounded-xl overflow-hidden mb-5">
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

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

const METHOD_COLOR: Record<Method, string> = {
  GET:    'bg-sky-500/20 text-sky-300',
  POST:   'bg-green-500/20 text-green-300',
  PATCH:  'bg-amber-500/20 text-amber-300',
  PUT:    'bg-orange-500/20 text-orange-300',
  DELETE: 'bg-rose-500/20 text-rose-300',
}

function EndpointTable({ rows }: { rows: Array<{ method: Method; path: string; auth: boolean; desc: string }> }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03]">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Method</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Path</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Auth</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ method, path, auth, desc }, i) => (
            <tr key={path + method} className={`${i % 2 === 0 ? '' : 'bg-white/[0.02]'} border-b border-white/5 last:border-0`}>
              <td className="px-4 py-3">
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${METHOD_COLOR[method]}`}>{method}</span>
              </td>
              <td className="px-4 py-3 font-mono text-indigo-300 text-xs">{path}</td>
              <td className="px-4 py-3 text-xs">
                {auth ? (
                  <span className="flex items-center gap-1 text-amber-400"><Lock size={11} /> JWT</span>
                ) : (
                  <span className="text-gray-600">None</span>
                )}
              </td>
              <td className="px-4 py-3 text-gray-400 text-xs">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function APIPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">REST API</p>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">API Reference</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          The AgentHub REST API. All endpoints are prefixed with{' '}
          <code className="text-indigo-300 bg-indigo-900/30 px-1.5 py-0.5 rounded text-sm">/api/v1</code>.
          Authentication uses JWT bearer tokens obtained from the{' '}
          <code className="text-indigo-300 bg-indigo-900/30 px-1.5 py-0.5 rounded text-sm">/auth</code> endpoints.
        </p>
      </div>

      {/* Base URL */}
      <div className="glass rounded-xl px-5 py-4 mb-10 flex items-center gap-3">
        <AlertCircle size={16} className="text-indigo-400 shrink-0" />
        <span className="text-sm text-gray-400">
          Base URL: <code className="text-indigo-300 ml-1">https://api.agenthub.io/api/v1</code>
          &nbsp;— or your self-hosted domain.
        </span>
      </div>

      {/* Auth */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-amber-500/10 border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
            <Lock size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Authentication</h2>
            <p className="text-sm text-gray-500">Obtain and refresh JWT access tokens.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'POST', path: '/auth/register', auth: false, desc: 'Create a new workspace account.' },
          { method: 'POST', path: '/auth/login',    auth: false, desc: 'Get access + refresh tokens.' },
          { method: 'POST', path: '/auth/refresh',  auth: false, desc: 'Rotate access token using refresh token.' },
          { method: 'POST', path: '/auth/logout',   auth: true,  desc: 'Invalidate current session.' },
        ]} />
        <CodeBlock lang="shell" code={`curl -X POST https://api.agenthub.io/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"you@acme.com","password":"••••••••"}'

# Response
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "rt_01abc...",
  "expires_in": 3600
}`} />
      </section>

      {/* Agents */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-purple-500/10 border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
            <Users size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Agents</h2>
            <p className="text-sm text-gray-500">Register and manage your AI agents.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'POST',   path: '/agents',        auth: true, desc: 'Register a new agent.' },
          { method: 'GET',    path: '/agents',        auth: true, desc: 'List all agents in the workspace.' },
          { method: 'GET',    path: '/agents/:id',    auth: true, desc: 'Get a single agent by ID.' },
          { method: 'PATCH',  path: '/agents/:id',    auth: true, desc: 'Update agent metadata.' },
          { method: 'DELETE', path: '/agents/:id',    auth: true, desc: 'Delete an agent and its data.' },
        ]} />
        <CodeBlock lang="shell" code={`curl -X POST https://api.agenthub.io/api/v1/agents \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "research-agent",
    "version": "1.0.0",
    "framework": "langchain",
    "tags": ["production"]
  }'`} />
      </section>

      {/* Events */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-green-500/10 border-green-500/30 text-green-400 flex items-center justify-center shrink-0">
            <Radio size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Events</h2>
            <p className="text-sm text-gray-500">Ingest and query structured agent events.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'POST', path: '/events',              auth: true, desc: 'Ingest one or more events.' },
          { method: 'GET',  path: '/events',              auth: true, desc: 'Query events with filters.' },
          { method: 'GET',  path: '/events/:id',          auth: true, desc: 'Fetch a single event.' },
          { method: 'GET',  path: '/agents/:id/events',   auth: true, desc: 'List all events for an agent.' },
        ]} />
        <CodeBlock lang="shell" code={`curl -X POST https://api.agenthub.io/api/v1/events \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "agentId": "agt_01abc",
    "runId":   "run_xyz",
    "type":    "llm_prompt_sent",
    "payload": { "model": "gpt-4o", "tokens": 512 },
    "timestamp": "2026-03-08T10:00:00Z"
  }'`} />
      </section>

      {/* Workflows */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-cyan-500/10 border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
            <GitBranch size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Workflows</h2>
            <p className="text-sm text-gray-500">Track multi-step agent execution pipelines.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'POST',  path: '/workflows',        auth: true, desc: 'Create a new workflow.' },
          { method: 'GET',   path: '/workflows',        auth: true, desc: 'List workflows.' },
          { method: 'GET',   path: '/workflows/:id',    auth: true, desc: 'Get workflow details and task tree.' },
          { method: 'PATCH', path: '/workflows/:id',    auth: true, desc: 'Update workflow status.' },
        ]} />
      </section>

      {/* Tasks */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-indigo-500/10 border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0">
            <CheckSquare size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Tasks</h2>
            <p className="text-sm text-gray-500">Individual steps within a workflow.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'POST',  path: '/tasks',            auth: true, desc: 'Create a task within a workflow.' },
          { method: 'GET',   path: '/tasks',            auth: true, desc: 'List tasks with optional filters.' },
          { method: 'GET',   path: '/tasks/:id',        auth: true, desc: 'Get a single task.' },
          { method: 'PATCH', path: '/tasks/:id',        auth: true, desc: 'Update task status or metadata.' },
        ]} />
      </section>

      {/* Metrics */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-rose-500/10 border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
            <BarChart2 size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Metrics</h2>
            <p className="text-sm text-gray-500">Cost, latency, and token usage analytics.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'GET', path: '/metrics',              auth: true, desc: 'Aggregate metrics across all agents.' },
          { method: 'GET', path: '/agents/:id/metrics',   auth: true, desc: 'Metrics for a specific agent.' },
        ]} />
        <CodeBlock lang="shell" code={`curl "https://api.agenthub.io/api/v1/agents/agt_01abc/metrics?from=2026-03-01&to=2026-03-08" \
  -H "Authorization: Bearer $TOKEN"

# Response
{
  "totalRuns": 842,
  "avgLatencyMs": 1230,
  "totalTokens": 4200000,
  "estimatedCostUsd": 12.60,
  "errorRate": 0.02
}`} />
      </section>

      {/* Logs */}
      <section className="mb-14">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg border bg-gray-500/10 border-gray-500/30 text-gray-400 flex items-center justify-center shrink-0">
            <FileText size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-0.5">Logs</h2>
            <p className="text-sm text-gray-500">Raw structured log entries from agents.</p>
          </div>
        </div>
        <EndpointTable rows={[
          { method: 'GET', path: '/logs',                auth: true, desc: 'Query logs with level/time filters.' },
          { method: 'GET', path: '/agents/:id/logs',     auth: true, desc: 'Logs scoped to a specific agent.' },
        ]} />
        <CodeBlock lang="shell" code={`curl "https://api.agenthub.io/api/v1/agents/agt_01abc/logs?level=error&limit=50" \
  -H "Authorization: Bearer $TOKEN"`} />
      </section>
    </div>
  )
}
