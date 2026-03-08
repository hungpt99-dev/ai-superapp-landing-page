import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Integrations from '../components/Integrations'
import Platforms from '../components/Platforms'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Integrations />
      <Platforms />
      <Pricing />
      <CTA />
    </main>
  )
}
