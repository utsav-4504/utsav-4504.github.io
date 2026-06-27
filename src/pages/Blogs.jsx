import { brand } from '../data/siteData'

export default function Blogs() {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">Blogs</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
        <p className="site-body mx-auto mt-12">Design insights and studio updates coming soon.</p>
      </section>
    </main>
  )
}
