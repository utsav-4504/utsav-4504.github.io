import { brand } from '../data/siteData'

export default function Press() {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">Press</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
        <p className="site-body mx-auto mt-12">
          Press features and media coverage will appear here. For press inquiries, email{' '}
          <a href={`mailto:${brand.email}`} className="text-site-black underline">
            {brand.email}
          </a>
        </p>
      </section>
    </main>
  )
}
