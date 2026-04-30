import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import { getAllPosts } from '@/lib/blog'


const neighborhoods = [
  {
    name: 'La Jolla',
    tagline: 'Clifftop grandeur by the sea',
    vibe: 'Upscale village · Ocean views · Culture',
    href: '/neighborhoods/la-jolla',
  image: '/images/b1 lajollacard.png',
  },
  {
    name: 'Del Mar',
    tagline: 'Village charm, racetrack legacy',
    vibe: 'Relaxed · Walkable · Family-friendly',
    href: '/neighborhoods/del-mar',
   image: '/images/b2 delmarcard.png',
  },
  {
    name: 'Pacific Beach',
    tagline: 'Vibrant energy, walkable coast',
    vibe: 'Young · Active · Beach lifestyle',
    href: '/neighborhoods/pacific-beach',
    image: '/images/b3 pacificbeachcard.png',
  },
  {
    name: 'Coronado',
    tagline: 'Island elegance, historic soul',
    vibe: 'Quiet · Prestige · Close-knit',
    href: '/neighborhoods/coronado',
   image: '/images/b4 coronadocard.png',
  },
]

const localSpots = [
  {
    category: 'Coffee',
    name: 'Bird Rock Coffee Roasters',
    neighborhood: 'La Jolla',
    description:
      'Single-origin roasts and sun-drenched patios in one of the neighborhood\'s most beloved institutions.',
   image: '/images/d1-birdrock.png',
    href: '/local-spots', 
  },
  {
    category: 'Dining',
    name: "George's at the Cove",
    neighborhood: 'La Jolla',
    description:
      'James Beard-recognized cuisine served with uninterrupted views of the Pacific from the rooftop terrace.',
    image: '/images/d2-georges.png',
    href: '/local-spots',
  },
  {
    category: 'Nature',
    name: 'Torrey Pines State Reserve',
    neighborhood: 'Del Mar',
    description:
      'Ancient pines, rugged coastal canyons, and miles of trails overlooking the Pacific — free and open daily.',
  image: '/images/d3-torreypines.png',
    href: '/local-spots',
  },
  {
    category: 'Food & Drink',
    name: 'Little Italy Food Hall',
    neighborhood: 'Little Italy',
    description:
      'San Diego\'s most vibrant food destination — artisan vendors, craft cocktails, and a buzzing open-air atmosphere.',
  
      image: '/images/d4-littleitaly.png',
    href: '/local-spots',
  },
]

const activities = [
  {
    title: 'Snorkel La Jolla Cove',
    category: 'Beaches',
 image: '/images/c1 snorklelajolla.png',
    href: '/things-to-do',
  },
  {
    title: 'Hike Torrey Pines',
    category: 'Nature',
    image: '/images/c2 hiketorreypines.png',
    href: '/things-to-do',
  },
  {
    title: 'Explore Balboa Park',
    category: 'Culture',
    image: '/images/c3-explorebalboa.png',
    href: '/things-to-do',
  },
  {
    title: 'Surf in Pacific Beach',
    category: 'Outdoors',
   image: '/images/c4 surfpacificbeach.png',
    href: '/things-to-do',
  },
  {
    title: 'Dine in Little Italy',
    category: 'Food & Drink',
    image: '/images/c5 dineinlittleitaly.png',
    href: '/things-to-do',
  },
  {
    title: 'Del Mar Thoroughbred Club',
    category: 'Events',
   image: '/images/c6 thoroughbred.png',
    href: '/things-to-do',
  },
]

const marketStats = [
  { value: '$1.24M', label: 'Median Sale Price', change: '+8.3% YoY' },
  { value: '22', label: 'Avg. Days on Market', change: '-3 days YoY' },
  { value: '2,847', label: 'Active Listings', change: '+12% vs last quarter' },
  { value: '96%', label: 'List-to-Sale Ratio', change: "Seller's market" },
]

export default async function HomePage() {
  const posts = getAllPosts()
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">

  {/* IMAGE */}
  <Image
    src="/images/a1 homepagehero.png"
    alt="San Diego coastline at sunset"
    fill
    priority
    className="object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* CONTENT */}
  <div className="absolute inset-0 z-20 flex items-end">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">

      <p className="text-white/70 text-xs tracking-widest uppercase mb-3">
        Coastal California Real Estate
      </p>

      <h1 className="text-white text-5xl md:text-6xl font-serif mb-4">
        San Diego Living
      </h1>

      <p className="text-white/80 max-w-xl text-lg">
        Discover neighborhoods, lifestyle, and homes across San Diego’s most
        sought-after coastal communities.
      </p>

      <div className="mt-6">
        <button className="border border-white text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition">
          Get Local Insights
        </button>
      </div>

    </div>
  </div>

</section>

      {/* ─── FEATURED NEIGHBORHOODS ───────────────────────────────────── */}
      <section className="bg-white pt-36 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="label-text mb-5">Neighborhoods</p>
              <h2 className="section-heading">
                Find Your
                <br />
                San Diego Neighborhood
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-sm leading-relaxed">
                Every neighborhood has its own personality. Find the one that fits yours.
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

      {/* ─── LOCAL SPOTS ──────────────────────────────────────────────── */}
      <section className="bg-white py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-8">
            <div>
              <p className="label-text mb-5">Local Spots</p>
              <h2 className="section-heading">
                Places Worth
                <br />
                Knowing About
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-sm leading-relaxed">
                Hand-picked restaurants, cafes, and destinations across coastal San Diego.
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

      {/* ─── THINGS TO DO ─────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-8">
            <div>
              <p className="label-text mb-5">Things To Do</p>
              <h2 className="section-heading">
                Experience San Diego
                <br />
                Like a Local
              </h2>
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
              <Link key={activity.title} href={activity.href} className="group relative block overflow-hidden h-48 md:h-64">
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

      {/* ─── COMMUNITY ARTICLES ───────────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="bg-white py-36 lg:py-48">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-20 gap-6">
              <div>
                <p className="label-text mb-5">Community & Stories</p>
                <h2 className="font-serif font-normal text-5xl md:text-6xl text-stone-900 leading-[1.05]">
                  Life in San Diego,
                  <br />
                  Written Honestly
                </h2>
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

            {/* Secondary articles — compact */}
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

      {/* ─── EDITORIAL PAUSE ──────────────────────────────────────────── */}
      <section className="bg-white py-40 lg:py-56">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-14" />
          <h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-[3.25rem] text-stone-900 leading-[1.15] mb-10">
            San Diego is Not
            <br />
            One Place
          </h2>
          <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
            It is a collection of distinct communities, each with its own rhythm, culture, and character. We are here to help you find yours.
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-14" />
        </div>
      </section>

      {/* ─── SPECIALIST FEATURE ───────────────────────────────────────── */}
      <section className="bg-cream-100 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">
            <div className="max-w-lg">
              <p className="label-text mb-2">Local Expert</p>
              <p className="font-sans font-light text-xs text-stone-400 tracking-wider mb-10 leading-relaxed">
                Trusted by residents across San Diego&apos;s coastal communities.
              </p>
              <h2 className="font-serif font-normal text-4xl md:text-5xl leading-[1.1] text-stone-900 mb-10">
                Connect with a
                <br />
                Local Specialist
              </h2>
              <p className="font-sans font-light text-base text-stone-500 leading-relaxed mb-5">
                Sarah Chen has spent fifteen years living and working in San Diego&apos;s coastal communities. If you are thinking about making a move — or simply want to understand the market — she is happy to have an honest conversation.
              </p>
              <p className="font-sans font-light text-base text-stone-500 leading-relaxed mb-14">
                No pressure. No sales pitch. Just local knowledge, honestly shared.
              </p>

              <div className="border-l border-gold/50 pl-7 mb-14">
                <p className="font-serif font-normal text-xl italic text-stone-600 leading-relaxed">
                  &ldquo;The best move you&apos;ll ever make starts with
                  <br />
                  understanding where you actually want to live.&rdquo;
                </p>
                <p className="font-sans font-light text-xs text-stone-400 mt-4 tracking-wider">
                  — Sarah Chen, Compass Real Estate
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-sans font-normal text-sm text-stone-700">Sarah Chen</span>
                  <span className="font-sans font-light text-xs text-stone-400">
                    Compass Real Estate · DRE #02054123
                  </span>
                  <a
                    href="tel:+16195550142"
                    className="font-sans font-light text-xs text-gold mt-0.5 hover:text-gold-dark transition-colors duration-500"
                  >
                    (619) 555-0142
                  </a>
                </div>
              </div>
            </div>

            <div className="relative lg:-mr-10 lg:-translate-y-10">
              <div className="relative h-[520px] lg:h-[720px] overflow-hidden">
                <Image
                  src="/images/e1 editorialheadshot.png"
                  alt="Sarah Chen — San Diego local specialist"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARKET SNAPSHOT ──────────────────────────────────────────── */}
      <section className="bg-white border-t border-stone-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-4">
            <div>
              <p className="label-text mb-2">Market Context · Q1 2026</p>
              <h2 className="font-serif font-normal text-2xl md:text-3xl text-stone-900 leading-snug">
                San Diego Market Snapshot
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-2 max-w-sm leading-relaxed">
                A quick look at where coastal San Diego stands — useful context for anyone exploring the area.
              </p>
            </div>
            <Link
              href="/market-reports"
              className="font-sans text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-colors self-start lg:self-auto whitespace-nowrap"
            >
              Full Report →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-100 border border-stone-100">
            {marketStats.map((stat) => (
              <div key={stat.label} className="px-8 py-7">
                <p className="font-serif text-2xl md:text-3xl text-stone-900 mb-2">
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-stone-600 mb-1">{stat.label}</p>
                <p className="font-sans text-xs text-stone-400">{stat.change}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 font-sans font-light text-xs text-stone-400">
            Data sourced from local MLS and regional reporting. Figures reflect coastal San Diego markets.
          </p>
        </div>
      </section>

      {/* ─── ABOUT THIS PLATFORM ──────────────────────────────────────── */}
      <section className="bg-stone-950 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
            <div>
              <p className="label-text text-stone-600 mb-8">About San Diego Living</p>
              <h2 className="font-serif font-normal text-4xl md:text-5xl text-white leading-[1.1]">
                Built to Help You
                <br />
                Experience San Diego
                <br />
                Like a Local
              </h2>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
                This platform is built to help people explore, understand, and experience San Diego like a local. Whether you are new to the city, thinking about moving here, or simply want to discover what is happening in your neighborhood — this is your resource.
              </p>
              <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
                We cover neighborhoods, local businesses, community events, and the lifestyle that makes coastal San Diego unlike anywhere else. Real estate is part of that story, but it is not the whole one.
              </p>
              <div className="border-t border-stone-800 pt-6 mt-2">
                <p className="font-sans font-light text-xs text-stone-600 tracking-wider">
                  Independent &nbsp;&middot;&nbsp; Community-Focused &nbsp;&middot;&nbsp; San Diego, California
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────── */}
      <section className="bg-stone-900 py-28 lg:py-36">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="label-text text-stone-600 mb-5">Stay in the Loop</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-white mb-5 leading-snug">
            The San Diego Living Brief
          </h2>
          <p className="font-sans font-light text-stone-400 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Neighborhood guides, local spots, community events, and occasional market insights — once a month, no spam.
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
