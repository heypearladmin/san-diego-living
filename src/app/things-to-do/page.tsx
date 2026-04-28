import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Things To Do | San Diego Living',
  description:
    'The best activities, experiences, and places to explore in coastal San Diego — for visitors and locals alike.',
}

const activities = [
  {
    title: 'Snorkel La Jolla Cove',
    category: 'Beaches',
    neighborhood: 'La Jolla',
    description:
      'One of the best snorkeling spots in Southern California. Sea caves, leopard sharks, garibaldi fish, and resident sea lions just offshore.',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hike Torrey Pines',
    category: 'Nature',
    neighborhood: 'Del Mar',
    description:
      'Ancient pine forests, canyon trails, and sweeping Pacific views just minutes from the coast. Free entry on weekdays.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Explore Balboa Park',
    category: 'Culture',
    neighborhood: 'Balboa Park',
    description:
      'Seventeen museums, a botanical garden, free outdoor concerts, and the San Diego Zoo — spend a full day here.',
    image:
      'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Surf in Pacific Beach',
    category: 'Outdoors',
    neighborhood: 'Pacific Beach',
    description:
      'Consistent beach breaks, plenty of surf schools, and a boardwalk culture that makes PB one of the best places to learn.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Dine in Little Italy',
    category: 'Food & Drink',
    neighborhood: 'Little Italy',
    description:
      "Walk India Street for dinner — Born and Raised, Juniper & Ivy, Ironside Fish. San Diego's strongest food corridor.",
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Del Mar Thoroughbred Club',
    category: 'Events',
    neighborhood: 'Del Mar',
    description:
      'The summer racing season at Del Mar is a local institution — dress up, bet lightly, and enjoy one of the most scenic tracks in the country.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Walk the Embarcadero',
    category: 'Outdoors',
    neighborhood: 'Downtown',
    description:
      'The harbour path from the Maritime Museum down to Seaport Village is the best free walk in the city — especially at golden hour.',
    image:
      'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Visit the Birch Aquarium',
    category: 'Culture',
    neighborhood: 'La Jolla',
    description:
      'Perched above Scripps Institution of Oceanography with panoramic ocean views. Great for all ages, genuinely educational.',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'North Park Brewery Tour',
    category: 'Food & Drink',
    neighborhood: 'North Park',
    description:
      "San Diego is one of the great craft beer cities in the country. North Park's 30th Street corridor is the best place to start.",
    image:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Beaches', 'Nature', 'Culture', 'Outdoors', 'Food & Drink', 'Events']

export default function ThingsToDoPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="label-text text-stone-500 mb-5">San Diego Living</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-2xl mb-6">
            Things To Do in San Diego
          </h1>
          <p className="font-sans font-light text-base text-stone-400 max-w-xl leading-relaxed">
            Activities, experiences, and places worth your time — curated for people who want to experience San Diego like a local, not a tourist.
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

      {/* ─── ACTIVITIES GRID ──────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {activities.map((activity) => (
              <div key={activity.title} className="group">
                <div className="relative h-52 overflow-hidden mb-5">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="label-text text-gold">{activity.category}</p>
                  <span className="w-px h-3 bg-stone-200" />
                  <p className="font-sans text-xs text-stone-400 tracking-wider uppercase">{activity.neighborhood}</p>
                </div>
                <h3 className="font-serif text-xl text-stone-900 leading-snug mb-3">
                  {activity.title}
                </h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
