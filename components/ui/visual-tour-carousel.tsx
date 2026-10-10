import SocialCards from "@/components/ui/card-fan-carousel";
import { SITE_CONFIG } from "@/config/site-config";

/**
 * Interactive Card Fan Carousel for the Visual Tour section.
 * STRICT ASSET RULE: Exclusively authentic Nandini Luxury Co-Living property imagery.
 */
export default function VisualTourCarousel() {
  return (
    <div className="w-full my-6 flex flex-col items-center">
      <SocialCards cards={SITE_CONFIG.carouselCards} />
    </div>
  );
}
