import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { PageHero } from "@/components/shared/page-hero";
import { doctor } from "@/content/doctor";

export const metadata: Metadata = {
  title: `${doctor.fullName} — চিকিৎসক পরিচিতি`,
  description: `${doctor.fullName}-এর পেশাগত পরিচয়, যোগ্যতা, বিশেষজ্ঞ ক্ষেত্র এবং রোগীসেবার দৃষ্টিভঙ্গি সম্পর্কে বিস্তারিত জানুন।`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="চিকিৎসক পরিচিতি"
        title={doctor.fullName}
        description={`${doctor.designation} • ${doctor.specialty}`}
        currentPage="পরিচিতি"
      />

      <AboutSection showDetailsLink={false} />
      <AppointmentCta />
    </>
  );
}