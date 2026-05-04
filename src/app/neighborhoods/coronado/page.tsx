import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coronado | Neighborhood Guide',
  description:
    'A guide to life in Coronado — the Hotel del Coronado, Orange Avenue, beaches, schools, and the small-town island feel that makes this San Diego coastal community unlike anywhere else.',
}

// ─────────────────────────────────────────────────────────────────────
// LOCAL EXPERT (per neighborhood)
// ─────────────────────────────────────────────────────────────────────
const expert = {
  name: 'David Howard',
  area: 'Coronado',
  years: 14,
  phone: '(619) 555-0145',
  brokerage: 'Compass Real Estate',
  license: 'CA DRE #02054126',
}

const quickFacts = [
  {
    label: 'Walkability',
    value: '88 Walk Score',
    explanation: 'Walk to the beach, the village, the ferry — Coronado runs on foot.',
  },
  {
    label: 'Schools',
    value: '9/10 Rating',
    explanation: 'Coronado Unified is one of California’s strongest small districts.',
  },
  {
    label: 'Commute',
    value: '4 mi to Downtown',
    explanation: '10–15 min by car or 15 min by ferry across the bay.',
  },
  {
    label: 'Climate',
    value: '65–75°F year-round',
    explanation: 'Mild island climate with ocean breeze on both sides.',
  },
  {
    label: 'Lifestyle',
    value: '5 mi of coastline',
    explanation: 'Hotel Del beach, Glorietta Bay, and the Silver Strand to the south.',
  },
  {
    label: 'Community',
    value: 'Multi-generational, military',
    explanation: 'Families, naval officers, longtime locals — homes pass down generations.',
  },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      'Coronado Beach is consistently ranked among the best in America — gold-flecked sand, the Hotel Del backdrop, and a quiet that bigger beaches do not have.',
    image: '/images/COR-4a.png',
  },
  {
    category: 'Dining',
    description:
      "From 1500 Ocean at Hotel Del to the bayfront patios at Ferry Landing, Coronado's dining is refined, scenic, and never rushed.",
    image: '/images/COR-4b.png',
  },
  {
    category: 'Culture',
    description:
      'Orange Avenue, the Spreckels Building, the historic Village Theater, and the Coronado Public Library — small-town America preserved on an island.',
    image: '/images/COR-4c.png',
  },
  {
    category: 'Outdoors',
    description:
      'Glorietta Bay paddleboarding, the Silver Strand bikeway, the Coronado Golf Course, and the daily ferry across the bay to downtown.',
    image: '/images/COR-4d.png',
  },
]

const thingsToDo = [
  {
    title: 'A Day at Hotel del Coronado',
    description:
      'The 1888 Victorian beachfront resort that put Coronado on the map — afternoon tea, Sunday brunch, or a sunset cocktail on the Sun Deck.',
    category: 'Landmark',
    image: '/images/COR-3a.png',
  },
  {
    title: 'Bike the Silver Strand',
    description:
      'Seven protected miles connecting Coronado to Imperial Beach — flat, scenic, with the bay on one side and the Pacific on the other.',
    category: 'Outdoors',
    image: '/images/COR-3b.png',
  },
  {
    title: 'Ferry to Downtown',
    description:
      'Take the ferry from Ferry Landing across the bay to downtown San Diego — the kind of commute most people would call a vacation.',
    category: 'Transit',
    image: '/images/COR-3c.png',
  },
]

const localBusinesses = [
  {
    name: 'Hotel del Coronado',
    type: 'Landmark Resort',
    description:
      'The 1888 island icon — afternoon tea, Sunday brunch, or a sunset cocktail on the Sun Deck with the Pacific stretching behind you.',
    image: '/images/COR-5a.png',
  },
  {
    name: "Clayton's Coffee Shop",
    type: 'Diner',
    description:
      "The 1940s small-town diner on Orange Avenue — the unofficial breakfast headquarters for Coronado's longtime locals.",
    image: '/images/COR-5b.png',
  },
  {
    name: 'Bay Books',
    type: 'Independent Bookstore',
    description:
      "Coronado's beloved indie bookstore — beautifully curated, locally run, and the kind of place where the staff actually reads.",
    image: '/images/COR-5c.png',
  },
  {
    name: 'Ferry Landing Marketplace',
    type: 'Shopping & Dining',
    description:
      'The bayfront village of shops, restaurants, and the Coronado ferry — best at golden hour with the downtown skyline in front of you.',
    image: '/images/COR-5d.png',
  },
]

const whoItsFor = [
  {
    label: 'Multi-Generational Families',
    description:
      'Walkable schools, low crime, and the kind of stability where kids grow up and come back to raise their own.',
  },
  {
    label: 'Military & Naval Officers',
    description:
      'Adjacent to NAS North Island, with a long-standing community of active and retired military families integrated into the island.',
  },
  {
    label: 'Second-Home Owners',
    description:
      'Held quietly between trips. Coronado homes are typically held for decades — many are passed down between generations.',
  },
  {
    label: 'Privacy Seekers',
    description:
      'The bridge gives Coronado a separated, contained feel — an island in spirit even though it is technically a peninsula.',
  },
]

export default function CoronadoPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="/images/COR-1.png"
          alt="Coronado Island and Hotel del Coronado at sunset"
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
            <span className="font-sans text-xs text-white/80">Coronado</span>
          </div>

          <p className="label-text text-white/60 mb-4">Neighborhood Guide</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">Coronado</h1>
          <p className="font-sans text-lg text-white/75 max-w-xl font-light leading-relaxed">
            Across the bridge, time slows — and the island makes a case for never crossing back.
          </p>
        </div>
      </section>

      {/* ─── QUICK FACTS ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="label-text mb-3">A Quick Read</p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight max-w-lg">
              What You Should Know About Coronado
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
              <p className="label-text mb-4">About Coronado</p>
              <h2 className="section-heading mb-8">
                An Island That
                <br />
                Stayed a Small Town
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Coronado is connected to the mainland by a bridge, but the moment you cross it, you understand why locals call it the island. The pace slows. The streets quiet. Mature palms line every avenue. The 1888 Hotel del Coronado, with its red-shingled turrets and white Victorian wood, presides over Coronado Beach as it has for over a century.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Orange Avenue is the kind of small-town American downtown most communities lost decades ago. Independent shops, restored mid-century diners, the historic Village Theater, the indie bookstore where the staff knows your name. Cruiser bikes outnumber cars. Kids walk to school. Neighbors actually know each other.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                The community is anchored by multi-generational families, military households tied to NAS North Island, and longtime second-home owners. Buyers who land here typically hold for decades, and the homes that do change hands are often passed down rather than sold.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Vibe</p>
                  <p className="font-sans text-sm text-stone-700">
                    Refined, small-town, preserved
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Hotel Del, Orange Ave, beaches
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Climate</p>
                  <p className="font-sans text-sm text-stone-700">Mild year-round, ocean breeze</p>
                </div>
                <div>
                  <p className="label-text mb-2">To Downtown</p>
                  <p className="font-sans text-sm text-stone-700">10–15 min by car or ferry</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/COR-2.png"
                  alt="Orange Avenue Coronado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  Coronado is one of the few places where homes are passed down through families more often than sold.
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
            <p className="label-text mb-3">Is Coronado a Match?</p>
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
            <p className="label-text mb-3">A Day in Coronado</p>
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
            <p className="label-text mb-3">Life in Coronado</p>
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
                One of California&apos;s
                <br />
                Strongest Small Districts
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Coronado Unified School District is small, walkable, and tightly knit. The K–12 path from Silver Strand Elementary through Coronado Middle to Coronado High is uninterrupted, and the kind of progression where teachers know siblings before they arrive.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Sacred Heart Academy provides a private K–8 alternative for families seeking it. Most kids on the island walk or bike to school.
              </p>
            </div>

            <div className="relative h-80 lg:h-[480px] overflow-hidden group rounded-sm">
              <Image
                src="/images/COR-6.png"
                alt="Coronado High School campus"
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
                Mostly single-family homes — historic Victorian and Spanish revivals near the Hotel Del, modern bayfront builds along Glorietta Bay, and contemporary peninsula homes in the Coronado Cays. Condos exist in the village core for those who want walkability without the maintenance.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Inventory is famously scarce. Many of the best homes never reach the open market — they pass between neighbors, longtime brokers, and family connections before they are ever listed.
              </p>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/COR-7a.png"
                alt="Oceanfront mansion on Ocean Boulevard, Coronado"
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
          <p className="label-text mb-5">Curious About Life on the Island?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 leading-tight">
            Talk to Someone
            <br />
            Who Lives Here
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-4 max-w-xl mx-auto">
            {expert.name} has lived in {expert.area} for {expert.years} years. If you are exploring the island, planning a move, or just want to understand what daily life is really like — they are happy to have an honest conversation.
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
