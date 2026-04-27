import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogNewsletterForm from '@/components/BlogNewsletterForm'

export const metadata: Metadata = {
  title: 'Insights & Stories',
  description:
    'Market reports, neighborhood deep-dives, lifestyle coverage, and real estate guides for coastal San Diego buyers and sellers.',
}

const categories = ['All', 'Market Reports', 'Neighborhoods', 'Lifestyle', 'Buying', 'Selling']

const featuredArticle = {
  category: 'Market Report',
  title: "San Diego's Luxury Tier Defies the National Slowdown — Again",
  excerpt:
    'While rising mortgage rates and economic uncertainty have tempered home sales in much of the country, coastal San Diego continues to chart its own course. Here is what the latest data reveals about the $2M+ segment, and what it means for buyers and sellers entering the market this spring.',
  author: 'San Diego Living',
  date: 'April 14, 2026',
  readTime: '8 min read',
  image:
    'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1920&q=80',
  href: '/blog/luxury-tier-market-report',
}

const articles = [
  {
    category: 'Neighborhoods',
    title: 'Del Mar vs. Rancho Santa Fe: Which Is Right for You?',
    excerpt:
      "Two of San Diego County's most storied addresses appeal to distinct buyer profiles. We break down the lifestyle tradeoffs, price points, and long-term outlook.",
    date: 'March 28, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    href: '/blog/del-mar-vs-rancho-santa-fe',
  },
  {
    category: 'Lifestyle',
    title: 'The New Wave of Farm-to-Table Dining in Little Italy',
    excerpt:
      "San Diego's culinary scene has quietly matured into one of the West Coast's most exciting. Here's where chefs are sourcing locally and cooking brilliantly.",
    date: 'March 15, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    href: '/blog/farm-to-table-little-italy',
  },
  {
    category: 'Buying',
    title: "A First-Time Buyer's Guide to San Diego's Coastal Neighborhoods",
    excerpt:
      "Pacific Beach or Ocean Beach? La Jolla or Bird Rock? This guide helps you cut through the noise and find the San Diego neighborhood that actually fits your life.",
    date: 'February 22, 2026',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    href: '/blog/first-time-buyer-guide',
  },
  {
    category: 'Market Reports',
    title: "Q4 2025 Year-End Market Recap: What Happened and What's Next",
    excerpt:
      "A comprehensive look at San Diego County's real estate performance in 2025 — including the suburban shift, interest rate headwinds, and the surprising resilience of the luxury condo market.",
    date: 'January 10, 2026',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80',
    href: '/blog/q4-2025-year-end-recap',
  },
  {
    category: 'Selling',
    title: 'How to Prepare Your La Jolla Home for Maximum Value',
    excerpt:
      "Small decisions about staging, timing, and pricing strategy can mean hundreds of thousands of dollars in a competitive market. Here's the insider playbook.",
    date: 'December 5, 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    href: '/blog/prepare-la-jolla-home-for-sale',
  },
  {
    category: 'Neighborhoods',
    title: 'Inside Coronado: Why the Island Continues to Command a Premium',
    excerpt:
      "Across the bay from downtown San Diego, Coronado has maintained some of the most stable appreciation in the county. We explore what makes this island community irreplaceable.",
    date: 'November 18, 2025',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    href: '/blog/inside-coronado',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* ─── FEATURED ARTICLE HERO ────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end pt-20">
        <Image
          src={featuredArticle.image}
          alt={featuredArticle.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-stone-950/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="label-text text-gold mb-4">{featuredArticle.category}</p>
            <Link href={featuredArticle.href} className="group">
              <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-5 group-hover:text-stone-200 transition-colors">
                {featuredArticle.title}
              </h1>
            </Link>
            <p className="font-sans text-base text-white/70 leading-relaxed mb-6 max-w-xl font-light">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <span className="font-sans text-xs text-white/50">{featuredArticle.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="font-sans text-xs text-white/50">{featuredArticle.readTime}</span>
              <Link
                href={featuredArticle.href}
                className="ml-4 font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-light border-b border-gold/40 hover:border-gold pb-0.5 transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="label-text mb-1">San Diego Living</p>
              <h2 className="font-serif text-3xl text-stone-900">Insights & Stories</h2>
            </div>

            {/* Category Filter */}
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
        </div>
      </section>

      {/* ─── ARTICLE GRID ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* First article — full-width horizontal */}
          <Link href={articles[0].href} className="group block mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 lg:gap-16 items-center">
              <div className="relative overflow-hidden h-72 lg:h-[400px] mb-8 lg:mb-0">
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
                  <span className="w-4 h-px bg-stone-200" />
                  <span className="font-sans text-xs text-stone-400">{articles[0].date}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-200" />
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

          {/* Remaining articles — compact 3-column, no card frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 border-t border-stone-100 pt-16">
            {articles.slice(1).map((article) => (
              <Link key={article.title} href={article.href} className="group block">
                <div className="relative h-44 overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="label-text text-gold mb-3">{article.category}</p>
                <h3 className="font-serif text-xl text-stone-900 leading-snug mb-3 group-hover:text-stone-500 transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 mt-4">
                  <span className="font-sans text-xs text-stone-400">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-200" />
                  <span className="font-sans text-xs text-stone-400">{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="btn-outline">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────── */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="label-text mb-4">Never Miss an Insight</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            The San Diego Living Brief
          </h2>
          <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            One monthly email. Market reports, neighborhood spotlights, and curated content — nothing else.
          </p>
          <BlogNewsletterForm />
        </div>
      </section>
    </>
  )
}
