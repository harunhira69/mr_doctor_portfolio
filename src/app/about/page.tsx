import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ExperienceSection } from "@/components/sections/experience-section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "চিকিৎসক পরিচিতি",
  description:
    "চিকিৎসকের শিক্ষাগত যোগ্যতা, পেশাগত অভিজ্ঞতা, বিশেষজ্ঞ ক্ষেত্র এবং চিকিৎসাসেবার মূলনীতি সম্পর্কে বিস্তারিত জানুন।",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="চিকিৎসক পরিচিতি"
        title="যোগ্যতা, অভিজ্ঞতা ও রোগীকেন্দ্রিক চিকিৎসাসেবা"
        description="চিকিৎসকের শিক্ষাগত যোগ্যতা, পেশাগত পরিচিতি, অভিজ্ঞতা এবং চিকিৎসাসেবার মূলনীতি সম্পর্কে জানুন।"
        currentPage="পরিচিতি"
      />

      <AboutSection showDetailsLink={false} />
      <ExperienceSection />
      <AppointmentCta />
    </>
  );
}