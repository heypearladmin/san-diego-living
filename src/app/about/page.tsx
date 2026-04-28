import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | San Diego Living',
  description:
    'San Diego Living is an independent community platform covering neighborhoods, local spots, and lifestyle across coastal San Diego.',
}

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="label-text text-stone-500 mb-5">About This Platform</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6">
            San Diego Living
          </h1>
          <p className="font-sans font-light text-lg text-stone-400 leading-relaxed max-w-2xl">
            An independent community guide to coastal San Diego — the neighborhoods, local businesses, and everyday experiences that make this place worth knowing.
          </p>
        </div>
      </section>

      {/* ─── ABOUT CONTENT ────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16">
            <div>
              <p className="label-text mb-6">Our Purpose</p>
              <h2 className="font-serif text-3xl text-stone-900 mb-8 leading-snug">
                Built to Help People Experience San Diego Like a Local
              </h2>
              <p className="font-sans font-light text-base text-stone-600 leading-relaxed mb-5">
                San Diego Living is an independent editorial platform dedicated to helping people explore, understand, and experience coastal San Diego. Whether you are new to the city, thinking about relocating, or simply want to discover what is happening in your neighborhood — this is your resource.
              </p>
              <p className="font-sans font-light text-base text-stone-600 leading-relaxed mb-5">
                We cover neighborhoods in depth, highlight the local businesses and restaurants worth knowing about, and write honestly about the experience of living here. Real estate is part of that story, but it is not the whole one.
              </p>
              <p className="font-sans font-light text-base text-stone-600 leading-relaxed mb-12">
                Our content is written from the ground up — no aggregated listings, no automated copy, no sponsored rankings. Just local knowledge, shared clearly.
              </p>

              <div className="border-t border-stone-100 pt-10">
                <p className="label-text mb-6">What We Cover</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Neighborhood guides',
                    'Local restaurants & cafes',
                    'Things to do & explore',
                    'Community stories',
                    'Real estate context',
                    'Lifestyle & culture',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <p className="font-sans text-sm text-stone-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-cream-50 border border-stone-100 p-8 mb-6">
                <p className="label-text mb-3">Our Approach</p>
                <p className="font-sans font-light text-sm text-stone-500 leading-relaxed">
                  Independent. Community-first. Written by people who actually live here.
                </p>
              </div>
              <div className="bg-cream-50 border border-stone-100 p-8 mb-6">
                <p className="label-text mb-3">Location</p>
                <p className="font-sans font-light text-sm text-stone-500 leading-relaxed">
                  Coastal San Diego, California
                </p>
              </div>
              <div className="bg-cream-50 border border-stone-100 p-8">
                <p className="label-text mb-3">Get in Touch</p>
                <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-4">
                  Questions, story ideas, or local tips welcome.
                </p>
                <Link
                  href="/contact"
                  className="font-sans text-xs tracking-widest uppercase text-stone-600 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ────────────────────────────────────────── */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-12" />
          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed font-normal">
            &ldquo;This platform is built to help people explore, understand, and experience San Diego like a local.&rdquo;
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-12" />
        </div>
      </section>
    </>
  )
}
