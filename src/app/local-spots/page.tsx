import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Local Spots | San Diego Living',
  description:
    'Hand-picked restaurants, cafes, and destinations across coastal San Diego — the places worth knowing about.',
}

const spots = [
  {
    category: 'Coffee',
    name: 'Bird Rock Coffee Roasters',
    neighborhood: 'La Jolla',
    description:
      'Single-origin roasts and sun-drenched patios in one of the neighborhood\'s most beloved institutions.',
   image: '/images/d1-birdrock.png',
  },
  {
    category: 'Dining',
    name: "George's at the Cove",
    neighborhood: 'La Jolla',
    description:
      'James Beard-recognized cuisine served with uninterrupted views of the Pacific from the rooftop terrace.',
    image: '/images/d2-georges.png',
  },
  {
    category: 'Nature',
    name: 'Torrey Pines State Reserve',
    neighborhood: 'Del Mar',
    description:
      'Ancient pines, rugged coastal canyons, and miles of trails overlooking the Pacific — free and open daily.',
   image: '/images/d3-torreypines.png',
  },
  {
    category: 'Food & Drink',
    name: 'Little Italy Food Hall',
    neighborhood: 'Little Italy',
    description:
      "San Diego's most vibrant food destination — artisan vendors, craft cocktails, and a buzzing open-air atmosphere.",
   image: '/images/d4-littleitaly.png',
  },
  {
    category: 'Coffee',
    name: 'Communal Coffee',
    neighborhood: 'North Park',
    description:
      'A community-first cafe that helped anchor the North Park creative corridor. Great space, great beans.',
   image: '/images/d7-communalcoffee.png',
  },
  {
    category: 'Dining',
    name: "Carnitas' Snack Shack",
    neighborhood: 'Embarcadero',
    description:
      'Pulled pork sandwiches, harbour views, and cold beers — one of the best casual spots on the waterfront.',
   image: '/images/d8-carnitas.png',
  },
  {
    category: 'Outdoors',
    name: 'La Jolla Cove',
    neighborhood: 'La Jolla',
    description:
      'Protected snorkeling, sea lions, and one of the most photographed stretches of coastline in California.',
image: '/images/d5-lajollacove.png',
  },
  {
    category: 'Culture',
    name: 'Balboa Park',
    neighborhood: 'Balboa Park',
    description:
      'Seventeen museums, a botanical garden, the San Diego Zoo, and Spanish Colonial architecture across 1,200 acres.',
  image: '/images/d6-balboapark.jpg',
  },
]

const categories = ['All', 'Coffee', 'Dining', 'Outdoors', 'Nature', 'Culture', 'Food & Drink']

export default function LocalSpotsPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="label-text text-stone-500 mb-5">San Diego Living</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-2xl mb-6">
            Local Spots Worth Knowing About
          </h1>
          <p className="font-sans font-light text-base text-stone-400 max-w-xl leading-relaxed">
            Hand-picked restaurants, cafes, parks, and destinations across coastal San Diego — the places locals actually go.
          </p>
        </div>
      </section>

      {/* ─── FILTER BAR ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`font-sans text-xs tracking-wider px-4 py-2 border transition-colors ${
                  i === 0
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-900 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPOTS GRID ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spots.map((spot) => (
              <div key={spot.name} className="group">
                <div className="relative h-52 overflow-hidden mb-5">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="label-text text-gold mb-2">{spot.category}</p>
                <h3 className="font-serif text-xl text-stone-900 leading-snug mb-1">
                  {spot.name}
                </h3>
                <p className="font-sans font-light text-xs text-stone-400 mb-3 tracking-wider uppercase">
                  {spot.neighborhood}
                </p>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-stone-100 pt-10 text-center">
            <p className="font-sans font-light text-sm text-stone-400">
              More spots added regularly. Have a recommendation?{' '}
              <a href="/contact" className="text-stone-600 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors">
                Let us know →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
