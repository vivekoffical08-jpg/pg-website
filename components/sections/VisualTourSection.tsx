import { useState } from "react";
import { SITE_CONFIG, GalleryPhoto } from "@/config/site-config";
import SocialCards from "@/components/ui/card-fan-carousel";
import Lightbox from "@/components/ui/Lightbox";

export default function VisualTourSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % SITE_CONFIG.gallery.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        ((prev ?? 0) - 1 + SITE_CONFIG.gallery.length) % SITE_CONFIG.gallery.length
      );
    }
  };

  return (
    <section className="gallery" id="gallery" aria-label="Property visual tour and gallery">
      <div className="gallery__header">
        <p className="text-meta reveal">Visual Tour</p>
        <h2 className="heading-section reveal reveal-delay-1" style={{ marginTop: "12px" }}>
          A Closer Look
        </h2>
        <p className="text-body reveal reveal-delay-2" style={{ maxWidth: "560px", marginTop: "8px" }}>
          Explore authentic photographs of our accommodations, fitness studio, dining lounge, elevator, and rooftop vista.
        </p>
      </div>

      {/* 3D Card Fan Carousel (React + GSAP) — 100% Authentic Property Images */}
      <div className="reveal reveal-delay-2" style={{ marginTop: "24px", marginBottom: "40px", width: "100%" }}>
        <SocialCards cards={SITE_CONFIG.carouselCards} />
      </div>

      {/* Supporting Asymmetric Masonry Gallery with Lightbox Integration */}
      <div className="gallery__grid">
        {SITE_CONFIG.gallery.map((photo: GalleryPhoto, idx: number) => {
          const sizeClass = photo.size ? `gallery__item--${photo.size}` : "gallery__item--normal";
          const delayClass = idx % 2 === 1 ? "reveal-delay-1" : "";

          return (
            <div
              key={photo.id}
              className={`gallery__item ${sizeClass} reveal ${delayClass}`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
              aria-label={`View ${photo.title} in full screen`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery__caption-overlay">
                <span className="gallery__tag">{photo.category}</span>
                <p className="gallery__title">{photo.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* React Lightbox Modal */}
      <Lightbox
        photos={SITE_CONFIG.gallery}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
