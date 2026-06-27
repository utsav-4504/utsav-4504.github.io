import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SmoothScroll from "./components/SmoothScroll";
import ProjectDetail from './pages/ProjectDetail'
import Press from './pages/Press'
import Blogs from './pages/Blogs'
import SimplePage from './pages/SimplePage'

function RouteContent() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = location.hash.replace('#', '')
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
    return () => clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <>
          <SmoothScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/terms"
          element={
            <SimplePage title="Terms and Condition">
              <p>Terms and conditions for Utsav.</p>
            </SimplePage>
          }
        />
        <Route
          path="/privacy"
          element={
            <SimplePage title="Privacy Policy">
              <p>Privacy policy for Utsav.</p>
            </SimplePage>
          }
        />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <Router>
      <RouteContent />
    </Router>
  )
}

export default App
