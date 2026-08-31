import { AboutSection } from "@/components/sections/about-section";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ChamberSection } from "@/components/sections/chamber-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { TodayChamberSection } from "@/components/sections/today-chamber-section";
import { ConcernNavigatorSection } from "@/components/sections/concern-navigator-section";
import { VisitPreparationSection } from "@/components/sections/visit-preparation-section";

export default function HomePage() {
  return (
    <>
       <HeroSection />
      <TodayChamberSection />
      <ConcernNavigatorSection/>
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <VisitPreparationSection/>
      <ChamberSection />
      <TestimonialSection />
      <FaqSection />
      <AppointmentCta />
    </>
  );
}