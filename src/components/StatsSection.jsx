import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StatsSection({ stats }) {
  const container = useRef(null)

  useEffect(() => {
    if (!container.current) return
    const items = container.current.querySelectorAll('[data-value]')
    items.forEach((item) => {
      const endValue = Number(item.dataset.value)
      const counter = { value: 0 }
      gsap.to(counter, {
        value: endValue,
        duration: 2.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          item.textContent = Math.floor(counter.value)
        },
      })
    })
  }, [])

  return (
    <div ref={container} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="border border-white/8 bg-charcoal/60 px-8 py-12 text-center"
          >
            <p className="font-serif text-5xl text-champagne sm:text-6xl" data-value={item.value}>
              0
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-ivory/45">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
