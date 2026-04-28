import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const processed = await remark().use(remarkHtml).process(post.content)
  const contentHtml = processed.toString()

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      {post.image ? (
        <section className="relative h-[55vh] min-h-[420px] flex items-end pt-20">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/20" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pb-14 w-full">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
                San Diego Living
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <Link href="/blog" className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
                Stories
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="font-sans text-xs text-white/70">{post.category}</span>
            </div>
            <p className="label-text text-gold mb-4">{post.category}</p>
            <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </section>
      ) : (
        <section className="bg-stone-950 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
                San Diego Living
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <Link href="/blog" className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
                Stories
              </Link>
            </div>
            <p className="label-text text-gold mb-4">{post.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </section>
      )}

      {/* ─── META BAR ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-5 flex items-center gap-4">
          <span className="font-sans text-xs text-stone-400">San Diego Living</span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span className="font-sans text-xs text-stone-400">{post.readTime}</span>
          {post.date && (
            <>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span className="font-sans text-xs text-stone-400">{post.date}</span>
            </>
          )}
        </div>
      </div>

      {/* ─── ARTICLE BODY ─────────────────────────────────────────────── */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-normal
              prose-p:font-sans prose-p:font-light prose-p:text-stone-600 prose-p:leading-[1.85]
              prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold-dark
              prose-strong:text-stone-800 prose-strong:font-normal
              prose-blockquote:border-l-gold prose-blockquote:font-serif prose-blockquote:not-italic prose-blockquote:text-stone-600"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      {/* ─── BACK LINK + NEWSLETTER ───────────────────────────────────── */}
      <section className="bg-cream-50 border-t border-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link
            href="/blog"
            className="font-sans text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-colors"
          >
            ← Back to Stories
          </Link>
          <p className="font-sans font-light text-sm text-stone-400 max-w-xs leading-relaxed">
            More neighborhood guides, local spots, and community stories every month.{' '}
            <Link href="/#newsletter" className="text-stone-600 hover:text-stone-900 transition-colors">
              Subscribe →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
