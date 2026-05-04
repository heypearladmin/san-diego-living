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
// LOCAL SPOTS — places people who live here actually go
// ─────────────────────────────────────────────────────────────────────
const categories = ['All', 'Coffee', 'Dining', 'Outdoors', 'Nature', 'Culture', 'Food & Drink'] as const

type Category = typeof categories[number]

const localSpots: Array<{
  id: string
  name: string
  category: Exclude<Category, 'All'>
  neighborhood: string
  description: string
  familyNote?: string
  image: string
}> = [
  {
    id: 'bird-rock',
    name: 'Bird Rock Coffee Roasters',
    category: 'Coffee',
    neighborhood: 'La Jolla',
    description:
      'The kind of place locals return to every morning without thinking twice. Single-origin roasts, a sun-drenched patio, and a few minutes from the cliffs.',
    familyNote: 'Open patio with easy seating — works with kids on weekend mornings.',
    image: '/images/d1-birdrock.png',
  },
  {
    id: 'georges',
    name: "George's at the Cove",
    category: 'Dining',
    neighborhood: 'La Jolla',
    description:
      'A rooftop terrace, the cove below, and a long lunch that becomes the rest of your afternoon. The Ocean Terrace is the casual room — stay through the second bottle.',
    familyNote: 'The Ocean Terrace is more casual; older kids do well at lunch.',
    image: '/images/d2-georges.png',
  },
  {
    id: 'torrey-pines',
    name: 'Torrey Pines State Reserve',
    category: 'Nature',
    neighborhood: 'Del Mar',
    description:
      'Trails that wind through hundred-year-old pines and end with the Pacific stretching wide in front of you. Free, open daily, and one of the best public assets San Diego owns.',
    familyNote: 'Easy trails, safe paths, and one of the best places to bring kids outdoors.',
    image: '/images/d3-torreypines.png',
  },
  {
    id: 'little-italy-food-hall',
    name: 'Little Italy Food Hall',
    category: 'Food & Drink',
    neighborhood: 'Little Italy',
    description:
      'A piazza, a string of vendor stalls, and the kind of evening you do not plan in advance. Anchor of the Saturday farmers market; the unofficial dinner of every San Diego houseguest.',
    familyNote: 'Open seating, plenty of options for picky eaters, and stroller-friendly throughout.',
    image: '/images/d4-littleitaly.png',
  },
  {
    id: 'communal-coffee',
    name: 'Communal Coffee',
    category: 'Coffee',
    neighborhood: 'North Park',
    description:
      'Florist and coffee bar in one — North Park&apos;s creative-class anchor. Garage doors that open straight to the sidewalk; on a Sunday morning, the line is part of the experience.',
    familyNote: 'Roll-up doors and a relaxed front patio make it easy with strollers.',
    image: '/images/d7-communalcoffee.png',
  },
  {
    id: 'carnitas',
    name: "Carnitas' Snack Shack",
    category: 'Dining',
    neighborhood: 'Embarcadero',
    description:
      'Pulled pork, harbor views, cold beers, and a wood-clad waterfront patio. The Embarcadero location feels like the way every harbor restaurant should feel and almost never does.',
    familyNote: 'Outdoor picnic tables with bay views — easy with strollers and high chairs.',
    image: '/images/d8-carnitas.png',
  },
  {
    id: 'la-jolla-cove',
    name: 'La Jolla Cove',
    category: 'Outdoors',
    neighborhood: 'La Jolla',
    description:
      'Protected snorkeling, sea lions on the rocks, and one of the most photographed stretches of coastline in California. Locals duck in for a quick swim before lunch.',
    familyNote: 'Tide pools, harbor seals, and protected swimming — endless for kids.',
    image: '/images/d5-lajollacove.png',
  },
  {
    id: 'balboa-park',
    name: 'Balboa Park',
    category: 'Culture',
    neighborhood: 'Balboa Park',
    description:
      'Seventeen museums, a botanical garden, the San Diego Zoo, and Spanish Colonial architecture across 1,200 acres. Locals come for the lawns. Out-of-town guests come for everything else.',
    familyNote: "Locals' default weekend with kids — the zoo, the carousel, and unlimited grass for running.",
    image: '/images/c3-explorebalboa.png',
  },
]

// ─────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function LocalSpotsPage() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? localSpots : localSpots.filter((s) => s.category === active)

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
            <span className="font-sans text-xs text-white/70">Local Spots</span>
          </div>

          <p className="label-text text-white/50 mb-5">A Local Guide</p>
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            The Places We
            <br />
            Keep Coming Back To
          </h1>
          <p className="font-sans font-light text-lg text-white/65 max-w-2xl leading-relaxed">
            Hand-picked restaurants, cafes, and corners of San Diego that locals return to without thinking. Not the most-reviewed. Just the ones that earned it.
          </p>
        </div>
      </section>

      {/* ─── WHERE LOCALS ACTUALLY GO (intro) ─────────────────────── */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="label-text mb-5">Where Locals Actually Go</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight mb-10">
            The Difference Between a Visit
            <br />
            and a Daily Routine
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
            Most lists of San Diego restaurants and cafes are written for the visitor — the postcard moments, the highest-rated dinner reservations. This is not that list.
          </p>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
            These are the places locals actually go. The morning coffee shops where regulars are recognized at the door. The casual lunches that become the rest of the afternoon. The parks where kids spend their weekends. The dinner spots that have earned their place on the table over decades.
          </p>
          <p className="font-sans text-base text-stone-600 leading-relaxed">
            Some are obvious. A few you would walk past. All of them are worth your time.
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

      {/* ─── LOCAL SPOTS GRID ─────────────────────────────────────── */}
      <section className="bg-white pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((spot) => (
              <article key={spot.id} className="group">
                <div className="relative h-72 overflow-hidden mb-6">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="label-text text-gold mb-2">{spot.category}</p>
                <h3 className="font-serif font-normal text-2xl text-stone-900 mb-1 leading-snug">
                  {spot.name}
                </h3>
                <p className="font-sans font-light text-xs text-stone-400 mb-4 tracking-wider uppercase">
                  {spot.neighborhood}
                </p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed mb-4">
                  {spot.description}
                </p>
                {spot.familyNote && (
                  <p className="font-sans text-xs text-stone-500 italic leading-relaxed border-l-2 border-gold/40 pl-3">
                    {spot.familyNote}
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
