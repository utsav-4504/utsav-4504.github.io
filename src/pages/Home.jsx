import HeroSection from '../components/HeroSection'
import PhilosophyBanner from '../components/PhilosophyBanner'
import CategoryPillars from '../components/CategoryPillars'
import PortfolioShowcase from '../components/PortfolioShowcase'

export default function Home() {
  return (
    <main className="bg-site-white text-site-black">
      <HeroSection />
      <PhilosophyBanner />
      <CategoryPillars />
      <PortfolioShowcase />
    </main>
  )
}
