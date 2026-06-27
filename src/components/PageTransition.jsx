import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PageTransition({ children }) {
  const wrapper = useRef(null)

  useEffect(() => {
    if (!wrapper.current) return
    gsap.fromTo(
      wrapper.current,
      { autoAlpha: 0, y: 24 },
      { duration: 0.8, autoAlpha: 1, y: 0, ease: 'power3.out' }
    )
  }, [children])

  return <div ref={wrapper}>{children}</div>
}
