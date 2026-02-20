import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Platforms from './components/Platforms'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import MiniApps from './components/MiniApps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Platforms />
        <HowItWorks />
        <Features />
        <MiniApps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
