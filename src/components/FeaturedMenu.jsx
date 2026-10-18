import { useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import MenuCard from "./MenuCard.jsx";
import foods from "../data/foods.json";

function FeaturedMenu() {
  const [showAll, setShowAll] = useState(false);

  const featuredFoods = foods.filter((food) => food.featured);
  const displayedFoods = showAll ? foods : featuredFoods.slice(0, 6);

  return (
    <section
      id="menu"
      className="scroll-mt-24 overflow-hidden bg-[#080F20] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="From Our Kitchen"
          title="OUR SIGNATURE"
          highlight="MENU."
          description="Discover thoughtfully prepared dishes made with quality ingredients, creative techniques, and a passion for exceptional flavor."
        />

        {/* Menu Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-5 border-y border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF7A30]">
              Crafted With Passion
            </p>

            <h3 className="mt-2 text-xl font-black uppercase tracking-tight sm:text-2xl">
              A FLAVOR FOR EVERY MOOD.
            </h3>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50 sm:text-right">
            From elegant starters to unforgettable main courses, every plate is
            prepared to make your dining experience special.
          </p>
        </motion.div>

        {/* Menu Grid */}
        {displayedFoods.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedFoods.map((food, index) => (
              <MenuCard
                key={food.number || food.name}
                food={food}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-white/10 bg-[#101C33] px-6 py-12 text-center">
            <p className="text-lg font-bold">Our menu is being prepared.</p>

            <p className="mt-2 text-sm text-white/50">
              Please check back soon for our signature dishes.
            </p>
          </div>
        )}

        {/* Show All / Featured Toggle */}
        {foods.length > featuredFoods.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]"
            >
              {showAll ? "Show Featured Menu" : "Explore Full Menu"}

              <span aria-hidden="true">{showAll ? "↑" : "↗"}</span>
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-black uppercase tracking-tight text-white sm:text-xl">
              Every dish has a story.
            </p>

            <p className="mt-2 text-sm text-white/50">
              Find your next favorite at ÉLORA.
            </p>
          </div>

          <a
            href="#reservation"
            className="inline-flex shrink-0 items-center gap-3 bg-[#FF5A1F] px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#FF7A30] hover:shadow-lg hover:shadow-[#FF5A1F]/20"
          >
            Reserve Your Table
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedMenu;
