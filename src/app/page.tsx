import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

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

const localSpots = [
  {
    category: 'Coffee',
    name: 'Bird Rock Coffee Roasters',
    neighborhood: 'La Jolla',
    description:
      'Single-origin roasts and sun-drenched patios in one of the neighborhood\'s most beloved institutions.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    href: '/local-spots',
  },
  {
    category: 'Dining',
    name: "George's at the Cove",
    neighborhood: 'La Jolla',
    description:
      'James Beard-recognized cuisine served with uninterrupted views of the Pacific from the rooftop terrace.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    href: '/local-spots',
  },
  {
    category: 'Nature',
    name: 'Torrey Pines State Reserve',
    neighborhood: 'Del Mar',
    description:
      'Ancient pines, rugged coastal canyons, and miles of trails overlooking the Pacific — free and open daily.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    href: '/local-spots',
  },
  {
    category: 'Food & Drink',
    name: 'Little Italy Food Hall',
    neighborhood: 'Little Italy',
    description:
      'San Diego\'s most vibrant food destination — artisan vendors, craft cocktails, and a buzzing open-air atmosphere.',
    image:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
    href: '/local-spots',
  },
]

const activities = [
  {
    title: 'Snorkel La Jolla Cove',
    category: 'Beaches',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    href: '/things-to-do',
  },
  {
    title: 'Hike Torrey Pines',
    category: 'Nature',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    href: '/things-to-do',
  },
  {
    title: 'Explore Balboa Park',
    category: 'Culture',
    image:
      'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80',
    href: '/things-to-do',
  },
  {
    title: 'Surf in Pacific Beach',
    category: 'Outdoors',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    href: '/things-to-do',
  },
  {
    title: 'Dine in Little Italy',
    category: 'Food & Drink',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    href: '/things-to-do',
  },
  {
    title: 'Del Mar Thoroughbred Club',
    category: 'Events',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    href: '/things-to-do',
  },
]

const marketStats = [
  { value: '$1.24M', label: 'Median Sale Price', change: '+8.3% YoY' },
  { value: '22', label: 'Avg. Days on Market', change: '-3 days YoY' },
  { value: '2,847', label: 'Active Listings', change: '+12% vs last quarter' },
  { value: '96%', label: 'List-to-Sale Ratio', change: "Seller's market" },
]

const articles = [
  {
    category: 'Local Guide',
    title: 'The Best Coffee Shops in La Jolla',
    excerpt:
      'From third-wave roasters to sun-drenched patios with Pacific views, La Jolla has developed a coffee culture worth exploring slowly.',
    date: 'April 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    href: '/blog/coffee-shops-la-jolla',
  },
  {
    category: 'Neighborhoods',
    title: 'Living in Pacific Beach: A Honest Lifestyle Guide',
    excerpt:
      "What's it actually like to live in PB? We break down the vibe, walkability, dining, and who it's genuinely perfect for.",
    date: 'March 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    href: '/blog/living-in-pacific-beach',
  },
  {
    category: 'Things To Do',
    title: 'Hidden Gems in San Diego You Need to Visit',
    excerpt:
      'Beyond Balboa Park and the Zoo — the spots that only residents know about, from secret tide pools to off-menu dining.',
    date: 'March 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    href: '/blog/san-diego-hidden-gems',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1920&q=80"
          alt="San Diego coastal skyline at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/80" />

        <div className="relative z-10 text-white px-6 lg:px-10 pb-24 lg:pb-32 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="label-text text-white/40 mb-8 fade-up fade-up-1">
              San Diego &bull; California
            </p>
            <h1 className="font-serif font-normal text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] mb-8 fade-up fade-up-2">
              Discover Life
              <br />
              in San Diego
            </h1>
            <p className="font-sans font-light text-base text-white/60 mb-14 leading-relaxed fade-up fade-up-3">
              Your guide to the neighborhoods, local spots, and everyday experiences that make coastal San Diego one of the best places to live in the world.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5 fade-up fade-up-4">
              <Link href="/neighborhoods/la-jolla" className="btn-outline-white">
                Explore Neighborhoods
              </Link>
              <Link
                href="/things-to-do"
                className="font-sans font-light text-xs tracking-widest uppercase text-white/50 hover:text-white/90 border-b border-white/20 hover:border-white/50 pb-0.5 transition-all duration-500 self-center"
              >
                Discover Local Spots →
              </Link>
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
          <Link href={articles[0].href} className="group block mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 lg:gap-16 items-center">
              <div className="relative overflow-hidden h-72 lg:h-[420px] mb-8 lg:mb-0">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="label-text text-gold">{articles[0].category}</span>
                  <span className="w-4 h-px bg-stone-300" />
                  <span className="font-sans text-xs text-stone-400">{articles[0].date}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="font-sans text-xs text-stone-400">{articles[0].readTime}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-snug mb-5 group-hover:text-stone-500 transition-colors duration-300">
                  {articles[0].title}
                </h3>
                <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-8">
                  {articles[0].excerpt}
                </p>
                <span className="font-sans text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors duration-300 border-b border-stone-200 group-hover:border-stone-900 pb-0.5">
                  Read Article →
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary articles — compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 border-t border-stone-200 pt-14">
            {articles.slice(1).map((article) => (
              <Link key={article.title} href={article.href} className="group flex gap-6 items-start">
                <div className="relative overflow-hidden flex-shrink-0 w-28 h-20">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="label-text text-gold">{article.category}</span>
                  <h3 className="font-serif text-lg text-stone-900 leading-snug group-hover:text-stone-500 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <span className="font-sans text-xs text-stone-400">{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* ─── REAL ESTATE SNAPSHOT ─────────────────────────────────────── */}
      <section className="bg-stone-950 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
            <div>
              <p className="label-text text-stone-600 mb-2">For Those Considering a Move</p>
              <h2 className="font-serif font-normal text-3xl md:text-4xl text-white leading-[1.1]">
                San Diego Real Estate,
                <br />
                at a Glance
              </h2>
            </div>
            <Link
              href="/market-reports"
              className="font-sans text-sm tracking-wider text-stone-400 hover:text-gold border-b border-stone-700 hover:border-gold pb-0.5 transition-colors self-start lg:self-auto"
            >
              Full Market Report →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800">
            {marketStats.map((stat) => (
              <div key={stat.label} className="bg-stone-950 px-8 py-8">
                <p className="font-serif text-3xl md:text-4xl text-gold mb-3">
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-white mb-1">{stat.label}</p>
                <p className="font-sans text-xs text-stone-500">{stat.change}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-sans font-light text-xs text-stone-700">
            Data sourced from local MLS and regional reporting. All figures reflect coastal San Diego markets. Q1 2026.
          </p>
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Sarah Chen — San Diego local specialist"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
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
