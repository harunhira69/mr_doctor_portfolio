import { AboutSection } from "@/components/sections/about-section";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ChamberSection } from "@/components/sections/chamber-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ChamberSection />
      <TestimonialSection />
      <FaqSection />
      <AppointmentCta />
    </>
  );
}