import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import MiniApps from '../components/MiniApps'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <MiniApps />
      <Pricing />
      <CTA />
    </main>
  )
}
