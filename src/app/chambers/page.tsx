import type { Metadata } from "next";

import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ChamberSection } from "@/components/sections/chamber-section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "চেম্বার ও অ্যাপয়েন্টমেন্ট",
  description:
    "চেম্বারের ঠিকানা, রোগী দেখার সময়সূচি, অ্যাপয়েন্টমেন্ট নম্বর, Google Maps এবং WhatsApp booking information দেখুন।",
};

export default function ChambersPage() {
  return (
    <>
      <PageHero
        eyebrow="চেম্বার ও অ্যাপয়েন্টমেন্ট"
        title="সহজেই চিকিৎসকের অ্যাপয়েন্টমেন্ট নিন"
        description="চেম্বারের ঠিকানা ও সময়সূচি দেখুন এবং WhatsApp-এর মাধ্যমে অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান।"
        currentPage="চেম্বার"
      />

      <ChamberSection />

      <AppointmentCta />
    </>
  );
}