import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

const galleryImages = [
  { src: "/assets/uploads/unnamed-6--1.jpg", alt: "Tableware and chutneys" },
  {
    src: "/assets/uploads/unnamed-1--2.jpg",
    alt: "Nksha Restaurant exterior at night",
  },
  {
    src: "/assets/uploads/unnamed-3--3.jpg",
    alt: "Elegant interior dining room",
  },
  { src: "/assets/uploads/unnamed-4.jpg", alt: "Restaurant exterior night" },
  {
    src: "/assets/uploads/unnamed-14--5.jpg",
    alt: "Soup plating with gold cutlery",
  },
  {
    src: "/assets/uploads/unnamed-4--6.jpg",
    alt: "Bar with arched bottle displays",
  },
  {
    src: "/assets/uploads/unnamed-2--7.jpg",
    alt: "Table chutneys and kebab setup",
  },
  {
    src: "/assets/uploads/unnamed-11--8.jpg",
    alt: "Exterior daytime pink facade",
  },
  { src: "/assets/uploads/unnamed-5--9.jpg", alt: "Exterior night with staff" },
  {
    src: "/assets/uploads/unnamed-13--10.jpg",
    alt: "Seekh kebab on copper tray with cocktails",
  },
  {
    src: "/assets/uploads/unnamed-7--11.jpg",
    alt: "Dahi bhalla chaat on thali",
  },
  {
    src: "/assets/uploads/unnamed-8--12.jpg",
    alt: "Nksha menu book with poori",
  },
  { src: "/assets/uploads/unnamed-9--13.jpg", alt: "Biryani thali closeup" },
  { src: "/assets/uploads/unnamed-12--14.jpg", alt: "Garlic naan in basket" },
  {
    src: "/assets/uploads/unnamed-10--15.jpg",
    alt: "Biryani with samosa plating",
  },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null,
    );
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : null,
    );
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeLightbox();
    },
    [prev, next, closeLightbox],
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-[oklch(0.09_0.025_155)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url(/assets/uploads/unnamed-13--10.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0.020_155/0.70)] to-[oklch(0.09_0.025_155)]" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.72_0.130_85)] mb-4"
          >
            ✦ Visual Journey ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light italic tracking-display text-[oklch(0.97_0.012_85)] leading-[0.95]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Gallery
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.130_85)] to-transparent" />
      </section>

      {/* MASONRY GALLERY */}
      <section className="bg-[oklch(0.09_0.025_155)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm text-[oklch(0.55_0.018_85)] tracking-widest uppercase">
              ✦ Click any image to view full size ✦
            </p>
          </motion.div>

          <div className="masonry-grid">
            {galleryImages.map((img, index) => (
              <motion.button
                key={img.src}
                type="button"
                className="masonry-item block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.130_85)] rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 4) * 0.05 }}
                onClick={() => openLightbox(index)}
              >
                <div className="group relative overflow-hidden rounded-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.07_0.020_155/0)] group-hover:bg-[oklch(0.07_0.020_155/0.40)] transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-body text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 border border-white/40 rounded-sm bg-black/20">
                      View
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.dialog
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[oklch(0.05_0.015_155/0.97)] flex items-center justify-center w-full h-full max-w-full max-h-full p-0 m-0 border-0"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            aria-label="Image lightbox"
            open
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[oklch(0.15_0.030_155)] border border-[oklch(0.25_0.040_155)] text-[oklch(0.80_0.015_85)] hover:text-[oklch(0.72_0.130_85)] hover:border-[oklch(0.72_0.130_85)] transition-all"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 z-10 p-3 rounded-full bg-[oklch(0.15_0.030_155)] border border-[oklch(0.25_0.040_155)] text-[oklch(0.80_0.015_85)] hover:text-[oklch(0.72_0.130_85)] hover:border-[oklch(0.72_0.130_85)] transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 z-10 p-3 rounded-full bg-[oklch(0.15_0.030_155)] border border-[oklch(0.25_0.040_155)] text-[oklch(0.80_0.015_85)] hover:text-[oklch(0.72_0.130_85)] hover:border-[oklch(0.72_0.130_85)] transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] mx-auto px-16 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
              />
              <p className="text-center font-body text-sm text-[oklch(0.60_0.020_85)] mt-4">
                {galleryImages[lightboxIndex].alt} — {lightboxIndex + 1} /{" "}
                {galleryImages.length}
              </p>
            </motion.div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
