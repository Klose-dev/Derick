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

const cards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'I teach to reveal truth.',
    desc: 'Scripture studied with sincerity, delivered with warmth always pointing back to the One who is Truth.',
    color: '#C9A24B',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: 'I write to express what words struggle to carry.',
    desc: 'Poetry born from honest encounter with God, with grief, with grace. Every line is an offering.',
    color: '#3F5B34',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'I serve to remind the forgotten that God has not forgotten them.',
    desc: 'Ministry is presence. It is showing up, staying close, and letting people know they are seen and beloved.',
    color: '#C9A24B',
  },
]

export default function Mission() {
  return (
    <section id="mission" className="bg-cream-dark py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium text-center">
            Mission
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal mb-4 text-center">
            What He Does
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <motion.div
                className="relative bg-cream rounded-2xl p-8 sm:p-10 border border-laurel/5 shadow-sm h-full flex flex-col overflow-hidden group"
                whileHover={{
                  y: -8,
                  boxShadow: `0 25px 50px -12px ${card.color}30, 0 0 40px -10px ${card.color}40`,
                  borderColor: `${card.color}50`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated glow background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${card.color}15, transparent 70%)`,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Corner glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: card.color }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-gold mb-6 inline-flex p-3 rounded-xl bg-gold/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-laurel dark:text-gold-light mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: card.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
