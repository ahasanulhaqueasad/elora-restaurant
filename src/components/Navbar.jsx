import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080F20]/90 text-white backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 flex-col"
          aria-label="ÉLORA home"
        >
          <span className="text-2xl font-black tracking-[0.18em] text-white transition-colors group-hover:text-[#FF7A30] sm:text-3xl">
            ÉLORA<span className="text-[#FF5A1F]">.</span>
          </span>

          <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-white/45 sm:text-[9px]">
            Fine Dining
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-[11px] font-bold uppercase tracking-wider text-white/65 transition-colors duration-300 hover:text-[#FF7A30]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#reservation"
          className="hidden items-center gap-3 bg-[#FF5A1F] px-5 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#FF7A30] xl:inline-flex"
        >
          Book a Table
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-[#FF5A1F] hover:text-[#FF7A30] xl:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-[2px] w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#080F20] xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 sm:px-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  onClick={closeMenu}
                  className="border-b border-white/[0.07] py-4 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-[#FF7A30]"
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#reservation"
                onClick={closeMenu}
                className="mt-5 flex items-center justify-center gap-3 bg-[#FF5A1F] px-5 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-[#FF7A30]"
              >
                Book a Table
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
