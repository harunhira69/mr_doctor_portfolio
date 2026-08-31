import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Droplets,
  FlaskConical,
  HeartPulse,
  Pill,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Wind,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { expertise } from "@/content/expertise";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  droplets: Droplets,
  "heart-pulse": HeartPulse,
  activity: Activity,
  wind: Wind,
  pill: Pill,
  "flask-conical": FlaskConical,
  "shield-check": ShieldCheck,
};

export function ExpertiseSection() {
  if (expertise.length === 0) {
    return null;
  }

  return (
    <section className="bg-clinical-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="সেবার ক্ষেত্র"
            title="চিকিৎসা পরামর্শের প্রধান ক্ষেত্রসমূহ"
            description="রোগীর বর্তমান সমস্যা, পূর্ববর্তী স্বাস্থ্যতথ্য এবং প্রাসঙ্গিক পরীক্ষার ফলাফল বিবেচনা করে প্রয়োজনীয় পরামর্শ দেওয়া হয়।"
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon =
              iconMap[item.icon] ?? Stethoscope;

            return (
              <Reveal
                key={item.id}
                delay={index * 0.06}
              >
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-clinical-teal/25 hover:shadow-[var(--shadow-soft)]">
                  <div
                    className="absolute right-0 top-0 size-24 rounded-bl-full bg-clinical-mint/70 transition-transform duration-500 group-hover:scale-125"
                    aria-hidden="true"
                  />

                  <span className="relative flex size-12 items-center justify-center rounded-2xl bg-clinical-ink text-white shadow-sm transition duration-300 group-hover:bg-clinical-teal">
                    <Icon
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>

                  <h2 className="relative mt-6 text-xl font-bold text-clinical-ink">
                    {item.title}
                  </h2>

                  <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18}>
          <div
            role="note"
            className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-clinical-critical/20 bg-clinical-critical/5 px-6 py-5 sm:flex-row sm:items-center"
          >
            <div className="flex items-start gap-3">
              <ShieldAlert
                className="mt-0.5 size-5 shrink-0 text-clinical-critical"
                aria-hidden="true"
              />

              <p className="text-sm leading-7 text-[#7F1D1D]">
                <strong>জরুরি স্বাস্থ্যসমস্যা হলে অপেক্ষা করবেন না।</strong>{" "}
                তীব্র বুকব্যথা, গুরুতর শ্বাসকষ্ট, অচেতন হয়ে যাওয়া অথবা
                জীবন-ঝুঁকিপূর্ণ পরিস্থিতিতে নিকটস্থ হাসপাতালের জরুরি
                বিভাগে যোগাযোগ করুন।
              </p>
            </div>

            <a
              href="tel:999"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-clinical-critical px-5 font-bold text-white transition hover:bg-[#8F2E2E]"
            >
              <ShieldAlert
                className="size-4"
                aria-hidden="true"
              />
              জরুরি সেবা ৯৯৯
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}