import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const socials = [
  {
    href: '#',
    label: 'Instagram',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'YouTube',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    href: 'mailto:hello@example.com',
    label: 'Email',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export default function Connect() {
  return (
    <section id="connect" className="bg-cream py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Connect
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal mb-6">
            Let&apos;s Stay in Touch
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-heading text-2xl sm:text-3xl italic text-laurel mb-12 leading-relaxed">
            &ldquo;DERICK — Teaching Truth. Writing Depth. Restoring Hope.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 mb-16">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group w-14 h-14 rounded-full border-2 border-laurel/20 flex items-center justify-center text-laurel hover:bg-laurel hover:text-cream hover:border-laurel transition-all duration-500"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="inline-block bg-cream-dark rounded-2xl px-8 py-6 border border-laurel/5">
            <p className="text-charcoal/60 text-sm leading-relaxed max-w-md mx-auto">
              &ldquo;The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.&rdquo;
            </p>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mt-3 font-medium">
              — Psalm 23:1-3 (ESV)
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
