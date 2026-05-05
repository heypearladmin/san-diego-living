import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'La Jolla | Neighborhood Guide',
  description:
    'Your guide to life in La Jolla — the cliffs, the cove, the village, the schools, and the everyday rhythm of one of the most iconic coastal communities on the California coast.',
}

const quickFacts = [
  { value: '71', label: 'Walk Score' },
  { value: '9/10', label: 'School Rating' },
  { value: '12 mi', label: 'to Downtown SD' },
  { value: '7 mi', label: 'of Coastline' },
  { value: '70°F', label: 'Avg Temp Year-Round' },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      "La Jolla Cove, Children's Pool, and Windansea Beach offer world-class snorkeling, kayaking, and dramatic coastlines.",
    image: '/images/d5-lajollacove.png',
  },
  {
    category: 'Dining',
    description:
      "From George's at the Cove to Girard Avenue bistros, La Jolla boasts Michelin-recognized cuisine and a dining culture that rivals any major city.",
    image: '/images/d2-georges.png',
  },
  {
    category: 'Culture',
    description:
      'Home to the Salk Institute, UCSD campus, La Jolla Playhouse, and the Museum of Contemporary Art — one of California’s most intellectually rich communities.',
    image: '/images/c3-explorebalboa.png',
  },
  {
    category: 'Outdoors',
    description:
      'Torrey Pines State Reserve, coastal trails, and world-ranked golf at Torrey Pines Golf Course give residents unmatched access to nature.',
    image: '/images/d3-torreypines.png',
  },
]

const thingsToDo = [
  {
    title: 'Snorkel La Jolla Cove',
    description:
      'One of the best snorkeling spots in Southern California, with sea caves, leopard sharks, and garibaldi fish just offshore.',
    category: 'Beaches',
    image: '/images/d5-lajollacove.png',
  },
  {
    title: "Dine at George's at the Cove",
    description:
      'James Beard-nominated rooftop dining with unobstructed Pacific views — go for sunset.',
    category: 'Dining',
    image: '/images/d2-georges.png',
  },
  {
    title: 'Hike Torrey Pines',
    description:
      'Ancient pine forests, canyon trails, and sweeping coastal views just minutes from the village.',
    category: 'Nature',
    image: '/images/d3-torreypines.png',
  },
]

const localBusinesses = [
  {
    name: 'Bird Rock Coffee Roasters',
    type: 'Coffee',
    description:
      'The neighborhood standard for single-origin espresso and a laid-back morning atmosphere.',
    image: '/images/d1-birdrock.png',
  },
  {
    name: "George's at the Cove",
    type: 'Fine Dining',
    description:
      "Ocean terrace dining that has defined La Jolla's culinary identity for decades.",
    image: '/images/d2-georges.png',
  },
  {
    name: 'UCSD Bookstore & Campus',
    type: 'Culture',
    description:
      "A world-class research university that anchors La Jolla's intellectual and cultural identity.",
    image: '/images/d3-torreypines.png',
  },
  {
    name: 'La Jolla Cove Snorkel',
    type: 'Outdoors',
    description:
      'Rent gear and enter the water directly from the cove — sea lions often sunbathe nearby.',
    image: '/images/d5-lajollacove.png',
  },
]

const whoItsFor = [
  { label: 'Families', description: 'Top-rated schools, safe streets, and abundant parks and outdoor space.' },
  { label: 'Remote Professionals', description: 'Walkable village, great coffee shops, and a pace of life that supports deep work.' },
  { label: 'Retirees', description: 'World-class healthcare proximity (Scripps, UCSD), cultural offerings, and coastal beauty.' },
  { label: 'Second-Home Owners', description: 'One of the most consistently desirable communities in Southern California.' },
]

const schools = [
  { name: 'La Jolla Elementary', grades: 'K–5', rating: '10/10', type: 'Public' },
  { name: 'Muirlands Middle School', grades: '6–8', rating: '9/10', type: 'Public' },
  { name: 'La Jolla High School', grades: '9–12', rating: '9/10', type: 'Public' },
  { name: "The Bishop's School", grades: '6–12', rating: 'Top Ranked', type: 'Private' },
]

export default function LaJollaPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="/images/a1 homepagehero.png"
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
          <p className="font-sans text-lg text-white/70 max-w-xl font-light">
            Clifftop grandeur, world-class dining, and one of the most distinctive communities on the California coast.
          </p>
        </div>
      </section>

      {/* ─── QUICK FACTS BAR ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-stone-100">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="px-6 py-7 text-center">
                <p className="font-serif text-2xl text-stone-900 mb-1">{fact.value}</p>
                <p className="font-sans text-xs text-stone-500">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-text mb-4">About La Jolla</p>
              <h2 className="section-heading mb-8">
                A Place That Earns
                <br />
                Its Reputation
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Perched along seven miles of rugged Pacific coastline, La Jolla is one of those rare places that genuinely lives up to the hype. The beaches are dramatic. The restaurants are exceptional. The cultural offerings — UCSD, the Salk Institute, La Jolla Playhouse — are world-class.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                The village along Prospect Street and Girard Avenue is walkable, independent, and decidedly local — galleries, coffee shops, boutiques, and long lunches that stretch into the afternoon. It has the feel of a small town that happens to sit inside one of the great cities in America.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Residents tend to be lifers. Once people find La Jolla, they rarely leave — and that quiet stability is one of the things that makes it special.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Vibe</p>
                  <p className="font-sans text-sm text-stone-700">
                    Upscale village, walkable, coastal
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
                  <p className="label-text mb-2">Commute to Downtown</p>
                  <p className="font-sans text-sm text-stone-700">20–25 min by car</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/d5-lajollacove.png"
                  alt="La Jolla coastline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  La Jolla is one of the few coastal neighborhoods where you can walk from a Michelin-recognized dinner straight to the cove.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="label-text mb-3">Is La Jolla Right for You?</p>
            <h2 className="section-heading max-w-lg">Who Loves Living Here</h2>
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

      {/* ─── THINGS TO DO ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="label-text mb-3">Activities & Attractions</p>
            <h2 className="section-heading max-w-lg">
              Things To Do
              <br />
              in La Jolla
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

                    <h3 className="text-xl font-serif mb-2">
                      {item.title}
                    </h3>

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

      {/* ─── LOCAL LIFESTYLE ──────────────────────────────────────────── */}
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
              <div key={item.category} className="group flex gap-6 bg-white border border-stone-100 p-6 hover:shadow-lg transition-shadow duration-300">
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

      {/* ─── LOCAL BUSINESSES ─────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <p className="label-text mb-3">Local Businesses</p>
              <h2 className="section-heading">
                Worth Knowing
                <br />
                in La Jolla
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

      {/* ─── SCHOOLS ──────────────────────────────────────────────────── */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-text mb-4">Education</p>
              <h2 className="section-heading mb-6">
                Among San Diego&apos;s
                <br />
                Top-Rated Schools
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                The La Jolla attendance area is consistently ranked among the top 5% in the state. Proximity to UC San Diego also provides unique enrichment and dual-enrollment opportunities for high school students.
              </p>

              <div className="space-y-px">
                {schools.map((school) => (
                  <div
                    key={school.name}
                    className="flex items-center justify-between bg-white px-6 py-4"
                  >
                    <div>
                      <p className="font-sans text-sm font-medium text-stone-900">{school.name}</p>
                      <p className="font-sans text-xs text-stone-500">
                        Grades {school.grades} · {school.type}
                      </p>
                    </div>
                    <span className="font-serif text-base text-gold">{school.rating}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-sans text-xs text-stone-400">
                Ratings sourced from GreatSchools.org. Verify school boundaries with the district.
              </p>
            </div>

            <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden group rounded-sm">
              <Image
                src="/images/school.png"
                alt="Modern coastal campus in La Jolla"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── COST OF LIVING (editorial, not listings) ─────────────────── */}
      <section className="bg-white py-24 lg:py-32 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="label-text mb-3">A Note on the Market</p>
              <h2 className="section-heading mb-10">
                What It Costs
                <br />
                to Live Here
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                La Jolla&apos;s housing market reflects its reputation. Demand is consistent — locally, nationally, and increasingly internationally — and the inventory is famously tight. The right home often moves before it ever hits the public market.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Median home prices sit around <span className="font-medium text-stone-900">$2.4M</span>. Bluff-top oceanfront estates from La Jolla Shores down to Bird Rock typically command <span className="font-medium text-stone-900">$5M to $20M+</span>. Village walkable single-family homes generally fall between <span className="font-medium text-stone-900">$2M and $4M</span>. Condos in The Village or near UCSD start in the high six figures.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Among San Diego coastal markets, La Jolla has historically been the most resilient through national down-cycles. Buyers here tend to hold for decades, and many homes never reach the open market — they pass between neighbors, friends, and families.
              </p>
            </div>

            <div className="relative h-[500px] lg:h-[640px] overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/d5-lajollacove.png"
                alt="La Jolla cove and coastline"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-stone-100 pt-8 max-w-3xl">
            <div>
              <p className="font-serif text-2xl text-stone-900 mb-1">$2.4M</p>
              <p className="font-sans text-xs text-stone-500">Median Home Price</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-stone-900 mb-1">~150</p>
              <p className="font-sans text-xs text-stone-500">Active Listings (avg)</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-stone-900 mb-1">35 days</p>
              <p className="font-sans text-xs text-stone-500">Median Days on Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOFT EXPERT FEATURE ──────────────────────────────────────── */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text mb-5">Curious About Life in La Jolla?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
            Talk to Someone
            <br />
            Who Lives Here
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-3 max-w-xl mx-auto">
            Sarah Chen has lived in La Jolla for fifteen years. If you are exploring the area, planning a move, or just want to understand what daily life is really like — she is happy to have an honest conversation.
          </p>
          <p className="font-sans text-sm text-stone-500 leading-relaxed mb-12 max-w-md mx-auto italic">
            No pressure. No sales pitch. Just local knowledge, honestly shared.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="font-sans text-sm tracking-wider uppercase border border-stone-900 text-stone-900 px-8 py-3 hover:bg-stone-900 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+16195550142"
              className="font-sans text-sm tracking-wider text-stone-500 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors"
            >
              (619) 555-0142
            </a>
          </div>
          <p className="font-sans text-xs text-stone-400 mt-10">
            Sarah Chen · Compass Real Estate · CA DRE #02054123
          </p>
        </div>
      </section>
    </>
  )
}
