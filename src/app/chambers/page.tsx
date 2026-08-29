import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";

import { AppointmentCta } from "@/components/sections/appointment-cta";
import { ChamberSection } from "@/components/sections/chamber-section";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "চেম্বার ও অ্যাপয়েন্টমেন্ট",
  description:
    "চেম্বারের ঠিকানা, রোগী দেখার সময়সূচি, অ্যাপয়েন্টমেন্ট নম্বর, Google Maps এবং WhatsApp booking information দেখুন।",
};

const appointmentSteps = [
  "আপনার সুবিধাজনক চেম্বার নির্বাচন করুন",
  "WhatsApp বাটনে ক্লিক করুন",
  "রোগীর নাম, বয়স ও সমস্যার তথ্য লিখুন",
  "চেম্বার কর্তৃপক্ষের confirmation-এর জন্য অপেক্ষা করুন",
];

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

      <section
        className="bg-[#F4FAF8] py-20 sm:py-24"
        aria-labelledby="appointment-process-heading"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#DDF1EC] text-[#0E6B65]">
                  <MessageCircle className="size-6" aria-hidden="true" />
                </span>

                <p className="mt-6 text-sm font-bold text-[#0E6B65]">
                  Booking process
                </p>

                <h2
                  id="appointment-process-heading"
                  className="mt-3 text-3xl font-bold text-[#0C2D35] sm:text-4xl"
                >
                  WhatsApp-এ অ্যাপয়েন্টমেন্ট নেওয়ার নিয়ম
                </h2>

                <p className="mt-5 leading-8 text-[#61777B]">
                  Website কোনো appointment data সংরক্ষণ করে না। আপনার
                  দেওয়া তথ্য দিয়ে WhatsApp message তৈরি হয় এবং confirmation
                  সরাসরি চেম্বার থেকে দেওয়া হবে।
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {appointmentSteps.map((step, index) => (
                <Reveal key={step} delay={index * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-[#0C2D35]/10 bg-white p-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0C2D35] text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <div className="flex flex-1 items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-[#0E6B65]"
                        aria-hidden="true"
                      />

                      <p className="font-semibold leading-7 text-[#31565B]">
                        {step}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AppointmentCta />
    </>
  );
}