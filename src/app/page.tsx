import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

const neighborhoods = [
  {
    name: 'La Jolla',
    tagline: 'Clifftop grandeur by the sea',
    price: '$2.4M',
    label: 'Median Sale Price',
    href: '/neighborhoods/la-jolla',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Del Mar',
    tagline: 'Village charm, racetrack legacy',
    price: '$3.1M',
    label: 'Median Sale Price',
    href: '/neighborhoods/del-mar',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pacific Beach',
    tagline: 'Vibrant energy, walkable coast',
    price: '$1.2M',
    label: 'Median Sale Price',
    href: '/neighborhoods/pacific-beach',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Coronado',
    tagline: 'Island elegance, historic soul',
    price: '$2.8M',
    label: 'Median Sale Price',
    href: '/neighborhoods/coronado',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
]

const marketStats = [
  { value: '$1.24M', label: 'Median Sale Price', change: '+8.3% YoY' },
  { value: '22', label: 'Avg. Days on Market', change: "−3 days YoY" },
  { value: '2,847', label: 'Active Listings', change: '+12% vs last quarter' },
  { value: '96%', label: 'List-to-Sale Ratio', change: 'Seller\'s market' },
]

const articles = [
  {
    category: 'Market Report',
    title: "San Diego's Luxury Tier Defies the National Slowdown",
    excerpt:
      'While broader US markets cool, coastal San Diego continues to see compressed inventory and sustained buyer demand above the $2M threshold.',
    date: 'April 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    href: '/blog/luxury-tier-market-report',
  },
  {
    category: 'Neighborhoods',
    title: 'Del Mar vs. Rancho Santa Fe: Which Is Right for You?',
    excerpt:
      "Two of San Diego County's most storied addresses appeal to distinct buyer profiles. We break down the lifestyle tradeoffs, price points, and long-term outlook.",
    date: 'March 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    href: '/blog/del-mar-vs-rancho-santa-fe',
  },
  {
    category: 'Lifestyle',
    title: 'The New Wave of Farm-to-Table Dining in Little Italy',
    excerpt:
      "San Diego's culinary scene has quietly matured into one of the West Coast's most exciting. Here's where chefs are sourcing locally and cooking brilliantly.",
    date: 'March 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    href: '/blog/farm-to-table-little-italy',
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
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/85" />

        <div className="relative z-10 text-white px-6 lg:px-10 pb-24 lg:pb-32 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="label-text text-white/40 mb-8 fade-up fade-up-1">
              San Diego &bull; California
            </p>
            <h1 className="font-serif font-normal text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] mb-8 fade-up fade-up-2">
              The Definitive Guide
              <br />
              to Luxury Living
              <br />
              in San Diego
            </h1>
            <p className="font-sans font-light text-base text-white/55 mb-14 leading-relaxed fade-up fade-up-3">
              Neighborhood insights, market intelligence, and curated coastal living for high-stakes real estate decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5 fade-up fade-up-4">
              <Link href="/neighborhoods/la-jolla" className="btn-outline-white">
                Explore Neighborhoods
              </Link>
              <Link
                href="/market-reports"
                className="font-sans font-light text-xs tracking-widest uppercase text-white/50 hover:text-white/90 border-b border-white/20 hover:border-white/50 pb-0.5 transition-all duration-500 self-center"
              >
                View Market Report →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED NEIGHBORHOODS ───────────────────────────────────── */}
      <section className="bg-white pt-36 lg:pt-48">
        {/* Contained header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="label-text mb-5">Neighborhoods</p>
              <h2 className="section-heading">
                Explore San Diego
                <br />
                by Neighborhood
              </h2>
              <p className="font-sans font-light text-sm text-stone-400 mt-5 max-w-sm leading-relaxed">
                From coastal enclaves to vibrant urban districts, discover where San Diego truly lives.
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

        {/* Full-bleed cinematic layout — featured full width, then 3-col grid */}
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
            <p className="label-text text-gold/70 mb-3">{neighborhoods[0].label}</p>
            <p className="font-serif font-normal text-4xl lg:text-6xl text-white leading-tight mb-2">
              {neighborhoods[0].name}
            </p>
            <p className="font-sans font-light text-sm text-white/55 mb-7">{neighborhoods[0].tagline}</p>
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-white">{neighborhoods[0].price}</span>
              <span className="font-sans font-light text-[10px] text-white/35 tracking-widest uppercase border-l border-white/15 pl-4">
                Median Sale Price
              </span>
            </div>
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
              <div className="absolute top-5 right-6">
                <p className="font-serif text-sm text-white/60">{n.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── MARKET PULSE ─────────────────────────────────────────────── */}
      <section className="bg-stone-950 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <p className="label-text text-stone-600 mb-2">
                Updated Monthly · Coastal San Diego Market
              </p>
              <p className="label-text text-stone-500 mb-6">Q1 2026</p>
              <h2 className="font-serif font-normal text-4xl md:text-5xl text-white leading-[1.1]">
                The Numbers That
                <br />
                Define the Market
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
              <div key={stat.label} className="bg-stone-950 px-8 py-10">
                <p className="font-serif text-4xl md:text-5xl text-gold mb-3">
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-white mb-2">{stat.label}</p>
                <p className="font-sans text-xs text-stone-500">{stat.change}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-sans font-light text-xs text-stone-700">
            Data sourced from local MLS and regional reporting. All figures reflect coastal San Diego markets.
          </p>
        </div>
      </section>

      {/* ─── LATEST INSIGHTS ──────────────────────────────────────────── */}
      <section className="bg-cream-50 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-20 gap-6">
            <div>
              <p className="label-text mb-5">Latest Insights</p>
              <h2 className="font-serif font-normal text-5xl md:text-6xl text-stone-900 leading-[1.05]">
                San Diego Market &amp;
                <br />
                Lifestyle Insights
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

          {/* Secondary articles — compact 2-column */}
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
            Not All Real Estate
            <br />
            is Created Equal
          </h2>
          <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
            The right home, in the right neighborhood, at the right moment — that is the standard we hold ourselves to.
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-14" />
        </div>
      </section>

      {/* ─── SPECIALIST FEATURE ───────────────────────────────────────── */}
      <section className="bg-cream-100 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">
            <div className="max-w-lg">
              <p className="label-text mb-2">Featured Specialist</p>
              <p className="font-sans font-light text-xs text-stone-400 tracking-wider mb-10 leading-relaxed">
                Trusted by discerning buyers across San Diego&apos;s coastal markets.
              </p>
              <h2 className="font-serif font-normal text-4xl md:text-5xl leading-[1.1] text-stone-900 mb-10">
                Our Recommended
                <br />
                San Diego Specialist
              </h2>
              <p className="font-sans font-light text-base text-stone-500 leading-relaxed mb-5">
                Sarah Chen brings fifteen years of institutional knowledge to San Diego&apos;s most consequential real estate transactions. Her practice centers on the coastal corridor — La Jolla, Del Mar, and Coronado — where nuance, timing, and trust determine outcomes.
              </p>
              <p className="font-sans font-light text-base text-stone-500 leading-relaxed mb-14">
                Clients describe her approach as measured, transparent, and deeply informed. She does not work with everyone. That is by design.
              </p>

              <div className="border-l border-gold/50 pl-7 mb-14">
                <p className="font-serif font-normal text-xl italic text-stone-600 leading-relaxed">
                  &ldquo;My clients aren&apos;t looking for speed.
                  <br />
                  They&apos;re looking for confidence.&rdquo;
                </p>
                <p className="font-sans font-light text-xs text-stone-400 mt-4 tracking-wider">
                  — Sarah Chen, Compass Real Estate
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link href="/contact" className="btn-primary">
                  Connect with a Local Specialist
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
                  alt="Sarah Chen — San Diego real estate specialist"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUTHORITY POSITIONING ────────────────────────────────────── */}
      <section className="bg-stone-950 py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
            <div>
              <p className="label-text text-stone-600 mb-8">About This Publication</p>
              <h2 className="font-serif font-normal text-4xl md:text-5xl text-white leading-[1.1]">
                Trusted Resource for San Diego
                <br />
                Real Estate Intelligence
              </h2>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
                San Diego Living is an independent editorial publication dedicated to the coastal San Diego real estate market. We cover neighborhoods, market conditions, and the lifestyle that defines life in one of the most sought-after regions in the country.
              </p>
              <p className="font-sans font-light text-sm text-stone-400 leading-relaxed">
                Our reporting draws on local MLS data, on-the-ground expertise, and years of coverage across La Jolla, Del Mar, Pacific Beach, Coronado, and beyond. We do not sell homes. We help you understand them.
              </p>
              <div className="border-t border-stone-800 pt-6 mt-2">
                <p className="font-sans font-light text-xs text-stone-600 tracking-wider">
                  Independent &nbsp;·&nbsp; Editorial &nbsp;·&nbsp; San Diego, California
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────── */}
      <section className="bg-stone-900 py-28 lg:py-36">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="label-text text-stone-600 mb-5">Stay Ahead of the Market</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-white mb-5 leading-snug">
            Monthly Insights, Delivered
          </h2>
          <p className="font-sans font-light text-stone-400 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Market reports, neighborhood spotlights, and curated listings — delivered once a month. No spam, ever.
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
