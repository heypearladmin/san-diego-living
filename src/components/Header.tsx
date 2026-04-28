'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  {
    label: 'Neighborhoods',
    href: '/neighborhoods',
    children: [
      { label: 'La Jolla', href: '/neighborhoods/la-jolla' },
      { label: 'Del Mar', href: '/neighborhoods/del-mar' },
      { label: 'Pacific Beach', href: '/neighborhoods/pacific-beach' },
      { label: 'Coronado', href: '/neighborhoods/coronado' },
    ],
  },
  { label: 'Local Spots', href: '/local-spots' },
  { label: 'Things To Do', href: '/things-to-do' },
  { label: 'Stories', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerStyle = scrolled
    ? 'bg-white border-b border-stone-100'
    : 'bg-transparent'

  const textColor = scrolled ? 'text-stone-600' : 'text-white/90'
  const logoColor = scrolled ? 'text-stone-900' : 'text-white'
  const sublogoColor = scrolled ? 'text-stone-400' : 'text-white/50'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStyle}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className={`font-serif font-normal text-xl tracking-wide transition-colors duration-500 ${logoColor}`}>
              San Diego Living
            </span>
            <span className={`font-sans font-light text-[9px] tracking-widest uppercase mt-0.5 transition-colors duration-500 ${sublogoColor}`}>
              Coastal California Real Estate
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-sans font-light text-sm tracking-wide transition-colors duration-300 ${textColor} hover:text-gold`}
                >
                  {link.label}
                </Link>

                {/* Dropdown — pt-3 wrapper fills the gap so onMouseLeave doesn't fire mid-hover */}
                {link.children && (
                  <div className={`absolute top-full left-0 pt-3 w-48 z-10 ${
                    activeDropdown === link.label ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}>
                    <div className={`bg-white border border-stone-100 shadow-sm transition-all duration-300 ${
                      activeDropdown === link.label
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-1'
                    }`}>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-5 py-3 font-sans font-light text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/blog"
              className={`font-sans font-light text-xs tracking-widest uppercase border px-6 py-2.5 transition-all duration-500 ${
                scrolled
                  ? 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900'
                  : 'border-white/40 text-white/80 hover:border-white hover:text-white'
              }`}
            >
              Get Local Insights
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-stone-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-px bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-stone-100 overflow-hidden transition-all duration-500 ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="font-sans font-light text-sm tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-3 ml-4 flex flex-col gap-2.5">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="font-sans font-light text-sm text-stone-400 hover:text-stone-700 transition-colors duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/blog"
            className="mt-2 btn-primary text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Local Insights
          </Link>
        </nav>
      </div>
    </header>
  )
}
