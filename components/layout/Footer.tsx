import { SITE_CONFIG } from "@/config/site-config";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = 72;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleEnquire = () => {
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      SITE_CONFIG.contact.whatsappDefaultText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleMaps = () => {
    window.open(SITE_CONFIG.location.googleMapsUrl, "_blank");
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer__grid">
        <div>
          <p className="footer__brand-name">
            {SITE_CONFIG.brand.shortName}{" "}
            <span>Luxury Co-Living</span>
          </p>
          <address className="footer__address not-italic">
            {SITE_CONFIG.location.displayAddress.map((line, idx) => (
              <span
                key={idx}
                className="footer__address-line"
                style={idx === 0 ? { color: "var(--ivory)", fontWeight: 500 } : undefined}
              >
                {line}
              </span>
            ))}
            <span
              className="footer__address-line"
              style={{ marginTop: "8px", display: "block", color: "var(--bronze-light)" }}
            >
              {SITE_CONFIG.contact.phoneFormatted} &bull; {SITE_CONFIG.contact.phone2Formatted}
            </span>
            {SITE_CONFIG.social?.instagram && (
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                style={{
                  marginTop: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--bronze-light)",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                aria-label="Follow Nandini Luxury Co-Living on Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>{SITE_CONFIG.social.instagramHandle}</span>
              </a>
            )}
          </address>
        </div>

        <div>
          <p className="footer__nav-title">Navigate</p>
          <ul className="footer__nav-list">
            <li>
              <a
                href="#rooms"
                onClick={(e) => handleNavClick(e, "#rooms")}
                className="footer__nav-link"
              >
                Rooms & Pricing
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "#experience")}
                className="footer__nav-link"
              >
                Living Experience
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, "#gallery")}
                className="footer__nav-link"
              >
                Visual Tour
              </a>
            </li>
            <li>
              <a
                href="#location"
                onClick={(e) => handleNavClick(e, "#location")}
                className="footer__nav-link"
              >
                Location & Map
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__nav-title">Enquiries</p>
          <ul className="footer__nav-list">
            <li>
              <button
                className="footer__nav-link"
                onClick={handleEnquire}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                Enquire for Availability
              </button>
            </li>
            <li>
              <button
                className="footer__nav-link"
                onClick={handleMaps}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                Open in Google Maps
              </button>
            </li>
            <li>
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="footer__nav-link"
              >
                Direct Call: {SITE_CONFIG.contact.phoneFormatted}
              </a>
            </li>
            {SITE_CONFIG.social?.instagram && (
              <li>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__nav-link"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  Follow on Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.brand.name}. All rights reserved.</p>
        <p>Doddakannelli, Bengaluru</p>
      </div>
    </footer>
  );
}
