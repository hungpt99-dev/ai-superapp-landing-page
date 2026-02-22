import { Monitor, Globe, ArrowRight, Check, Apple, AppWindow } from 'lucide-react'

const PLATFORMS = [
  {
    icon: Monitor,
    label: 'Desktop App',
    badge: 'Native',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    headline: 'The full power of AI, running natively on your machine.',
    description:
      'Install the AgentHub desktop client on macOS, Windows, or Linux. All agents, AI calls, and file operations run directly on your hardware — ultra-fast, fully private, no cloud dependency.',
    highlights: [
      'macOS, Windows & Linux',
      'Native performance, no browser overhead',
      'Local file & clipboard access for agents',
      'Works offline for supported agents',
      'Auto-updates in the background',
    ],
    cta: 'Download Desktop App',
    ctaHref: '#pricing',
    os: [
      { icon: Apple,      label: 'macOS'   },
      { icon: AppWindow,  label: 'Windows' },
      { icon: Monitor,    label: 'Linux'   },
    ],
    gradient: 'from-indigo-600/10 via-purple-600/5 to-transparent',
    border: 'border-indigo-500/20',
    glow: 'glow',
    visual: (
      <div className="glass rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <span className="ml-2 text-xs text-gray-600">AgentHub</span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          {[
            { emoji: '✍️', name: 'SEO Writer',     status: 'Running',  color: 'text-green-400'  },
            { emoji: '💻', name: 'Code Assistant', status: 'Idle',     color: 'text-gray-500'   },
            { emoji: '🔍', name: 'Research Agent', status: 'Running',  color: 'text-green-400'  },
          ].map(({ emoji, name, status, color }) => (
            <div key={name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 text-sm">
              <div className="flex items-center gap-2">
                <span>{emoji}</span>
                <span className="text-gray-300">{name}</span>
              </div>
              <span className={`text-xs ${color}`}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Globe,
    label: 'Web App',
    badge: 'Access anywhere',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    headline: 'Control your AI from any browser, on any device.',
    description:
      'Open the AgentHub web dashboard from your phone, tablet, or any computer. Your desktop agent handles all execution — the web app is your remote control, accessible from anywhere in the world.',
    highlights: [
      'Any browser, any device, any network',
      'Real-time streaming from your desktop',
      'Full agent UI rendered in the browser',
      'No installation needed on the remote device',
      'Secure relay — no AI data stored in cloud',
    ],
    cta: 'Open Web App',
    ctaHref: '#pricing',
    os: [],
    gradient: 'from-cyan-600/10 via-blue-600/5 to-transparent',
    border: 'border-cyan-500/20',
    glow: 'glow-sm',
    visual: (
      <div className="glass rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
          <div className="flex-1 bg-white/5 rounded-md px-2 py-1 text-xs text-gray-600">app.agenthub.com</div>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-2">SEO Writer — output</p>
            <div className="space-y-1.5">
              <div className="h-2 rounded bg-white/10 w-full" />
              <div className="h-2 rounded bg-white/10 w-4/5" />
              <div className="h-2 rounded bg-indigo-500/30 w-3/5 animate-pulse-slow" />
            </div>
          </div>
          <p className="text-xs text-center text-gray-600">Streaming from your desktop →</p>
        </div>
      </div>
    ),
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[700px] h-[400px] rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Run anywhere</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Desktop app <span className="text-gray-600">or</span> web app.<br />
            <span className="gradient-text">You choose. Or both.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            AI SuperApp works as a native desktop client <strong className="text-white font-medium">and</strong> as
            a web dashboard. Use whichever fits your workflow — they sync automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PLATFORMS.map(({ icon: Icon, label, badge, badgeColor, headline, description, highlights, cta, ctaHref, os, gradient, border, glow, visual }) => (
            <div
              key={label}
              className={`relative rounded-2xl p-7 bg-gradient-to-br ${gradient} border ${border} ${glow} flex flex-col gap-6`}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">{label}</span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${badgeColor}`}>{badge}</span>
              </div>

              {/* Visual mockup */}
              {visual}

              {/* Copy */}
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

              {/* OS badges */}
              {os.length > 0 && (
                <div className="flex items-center gap-2">
                  {os.map(({ icon: OsIcon, label: osLabel }) => (
                    <div key={osLabel} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                      <OsIcon size={12} />
                      {osLabel}
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <a
                href={ctaHref}
                className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all border border-white/10"
              >
                {cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-8 glass rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="text-gray-400 text-center sm:text-left">
            💡 <strong className="text-white">Pro tip:</strong> Install the desktop app at home, then control it via the web app from your phone or office.
          </span>
          <a href="#pricing" className="shrink-0 text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
            Get both free <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
