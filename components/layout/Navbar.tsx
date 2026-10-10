import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/config/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsMobileOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && mobileNavRef.current) {
        const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileOpen(false);
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
    setIsMobileOpen(false);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      SITE_CONFIG.contact.whatsappDefaultText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled ? "header--solid" : "header--transparent"}`}
        role="banner"
      >
        <div className="header__logo">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="Nandini Luxury Co-Living — Home"
          >
            Nandini <span className="header__logo-accent">Luxury Co-Living</span>
          </a>
        </div>

        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="header__nav-link"
          >
            Home
          </a>
          <a
            href="#rooms"
            onClick={(e) => handleNavClick(e, "#rooms")}
            className="header__nav-link"
          >
            Rooms
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, "#experience")}
            className="header__nav-link"
          >
            Experience
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, "#gallery")}
            className="header__nav-link"
          >
            Visual Tour
          </a>
          <a
            href="#location"
            onClick={(e) => handleNavClick(e, "#location")}
            className="header__nav-link"
          >
            Location
          </a>
          {SITE_CONFIG.social?.instagram && (
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="header__nav-link"
              style={{ display: "inline-flex", alignItems: "center", padding: "6px" }}
              aria-label="Follow Nandini Luxury Co-Living on Instagram"
              title="Instagram: @nandiniluxurycoliving"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          )}
          <button
            className="header__cta"
            onClick={handleEnquire}
            aria-label="Enquire about availability"
          >
            Enquire Now
          </button>
        </nav>

        <button
          ref={hamburgerRef}
          className={`header__hamburger ${isMobileOpen ? "active" : ""}`}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <nav
        ref={mobileNavRef}
        className={`mobile-nav ${isMobileOpen ? "open" : ""}`}
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="mobile-nav__link"
        >
          Home
        </a>
        <a
          href="#rooms"
          onClick={(e) => handleNavClick(e, "#rooms")}
          className="mobile-nav__link"
        >
          Rooms
        </a>
        <a
          href="#experience"
          onClick={(e) => handleNavClick(e, "#experience")}
          className="mobile-nav__link"
        >
          Experience
        </a>
        <a
          href="#gallery"
          onClick={(e) => handleNavClick(e, "#gallery")}
          className="mobile-nav__link"
        >
          Visual Tour
        </a>
        <a
          href="#location"
          onClick={(e) => handleNavClick(e, "#location")}
          className="mobile-nav__link"
        >
          Location
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="mobile-nav__link"
        >
          Contact
        </a>
        {SITE_CONFIG.social?.instagram && (
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav__link"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
            aria-label="Follow on Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            Instagram (@nandiniluxurycoliving)
          </a>
        )}
        <div className="mobile-nav__cta">
          <button className="btn btn-ghost" onClick={handleEnquire}>
            Enquire Now <span className="btn-arrow">→</span>
          </button>
        </div>
      </nav>
    </>
  );
}
