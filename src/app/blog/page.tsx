import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Stories | San Diego Living',
  description:
    'Honest writing about life in coastal San Diego — neighborhoods, families, weekends, and the small details that make the city feel like home.',
}

// ─────────────────────────────────────────────────────────────────────
// LOCAL EXPERT (global)
// ─────────────────────────────────────────────────────────────────────
const expert = {
  name: 'Alex Rivera',
  area: 'San Diego',
  years: 12,
  phone: '(619) 555-0101',
  brokerage: 'Compass Real Estate',
  license: 'CA DRE #02123456',
}

// ─────────────────────────────────────────────────────────────────────
// EDITORIAL THEMES — content threads we cover
// ─────────────────────────────────────────────────────────────────────
const editorialThemes = [
  {
    label: 'Living Here',
    description:
      'Honest accounts of what it actually feels like — the slow mornings, the marine layer, the pace that takes most newcomers a year to adjust to.',
  },
  {
    label: 'Family Life',
    description:
      'Where families actually go. What weekends look like with kids. How the neighborhoods compare for families at different stages.',
  },
  {
    label: 'Neighborhood Notes',
    description:
      'Field guides to the communities that make up coastal San Diego — the quirks, the rituals, the unwritten rules.',
  },
  {
    label: 'Market Perspective',
    description:
      'Plain-language context on housing and the broader local market. What the trends mean. What they do not.',
  },
]

// ─────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-stone-950 py-32 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors">
              San Diego Living
            </Link>
            <span className="text-white/25 text-xs">/</span>
            <span className="font-sans text-xs text-white/70">Stories</span>
          </div>

          <p className="label-text text-white/50 mb-5">Editorial</p>
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            Life in San Diego,
            <br />
            Written Honestly
          </h1>
          <p className="font-sans font-light text-lg text-white/65 max-w-2xl leading-relaxed">
            Field notes from the coast. The people, the places, the rituals, and the small details that make a neighborhood feel like home — for individuals, couples, and families trying to understand what life here is actually like.
          </p>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─────────────────────────────────────── */}
      {featured && (
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="label-text mb-10">Latest</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 lg:gap-16 items-center">
                <div className="relative overflow-hidden h-72 lg:h-[480px] mb-8 lg:mb-0">
                  {featured.image && (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="label-text text-gold">{featured.category}</span>
                    <span className="w-4 h-px bg-stone-300" />
                    <span className="font-sans text-xs text-stone-400">{featured.readTime}</span>
                  </div>
                  <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.1] mb-6 group-hover:text-stone-500 transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="font-sans font-light text-base text-stone-500 leading-relaxed mb-8 max-w-xl">
                    {featured.excerpt}
                  </p>
                  <span className="font-sans text-xs tracking-[0.25em] uppercase text-stone-500 group-hover:text-stone-900 transition-colors duration-300 border-b border-stone-200 group-hover:border-stone-900 pb-0.5">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── EDITORIAL THEMES ─────────────────────────────────────── */}
      <section className="bg-cream-50 py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="label-text mb-4">What We Write About</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight mb-6">
              The Threads That Run
              <br />
              Through Coastal Life
            </h2>
            <p className="font-sans font-light text-base text-stone-600 leading-relaxed">
              Independent. Community-first. Written by people who actually live here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-stone-200 pt-12">
            {editorialThemes.map((theme) => (
              <div key={theme.label}>
                <p className="label-text text-gold mb-4">{theme.label}</p>
                <p className="font-sans font-light text-sm text-stone-600 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARTICLE ARCHIVE ──────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="bg-white py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="label-text mb-4">More Stories</p>
              <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight max-w-xl">
                Field Notes from the Coast
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="relative h-60 overflow-hidden mb-6">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label-text text-gold">{post.category}</span>
                    <span className="w-3 h-px bg-stone-300" />
                    <span className="font-sans text-xs text-stone-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif font-normal text-xl text-stone-900 leading-snug mb-3 group-hover:text-stone-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-stone-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── LOCAL EXPERT ─────────────────────────────────────────── */}
      <section className="bg-cream-50 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label-text mb-5">Curious About Life in San Diego?</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 mb-8 leading-tight">
            Talk to Someone
            <br />
            Who Lives Here
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-4 max-w-xl mx-auto">
            {expert.name} has lived in {expert.area} for {expert.years} years. If you are exploring the area, planning a move, or just want to understand what daily life is really like — they are happy to have an honest conversation.
          </p>
          <p className="font-sans text-sm text-stone-500 leading-relaxed mb-12 max-w-md mx-auto italic">
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
              {expert.brokerage} · {expert.license}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
