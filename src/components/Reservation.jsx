import { useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  message: "",
};

function Reservation() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only: this does not send or save a real reservation.
    console.log("Reservation request:", formData);
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      className="scroll-mt-24 bg-[#101C33] px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Your Table Awaits"
          title="MAKE IT"
          highlight="MEMORABLE."
          description="Plan your next dining experience at ÉLORA. Share your preferred date and time to prepare a reservation request."
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden bg-[#080F20] p-7 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF5A1F]/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A30]">
                An ÉLORA Experience
              </p>

              <h3 className="mt-6 text-3xl font-black uppercase leading-tight sm:text-4xl">
                GOOD FOOD.
                <br />
                <span className="text-[#FF5A1F]">GREAT COMPANY.</span>
                <br />
                UNFORGETTABLE
                <br />
                MOMENTS.
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/55">
                Whether you're planning a romantic evening, a family gathering,
                or a special celebration, we want your time at ÉLORA to feel
                exceptional.
              </p>
            </div>

            <div className="relative mt-12 space-y-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF7A30]">
                  Opening Hours
                </p>
                <p className="mt-3 text-sm text-white/75">Monday – Friday</p>
                <p className="mt-1 text-sm text-white/50">
                  12:00 PM – 10:00 PM
                </p>
                <p className="mt-3 text-sm text-white/75">Saturday – Sunday</p>
                <p className="mt-1 text-sm text-white/50">
                  12:00 PM – 11:00 PM
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-white transition-colors hover:text-[#FF7A30]"
              >
                Contact Our Team
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-[#080F20] p-6 sm:p-9 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF7A30]">
                Reservation Request
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">
                Book Your Table
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Fill in your details to prepare your request.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 border border-[#FF7A30]/40 bg-[#FF5A1F]/10 p-4"
              >
                <p className="text-sm font-bold text-[#FF7A30]">
                  Demo request prepared!
                </p>
                <p className="mt-1 text-xs leading-5 text-white/65">
                  This is a front-end demonstration only. No reservation has
                  been sent or confirmed.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="reservation-name"
                    className="mb-2 block text-xs font-bold text-white/70"
                  >
                    Full Name *
                  </label>

                  <input
                    id="reservation-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    className="w-full border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#FF5A1F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reservation-email"
                    className="mb-2 block text-xs font-bold text-white/70"
                  >
                    Email Address *
                  </label>

                  <input
                    id="reservation-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#FF5A1F]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="reservation-phone"
                  className="mb-2 block text-xs font-bold text-white/70"
                >
                  Phone Number *
                </label>

                <input
                  id="reservation-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                  className="w-full border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#FF5A1F]"
                />
              </div>

              {/* Date & Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="reservation-date"
                    className="mb-2 block text-xs font-bold text-white/70"
                  >
                    Reservation Date *
                  </label>

                  <input
                    id="reservation-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                    className="w-full border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#FF5A1F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reservation-time"
                    className="mb-2 block text-xs font-bold text-white/70"
                  >
                    Preferred Time *
                  </label>

                  <select
                    id="reservation-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#FF5A1F]"
                  >
                    <option value="">Select a time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="reservation-guests"
                  className="mb-2 block text-xs font-bold text-white/70"
                >
                  Number of Guests *
                </label>

                <select
                  id="reservation-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#FF5A1F]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9+">9+ Guests</option>
                </select>
              </div>

              {/* Special Request */}
              <div>
                <label
                  htmlFor="reservation-message"
                  className="mb-2 block text-xs font-bold text-white/70"
                >
                  Special Requests (Optional)
                </label>

                <textarea
                  id="reservation-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Birthday, anniversary, seating preference..."
                  className="w-full resize-y border border-white/10 bg-[#101C33] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#FF5A1F]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#FF5A1F] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#FF7A30]"
              >
                Prepare Reservation Request
                <span aria-hidden="true">↗</span>
              </button>

              <p className="text-center text-[11px] leading-5 text-white/35">
                Demo form only. Submitting does not send or confirm a booking.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
