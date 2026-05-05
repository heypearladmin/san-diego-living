import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Neighborhoods | San Diego Living',
  description:
    'A guide to coastal San Diego — La Jolla, Del Mar, Pacific Beach, and Coronado. Each part of the city moves at its own pace.',
}

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
// FEATURED NEIGHBORHOOD
// ─────────────────────────────────────────────────────────────────────
const featured = {
  name: 'La Jolla',
  tagline: 'Cliffs, cove, and a village that has not lost its quiet.',
  description:
    'Seven miles of rugged Pacific coastline. A walkable village with Michelin-recognized dining and galleries that have been there for decades. World-class research institutions just up the hill. La Jolla earns its reputation — and most of the people who land here never leave.',
  image: '/images/b1 lajollacard.png',
  href: '/neighborhoods/la-jolla',
  vibe: 'Cliffs · Cove · Old Village',
}

// ─────────────────────────────────────────────────────────────────────
// SUPPORTING NEIGHBORHOODS
// ─────────────────────────────────────────────────────────────────────
const neighborhoods = [
  {
    name: 'Del Mar',
    tagline: 'One point seven square miles where everyone knows everyone.',
    description:
      'Bluff homes, the historic 1922 train station, the summer racetrack, and a village that holds onto its small-town soul.',
    vibe: 'Bluff Homes · Racetrack · Village',
    image: '/images/b2 delmarcard.png',
    href: '/neighborhoods/del-mar',
  },
  {
    name: 'Pacific Beach',
    tagline: 'Boardwalk mornings and barefoot evenings.',
    description:
      'Crystal Pier, surf shops, vintage neon, and the most unbroken thread of California beach-town heritage you can find on the coast.',
    vibe: 'Crystal Pier · Surf · Cruiser Bikes',
    image: '/images/b3 pacificbeachcard.png',
    href: '/neighborhoods/pacific-beach',
  },
  {
    name: 'Coronado',
    tagline: 'Across the bridge, time slows.',
    description:
      'An island in spirit, with the 1888 Hotel Del, Orange Avenue village charm, and homes that quietly pass between generations.',
    vibe: 'Hotel Del · Orange Avenue · Ferry',
    image: '/images/b4 coronadocard.png',
    href: '/neighborhoods/coronado',
  },
]

// ─────────────────────────────────────────────────────────────────────
// LIFESTYLE CONTEXT
// ─────────────────────────────────────────────────────────────────────
const lifestyleContext = [
  {
    label: 'Coastal Luxury',
    neighborhoods: 'La Jolla, Coronado',
    description:
      'Refined, established, multi-generational. Communities where homes are passed down between families and the lifestyle is built around the ocean view, the village, and the school your kids walked to.',
  },
  {
    label: 'Village Lifestyle',
    neighborhoods: 'Del Mar',
    description:
      'Smaller, walkable, slower. A community where neighbors know each other by name and most of daily life happens within a few blocks of home — the bluffs, the Plaza, the same regulars at the same tables.',
  },
  {
    label: 'Active & Social',
    neighborhoods: 'Pacific Beach',
    description:
      'Younger, louder, more outdoors. A community built around the boardwalk, the surf, the bay, and the kind of casual coastal energy you do not have to dress up for.',
  },
]

export default function NeighborhoodsPage() {
  return (
    <>
      {/* ─── HERO (matches working homepage pattern) ─────────────── */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/a1 homepagehero.png"
          alt="San Diego coastal communities at golden hour"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45 z-10" />

        <div className="absolute inset-0 z-20 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="/"
                className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                San Diego Living
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="font-sans text-xs text-white/80">Neighborhoods</span>
            </div>

            <p className="text-white/60 text-xs tracking-widest uppercase mb-4">
              Coastal San Diego
            </p>

            <h1 className="text-white font-serif font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-4xl">
              Each Part of San Diego
              <br />
              Has Its Own Rhythm
            </h1>

            <p className="font-sans font-light text-lg text-white/75 max-w-2xl leading-relaxed">
              Some communities slow down by design. Others never stop. The right one has less to do with where it sits on the map and more to do with how you actually want to spend a day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED NEIGHBORHOOD ─────────────────────────────────── */}
      <section className="bg-white pt-32 lg:pt-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">A Closer Look</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight max-w-2xl">
            Start with the One Everyone Knows.
          </h2>
          <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-md leading-relaxed">
            La Jolla is the postcard. The cliffs are the cliffs for a reason. But what keeps people here is what happens between the headlines.
          </p>
        </div>

        <Link
          href={featured.href}
          className="group relative block overflow-hidden h-72 sm:h-[480px] lg:h-[700px] w-full"
        >
          <Image
            src={featured.image}
            alt={featured.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 lg:p-16 max-w-3xl">
            <p className="text-white/45 text-xs tracking-widest uppercase mb-4">Featured Neighborhood</p>

            <p className="font-serif font-normal text-5xl lg:text-7xl text-white leading-[1.05] mb-5">
              {featured.name}
            </p>

            <p className="font-sans text-base lg:text-lg text-white/80 italic mb-5 max-w-xl">
              {featured.tagline}
            </p>

            <p className="font-sans font-light text-sm lg:text-base text-white/65 leading-relaxed max-w-xl mb-7">
              {featured.description}
            </p>

            <p className="font-sans font-light text-xs text-white/40 tracking-widest uppercase">
              {featured.vibe}
            </p>
          </div>
        </Link>
      </section>

      {/* ─── NEIGHBORHOOD GRID ─────────────────────────────────────── */}
      <section className="bg-white py-32 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">More to Explore</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight max-w-2xl">
            Three More Communities,
            <br />
            Three Different Rhythms.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {neighborhoods.map((n) => (
              <Link
                key={n.name}
                href={n.href}
                className="group relative block overflow-hidden h-72 sm:h-[400px] lg:h-[500px] w-full"
              >
                <Image
                  src={n.image}
                  alt={n.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 lg:p-10 max-w-md">
                  <p className="font-serif font-normal text-3xl lg:text-4xl text-white mb-3 leading-tight">
                    {n.name}
                  </p>
                  <p className="font-sans text-sm text-white/80 italic mb-4">{n.tagline}</p>
                  <p className="font-sans font-light text-sm text-white/55 leading-relaxed mb-5">
                    {n.description}
                  </p>
                  <p className="font-sans font-light text-xs text-white/35 tracking-widest uppercase">
                    {n.vibe}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFESTYLE CONTEXT ─────────────────────────────────────── */}
      <section className="bg-stone-50 py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">A Small Guide</p>
            <h2 className="font-serif font-normal text-4xl md:text-5xl text-stone-900 leading-[1.1] mb-7">
              Choosing the Right
              <br />
              Part of San Diego
            </h2>
            <p className="font-sans font-light text-base text-stone-600 leading-relaxed">
              People often arrive looking for &ldquo;San Diego&rdquo; and leave with a much more specific idea — the neighborhood that matched the way they actually wanted to live. Three rough categories tend to emerge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-stone-200 pt-14">
            {lifestyleContext.map((item) => (
              <div key={item.label}>
                <p className="text-amber-600 text-xs tracking-widest uppercase mb-5">{item.label}</p>
                <p className="font-serif font-normal text-2xl text-stone-900 mb-5 leading-snug">
                  {item.neighborhoods}
                </p>
                <p className="font-sans font-light text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTINUING TO DOCUMENT ────────────────────────────────── */}
      <section className="bg-white py-32 lg:py-40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-amber-600 mx-auto mb-12" />
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 mb-8 leading-[1.15]">
            More Communities,
            <br />
            Still Being Written
          </h2>
          <p className="font-sans font-light text-base text-stone-500 leading-relaxed">
            We are continuing to document the neighborhoods that define San Diego — from North Park to Little Italy, Mission Hills to Carmel Valley, and beyond. Each community we cover gets the same depth as the four above.
          </p>
          <div className="w-8 h-px bg-amber-600 mx-auto mt-12" />
        </div>
      </section>

      {/* ─── LOCAL EXPERT (soft CTA) ───────────────────────────────── */}
      <section className="bg-stone-50 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-5">Curious About Life in San Diego?</p>
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
              className="font-sans text-xs tracking-widest uppercase border border-stone-900 text-stone-900 px-10 py-4 hover:bg-stone-900 hover:text-white transition-colors duration-500"
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
