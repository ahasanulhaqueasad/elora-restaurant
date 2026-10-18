import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-[#080F20] text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90"
          alt="Elegant restaurant dining atmosphere"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#080F20]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F20] via-[#080F20]/85 to-[#080F20]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F20] via-transparent to-[#080F20]/20" />
      </div>

      {/* Decorative Accent */}
      <div className="absolute right-0 top-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-[#FF5A1F]/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-10 lg:px-20 lg:pb-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FF5A1F]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A30] sm:text-sm">
              Welcome to ÉLORA
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            EXPERIENCE
            <br />
            THE ART OF
            <br />
            <span className="text-[#FF5A1F]">FINE DINING.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Discover exceptional flavors, thoughtfully crafted dishes, and an
            atmosphere designed to make every moment unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#reservation"
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#FF5A1F] px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#FF7A30] sm:px-8"
            >
              Reserve a Table
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#menu"
              className="inline-flex min-h-14 items-center justify-center gap-4 border border-white/25 bg-white/5 px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 sm:px-8"
            >
              Explore Menu
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Bottom Highlights */}
          <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6 sm:mt-16 sm:gap-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">
                Fresh
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                Quality Ingredients
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">
                Crafted
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                By Expert Chefs
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">
                Memorable
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                Every Visit
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#story"
        aria-label="Scroll to our story"
        className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-[#FF7A30] sm:flex lg:right-20"
      >
        Discover More
        <span className="animate-bounce text-lg text-[#FF7A30]">↓</span>
      </a>
    </section>
  );
}

export default Hero;
