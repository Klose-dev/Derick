import { motion } from 'framer-motion'

import { TypingText } from './lightswind/typing-text'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-laurel overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#FAF9F5]/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        <motion.div
          className="order-2 md:order-1 flex justify-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="relative aspect-square w-full max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem]">

            <div className="absolute -inset-3 bg-gold/20 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] blur-sm" />

            <img
              src="../image/Derick.jpeg"
              alt="Portrait of Derick"
              className="relative w-full h-full object-cover object-top rounded-[40%_60%_55%_45%/55%_45%_55%_45%] shadow-2xl"
              loading="eager"
            />

            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/40 rounded-full" />

            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-gold/30 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 text-center md:text-left w-full min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p className="text-gold font-medium text-sm sm:text-base tracking-[0.25em] uppercase mb-4">
            Shey Derick Tamfuh
          </p>

          <p className="text-[#FAF9F5]/80 font-medium text-sm sm:text-base tracking-[0.25em] uppercase mb-4">
            Teacher of the Word • Poet
          </p>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-[#FAF9F5] leading-[0.9] mb-6 break-words">
            DERICK
          </h1>

          <h1 className="font-heading text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-[#6aca7e] leading-[0.9] mb-6 break-words">
            TAMFUH
          </h1>

          <div className="w-full max-w-[468px] h-0.5 bg-gold mx-auto md:mx-0 mb-6" />

          <div className="w-full min-w-0 overflow-hidden">
            <TypingText
              as="p"
              className="text-[#FAF9F5]/80 text-lg sm:text-xl font-light leading-relaxed mx-auto md:mx-0 mb-5"
              delay={0.8}
              duration={2.5}
              fontSize="text-lg sm:text-xl"
              fontWeight="font-light"
              color="text-[#FAF9F5]/80"
              letterSpacing="tracking-wide"
              align="left"
              loop={false}
            >
              A teacher of the word of God and equally a poet.
            </TypingText>
          </div>

          <motion.a
            href="#about"
            className="inline-block mt-10 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-laurel-dark transition-all duration-500 text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Discover More
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-6 h-10 border-2 border-[#FAF9F5]/40 rounded-full flex justify-center pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-1 h-2 bg-[#FAF9F5]/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}