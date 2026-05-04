import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | San Diego Living',
  description:
    'San Diego Living is an independent editorial guide to coastal San Diego — built for individuals, couples, and families trying to understand what life here is actually like.',
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
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
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
            <span className="font-sans text-xs text-white/70">About</span>
          </div>

          <p className="label-text text-white/50 mb-5">About This Platform</p>
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            Built for the People
            <br />
            Trying to Understand It
          </h1>
          <p className="font-sans font-light text-lg text-white/65 max-w-2xl leading-relaxed">
            San Diego Living is an independent editorial guide to coastal San Diego — written for individuals, couples, and families trying to understand what life here is actually like.
          </p>
        </div>
      </section>

      {/* ─── WHY THIS EXISTS ──────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="label-text mb-6">Why This Exists</p>
          <h2 className="font-serif font-normal text-4xl md:text-5xl text-stone-900 leading-[1.1] mb-12">
            Most Sites About San Diego
            <br />
            Are Written for Tourists
          </h2>
          <p className="font-sans text-lg text-stone-600 leading-relaxed mb-6">
            We started San Diego Living because most of what gets written about the city is written for the visitor. Aggregated lists. Sponsored rankings. The same handful of postcard photos.
          </p>
          <p className="font-sans text-lg text-stone-600 leading-relaxed mb-6">
            That kind of content is fine for someone planning a vacation. It is not very useful for someone considering a move. It does not tell you what the marine layer feels like in May, which neighborhood school your kids will actually walk to, what mornings cost in time and money, or how the four coastal communities differ in ways the maps will never show you.
          </p>
          <p className="font-sans text-lg text-stone-600 leading-relaxed">
            This is the resource we wished existed when we were trying to figure that out for ourselves.
          </p>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─────────────────────────────────────────── */}
      <section className="bg-cream-50 py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="label-text mb-4">Who It Is For</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight mb-6">
              The Reader We Write For
            </h2>
            <p className="font-sans font-light text-base text-stone-600 leading-relaxed">
              San Diego Living is written for anyone trying to picture their daily life in a new neighborhood — not just browse a list of options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-stone-200 pt-14">
            <div>
              <p className="label-text text-gold mb-5">Individuals</p>
              <p className="font-serif font-normal text-2xl text-stone-900 mb-5 leading-snug">
                Choosing the kind of pace they want.
              </p>
              <p className="font-sans font-light text-sm text-stone-600 leading-relaxed">
                Newcomers, remote workers, and longtime visitors finally making the move. Reading to understand the rhythms before committing to one.
              </p>
            </div>
            <div>
              <p className="label-text text-gold mb-5">Couples</p>
              <p className="font-serif font-normal text-2xl text-stone-900 mb-5 leading-snug">
                Deciding what comes next together.
              </p>
              <p className="font-sans font-light text-sm text-stone-600 leading-relaxed">
                A household weighing tradeoffs — village walkability versus oceanfront, schools versus surf, the morning coffee shop versus the evening dinner reservation.
              </p>
            </div>
            <div>
              <p className="label-text text-gold mb-5">Families</p>
              <p className="font-serif font-normal text-2xl text-stone-900 mb-5 leading-snug">
                Building a life with kids in mind.
              </p>
              <p className="font-sans font-light text-sm text-stone-600 leading-relaxed">
                Parents thinking about schools, parks, beach mornings, and the kind of childhood the coast actually offers — beyond the postcards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE COVER ────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-text mb-4">What We Cover</p>
              <h2 className="font-serif font-normal text-3xl md:text-4xl text-stone-900 leading-tight mb-8">
                The Stories That
                <br />
                Actually Help
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                We cover neighborhoods in depth — La Jolla, Del Mar, Pacific Beach, and Coronado at the start, with North Park, Little Italy, and Carmel Valley in the works. We highlight the local restaurants, cafes, and parks that actually matter to people who live here.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                We write honestly about the experience of living in coastal San Diego — including for families. Real estate is part of that story, but it is not the whole one.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-t border-stone-200 pt-5">
                <p className="font-serif text-lg text-stone-900 mb-2">Neighborhoods</p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  Field guides to coastal communities
                </p>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <p className="font-serif text-lg text-stone-900 mb-2">Local Spots</p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  Cafes, restaurants, the places locals go
                </p>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <p className="font-serif text-lg text-stone-900 mb-2">Things To Do</p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  Mornings, weekends, family days
                </p>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <p className="font-serif text-lg text-stone-900 mb-2">Stories</p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  Honest writing on living here
                </p>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <p className="font-serif text-lg text-stone-900 mb-2">Family Life</p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  What weekends look like with kids
                </p>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <p className="font-serif text-lg text-stone-900 mb-2">Market Notes</p>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">
                  Plain-language housing context
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─────────────────────────────────────────── */}
      <section className="bg-stone-950 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-12" />
          <p className="label-text text-stone-500 mb-6">Our Approach</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-white leading-[1.15] mb-8">
            Independent.
            <br />
            Community-First.
            <br />
            Written by People Who Live Here.
          </h2>
          <p className="font-sans font-light text-base text-stone-400 leading-relaxed">
            No aggregated listings. No automated copy. No sponsored rankings. Just local knowledge, written clearly.
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-12" />
        </div>
      </section>

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
