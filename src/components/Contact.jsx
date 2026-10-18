import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";

const contactInfo = [
  {
    id: 1,
    number: "01",
    icon: "⌖",
    title: "Visit Us",
    value: "123 Fine Dining Avenue",
    detail: "Your City, Your Country",
    href: null,
  },
  {
    id: 2,
    number: "02",
    icon: "✉",
    title: "Email Us",
    value: "hello@eloradining.com",
    detail: "We'd love to hear from you",
    href: "mailto:hello@eloradining.com",
  },
  {
    id: 3,
    number: "03",
    icon: "☎",
    title: "Call Us",
    value: "+1 (234) 567-890",
    detail: "For reservations and inquiries",
    href: "tel:+1234567890",
  },
];

const openingHours = [
  {
    day: "Monday – Friday",
    time: "12:00 PM – 10:00 PM",
  },
  {
    day: "Saturday – Sunday",
    time: "12:00 PM – 11:00 PM",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#080F20] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="We'd Love to Hear From You"
          title="GET IN"
          highlight="TOUCH."
          description="Planning a special evening or have a question? Our team is here to help make your ÉLORA experience memorable."
        />

        {/* Contact Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {contactInfo.map((item, index) => {
            const CardContent = (
              <>
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-2xl text-[#FF7A30] transition-colors duration-300 group-hover:bg-[#FF5A1F] group-hover:text-white">
                    {item.icon}
                  </span>

                  <span className="text-xs font-bold tracking-widest text-white/25">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-sm font-bold text-[#FF7A30]">
                  {item.value}
                </p>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  {item.detail}
                </p>

                {item.href && (
                  <span className="mt-5 inline-block text-xs font-extrabold uppercase tracking-widest text-white/60 transition-colors group-hover:text-[#FF7A30]">
                    Contact Us ↗
                  </span>
                )}
              </>
            );

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-white/10 bg-[#101C33] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/50 sm:p-8"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A30]"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div>{CardContent}</div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-8 border border-white/10 bg-[#101C33] p-7 sm:p-10 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF7A30]">
              Plan Your Visit
            </p>

            <h3 className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              OUR OPENING HOURS
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
              Find a time that works for you and join us for an exceptional
              dining experience.
            </p>
          </div>

          <div className="space-y-5">
            {openingHours.map((item) => (
              <div
                key={item.day}
                className="flex flex-col justify-between gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center"
              >
                <p className="text-sm font-bold text-white/75">{item.day}</p>
                <p className="text-sm font-bold text-[#FF7A30]">{item.time}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reservation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight">
              LET'S MAKE IT SPECIAL.
            </h3>

            <p className="mt-2 text-sm text-white/50">
              Your table and your next memorable moment await.
            </p>
          </div>

          <a
            href="#reservation"
            className="inline-flex shrink-0 items-center gap-3 bg-[#FF5A1F] px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#FF7A30]"
          >
            Reserve Your Table
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
