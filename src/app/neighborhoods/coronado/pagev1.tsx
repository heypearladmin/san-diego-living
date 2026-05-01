import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coronado | Neighborhood Guide',
  description:
    'Your guide to living in Coronado — the Hotel del Coronado, Orange Avenue, beaches, schools, and the small-town island feel that makes this San Diego coastal community unlike anywhere else.',
}

const quickFacts = [
  { value: '88', label: 'Walk Score' },
  { value: '9/10', label: 'School Rating' },
  { value: '4 mi', label: 'to Downtown SD' },
  { value: '5 mi', label: 'of Coastline' },
  { value: '$3.4M', label: 'Median Home Price' },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      'Coronado Beach is consistently ranked among the best beaches in America, famous for its gold-flecked sparkling sand and the Hotel Del backdrop.',
    image: '/images/COR-4a.png',
  },
  {
    category: 'Dining',
    description:
      "From 1500 Ocean at Hotel Del to the bayfront patios at Ferry Landing, Coronado's dining culture is refined, scenic, and never rushed.",
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
      'Glorietta Bay paddleboarding, the Silver Strand bikeway, the Coronado Golf Course, and the iconic ferry across the bay to downtown.',
    image: '/images/COR-4d.png',
  },
]

const thingsToDo = [
  {
    title: 'Stay at Hotel del Coronado',
    description:
      'The 1888 Victorian beachfront resort that put Coronado on the map — the most photographed building on the California coast.',
    category: 'Landmark',
    image: '/images/COR-3a.png',
  },
  {
    title: 'Bike the Silver Strand',
    description:
      'The protected 7-mile bikeway connecting Coronado to Imperial Beach — flat, scenic, and one of the best rides in San Diego County.',
    category: 'Outdoors',
    image: '/images/COR-3b.png',
  },
  {
    title: 'Coronado Ferry Landing',
    description:
      'Take the ferry from downtown San Diego, walk the bayfront marketplace, and watch the skyline glow at sunset across the water.',
    category: 'Lifestyle',
    image: '/images/COR-3c.png',
  },
]

const localBusinesses = [
  {
    name: 'Hotel del Coronado',
    type: 'Landmark Resort',
    description:
      'The 1888 island icon — afternoon tea, Sunday brunch, or a sunset cocktail on the Sun Deck with the Pacific stretching out behind you.',
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
      'The bayfront village of shops, restaurants, and the Coronado ferry — best at golden hour with the downtown skyline as your backdrop.',
    image: '/images/COR-5d.png',
  },
]

const whoItsFor = [
  {
    label: 'Multi-Generational Families',
    description: 'Top-rated schools, low crime, walkable village, and the kind of stability where kids grow up and come back to raise their own.',
  },
  {
    label: 'Military & Naval Officers',
    description: "Adjacent to NAS North Island, with a long-standing community of active and retired military families integrated into the island.",
  },
  {
    label: 'Second-Home Owners',
    description: 'One of the most stable luxury markets in California — Coronado homes are typically held for decades, often passed down.',
  },
  {
    label: 'Privacy Seekers',
    description: 'The bridge gives Coronado a separated, contained feel — an island in spirit even though it is technically a peninsula.',
  },
]

const schools = [
  { name: 'Silver Strand Elementary', grades: 'K–5', rating: '9/10', type: 'Public' },
  { name: 'Coronado Middle School', grades: '6–8', rating: '9/10', type: 'Public' },
  { name: 'Coronado High School', grades: '9–12', rating: '9/10', type: 'Public' },
  { name: 'Sacred Heart Academy', grades: 'K–8', rating: 'Top Ranked', type: 'Private' },
]

const properties = [
  {
    address: '825 Ocean Boulevard',
    price: '$14,950,000',
    beds: 6,
    baths: 6.5,
    sqft: '7,800',
    type: 'Single Family',
    image: '/images/COR-7a.png',
    tag: 'Oceanfront Estate',
  },
  {
    address: '1620 Glorietta Boulevard',
    price: '$8,495,000',
    beds: 5,
    baths: 5,
    sqft: '5,200',
    type: 'Single Family',
    image: '/images/COR-7b.png',
    tag: 'Bayfront',
  },
  {
    address: '22 Sandpiper Strand',
    price: '$4,250,000',
    beds: 4,
    baths: 4,
    sqft: '3,800',
    type: 'Single Family',
    image: '/images/COR-7c.png',
    tag: 'Cays Waterfront',
  },
]

export default function CoronadoPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
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
          <p className="font-sans text-lg text-white/70 max-w-xl font-light">
            Island elegance, historic soul, and one of the most preserved small-town communities anywhere on the California coast.
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
              <p className="label-text mb-4">About Coronado</p>
              <h2 className="section-heading mb-8">
                An Island That
                <br />
                Stayed a Small Town
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Coronado is connected to the mainland by a bridge, but the moment you cross it, you understand why locals always call it the island. The pace slows. The streets quiet. Mature palms line every avenue. The 1888 Hotel del Coronado, with its red-shingled turrets and white Victorian wood, presides over Coronado Beach as it has for over a century.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Orange Avenue — the village main street — is the kind of small-town American downtown most communities lost decades ago. Independent shops, restored mid-century diners, the historic Village Theater, the local bookstore where the staff knows your name. Cruiser bikes outnumber cars. Kids walk to school. Neighbors actually know each other.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                The community is anchored by multi-generational families, military households tied to NAS North Island, and longtime second-home owners who treat Coronado as a constant. Buyers who land here typically hold for decades — and the homes that do change hands are often passed down rather than sold.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Ideal For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Families, retirees, second-home owners
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Neighborhood Feel</p>
                  <p className="font-sans text-sm text-stone-700">
                    Refined, small-town, preserved
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">Hotel Del, Orange Ave, beaches</p>
                </div>
                <div>
                  <p className="label-text mb-2">Commute to Downtown</p>
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
                  Coronado homes change hands less frequently than almost any other San Diego coastal market — most are held for generations.
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
            <p className="label-text mb-3">Is Coronado Right for You?</p>
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
              in Coronado
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
            <p className="label-text mb-3">Life in Coronado</p>
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
                in Coronado
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
                One of California's
                <br />
                Top-Performing Districts
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                Coronado Unified School District is consistently ranked among the strongest public school districts in the state — a major reason multi-generational families stay. The K–12 path from Silver Strand Elementary to Coronado High is uninterrupted, walkable, and tightly knit.
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
                src="/images/COR-6.png"
                alt="Coronado High School campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── REAL ESTATE ──────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <p className="label-text mb-3">Real Estate</p>
              <h2 className="section-heading">
                Thinking About
                <br />
                Moving to Coronado?
              </h2>
            </div>
            <Link
              href="/contact"
              className="font-sans text-sm tracking-wider text-stone-500 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors self-start sm:self-auto"
            >
              Talk to a Local Expert →
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
            Listings provided in partnership with Sarah Chen, Compass Real Estate · DRE #02054123. All information sourced from SANDICOR MLS and deemed reliable but not guaranteed.
          </p>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text text-stone-500 mb-5">Thinking About Coronado?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            We Can Help You
            <br />
            Find a Home on the Island
          </h2>
          <p className="font-sans text-stone-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Coronado homes do not come on the market often. If you are exploring a move, planning a second home, or simply want to understand the island — connect with a local expert who knows Coronado well.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              Connect with a Local Expert
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
