import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#mission', label: 'Mission' },
  { href: '#contact', label: 'Contact' },
  
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-laurel/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center">
        <a
          href="#home"
          className="flex items-center gap-2 text-[#FAF9F5] transition-colors duration-300"
        >
          <span className="w-9 h-9 shrink-0 rounded-full bg-gold text-laurel-dark flex items-center justify-center font-heading text-sm font-bold leading-none">
            DT
          </span>
          <span className="font-heading text-xl font-semibold tracking-wide">
            Derick
          </span>
        </a>

        <ul
          className={`hidden md:flex ml-auto items-center gap-8 text-sm font-medium tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-[#FAF9F5]/90' : 'text-[#FAF9F5]/80'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto md:ml-8 flex items-center gap-2">

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[#FAF9F5] p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <ThemeToggle />
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-laurel/98 backdrop-blur-md border-t border-cream/10">
          <ul className="flex flex-col items-center gap-4 py-6 text-[#FAF9F5]/90 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
