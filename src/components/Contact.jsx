import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SocialIcon, socialLinks } from './socialLinks'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const whatsappNumber = '237682324190'

    const whatsappMessage = `Hello Shey Derick,

My name is ${name}.

Email: ${email}

Message:
${message}

I am reaching out through your website.`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    e.currentTarget.reset()
  }

  return (
    <section
      id="contact"
      className="bg-cream-dark py-24 sm:py-32 dark:bg-white dark:[--color-charcoal:#1F241C] dark:[--color-charcoal-light:#2A2F27] dark:[--color-cream:#FFFFFF] dark:[--color-cream-dark:#FAF9F5] dark:[--color-laurel:#3F5B34] dark:[--color-laurel-light:#4A6B3F] dark:[--color-gold:#8A6724] dark:[--color-gold-light:#8A6724]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <FadeIn>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium text-center">
            Contact
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal mb-4 text-center">
            Get in Touch
          </h2>

          <div className="w-12 h-0.5 bg-gold mx-auto mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Form */}
          <FadeIn delay={0.1}>
            <div className="bg-cream rounded-2xl p-8 sm:p-10 border border-laurel/5 shadow-sm h-full">

              <h3 className="font-heading text-2xl sm:text-3xl text-laurel mb-6">
                Send a Message
              </h3>

              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal/80 mb-1.5"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-laurel/10 bg-cream-dark px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal/80 mb-1.5"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-laurel/10 bg-cream-dark px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal/80 mb-1.5"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full rounded-xl border border-laurel/10 bg-cream-dark px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-laurel text-[#FAF9F5] py-3.5 font-medium tracking-wide hover:bg-laurel-light transition-colors duration-300"
                >
                  Send Message on WhatsApp
                </button>

              </form>
            </div>
          </FadeIn>

          {/* Contact Information */}
          <FadeIn delay={0.2}>
            <div className="bg-cream rounded-2xl p-8 sm:p-10 border border-laurel/5 shadow-sm h-full flex flex-col">

              <h3 className="font-heading text-2xl sm:text-3xl text-laurel mb-6">
                Contact Info
              </h3>

              <div className="space-y-6 flex-grow">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-charcoal/60 mb-0.5">
                      Email
                    </p>

                    <a
                      href="mailto:sheydericktamfuh@gmail.com"
                      className="text-charcoal font-medium hover:text-laurel transition-colors"
                    >
                      sheydericktamfuh@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a12 12 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-charcoal/60 mb-0.5">
                      Phone / WhatsApp
                    </p>

                    <a
                      href="https://wa.me/237682324190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal font-medium hover:text-laurel transition-colors"
                    >
                      +237 682 324 190
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-charcoal/60 mb-0.5">
                      Location
                    </p>

                    <p className="text-charcoal font-medium">
                      Cameroon / Yaoundé
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-laurel/5">
                  <p className="text-sm font-medium text-charcoal/60 mb-3">
                    Social Media
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-full border border-laurel/20 flex items-center justify-center text-laurel hover:bg-laurel hover:text-[#FAF9F5] hover:border-laurel transition-all duration-300"
                      >
                        <SocialIcon name={s.name} />
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Information */}
              <div className="mt-8 pt-6 border-t border-laurel/5">
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Available for ministry, poetry bookings, and teaching
                  engagements. Reach out anytime.
                </p>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}