import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'swiper/css'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials({ testimonials }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="border-t border-white/6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.38em] text-ivory/40">Client stories</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-ivory sm:text-5xl">
            Thoughtful interiors that leave a lasting impression.
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="border border-white/8 bg-charcoal/50 px-10 py-14 sm:px-16 sm:py-16">
                <p className="font-serif text-2xl font-light italic leading-relaxed text-ivory/90 sm:text-3xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-10 space-y-1 text-sm text-ivory/50">
                  <p className="font-medium uppercase tracking-[0.2em] text-ivory">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
