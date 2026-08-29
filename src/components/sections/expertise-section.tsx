import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Droplets,
  HeartPulse,
  Pill,
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
};

export function ExpertiseSection() {
  return (
    <section className="bg-[#F8FBFA] py-20 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="বিশেষজ্ঞ সেবা"
            title="যেসব স্বাস্থ্যসমস্যায় পরামর্শ নিতে পারেন"
            description="রোগীর উপসর্গ, পূর্ববর্তী স্বাস্থ্যতথ্য এবং প্রয়োজনীয় পরীক্ষার ফলাফল বিবেচনা করে চিকিৎসা পরামর্শ প্রদান করা হয়।"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Stethoscope;

            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-[#0C2D35]/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#0E6B65]/20 hover:shadow-[0_24px_60px_rgba(12,45,53,0.10)]">
                  <div
                    className="absolute right-0 top-0 size-24 rounded-bl-full bg-[#DDF1EC]/60 transition-transform duration-500 group-hover:scale-125"
                    aria-hidden="true"
                  />

                  <span className="relative flex size-12 items-center justify-center rounded-2xl bg-[#0C2D35] text-white shadow-sm transition duration-300 group-hover:bg-[#0E6B65]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <h3 className="relative mt-6 text-xl font-bold text-[#0C2D35]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-[#61777B]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 rounded-2xl border border-[#0E6B65]/15 bg-[#DDF1EC]/60 px-6 py-5 text-center text-sm leading-7 text-[#31565B]">
            জরুরি শারীরিক সমস্যার ক্ষেত্রে portfolio website বা WhatsApp-এর
            উত্তরের অপেক্ষা না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যোগাযোগ
            করুন।
          </div>
        </Reveal>
      </Container>
    </section>
  );
}