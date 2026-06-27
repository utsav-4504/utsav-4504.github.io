import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { portfolioSections, brand } from '../data/siteData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const section = useMemo(() => portfolioSections.find((s) => s.id === slug), [slug])

  if (!section) {
    return (
      <main className="bg-site-white px-6 py-32 text-center text-site-black">
        <p>Project not found.</p>
        <Link to="/" className="mt-6 inline-block text-sm uppercase tracking-widest underline">
          Back home
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">{section.title}</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
        <h3 className="site-heading-serif mx-auto mt-12 max-w-2xl text-xl">{section.headline}</h3>
        <p className="site-body mx-auto mt-8">{section.description}</p>
      </section>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {[...section.featured, ...section.gallery].map((src, i) => (
          <img key={`${src}-${i}`} src={src} alt="" className="aspect-square w-full object-cover" />
        ))}
      </div>
      <div className="py-16 text-center">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] underline">
          Back to home
        </Link>
      </div>
    </main>
  )
}
