import { SITE_CONFIG } from "@/config/site-config";

export default function PropertyIntro() {
  const handleAccommodations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const roomsSection = document.querySelector("#rooms");
    if (roomsSection) {
      const headerHeight = 72;
      const targetPos =
        roomsSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <section className="intro" aria-label="About the property">
      <div className="intro__grid">
        <div className="intro__image-wrapper reveal">
          <img
            src="images/exterior-entrance.jpg"
            alt="Reddy's Nilaya — Grand Entrance of Nandini Luxury PG Co-Living"
            loading="lazy"
            decoding="async"
          />
          <div className="intro__image-accent" aria-hidden="true"></div>
        </div>

        <div className="intro__content">
          <p className="text-meta intro__meta reveal">
            Welcome to {SITE_CONFIG.brand.buildingName}
          </p>
          <h2 className="heading-section intro__heading reveal reveal-delay-1">
            <span className="intro__heading-line">A Refined Standard of</span>
            <span className="intro__heading-line">Modern Co-Living</span>
          </h2>
          <span className="divider reveal reveal-delay-2"></span>
          <p
            className="text-body intro__text reveal reveal-delay-2"
            style={{ marginTop: "24px" }}
          >
            {SITE_CONFIG.brand.description}
          </p>
          <a
            href="#rooms"
            onClick={handleAccommodations}
            className="btn-text reveal reveal-delay-3"
          >
            Discover Accommodations <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
