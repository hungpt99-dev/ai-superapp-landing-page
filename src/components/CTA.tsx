import { ArrowRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl mb-6">
              <Zap size={24} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Your real AI assistant.<br />
              <span className="gradient-text">Powerful. Managed. Secure.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              20+ Mini-Apps. One dashboard. Security built in.<br />
              Get started for free — no credit card needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all glow hover:scale-105"
              >
                Download Desktop Agent
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/docs"
                className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-gray-200 font-semibold text-base transition-all"
              >
                View documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
