import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isTransparent = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[oklch(0.10_0.025_155/0.96)] backdrop-blur-sm border-b border-[oklch(0.25_0.040_155)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/assets/generated/nksha-logo-transparent.dim_400x400.png"
              alt="Nksha Restaurant"
              className="h-9 sm:h-11 w-auto object-contain"
            />
            <span
              className="font-display text-xl sm:text-2xl font-light italic tracking-display text-[oklch(0.72_0.130_85)]"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              Nksha
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
                  currentPath === link.to
                    ? "text-[oklch(0.72_0.130_85)]"
                    : "text-[oklch(0.80_0.015_85)] hover:text-[oklch(0.72_0.130_85)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)] font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-[oklch(0.82_0.120_85)] transition-colors duration-200"
            >
              Book a Table
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-[oklch(0.80_0.015_85)] hover:text-[oklch(0.72_0.130_85)] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-[oklch(0.07_0.020_155/0.98)] backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.to}
                  className={`font-display text-3xl font-medium tracking-widest uppercase transition-colors ${
                    currentPath === link.to
                      ? "text-[oklch(0.72_0.130_85)]"
                      : "text-[oklch(0.90_0.015_85)] hover:text-[oklch(0.72_0.130_85)]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
            >
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)] font-body text-base font-semibold tracking-wider uppercase rounded-sm hover:bg-[oklch(0.82_0.120_85)] transition-colors"
              >
                Book a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
