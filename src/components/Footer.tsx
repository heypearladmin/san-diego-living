import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

const linkColumns = [
  {
    heading: 'Neighborhoods',
    items: [
      { label: 'La Jolla', href: '/neighborhoods/la-jolla' },
      { label: 'Del Mar', href: '/neighborhoods/del-mar' },
      { label: 'Pacific Beach', href: '/neighborhoods/pacific-beach' },
      { label: 'Coronado', href: '/neighborhoods/coronado' },
    ],
  },
  {
    heading: 'Explore',
    items: [
      { label: 'Local Spots', href: '/local-spots' },
      { label: 'Things To Do', href: '/things-to-do' },
      { label: 'Stories', href: '/blog' },
      { label: 'About', href: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 lg:gap-24">

          {/* Brand */}
          <div>
            <Link href="/" className="block mb-7">
              <span className="font-serif font-normal text-xl text-white tracking-wide">
                San Diego Living
              </span>
            </Link>
            <p className="font-sans font-light text-sm text-stone-500 leading-relaxed mb-12 max-w-xs">
              An independent editorial resource for coastal San Diego real estate — neighborhoods, market intelligence, and the life that surrounds them.
            </p>
            <p className="label-text text-stone-700 mb-4">Market Insights, Monthly</p>
            <NewsletterForm dark />
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="label-text text-stone-600 mb-8">{col.heading}</h4>
              <ul className="flex flex-col gap-5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans font-light text-sm text-stone-500 hover:text-stone-200 transition-colors duration-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Specialist line */}
        <div className="mt-20 pt-10 border-t border-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="label-text text-stone-700 mb-1">Local Real Estate Expert</p>
            <p className="font-sans font-light text-sm text-stone-500">
              Sarah Chen &nbsp;·&nbsp; Compass Real Estate &nbsp;·&nbsp; CA DRE #02054123
            </p>
          </div>
          <Link
            href="/contact"
            className="font-sans font-light text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-500 whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-stone-900/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans font-light text-xs text-stone-800">
            © {new Date().getFullYear()} San Diego Living
          </p>
          <p className="font-sans font-light text-xs text-stone-800 sm:text-right max-w-md leading-relaxed">
            Information deemed reliable but not guaranteed. All properties subject to prior sale or withdrawal.
          </p>
        </div>
      </div>
    </footer>
  )
}
