import { MessageSquare, Cloud, Monitor, X, Check } from 'lucide-react'

const PROBLEMS = [
  {
    icon: MessageSquare,
    title: 'Messaging Bot Platforms',
    examples: 'Telegram bots, Zalo bots',
    pains: ['Limited UI & workflows', 'Platform dependency', 'No advanced automation'],
  },
  {
    icon: Cloud,
    title: 'AI SaaS Platforms',
    examples: 'ChatGPT, Claude, Jasper',
    pains: ['Extra cloud layer in the middle', 'Your data stored by the SaaS', 'No customization'],
  },
  {
    icon: Monitor,
    title: 'Pure Desktop Apps',
    examples: 'LM Studio, local Ollama',
    pains: ['Not accessible remotely', 'No centralized UI', 'No ecosystem'],
  },
]

export default function Problem() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nobody has built a <span className="gradient-text">real AI assistant</span> yet.
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Existing tools are chatbots or cloud SaaS — not a real assistant that runs on your machine and grows with mini-apps.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PROBLEMS.map(({ icon: Icon, title, examples, pains }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Icon size={18} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-100">{title}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">{examples}</p>
              <ul className="flex flex-col gap-2">
                {pains.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                    <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solution summary */}
        <div className="glass rounded-2xl p-8 glow text-center">
          <p className="text-sm text-indigo-400 font-semibold uppercase tracking-widest mb-3">The Solution</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
            AI SuperApp is your <span className="gradient-text">real AI assistant</span>. Finally.
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'A real AI assistant, not a chatbot',
              'Agent runs on your machine, no extra cloud layer',
              'AI runs 100% on your own machine',
              'Supercharged by 20+ Mini-Apps',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-left text-gray-300 bg-white/5 rounded-xl px-4 py-3">
                <Check size={15} className="text-indigo-400 mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
