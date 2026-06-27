import { Link } from 'react-router-dom'
import { brand } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-site-border bg-site-white px-4 py-12 text-site-black sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-2xl border border-site-border bg-site-light/70 p-6 text-center shadow-sm sm:gap-10 sm:rounded-4xl sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10 lg:text-left">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-site-black/60 sm:text-[10px]">Studio contact</p>
            <p className="site-heading-serif mt-3 text-2xl sm:mt-4 sm:text-3xl lg:text-4xl">{brand.name}</p>
            <div className="mt-6 space-y-1 text-xs leading-relaxed text-site-gray sm:mt-8 sm:text-sm">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href={`tel:${brand.phone.replace(/\s/g, '')}`}
                className="btn btn-secondary"
              >
                Call us
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="btn btn-primary"
              >
                Email studio
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-site-border bg-white p-4 text-left shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-site-black/65 sm:text-[10px]">Vendor Inquiry</p>
            <p className="mt-3 text-xs leading-6 text-site-gray sm:mt-4 sm:text-sm sm:leading-7">
              We are constantly looking for vendors and partners for our projects. We do not accept calls or texts at this
              time. Please send us your details at{' '}
              <a href={`mailto:${brand.email}?subject=VENDOR`} className="font-medium text-site-black underline-offset-4 hover:underline">
                {brand.email}
              </a>{' '}
              and include &apos;VENDOR&apos; in the subject so we don&apos;t miss it. We will review your product line and
              get back to you as needed. Please send us only one email. Thank you.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-site-border pt-6 text-xs uppercase tracking-[0.12em] text-site-gray sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
          <p className="text-center sm:text-left">{brand.phone}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 lg:justify-end">
            <Link to="/terms" className="transition hover:text-site-black">
              Terms and Condition
            </Link>
            <Link to="/privacy" className="transition hover:text-site-black">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
