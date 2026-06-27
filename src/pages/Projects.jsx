import { Link } from 'react-router-dom'
import { portfolioSections, brand } from '../data/siteData'

export default function Projects() {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">Portfolio</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
      </section>

      <div className="mx-auto grid max-w-4xl gap-12 px-6 pb-24 sm:grid-cols-2">
        {portfolioSections.map((section) => (
          <Link key={section.id} to={`/#${section.id}`} className="group block text-center">
            <img
              src={section.featured[0]}
              alt={section.title}
              className="aspect-[4/3] w-full object-cover"
            />
            <h2 className="site-heading-serif mt-6 text-2xl group-hover:opacity-60">{section.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
