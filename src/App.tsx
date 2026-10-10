import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PropertyIntro from "@/components/sections/PropertyIntro";
import RoomsSection from "@/components/sections/RoomsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VisualTourSection from "@/components/sections/VisualTourSection";
import LocationSection from "@/components/sections/LocationSection";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

export default function App() {
  useEffect(() => {
    // IntersectionObserver for scroll-reveal animations
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal");

    if (prefersReduced) {
      reveals.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0EB] text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main id="main-content">
        <Hero />
        <PropertyIntro />
        <RoomsSection />
        <ExperienceSection />
        <VisualTourSection />
        <LocationSection />
        <EnquirySection />
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
