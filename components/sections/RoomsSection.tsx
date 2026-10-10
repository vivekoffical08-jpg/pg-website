import { SITE_CONFIG, RoomItem } from "@/config/site-config";

export default function RoomsSection() {
  const handleRoomEnquiry = (room: RoomItem) => {
    const text = `Hi, I am interested in the ${room.type} (₹${room.price} ${room.priceSuffix}) at Nandini Luxury Co-Living. Could you share current availability?`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="rooms" id="rooms" aria-label="Room types and pricing">
      <div className="rooms__header">
        <div className="rooms__header-content">
          <p className="text-meta reveal">Accommodation</p>
          <h2 className="heading-section reveal reveal-delay-1" style={{ marginTop: "12px" }}>
            Your Space.<br />Your Way.
          </h2>
        </div>
        <p className="text-body reveal reveal-delay-2" style={{ maxWidth: "340px" }}>
          Choose the accommodation option that suits your lifestyle, privacy preferences, and budget.
        </p>
      </div>

      <div className="rooms__grid">
        {SITE_CONFIG.rooms.map((room: RoomItem, idx: number) => (
          <article
            key={room.id}
            className={`room-card reveal ${idx > 0 ? `reveal-delay-${idx}` : ""}`}
          >
            <div className="room-card__image-wrapper">
              <img
                src={room.image}
                alt={`${room.type} at ${SITE_CONFIG.brand.name}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="room-card__body">
              <h3 className="room-card__type">{room.type}</h3>
              <div className="room-card__price">
                <span className="room-card__price-currency">₹</span>
                <span className="room-card__price-amount">{room.price}</span>
                <span className="room-card__price-suffix">{room.priceSuffix}</span>
              </div>
              <div className="room-card__divider"></div>
              <p className="room-card__desc">{room.description}</p>
              <div className="room-card__features">
                {room.features.map((feat: string) => (
                  <span key={feat} className="room-card__feature-pill">
                    {feat}
                  </span>
                ))}
              </div>
              <button
                className="room-card__cta"
                onClick={() => handleRoomEnquiry(room)}
                aria-label={`Enquire via WhatsApp about ${room.type} (₹${room.price})`}
              >
                Enquire <span className="btn-arrow">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
