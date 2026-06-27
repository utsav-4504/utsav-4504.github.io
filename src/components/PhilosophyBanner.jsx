import { brand } from "../data/siteData";

export default function PhilosophyBanner() {
  return (
    <section id="philosophy" className="relative isolate overflow-hidden">
      <div
        className="bg-fixed-parallax absolute inset-0"
        style={{
          backgroundImage: "url('/images/portfolio/farmhouses-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-24 text-white sm:px-10 sm:py-32">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
            Design philosophy
          </p>

          <h3 className="site-heading-serif mt-4 max-w-3xl text-2xl font-normal leading-relaxed sm:text-3xl md:text-[2rem]">
            {brand.tagline}
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/85 sm:text-base">
            We believe beautiful interiors should feel effortless and deeply
            rooted in the way you live, work and gather.
          </p>
        </div>
      </div>
    </section>
  );
}