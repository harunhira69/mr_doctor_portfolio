import { AppointmentCta } from "@/components/sections/appointment-cta";
import { CareApproachSection } from "@/components/sections/care-approach-section";
import { ChamberSection } from "@/components/sections/chamber-section";
import { ConcernNavigatorSection } from "@/components/sections/concern-navigator-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PracticeFocusSection } from "@/components/sections/practice-focus-section";
import { TodayChamberSection } from "@/components/sections/today-chamber-section";
import { TrustEvidenceStrip } from "@/components/sections/trust-evidence-strip";
import { VisitPreparationSection } from "@/components/sections/visit-preparation-section";
import { ClinicalJourneySection } from "@/components/sections/clinical-journey-section";

export default function HomePage() {
  return (
    <>
      {/* 01 — Identity: who the doctor is */}
      <HeroSection />

<ClinicalJourneySection/>

      {/* 02 — Utility: where the doctor is available today */}
      <TodayChamberSection />

      {/* 03 — Trust: verified professional information at a glance */}
      <TrustEvidenceStrip />

      {/* 04 — Patient intent: help visitors identify why they are here */}
      <ConcernNavigatorSection />

      {/* 05 — Human side of care: how the doctor approaches treatment */}
      <CareApproachSection />

      {/* 06 — Clinical authority: key areas of practice */}
      <PracticeFocusSection />

      {/* 07 — Preparation: help patients make the consultation useful */}
      <VisitPreparationSection />

      {/* 08 — Complete chamber locations and schedules */}
      <ChamberSection />

      {/* 09 — Common patient questions */}
      <FaqSection />

      {/* 10 — Final consultation action */}
      <AppointmentCta />
    </>
  );
}