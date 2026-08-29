import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BriefcaseMedical,
  Building2,
  GraduationCap,
  HeartHandshake,
  IdCard,
  MessageCircleMore,
  RefreshCw,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { doctor } from "@/content/doctor";

type AboutSectionProps = {
  showDetailsLink?: boolean;
};

type CredentialItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const careValues = [
  {
    title: "রোগীকেন্দ্রিক সেবা",
    description:
      "প্রতিটি রোগীর সমস্যা, প্রয়োজন এবং চিকিৎসার ইতিহাস মনোযোগ দিয়ে বোঝার প্রচেষ্টা।",
    icon: HeartHandshake,
  },
  {
    title: "সহজ ও স্পষ্ট যোগাযোগ",
    description:
      "রোগ, প্রয়োজনীয় পরীক্ষা এবং চিকিৎসার নির্দেশনা সহজ ভাষায় বুঝিয়ে বলা।",
    icon: MessageCircleMore,
  },
  {
    title: "দায়িত্বশীল ফলো-আপ",
    description:
      "দীর্ঘমেয়াদি স্বাস্থ্য ব্যবস্থাপনায় প্রয়োজন অনুযায়ী ধারাবাহিক যোগাযোগে গুরুত্ব দেওয়া।",
    icon: RefreshCw,
  },
];

export function AboutSection({
  showDetailsLink = true,
}: AboutSectionProps) {
  const credentialItems: CredentialItem[] = [
    ...(doctor.degrees.length > 0
      ? [
          {
            label: "শিক্ষাগত যোগ্যতা",
            value: doctor.degrees.join(", "),
            icon: GraduationCap,
          },
        ]
      : []),

    ...(doctor.designation
      ? [
          {
            label: "বর্তমান পদবি",
            value: doctor.designation,
            icon: BriefcaseMedical,
          },
        ]
      : []),

    ...(doctor.organization
      ? [
          {
            label: "কর্মস্থল",
            value: doctor.organization,
            icon: Building2,
          },
        ]
      : []),

    ...(doctor.specialty
      ? [
          {
            label: "বিশেষজ্ঞ ক্ষেত্র",
            value: doctor.specialty,
            icon: Stethoscope,
          },
        ]
      : []),

    ...(doctor.yearsOfExperience > 0
      ? [
          {
            label: "পেশাগত অভিজ্ঞতা",
            value: `${doctor.yearsOfExperience}+ বছর`,
            icon: Award,
          },
        ]
      : []),

    ...(doctor.bmdcRegistration
      ? [
          {
            label: "BMDC রেজিস্ট্রেশন",
            value: doctor.bmdcRegistration,
            icon: IdCard,
          },
        ]
      : []),
  ];

  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="mb-4 text-sm font-bold tracking-wide text-[#0E6B65]">
                চিকিৎসক সম্পর্কে
              </p>

              <h2
                id="about-heading"
                className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C2D35] sm:text-4xl lg:text-5xl"
              >
                রোগীর কথা শোনা থেকেই ভালো চিকিৎসার শুরু
              </h2>

              {doctor.shortBio && (
                <p className="mt-6 text-base leading-8 text-[#61777B]">
                  {doctor.shortBio}
                </p>
              )}

              {showDetailsLink && (
                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2 font-bold text-[#0E6B65] transition hover:text-[#09534F]"
                >
                  বিস্তারিত পরিচিতি দেখুন
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="rounded-[2rem] bg-[#0C2D35] p-7 text-white sm:p-10">
                <p className="text-sm font-semibold text-[#8FD8CF]">
                  চিকিৎসাসেবার লক্ষ্য
                </p>

                <p className="mt-5 text-xl font-semibold leading-relaxed sm:text-2xl">
                  রোগীর স্বাস্থ্যগত সমস্যা মনোযোগ দিয়ে বোঝা, প্রয়োজনীয় তথ্য
                  সহজ ভাষায় ব্যাখ্যা করা এবং দায়িত্বশীল চিকিৎসা পরামর্শ
                  প্রদান।
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {careValues.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <article className="h-full rounded-[1.5rem] border border-[#0C2D35]/10 bg-[#F8FBFA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#0E6B65]/20 hover:shadow-lg">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-[#DDF1EC] text-[#0E6B65]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>

                      <h3 className="mt-4 font-bold text-[#0C2D35]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#61777B]">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {credentialItems.length > 0 && (
          <div className="mt-20 border-t border-[#0C2D35]/10 pt-16">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-bold tracking-wide text-[#0E6B65]">
                  পেশাগত পরিচিতি
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#0C2D35]">
                  যোগ্যতা ও কর্মজীবনের সংক্ষিপ্ত তথ্য
                </h3>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {credentialItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.label} delay={index * 0.06}>
                    <article className="flex h-full gap-4 rounded-2xl border border-[#0C2D35]/10 bg-white p-5 shadow-sm">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#DDF1EC] text-[#0E6B65]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-[#61777B]">
                          {item.label}
                        </p>

                        <p className="mt-1 font-bold leading-7 text-[#0C2D35]">
                          {item.value}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

        {doctor.professionalMemberships.length > 0 && (
          <Reveal>
            <div className="mt-12 rounded-[2rem] border border-[#0E6B65]/15 bg-[#F4FAF8] p-7 sm:p-10">
              <div className="flex items-center gap-3">
                <Award
                  className="size-6 text-[#0E6B65]"
                  aria-hidden="true"
                />

                <h3 className="text-xl font-bold text-[#0C2D35]">
                  পেশাগত সদস্যপদ
                </h3>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {doctor.professionalMemberships.map((membership) => (
                  <li
                    key={membership}
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#31565B]"
                  >
                    {membership}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}