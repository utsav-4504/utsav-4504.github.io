import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard({ project }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return
    gsap.from(cardRef.current, {
      y: 24,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 92%',
      },
    })
  }, [])

  return (
    <article
      ref={cardRef}
      className="group overflow-hidden rounded-sm border border-white/8 bg-charcoal transition duration-500 hover:border-champagne/40"
    >
      <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-ivory/50">{project.category}</p>
            <h3 className="mt-2 font-serif text-2xl text-ivory">{project.title}</h3>
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-6">
        <p className="text-sm leading-relaxed text-ivory/55">{project.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-ivory/40">
          <span>{project.location}</span>
          <span className="text-champagne">•</span>
          <span>{project.timeline}</span>
        </div>
      </div>
    </article>
  )
}
