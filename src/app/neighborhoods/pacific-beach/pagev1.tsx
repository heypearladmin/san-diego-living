import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pacific Beach | Neighborhood Guide',
  description:
    'Your guide to living in Pacific Beach — the boardwalk, Crystal Pier, surf culture, walkable village, and the most authentic beach town energy in San Diego.',
}

const quickFacts = [
  { value: '92', label: 'Walk Score' },
  { value: '7/10', label: 'School Rating' },
  { value: '8 mi', label: 'to Downtown SD' },
  { value: '3 mi', label: 'of Coastline' },
  { value: '$1.6M', label: 'Median Home Price' },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      "From Crystal Pier to Tourmaline Surfing Park, PB's beach culture is the real thing — surfers, longboarders, and the daily ritual of sunset watching.",
    image: '/images/PB-4a.png',
  },
  {
    category: 'Dining',
    description:
      'JRDN at Tower 23, beachfront patios on Mission Boulevard, and the kind of casual coastal dining you do not have to dress up for.',
    image: '/images/PB-4b.png',
  },
  {
    category: 'Culture',
    description:
      "Garnet Avenue's vintage neon, surf shops, hand-painted murals, and the unbroken thread of California beach-town heritage you cannot fake.",
    image: '/images/PB-4c.png',
  },
  {
    category: 'Outdoors',
    description:
      'Mission Bay Park, paddleboarding, beach volleyball, and morning runs along the boardwalk — the active lifestyle is lived outdoors here.',
    image: '/images/PB-4d.png',
  },
]

const thingsToDo = [
  {
    title: 'Surf at Crystal Pier',
    description:
      'One of the most consistent and friendly surf breaks in San Diego — perfect for longboarders and the place locals learned how to surf.',
    category: 'Outdoors',
    image: '/images/PB-3a.png',
  },
  {
    title: 'Cruise the Boardwalk',
    description:
      'The 3-mile concrete boardwalk along PB and Mission Beach is the unofficial main street — best at golden hour on a vintage cruiser bike.',
    category: 'Lifestyle',
    image: '/images/PB-3b.png',
  },
  {
    title: 'Sunset at Tower 23',
    description:
      "Modern oceanfront rooftop with craft cocktails and an unobstructed Pacific view — the most refined sunset move PB has to offer.",
    category: 'Dining',
    image: '/images/PB-3c.png',
  },
]

const localBusinesses = [
  {
    name: "Kono's Cafe",
    type: 'Breakfast',
    description:
      'The legendary tiny breakfast joint at the foot of Crystal Pier — locals call it a PB rite of passage.',
    image: '/images/PB-5a.png',
  },
  {
    name: 'JRDN at Tower 23',
    type: 'Fine Dining',
    description:
      "PB's only oceanfront luxury hotel restaurant — the rooftop that elevated the neighborhood's dining scene.",
    image: '/images/PB-5b.png',
  },
  {
    name: 'Crystal Pier',
    type: 'Landmark',
    description:
      'The 700-foot wooden pier and beach cottages — one of the last working public piers on the California coast.',
    image: '/images/PB-5c.png',
  },
  {
    name: 'PB Surf Shops',
    type: 'Surf',
    description:
      'Independent surf shops along Mission Boulevard — where local surfers actually buy their boards and wax.',
    image: '/images/PB-5d.png',
  },
]

const whoItsFor = [
  {
    label: 'Young Professionals',
    description: 'Walkable village, vibrant nightlife, and a community where work-life balance includes a morning surf.',
  },
  {
    label: 'Surfers & Beach Lovers',
    description: 'Consistent surf, easy Mission Bay access, and a community built entirely around the water.',
  },
  {
    label: 'Active Lifestyle Seekers',
    description: 'Boardwalk runners, paddle sports, beach volleyball, bike culture — PB rewards living outdoors.',
  },
  {
    label: 'First-Time Coastal Buyers',
    description: 'A more accessible coastal entry point than La Jolla or Del Mar, with all the upside of being on the water.',
  },
]

const schools = [
  { name: 'Crown Point Elementary', grades: 'K–5', rating: '8/10', type: 'Public' },
  { name: 'Pacific Beach Elementary', grades: 'K–5', rating: '7/10', type: 'Public' },
  { name: 'Pacific Beach Middle School', grades: '6–8', rating: '6/10', type: 'Public' },
  { name: 'Mission Bay High School', grades: '9–12', rating: '7/10', type: 'Public' },
]

const properties = [
  {
    address: '4500 Ocean Boulevard',
    price: '$2,895,000',
    beds: 3,
    baths: 3,
    sqft: '2,200',
    type: 'Condominium',
    image: '/images/PB-7a.png',
    tag: 'Oceanfront',
  },
  {
    address: '3850 Riviera Drive',
    price: '$3,495,000',
    beds: 4,
    baths: 4,
    sqft: '3,400',
    type: 'Single Family',
    image: '/images/PB-7b.png',
    tag: 'Bayfront',
  },
  {
    address: '1825 Diamond Street',
    price: '$1,895,000',
    beds: 3,
    baths: 2.5,
    sqft: '2,100',
    type: 'Single Family',
    image: '/images/PB-7c.png',
    tag: 'Renovated Craftsman',
  },
]

export default function PacificBeachPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="/images/PB-1.png"
          alt="Pacific Beach Crystal Pier at sunset"
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
            <span className="font-sans text-xs text-white/80">Pacific Beach</span>
          </div>

          <p className="label-text text-white/60 mb-4">Neighborhood Guide</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">Pacific Beach</h1>
          <p className="font-sans text-lg text-white/70 max-w-xl font-light">
            Vibrant beach culture, walkable streets, and the most authentic surf town energy in San Diego.
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
              <p className="label-text mb-4">About Pacific Beach</p>
              <h2 className="section-heading mb-8">
                The Beach Town
                <br />
                That Stayed a Beach Town
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Pacific Beach is the rare San Diego coastal neighborhood that did not lose its soul to gentrification. The boardwalk is still concrete. The pier is still wooden. The surf shops still sell boards to people who actually surf. And on any given morning at Crystal Pier, you will find the same lineup of locals you would have found in 1985.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                The village along Garnet Avenue and Mission Boulevard is walkable, vibrant, and densely packed with restaurants, dive bars, vintage shops, and trendy newer cafes. It is the kind of place where dinner happens at 6, sunset happens at the boardwalk, and you do not need shoes for either.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Residents skew younger and more active than other San Diego coastal neighborhoods, but families and longtime locals anchor the community. Living here means you live outside — boardwalk, beach, bay, repeat.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Ideal For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Young professionals, surfers, active families
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Neighborhood Feel</p>
                  <p className="font-sans text-sm text-stone-700">
                    Casual, vibrant, surf-forward
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">Crystal Pier, boardwalk, surf culture</p>
                </div>
                <div>
                  <p className="label-text mb-2">Commute to Downtown</p>
                  <p className="font-sans text-sm text-stone-700">15–20 min by car</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/PB-2.png"
                  alt="Garnet Avenue Pacific Beach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  Pacific Beach has the highest concentration of surf shops per capita in San Diego County.
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
            <p className="label-text mb-3">Is Pacific Beach Right for You?</p>
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
              in Pacific Beach
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
            <p className="label-text mb-3">Life in Pacific Beach</p>
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
                in Pacific Beach
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
                Solid Schools,
                <br />
                Strong Community Pull
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                Pacific Beach schools are part of San Diego Unified School District. Crown Point Elementary consistently ranks among the strongest public elementary options on the coast, and Mission Bay High School has invested heavily in its IB program. Many families also tap into nearby private and charter alternatives.
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
                src="/images/PB-6.png"
                alt="Mission Bay High School campus"
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
                Moving to Pacific Beach?
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
          <p className="label-text text-stone-500 mb-5">Thinking About Pacific Beach?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            We Can Help You
            <br />
            Find Your Spot in PB
          </h2>
          <p className="font-sans text-stone-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you are exploring Pacific Beach for the first time, looking to upgrade to an oceanfront home, or just want to talk about the neighborhood — connect with a local expert who knows PB well.
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
