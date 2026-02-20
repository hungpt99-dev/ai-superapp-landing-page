import { ArrowRight, Shield, Cpu, Globe } from 'lucide-react'

const BADGES = [
  { icon: Shield, label: 'Zero data stored in cloud' },
  { icon: Cpu,    label: 'Runs on your machine'       },
  { icon: Globe,  label: 'Access from anywhere'       },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-pink-600/8 blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Eyebrow */}
      <div className="relative animate-fade-in mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
          Now in Beta — Join the waitlist
        </span>
      </div>

      {/* Headline */}
      <h1
        className="relative max-w-4xl text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight animate-fade-up"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        Your personal{' '}
        <span className="gradient-text">AI runtime</span>,<br />
        accessible from everywhere.
      </h1>

      {/* Sub */}
      <p
        className="relative mt-6 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-up"
        style={{ animationDelay: '0.25s', opacity: 0 }}
      >
        AI SuperApp turns your desktop into a powerful AI execution engine.
        Run Mini-Apps with <strong className="text-white font-medium">your own API keys</strong>,
        stream results to any browser — no token markup, no data leakage.
      </p>

      {/* CTAs */}
      <div
        className="relative mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        <a
          href="#pricing"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all glow hover:glow"
        >
          Get started free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#how-it-works"
          className="px-7 py-3.5 rounded-xl glass hover:bg-white/10 text-gray-200 font-semibold text-base transition-all"
        >
          See how it works
        </a>
      </div>

      {/* Trust badges */}
      <div
        className="relative mt-14 flex flex-wrap justify-center gap-6 animate-fade-up"
        style={{ animationDelay: '0.55s', opacity: 0 }}
      >
        {BADGES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
            <Icon size={15} className="text-indigo-400" />
            {label}
          </div>
        ))}
      </div>

      {/* Hero visual — architecture diagram */}
      <div
        className="relative mt-20 w-full max-w-3xl animate-fade-up"
        style={{ animationDelay: '0.7s', opacity: 0 }}
      >
        <div className="glass rounded-2xl p-6 glow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            {[
              { label: 'Your Browser',   sub: 'Web UI layer',            color: 'from-blue-500 to-cyan-500'    },
              { label: 'Secure Relay',   sub: 'Cloud router only',       color: 'from-indigo-500 to-purple-500' },
              { label: 'Your Desktop',   sub: 'AI execution engine',     color: 'from-purple-500 to-pink-500'  },
              { label: 'AI Provider',    sub: 'Your API key, your cost', color: 'from-pink-500 to-rose-500'   },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-base">{node.label.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-gray-200 whitespace-nowrap">{node.label}</span>
                  <span className="text-gray-500 text-xs whitespace-nowrap">{node.sub}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden sm:flex items-center text-gray-600">
                    <div className="w-8 h-px bg-gradient-to-r from-gray-600 to-gray-500" />
                    <ArrowRight size={14} className="text-gray-500 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
