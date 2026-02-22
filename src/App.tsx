import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import DocsLayout from './pages/docs/DocsLayout'
import OverviewPage from './pages/docs/OverviewPage'
import QuickstartPage from './pages/docs/QuickstartPage'
import SDKPage from './pages/docs/SDKPage'
import APIPage from './pages/docs/APIPage'

function LandingLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to="/docs/overview" replace />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="quickstart" element={<QuickstartPage />} />
          <Route path="sdk" element={<SDKPage />} />
          <Route path="api" element={<APIPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
