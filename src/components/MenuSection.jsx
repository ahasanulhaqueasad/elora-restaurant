import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import foods from "../data/foods.json";

const categories = [
  "All Dishes",
  "Starters",
  "Main Course",
  "Seafood",
  "Pasta",
  "Grill",
  "Desserts",
];

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All Dishes");

  const filteredFoods = useMemo(() => {
    if (activeCategory === "All Dishes") {
      return foods;
    }

    return foods.filter((food) => food.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-[#080F20] px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#FF5A1F]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#FF7A30]">
              <span className="h-[2px] w-9 bg-[#FF5A1F]" />A Taste of Excellence
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              OUR <span className="text-[#FF5A1F]">SIGNATURE</span>
              <br className="hidden sm:block" /> MENU
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Thoughtfully crafted dishes, exceptional ingredients, and flavors
              worth coming back for.
            </p>
          </div>

          <div className="border-l-2 border-[#FF5A1F] pl-5">
            <p className="text-3xl font-black text-white">06</p>
            <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/50">
              Signature Selections
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 border px-5 py-3 text-xs font-extrabold transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#FF5A1F] bg-[#FF5A1F] text-white"
                  : "border-white/10 bg-[#101C33] text-white/65 hover:border-[#FF5A1F]/60 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6 mt-4 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">
            Showing{" "}
            <span className="text-[#FF7A30]">{filteredFoods.length}</span>{" "}
            dishes
          </p>

          <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/35">
            ÉLORA Selection
          </span>
        </div>

        {/* Food Cards */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredFoods.map((food, index) => (
              <motion.article
                key={food.number}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group overflow-hidden border border-white/10 bg-[#101C33] transition-colors duration-300 hover:border-[#FF5A1F]/50"
              >
                <div className="relative h-60 overflow-hidden sm:h-64">
                  <img
                    src={food.image}
                    alt={food.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080F20]/80 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 border border-white/20 bg-[#080F20]/85 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-sm">
                    {food.category}
                  </span>

                  {food.featured && (
                    <span className="absolute right-4 top-4 bg-[#FF5A1F] px-3 py-2 text-[9px] font-extrabold uppercase tracking-wider text-white">
                      Chef's Pick
                    </span>
                  )}

                  <span className="absolute bottom-4 left-4 text-3xl font-black text-white/70">
                    {food.number}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-black text-white transition-colors group-hover:text-[#FF7A30] sm:text-xl">
                      {food.name}
                    </h3>

                    <p className="shrink-0 text-lg font-black text-[#FF7A30]">
                      ${food.price}
                    </p>
                  </div>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/55">
                    {food.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <Link
                      to="/reservation"
                      className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-[#FF7A30]"
                    >
                      Reserve Your Experience
                      <span className="text-[#FF5A1F] transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col gap-5 border border-white/10 bg-[#101C33] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xl font-black text-white sm:text-2xl">
              YOUR NEXT FAVORITE DISH
              <span className="text-[#FF5A1F]"> AWAITS.</span>
            </p>
            <p className="mt-2 text-sm text-white/50">
              Make your dining experience something special.
            </p>
          </div>

          <Link
            to="/reservation"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#FF5A1F] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#080F20]"
          >
            Book Your Table <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
