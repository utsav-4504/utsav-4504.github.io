import { brand, team, awards } from '../data/siteData'

export default function About() {
  return (
    <main className="bg-site-white pt-28 text-site-black">
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="site-section-title">About</h1>
        <p className="site-brand-line mt-6">{brand.name}</p>
        <p className="site-body mx-auto mt-12 text-center">
          Utsav is a luxury interior design studio creating bespoke apartments, farmhouses, corporate offices, and
          hospitality environments with timeless minimalism and meticulous craft.
        </p>
      </section>

      <section className="border-t border-site-border px-6 py-16">
        <div className="mx-auto max-w-2xl">
          {team.map((member) => (
            <div key={member.name} className="mb-10 text-center">
              <p className="site-heading-serif text-2xl">{member.name}</p>
              <p className="site-brand-line mt-2">{member.role}</p>
            </div>
          ))}
          <ul className="mt-12 space-y-4 text-center text-sm text-site-gray">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
