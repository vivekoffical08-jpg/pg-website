import { SITE_CONFIG, AmenityItem } from "@/config/site-config";

export default function ExperienceSection() {
  return (
    <section className="experience" id="experience" aria-label="Living experience and amenities">
      <div className="experience__grid">
        <div className="experience__heading">
          <p className="text-meta reveal">What We Offer</p>
          <h2 className="heading-section reveal reveal-delay-1" style={{ marginTop: "12px" }}>
            <span className="experience__heading-line">The Everyday</span>
            <span className="experience__heading-line">Experience</span>
          </h2>
          <p className="experience__note reveal reveal-delay-2">
            Everything you need for effortless, comfortable living is thoughtfully taken care of under one roof.
          </p>
        </div>

        <div className="experience__list">
          {SITE_CONFIG.amenities.map((item: AmenityItem, idx: number) => (
            <div
              key={item.number}
              className={`experience__item reveal ${idx % 3 !== 0 ? `reveal-delay-${idx % 3}` : ""}`}
            >
              <span className="experience__item-number">{item.number}</span>
              <div className="experience__item-content">
                <span className="experience__item-label">{item.label}</span>
                <p className="experience__item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
