import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { imageFallback } from '../data/siteData'
import { pillars } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

export default function CategoryPillars() {
  useEffect(() => {
    const cards = document.querySelectorAll('.pillar-card')
    if (!cards.length) return

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      })

      const img = card.querySelector('img')
      if (img) {
        gsap.from(img, {
          scale: 1.12,
          duration: 1.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            scrub: true,
          },
        })
      }
    })
  }, [])

  return (
    <section className="bg-site-white px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-site-black/60 sm:text-[10px]">Our interior pillars</p>
          <h2 className="site-section-title mt-4 text-site-black">
            Refined spaces for every project type
          </h2>
          <p className="site-body mx-auto mt-4 text-sm text-site-black/70 sm:mt-6 sm:text-base">
            Discover how residential, office, and hospitality interiors are composed around calm materials, considered light, and effortless flow.
          </p>
        </div>

        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {pillars.map((pillar, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={pillar.id}
                className={`pillar-card group relative grid gap-4 items-center overflow-hidden rounded-2xl border border-site-border bg-white/95 p-4 shadow-[0_35px_70px_rgba(20,20,20,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_45px_100px_rgba(20,20,20,0.08)] sm:gap-6 sm:rounded-4xl sm:p-6 lg:grid-cols-[1.1fr_0.9fr] ${
                  reverse ? 'lg:grid-cols-[0.9fr_1.1fr]' : ''
                }`}
              >
                <div className="absolute -top-8 right-6 h-24 w-24 rounded-full bg-linear-to-br from-site-black/10 to-transparent blur-2xl opacity-50" />
                <div className={`overflow-hidden rounded-xl border border-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)] sm:rounded-[1.75rem] ${reverse ? 'lg:order-2' : ''}`}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    onError={(e) => {
                      if (e.currentTarget.src !== imageFallback) e.currentTarget.src = imageFallback
                    }}
                  />
                </div>
                <div className={`px-1 py-1 sm:px-4 sm:py-2 ${reverse ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-site-border bg-site-black/5 text-xs font-semibold uppercase tracking-[0.28em] text-site-black/70 sm:h-10 sm:w-10 sm:text-sm">
                      {index + 1}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.35em] text-site-black/50 sm:text-[10px]">
                      Featured
                    </span>
                  </div>
                  <h3 className="site-heading-serif mt-3 text-2xl font-normal capitalize text-site-black sm:mt-4 sm:text-3xl lg:text-[2.25rem]">
                    {pillar.title}
                  </h3>
                  <p className="site-body mt-3 text-sm text-site-gray/90 sm:mt-6 sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
