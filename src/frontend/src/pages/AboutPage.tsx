import { Link } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/uploads/unnamed-3--3.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0.020_155/0.70)] to-[oklch(0.07_0.020_155/0.80)]" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4"
          >
            ✦ Our Heritage ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light italic tracking-display text-[oklch(0.97_0.012_85)] leading-[0.95]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Our Story
          </motion.h1>
        </div>
        {/* Gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
      </section>

      {/* THE VISION */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
                The Vision
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
                at its finest. Nestled in the heart of Churchgate, Mumbai, our
                kitchen is dedicated to elevating India's rich culinary heritage
                — honoring traditional recipes while crafting bold, modern
                expressions.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                From the first bite to the last sip, every detail at Nksha is
                intentional — the ingredients, the plating, the ambiance, and
                the service. We are not merely a restaurant; we are an
                experience.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { val: "100+", label: "Menu Items" },
                  { val: "5★", label: "Dining" },
                  { val: "2016", label: "Est." },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-[oklch(0.72_0.130_85)]">
                      {s.val}
                    </p>
                    <p className="font-body text-xs text-[oklch(0.60_0.018_85)] tracking-widest uppercase mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="/assets/uploads/unnamed-3--3.jpg"
                  alt="Nksha Restaurant Interior"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              {/* Decorative gold frame */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[oklch(0.72_0.130_85/0.30)] rounded-sm pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE SPACE */}
      <section className="bg-[oklch(0.11_0.030_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/assets/uploads/unnamed-4--6.jpg"
                  alt="Nksha Bar"
                  className="w-full h-52 object-cover rounded-sm"
                />
                <img
                  src="/assets/uploads/unnamed-5--9.jpg"
                  alt="Nksha Entrance"
                  className="w-full h-52 object-cover rounded-sm mt-6"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-[oklch(0.72_0.130_85/0.25)] rounded-sm pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
                The Space
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
                of India. Our interiors feature emerald green velvet banquettes,
                arched bar displays with curated spirits, and ambient gold
                lighting that transforms each evening into something
                extraordinary.
              </p>
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                Designed to transport you, every corner of Nksha tells a story
                of craftsmanship — from hand-selected artworks to the carefully
                arranged table settings that frame each meal like a work of art.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="bg-[oklch(0.13_0.040_155)] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_50%_50%,oklch(0.72_0.130_85),transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
              Our Philosophy
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Every Dish Tells a Story
            </h2>
            <div className="divider-gold mx-auto" />
            <p
              className="font-display text-xl sm:text-2xl font-light italic text-[oklch(0.78_0.020_85)] leading-relaxed"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              "Every dish at Nksha tells a story — of slow cooking, handpicked
              spices, and generations of culinary wisdom. From our signature Dal
              Nksha to the Galouti Kebab, every plate is a celebration."
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="h-5 w-5 fill-[oklch(0.72_0.130_85)] text-[oklch(0.72_0.130_85)]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE LOCATION */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)]">
                Find Us
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
              <div className="flex items-start gap-4 p-5 bg-[oklch(0.13_0.035_155)] border border-[oklch(0.72_0.130_85/0.25)] rounded-sm shadow-gold">
                <MapPin className="h-5 w-5 text-[oklch(0.72_0.130_85)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-base text-[oklch(0.85_0.015_85)] font-medium">
                    ADCB Rehman Manzil, 1A / 1B
                  </p>
                  <p className="font-body text-sm text-[oklch(0.65_0.018_85)] mt-1">
                    Veer Nariman Rd, Churchgate
                    <br />
                    Mumbai, Maharashtra 400020
                  </p>
                </div>
              </div>
              <p className="font-body text-base text-[oklch(0.70_0.018_85)] leading-relaxed">
                Located on the iconic Veer Nariman Road, Nksha is steps away
                from the bustling heart of South Mumbai — accessible, yet
                offering the perfect escape into an evening of culinary
                indulgence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)] font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[oklch(0.82_0.120_85)] transition-colors duration-200"
              >
                Get Directions
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-sm"
            >
              <img
                src="/assets/uploads/unnamed-1--2.jpg"
                alt="Nksha Restaurant Exterior Night"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.020_155/0.60)] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1.5 bg-[oklch(0.07_0.020_155/0.85)] border border-[oklch(0.72_0.130_85/0.40)] text-[oklch(0.72_0.130_85)] font-body text-xs tracking-widest uppercase rounded-sm">
                  Churchgate, Mumbai
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
