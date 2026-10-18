import { motion } from "motion/react";

function MenuCard({ food, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group overflow-hidden border border-white/10 bg-[#101C33] transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A1F]/60"
    >
      {/* Food Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#080F20]">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F20]/70 via-transparent to-transparent" />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 bg-[#FF5A1F] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white">
          {food.category}
        </span>

        {/* Food Number */}
        {food.number && (
          <span className="absolute bottom-4 right-4 text-3xl font-black text-white/70">
            {food.number}
          </span>
        )}
      </div>

      {/* Food Details */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-black uppercase leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#FF7A30]">
            {food.name}
          </h3>

          <p className="shrink-0 text-lg font-black text-[#FF7A30]">
            {food.currency === "USD" ? "$" : ""}
            {food.price}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/55">
          {food.description}
        </p>

        {/* Reserve Link */}
        <a
          href="#reservation"
          className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-extrabold uppercase tracking-widest text-white/70 transition-colors duration-300 hover:text-[#FF7A30]"
        >
          <span>Reserve Your Table</span>
          <span
            aria-hidden="true"
            className="text-lg text-[#FF7A30] transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export default MenuCard;
