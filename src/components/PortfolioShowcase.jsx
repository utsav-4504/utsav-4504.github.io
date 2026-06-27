import { useEffect, useRef, useState, forwardRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioSections, imageFallback } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const SafeImage = forwardRef(function SafeImage({ src, alt, className }, ref) {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => {
        if (e.currentTarget.src !== imageFallback) {
          e.currentTarget.src = imageFallback
        }
      }}
    />
  )
})

function ImageLightbox({ src, alt, onClose, isOpen, origin, currentImageIndex, onNextImage, onPrevImage, allImages }) {
  const overlayRef = useRef(null)
  const imageRef = useRef(null)
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    if (!isOpen) {
      if (!isVisible) return

      const closeTimeline = gsap.timeline({
        defaults: { duration: 0.5, ease: 'power3.inOut' },
        onComplete: () => setIsVisible(false),
      })

      closeTimeline
        .to(imageRef.current, {
          left: origin?.x ?? 0,
          top: origin?.y ?? 0,
          width: origin?.width ?? 0,
          height: origin?.height ?? 0,
          xPercent: 0,
          yPercent: 0,
          scale: 0.9,
          opacity: 0,
          filter: 'blur(16px)',
          borderRadius: '1.5rem',
        })
        .to(
          overlayRef.current,
          {
            opacity: 0,
            backdropFilter: 'blur(0px)',
          },
          '-=0.2'
        )

      return
    }

    setIsVisible(true)

    gsap.set(overlayRef.current, {
      opacity: 0,
      backdropFilter: 'blur(0px)',
    })
    gsap.set(imageRef.current, {
      position: 'fixed',
      left: origin?.x ?? '50%',
      top: origin?.y ?? '50%',
      width: origin?.width ?? 0,
      height: origin?.height ?? 0,
      xPercent: 0,
      yPercent: 0,
      scale: 0.9,
      opacity: 0,
      filter: 'blur(16px)',
      borderRadius: '1.5rem',
      transformOrigin: 'center center',
      zIndex: 110,
    })

    const openTimeline = gsap.timeline({
      defaults: { duration: 0.7, ease: 'expo.out' },
    })

    openTimeline
      .to(overlayRef.current, {
        opacity: 1,
        backdropFilter: 'blur(20px)',
      })
      .to(
        imageRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          width: 'min(90vw, 960px)',
          height: 'auto',
          maxHeight: '85vh',
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          borderRadius: '2rem',
        },
        '-=0.25'
      )

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNextImage()
      if (event.key === 'ArrowLeft') onPrevImage()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, isVisible, onClose, origin, onNextImage, onPrevImage])

  useEffect(() => {
    if (!isOpen || !allImages[currentImageIndex]) return

    const newSrc = allImages[currentImageIndex]
    if (newSrc !== src) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Update lightbox to show the new image
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
        },
      })
    }
  }, [currentImageIndex, isOpen, allImages, src])

  if (!isVisible || !src) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 text-3xl text-white/90 transition hover:text-white"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Left Arrow */}
      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
        onClick={(e) => {
          e.stopPropagation()
          onPrevImage()
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
        onClick={(e) => {
          e.stopPropagation()
          onNextImage()
        }}
        aria-label="Next image"
      >
        ›
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-4 z-20 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
        {currentImageIndex + 1} / {allImages.length}
      </div>

      <div className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <SafeImage
          ref={imageRef}
          src={src}
          alt={alt}
          className="max-h-[85vh] w-full rounded-4xl border border-white/10 object-contain shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
        />
      </div>
    </div>
  )
}

export default function PortfolioShowcase() {
  const [lightbox, setLightbox] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scopeRef = useRef(null)
  const sectionRefs = useRef([])
  const featuredImageRefs = useRef([])
  const galleryItemRefs = useRef([])

  // Collect all images from all sections
  const allImages = portfolioSections.flatMap((section) => [
    ...section.featured,
    ...section.gallery,
  ])

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const openLightbox = (event, src, alt) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const imageIndex = allImages.indexOf(src)

    setCurrentImageIndex(imageIndex >= 0 ? imageIndex : 0)
    setLightbox({
      src,
      alt,
      origin: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      },
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 70,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              end: 'bottom 74%',
              scrub: 0.4,
              once: true,
            },
          }
        )

        const featuredImages = featuredImageRefs.current.filter((_, imageIndex) => imageIndex >= index * 2 && imageIndex < index * 2 + 2)
        featuredImages.forEach((image) => {
          if (!image) return

          gsap.to(image, {
            yPercent: -10,
            scale: 1.04,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        })
      })

      galleryItemRefs.current.forEach((item) => {
        if (!item) return

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 36,
            scale: 0.96,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            delay: Math.random() * 0.15,
            scrollTrigger: {
              trigger: item,
              start: 'top 93%',
              end: 'bottom 80%',
              once: true,
            },
          }
        )
      })
    }, scopeRef.current)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      ctx.revert()
    }
  }, [])

  const handleFeaturedMove = (event, card) => {
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    gsap.to(card, {
      rotateX: -y * 8,
      rotateY: x * 8,
      scale: 1.02,
      transformPerspective: 1200,
      duration: 0.6,
      ease: 'power3.out',
    })
  }

  const handleFeaturedLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
    })
  }

  return (
    <section id="portfolio" ref={scopeRef} className="relative overflow-hidden bg-site-white px-4 py-20 scroll-mt-28 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-112 w-md -translate-x-1/4 translate-y-10 rounded-full bg-linear-to-br from-site-black/5 via-transparent to-transparent blur-3xl lg:block" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-site-black/60">Selected projects</p>
          <h2 className="site-section-title mt-4 text-site-black">Designed to feel effortless, crafted to last.</h2>
          <p className="site-body mt-6 text-site-black/75">
            Each space is composed around the client’s rhythm, bringing together material richness, practical flow, and timeless atmosphere.
          </p>
        </div>
      </div>

      {portfolioSections.map((section, index) => (
        <article
          key={section.id}
          id={section.id}
          ref={(element) => {
            sectionRefs.current[index] = element
          }}
          className="portfolio-section relative border-t border-site-border py-16 sm:py-24"
        >
          <div className="pointer-events-none absolute left-0 top-8 h-40 w-40 rounded-full bg-site-black/5 blur-3xl opacity-80" />
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
            <div className="order-2 lg:order-1">
              <p className="text-[10px] uppercase tracking-[0.35em] text-site-black/60">{section.title}</p>
              <h3 className="site-heading-serif mt-4 text-2xl text-site-black sm:text-3xl">{section.headline}</h3>
              <p className="site-body mt-6 text-site-black/80">{section.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-site-border bg-site-light px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-site-black/70">
                  Tailored layouts
                </span>
                <span className="rounded-full border border-site-border bg-site-light px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-site-black/70">
                  Premium finishes
                </span>
                <span className="rounded-full border border-site-border bg-site-light px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-site-black/70">
                  Atmosphere-first design
                </span>
              </div>
            </div>

            <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
              {section.featured.slice(0, 2).map((src, i) => (
                <button
                  key={`${section.id}-featured-${i}`}
                  type="button"
                  className="portfolio-featured group relative overflow-hidden rounded-[1.75rem] border border-site-border bg-site-light shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_45px_90px_rgba(0,0,0,0.12)]"
                  onClick={(event) => openLightbox(event, src, section.title)}
                  onMouseMove={(event) => handleFeaturedMove(event, event.currentTarget)}
                  onMouseLeave={(event) => handleFeaturedLeave(event.currentTarget)}
                >
                  <SafeImage
                    ref={(element) => {
                      featuredImageRefs.current[index * 2 + i] = element
                    }}
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    className="portfolio-featured-image aspect-4/5 w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black/30 group-hover:opacity-100">
                    <span className="translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                      View fullsize
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-2 px-4 sm:gap-3 sm:px-6 md:grid-cols-3 lg:px-10">
            {section.gallery.map((src, i) => (
              <button
                key={`${section.id}-gallery-${i}`}
                type="button"
                className="portfolio-gallery-item group relative overflow-hidden rounded-[1.25rem] border border-site-border bg-site-light shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_40px_90px_rgba(0,0,0,.12)]"
                onClick={(event) => openLightbox(event, src, section.title)}
                ref={(element) => {
                  galleryItemRefs.current[index * 10 + i] = element
                }}
              >
                <SafeImage
                  src={src}
                  alt={`${section.title} gallery ${i + 1}`}
                  className="aspect-square w-full object-cover scale-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-site-black/20 via-transparent to-transparent opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </article>
      ))}

      <ImageLightbox src={allImages[currentImageIndex]} alt={lightbox?.alt} onClose={() => setLightbox(null)} isOpen={Boolean(lightbox)} origin={lightbox?.origin} currentImageIndex={currentImageIndex} onNextImage={handleNextImage} onPrevImage={handlePrevImage} allImages={allImages} />
    </section>
  )
}
