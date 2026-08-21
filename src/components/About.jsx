import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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

const bioParagraphs = [
  '•Shey Derick Tamfuh, a teacher of the Word and a poet whose life is rooted in the quiet conviction that truth, when spoken with love, has the power to transform hearts. With a heart for ministry and a pen that never rests, he has spent years walking alongside others helping them see what God sees in them.',
  '•His teaching is grounded in scripture but colored by lived experience. He doesn&apos;t simply explain the Word; he helps people encounter it. Whether in a small gathering, a classroom, or through the written page, Derick carries a gift for meeting people exactly where they are.',
  '•A poet at heart, he gives language to the inexpressible grief, hope, longing, and the gentle work of healing. His words carry a rhythm that invites reflection and a honesty that invites connection. For Derick, writing is ministry. Teaching is poetry. Serving is worship.',
]


export default function About() {
  return (
    <section id="about" className="bg-laurel-dark/30 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <FadeIn>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium text-center">
            About
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal mb-12 text-center">
            A Life Given to Word &amp; Witness
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative mx-auto max-w-5xl">
            {/* Book shadow/base */}
            <div className="absolute -inset-4 bg-laurel/20 rounded-[2rem] blur-xl" />

            {/* Book container */}
            <div className="relative max-w-full bg-[#5D4037] rounded-[1.5rem] p-2 sm:p-4 shadow-2xl">
              {/* Inner book */}
              <div className="relative bg-[#F5F0E6] rounded-[1rem] overflow-hidden">
                {/* Spine */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-3 sm:w-4 bg-[#5D4037] -translate-x-1/2 z-20 shadow-[inset_0_0_8px_rgba(0,0,0,0.3)]" />
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 sm:w-1.5 -translate-x-1/2 z-30 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

                {/* Pages */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Page */}
                  <div className="relative min-w-0 p-5 sm:p-10 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#5D4037]/10">
                    <div className="hidden sm:block absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-[#C9A24B]/40" />
                    <div className="hidden sm:block absolute bottom-4 right-4 w-6 h-6 rounded-full border-2 border-[#C9A24B]/30" />
                    
                    <h3 className="font-heading text-2xl sm:text-3xl text-[#3F5B34] mb-6 sm:mb-8 leading-tight">
                      The Teacher &amp; The Poet
                    </h3>
                    
                    <div className="space-y-4 sm:space-y-5">
                      {bioParagraphs.map((text, i) => (
                        <p
                          key={i}
                          className="break-words text-[#1F241C]/80 text-base sm:text-lg leading-relaxed font-body"
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Page */}
                  <div className="relative min-w-0 p-5 sm:p-10 md:p-12 lg:p-16 bg-[#FBF7EF]">
                    <div className="hidden sm:block absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-[#C9A24B]/40" />
                    <div className="hidden sm:block absolute bottom-4 left-4 w-6 h-6 rounded-full border-2 border-[#C9A24B]/30" />

                    <div className="h-full flex flex-col justify-center">
                      <div className="mb-6 sm:mb-8">
                        <div className="w- h-0.5 bg-[#C9A24B] mb-6" />
                        <blockquote className="break-words font-heading text-xl sm:text-2xl md:text-3xl italic text-[#3F5B34] leading-relaxed">
                          &ldquo;I believe that when people lose interest in someone, God can become even more interested in them. Where others see an abandoned story, God may be preparing a testimony.&rdquo;
                        </blockquote>
                        <div className="w- h-0.5 bg-[#C9A24B] mt-6" />
                      </div>

                      <div className="mt-8 p-5 sm:p-6 bg-[#3F5B34]/5 rounded-xl border border-[#3F5B34]/10">
                        <p className="text-sm font-medium text-[#0d0e0d] tracking-wide uppercase mb-2">
                          Scripture Reference
                        </p>
                        <p className="break-words text-[#1F241C]/70 text-sm leading-relaxed">
                          &ldquo;The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.&rdquo;
                        </p>
                        <p className="text-gold text-xs tracking-[0.2em] uppercase mt-2 font-medium">
                          — Psalm 23:1-3 (ESV)
                        </p>
                      </div>
                        <div className="mt-8 p-5 sm:p-6 bg-[#3F5B34]/5 rounded-xl border border-[#3F5B34]/10">
                        <p className="text-sm font-medium text-[#0d0e0d] tracking-wide uppercase mb-2">
                          Teacting Truth
                        </p>
                        <p className="break-words text-[#1F241C]/70 text-sm leading-relaxed">
                          &ldquo;Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.&rdquo;
                        </p>
                        <p className="text-gold text-xs tracking-[0.2em] uppercase mt-2 font-medium">
                          — Psalm 45:1 (NIV)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
