import { AboutSection } from "@/components/sections/about-section";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ChamberSection } from "@/components/sections/chamber-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TodayChamberSection } from "@/components/sections/today-chamber-section";
import { ConcernNavigatorSection } from "@/components/sections/concern-navigator-section";
import { VisitPreparationSection } from "@/components/sections/visit-preparation-section";

export default function HomePage() {
  return (
    <>
       <HeroSection />
      <TodayChamberSection />
      <ConcernNavigatorSection/>
      <VisitPreparationSection/>
      <ChamberSection />
      <FaqSection />
      <AppointmentCta />
    </>
  );
}