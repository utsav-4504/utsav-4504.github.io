import { useEffect, useState } from 'react'
import { brand, heroCategories, imageFallback } from '../data/siteData'

export default function HeroSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % heroCategories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToPortfolio = (event) => {
    event.preventDefault()
    const portfolioSection = document.querySelector('#portfolio')
    if (!portfolioSection) return
    const offset = 100
    const top = portfolioSection.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <section className="relative h-screen min-h-150 w-full overflow-hidden">
        {heroCategories.map((cat, i) => (
          <div
            key={cat.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== active}
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="h-full w-full object-cover"
              onError={(e) => {
                if (e.currentTarget.src !== imageFallback) e.currentTarget.src = imageFallback
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-black/20" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/80 sm:text-[10px] lg:text-[11px]">
              Luxury interiors • residential • offices • hospitality
            </p>
            <h1 className="site-heading-serif mt-4 text-3xl font-normal tracking-wide sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {brand.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {brand.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="btn btn-secondary border-white text-white hover:bg-white hover:text-site-black"
              >
                View portfolio
              </a>
              <a
                href="/contact"
                className="btn btn-light"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient from-black/65 to-transparent pb-10 pt-20">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 text-center text-[11px] uppercase tracking-[0.18em] text-white sm:text-xs">
            <span className="font-normal opacity-90">{brand.name}</span>
            {heroCategories.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(i)}
                className={`transition hover:opacity-100 ${
                  i === active ? 'opacity-100 underline underline-offset-4' : 'opacity-70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <a
            href="#intro"
            className="mt-8 block text-center text-[10px] uppercase tracking-[0.35em] text-white/90 hover:text-white"
          >
            Scroll down
          </a>
        </div>
      </section>

      <section id="intro" className="bg-site-white px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-site-black/60">Signature interiors</p>
            <h2 className="site-heading-serif mt-4 text-3xl font-normal text-site-black sm:text-4xl md:text-5xl">
              Quiet luxury, shaped around how you live.
            </h2>
            <p className="site-body mt-6">
              From high-end residences to hospitality spaces, each project is composed around light, texture and everyday rituals to feel timeless and deeply personal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="btn btn-secondary"
              >
                Explore portfolio
              </a>
              <a
                href="/about"
                className="btn btn-primary"
              >
                Meet the studio
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-site-border bg-site-light">
            <div
              className="absolute inset-0 bg-fixed-parallax"
              style={{ backgroundImage: `url(${heroCategories[active].image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/10" />
            <div className="relative flex min-h-80 flex-col justify-end p-8 text-white sm:min-h-95 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/80">Featured mood</p>
              <h3 className="site-heading-serif mt-3 text-2xl sm:text-3xl">
                {heroCategories[active].label}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/85 sm:text-base">
                Refined finishes, sculpted lighting and effortless flow create an elevated sense of calm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
