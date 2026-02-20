const STEPS = [
  {
    step: '01',
    title: 'Install the Desktop Agent',
    description:
      'Download the lightweight AI SuperApp desktop client for macOS, Windows, or Linux. One-click install, auto-configured.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    title: 'Add Your AI Keys',
    description:
      'Paste your OpenAI, Anthropic, or Gemini API key. Keys are encrypted and stored only on your machine — never uploaded.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    step: '03',
    title: 'Open the Web App',
    description:
      'Log in from any browser, anywhere. Your Desktop Agent connects via our secure relay — no port forwarding needed.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    title: 'Run Your Mini-Apps',
    description:
      'Launch AI-powered tools from the web. Your desktop executes everything — AI calls, file access, tool use — and streams results back.',
    color: 'from-pink-500 to-rose-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Up and running in <span className="gradient-text">4 steps</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            No server config, no DevOps. Just install, connect your keys, and start building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {STEPS.map(({ step, title, description, color }) => (
            <div
              key={step}
              className="glass rounded-2xl p-7 hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-extrabold text-sm">{step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-14 glass rounded-2xl p-6">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">Execution flow example</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-center">
            {[
              { label: 'You type a prompt',        note: 'in the web app',               emoji: '✍️' },
              { label: 'Relay forwards it',         note: 'encrypted, no content stored', emoji: '🔒' },
              { label: 'Desktop runs the logic',    note: 'calls your AI provider',       emoji: '⚡' },
              { label: 'Result streams back',       note: 'token by token in your browser', emoji: '📡' },
            ].map((item, i, arr) => (
              <div key={item.label} className="flex items-center gap-3 flex-1">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.note}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="hidden sm:block text-gray-700 text-xl shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
