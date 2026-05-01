import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Del Mar | Neighborhood Guide',
  description:
    'Your guide to living in Del Mar — racetrack heritage, bluff-top homes, walkable village, top-rated schools, and the refined coastal lifestyle that defines this North County community.',
}

const quickFacts = [
  { value: '73', label: 'Walk Score' },
  { value: '10/10', label: 'School Rating' },
  { value: '25 mi', label: 'to Downtown SD' },
  { value: '2.5 mi', label: 'of Coastline' },
  { value: '$3.1M', label: 'Median Home Price' },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      "15th Street Beach, Dog Beach, and the dramatic bluffs along Camino del Mar make Del Mar's coastline one of San Diego's most photogenic stretches.",
    image: '/images/DM-4a.png',
  },
  {
    category: 'Dining',
    description:
      'Oceanfront classics like Jake’s Del Mar and Cucina Enoteca at Del Mar Plaza define a culinary scene that values setting as much as the food.',
    image: '/images/DM-4b.png',
  },
  {
    category: 'Culture',
    description:
      'Del Mar Plaza shopping, the historic 1922 train station, the Del Mar Theatre, and the summer racetrack social scene unique to North County.',
    image: '/images/DM-4c.png',
  },
  {
    category: 'Outdoors',
    description:
      "Torrey Pines Reserve immediately south, oceanfront cycling along Coast Highway 101, and bluff trails most San Diegans haven't found.",
    image: '/images/DM-4d.png',
  },
]

const thingsToDo = [
  {
    title: 'Watch the Races at Del Mar',
    description:
      'The summer thoroughbred meet at Del Mar is a regional institution — opening day, sundresses, hats, and one of the most scenic tracks in the country.',
    category: 'Events',
    image: '/images/DM-3a.png',
  },
  {
    title: 'Sunset at Powerhouse Park',
    description:
      'Sunset at Powerhouse Park is a Del Mar tradition — a restored 1920s building set against the wide Pacific bluffs and 15th Street Beach below.',
    category: 'Lifestyle',
    image: '/images/DM-3b.png',
  },
  {
    title: 'Walk Dog Beach (North Beach)',
    description:
      "Off-leash dog beach at the mouth of the San Dieguito River — the unofficial morning ritual for North Del Mar locals.",
    category: 'Outdoors',
    image: '/images/DM-3c.png',
  },
]

const localBusinesses = [
  {
    name: "Jake's Del Mar",
    type: 'Oceanfront Dining',
    description:
      'The mid-century beachfront restaurant locals never get tired of — sunset cocktails, fresh seafood, the same view since 1978.',
    image: '/images/DM-5a.png',
  },
  {
    name: 'Del Mar Plaza',
    type: 'Shopping & Dining',
    description:
      'The Mediterranean-style open-air shopping plaza — the anchor of village life, with ocean views from the upper terrace.',
    image: '/images/DM-5b.png',
  },
  {
    name: 'Powerhouse Park',
    type: 'Community Park',
    description:
      'The bluff-top park and restored 1920s building — sunsets, weddings, weekend picnics, and the unofficial heart of village life.',
    image: '/images/DM-5c.png',
  },
  {
    name: 'Stratford Court',
    type: 'Boutique Shops',
    description:
      "The pedestrian-only courtyard of independent shops, hand-painted signs, and a quiet locals' favorite for browsing.",
    image: '/images/DM-5d.png',
  },
]

const whoItsFor = [
  {
    label: 'Families',
    description: 'Excellent schools, walkable village, and weekend bluff trails just steps from home.',
  },
  {
    label: 'Executives & Remote Pros',
    description: 'Quiet streets, fast I-5 access, and a refined small-town feel that supports serious work.',
  },
  {
    label: 'Retirees',
    description: 'Coastal beauty, healthcare access via Scripps and UCSD, and a longtime stable village community.',
  },
  {
    label: 'Second-Home Buyers',
    description: 'One of the most consistently held coastal markets in California — Del Mar buyers rarely sell.',
  },
]

const schools = [
  { name: 'Del Mar Heights Elementary', grades: 'K–5', rating: '10/10', type: 'Public' },
  { name: 'Del Mar Hills Academy', grades: 'K–5', rating: '9/10', type: 'Public' },
  { name: 'Earl Warren Middle School', grades: '6–8', rating: '9/10', type: 'Public' },
  { name: 'Torrey Pines High School', grades: '9–12', rating: '10/10', type: 'Public' },
]

const properties = [
  {
    address: '2150 Camino del Mar',
    price: '$8,950,000',
    beds: 5,
    baths: 5.5,
    sqft: '6,200',
    type: 'Single Family',
    image: '/images/DM-7a.png',
    tag: 'Oceanfront Bluff',
  },
  {
    address: '425 Stratford Court',
    price: '$4,275,000',
    beds: 4,
    baths: 3.5,
    sqft: '3,800',
    type: 'Single Family',
    image: '/images/DM-7b.png',
    tag: 'Village Walkable',
  },
  {
    address: '13580 Sandown Way',
    price: '$5,495,000',
    beds: 5,
    baths: 5,
    sqft: '5,400',
    type: 'Single Family',
    image: '/images/DM-7c.png',
    tag: 'Modern Estate',
  },
]

export default function DelMarPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image
          src="/images/DM-1.png"
          alt="Del Mar bluffs and coastline at sunset"
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
            <span className="font-sans text-xs text-white/80">Del Mar</span>
          </div>

          <p className="label-text text-white/60 mb-4">Neighborhood Guide</p>
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">Del Mar</h1>
          <p className="font-sans text-lg text-white/70 max-w-xl font-light">
            Village charm, racetrack heritage, and one of the most refined coastal communities in San Diego.
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
              <p className="label-text mb-4">About Del Mar</p>
              <h2 className="section-heading mb-8">
                A Coastal Village
                <br />
                With a Different Pace
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Del Mar covers just 1.7 square miles — a small bluff-top village anchored by Camino del Mar, Del Mar Plaza, the historic 1922 train station, and the famous summer racetrack. Its population is around 4,500. Its coastline is dramatic. And its character has been preserved more carefully than almost anywhere else in San Diego County.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                The lifestyle is unhurried. Mornings start with locals walking dogs at North Beach. Days drift between the village and the bluffs. Sunset belongs to Powerhouse Park, and dinner happens at Jake's, at Cucina Enoteca on the upper Plaza terrace, or at one of the small bistros along Camino del Mar where the same regulars keep the same tables.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Del Mar holds onto its small-town soul. Multi-generational families, second-home owners, executives who fly in from elsewhere — the buyers who land here usually stay. Inventory is tight, and the right home rarely lasts long.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Ideal For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Families, executives, second-home owners
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Neighborhood Feel</p>
                  <p className="font-sans text-sm text-stone-700">
                    Coastal village, refined, low-key
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">Racetrack, bluffs, dining</p>
                </div>
                <div>
                  <p className="label-text mb-2">Commute to Downtown</p>
                  <p className="font-sans text-sm text-stone-700">30–35 min by car</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/DM-2.png"
                  alt="Del Mar Village along Camino del Mar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white px-6 py-5 max-w-xs">
                <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  Del Mar covers just 1.7 square miles — making it one of the most concentrated luxury markets in California.
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
            <p className="label-text mb-3">Is Del Mar Right for You?</p>
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
              in Del Mar
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
            <p className="label-text mb-3">Life in Del Mar</p>
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
                in Del Mar
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
                Among the Strongest
                <br />
                School Districts in California
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                Del Mar schools are part of the Del Mar Union School District (K-6) and the San Dieguito Union High School District (7-12). Both consistently rank among California's strongest. Torrey Pines High School in particular is a top public high school in the state, with deep STEM, arts, and athletics programs.
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
                src="/images/DM-6.png"
                alt="Del Mar school campus"
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
                Moving to Del Mar?
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
          <p className="label-text text-stone-500 mb-5">Thinking About Del Mar?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            We Can Help You
            <br />
            Find a Home in the Village
          </h2>
          <p className="font-sans text-stone-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Del Mar inventory is tight and the right home rarely lasts. If you are exploring the area, planning a move, or just want to understand the village — connect with a local expert who knows Del Mar well.
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
