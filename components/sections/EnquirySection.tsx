import { SITE_CONFIG } from "@/config/site-config";

export default function EnquirySection() {
  const handleEnquire = () => {
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      SITE_CONFIG.contact.whatsappDefaultText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleViewLocation = () => {
    const locationSection = document.querySelector("#location");
    if (locationSection) {
      const headerHeight = 72;
      const targetPos =
        locationSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <section className="enquiry-section" id="contact" aria-label="Enquire about room availability">
      <div className="enquiry-section__bg-texture" aria-hidden="true"></div>

      <div className="enquiry-section__content">
        <p className="text-meta reveal" style={{ color: "var(--bronze-light)" }}>
          Get In Touch
        </p>

        <h2 className="heading-section enquiry-section__heading reveal reveal-delay-1" style={{ marginTop: "12px" }}>
          <span className="enquiry-section__heading-line">Ready to Find</span>
          <span className="enquiry-section__heading-line">Your Space?</span>
        </h2>

        <p className="enquiry-section__text reveal reveal-delay-2">
          Enquire about current room availability and find the accommodation that suits your lifestyle and budget.
        </p>

        <div className="enquiry-section__actions reveal reveal-delay-3">
          <button className="btn btn-light" onClick={handleEnquire}>
            Enquire Now <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-ghost" onClick={handleViewLocation}>
            View Location <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
