import { motion } from "motion/react";

function SectionHeading({
  eyebrow = "Our Signature",
  title = "A TASTE OF",
  highlight = "EXCELLENCE.",
  description = "Discover thoughtfully crafted dishes made with fresh ingredients.",
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  eyebrowClassName = "",
  animate = true,
  delay = 0,
  id,
}) {
  const alignmentClasses = {
    left: "mr-auto text-left",
    center: "mx-auto text-center",
    right: "ml-auto text-right",
  };

  const selectedAlignment = alignmentClasses[align] ? align : "center";

  const alignment = alignmentClasses[selectedAlignment];

  const headingContent = (
    <>
      {/* Eyebrow Label */}
      {eyebrow && (
        <p
          className={`mb-4 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#FF7A30] sm:text-xs ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      )}

      {/* Main Heading */}
      <h2
        id={id}
        className={`text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl ${titleClassName}`}
      >
        {title && <span>{title}</span>}
        {title && highlight && " "}
        {highlight && <span className="text-[#FF5A1F]">{highlight}</span>}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 ${alignment} ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </>
  );

  if (!animate) {
    return (
      <div className={`w-full max-w-3xl ${alignment} ${className}`}>
        {headingContent}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
      className={`w-full max-w-3xl ${alignment} ${className}`}
    >
      {headingContent}
    </motion.div>
  );
}

export default SectionHeading;
