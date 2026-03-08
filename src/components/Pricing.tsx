import { Check, Zap } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'For individual developers and small teams getting started with agent observability.',
    features: [
      'Up to 3 agents',
      '10,000 events / month',
      'Real-time monitoring dashboard',
      'Run history (7 days)',
      'Basic cost tracking',
      'Community support',
    ],
    cta: 'Start free trial',
    ctaStyle: 'glass hover:bg-white/10 text-gray-200',
    highlight: false,
  },
  {
    name: 'Team',
    price: '$99',
    period: 'per month',
    description: 'For growing teams that need full observability, debugging tools, and workflow visualization.',
    features: [
      'Up to 20 agents',
      '100,000 events / month',
      'Full monitoring dashboard',
      'Workflow visualization (DAG)',
      'Run inspector & step-by-step trace',
      'Deterministic run replay',
      'LLM cost tracking & alerts',
      'Run history (30 days)',
      'Priority support',
    ],
    cta: 'Start free trial',
    ctaStyle: 'bg-indigo-600 hover:bg-indigo-500 text-white glow',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For organisations with compliance requirements, high volume, or on-premise needs.',
    features: [
      'Unlimited agents',
      'Unlimited events',
      'Everything in Team',
      'On-premise deployment',
      'SSO / SAML integration',
      'Custom data retention',
      'Dedicated Slack support',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    ctaStyle: 'glass hover:bg-white/10 text-gray-200',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[600px] h-[400px] rounded-full bg-indigo-600/8 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Simple pricing,{' '}
            <span className="gradient-text">no surprises.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Start for free. Scale as your agent fleet grows. No per-seat fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map(({ name, price, period, description, features, cta, ctaStyle, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 ${
                highlight
                  ? 'bg-indigo-600/10 border border-indigo-500/40 glow'
                  : 'glass'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                    <Zap size={11} />
                    Most popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-bold text-gray-100 text-lg mb-1">{name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-white">{price}</span>
                  <span className="text-gray-500 text-sm">{period}</span>
                </div>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>

              <ul className="flex flex-col gap-3">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-auto text-center px-5 py-3 rounded-xl font-semibold text-sm transition-all ${ctaStyle}`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-600 text-xs mt-8">
          All plans include the open-source desktop client. No credit card required for Free plan.
        </p>
      </div>
    </section>
  )
}
