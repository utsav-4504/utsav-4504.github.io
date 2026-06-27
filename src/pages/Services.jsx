import { brand, services } from '../data/siteData'

export default function Services() {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">Product Sourcing</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
      </section>

      <section className="mx-auto max-w-2xl space-y-16 px-6 pb-24">
        {services.map((service) => (
          <article key={service.id} className="text-center">
            <h2 className="site-heading-serif text-2xl">{service.title}</h2>
            <p className="site-body mx-auto mt-6">{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
