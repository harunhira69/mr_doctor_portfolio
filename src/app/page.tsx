import { AppointmentCta } from "@/components/sections/appointment-cta";
import { CareApproachSection } from "@/components/sections/care-approach-section";
import { ChamberSection } from "@/components/sections/chamber-section";
import { ConcernNavigatorSection } from "@/components/sections/concern-navigator-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PracticeFocusSection } from "@/components/sections/practice-focus-section";
import { TodayChamberSection } from "@/components/sections/today-chamber-section";
import { VisitPreparationSection } from "@/components/sections/visit-preparation-section";
import { ClinicalJourneySection } from "@/components/sections/clinical-journey-section";
import { PatientKnowledgeSection } from "@/components/sections/patient-knowledge-section";

export default function HomePage() {
  return (
    <>
  <HeroSection />

<ConcernNavigatorSection />

<PracticeFocusSection />

<CareApproachSection />

<ClinicalJourneySection />

<TodayChamberSection />

<VisitPreparationSection />

<PatientKnowledgeSection />

<ChamberSection />

<FaqSection />

<AppointmentCta />
    </>
  );
}