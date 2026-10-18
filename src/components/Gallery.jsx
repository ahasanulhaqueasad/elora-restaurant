import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import galleryImages from "../data/gallery.json";

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-[#080F20] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="A Glimpse of ÉLORA"
          title="MOMENTS WORTH"
          highlight="SAVORING."
          description="Explore the flavors, atmosphere, and little details that make every visit to ÉLORA memorable."
        />

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
              }}
              className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#101C33]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.alt || item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080F20]/95 via-[#080F20]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Image Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#FF7A30]">
                  {item.category}
                </p>

                <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-4 h-[2px] w-10 bg-[#FF5A1F] transition-all duration-300 group-hover:w-20" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Gallery Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between"
        >
          <p className="text-sm text-white/50">
            Every dish tells a story. Every visit creates a memory.
          </p>

          <a
            href="#reservation"
            className="inline-flex items-center gap-3 bg-[#FF5A1F] px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#FF7A30]"
          >
            Reserve Your Table
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
