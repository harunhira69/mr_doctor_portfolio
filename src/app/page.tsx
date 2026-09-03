import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ChamberSection } from "@/components/sections/chamber-section";
import { ConcernNavigatorSection } from "@/components/sections/concern-navigator-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PracticeFocusSection } from "@/components/sections/practice-focus-section";
import { CareApproachSection } from "@/components/sections/care-approach-section";
import { TodayChamberSection } from "@/components/sections/today-chamber-section";
import { VisitPreparationSection } from "@/components/sections/visit-preparation-section";

export default function HomePage() {
  return (
    <>
      {/* 01 — Doctor identity */}
      <HeroSection />

      {/* 02 — Help the visitor identify their reason for coming */}
      <ConcernNavigatorSection />

      {/* 03 — Clinical areas */}
      <PracticeFocusSection />

      <CareApproachSection />

      {/* 04 — Immediate practical information */}
      <TodayChamberSection />

      {/* 05 — Make the consultation more useful */}
      <VisitPreparationSection />

      {/* 06 — All chamber locations */}
      <ChamberSection />

      {/* 07 — Common questions */}
      <FaqSection />

      {/* 08 — Final consultation action */}
      <AppointmentCta />
    </>
  );
}