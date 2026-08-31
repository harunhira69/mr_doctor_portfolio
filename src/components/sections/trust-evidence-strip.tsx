import {
  BriefcaseMedical,
  GraduationCap,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { doctor } from "@/content/doctor";

export function TrustEvidenceStrip() {
  const experience = new Intl.NumberFormat("bn-BD").format(
    doctor.yearsOfExperience,
  );

  const degrees =
    doctor.degrees.slice(0, 2).join(" • ") ||
    "তথ্য পরে যুক্ত হবে";

  const evidenceItems = [
    {
      label: "পেশাগত ডিগ্রি",
      value: degrees,
      icon: GraduationCap,
    },
    {
      label: "বর্তমান দায়িত্ব",
      value: doctor.designation,
      icon: BriefcaseMedical,
    },
    {
      label: "চিকিৎসাক্ষেত্র",
      value: doctor.specialty,
      icon: Stethoscope,
    },
    {
      label: "অভিজ্ঞতা",
      value: `${experience}+ বছর`,
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-clinical-ink text-white"
      aria-labelledby="professional-information-heading"
    >
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-clinical-teal/20 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative grid gap-9 py-9 lg:grid-cols-[0.7fr_2.3fr] lg:items-center lg:gap-12 lg:py-11">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="h-px w-8 bg-clinical-gold"
              aria-hidden="true"
            />

            <p className="text-xs font-bold tracking-wide text-[#9EDDD4]">
              পেশাগত পরিচিতি
            </p>
          </div>

          <h2
            id="professional-information-heading"
            className="mt-3 max-w-xs text-xl font-bold leading-8 text-white sm:text-2xl"
          >
            প্রয়োজনীয় তথ্য এক নজরে
          </h2>
        </div>

        <dl className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {evidenceItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border-l border-white/15 pl-5 xl:px-6 xl:first:pl-0"
              >
                <dt className="flex items-center gap-2 text-xs font-semibold text-white/60">
                  <Icon
                    className="size-4 text-[#8FD8CF]"
                    aria-hidden="true"
                  />

                  {item.label}
                </dt>

                <dd className="mt-2 text-sm font-bold leading-6 text-white">
                  {item.value}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}