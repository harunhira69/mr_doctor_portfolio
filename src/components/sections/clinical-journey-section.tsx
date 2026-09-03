import Image from "next/image";
import { ArrowUpRight, GraduationCap, HeartPulse, Stethoscope } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const journey = [
  {
    number: "01",
    period: "MEDICAL TRAINING",
    title: "চিকিৎসাবিজ্ঞানের ভিত্তি",
    description:
      "চিকিৎসাবিজ্ঞানের মৌলিক জ্ঞান ও clinical training-এর মধ্য দিয়ে রোগীকে শুধু একটি রোগের তালিকা হিসেবে নয়, বরং একটি সম্পূর্ণ clinical context হিসেবে দেখার ভিত্তি তৈরি হয়।",
    icon: GraduationCap,
  },
  {
    number: "02",
    period: "CLINICAL EXPERIENCE",
    title: "বাস্তব রোগীর অভিজ্ঞতা",
    description:
      "বিভিন্ন ধরনের সাধারণ ও দীর্ঘমেয়াদি স্বাস্থ্যসমস্যা নিয়ে কাজ করার অভিজ্ঞতা consultation-এর সময় সমস্যাকে আরও গুছিয়ে মূল্যায়ন করতে সহায়তা করে।",
    icon: Stethoscope,
  },
  {
    number: "03",
    period: "MEDICINE & DIABETES",
    title: "বিশেষ আগ্রহের ক্ষেত্র",
    description:
      "মেডিসিন ও ডায়াবেটিস ব্যবস্থাপনায় কাজ করতে গিয়ে দীর্ঘমেয়াদি রোগের ক্ষেত্রে নিয়মিত monitoring, lifestyle এবং follow-up-এর গুরুত্ব আরও স্পষ্ট হয়েছে।",
    icon: HeartPulse,
  },
];

export function ClinicalJourneySection() {
  return (
    <section className="section-space bg-clinical-sand/35">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Image / visual story */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-clinical-sand">
                {/*
                  IMAGE PLACEHOLDER
                  ------------------------------------------------
                  Replace this image later with a real professional
                  photo of the doctor.

                  Recommended:
                  - Ratio: 3:4
                  - High resolution
                  - Doctor in a natural clinical environment
                  - Minimal background
                  - Authentic professional photography
                  - Avoid generic hospital stock photos
                */}
                <Image
                  src="/images/doctor/clinical-journey.png"
                  alt="ডাক্তারের পেশাগত যাত্রার ছবি"
                  width={900}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover"
                />

                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="rounded-full border border-white/20 bg-clinical-ink/80 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white backdrop-blur-md">
                    CLINICAL JOURNEY
                  </div>
                </div>

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="rounded-2xl bg-white/92 p-5 backdrop-blur-md sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clinical-teal">
                      A PRACTICE BUILT AROUND PEOPLE
                    </p>

                    <p className="mt-3 text-lg font-semibold leading-relaxed text-clinical-ink sm:text-xl">
                      অভিজ্ঞতার সঙ্গে চিকিৎসার পদ্ধতিও আরও patient-focused
                      হয়েছে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Journey content */}
          <div>
            <Reveal>
              <div className="editorial-eyebrow">
                <span>THE JOURNEY BEHIND THE PRACTICE</span>
              </div>

              <h2 className="editorial-title mt-5 max-w-3xl">
                চিকিৎসক হিসেবে পথচলা
                <br />
                <span className="text-clinical-teal">
                  প্রতিটি অভিজ্ঞতা থেকে শেখার গল্প।
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                একজন চিকিৎসকের professional journey শুধু degree বা designation
                দিয়ে তৈরি হয় না। প্রতিদিনের clinical experience, রোগীর
                সমস্যাকে বোঝার চেষ্টা এবং দীর্ঘমেয়াদি care-এর বাস্তব অভিজ্ঞতাও
                সেই journey-এর গুরুত্বপূর্ণ অংশ।
              </p>
            </Reveal>

            <div className="mt-12">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === journey.length - 1;

                return (
                  <Reveal key={item.number} delay={index * 0.1}>
                    <div className="relative grid grid-cols-[3.5rem_1fr] gap-5 sm:grid-cols-[5rem_1fr] sm:gap-7">
                      {/* Timeline */}
                      <div className="relative flex justify-center">
                        {!isLast && (
                          <div className="absolute left-1/2 top-10 h-[calc(100%+1px)] w-px -translate-x-1/2 bg-clinical-teal/20" />
                        )}

                        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-clinical-teal/20 bg-white text-clinical-teal shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="border-t border-border/70 pb-10 pt-1 sm:pb-12">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className="font-mono text-xs tracking-[0.16em] text-clinical-teal">
                            {item.number}
                          </span>

                          <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
                            {item.period}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-clinical-ink sm:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-2 border-t border-clinical-ink/10 pt-6">
                <div className="flex items-center gap-3 text-sm font-medium text-clinical-ink">
                  <ArrowUpRight className="h-4 w-4 text-clinical-teal" />

                  <span>
                    বিস্তারিত পেশাগত পরিচয় ও অভিজ্ঞতা দেখতে About page দেখুন।
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}