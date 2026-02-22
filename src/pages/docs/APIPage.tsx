import { Terminal, Lock, Monitor, Bot, Briefcase, ShoppingBag, AlertCircle } from 'lucide-react'

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

function EndpointTable({
  rows,
}: {
  rows: Array<{ method: Method; path: string; auth: boolean; desc: string }>
}) {
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
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${METHOD_COLOR[method]}`}>
                  {method}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-indigo-300 text-xs">{path}</td>
              <td className="px-4 py-3 text-xs">
                {auth ? (
                  <span className="flex items-center gap-1 text-amber-400">
                    <Lock size={11} /> JWT
                  </span>
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
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
          REST API
        </p>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          API Reference
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          The AI SuperApp backend exposes a RESTful HTTP API for authentication, device management,
          bot runs, workspaces, and the Mini-App marketplace. All endpoints return JSON.
        </p>
      </div>

      {/* Base URL */}
      <div className="glass rounded-xl p-5 mb-8 flex items-center gap-3">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest shrink-0">Base URL</span>
        <code className="font-mono text-indigo-300 text-sm">https://api.aisuperapp.com</code>
      </div>

      <hr className="border-white/10 mb-10" />

      {/* Authentication */}
      <section className="mb-12" id="authentication">
        <div className="flex items-center gap-3 mb-5">
          <Lock size={18} className="text-amber-400" />
          <h2 className="text-xl font-bold text-white">Authentication</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Protected endpoints require a <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Bearer</code> JWT in the
          {' '}<code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Authorization</code> header.
          Tokens are obtained via <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">POST /v1/auth/login</code> or{' '}
          <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">POST /v1/auth/token</code> (API-key exchange for desktop agents).
        </p>

        <CodeBlock lang="shell" code={`# Register
curl -X POST https://api.aisuperapp.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"email":"you@example.com","password":"your-password"}'

# Login → get JWT + refresh token
curl -X POST https://api.aisuperapp.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"you@example.com","password":"your-password"}'

# Exchange API key → JWT (desktop agent flow)
curl -X POST https://api.aisuperapp.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"api_key":"your-api-key"}'

# Use the JWT on protected endpoints
curl https://api.aisuperapp.com/v1/auth/me \\
  -H "Authorization: Bearer <jwt>"`} />

        <EndpointTable rows={[
          { method: 'POST',   path: '/v1/auth/register',         auth: false, desc: 'Create a new user account.' },
          { method: 'POST',   path: '/v1/auth/login',            auth: false, desc: 'Email + password login. Returns JWT + refresh token.' },
          { method: 'POST',   path: '/v1/auth/token',            auth: false, desc: 'API-key → JWT exchange (desktop client-credentials flow).' },
          { method: 'POST',   path: '/v1/auth/refresh',          auth: false, desc: 'Rotate refresh token, issue new JWT.' },
          { method: 'GET',    path: '/v1/auth/me',               auth: true,  desc: 'Return the current user profile.' },
          { method: 'POST',   path: '/v1/auth/logout',           auth: true,  desc: 'Revoke current refresh token.' },
          { method: 'POST',   path: '/v1/auth/logout-all',       auth: true,  desc: 'Revoke all refresh tokens for this user.' },
          { method: 'POST',   path: '/v1/auth/change-password',  auth: true,  desc: 'Change account password.' },
          { method: 'DELETE', path: '/v1/auth/account',          auth: true,  desc: 'Permanently delete the account.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-10" />

      {/* Devices */}
      <section className="mb-12" id="devices">
        <div className="flex items-center gap-3 mb-5">
          <Monitor size={18} className="text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Devices</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Each Desktop Agent installation registers as a device. Devices have a heartbeat
          (every 30 s) to indicate online status, and can report CPU/memory metrics.
        </p>
        <CodeBlock lang="shell" code={`# Register a new device
curl -X POST https://api.aisuperapp.com/v1/devices \\
  -H "Authorization: Bearer <jwt>" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"My MacBook Pro"}'

# Send heartbeat (Desktop Agent → every 30 seconds)
curl -X POST https://api.aisuperapp.com/v1/devices/{deviceId}/heartbeat \\
  -H "Authorization: Bearer <jwt>"`} />

        <EndpointTable rows={[
          { method: 'GET',    path: '/v1/devices',                          auth: true, desc: 'List all registered desktop agents for this user.' },
          { method: 'POST',   path: '/v1/devices',                          auth: true, desc: 'Register a new desktop agent device.' },
          { method: 'PATCH',  path: '/v1/devices/{deviceId}',               auth: true, desc: 'Rename a device.' },
          { method: 'DELETE', path: '/v1/devices/{deviceId}',               auth: true, desc: 'Remove a device registration.' },
          { method: 'POST',   path: '/v1/devices/{deviceId}/heartbeat',     auth: true, desc: 'Mark device as online. Call every 30 s from the Desktop Agent.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-10" />

      {/* Bots */}
      <section className="mb-12" id="bots">
        <div className="flex items-center gap-3 mb-5">
          <Bot size={18} className="text-purple-400" />
          <h2 className="text-xl font-bold text-white">Bots & Runs</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Bots are named automated tasks. Queuing a run creates a <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">pending</code> record that
          the Desktop Agent claims via <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">GET /v1/bots/poll</code> (uses SELECT … FOR UPDATE SKIP LOCKED
          for safe concurrent polling).
        </p>

        {/* Run state diagram */}
        <div className="glass rounded-xl p-5 mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Bot run state machine</p>
          <div className="flex items-center gap-2 text-xs font-mono flex-wrap">
            <span className="px-3 py-1 rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30">pending</span>
            <span className="text-gray-600">──►</span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">running</span>
            <span className="text-gray-600">──►</span>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">completed</span>
            <span className="text-gray-600 mx-2">|</span>
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">failed</span>
            <span className="text-gray-600 mx-2">|</span>
            <span className="px-3 py-1 rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30">cancelled</span>
          </div>
        </div>

        <CodeBlock lang="shell" code={`# Create a bot
curl -X POST https://api.aisuperapp.com/v1/bots \\
  -H "Authorization: Bearer <jwt>" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Daily SEO Writer","description":"Writes a daily blog post"}'

# Queue a run
curl -X POST https://api.aisuperapp.com/v1/bots/{botId}/runs \\
  -H "Authorization: Bearer <jwt>" \\
  -H "Content-Type: application/json" \\
  -d '{"goal":"Write a 500-word post about TypeScript generics"}'

# Desktop Agent: claim next pending run (SKIP LOCKED)
curl https://api.aisuperapp.com/v1/bots/poll \\
  -H "Authorization: Bearer <jwt>"

# Desktop Agent: report progress / completion
curl -X PATCH https://api.aisuperapp.com/v1/bots/runs/{runId} \\
  -H "Authorization: Bearer <jwt>" \\
  -H "Content-Type: application/json" \\
  -d '{"status":"completed","result":"Here is your blog post..."}'`} />

        <EndpointTable rows={[
          { method: 'GET',   path: '/v1/bots',                    auth: true, desc: "List the user's bots." },
          { method: 'POST',  path: '/v1/bots',                    auth: true, desc: 'Create a new bot.' },
          { method: 'GET',   path: '/v1/bots/{botId}',            auth: true, desc: 'Get a single bot.' },
          { method: 'PUT',   path: '/v1/bots/{botId}',            auth: true, desc: 'Update bot name/description.' },
          { method: 'DELETE',path: '/v1/bots/{botId}',            auth: true, desc: 'Delete a bot.' },
          { method: 'POST',  path: '/v1/bots/{botId}/runs',       auth: true, desc: 'Queue a new bot run (creates pending run).' },
          { method: 'GET',   path: '/v1/bots/{botId}/runs',       auth: true, desc: 'List all runs for a bot.' },
          { method: 'GET',   path: '/v1/bots/poll',               auth: true, desc: 'Desktop Agent: claim the next pending run (SKIP LOCKED).' },
          { method: 'PATCH', path: '/v1/bots/runs/{runId}',       auth: true, desc: 'Desktop Agent: update run status / post result.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-10" />

      {/* Workspaces */}
      <section className="mb-12" id="workspaces">
        <div className="flex items-center gap-3 mb-5">
          <Briefcase size={18} className="text-cyan-400" />
          <h2 className="text-xl font-bold text-white">Workspaces</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Workspaces organise run history. Create separate workspaces for personal projects,
          work, or team use cases.
        </p>
        <EndpointTable rows={[
          { method: 'GET',    path: '/v1/workspaces',                              auth: true, desc: 'List workspaces.' },
          { method: 'POST',   path: '/v1/workspaces',                              auth: true, desc: 'Create a workspace.' },
          { method: 'GET',    path: '/v1/workspaces/{workspaceId}',                auth: true, desc: 'Get a workspace.' },
          { method: 'PATCH',  path: '/v1/workspaces/{workspaceId}',                auth: true, desc: 'Rename a workspace.' },
          { method: 'DELETE', path: '/v1/workspaces/{workspaceId}',                auth: true, desc: 'Delete a workspace.' },
          { method: 'GET',    path: '/v1/workspaces/{workspaceId}/runs',           auth: true, desc: 'List runs in a workspace.' },
          { method: 'POST',   path: '/v1/workspaces/{workspaceId}/runs',           auth: true, desc: 'Save a run record to a workspace.' },
          { method: 'GET',    path: '/v1/workspaces/{workspaceId}/runs/{runId}',   auth: true, desc: 'Get a single run.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-10" />

      {/* Marketplace */}
      <section className="mb-12" id="marketplace">
        <div className="flex items-center gap-3 mb-5">
          <ShoppingBag size={18} className="text-pink-400" />
          <h2 className="text-xl font-bold text-white">Marketplace</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Browse, install, and uninstall Mini-Apps. The browse endpoints are public
          — no auth required. Install/uninstall require a JWT.
        </p>
        <EndpointTable rows={[
          { method: 'GET',    path: '/v1/marketplace',                     auth: false, desc: 'Browse all published Mini-Apps.' },
          { method: 'GET',    path: '/v1/marketplace/{appId}',             auth: false, desc: 'Get Mini-App detail.' },
          { method: 'GET',    path: '/v1/marketplace/installed',           auth: true,  desc: 'List installed Mini-Apps for the current user.' },
          { method: 'POST',   path: '/v1/marketplace/{appId}/install',     auth: true,  desc: 'Install a Mini-App.' },
          { method: 'DELETE', path: '/v1/marketplace/{appId}/install',     auth: true,  desc: 'Uninstall a Mini-App.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-10" />

      {/* Errors */}
      <section className="mb-10" id="errors">
        <div className="flex items-center gap-3 mb-5">
          <AlertCircle size={18} className="text-rose-400" />
          <h2 className="text-xl font-bold text-white">Error Format</h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          All error responses use a consistent envelope. The <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">code</code> field is
          machine-readable; the <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">message</code> is human-readable.
        </p>
        <CodeBlock lang="json" code={`{
  "code": "RATE_LIMIT_EXCEEDED",
  "message": "rate limit exceeded — you have sent too many requests"
}`} />
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">HTTP Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Code</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">When</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['400', 'INVALID_REQUEST', 'Malformed JSON or missing required fields.'],
                ['401', 'UNAUTHORIZED', 'Missing, expired, or invalid JWT / API key.'],
                ['403', 'PERMISSION_DENIED', 'Valid auth but insufficient permissions.'],
                ['404', 'NOT_FOUND', 'Resource does not exist or is not owned by this user.'],
                ['409', 'CONFLICT', 'Duplicate resource (e.g. device name already taken).'],
                ['429', 'RATE_LIMIT_EXCEEDED', 'Too many requests for your plan tier.'],
                ['500', 'INTERNAL_SERVER_ERROR', 'Unexpected server error.'],
              ].map(([status, code, when], i) => (
                <tr key={code} className={`${i % 2 === 0 ? '' : 'bg-white/[0.02]'} border-b border-white/5 last:border-0`}>
                  <td className="px-4 py-3 font-mono text-xs text-gray-400">{status}</td>
                  <td className="px-4 py-3 font-mono text-xs text-rose-300">{code}</td>
                  <td className="px-4 py-3 text-xs text-gray-400">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rate limits */}
        <div className="mt-8">
          <h3 className="text-base font-bold text-white mb-4">Rate Limits</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Rate limiting uses a sliding-window algorithm per user. Limits are plan-aware:
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Plan</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Requests / min</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Free', '60', 'text-gray-300'],
                  ['Pro', '600', 'text-indigo-300'],
                  ['Enterprise', '6,000', 'text-purple-300'],
                ].map(([plan, rpm, color]) => (
                  <tr key={plan} className="border-b border-white/5 last:border-0">
                    <td className={`px-4 py-3 text-sm font-medium ${color}`}>{plan}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{rpm} req/min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
