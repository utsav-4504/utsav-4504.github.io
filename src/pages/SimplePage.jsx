import { brand } from '../data/siteData'

export default function SimplePage({ title, children }) {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">{title}</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
        <div className="site-body mx-auto mt-12">{children}</div>
      </section>
    </main>
  )
}
