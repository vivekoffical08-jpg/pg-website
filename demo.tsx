import SocialCards from "@/components/ui/card-fan-carousel";
import { SITE_CONFIG } from "@/config/site-config";

/**
 * Standalone demo wrapper for the Card Fan Carousel.
 * STRICT ASSET RULE: Exclusively authentic Nandini Luxury Co-Living property photos.
 * Zero Unsplash, zero stock photography, zero placeholder demo images.
 */
export default function Demo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1A1A] py-12 px-4">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A69374] font-medium">
          Nandini Luxury Co-Living &bull; Doddakannelli, Bengaluru
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] mt-2">
          Visual Tour &bull; Card Fan Carousel
        </h1>
        <p className="text-sm text-[#D4CFC7] mt-1 max-w-md mx-auto">
          Authentic property spaces: grand entrance, suites, fitness gym, dining lounge, and rooftop vista.
        </p>
      </div>

      <SocialCards cards={SITE_CONFIG.carouselCards} />
    </div>
  );
}
