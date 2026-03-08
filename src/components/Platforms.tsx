import { Cloud, Server, GitBranch, ArrowRight, Check } from 'lucide-react'

const DEPLOYMENTS = [
  {
    icon: Cloud,
    label: 'Cloud (SaaS)',
    badge: 'Recommended',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    headline: 'Up and running in minutes, zero infrastructure.',
    description:
      'Connect your agents to AgentHub Cloud with a single API key. We handle scaling, storage, and uptime — you focus on building and monitoring your agents.',
    highlights: [
      'No infrastructure to manage',
      'Instant setup — one API key',
      'Auto-scaling event ingestion',
      'SOC 2 compliant data handling',
      '99.9% uptime SLA on paid plans',
    ],
    cta: 'Start for free',
    ctaHref: '#pricing',
    gradient: 'from-indigo-600/10 via-purple-600/5 to-transparent',
    border: 'border-indigo-500/20',
    glow: 'glow',
    visual: (
      <div className="glass rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-500">app.agenthub.io — Connected</span>
        </div>
        <div className="p-4 flex flex-col gap-2 text-xs">
          {[
            { key: 'Workspace', val: 'acme-prod' },
            { key: 'Agents registered', val: '12' },
            { key: 'Events today', val: '84,201' },
            { key: 'Plan', val: 'Team' },
          ].map(({ key, val }) => (
            <div key={key} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2">
              <span className="text-gray-500">{key}</span>
              <span className="text-indigo-300 font-mono">{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Server,
    label: 'Self-Hosted',
    badge: 'Full control',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    headline: 'Run AgentHub entirely on your own infrastructure.',
    description:
      'Deploy AgentHub on-prem or in your own cloud account using Docker or Kubernetes. All agent data stays within your network — ideal for regulated industries.',
    highlights: [
      'Docker & Kubernetes support',
      'All data stays in your network',
      'Full audit log access',
      'LDAP / SSO integration',
      'Air-gapped deployment available',
    ],
    cta: 'View self-hosted docs',
    ctaHref: '#docs',
    gradient: 'from-cyan-600/10 via-blue-600/5 to-transparent',
    border: 'border-cyan-500/20',
    glow: 'glow-sm',
    visual: (
      <div className="glass rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
          <Server size={11} className="text-gray-500" />
          <span className="text-xs text-gray-500">docker-compose up</span>
        </div>
        <div className="p-4">
          <pre className="text-xs text-gray-400 leading-relaxed font-mono">{`services:
  agenthub:
    image: agenthub/server:latest
    ports: ["8080:8080"]
    env_file: .env
  postgres:
    image: postgres:16
  redis:
    image: redis:7`}</pre>
        </div>
      </div>
    ),
  },
  {
    icon: GitBranch,
    label: 'Hybrid',
    badge: 'Enterprise',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    headline: 'Keep sensitive data local, use cloud for the rest.',
    description:
      'Run the AgentHub control plane in your VPC while forwarding anonymised telemetry to AgentHub Cloud for cross-team dashboards.',
    highlights: [
      'Sensitive payloads never leave your network',
      'Encrypted event forwarding',
      'Unified cloud dashboard across all regions',
      'Dedicated support & SLA',
      'Custom data-retention policies',
    ],
    cta: 'Talk to sales',
    ctaHref: '#contact',
    gradient: 'from-purple-600/10 via-pink-600/5 to-transparent',
    border: 'border-purple-500/20',
    glow: 'glow-sm',
    visual: (
      <div className="glass rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
          <GitBranch size={11} className="text-gray-500" />
          <span className="text-xs text-gray-500">Hybrid topology</span>
        </div>
        <div className="p-4 flex flex-col gap-2 text-xs">
          {[
            { label: 'Your VPC', desc: 'Raw events + payloads', color: 'text-cyan-400' },
            { label: 'Encrypted relay', desc: 'Anonymised telemetry only', color: 'text-gray-500' },
            { label: 'AgentHub Cloud', desc: 'Dashboards + alerts', color: 'text-indigo-400' },
          ].map(({ label, desc, color }) => (
            <div key={label} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2">
              <span className={`font-medium ${color}`}>{label}</span>
              <span className="text-gray-500">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function Platforms() {
  return (
    <section id="deployment" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[700px] h-[400px] rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Deployment</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Deploy on your terms.<br />
            <span className="gradient-text">Cloud, self-hosted, or hybrid.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            AgentHub fits into your infrastructure — not the other way around. Start in the cloud and migrate to self-hosted whenever you are ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEPLOYMENTS.map(({ icon: Icon, label, badge, badgeColor, headline, description, highlights, cta, ctaHref, gradient, border, glow, visual }) => (
            <div
              key={label}
              className={`relative rounded-2xl p-7 bg-gradient-to-br ${gradient} border ${border} ${glow} flex flex-col gap-6`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">{label}</span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${badgeColor}`}>{badge}</span>
              </div>

              {visual}

              <div>
                <h3 className="text-base font-bold text-white mb-2">{headline}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
                <ul className="flex flex-col gap-2">
                  {highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={13} className="text-indigo-400 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={ctaHref}
                className="group mt-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all border border-white/10"
              >
                {cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="text-gray-400 text-center sm:text-left">
            <strong className="text-white">Not sure which to pick?</strong> Start with Cloud — you can migrate to self-hosted with a single config change.
          </span>
          <a href="#pricing" className="shrink-0 text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
            See pricing <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
