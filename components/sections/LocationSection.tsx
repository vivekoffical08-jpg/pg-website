import { SITE_CONFIG } from "@/config/site-config";

export default function LocationSection() {
  const handleOpenMaps = () => {
    window.open(SITE_CONFIG.location.googleMapsUrl, "_blank");
  };

  return (
    <section className="location" id="location" aria-label="Property location and directions">
      <div className="location__grid">
        <div>
          <p className="text-meta reveal">Location</p>
          <h2 className="heading-section location__heading reveal reveal-delay-1" style={{ marginTop: "12px" }}>
            <span className="location__heading-line">Well Connected</span>
            <span className="location__heading-line">to Bengaluru</span>
          </h2>

          <address className="location__address reveal reveal-delay-2 not-italic">
            {SITE_CONFIG.location.displayAddress.map((line, idx) => (
              <span
                key={idx}
                className="location__address-line"
                style={idx === 0 ? { fontWeight: 600, color: "var(--charcoal)" } : undefined}
              >
                {line}
              </span>
            ))}
          </address>

          <div
            className="reveal reveal-delay-2"
            style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0" }}
            aria-label="Location connectivity highlights"
          >
            <span className="room-card__feature-pill">📍 AET Junction Circle</span>
            <span className="room-card__feature-pill">🏢 Sarjapur - Bellandur Corridor</span>
            <span className="room-card__feature-pill">🛍️ Janatha Colony Market</span>
          </div>

          <div
            className="location__contacts reveal reveal-delay-3"
            style={{ margin: "18px 0 24px", display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--charcoal)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {SITE_CONFIG.contact.phoneFormatted}
            </a>

            <a
              href={`tel:${SITE_CONFIG.contact.phone2}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--charcoal)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {SITE_CONFIG.contact.phone2Formatted}
            </a>

            {SITE_CONFIG.social?.instagram && (
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                  textDecoration: "none",
                }}
                aria-label="Instagram profile for Nandini Luxury Co-Living"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Instagram: {SITE_CONFIG.social.instagramHandle}
              </a>
            )}
          </div>

          <button
            className="btn btn-primary reveal reveal-delay-3"
            onClick={handleOpenMaps}
            aria-label="Open location in Google Maps"
          >
            Open in Google Maps <span className="btn-arrow">→</span>
          </button>
        </div>

        <div className="location__map-wrapper reveal reveal-delay-1">
          <iframe
            title={`${SITE_CONFIG.brand.name} location map`}
            src={SITE_CONFIG.location.googleMapsEmbed}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
