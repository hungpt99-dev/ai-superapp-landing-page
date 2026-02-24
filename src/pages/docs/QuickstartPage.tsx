import { NavLink } from 'react-router-dom'
import { Download, LogIn, Cpu, Puzzle, ArrowRight, CheckCircle, Terminal, Globe } from 'lucide-react'

const STEPS = [
  {
    icon: Download,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10 border-indigo-400/20',
    step: '01',
    title: 'Install the Desktop Agent',
    desc: 'Download and install the AgentHub Desktop Agent for your OS. The agent runs as a background process and registers itself with the backend.',
    code: `# macOS — download from the releases page
# Or build from source:
git clone https://github.com/agenthub/ai-super-app-desktop
cd ai-super-app-desktop/apps/desktop
npm install && npm run dev`,
    note: 'The desktop client is fully open source. You can inspect and build it yourself.',
  },
  {
    icon: LogIn,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    step: '02',
    title: 'Create an account',
    desc: 'Register at the web dashboard. The Free plan gives you 1 device, 3 agents, and 100 AI runs per month — no credit card required.',
    code: `# Using the REST API directly:
curl -X POST https://api.agenthub.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"email":"you@example.com","password":"secret"}'`,
    note: null,
  },
  {
    icon: Cpu,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    step: '03',
    title: 'Connect your AI provider',
    desc: 'Open the Desktop Agent settings and add your API key for OpenAI, Anthropic, or any compatible provider. Your key is stored locally and never sent to our servers.',
    code: `// The agent reads your key from local encrypted storage.
// It calls your AI provider directly — the backend never sees your prompts.
//
// Supported providers:
// - OpenAI (gpt-4o, gpt-4-turbo, ...)
// - Anthropic (claude-3-5-sonnet, ...)
// - Any OpenAI-compatible endpoint`,
    note: 'Your prompts go directly from your machine to your AI provider.',
  },
  {
    icon: Puzzle,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
    step: '04',
    title: 'Install your first agent',
    desc: 'Open the Marketplace in the Web Dashboard, pick an agent (try "SEO Writer" or "Code Assistant"), review its permissions, and click Install.',
    code: `# Install via the API:
curl -X POST https://api.agenthub.com/v1/marketplace/seo-writer/install \\
  -H "Authorization: Bearer <your-jwt>"`,
    note: null,
  },
  {
    icon: Globe,
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
    step: '05',
    title: 'Run it from the Dashboard',
    desc: 'Navigate to Bots → New Bot, set a goal, and click Run. The backend queues the task; your Desktop Agent polls for pending runs, executes the agent graph locally, and streams progress and the final result back via the agent protocol endpoints.',
    code: `# Queue a bot run:
curl -X POST https://api.agenthub.com/v1/bots/{botId}/runs \\
  -H "Authorization: Bearer <your-jwt>" \\
  -H "Content-Type: application/json" \\
  -d '{"goal":"Write a 500-word blog post about TypeScript generics"}'`,
    note: 'The agent polls every 5 seconds. Runs appear in your history in real time.',
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
          Get from zero to running your first AI task in under 5 minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="glass rounded-xl p-5 mb-10 flex flex-col gap-3">
        <p className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <CheckCircle size={15} className="text-green-400" />
          Prerequisites
        </p>
        <ul className="flex flex-col gap-2 text-sm text-gray-400 ml-6 list-disc">
          <li>macOS 13+, Windows 11, or Ubuntu 22.04</li>
          <li>Node.js 20+ (for building from source)</li>
          <li>An API key from OpenAI, Anthropic, or any compatible provider</li>
          <li>A free AgentHub account</li>
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
              Learn the defineModule API and publish your own agent to thousands of users.
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
              Programmatically manage devices, queue bot runs, and retrieve results via REST.
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
