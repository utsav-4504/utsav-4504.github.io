export const brand = {
  name: 'Utsav',
  shortName: 'Utsav',
  tagline: 'Good design yearns for boundless style that is underlined by simplicity',
  email: 'hello@utsavdesigns.com',
  phone: '+91 98765 43210',
  address: [
    'Studio 12, Design District',
    'Sector 45, Gurgaon',
    'Haryana 122003',
    'India',
  ],
}

/** Local images in /public/images/portfolio/ — always load, no broken external links */
const img = (file) => `/images/portfolio/${file}`

const images = {
  apartments: {
    hero: img('apartments-hero.jpg'),
    pillar: img('pillar-residential.jpg'),
    featured: [img('apartments-hero.jpg'), img('apartments-2.jpg')],
    gallery: [
      img('apartments-1.jpg'),
      img('apartments-3.jpg'),
      img('apartments-4.jpg'),
      img('apartments-5.jpg'),
      img('apartments-6.jpg'),
      img('apartments-2.jpg'),
    ],
  },
  farmhouses: {
    hero: img('farmhouses-hero.jpg'),
    pillar: img('farmhouses-1.jpg'),
    featured: [img('farmhouses-hero.jpg'), img('farmhouses-2.jpg')],
    gallery: [
      img('farmhouses-1.jpg'),
      img('farmhouses-2.jpg'),
      img('farmhouses-3.jpg'),
      img('farmhouses-hero.jpg'),
      img('apartments-1.jpg'),
      img('apartments-5.jpg'),
    ],
  },
  office: {
    hero: img('office-hero.jpg'),
    pillar: img('pillar-office.jpg'),
    featured: [img('office-hero.jpg'), img('office-1.jpg')],
    gallery: [
      img('office-1.jpg'),
      img('office-2.jpg'),
      img('office-3.jpg'),
      img('office-hero.jpg'),
      img('office-2.jpg'),
      img('office-1.jpg'),
    ],
  },
  hospitality: {
    hero: img('hospitality-hero.jpg'),
    pillar: img('pillar-hospitality.jpg'),
    featured: [img('hospitality-hero.jpg'), img('hospitality-1.jpg')],
    gallery: [
      img('hospitality-1.jpg'),
      img('hospitality-2.jpg'),
      img('hospitality-3.jpg'),
      img('hospitality-4.jpg'),
      img('hospitality-hero.jpg'),
      img('hospitality-2.jpg'),
    ],
  },
}

export const heroCategories = [
  { id: 'apartments', label: 'Apartments', image: images.apartments.hero },
  { id: 'farmhouses', label: 'Farmhouses', image: images.farmhouses.hero },
  { id: 'office', label: 'Office Interior', image: images.office.hero },
  { id: 'hospitality', label: 'Hospitality', image: images.hospitality.hero },
]

export const pillars = [
  {
    id: 'residential',
    title: 'Residential',
    description:
      'Thoughtful apartment interiors shaped around comfort, flow, and daily rituals. Soft materials, refined detailing, and balanced layouts create homes that feel warm and elevated.',
    image: images.apartments.pillar,
  },
  {
    id: 'office',
    title: 'Office Interiors',
    description:
      'Elegant workspaces designed to support focus, collaboration, and brand identity. Every detail is planned to feel polished, calm, and distinctly modern.',
    image: images.office.pillar,
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description:
      'Boutique hotels and guest experiences crafted around warmth, storytelling, and seamless comfort. Each environment is designed to feel memorable from the first step.',
    image: images.hospitality.pillar,
  },
]

export const portfolioSections = [
  {
    id: 'apartments',
    title: 'Apartments',
    headline: 'Calm, sculpted interiors for modern city living.',
    description:
      'Thoughtful layouts, refined materials, and custom detailing turn everyday apartments into elevated retreats that feel personal and timeless.',
    featured: images.apartments.featured,
    gallery: images.apartments.gallery,
  },
  {
    id: 'farmhouses',
    title: 'Farmhouses',
    headline: 'Private retreats shaped by light, texture, and nature.',
    description:
      'Expansive interiors and natural materials bring warmth and ease to rural spaces, creating a sense of escape without losing comfort or sophistication.',
    featured: images.farmhouses.featured,
    gallery: images.farmhouses.gallery,
  },
  {
    id: 'office',
    title: 'Office Interiors',
    headline: 'Workspaces designed for focus, flow, and presence.',
    description:
      'Modern offices are planned with clarity and elegance, balancing productivity with a polished atmosphere that reflects your brand and values.',
    featured: images.office.featured,
    gallery: images.office.gallery,
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    headline: 'Spaces that welcome guests and leave a lasting impression.',
    description:
      'From boutique hotels to refined guest experiences, each project is curated around atmosphere, comfort, and a memorable sense of arrival.',
    featured: images.hospitality.featured,
    gallery: images.hospitality.gallery,
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Press', to: '/press' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Product Sourcing', to: '/services' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const projects = portfolioSections.map((section) => ({
  slug: section.id,
  category: section.title,
  title: section.title,
  location: 'India',
  description: section.description,
  image: section.featured[0],
  heroImage: section.featured[0],
  client: 'Private Client',
  timeline: '—',
  tags: [section.title],
}))

export const services = [
  {
    id: 'sourcing',
    title: 'Product Sourcing',
    description: 'Curated furniture and finishes sourced for every project.',
  },
  {
    id: 'turnkey',
    title: 'Turnkey Interiors',
    description: 'End-to-end design and execution for residential and commercial spaces.',
  },
  {
    id: 'residential',
    title: 'Residential Design',
    description: 'Luxury apartments and farmhouses tailored to your lifestyle.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Design',
    description: 'Hotels, resorts, and hospitality experiences with immersive design.',
  },
]

export const testimonials = []
export const stats = []

export const team = [{ name: 'Utsav', role: 'Founder & Principal Designer' }]

export const awards = [
  'Featured in leading design publications',
  'Award-winning residential and commercial projects',
]

export const imageFallback = img('apartments-1.jpg')
