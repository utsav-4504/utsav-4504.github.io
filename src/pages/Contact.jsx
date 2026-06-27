import { brand } from '../data/siteData'

export default function Contact() {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">Contact</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>

        <div className="mt-12 space-y-2 text-sm text-site-gray">
          {brand.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="mt-6">
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
          </p>
          <p>
            <a href={`mailto:${brand.email}`} className="underline">
              {brand.email}
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl border-t border-site-border px-6 py-16">
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-site-gray">Name</label>
            <input
              type="text"
              className="w-full border border-site-border px-4 py-3 text-sm focus:border-site-black"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-site-gray">Email</label>
            <input
              type="email"
              className="w-full border border-site-border px-4 py-3 text-sm focus:border-site-black"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-site-gray">Message</label>
            <textarea
              rows={5}
              className="w-full border border-site-border px-4 py-3 text-sm focus:border-site-black"
              placeholder="Tell us about your project"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-site-black bg-site-black py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-transparent hover:text-site-black"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  )
}
