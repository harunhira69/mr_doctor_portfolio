import type { Metadata } from "next";

import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ConsultationGuide } from "@/components/sections/consultation-guide";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "বিশেষজ্ঞ চিকিৎসাসেবা",
  description:
    "চিকিৎসকের বিশেষজ্ঞ ক্ষেত্র, চিকিৎসা পরামর্শের আওতা এবং চিকিৎসকের কাছে আসার প্রস্তুতি সম্পর্কে জানুন।",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="বিশেষজ্ঞ ক্ষেত্র"
        title="আপনার স্বাস্থ্যসমস্যায় প্রয়োজনীয় চিকিৎসা পরামর্শ"
        description="চিকিৎসকের প্রধান বিশেষজ্ঞ ক্ষেত্র এবং কোন ধরনের স্বাস্থ্যসমস্যায় পরামর্শ নিতে পারেন—সে সম্পর্কে বিস্তারিত জানুন।"
        currentPage="বিশেষজ্ঞ ক্ষেত্র"
      />

      <ExpertiseSection />
      <ConsultationGuide />
      <AppointmentCta />
    </>
  );
}