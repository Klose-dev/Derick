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

export default function Poetry() {
  return (
    <section id="poetry" className="bg-laurel py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium text-center">
            Featured
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#FAF9F5] mb-12 text-center">
            A Glimpse of His Words
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative bg-laurel-dark/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-16 border border-[#FAF9F5]/10 shadow-2xl">
            <div className="absolute top-6 left-8 text-gold/30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4.995v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl italic text-[#FAF9F5]/95 leading-relaxed text-center">
              &ldquo;I teach to reveal truth. I write to express what words struggle to carry. I serve to remind the forgotten that God has not forgotten them.&rdquo;
            </blockquote>

            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-gold/50" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                •Shey Derick Tamfuh•
              </span>
              <div className="w-8 h-px bg-gold/50" />
            </div>

            <p className="text-center text-[#FAF9F5]/50 text-sm mt-3 font-body">
              Ready for his actual poems and teaching excerpts
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
