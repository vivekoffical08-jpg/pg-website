import { SITE_CONFIG } from "@/config/site-config";

export default function Hero() {
  const handleExploreRooms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const roomsSection = document.querySelector("#rooms");
    if (roomsSection) {
      const headerHeight = 72;
      const targetPos =
        roomsSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  const handleEnquire = () => {
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      SITE_CONFIG.contact.whatsappDefaultText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="hero" id="home" aria-label="Welcome to Nandini Luxury Co-Living">
      <div className="hero__bg">
        <img
          className="hero__bg-image"
          src="images/terrace-sunset.jpg"
          alt="Panoramic rooftop sunset view at Nandini Luxury Co-Living, Doddakannelli"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <p className="hero__location">
          {SITE_CONFIG.location.area} <span className="hero__location-dot"></span> {SITE_CONFIG.location.city}
        </p>

        <h1 className="hero__title">
          <span className="hero__title-line">{SITE_CONFIG.brand.shortName}</span>
          <span className="hero__title-line hero__title-line--accent">Luxury Co-Living</span>
        </h1>

        <p className="hero__subtitle">{SITE_CONFIG.brand.tagline}</p>

        <div className="hero__divider"></div>

        <div className="hero__actions">
          <a href="#rooms" onClick={handleExploreRooms} className="btn btn-light">
            Explore Rooms <span className="btn-arrow">→</span>
          </a>
          <button className="btn btn-ghost" onClick={handleEnquire}>
            Enquire Now <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    </section>
  );
}
