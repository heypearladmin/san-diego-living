import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'La Jolla | Neighborhood Guide',
  description:
    'The definitive guide to La Jolla real estate. Explore median prices, lifestyle, schools, and featured properties in San Diego\'s most prestigious coastal neighborhood.',
}

const stats = [
  { value: '$2.4M', label: 'Median Sale Price' },
  { value: '18', label: 'Avg. Days on Market' },
  { value: '9/10', label: 'School Rating' },
  { value: '71', label: 'Walk Score' },
  { value: '12 mi', label: 'to Downtown SD' },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      'La Jolla Cove, Children\'s Pool, and Windansea Beach offer world-class snorkeling, kayaking, and simply one of the most dramatic coastlines in California.',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Dining',
    description:
      'From George\'s at the Cove to the intimate bistros of Girard Avenue, La Jolla boasts Michelin-recognized cuisine and a dining culture that rivals any major city.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Culture',
    description:
      "Home to the Salk Institute, UCSD campus, La Jolla Playhouse, and the Museum of Contemporary Art — this is one of California\'s most intellectually rich communities.",
    image:
      'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Outdoors',
    description:
      "Torrey Pines State Reserve, coastal trails, and world-ranked golf at Torrey Pines Golf Course give residents unmatched access to nature steps from their front door.",
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
  },
]

const properties = [
  {
    address: '1248 Prospect Street',
    price: '$4,295,000',
    beds: 4,
    baths: 4.5,
    sqft: '4,200',
    type: 'Single Family',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    tag: 'Ocean Views',
  },
  {
    address: '7522 Eads Avenue',
    price: '$2,875,000',
    beds: 3,
    baths: 3,
    sqft: '2,850',
    type: 'Condominium',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    tag: 'Newly Renovated',
  },
  {
    address: '5580 La Jolla Blvd',
    price: '$3,650,000',
    beds: 5,
    baths: 5,
    sqft: '5,100',
    type: 'Single Family',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    tag: 'Corner Lot',
  },
]

const schools = [
  { name: 'La Jolla Elementary', grades: 'K–5', rating: '10/10', type: 'Public' },
  { name: 'Muirlands Middle School', grades: '6–8', rating: '9/10', type: 'Public' },
  { name: 'La Jolla High School', grades: '9–12', rating: '9/10', type: 'Public' },
  { name: 'The Bishop\'s School', grades: '6–12', rating: 'Top Ranked', type: 'Private' },
]

export default function LaJollaPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80"
          alt="La Jolla coastal cliffs at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          {/* Breadcrumb */}
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
            Where coastal grandeur meets intellectual culture on San Diego's most coveted shores.
          </p>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-stone-100">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-7 text-center">
                <p className="font-serif text-2xl text-stone-900 mb-1">{stat.value}</p>
                <p className="font-sans text-xs text-stone-500">{stat.label}</p>
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
                California's Crown
                <br />
                Jewel of the Coast
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Perched along seven miles of rugged Pacific coastline, La Jolla occupies a singular position in California real estate — a place where the architecture is as considered as the landscape, and where neighbors include Nobel laureates, celebrated artists, and global entrepreneurs.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                The village core along Prospect Street and Girard Avenue delivers an urbane mix of galleries, white-tablecloth dining, and boutique retail — all within walking distance of sea caves, tide pools, and protected snorkeling beaches that feel entirely apart from the city below.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Architecturally, La Jolla is a study in contrasts: Spanish Colonial Revival estates from the 1920s coexist with ambitious modernist compounds built for the view. What unites them is quality. This is one of the few markets in Southern California where truly irreplaceable properties trade hands.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Best For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Families, professionals, second-home buyers
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Property Types</p>
                  <p className="font-sans text-sm text-stone-700">
                    Single-family, condos, townhomes, estates
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Price Range</p>
                  <p className="font-sans text-sm text-stone-700">$900K – $30M+</p>
                </div>
                <div>
                  <p className="label-text mb-2">Neighborhood Feel</p>
                  <p className="font-sans text-sm text-stone-700">
                    Upscale village, walkable, coastal
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?auto=format&fit=crop&w=900&q=80"
                  alt="La Jolla village and coastline from above"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Market Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  La Jolla has seen 11 consecutive quarters of price appreciation in the $2M+ segment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIFESTYLE ────────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="label-text mb-3">Life in La Jolla</p>
            <h2 className="section-heading max-w-lg">
              A Neighborhood Built for
              <br />
              the Good Life
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

      {/* ─── FEATURED PROPERTIES ──────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <p className="label-text mb-3">Selected Listings</p>
              <h2 className="section-heading">
                Currently Available
                <br />
                in La Jolla
              </h2>
            </div>
            <Link
              href="/contact"
              className="font-sans text-sm tracking-wider text-stone-500 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors self-start sm:self-auto"
            >
              View All Listings →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.address} className="group border border-stone-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.address}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white font-sans text-xs tracking-wider px-3 py-1 text-stone-700">
                      {property.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-serif text-2xl text-stone-900 mb-1">{property.price}</p>
                  <p className="font-sans text-sm text-stone-500 mb-4">{property.address}</p>
                  <div className="flex items-center gap-4 text-xs font-sans text-stone-600 border-t border-stone-100 pt-4">
                    <span>{property.beds} Beds</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span>{property.baths} Baths</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span>{property.sqft} sf</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span>{property.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-sans text-xs text-stone-400">
            Listings curated by Sarah Chen, Compass Real Estate · DRE #02054123. All information sourced from SANDICOR MLS and deemed reliable but not guaranteed.
          </p>
        </div>
      </section>

      {/* ─── SCHOOLS ──────────────────────────────────────────────────── */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-text mb-4">Education</p>
              <h2 className="section-heading mb-6">
                Among San Diego's
                <br />
                Top-Rated Schools
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                The La Jolla Unified attendance area is consistently ranked among the top 5% in the state. Proximity to UC San Diego also provides unique enrichment and dual-enrollment opportunities.
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

            <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80"
                alt="La Jolla school campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECT CTA ──────────────────────────────────────────────── */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text text-stone-500 mb-5">Ready to Explore La Jolla?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            Start the Conversation
          </h2>
          <p className="font-sans text-stone-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you're considering a purchase, evaluating your current home's value, or simply want to understand the market — Sarah Chen is available for a no-pressure consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              Schedule a Consultation
            </Link>
            <a
              href="tel:+16195550142"
              className="font-sans text-sm tracking-wider text-stone-400 hover:text-white border-b border-stone-700 hover:border-white pb-0.5 transition-colors"
            >
              (619) 555-0142
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
