import { NavLink } from 'react-router-dom'
import { ArrowRight, Monitor, Globe, Server, Puzzle, Shield, Bot } from 'lucide-react'

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
          AgentHub is a platform that brings a real AI assistant to your desktop and makes
          it controllable from any browser — with a growing ecosystem of agents you
          can install, run, and build.
        </p>
      </div>

      <hr className="border-white/10 mb-10" />

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Architecture</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          The platform has three independent layers. Each layer has a clear, single
          responsibility:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: Monitor,
              color: 'text-indigo-400',
              bg: 'bg-indigo-400/10 border-indigo-400/20',
              title: 'Desktop Agent',
              subtitle: 'Runs on your machine',
              desc: 'The Electron + React desktop client. Executes agents, talks directly to your AI provider, and polls the backend for bot tasks.',
            },
            {
              icon: Server,
              color: 'text-purple-400',
              bg: 'bg-purple-400/10 border-purple-400/20',
              title: 'Go Backend',
              subtitle: 'Management API only',
              desc: 'Handles auth, device registration, bot task queuing, workspaces, and marketplace. It never sees your AI prompts or outputs.',
            },
            {
              icon: Globe,
              color: 'text-cyan-400',
              bg: 'bg-cyan-400/10 border-cyan-400/20',
              title: 'Web Dashboard',
              subtitle: 'Control from any browser',
              desc: 'A React web app that lets you manage devices, create bots, monitor runs, and browse the agent marketplace from any browser.',
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
          <p className="text-gray-500 mb-4 font-sans text-xs uppercase tracking-widest">Request flow</p>
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-indigo-400 font-semibold">Web Dashboard</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-purple-400 font-semibold">POST /v1/bots/&#123;id&#125;/runs</span>
              <span className="text-gray-600">──►</span>
              <span className="text-cyan-400">Backend (queues task)</span>
            </div>
            <div className="flex items-center gap-3 ml-8">
              <span className="text-gray-600">▼</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-indigo-400 font-semibold">Desktop Agent</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-purple-400 font-semibold">GET /v1/bots/poll</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-cyan-400">Claims pending run</span>
            </div>
            <div className="flex items-center gap-3 ml-8">
              <span className="text-gray-600">▼</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-indigo-400 font-semibold">Desktop Agent</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-green-400 font-semibold">AI Provider directly</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-cyan-400">Your OpenAI / Anthropic key</span>
            </div>
            <div className="flex items-center gap-3 ml-8">
              <span className="text-gray-600">▼</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-indigo-400 font-semibold">Desktop Agent</span>
              <span className="text-gray-600">──────►</span>
              <span className="text-purple-400 font-semibold">PATCH /v1/bots/runs/&#123;id&#125;</span>
              <span className="text-gray-600">──►</span>
              <span className="text-cyan-400">Reports result</span>
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
              icon: Puzzle,
              color: 'text-purple-400',
              title: 'Agents',
              desc: 'Self-contained AI tools built with the TypeScript SDK. Each agent declares its required permissions upfront. Users install them from the marketplace with one click. Developers earn 70% of every sale.',
            },
            {
              icon: Bot,
              color: 'text-indigo-400',
              title: 'Bots',
              desc: 'Bots are automated tasks you configure in the Dashboard and queue to run on your Desktop Agent. A bot has a name, a goal, and a run history. The agent polls for pending bot runs, executes them locally, and reports the result back.',
            },
            {
              icon: Shield,
              color: 'text-green-400',
              title: 'Permissions',
              desc: 'Every Mini-App requests specific capabilities (ai.generate, storage.read, computer.files, etc.). The permission engine enforces these at runtime — a Mini-App cannot access anything it has not declared.',
            },
            {
              icon: Globe,
              color: 'text-cyan-400',
              title: 'Workspaces',
              desc: 'Workspaces are organisational containers for your runs and history. You can have multiple workspaces (personal, work, team) and filter run history by workspace.',
            },
            {
              icon: Monitor,
              color: 'text-amber-400',
              title: 'Devices',
              desc: 'Each installation of the Desktop Agent is a registered device. You can have multiple devices (laptop, desktop, home server) connected to the same account and see which ones are online from the Dashboard.',
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
              desc: 'Install the Desktop Agent and run your first agent in under 5 minutes.',
              badge: 'Start here',
              badgeColor: 'bg-indigo-600 text-white',
            },
            {
              to: '/docs/sdk',
              title: 'SDK Reference',
              desc: 'Full TypeScript SDK documentation for building your own agents.',
              badge: 'Developers',
              badgeColor: 'bg-purple-600/30 text-purple-300',
            },
            {
              to: '/docs/api',
              title: 'REST API',
              desc: 'Complete API reference for devices, bots, workspaces, and the marketplace.',
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
