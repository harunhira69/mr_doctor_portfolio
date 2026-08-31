import type { Metadata } from "next";

import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "বিশেষজ্ঞ চিকিৎসাসেবা",
  description:
    "সাধারণ মেডিসিন, ডায়াবেটিস, উচ্চ রক্তচাপ এবং অন্যান্য স্বাস্থ্যসমস্যায় চিকিৎসা পরামর্শের ক্ষেত্র সম্পর্কে জানুন।",
  alternates: {
    canonical: "/expertise",
  },
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="বিশেষজ্ঞ চিকিৎসাসেবা"
        title="যেসব স্বাস্থ্যসমস্যায় পরামর্শ নিতে পারেন"
        description="চিকিৎসকের প্রধান সেবার ক্ষেত্র এবং কোন ধরনের স্বাস্থ্যসমস্যায় পরামর্শ নিতে পারেন—সে সম্পর্কে বিস্তারিত জানুন।"
        currentPage="বিশেষজ্ঞ ক্ষেত্র"
      />

      <ExpertiseSection />
      <AppointmentCta />
    </>
  );
}