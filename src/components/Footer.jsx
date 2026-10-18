import { motion } from "motion/react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Our Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050A14] px-6 pb-8 pt-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a
              href="#home"
              aria-label="ÉLORA home"
              className="inline-block text-3xl font-black tracking-[0.18em] outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A30]"
            >
              ÉLORA<span className="text-[#FF5A1F]">.</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Where exceptional flavors meet timeless elegance. Discover
              thoughtfully crafted dishes and an unforgettable dining experience
              at ÉLORA.
            </p>

            <a
              href="#reservation"
              className="mt-7 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-[#FF7A30] transition-colors hover:text-white"
            >
              Reserve Your Table
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#FF7A30]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Follow ÉLORA
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Follow us for culinary inspiration, special moments, and updates
              from our kitchen.
            </p>

            <ul className="mt-5 space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#FF7A30]"
                  >
                    {social.name}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} ÉLORA Fine Dining. All rights reserved.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-colors hover:text-[#FF7A30]"
          >
            Back to Top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
