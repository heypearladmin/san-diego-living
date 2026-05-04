import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogNewsletterForm from '@/components/BlogNewsletterForm'
import { getAllPosts, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Stories & Guides',
  description:
    'Neighborhood guides, local business spotlights, things to do, and community stories from across coastal San Diego.',
}

const categories = ['All', 'Neighborhoods', 'Local Guides', 'Things To Do', 'Restaurants', 'Real Estate']

const featuredArticle = {
  category: 'Local Guide',
  title: "The Best Neighborhoods in San Diego for Every Type of Person",
  excerpt:
    'La Jolla for the culture-seeker, Pacific Beach for the beach lover, Del Mar for the family — a genuine guide to finding where you belong in San Diego.',
  author: 'San Diego Living',
  date: 'April 14, 2026',
  readTime: '8 min read',
  image:
    'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1920&q=80',
  href: '/blog/best-neighborhoods-for-every-person',
}

const articles = [
  {
    category: 'Local Guide',
    title: 'The Best Coffee Shops in La Jolla',
    excerpt:
      "From third-wave roasters to sun-drenched patios with Pacific views, La Jolla's coffee culture is worth exploring slowly.",
    date: 'April 2, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    href: '/blog/coffee-shops-la-jolla',
  },
  {
    category: 'Neighborhoods',
    title: 'Living in Pacific Beach: An Honest Lifestyle Guide',
    excerpt:
      "What's it actually like to live in PB? We break down the vibe, walkability, dining scene, and who it's genuinely perfect for.",
    date: 'March 28, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    href: '/blog/living-in-pacific-beach',
  },
  {
    category: 'Things To Do',
    title: 'Hidden Gems in San Diego You Need to Visit',
    excerpt:
      'Beyond Balboa Park and the Zoo — the spots that only residents know about, from secret tide pools to off-menu dining experiences.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    href: '/blog/san-diego-hidden-gems',
  },
  {
    category: 'Restaurants',
    title: "Little Italy's Best Restaurants Right Now",
    excerpt:
      "San Diego's most walkable dining neighborhood keeps getting better. Here are the tables worth booking this month.",
    date: 'February 22, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    href: '/blog/little-italy-restaurants',
  },
  {
    category: 'Neighborhoods',
    title: 'Del Mar vs. Rancho Santa Fe: Which Is Right for You?',
    excerpt:
      "Two of San Diego County's most storied communities appeal to entirely different lifestyles. We break down the honest tradeoffs.",
    date: 'January 30, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    href: '/blog/del-mar-vs-rancho-santa-fe',
  },
  {
    category: 'Real Estate',
    title: "San Diego's Coastal Market: What Buyers Need to Know in 2026",
    excerpt:
      'A grounded look at where the market stands — inventory, pricing trends, and what experienced buyers are doing differently this year.',
    date: 'January 10, 2026',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    href: '/blog/coastal-market-buyers-guide-2026',
  },
]

export default async function BlogPage() {
  const mdPosts = getAllPosts()

  // Markdown posts take priority; hardcoded articles fill in the rest
  const mdSlugs = new Set(mdPosts.map((p) => p.slug))
  const fallbackArticles = articles.filter((a) => !mdSlugs.has(a.href.replace('/blog/', '')))
  const allArticles: (BlogPost | (typeof articles)[0])[] = [...mdPosts, ...fallbackArticles]

  const hero = mdPosts.length > 0
    ? { ...mdPosts[0], href: `/blog/${mdPosts[0].slug}`, date: mdPosts[0].date ?? '', author: 'San Diego Living' }
    : featuredArticle

  return (
    <>
      {/* ─── FEATURED ARTICLE HERO ────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end pt-20">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-stone-950/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="label-text text-gold mb-4">{hero.category}</p>
            <Link href={hero.href} className="group">
              <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-5 group-hover:text-stone-200 transition-colors">
                {hero.title}
              </h1>
            </Link>
            <p className="font-sans text-base text-white/70 leading-relaxed mb-6 max-w-xl font-light">
              {hero.excerpt}
            </p>
            <div className="flex items-center gap-4">
              {'date' in hero && hero.date && (
                <>
                  <span className="font-sans text-xs text-white/50">{hero.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                </>
              )}
              <span className="font-sans text-xs text-white/50">{hero.readTime}</span>
              <Link
                href={hero.href}
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
              <h2 className="font-serif text-3xl text-stone-900">Stories & Guides</h2>
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
          {allArticles[0] && (() => {
            const a = allArticles[0]
            const href = 'slug' in a ? `/blog/${a.slug}` : a.href
            return (
              <Link href={href} className="group block mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 lg:gap-16 items-center">
                  <div className="relative overflow-hidden h-72 lg:h-[400px] mb-8 lg:mb-0 bg-stone-100">
                    {a.image && (
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="label-text text-gold">{a.category}</span>
                      <span className="w-4 h-px bg-stone-200" />
                      <span className="font-sans text-xs text-stone-400">{a.readTime}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-snug mb-5 group-hover:text-stone-500 transition-colors duration-300">
                      {a.title}
                    </h3>
                    <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-8">
                      {a.excerpt}
                    </p>
                    <span className="font-sans text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors duration-300 border-b border-stone-200 group-hover:border-stone-900 pb-0.5">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })()}

          {/* Remaining articles — compact 3-column, no card frames */}
          {allArticles.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 border-t border-stone-100 pt-16">
              {allArticles.slice(1).map((a) => {
                const href = 'slug' in a ? `/blog/${a.slug}` : a.href
                return (
                  <Link key={a.title} href={href} className="group block">
                    <div className="relative h-44 overflow-hidden mb-5 bg-stone-100">
                      {a.image && (
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}
                    </div>
                    <p className="label-text text-gold mb-3">{a.category}</p>
                    <h3 className="font-serif text-xl text-stone-900 leading-snug mb-3 group-hover:text-stone-500 transition-colors duration-300">
                      {a.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="font-sans text-xs text-stone-400">{a.readTime}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="btn-outline">Load More Stories</button>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────── */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="label-text mb-4">Stay in the Loop</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            The San Diego Living Brief
          </h2>
          <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Neighborhood guides, local spots, community stories, and the occasional market insight — once a month, nothing more.
          </p>
          <BlogNewsletterForm />
        </div>
      </section>
    </>
  )
}
