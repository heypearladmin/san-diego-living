import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pacific Beach | Neighborhood Guide',
  description:
    'A guide to life in Pacific Beach — the boardwalk, Crystal Pier, surf culture, walkable village, and the most authentic beach town energy in San Diego.',
}

// ─────────────────────────────────────────────────────────────────────
// LOCAL EXPERT (per neighborhood)
// ─────────────────────────────────────────────────────────────────────
const expert = {
  name: 'Sara Lin',
  area: 'Pacific Beach',
  years: 8,
  phone: '(619) 555-0144',
  brokerage: 'Compass Real Estate',
  license: 'CA DRE #02054125',
}

const quickFacts = [
  {
    label: 'Walkability',
    value: '92 Walk Score',
    explanation: 'Most errands can be done on foot — coffee, surf, dinner, sunset.',
  },
  {
    label: 'Schools',
    value: '7/10 Rating',
    explanation: 'Solid public schools with strong nearby private and charter options.',
  },
  {
    label: 'Commute',
    value: '15–20 min to Downtown',
    explanation: 'Easy access via I-5 and the coastal route along Mission Bay.',
  },
  {
    label: 'Climate',
    value: '60–75°F year-round',
    explanation: 'Warm summers, mild winters, ocean breeze almost every afternoon.',
  },
  {
    label: 'Lifestyle',
    value: '3-mile boardwalk',
    explanation: 'Surf, biking, and sunset every day, no shoes required.',
  },
  {
    label: 'Community',
    value: 'Young, active, coastal',
    explanation: 'A mix of professionals, surfers, and longtime locals.',
  },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      "From Crystal Pier to Tourmaline, PB's beach culture is the real thing — surfers, longboarders, and the daily ritual of sunset watching.",
    image: '/images/PB-4a.png',
  },
  {
    category: 'Dining',
    description:
      'JRDN at Tower 23, beachfront patios on Mission Boulevard, and the kind of casual coastal dining you do not have to dress up for.',
    image: '/images/PB-4b.png',
  },
  {
    category: 'Culture',
    description:
      "Garnet Avenue's vintage neon, surf shops, hand-painted murals, and the unbroken thread of California beach-town heritage.",
    image: '/images/PB-4c.png',
  },
  {
    category: 'Outdoors',
    description:
      'Mission Bay Park, paddleboarding, beach volleyball, and morning runs along the boardwalk — the active life lived outdoors.',
    image: '/images/PB-4d.png',
  },
]

const thingsToDo = [
  {
    title: 'Paddle Out at Crystal Pier',
    description:
      'One of the most consistent and friendly surf breaks in San Diego — perfect for longboarders and the place locals learned how to surf.',
    category: 'Mornings',
    image: '/images/PB-3a.png',
  },
  {
    title: 'Cruise the Boardwalk',
    description:
      'Three miles of concrete along PB and Mission Beach — best at golden hour on a vintage cruiser bike with iced coffees.',
    category: 'Afternoons',
    image: '/images/PB-3b.png',
  },
  {
    title: 'Sunset at Tower 23',
    description:
      "Modern oceanfront rooftop with craft cocktails and an unobstructed Pacific view — the most refined sunset move PB has to offer.",
    category: 'Evenings',
    image: '/images/PB-3c.png',
  },
]

const localBusinesses = [
  {
    name: "Kono's Cafe",
    type: 'Breakfast',
    description:
      'The legendary tiny breakfast joint at the foot of Crystal Pier — locals call it a PB rite of passage.',
    image: '/images/PB-5a.png',
  },
  {
    name: 'JRDN at Tower 23',
    type: 'Fine Dining',
    description:
      "The oceanfront luxury hotel restaurant that elevated the neighborhood's dining scene.",
    image: '/images/PB-5b.png',
  },
  {
    name: 'Crystal Pier',
    type: 'Landmark',
    description:
      'A 700-foot wooden pier with hotel cottages — one of the last working public piers on the California coast.',
    image: '/images/PB-5c.png',
  },
  {
    name: 'PB Surf Shops',
    type: 'Surf',
    description:
      'Independent surf shops along Mission Boulevard — where local surfers actually buy their boards and wax.',
    image: '/images/PB-5d.png',
  },
]

const whoItsFor = [
  {
    label: 'Young Professionals',
    description:
      'Walkable streets, vibrant nightlife, and a community where work-life balance includes a morning surf before the laptop opens.',
  },
  {
    label: 'Surfers & Beach People',
    description:
      'Consistent surf, easy Mission Bay access, and a community built entirely around the water.',
  },
  {
    label: 'Active Lifestyle Seekers',
    description:
      'Boardwalk runners, paddle sports, beach volleyball, bike culture — PB rewards living outside, every day.',
  },
  {
    label: 'First-Time Coastal Buyers',
    description:
      'A more accessible coastal entry point than La Jolla or Del Mar, with all the upside of being on the water.',
  },
]

export default function PacificBeachPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="/images/PB-1.png"
          alt="Pacific Beach Crystal Pier at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
              San Diego Living
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <Link href="/neighborhoods" className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
              Neighborhoods
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-sans text-xs text-white/80">Pacific Beach</span>
          </div>

          <p className="label-text text-white/60 mb-4">Neighborhood Guide</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">Pacific Beach</h1>
          <p className="font-sans text-lg text-white/75 max-w-xl font-light leading-relaxed">
            Boardwalk mornings, barefoot evenings, and a beach town that never tried to be anything else.
          </p>
        </div>
      </section>

      {/* ─── QUICK FACTS ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="label-text mb-3">A Quick Read</p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight max-w-lg">
              What You Should Know About Pacific Beach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border-t border-stone-200 pt-5">
                <p className="label-text mb-3">{fact.label}</p>
                <p className="font-serif text-xl text-stone-900 mb-3">{fact.value}</p>
                <p className="font-sans font-light text-sm text-stone-500 leading-relaxed">
                  {fact.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-text mb-4">About Pacific Beach</p>
              <h2 className="section-heading mb-8">
                The Beach Town
                <br />
                That Stayed One
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Mornings here begin at the pier. Surfers paddle out before sunrise. The boardwalk fills slowly with runners, dog walkers, and locals on cruiser bikes carrying iced coffees from Kono&apos;s. The marine layer lifts. Garnet Avenue wakes up. Pacific Beach starts the day the way it has for fifty years.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Afternoons drift between the beach and the bay. Mission Bay Park fills with paddleboarders and beach volleyball. Cottages on Crystal Pier take their tenants in for lunch. The boardwalk hums steadily until the sun starts dipping, when the beach refills with locals settling in for the evening ritual.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Evenings are casual and loud and warm. Dinner is barefoot. The streets stay alive late on weekends. PB is the rare coastal neighborhood that did not lose its soul to gentrification — the boardwalk is still concrete, the pier is still wooden, and the locals are still the locals.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Vibe</p>
                  <p className="font-sans text-sm text-stone-700">
                    Casual, vibrant, surf-forward
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Crystal Pier, boardwalk, surf
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Climate</p>
                  <p className="font-sans text-sm text-stone-700">Warm summers, mild winters</p>
                </div>
                <div>
                  <p className="label-text mb-2">To Downtown</p>
                  <p className="font-sans text-sm text-stone-700">15–20 min by car</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/PB-2.png"
                  alt="Garnet Avenue Pacific Beach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  Pacific Beach has more cruiser bikes per capita than almost any neighborhood in California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─────────────────────────────────────────── */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="label-text mb-3">Is Pacific Beach a Match?</p>
            <h2 className="section-heading max-w-lg">Who Actually Lives Here</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoItsFor.map((item, index) => (
              <div
                key={index}
                className="group border border-stone-200 p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-3">
                  {item.label}
                </p>
                <p className="text-sm text-stone-700 leading-relaxed group-hover:text-stone-900 transition">
                  {item.description}
                </p>
                <div className="mt-6 h-[1px] w-0 bg-amber-600 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THINGS TO DO ─────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="label-text mb-3">A Day in Pacific Beach</p>
            <h2 className="section-heading max-w-lg">
              How Locals
              <br />
              Spend Their Time
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {thingsToDo.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[320px] overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <p className="text-xs tracking-widest uppercase text-white/70 mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCAL LIFESTYLE ──────────────────────────────────────── */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="label-text mb-3">Life in Pacific Beach</p>
            <h2 className="section-heading max-w-lg">
              The Everyday
              <br />
              Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifestyleItems.map((item) => (
              <div
                key={item.category}
                className="group flex gap-6 bg-white border border-stone-100 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="label-text text-gold mb-2">{item.category}</p>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCAL BUSINESSES ─────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <p className="label-text mb-3">Worth Knowing</p>
              <h2 className="section-heading">
                Places We
                <br />
                Keep Going Back To
              </h2>
            </div>
            <Link
              href="/local-spots"
              className="font-sans text-sm tracking-wider text-stone-500 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors self-start sm:self-auto"
            >
              All Local Spots →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localBusinesses.map((biz) => (
              <div key={biz.name} className="group">
                <div className="relative h-44 overflow-hidden mb-4">
                  <Image
                    src={biz.image}
                    alt={biz.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="label-text text-gold mb-2">{biz.type}</p>
                <h3 className="font-serif text-lg text-stone-900 mb-2">{biz.name}</h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">{biz.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCHOOLS (light touch) ────────────────────────────────── */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-text mb-4">Education</p>
              <h2 className="section-heading mb-8">
                Solid Schools,
                <br />
                Strong Options Nearby
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                PB schools are part of San Diego Unified. Crown Point Elementary is consistently the strongest of the local public elementary options. Mission Bay High runs a respected International Baccalaureate program that draws students from across the area.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Many families also tap into nearby private and charter alternatives — most are within a fifteen-minute drive. The community itself is school-flexible by nature.
              </p>
            </div>

            <div className="relative h-80 lg:h-[480px] overflow-hidden group rounded-sm">
              <Image
                src="/images/PB-6.png"
                alt="Mission Bay High School campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOUSING SNAPSHOT (subtle) ────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-text mb-3">Housing</p>
              <h2 className="section-heading mb-10">
                What the Homes
                <br />
                Look Like
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                A mix of beach cottages, modern condos, Mission Bay waterfronts, and craftsman bungalows in the quieter side streets of North PB. Density gets higher closer to the boardwalk, lower as you head inland toward Crown Point.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Inventory turns over more often than most coastal markets — PB is where many people land when they first move to the area, then trade up over time.
              </p>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/PB-7a.png"
                alt="Oceanfront condo near Crystal Pier"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCAL EXPERT (soft CTA) ──────────────────────────────── */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text mb-5">Curious About Life in Pacific Beach?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 leading-tight">
            Talk to Someone
            <br />
            Who Lives Here
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-4 max-w-xl mx-auto">
            {expert.name} has lived in {expert.area} for {expert.years} years. If you are exploring the area, planning a move, or just want to understand what daily life is really like — they are happy to have an honest conversation.
          </p>
          <p className="font-sans text-sm text-stone-500 leading-relaxed mb-12 max-w-md mx-auto italic">
            No pressure. No sales pitch. Just local knowledge, honestly shared.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            <Link
              href="/contact"
              className="font-sans text-xs tracking-[0.25em] uppercase border border-stone-900 text-stone-900 px-10 py-4 hover:bg-stone-900 hover:text-white transition-colors duration-500"
            >
              Get in Touch
            </Link>
            <a
              href={`tel:${expert.phone.replace(/\D/g, '')}`}
              className="font-sans text-sm tracking-wider text-stone-500 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors duration-500"
            >
              {expert.phone}
            </a>
          </div>

          <div className="border-t border-stone-200 pt-8 max-w-md mx-auto">
            <p className="font-sans text-sm font-medium text-stone-700 mb-1">{expert.name}</p>
            <p className="font-sans font-light text-xs text-stone-400 tracking-wider">
              {expert.brokerage} · {expert.license}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
