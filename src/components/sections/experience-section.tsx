import { Award, BriefcaseMedical, GraduationCap } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/content/experience";

const timelineIcons = [BriefcaseMedical, Award, GraduationCap];

export function ExperienceSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="পেশাগত যাত্রা"
                title="অভিজ্ঞতা, প্রশিক্ষণ ও রোগীসেবার পথচলা"
                description="চিকিৎসাশিক্ষা, পেশাগত প্রশিক্ষণ এবং দীর্ঘদিনের রোগীসেবার অভিজ্ঞতার সমন্বয়ে নির্ভরযোগ্য চিকিৎসা পরামর্শ।"
              />

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#DDF1EC] px-5 py-4">
                <span className="text-3xl font-bold text-[#0C2D35]">
                  ১২+
                </span>
                <span className="text-sm leading-6 text-[#31565B]">
                  বছরের ক্লিনিক্যাল
                  <br />
                  অভিজ্ঞতা
                </span>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div
              className="absolute bottom-8 left-[27px] top-8 w-px bg-[#0E6B65]/20"
              aria-hidden="true"
            />

            <div className="space-y-5">
              {experience.map((item, index) => {
                const Icon =
                  timelineIcons[index] ?? BriefcaseMedical;

                return (
                  <Reveal key={item.id} delay={index * 0.08}>
                    <article className="relative grid grid-cols-[56px_1fr] gap-5">
                      <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl border-4 border-white bg-[#0C2D35] text-white shadow-md">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>

                      <div className="rounded-[1.5rem] border border-[#0C2D35]/10 bg-[#F8FBFA] p-6 transition duration-300 hover:border-[#0E6B65]/20 hover:shadow-lg sm:p-7">
                        <p className="text-sm font-bold text-[#0E6B65]">
                          {item.period}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-[#0C2D35]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-[#61777B]">
                          {item.organization}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-[#61777B]">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}