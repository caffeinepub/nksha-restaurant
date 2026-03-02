import { Link } from "@tanstack/react-router";
import { ChevronDown, Fish, Flame, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { SiInstagram } from "react-icons/si";
import WhatsAppBookingForm from "../components/WhatsAppBookingForm";

// Import images as ES modules so Vite bundles them correctly
import heroImage from "/assets/generated/hero-banner.dim_1600x900.jpg";
import barPhoto from "/assets/uploads/unnamed-4--6.jpg";
import chutneyPhoto from "/assets/uploads/unnamed-6--1.jpg";
import dahiBhalla from "/assets/uploads/unnamed-7--11.jpg";
import dumBiryani from "/assets/uploads/unnamed-9--13.jpg";
import seekhKebab from "/assets/uploads/unnamed-13--10.jpg";
import soupPhoto from "/assets/uploads/unnamed-14--5.jpg";

const signatureDishes = [
  {
    image: seekhKebab,
    name: "Seekh Kebab",
    tagline: "Skewered perfection, slow smoked over coals",
    label: "Signature",
  },
  {
    image: dumBiryani,
    name: "Dum Biryani",
    tagline: "Basmati rice dum-sealed with royal spices",
    label: "Chef's Choice",
  },
  {
    image: dahiBhalla,
    name: "Dahi Bhalla Chaat",
    tagline: "Chandni Chowk-inspired, elevated for Nksha",
    label: "Crowd Favourite",
  },
];

const features = [
  {
    icon: <Flame className="h-6 w-6" />,
    title: "Slow-Cooked Specialties",
    desc: "Hours of patient cooking unlock deep, complex flavours",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Premium Ingredients",
    desc: "Hand-selected spices, fresh produce and artisan produce",
  },
  {
    icon: <Fish className="h-6 w-6" />,
    title: "Intimate Ambiance",
    desc: "A curated space designed for memorable evenings",
  },
];

const instagramPhotos = [barPhoto, soupPhoto, chutneyPhoto];

export default function HomePage() {
  const bookingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === "#booking") {
      bookingRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.020_155/0.75)] via-[oklch(0.07_0.020_155/0.60)] to-[oklch(0.07_0.020_155/0.85)]" />
        <div className="absolute inset-0 bg-[oklch(0.08_0.025_155/0.40)]" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-6"
          >
            ✦ Churchgate, Mumbai ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light italic tracking-display text-[oklch(0.97_0.012_85)] leading-[0.95] mb-8"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Redefining the
            <br />
            <span className="text-gradient-gold not-italic font-semibold">
              Indian Culinary
            </span>
            <br />
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-base sm:text-lg text-[oklch(0.75_0.015_85)] mb-10 max-w-xl mx-auto leading-relaxed"
          >
            An elevated journey through the flavors of India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() =>
                bookingRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)] font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[oklch(0.82_0.120_85)] transition-colors duration-200 shadow-gold"
            >
              Book a Table
            </button>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 border border-[oklch(0.97_0.012_85/0.5)] text-[oklch(0.97_0.012_85)] font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:border-[oklch(0.72_0.130_85)] hover:text-[oklch(0.72_0.130_85)] transition-colors duration-200"
            >
              Explore Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-6 w-6 text-[oklch(0.72_0.130_85)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-[oklch(0.12_0.032_155)] border-y border-[oklch(0.25_0.040_155/0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x sm:divide-[oklch(0.25_0.040_155)]">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center gap-4 sm:px-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[oklch(0.72_0.130_85/0.40)] bg-[oklch(0.72_0.130_85/0.08)] text-[oklch(0.72_0.130_85)]">
                  {f.icon}
                </div>
                <div className="space-y-1.5">
                  <h3
                    className="font-display text-xl font-light italic tracking-display text-[oklch(0.92_0.015_85)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-[oklch(0.60_0.018_85)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4">
              ✦ Our Signatures ✦
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] mb-6"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Dishes That Define Us
            </h2>
            <div className="divider-gold mb-2" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {signatureDishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.020_155/0.90)] via-[oklch(0.07_0.020_155/0.30)] to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[oklch(0.72_0.130_85/0.20)] border border-[oklch(0.72_0.130_85/0.40)] text-[oklch(0.72_0.130_85)] font-body text-xs tracking-widest uppercase rounded-sm mb-3">
                    {dish.label}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.97_0.012_85)] mb-2">
                    {dish.name}
                  </h3>
                  <p className="font-body text-sm text-[oklch(0.72_0.020_85)] leading-relaxed">
                    {dish.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[oklch(0.72_0.130_85)] text-[oklch(0.72_0.130_85)] font-body text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-[oklch(0.72_0.130_85)] hover:text-[oklch(0.10_0.025_155)] transition-all duration-200"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section
        ref={bookingRef as React.RefObject<HTMLElement>}
        id="booking"
        className="bg-[oklch(0.13_0.040_155)] py-16 sm:py-24 relative overflow-hidden"
      >
        {/* Background accent */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_50%_50%,oklch(0.72_0.130_85),transparent_70%)]" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4">
              ✦ Reservations ✦
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] mb-5"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Reserve Your Table
            </h2>
            <div className="divider-gold mb-4" />
            <p className="font-body text-sm text-[oklch(0.60_0.018_85)]">
              Book your experience at Nksha. We look forward to welcoming you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[oklch(0.10_0.025_155)] border border-[oklch(0.72_0.130_85/0.35)] rounded-sm p-6 sm:p-8 shadow-gold-glow"
          >
            <WhatsAppBookingForm />
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM TEASER */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4">
              ✦ Follow Along ✦
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] mb-3"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              @nksharestaurant
            </h2>
            <a
              href="https://www.instagram.com/nksharestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-[oklch(0.72_0.130_85)] hover:underline"
            >
              <SiInstagram className="h-4 w-4" />
              Follow us on Instagram
            </a>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {instagramPhotos.map((photo, i) => (
              <motion.a
                key={photo}
                href="https://www.instagram.com/nksharestaurant"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm aspect-square"
              >
                <img
                  src={photo}
                  alt="Nksha Restaurant"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[oklch(0.07_0.020_155/0)] group-hover:bg-[oklch(0.07_0.020_155/0.50)] transition-colors duration-300 flex items-center justify-center">
                  <SiInstagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
