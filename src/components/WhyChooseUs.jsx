import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";

const features = [
  {
    id: 1,
    number: "01",
    icon: "✦",
    title: "Premium Ingredients",
    description:
      "We carefully select fresh, high-quality ingredients to bring exceptional flavor and quality to every plate.",
  },
  {
    id: 2,
    number: "02",
    icon: "♨",
    title: "Expert Chefs",
    description:
      "Our chefs combine culinary creativity, thoughtful preparation, and attention to detail in every dish.",
  },
  {
    id: 3,
    number: "03",
    icon: "♧",
    title: "Exceptional Service",
    description:
      "From your arrival to the final course, we aim to make every guest feel welcome and valued.",
  },
  {
    id: 4,
    number: "04",
    icon: "♡",
    title: "Memorable Moments",
    description:
      "Whether it is a romantic dinner or a family celebration, we create a setting for special occasions.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-[#101C33] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The ÉLORA Difference"
          title="MORE THAN"
          highlight="JUST DINING."
          description="We believe exceptional dining is about more than food. It is about quality, creativity, hospitality, and the moments you take home."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-white/10 bg-[#080F20] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A1F]/60 sm:p-8"
            >
              {/* Decorative Number */}
              <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-white/20">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-2xl text-[#FF7A30] transition-all duration-300 group-hover:bg-[#FF5A1F] group-hover:text-white">
                <span aria-hidden="true">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-lg font-black uppercase leading-snug tracking-tight text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-7 h-[2px] w-10 bg-[#FF5A1F] transition-all duration-300 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 border-l-2 border-[#FF5A1F] py-2 pl-6 sm:mt-20 sm:pl-10"
        >
          <p className="max-w-3xl text-xl font-bold leading-relaxed text-white sm:text-2xl lg:text-3xl">
            Great food brings people together.
            <span className="text-[#FF7A30]"> We make every moment count.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
