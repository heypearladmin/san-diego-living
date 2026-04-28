import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const neighborhoods: Record<string, {
  name: string
  tagline: string
  description: string
  about: string
  image: string
  facts: { value: string; label: string }[]
  idealFor: string
  vibe: string
  bestKnownFor: string
}> = {
  'del-mar': {
    name: 'Del Mar',
    tagline: 'Village charm, racetrack legacy',
    description:
      'A small, unhurried coastal village north of La Jolla — known for its horse racing track, the Torrey Pines reserve on its southern edge, and a genuine small-town feel that has remained mostly intact despite the surrounding growth.',
    about:
      'Del Mar sits between Solana Beach to the north and Torrey Pines to the south, occupying a ridge above one of the finest stretches of North County coastline. The village is compact and walkable — 15th Street is the commercial core — with restaurants, wine bars, and boutiques that lean independent rather than chain. The Del Mar Thoroughbred Club runs a summer racing season from late July through early September that draws national attention and a festive local crowd. Outside of race season, the pace is calm. Residents tend to stay for decades.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    facts: [
      { value: '73', label: 'Walk Score' },
      { value: '9/10', label: 'School Rating' },
      { value: '25 mi', label: 'to Downtown SD' },
      { value: '$3.1M', label: 'Median Home Price' },
      { value: 'Village', label: 'Neighborhood Feel' },
    ],
    idealFor: 'Families, remote professionals, second-home buyers',
    vibe: 'Relaxed · Walkable · Family-friendly',
    bestKnownFor: 'Del Mar Racetrack, Torrey Pines, 15th Street dining',
  },
  'pacific-beach': {
    name: 'Pacific Beach',
    tagline: 'Vibrant energy, walkable coast',
    description:
      'San Diego\'s most energetic coastal neighborhood — a long stretch of boardwalk, consistent beach breaks, and a density of bars, coffee shops, and surf schools that make it the city\'s most walkable beach community.',
    about:
      'Pacific Beach runs from Mission Bay in the south up to La Jolla\'s southern border at Bird Rock, with Garnet Avenue as its commercial spine and the Crystal Pier as its landmark. It skews younger than most of the coast — a mix of surfers, young professionals, and UCSD graduates who never quite left. The boardwalk draws a daily crowd. Parking is difficult. Almost nothing is more than a ten-minute walk. For people who want an active, outdoor-first lifestyle without the price tag of La Jolla, PB makes a strong case.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80',
    facts: [
      { value: '88', label: 'Walk Score' },
      { value: '8/10', label: 'School Rating' },
      { value: '8 mi', label: 'to Downtown SD' },
      { value: '$1.2M', label: 'Median Home Price' },
      { value: 'Beach Town', label: 'Neighborhood Feel' },
    ],
    idealFor: 'Young professionals, surfers, active lifestyle seekers',
    vibe: 'Young · Active · Beach lifestyle',
    bestKnownFor: 'Crystal Pier, Garnet Avenue, boardwalk culture',
  },
  'coronado': {
    name: 'Coronado',
    tagline: 'Island elegance, historic soul',
    description:
      'Technically a peninsula — connected to the mainland by the Silver Strand — Coronado has the feel of a self-contained island community. Quiet streets, historic architecture, a long military presence, and some of the finest beach in Southern California.',
    about:
      'Coronado sits across the bay from downtown San Diego, connected by the iconic blue arc of the Coronado Bridge and by ferry from the Embarcadero. Orange Avenue runs as the village main street, with the Hotel del Coronado — a Victorian beach resort from 1888 — anchoring the southern end of the commercial strip. The residential streets are orderly and quiet; many have been largely unchanged for decades. The Navy maintains a significant presence here, and that shapes the community\'s character in ways residents tend to appreciate. Coronado Beach, consistently ranked among the best in the country, is the crown jewel.',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80',
    facts: [
      { value: '74', label: 'Walk Score' },
      { value: '9/10', label: 'School Rating' },
      { value: '3 mi', label: 'to Downtown SD' },
      { value: '$2.8M', label: 'Median Home Price' },
      { value: 'Island Village', label: 'Neighborhood Feel' },
    ],
    idealFor: 'Families, retirees, military community, second-home buyers',
    vibe: 'Quiet · Prestige · Close-knit',
    bestKnownFor: 'Hotel del Coronado, Coronado Beach, Orange Avenue',
  },
}

export async function generateStaticParams() {
  return Object.keys(neighborhoods).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const n = neighborhoods[params.slug]
  if (!n) return {}
  return {
    title: `${n.name} | Neighborhood Guide`,
    description: n.description,
  }
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const n = neighborhoods[params.slug]
  if (!n) notFound()

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src={n.image}
          alt={`${n.name} neighborhood`}
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
            <span className="font-sans text-xs text-white/80">{n.name}</span>
          </div>

          <p className="label-text text-white/60 mb-4">Neighborhood Guide</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">{n.name}</h1>
          <p className="font-sans text-lg text-white/70 max-w-xl font-light">{n.tagline}</p>
        </div>
      </section>

      {/* ─── QUICK FACTS BAR ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-stone-100">
            {n.facts.map((fact) => (
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
              <p className="label-text mb-4">About {n.name}</p>
              <h2 className="section-heading mb-8">{n.name}</h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                {n.description}
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                {n.about}
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Ideal For</p>
                  <p className="font-sans text-sm text-stone-700">{n.idealFor}</p>
                </div>
                <div>
                  <p className="label-text mb-2">Neighborhood Feel</p>
                  <p className="font-sans text-sm text-stone-700">{n.vibe}</p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">{n.bestKnownFor}</p>
                </div>
                <div>
                  <p className="label-text mb-2">Median Home Price</p>
                  <p className="font-sans text-sm text-stone-700">
                    {n.facts.find((f) => f.label === 'Median Home Price')?.value}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[480px] overflow-hidden">
              <Image
                src={n.image}
                alt={n.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MORE COMING ──────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="label-text mb-4">Full Guide Coming Soon</p>
            <h2 className="font-serif text-3xl text-stone-900 mb-5 leading-snug">
              We are building a deeper guide to {n.name}
            </h2>
            <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-8">
              Things to do, local restaurants, schools, real estate context, and community insights — all coming shortly. Subscribe for updates or connect with a local expert in the meantime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Connect with a Local Expert
              </Link>
              <Link
                href="/neighborhoods"
                className="font-sans font-light text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-colors self-center"
              >
                ← All Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text text-stone-500 mb-5">Thinking About {n.name}?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
            Connect with a Local Expert
          </h2>
          <p className="font-sans text-stone-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Whether you are exploring the neighborhood or ready to make a move, we can connect you with someone who knows {n.name} well.
          </p>
          <Link href="/contact" className="btn-outline-white">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
