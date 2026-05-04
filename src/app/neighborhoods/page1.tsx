import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Neighborhoods | San Diego Living',
  description:
    'Explore the distinct neighborhoods of coastal San Diego — from La Jolla and Del Mar to Pacific Beach and Coronado.',
}

const neighborhoods = [
  {
    name: 'La Jolla',
    tagline: 'Clifftop grandeur by the sea',
    vibe: 'Upscale village · Ocean views · Culture',
    href: '/neighborhoods/la-jolla',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Del Mar',
    tagline: 'Village charm, racetrack legacy',
    vibe: 'Relaxed · Walkable · Family-friendly',
    href: '/neighborhoods/del-mar',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pacific Beach',
    tagline: 'Vibrant energy, walkable coast',
    vibe: 'Young · Active · Beach lifestyle',
    href: '/neighborhoods/pacific-beach',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Coronado',
    tagline: 'Island elegance, historic soul',
    vibe: 'Quiet · Prestige · Close-knit',
    href: '/neighborhoods/coronado',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
]

export default function NeighborhoodsPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="label-text text-stone-500 mb-5">San Diego Living</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-2xl mb-6">
            Find Your San Diego Neighborhood
          </h1>
          <p className="font-sans font-light text-base text-stone-400 max-w-xl leading-relaxed">
            Every neighborhood in San Diego has its own rhythm, character, and community. Browse them all and find the one that fits the life you want to live.
          </p>
        </div>
      </section>

      {/* ─── NEIGHBORHOOD GRID ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map((n) => (
              <Link key={n.name} href={n.href} className="group block">
                <div className="relative h-64 overflow-hidden mb-5">
                  <Image
                    src={n.image}
                    alt={n.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-serif text-2xl text-white leading-tight">{n.name}</p>
                  </div>
                </div>
                <p className="font-sans font-light text-sm text-stone-500 mb-1">{n.tagline}</p>
                <p className="label-text text-stone-400">{n.vibe}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t border-stone-100 pt-12">
            <p className="label-text mb-3">More Coming Soon</p>
            <p className="font-sans font-light text-sm text-stone-400 max-w-lg leading-relaxed">
              We are adding in-depth guides for North Park, Little Italy, Hillcrest, Ocean Beach, and more. Check back soon or subscribe for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
