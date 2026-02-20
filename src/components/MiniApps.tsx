import { ArrowRight } from 'lucide-react'

const APPS = [
  {
    emoji: '✍️',
    name: 'SEO Writer',
    category: 'Writing',
    description: 'Generate fully optimized articles with research, outlines, and meta tags in one click.',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/20',
    tag: 'Popular',
  },
  {
    emoji: '💻',
    name: 'Code Assistant',
    category: 'Development',
    description: 'Review, explain, refactor, and generate code across any language — with full file access.',
    color: 'from-indigo-500/20 to-purple-500/20',
    border: 'border-indigo-500/20',
    tag: 'New',
  },
  {
    emoji: '📊',
    name: 'Document Analyzer',
    category: 'Productivity',
    description: 'Upload PDFs, contracts, or spreadsheets. Ask questions and get structured summaries.',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/20',
    tag: null,
  },
  {
    emoji: '💬',
    name: 'Sales Reply Bot',
    category: 'Automation',
    description: 'Craft perfect customer replies and follow-up messages trained on your brand voice.',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    tag: null,
  },
  {
    emoji: '🔐',
    name: 'Crypto Toolkit',
    category: 'Finance',
    description: 'Analyze on-chain data, summarize news, and generate trading reports with AI assistance.',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/20',
    tag: 'Beta',
  },
  {
    emoji: '🎯',
    name: 'Content Scheduler',
    category: 'Marketing',
    description: 'Plan, generate, and schedule social content across multiple platforms automatically.',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
    tag: 'Soon',
  },
]

export default function MiniApps() {
  return (
    <section id="mini-apps" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Mini-App Marketplace</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            One platform,{' '}
            <span className="gradient-text">infinite AI tools.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Install community-built Mini-Apps or build your own with the open SDK.
            Developers earn 70% of every sale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS.map(({ emoji, name, category, description, color, border, tag }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} hover:scale-[1.02] transition-all group cursor-pointer`}
            >
              {tag && (
                <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-medium">
                  {tag}
                </span>
              )}
              <div className="text-3xl mb-4">{emoji}</div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-bold text-white text-lg">{name}</h3>
                <span className="text-xs text-gray-500">{category}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
              <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* SDK CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-3">Want to build your own Mini-App?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
          >
            Read the SDK documentation <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
