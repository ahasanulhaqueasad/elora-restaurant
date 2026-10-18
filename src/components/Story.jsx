import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";

function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-24 overflow-hidden bg-[#101C33] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-4 -top-4 h-32 w-32 border-l-2 border-t-2 border-[#FF5A1F] sm:-left-6 sm:-top-6" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#080F20]">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
              alt="Elegant ÉLORA-style fine dining restaurant interior"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080F20]/50 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-3 max-w-[220px] border border-white/10 bg-[#080F20] p-5 sm:-right-6 sm:p-7">
            <p className="text-3xl font-black text-[#FF7A30]">ÉLORA</p>
            <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.2em] text-white/60">
              A passion for exceptional dining
            </p>
          </div>

          <div className="absolute -bottom-4 -left-4 -z-0 h-24 w-24 bg-[#FF5A1F]/10" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="pt-4 lg:pt-0"
        >
          <SectionHeading
            eyebrow="The Story of ÉLORA"
            title="PASSION ON"
            highlight="EVERY PLATE."
            description=""
            align="left"
          />

          <p className="mt-7 text-sm leading-8 text-white/65 sm:text-base">
            At ÉLORA, we believe a remarkable meal is more than something you
            taste. It is an experience shaped by thoughtful cooking, welcoming
            hospitality, and the joy of sharing a table.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
            Our philosophy is simple: respect the ingredients, care about every
            detail, and make each guest feel special. From the first welcome to
            the final bite, every moment should feel worth remembering.
          </p>

          {/* Highlights */}
          <div className="mt-9 grid grid-cols-2 gap-5 border-y border-white/10 py-7">
            <div>
              <span className="text-2xl font-black text-[#FF7A30]">01</span>
              <h3 className="mt-2 text-xs font-extrabold uppercase tracking-widest text-white">
                Quality First
              </h3>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Thoughtful ingredients and careful preparation.
              </p>
            </div>

            <div>
              <span className="text-2xl font-black text-[#FF7A30]">02</span>
              <h3 className="mt-2 text-xs font-extrabold uppercase tracking-widest text-white">
                Made With Care
              </h3>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Attention to detail in every dining experience.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#menu"
            className="mt-8 inline-flex items-center gap-4 bg-[#FF5A1F] px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#FF7A30]"
          >
            Explore Our Menu
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Story;
