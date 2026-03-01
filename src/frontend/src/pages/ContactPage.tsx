import { Clock, Loader2, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import WhatsAppBookingForm from "../components/WhatsAppBookingForm";
import { useActor } from "../hooks/useActor";

const openingHours = [
  { day: "Monday", hours: "12:30 PM – 11:30 PM" },
  {
    day: "Tuesday",
    hours: "12:30 PM – 11:30 PM",
    note: "*Hours may differ (Rangwali Holi)",
  },
  { day: "Wednesday", hours: "12:30 PM – 11:30 PM" },
  { day: "Thursday", hours: "12:30 PM – 11:30 PM" },
  { day: "Friday", hours: "12:30 PM – 11:30 PM" },
  { day: "Saturday", hours: "12:30 PM – 11:30 PM" },
  { day: "Sunday", hours: "12:30 PM – 11:30 PM" },
];

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitContactInquiry(form.name, form.email, form.message);
      }
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-[oklch(0.09_0.025_155)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url(/assets/uploads/unnamed-11--8.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0.020_155/0.70)] to-[oklch(0.09_0.025_155)]" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4"
          >
            ✦ Churchgate, Mumbai ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light italic tracking-display text-[oklch(0.97_0.012_85)] leading-[0.95]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Find Us
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
      </section>

      {/* TWO-COLUMN CONTACT */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-3">
                  ✦ Contact ✦
                </p>
                <h2
                  className="font-display text-4xl sm:text-5xl font-light italic tracking-display text-[oklch(0.95_0.015_85)] leading-[1.05]"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  Get In Touch
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[oklch(0.13_0.040_155)] border border-[oklch(0.72_0.130_85/0.30)] rounded-sm flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[oklch(0.72_0.130_85)]" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[oklch(0.85_0.015_85)] mb-1 tracking-wide uppercase">
                    Address
                  </p>
                  <p className="font-body text-sm text-[oklch(0.65_0.020_85)] leading-relaxed">
                    ADCB Rehman Manzil, 1A / 1B
                    <br />
                    Veer Nariman Rd, Churchgate
                    <br />
                    Mumbai, Maharashtra 400020
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[oklch(0.13_0.040_155)] border border-[oklch(0.72_0.130_85/0.30)] rounded-sm flex-shrink-0">
                  <Phone className="h-4 w-4 text-[oklch(0.72_0.130_85)]" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[oklch(0.85_0.015_85)] mb-1 tracking-wide uppercase">
                    Phone & WhatsApp
                  </p>
                  <a
                    href="tel:+919820475555"
                    className="font-body text-sm text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.72_0.130_85)] transition-colors"
                  >
                    +91 98204 75555
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[oklch(0.13_0.040_155)] border border-[oklch(0.72_0.130_85/0.30)] rounded-sm flex-shrink-0">
                  <SiInstagram className="h-4 w-4 text-[oklch(0.72_0.130_85)]" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[oklch(0.85_0.015_85)] mb-1 tracking-wide uppercase">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/nksharestaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.72_0.130_85)] transition-colors"
                  >
                    @nksharestaurant
                  </a>
                </div>
              </div>

              {/* WhatsApp quick link */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[oklch(0.13_0.040_155)] border border-[oklch(0.72_0.130_85/0.30)] rounded-sm flex-shrink-0">
                  <SiWhatsapp className="h-4 w-4 text-[oklch(0.60_0.18_145)]" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[oklch(0.85_0.015_85)] mb-1 tracking-wide uppercase">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919820475555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.60_0.18_145)] transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[oklch(0.13_0.040_155)] border border-[oklch(0.72_0.130_85/0.30)] rounded-sm flex-shrink-0">
                    <Clock className="h-4 w-4 text-[oklch(0.72_0.130_85)]" />
                  </div>
                  <p className="font-body text-sm font-semibold text-[oklch(0.85_0.015_85)] tracking-wide uppercase">
                    Opening Hours
                  </p>
                </div>
                <div className="bg-[oklch(0.11_0.030_155)] border border-[oklch(0.22_0.038_155)] rounded-sm overflow-hidden">
                  {openingHours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex items-start justify-between gap-4 px-4 py-3 ${
                        i < openingHours.length - 1
                          ? "border-b border-[oklch(0.18_0.033_155)]"
                          : ""
                      }`}
                    >
                      <div>
                        <span className="font-body text-sm text-[oklch(0.75_0.020_85)]">
                          {h.day}
                        </span>
                        {h.note && (
                          <p className="font-body text-xs text-[oklch(0.50_0.015_85)] italic mt-0.5">
                            {h.note}
                          </p>
                        )}
                      </div>
                      <span className="font-body text-sm font-medium text-[oklch(0.72_0.130_85)] text-right">
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Forms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* WhatsApp Booking */}
              <div
                id="booking"
                className="bg-[oklch(0.11_0.030_155)] border border-[oklch(0.72_0.130_85/0.35)] rounded-sm p-6 sm:p-8 shadow-gold-glow"
              >
                <h3
                  className="font-display text-2xl sm:text-3xl font-light italic tracking-display text-[oklch(0.92_0.015_85)] mb-2"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  Reserve Your Table
                </h3>
                <p className="font-body text-sm text-[oklch(0.58_0.018_85)] mb-6">
                  Book instantly via WhatsApp
                </p>
                <WhatsAppBookingForm idPrefix="contact-booking" />
              </div>

              {/* General Inquiry */}
              <div className="bg-[oklch(0.11_0.030_155)] border border-[oklch(0.25_0.040_155)] rounded-sm p-6 sm:p-8">
                <h3
                  className="font-display text-2xl sm:text-3xl font-light italic tracking-display text-[oklch(0.92_0.015_85)] mb-2"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  General Inquiry
                </h3>
                <p className="font-body text-sm text-[oklch(0.58_0.018_85)] mb-6">
                  For events, corporate bookings, or other queries
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiry-name"
                      className="font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
                    >
                      Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] placeholder:text-[oklch(0.45_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiry-email"
                      className="font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
                    >
                      Email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] placeholder:text-[oklch(0.45_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiry-message"
                      className="font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="inquiry-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell us about your inquiry..."
                      rows={4}
                      className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] placeholder:text-[oklch(0.45_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[oklch(0.72_0.130_85)] text-[oklch(0.10_0.025_155)] font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[oklch(0.82_0.120_85)] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-[oklch(0.09_0.025_155)]">
        <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9839853609894!2d72.82310581543455!3d18.933863087216545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c3c3c6f01b%3A0x5c8e4e2b3a7d6f4e!2sVeer%20Nariman%20Rd%2C%20Churchgate%2C%20Mumbai%2C%20Maharashtra%20400020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{
              border: 0,
              display: "block",
              filter:
                "invert(90%) hue-rotate(160deg) contrast(0.85) brightness(0.9)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nksha Restaurant Location"
          />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
      </section>
    </div>
  );
}
