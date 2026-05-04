'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────
// LOCAL EXPERT (global)
// ─────────────────────────────────────────────────────────────────────
const expert = {
  name: 'Alex Rivera',
  area: 'San Diego',
  years: 12,
  phone: '(619) 555-0101',
  brokerage: 'Compass Real Estate',
  license: 'CA DRE #02123456',
}

// ─────────────────────────────────────────────────────────────────────
// THINGS TO DO — how locals spend their time
// ─────────────────────────────────────────────────────────────────────
const categories = [
  'All',
  'Mornings',
  'Trails',
  'Water',
  'Culture',
  'Evenings',
  'Summer',
] as const

type Category = typeof categories[number]

const activities: Array<{
  id: string
  title: string
  category: Exclude<Category, 'All'>
  neighborhood: string
  description: string
  familyNote?: string
  image: string
}> = [
  {
    id: 'snorkel-la-jolla',
    title: 'Slip Into La Jolla Cove',
    category: 'Mornings',
    neighborhood: 'La Jolla',
    description:
      'Snorkel through the kelp forest, swim with garibaldi, and watch the sea lions pull themselves up onto the rocks at noon. Calm protected water, even on big-swell days.',
    familyNote: 'Tide pools, harbor seals, and protected swimming — older kids love it.',
    image: '/images/c1-snorklelajolla.png',
  },
  {
    id: 'hike-torrey-pines',
    title: 'Walk Torrey Pines at Sunrise',
    category: 'Trails',
    neighborhood: 'Del Mar',
    description:
      'Hundred-year-old pines, sandstone cliffs, and the Pacific waking up below. The Razor Point Trail at golden hour is the quietest hour in San Diego.',
    familyNote: 'Easy trails, safe paths, and one of the best places to bring kids outdoors.',
    image: '/images/c2-hiketorreypines.png',
  },
  {
    id: 'balboa-park',
    title: 'A Day in Balboa Park',
    category: 'Culture',
    neighborhood: 'Balboa Park',
    description:
      'Seventeen museums, a botanical garden, the San Diego Zoo, and Spanish Colonial architecture across 1,200 acres. Bring a blanket; locals come for the lawns.',
    familyNote: 'The zoo, the carousel, museums, and unlimited grass for running — a default weekend with kids.',
    image: '/images/c3-explorebalboa.png',
  },
  {
    id: 'surf-pacific-beach',
    title: 'Paddle Out at Crystal Pier',
    category: 'Water',
    neighborhood: 'Pacific Beach',
    description:
      'One of the most consistent and friendly surf breaks in San Diego — perfect for longboarders and the place plenty of locals learned how to surf.',
    familyNote: 'Surf schools welcome kids; soft-top rentals on the boardwalk.',
    image: '/images/c4-surfpacificbeach.png',
  },
  {
    id: 'little-italy-dinner',
    title: 'A Long Dinner in Little Italy',
    category: 'Evenings',
    neighborhood: 'Little Italy',
    description:
      'Walk India Street for dinner — Born and Raised, Juniper & Ivy, Ironside Fish. San Diego&apos;s most concentrated stretch of serious cooking, end-to-end.',
    familyNote: 'Piazza seating at the Food Hall is stroller-friendly with options for picky eaters.',
    image: '/images/c5-dineinlittleitaly.png',
  },
  {
    id: 'del-mar-track',
    title: 'Opening Day at Del Mar',
    category: 'Summer',
    neighborhood: 'Del Mar',
    description:
      'Sundresses, wide-brimmed hats, and one of the most scenic tracks in the country. The summer racing season is a regional ritual you only need to do once to understand.',
    familyNote: 'Family days during the meet include infield kid activities and pony rides.',
    image: '/images/c6-thoroughbred.png',
  },
  {
    id: 'walk-embarcadero',
    title: 'Walk the Embarcadero',
    category: 'Mornings',
    neighborhood: 'Downtown',
    description:
      'The harbor path from the Maritime Museum down to Seaport Village is the best free walk in the city — especially at golden hour with the Coronado Bridge in the distance.',
    familyNote: 'Maritime Museum and the Seaport Village carousel are kid magnets.',
    image: '/images/c7-walktheembarcadero.png',
  },
  {
    id: 'birch-aquarium',
    title: 'Visit the Birch Aquarium',
    category: 'Culture',
    neighborhood: 'La Jolla',
    description:
      'Perched above Scripps Institution of Oceanography with panoramic ocean views. Calm, manageable, and one of the most underrated museums in California.',
    familyNote: "One of San Diego's most-loved spots for kids — the kelp tank, the tide pool plaza, the cliff view.",
    image: '/images/c8-birch.png',
  },
  {
    id: 'north-park-brewery',
    title: 'A North Park Brewery Tour',
    category: 'Evenings',
    neighborhood: 'North Park',
    description:
      'San Diego is one of the great craft beer cities in the country. North Park&apos;s 30th Street corridor is the best place to start — walkable, packed, and patient with first-timers.',
    image: '/images/c9-northpark.png',
  },
]

// ─────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function ThingsToDoPage() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? activities : activities.filter((a) => a.category === active)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-stone-950 py-32 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors">
              San Diego Living
            </Link>
            <span className="text-white/25 text-xs">/</span>
            <span className="font-sans text-xs text-white/70">Things To Do</span>
          </div>

          <p className="label-text text-white/50 mb-5">A Local Guide</p>
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            How Locals
            <br />
            Spend Their Time
          </h1>
          <p className="font-sans font-light text-lg text-white/65 max-w-2xl leading-relaxed">
            Less a list of attractions. More a sketch of how people who live here actually fill a Saturday — the morning ritual, the afternoon drift, the evening that runs long.
          </p>
        </div>
      </section>

      {/* ─── INTRO PARAGRAPH ──────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="label-text mb-5">A Weekend, Sketched</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight mb-10">
            Mornings, Afternoons,
            <br />
            and the Long Way Home
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
            San Diego rewards the unhurried. A typical local Saturday starts early — coffee somewhere on foot, a walk to the cove or the boardwalk, the marine layer still hanging on the cliffs. Lunch happens slowly, often outdoors, often with friends. Afternoons drift through Balboa Park, the bluffs, or the bay. Evenings end with a long dinner you did not plan and do not regret.
          </p>
          <p className="font-sans text-base text-stone-600 leading-relaxed">
            Most of what people do here works for kids, too — the trails are wide, the museums are manageable, the beaches are calm. A weekend with a family in San Diego does not need to be different from a weekend without one.
          </p>
        </div>
      </section>

      {/* ─── FILTER PILLS ─────────────────────────────────────────── */}
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-sm px-5 py-2.5 transition-colors duration-200 ${
                  active === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACTIVITIES GRID ──────────────────────────────────────── */}
      <section className="bg-white pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((item) => (
              <article key={item.id} className="group">
                <div className="relative h-72 overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="label-text text-gold">{item.category}</p>
                  <span className="w-3 h-px bg-stone-300" />
                  <p className="font-sans font-light text-xs text-stone-400 tracking-wider uppercase">
                    {item.neighborhood}
                  </p>
                </div>
                <h3 className="font-serif font-normal text-2xl text-stone-900 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.familyNote && (
                  <p className="font-sans text-xs text-stone-500 italic leading-relaxed border-l-2 border-gold/40 pl-3">
                    {item.familyNote}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCAL EXPERT ─────────────────────────────────────────── */}
      <section className="bg-cream-50 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text mb-5">Curious About Life in San Diego?</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 mb-8 leading-tight">
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
