import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";

const testimonials = [
  {
    name: "Olivia Bennett",
    role: "Guest",
    review:
      "An exceptional dining experience. Every dish was beautifully presented, full of flavor, and thoughtfully prepared.",
    rating: 5,
    initials: "OB",
  },
  {
    name: "James Anderson",
    role: "Guest",
    review:
      "The atmosphere was elegant, the service was outstanding, and every detail made the evening feel special.",
    rating: 5,
    initials: "JA",
  },
  {
    name: "Sophia Williams",
    role: "Guest",
    review:
      "A wonderful place for a memorable dinner. The food, ambiance, and hospitality made the entire visit delightful.",
    rating: 5,
    initials: "SW",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-[#0B1428] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Guest Experiences"
          title="WORDS FROM"
          highlight="OUR GUESTS."
          description="Discover the kind of memorable moments we strive to create for every guest who joins us at ÉLORA."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              className="group flex h-full flex-col border border-white/10 bg-[#101C33] p-6 transition-colors duration-300 hover:border-[#FF7A30]/50 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-serif leading-none text-[#FF7A30]">
                  “
                </span>

                <div
                  className="flex gap-1 text-[#FF7A30]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }, (_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-white/70 sm:text-base">
                {item.review}
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#FF7A30]/40 bg-[#FF7A30]/10 text-sm font-extrabold text-[#FF7A30]">
                    {item.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="mt-1 text-xs text-white/45">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center text-xs leading-6 text-white/40"
        >
          Sample testimonials for design purposes. Replace them with genuine
          customer reviews before publishing.
        </motion.p>
      </div>
    </section>
  );
}

export default Testimonials;
