import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'La Jolla | Neighborhood Guide',
  description:
    'A guide to life in La Jolla — the cliffs, the cove, the village, the schools, and the everyday rhythm of one of the most iconic coastal communities on the California coast.',
}

// ─────────────────────────────────────────────────────────────────────
// LOCAL EXPERT (per neighborhood)
// ─────────────────────────────────────────────────────────────────────
const expert = {
  name: 'Maya Chen',
  area: 'La Jolla',
  years: 15,
  phone: '(619) 555-0142',
  brokerage: 'Compass Real Estate',
  license: 'CA DRE #02054123',
}

const quickFacts = [
  {
    label: 'Walkability',
    value: '71 Walk Score',
    explanation: 'Walkable village core with the cove a short stroll away.',
  },
  {
    label: 'Schools',
    value: '9/10 Rating',
    explanation: 'Among California’s strongest public school zones, with private options nearby.',
  },
  {
    label: 'Commute',
    value: '12 mi to Downtown',
    explanation: '20–25 min by car along I-5 or the coastal route.',
  },
  {
    label: 'Climate',
    value: '65–75°F year-round',
    explanation: 'Mild ocean climate, low humidity, and a sea breeze most afternoons.',
  },
  {
    label: 'Lifestyle',
    value: '7 mi of coastline',
    explanation: 'Beaches, cliffs, and tide pools at your doorstep.',
  },
  {
    label: 'Community',
    value: 'Multi-generational, refined',
    explanation: 'Researchers, retirees, families who arrive and rarely leave.',
  },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      "La Jolla Cove for snorkeling, Children's Pool for the seal colony, Windansea for the surf — three beaches within minutes of each other, each with its own crowd.",
    image: '/images/d5-lajollacove.png',
  },
  {
    category: 'Dining',
    description:
      "Long lunches at George's, Girard Avenue bistros, and the kind of dinner reservations regulars never have to make twice.",
    image: '/images/d2-georges.png',
  },
  {
    category: 'Culture',
    description:
      'The Salk Institute, UCSD, La Jolla Playhouse, the Museum of Contemporary Art — a small village that punches well above its weight.',
    image: '/images/c3-explorebalboa.png',
  },
  {
    category: 'Outdoors',
    description:
      'Torrey Pines trails, Coast Walk above the cove, and the world-class fairways at Torrey Pines Golf Course just up the road.',
    image: '/images/d3-torreypines.png',
  },
]

const thingsToDo = [
  {
    title: 'Slip Into La Jolla Cove',
    description:
      'Snorkel through the kelp forest, swim with garibaldi, and watch the sea lions pull themselves up onto the rocks at noon.',
    category: 'Mornings',
    image: '/images/d5-lajollacove.png',
  },
  {
    title: "A Long Lunch at George's",
    description:
      'James Beard recognition, an ocean terrace, and a bottle of wine that turns into the rest of the afternoon.',
    category: 'Afternoons',
    image: '/images/d2-georges.png',
  },
  {
    title: 'Walk Torrey Pines at Sunrise',
    description:
      'Hundred-year-old pines, sandstone cliffs, and the Pacific waking up below — the quietest hour in San Diego.',
    category: 'Trails',
    image: '/images/d3-torreypines.png',
  },
]

const localBusinesses = [
  {
    name: 'Bird Rock Coffee Roasters',
    type: 'Coffee',
    description:
      'The kind of place locals return to every morning without thinking twice — single-origin, sun-drenched, a few minutes from the cliffs.',
    image: '/images/d1-birdrock.png',
  },
  {
    name: "George's at the Cove",
    type: 'Dining',
    description:
      "The rooftop terrace that has defined La Jolla's culinary identity for decades — and still does.",
    image: '/images/d2-georges.png',
  },
  {
    name: 'UCSD & The Village',
    type: 'Culture',
    description:
      'A world-class research university just up the hill — visiting lectures, weekend bookstores, the kind of intellectual current most coastal towns lack.',
    image: '/images/d3-torreypines.png',
  },
  {
    name: 'La Jolla Cove',
    type: 'Outdoors',
    description:
      'Snorkel rentals, the seal colony, and the sea caves — accessible directly from the village without ever needing a car.',
    image: '/images/d5-lajollacove.png',
  },
]

const whoItsFor = [
  {
    label: 'Families',
    description:
      'School-pickup walks, weekend tide-pooling, and a village small enough that you know the other parents by name.',
  },
  {
    label: 'Remote Professionals',
    description:
      'Coffee shops where laptops are tolerated for hours, the cove for a midday swim, and the kind of focus you only find in quieter places.',
  },
  {
    label: 'Retirees',
    description:
      'World-class healthcare close by, daily cliff walks, and a community where neighbors check in on each other across decades.',
  },
  {
    label: 'Second-Home Owners',
    description:
      'Held quietly between trips. Somewhere to land when work stops and the rest of life finally starts.',
  },
]

export default function LaJollaPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="/images/a1-homepagehero.png"
          alt="La Jolla coastal cliffs at sunset"
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
            <span className="font-sans text-xs text-white/80">La Jolla</span>
          </div>

          <p className="label-text text-white/60 mb-4">Neighborhood Guide</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">La Jolla</h1>
          <p className="font-sans text-lg text-white/75 max-w-xl font-light leading-relaxed">
            The cliffs, the cove, and a village that has not lost its quiet.
          </p>
        </div>
      </section>

      {/* ─── QUICK FACTS ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="label-text mb-3">A Quick Read</p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight max-w-lg">
              What You Should Know About La Jolla
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

      {/* ─── OVERVIEW (editorial storytelling) ────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-text mb-4">About La Jolla</p>
              <h2 className="section-heading mb-8">
                A Village
                <br />
                On the Cliffs
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Mornings start with marine layer. Locals walk past the cove on the way to coffee, the seals already arguing on the rocks. The village wakes up slowly — the bookstore opens, surfers pull into Windansea, the schools fill, and Prospect Street settles into the rhythm of a small town that happens to sit on one of the most photographed coastlines in California.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Afternoons drift between the village and the cliffs. People meet for lunch at George&apos;s and stay through the second bottle. The Salk Institute lights up with researchers heading home through the eucalyptus. Couples walk Coast Walk Trail with the sun lower, the cove wider, the air cool against the bluffs.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Evenings end the way they started — quietly. The village is residential at heart. Neighbors recognize each other. Restaurants close earlier than you would expect. Most people who land here are still here a decade later, often longer. La Jolla rewards staying.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Vibe</p>
                  <p className="font-sans text-sm text-stone-700">
                    Refined village, quiet, coastal
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Beaches, dining, UCSD, culture
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Climate</p>
                  <p className="font-sans text-sm text-stone-700">Mild year-round, ocean breeze</p>
                </div>
                <div>
                  <p className="label-text mb-2">To Downtown</p>
                  <p className="font-sans text-sm text-stone-700">20–25 min by car</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/d5-lajollacove.png"
                  alt="La Jolla cove and coastline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  La Jolla is one of the few coastal villages where you can walk from a Michelin-recognized dinner straight to the cove.
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
            <p className="label-text mb-3">Is La Jolla a Match?</p>
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
            <p className="label-text mb-3">A Day in La Jolla</p>
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
            <p className="label-text mb-3">Life in La Jolla</p>
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
                Among California&apos;s
                <br />
                Strongest School Zones
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                The La Jolla attendance area consistently ranks among California&apos;s top public school zones — La Jolla Elementary, Muirlands Middle, and La Jolla High among the most cited. Proximity to UC San Diego adds enrichment and dual-enrollment paths most coastal communities cannot match.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Private alternatives like The Bishop&apos;s School offer additional options for families seeking smaller class sizes or parochial settings. Most families in the village walk or bike their kids to school.
              </p>
            </div>

            <div className="relative h-80 lg:h-[480px] overflow-hidden group rounded-sm">
              <Image
                src="/images/school.png"
                alt="Coastal campus near La Jolla"
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
                Primarily single-family homes — Spanish revivals in the village, mid-century moderns in Bird Rock, contemporary architecture along the bluffs. A small condo market exists in the village core for those who want walkability without the maintenance.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Inventory tends to be tight. Many homes here are passed quietly between neighbors before they ever reach the open market — a pattern shaped by how long people stay.
              </p>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/d5-lajollacove.png"
                alt="La Jolla coastline and homes"
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
          <p className="label-text mb-5">Curious About Life in La Jolla?</p>
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
