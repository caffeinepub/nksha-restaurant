import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[oklch(0.07_0.020_155)] border-t border-[oklch(0.25_0.040_155/0.5)]">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/nksha-logo-transparent.dim_400x400.png"
                alt="Nksha Restaurant"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-xl font-semibold text-[oklch(0.72_0.130_85)]">
                Nksha
              </span>
            </div>
            <p className="font-body text-sm text-[oklch(0.65_0.020_85)] leading-relaxed italic">
              Redefining the Indian Culinary Experience
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/nksharestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[oklch(0.30_0.060_155)] text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.72_0.130_85)] hover:border-[oklch(0.72_0.130_85)] transition-all duration-200"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919820475555"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[oklch(0.30_0.060_155)] text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.60_0.18_145)] hover:border-[oklch(0.60_0.18_145)] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Menu", to: "/menu" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.72_0.130_85)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]">
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[oklch(0.72_0.130_85)] mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-[oklch(0.65_0.020_85)] leading-relaxed">
                  ADCB Rehman Manzil, 1A / 1B
                  <br />
                  Veer Nariman Rd, Churchgate
                  <br />
                  Mumbai, Maharashtra 400020
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[oklch(0.72_0.130_85)] flex-shrink-0" />
                <a
                  href="tel:+919820475555"
                  className="font-body text-sm text-[oklch(0.65_0.020_85)] hover:text-[oklch(0.72_0.130_85)] transition-colors"
                >
                  +91 98204 75555
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-5">
            <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]">
              Hours
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-[oklch(0.72_0.130_85)] mt-0.5 flex-shrink-0" />
              <div className="space-y-1.5">
                <p className="font-body text-sm text-[oklch(0.65_0.020_85)]">
                  Monday – Sunday
                </p>
                <p className="font-body text-sm font-medium text-[oklch(0.80_0.020_85)]">
                  12:30 PM – 11:30 PM
                </p>
                <p className="font-body text-xs text-[oklch(0.55_0.020_85)] italic">
                  *Hours may vary on special occasions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[oklch(0.20_0.030_155)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[oklch(0.45_0.015_85)] text-center sm:text-left">
            © {year} Nksha Restaurant. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.45_0.015_85)]">
            Built with ♥ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.72_0.130_85)] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
