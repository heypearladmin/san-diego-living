import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import { getAllPosts } from '@/lib/blog'

// ─────────────────────────────────────────────────────────────────────
// LOCAL EXPERT SYSTEM
// Reusable across the site. Homepage uses `localExperts.global`.
// Neighborhood pages can pass in localExperts.lajolla, etc.
// ─────────────────────────────────────────────────────────────────────
const localExperts = {
  global: {
    name: 'Alex Rivera',
    area: 'San Diego',
    years: 12,
    phone: '(619) 555-0101',
    brokerage: 'Compass Real Estate',
    license: 'CA DRE #02123456',
  },
  lajolla: {
    name: 'Maya Chen',
    area: 'La Jolla',
    years: 15,
    phone: '(619) 555-0142',
    brokerage: 'Compass Real Estate',
    license: 'CA DRE #02054123',
  },
  delmar: {
    name: 'James Wright',
    area: 'Del Mar',
    years: 10,
    phone: '(619) 555-0143',
    brokerage: 'Compass Real Estate',
    license: 'CA DRE #02054124',
  },
  pacificbeach: {
    name: 'Sara Lin',
    area: 'Pacific Beach',
    years: 8,
    phone: '(619) 555-0144',
    brokerage: 'Compass Real Estate',
    license: 'CA DRE #02054125',
  },
  coronado: {
    name: 'David Howard',
    area: 'Coronado',
    years: 14,
    phone: '(619) 555-0145',
    brokerage: 'Compass Real Estate',
    license: 'CA DRE #02054126',
  },
}

// ─────────────────────────────────────────────────────────────────────
// CONTENT ARRAYS — improved copy, same structure
// ─────────────────────────────────────────────────────────────────────
const neighborhoods = [
  {
    name: 'La Jolla',
    tagline: 'Cliffs, cove, and a village that has not changed',
    vibe: 'Cliffs · Cove · Old Village',
    href: '/neighborhoods/la-jolla',
    image: '/images/b1-lajollacard.png',
  },
  {
    name: 'Del Mar',
    tagline: '1.7 square miles where everyone knows everyone',
    vibe: 'Bluff Homes · Racetrack · Village',
    href: '/neighborhoods/del-mar',
    image: '/images/b2-delmarcard.png',
  },
  {
    name: 'Pacific Beach',
    tagline: 'Boardwalk mornings and barefoot evenings',
    vibe: 'Crystal Pier · Surf · Cruiser Bikes',
    href: '/neighborhoods/pacific-beach',
    image: '/images/b3-pacificbeachcard.png',
  },
  {
    name: 'Coronado',
    tagline: 'Across the bridge, time slows',
    vibe: 'Hotel Del · Orange Avenue · Ferry',
    href: '/neighborhoods/coronado',
    image: '/images/b4-coronadocard.png',
  },
]

const localSpots = [
  {
    category: 'Coffee',
    name: 'Bird Rock Coffee Roasters',
    neighborhood: 'La Jolla',
    description:
      'The kind of place locals return to every morning without thinking twice.',
    image: '/images/d1-birdrock.png',
    href: '/local-spots',
  },
  {
    category: 'Dining',
    name: "George's at the Cove",
    neighborhood: 'La Jolla',
    description:
      'A rooftop terrace, the cove below, and a long lunch that becomes the rest of your afternoon.',
    image: '/images/d2-georges.png',
    href: '/local-spots',
  },
  {
    category: 'Nature',
    name: 'Torrey Pines State Reserve',
    neighborhood: 'Del Mar',
    description:
      'Trails that wind through hundred-year-old pines and end with the Pacific in front of you.',
    image: '/images/d3-torreypines.png',
    href: '/local-spots',
  },
  {
    category: 'Food & Drink',
    name: 'Little Italy Food Hall',
    neighborhood: 'Little Italy',
    description:
      'A piazza, a string of vendor stalls, and the kind of evening you do not plan in advance.',
    image: '/images/d4-littleitaly.png',
    href: '/local-spots',
  },
]

const activities = [
  {
    title: 'Slip Into La Jolla Cove',
    category: 'Mornings',
    image: '/images/c1-snorklelajolla.png',
    href: '/things-to-do',
  },
  {
    title: 'Walk Torrey Pines at Sunrise',
    category: 'Trails',
    image: '/images/c2-hiketorreypines.png',
    href: '/things-to-do',
  },
  {
    title: 'A Day in Balboa Park',
    category: 'Culture',
    image: '/images/c3-explorebalboa.png',
    href: '/things-to-do',
  },
  {
    title: 'Paddle Out at Crystal Pier',
    category: 'Water',
    image: '/images/c4-surfpacificbeach.png',
    href: '/things-to-do',
  },
  {
    title: 'A Long Dinner in Little Italy',
    category: 'Evenings',
    image: '/images/c5-dineinlittleitaly.png',
    href: '/things-to-do',
  },
  {
    title: 'Opening Day at Del Mar',
    category: 'Summer',
    image: '/images/c6-thoroughbred.png',
    href: '/things-to-do',
  },
]

// ─────────────────────────────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────────────────────────────
export default async function HomePage() {
  const posts = getAllPosts()
  const expert = localExperts.global

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        <Image
          src="/images/a1-homepagehero.png"
          alt="San Diego coastline at golden hour"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45 z-10" />

        <div className="absolute inset-0 z-20 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">
              San Diego &middot; California
            </p>

            <h1 className="text-white font-serif font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mb-6">
              Coastal mornings,
              <br />
              long afternoons,
              <br />
              evenings the rest of the world flies in for.
            </h1>

            <p className="font-sans font-light text-white/75 max-w-xl text-base md:text-lg leading-relaxed mb-10">
              A guide to the neighborhoods, local spots, and everyday rituals that make life on the coast unlike anywhere else.
            </p>

            <Link
              href="#neighborhoods"
              className="inline-block border border-white/80 text-white font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-500"
            >
              Explore Local Life
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED NEIGHBORHOODS ───────────────────────────────── */}
      <section id="neighborhoods" className="bg-white pt-36 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="label-text mb-5">Neighborhoods</p>
              <h2 className="section-heading">
                Each Part of San Diego
                <br />
                Has Its Own Rhythm
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-md leading-relaxed">
                Some neighborhoods hum at first light. Others come alive after dark. Each one keeps its own pace — find the one that matches yours.
              </p>
            </div>
            <Link
              href="/neighborhoods"
              className="font-sans font-light text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-all duration-500 self-start sm:self-end whitespace-nowrap"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* Featured: La Jolla — full width */}
        <Link
          href={neighborhoods[0].href}
          className="group relative block overflow-hidden h-72 sm:h-[480px] lg:h-[600px] w-full"
        >
          <Image
            src={neighborhoods[0].image}
            alt={neighborhoods[0].name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-16">
            <p className="label-text text-white/40 mb-3">Featured Neighborhood</p>
            <p className="font-serif font-normal text-4xl lg:text-6xl text-white leading-tight mb-2">
              {neighborhoods[0].name}
            </p>
            <p className="font-sans font-light text-sm text-white/55 mb-4">{neighborhoods[0].tagline}</p>
            <p className="font-sans font-light text-xs text-white/35 tracking-widest uppercase">
              {neighborhoods[0].vibe}
            </p>
          </div>
        </Link>

        {/* Secondary 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {neighborhoods.slice(1).map((n, i) => (
            <Link
              key={n.name}
              href={n.href}
              className={`group relative block overflow-hidden h-56 sm:h-72 ${i < 2 ? 'sm:border-r border-stone-950/40' : ''}`}
            >
              <Image
                src={n.image}
                alt={n.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/82 via-stone-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="font-serif font-normal text-2xl text-white mb-1 leading-tight">
                  {n.name}
                </p>
                <p className="font-sans font-light text-xs text-white/50">{n.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── LOCAL SPOTS ──────────────────────────────────────────── */}
      <section className="bg-white py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-8">
            <div>
              <p className="label-text mb-5">Local Spots</p>
              <h2 className="section-heading">
                The Places We
                <br />
                Keep Coming Back To
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-md leading-relaxed">
                Restaurants, cafes, and corners of San Diego we return to. Not the most-reviewed. Just the ones that earned it.
              </p>
            </div>
            <Link
              href="/local-spots"
              className="font-sans font-light text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-all duration-500 self-start sm:self-end whitespace-nowrap"
            >
              All Local Spots →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localSpots.map((spot) => (
              <Link key={spot.name} href={spot.href} className="group block">
                <div className="relative h-52 overflow-hidden mb-5">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="label-text text-gold mb-2">{spot.category}</p>
                <h3 className="font-serif text-xl text-stone-900 leading-snug mb-1 group-hover:text-stone-500 transition-colors duration-300">
                  {spot.name}
                </h3>
                <p className="font-sans font-light text-xs text-stone-400 mb-3 tracking-wider uppercase">
                  {spot.neighborhood}
                </p>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">
                  {spot.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW LOCALS SPEND THEIR WEEKENDS ──────────────────────── */}
      <section className="bg-cream-50 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-8">
            <div>
              <p className="label-text mb-5">Things To Do</p>
              <h2 className="section-heading">
                How Locals Spend
                <br />
                Their Weekends
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-md leading-relaxed">
                Less a list of attractions. More a sketch of how people here actually fill a Saturday.
              </p>
            </div>
            <Link
              href="/things-to-do"
              className="font-sans font-light text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-all duration-500 self-start sm:self-end whitespace-nowrap"
            >
              See Everything →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                href={activity.href}
                className="group relative block overflow-hidden h-48 md:h-64"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="label-text text-gold/70 mb-1">{activity.category}</p>
                  <p className="font-serif text-lg text-white leading-snug">{activity.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY / STORIES ──────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="bg-white py-36 lg:py-48">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-20 gap-6">
              <div>
                <p className="label-text mb-5">Community &amp; Stories</p>
                <h2 className="font-serif font-normal text-5xl md:text-6xl text-stone-900 leading-[1.05]">
                  Life in San Diego,
                  <br />
                  Written Honestly
                </h2>
                <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-md leading-relaxed">
                  Stories from the coast — the people, the places, and the small things that make a neighborhood feel like one.
                </p>
              </div>
              <Link
                href="/blog"
                className="font-sans text-sm tracking-wider text-stone-400 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors self-start sm:self-auto whitespace-nowrap"
              >
                All Articles →
              </Link>
            </div>

            {/* Featured article — horizontal */}
            <Link href={`/blog/${posts[0].slug}`} className="group block mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 lg:gap-16 items-center">
                <div className="relative overflow-hidden h-72 lg:h-[420px] mb-8 lg:mb-0">
                  {posts[0].image && (
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label-text text-gold">{posts[0].category}</span>
                    <span className="w-4 h-px bg-stone-300" />
                    <span className="font-sans text-xs text-stone-400">{posts[0].readTime}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-snug mb-5 group-hover:text-stone-500 transition-colors duration-300">
                    {posts[0].title}
                  </h3>
                  <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-8">
                    {posts[0].excerpt}
                  </p>
                  <span className="font-sans text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors duration-300 border-b border-stone-200 group-hover:border-stone-900 pb-0.5">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>

            {posts.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 border-t border-stone-200 pt-14">
                {posts.slice(1).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-6 items-start">
                    <div className="relative overflow-hidden flex-shrink-0 w-28 h-20 bg-stone-100">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="label-text text-gold">{post.category}</span>
                      <h3 className="font-serif text-lg text-stone-900 leading-snug group-hover:text-stone-500 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <span className="font-sans text-xs text-stone-400">{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── EDITORIAL PAUSE ──────────────────────────────────────── */}
      <section className="bg-white py-40 lg:py-56">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-14" />
          <h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-[3.25rem] text-stone-900 leading-[1.15] mb-10">
            San Diego is Not
            <br />
            One Place
          </h2>
          <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
            It is a collection of distinct communities, each with its own rhythm, culture, and quiet. We are here to help you find yours.
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-14" />
        </div>
      </section>

      {/* ─── LOCAL EXPERT (soft CTA) ──────────────────────────────── */}
      <section className="bg-cream-50 py-36 lg:py-48">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text mb-5">Curious About Life in San Diego?</p>
          <h2 className="font-serif font-normal text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
            Talk to Someone
            <br />
            Who Lives Here
          </h2>
          <p className="font-sans font-light text-base text-stone-600 leading-relaxed mb-4 max-w-xl mx-auto">
            {expert.name} has lived in {expert.area} for {expert.years} years. If you are exploring the area, planning a move, or just want to understand what daily life is really like — they are happy to have an honest conversation.
          </p>
          <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-12 max-w-md mx-auto italic">
            No pressure. No sales pitch. Just local knowledge, honestly shared.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            <Link
              href="/contact"
              className="font-sans text-xs tracking-[0.25em] uppercase border border-stone-900 text-stone-900 px-10 py-4 hover:bg-stone-900 hover:text-white transition-colors duration-500"
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
              {expert.brokerage} &middot; {expert.license}
            </p>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────── */}
      <section className="bg-stone-900 py-28 lg:py-36">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="label-text text-stone-600 mb-5">Stay in the Loop</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-white mb-5 leading-snug">
            The San Diego Living Brief
          </h2>
          <p className="font-sans font-light text-stone-400 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Neighborhood guides, local spots, community events, and the occasional honest market note — once a month, no spam.
          </p>
          <NewsletterForm />
          <p className="font-sans text-xs text-stone-700 mt-4">
            Unsubscribe at any time. We respect your inbox.
          </p>
        </div>
      </section>
    </>
  )
}
