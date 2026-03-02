import { MapPin } from "lucide-react";
import { motion } from "motion/react";

import exteriorNight from "/assets/uploads/unnamed-1--2.jpg";
// Import all images as ES modules so Vite bundles them correctly
import interiorDining from "/assets/uploads/unnamed-3--3.jpg";
import barPhoto from "/assets/uploads/unnamed-4--6.jpg";
import entranceNight from "/assets/uploads/unnamed-5--9.jpg";

const stats = [
  { val: "100+", label: "Menu Items" },
  { val: "5★", label: "Fine Dining" },
  { val: "2016", label: "Established" },
  { val: "Churchgate", label: "Location" },
];

const philosophyPoints = [
  {
    title: "Slow-Cooked Mastery",
    desc: "Every preparation begins hours before service. Our Nalli Nihari simmers for eight hours; our Dal Nksha deepens overnight. Time is the most precious spice.",
  },
  {
    title: "Handpicked Spice Craft",
    desc: "We source our spices directly from farms in Rajasthan, Kerala, and Kashmir. Potli masalas are ground in-house each morning, never pre-packaged.",
  },
  {
    title: "Generational Wisdom",
    desc: "Our recipes honor regional traditions — from the Lucknawi dum technique to the Chandni Chowk chaat culture — while adding a contemporary Nksha touch.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[460px] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${interiorDining})` }}
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.020_155)] via-[oklch(0.07_0.020_155/0.55)] to-[oklch(0.07_0.020_155/0.25)]" />
        <div className="absolute inset-0 bg-[oklch(0.06_0.018_155/0.30)]" />

        <div className="relative z-10 text-center px-4 pb-16 sm:pb-20 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-5"
          >
            ✦ Our Heritage ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic tracking-display text-[oklch(0.97_0.012_85)] leading-[0.92] mb-6"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="font-body text-sm sm:text-base text-[oklch(0.72_0.018_85)] tracking-wide"
          >
            Redefining the Indian Culinary Experience since 2016
          </motion.p>
        </div>

        {/* Gold bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
      </section>

      {/* ── THE VISION ───────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 order-2 lg:order-1"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
                ✦ The Vision
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] leading-[1.05]"
                style={{ fontVariationSettings: '"opsz" 72' }}
              >
                Where Tradition Meets{" "}
                <span className="text-gradient-gold not-italic font-semibold">
                  Elevation
                </span>
              </h2>
              <div className="divider-gold-short" />
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                At Nksha, we believe Indian cuisine deserves to be experienced
                at its very finest. Nestled in the heart of Churchgate, Mumbai —
                one of the city's most storied neighbourhoods — our kitchen is
                dedicated to elevating India's rich culinary heritage, honoring
                traditional recipes while crafting bold, contemporary
                expressions.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                From the first bite to the last sip, every detail at Nksha is
                intentional — the ingredients sourced with care, the plating
                considered like art, the ambiance curated to transport. We are
                not merely a restaurant; we are an experience, a celebration, a
                living testament to the grandeur of Indian food culture.
              </p>
            </motion.div>

            {/* Right — image with decorative frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative order-1 lg:order-2"
            >
              {/* Offset gold frame behind image */}
              <div className="absolute -bottom-5 -right-5 w-4/5 h-4/5 border border-[oklch(0.72_0.130_85/0.35)] rounded-sm pointer-events-none z-0" />
              <div className="absolute -bottom-3 -right-3 w-4/5 h-4/5 border border-[oklch(0.72_0.130_85/0.15)] rounded-sm pointer-events-none z-0" />

              <div className="relative overflow-hidden rounded-sm z-10 shadow-card-dark">
                <img
                  src={interiorDining}
                  alt="Nksha Restaurant Interior — elegant dining room"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                {/* Subtle gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[oklch(0.72_0.130_85)] rounded-tl-sm" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[oklch(0.72_0.130_85)] rounded-tr-sm" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[oklch(0.72_0.130_85)] rounded-bl-sm" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[oklch(0.72_0.130_85)] rounded-br-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.06_0.018_155)] border-y border-[oklch(0.20_0.040_155)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:divide-x sm:divide-[oklch(0.20_0.040_155)]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center sm:px-8"
              >
                <p
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gradient-gold mb-2"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  {s.val}
                </p>
                <p className="font-body text-xs text-[oklch(0.55_0.018_85)] tracking-[0.25em] uppercase">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ─────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.11_0.030_155)] py-20 sm:py-28 relative overflow-hidden">
        {/* Radial gold glow */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.72_0.130_85),transparent)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Top ornament */}
            <div className="flex items-center justify-center gap-4">
              <div className="divider-gold flex-1" />
              <span className="text-[oklch(0.72_0.130_85)] text-lg">✦</span>
              <div className="divider-gold flex-1" />
            </div>

            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
              Our Philosophy
            </p>

            <blockquote
              className="font-display text-2xl sm:text-3xl md:text-4xl font-light italic text-[oklch(0.88_0.018_85)] leading-[1.35]"
              style={{ fontVariationSettings: '"opsz" 48' }}
            >
              "Every dish at Nksha tells a story — of slow cooking, handpicked
              spices, and generations of culinary wisdom. From our signature Dal
              Nksha to the Galouti Kebab, every plate is a celebration."
            </blockquote>

            {/* Bottom ornament */}
            <div className="flex items-center justify-center gap-4">
              <div className="divider-gold flex-1" />
              <span className="text-[oklch(0.72_0.130_85)] text-lg">✦</span>
              <div className="divider-gold flex-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY PILLARS ───────────────────────────────────────── */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4">
              ✦ Our Craft ✦
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              The Nksha Difference
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {philosophyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative p-7 bg-[oklch(0.12_0.030_155)] border border-[oklch(0.22_0.045_155)] rounded-sm group hover:border-[oklch(0.72_0.130_85/0.35)] transition-colors duration-300"
              >
                {/* Gold number */}
                <span className="absolute -top-4 left-6 font-display text-5xl font-bold text-[oklch(0.72_0.130_85/0.15)] leading-none select-none">
                  0{i + 1}
                </span>
                <div className="divider-gold-short mb-5" />
                <h3
                  className="font-display text-xl font-light italic tracking-display text-[oklch(0.90_0.015_85)] mb-3"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {p.title}
                </h3>
                <p className="font-body text-sm text-[oklch(0.65_0.018_85)] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SPACE ────────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.07_0.020_155)] py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Left — artistic offset duo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              {/* Gold frame accent behind */}
              <div className="absolute -top-4 -left-4 w-3/5 h-3/5 border border-[oklch(0.72_0.130_85/0.25)] rounded-sm pointer-events-none" />

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Bar image — taller */}
                <div className="overflow-hidden rounded-sm shadow-card-dark">
                  <img
                    src={barPhoto}
                    alt="Nksha Bar — arched bottle displays"
                    className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Entrance image — offset downward */}
                <div className="overflow-hidden rounded-sm shadow-card-dark mt-8 sm:mt-12">
                  <img
                    src={entranceNight}
                    alt="Nksha Restaurant entrance at night"
                    className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Gold border accent at bottom-right */}
              <div className="absolute -bottom-3 -right-3 w-2/5 h-2/5 border border-[oklch(0.72_0.130_85/0.20)] rounded-sm pointer-events-none" />
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
                ✦ The Space
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] leading-[1.05]"
                style={{ fontVariationSettings: '"opsz" 72' }}
              >
                An Atmosphere of{" "}
                <span className="text-gradient-gold not-italic font-semibold">
                  Refined Grandeur
                </span>
              </h2>
              <div className="divider-gold-short" />
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                Step into a world where Art Deco architecture meets the warmth
                of India. Our interiors feature deep emerald velvet banquettes,
                arched bar displays curated with rare spirits, and ambient gold
                candlelight that transforms each evening into something truly
                extraordinary.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                Every corner of Nksha tells a story of craftsmanship — from
                hand-selected artworks to the carefully arranged table settings
                that frame each meal like a composition. The bar is a
                destination in its own right, with an inspired cocktail program
                that weaves Indian botanicals into classic techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE KITCHEN ──────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.11_0.030_155)] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,oklch(0.72_0.130_85),transparent)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
              ✦ The Kitchen
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Passion Behind Every Plate
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
              Our culinary team brings together decades of experience from the
              finest kitchens across India and abroad. United by a shared
              passion for Indian food culture and an obsession with quality,
              they approach each day as a pursuit of perfection — in flavour, in
              presentation, and in the stories that each dish carries within it.
            </p>
            <p className="font-body text-sm text-[oklch(0.55_0.018_85)] italic">
              "We don't just cook — we preserve, we reinterpret, we celebrate."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE LOCATION ─────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
                ✦ Find Us
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] leading-[1.05]"
                style={{ fontVariationSettings: '"opsz" 72' }}
              >
                In the Heart of{" "}
                <span className="text-gradient-gold not-italic font-semibold">
                  Churchgate
                </span>
              </h2>
              <div className="divider-gold-short" />

              {/* Address card */}
              <div className="flex items-start gap-4 p-5 bg-[oklch(0.13_0.035_155)] border border-[oklch(0.72_0.130_85/0.25)] rounded-sm shadow-gold">
                <MapPin className="h-5 w-5 text-[oklch(0.72_0.130_85)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-base text-[oklch(0.85_0.015_85)] font-medium">
                    ADCB Rehman Manzil, 1A / 1B
                  </p>
                  <p className="font-body text-sm text-[oklch(0.65_0.018_85)] mt-1 leading-relaxed">
                    Veer Nariman Rd, Churchgate
                    <br />
                    Mumbai, Maharashtra 400020
                  </p>
                </div>
              </div>

              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                Located on the iconic Veer Nariman Road, Nksha is steps away
                from the heart of South Mumbai — accessible, yet offering the
                perfect escape into an evening of unrivalled culinary
                indulgence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)] font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[oklch(0.82_0.120_85)] transition-colors duration-200 shadow-gold"
                >
                  Book a Table
                </a>
                <a
                  href="https://maps.google.com/?q=Nksha+Restaurant+Churchgate+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[oklch(0.72_0.130_85/0.50)] text-[oklch(0.72_0.130_85)] font-body text-sm font-semibold tracking-widest uppercase rounded-sm hover:border-[oklch(0.72_0.130_85)] hover:bg-[oklch(0.72_0.130_85/0.08)] transition-all duration-200"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Right — exterior photo with badge */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative overflow-hidden rounded-sm shadow-card-dark"
            >
              <img
                src={exteriorNight}
                alt="Nksha Restaurant exterior at night — Churchgate Mumbai"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.020_155/0.65)] to-transparent" />

              {/* Location badge overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.07_0.020_155/0.88)] border border-[oklch(0.72_0.130_85/0.45)] text-[oklch(0.72_0.130_85)] font-body text-xs tracking-widest uppercase rounded-sm backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  Churchgate, Mumbai
                </span>
              </div>

              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[oklch(0.72_0.130_85/0.70)]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[oklch(0.72_0.130_85/0.70)]" />
              <div className="absolute bottom-[4.5rem] right-4 w-6 h-6 border-b-2 border-r-2 border-[oklch(0.72_0.130_85/0.70)]" />
              <div className="absolute bottom-[4.5rem] left-4 w-6 h-6 border-b-2 border-l-2 border-[oklch(0.72_0.130_85/0.70)]" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
