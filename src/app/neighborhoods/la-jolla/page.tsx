import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'La Jolla | Neighborhood Guide',
  description:
    'Your guide to living in La Jolla — the best restaurants, things to do, lifestyle, schools, and community character of this iconic coastal neighborhood.',
}

const quickFacts = [
  { value: '71', label: 'Walk Score' },
  { value: '9/10', label: 'School Rating' },
  { value: '12 mi', label: 'to Downtown SD' },
  { value: '7 mi', label: 'of Coastline' },
  { value: '$2.4M', label: 'Median Home Price' },
]

const lifestyleItems = [
  {
    category: 'Beaches',
    description:
      "La Jolla Cove, Children's Pool, and Windansea Beach offer world-class snorkeling, kayaking, and simply one of the most dramatic coastlines in California.",
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Dining',
    description:
      "From George's at the Cove to the intimate bistros of Girard Avenue, La Jolla boasts Michelin-recognized cuisine and a dining culture that rivals any major city.",
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Culture',
    description:
      "Home to the Salk Institute, UCSD campus, La Jolla Playhouse, and the Museum of Contemporary Art — one of California's most intellectually rich communities.",
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

const thingsToDo = [
  {
    title: 'Snorkel La Jolla Cove',
    description: 'One of the best snorkeling spots in Southern California, with sea caves, leopard sharks, and garibaldi fish just offshore.',
    category: 'Beaches',
  },
  {
    title: "Dine at George's at the Cove",
    description: "James Beard-nominated rooftop dining with unobstructed Pacific views — go for sunset.",
    category: 'Dining',
  },
  {
    title: 'Hike Torrey Pines',
    description: 'Ancient pine forests, canyon trails, and sweeping coastal views just minutes from the village.',
    category: 'Nature',
  },
  {
    title: 'Visit the Birch Aquarium',
    description: 'Perched above Scripps Institution of Oceanography — great for all ages, with panoramic ocean views.',
    category: 'Culture',
  },
  {
    title: 'Walk Prospect Street',
    description: 'Gallery-hop, browse independent boutiques, and stop for coffee at any number of sidewalk cafes.',
    category: 'Village',
  },
  {
    title: 'Catch a Show at La Jolla Playhouse',
    description: "One of the most respected regional theaters in the country, with a history of Broadway-bound productions.",
    category: 'Culture',
  },
]

const localBusinesses = [
  {
    name: 'Bird Rock Coffee Roasters',
    type: 'Coffee',
    description: 'The neighborhood standard for single-origin espresso and a laid-back morning atmosphere.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: "George's at the Cove",
    type: 'Fine Dining',
    description: "Ocean terrace dining that has defined La Jolla's culinary identity for decades.",
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'UCSD Bookstore & Campus',
    type: 'Culture',
    description: 'A world-class research university that anchors La Jolla\'s intellectual and cultural identity.',
    image:
      'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'La Jolla Cove Snorkel',
    type: 'Outdoors',
    description: "Rent gear and enter the water directly from the cove — sea lions often sunbathe nearby.",
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
]

const whoItsFor = [
  { label: 'Families', description: 'Top-rated schools, safe streets, and abundant parks and outdoor space.' },
  { label: 'Remote Professionals', description: 'Walkable village, great coffee shops, and a pace of life that supports deep work.' },
  { label: 'Retirees', description: 'World-class healthcare proximity (Scripps, UCSD), cultural offerings, and coastal beauty.' },
  { label: 'Second-Home Buyers', description: 'One of the most consistently desirable locations in Southern California.' },
]

const schools = [
  { name: 'La Jolla Elementary', grades: 'K–5', rating: '10/10', type: 'Public' },
  { name: 'Muirlands Middle School', grades: '6–8', rating: '9/10', type: 'Public' },
  { name: 'La Jolla High School', grades: '9–12', rating: '9/10', type: 'Public' },
  { name: "The Bishop's School", grades: '6–12', rating: 'Top Ranked', type: 'Private' },
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
            Clifftop grandeur, world-class dining, and one of the most distinctive communities on the California coast.
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
              <p className="label-text mb-4">About La Jolla</p>
              <h2 className="section-heading mb-8">
                A Place That Earns
                <br />
                Its Reputation
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Perched along seven miles of rugged Pacific coastline, La Jolla is one of those rare places that genuinely lives up to the hype. The beaches are dramatic. The restaurants are exceptional. The cultural offerings — UCSD, the Salk Institute, La Jolla Playhouse — are world-class.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                The village along Prospect Street and Girard Avenue is walkable, independent, and decidedly local — galleries, coffee shops, boutiques, and long lunches that stretch into the afternoon. It has the feel of a small town that happens to sit inside one of the great cities in America.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                Residents tend to be lifers. Once people find La Jolla, they rarely leave — and that quiet stability is one of the things that makes it special.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-stone-100 pt-8">
                <div>
                  <p className="label-text mb-2">Ideal For</p>
                  <p className="font-sans text-sm text-stone-700">
                    Families, professionals, retirees
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Neighborhood Feel</p>
                  <p className="font-sans text-sm text-stone-700">
                    Upscale village, walkable, coastal
                  </p>
                </div>
                <div>
                  <p className="label-text mb-2">Best Known For</p>
                  <p className="font-sans text-sm text-stone-700">Beaches, dining, UCSD, culture</p>
                </div>
                <div>
                  <p className="label-text mb-2">Commute to Downtown</p>
                  <p className="font-sans text-sm text-stone-700">20–25 min by car</p>
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
                  Local Note
                </p>
                <p className="font-serif text-lg leading-snug">
                  La Jolla has one of the highest rates of walkability among San Diego coastal neighborhoods.
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
            <p className="label-text mb-3">Is La Jolla Right for You?</p>
            <h2 className="section-heading max-w-lg">Who Loves Living Here</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoItsFor.map((item) => (
              <div key={item.label} className="bg-white border border-stone-100 p-7">
                <p className="label-text text-gold mb-3">{item.label}</p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">{item.description}</p>
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
              in La Jolla
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thingsToDo.map((item) => (
              <div key={item.title} className="border border-stone-100 p-7 hover:shadow-md transition-shadow duration-300">
                <p className="label-text text-gold mb-3">{item.category}</p>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCAL LIFESTYLE ──────────────────────────────────────────── */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="label-text mb-3">Life in La Jolla</p>
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
                in La Jolla
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
                Among San Diego's
                <br />
                Top-Rated Schools
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                The La Jolla attendance area is consistently ranked among the top 5% in the state. Proximity to UC San Diego also provides unique enrichment and dual-enrollment opportunities for high school students.
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

      {/* ─── REAL ESTATE ──────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <p className="label-text mb-3">Real Estate</p>
              <h2 className="section-heading">
                Thinking About
                <br />
                Moving to La Jolla?
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
          <p className="label-text text-stone-500 mb-5">Thinking About La Jolla?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            We Can Help You
            <br />
            Find Your Place Here
          </h2>
          <p className="font-sans text-stone-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you are curious about the neighborhood, exploring a potential move, or ready to take the next step — connect with a local expert who knows La Jolla well.
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
