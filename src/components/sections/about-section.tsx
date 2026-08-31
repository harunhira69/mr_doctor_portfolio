import type { LucideIcon } from "lucide-react";
import Image from "next/image";
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
  ShieldCheck,
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
  isDemo?: boolean;
};

const careValues = [
  {
    title: "মনোযোগ দিয়ে শোনা",
    description:
      "স্বাস্থ্যসমস্যা, পূর্বের চিকিৎসা এবং রোগীর প্রধান উদ্বেগগুলো বুঝে পরামর্শ শুরু করা।",
    icon: HeartHandshake,
  },
  {
    title: "সহজ ভাষায় ব্যাখ্যা",
    description:
      "প্রয়োজনীয় পরীক্ষা, চিকিৎসার পরিকল্পনা এবং পরবর্তী পদক্ষেপ পরিষ্কারভাবে বুঝিয়ে বলা।",
    icon: MessageCircleMore,
  },
  {
    title: "পরিকল্পিত ফলো-আপ",
    description:
      "দীর্ঘমেয়াদি স্বাস্থ্য ব্যবস্থাপনায় প্রয়োজন অনুযায়ী follow-up-এর পরিকল্পনা করা।",
    icon: RefreshCw,
  },
];

export function AboutSection({
  showDetailsLink = true,
}: AboutSectionProps) {
  const experienceLabel = new Intl.NumberFormat(
    "bn-BD",
  ).format(doctor.yearsOfExperience);

  /**
   * Verified BMDC থাকলে সেটি দেখাবে।
   * Verified BMDC না থাকলে demo field দেখাবে।
   */
  const displayedBmdcRegistration =
    doctor.bmdcRegistration ||
    doctor.demoBmdcRegistration;

  const isDemoBmdcRegistration =
    !doctor.bmdcRegistration &&
    Boolean(doctor.demoBmdcRegistration);

  const credentialItems: CredentialItem[] = [
    ...(doctor.degrees.length > 0
      ? [
          {
            label: "শিক্ষাগত যোগ্যতা",
            value: doctor.degrees.join(" • "),
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

    ...(doctor.specialty
      ? [
          {
            label: "বিশেষজ্ঞ ক্ষেত্র",
            value: doctor.specialty,
            icon: Stethoscope,
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

    ...(doctor.yearsOfExperience > 0
      ? [
          {
            label: "ক্লিনিক্যাল অভিজ্ঞতা",
            value: `${experienceLabel}+ বছর`,
            icon: Award,
          },
        ]
      : []),

    ...(displayedBmdcRegistration
      ? [
          {
            label: "BMDC রেজিস্ট্রেশন",
            value: displayedBmdcRegistration,
            icon: IdCard,
            isDemo: isDemoBmdcRegistration,
          },
        ]
      : []),
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-lg">
              <div
                className="absolute -left-10 -top-10 size-40 rounded-full bg-clinical-mint blur-3xl"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-12 -right-10 size-48 rounded-full bg-clinical-gold/15 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] rounded-br-[8rem] border border-border bg-clinical-mint shadow-[0_30px_80px_rgb(8_47_52_/_14%)]">
                <Image
                  src={doctor.profileImage}
                  alt={`${doctor.fullName} — ${doctor.specialty}`}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 1023px) 90vw, 42vw"
                  className="object-cover"
                  style={{
                    objectPosition: "center 18%",
                  }}
                />
              </div>

              {doctor.degrees.length > 0 && (
                <div className="absolute -bottom-5 left-5 right-10 rounded-2xl border border-white/20 bg-clinical-ink/95 p-5 text-white shadow-2xl backdrop-blur-sm sm:left-8 sm:right-16">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9EDDD4]">
                    পেশাগত যোগ্যতা
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    {doctor.degrees.join(" • ")}
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <div className="flex items-center gap-3 text-sm font-bold text-clinical-teal">
                <span
                  className="h-px w-9 bg-clinical-gold"
                  aria-hidden="true"
                />
                চিকিৎসাসেবার দৃষ্টিভঙ্গি
              </div>

              <h2
                id="about-heading"
                className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-clinical-ink sm:text-4xl lg:text-5xl"
              >
                প্রতিটি রোগীর গল্প ও প্রয়োজন আলাদা
              </h2>

              {doctor.shortBio && (
                <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                  {doctor.shortBio}
                </p>
              )}

              <p className="mt-5 leading-8 text-muted-foreground">
                একটি কার্যকর চিকিৎসা পরামর্শ শুধু উপসর্গ জানার
                মধ্যে সীমাবদ্ধ নয়। রোগীর পূর্ববর্তী স্বাস্থ্যতথ্য,
                চলমান ওষুধ, জীবনযাপন এবং প্রধান উদ্বেগগুলো বুঝে
                পরবর্তী পদক্ষেপ নির্ধারণ করা প্রয়োজন।
              </p>

              <blockquote className="mt-7 border-l-4 border-clinical-gold bg-clinical-ivory px-6 py-5 text-lg font-semibold leading-8 text-clinical-ink">
                “রোগী যেন নিজের স্বাস্থ্যসমস্যা ও পরবর্তী করণীয়
                পরিষ্কারভাবে বুঝতে পারেন—এটাই একটি অর্থবহ
                consultation-এর গুরুত্বপূর্ণ অংশ।”
              </blockquote>

              {showDetailsLink && (
                <Link
                  href="/about"
                  className="group mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-clinical-teal transition hover:text-clinical-teal-dark"
                >
                  বিস্তারিত পরিচিতি দেখুন
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          </Reveal>
        </div>

        {credentialItems.length > 0 && (
          <div className="mt-20 border-t border-border pt-16">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <div className="flex items-center gap-3 text-sm font-bold text-clinical-teal">
                    <span
                      className="h-px w-9 bg-clinical-gold"
                      aria-hidden="true"
                    />
                    পেশাগত পরিচিতি
                  </div>

                  <h3 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-clinical-ink sm:text-4xl">
                    যোগ্যতা ও কর্মজীবনের তথ্য
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-7 text-muted-foreground">
                  চিকিৎসকের শিক্ষাগত যোগ্যতা, বর্তমান দায়িত্ব,
                  বিশেষজ্ঞ ক্ষেত্র ও পেশাগত তথ্যের সংক্ষিপ্ত
                  উপস্থাপন।
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {credentialItems.map((item, index) => {
                  const Icon = item.icon;

                  const isLastOddItem =
                    credentialItems.length % 2 === 1 &&
                    index === credentialItems.length - 1;

                  return (
                    <article
                      key={item.label}
                      className={`flex h-full items-start gap-4 rounded-[1.5rem] border border-border bg-clinical-surface p-6 transition duration-300 hover:border-clinical-teal/25 hover:bg-white hover:shadow-[var(--shadow-soft)] ${
                        isLastOddItem
                          ? "md:col-span-2"
                          : ""
                      }`}
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-clinical-mint text-clinical-teal">
                        <Icon
                          className="size-5"
                          aria-hidden="true"
                        />
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-muted-foreground">
                            {item.label}
                          </p>

                          {item.isDemo && (
                            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-amber-900">
                              ডেমো
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-lg font-bold leading-8 text-clinical-ink">
                          {item.value}
                        </p>

                        {item.isDemo && (
                          <p className="mt-2 text-xs leading-6 text-amber-800">
                            প্রকাশের আগে verified BMDC number দিয়ে
                            পরিবর্তন করতে হবে।
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>
        )}

        {doctor.professionalMemberships.length > 0 && (
          <Reveal>
            <div className="mt-10 rounded-[2rem] border border-clinical-teal/15 bg-clinical-mint/45 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-white text-clinical-teal shadow-sm">
                  <Award
                    className="size-5"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-clinical-teal">
                    Professional affiliation
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-clinical-ink">
                    পেশাগত সদস্যপদ
                  </h3>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {doctor.professionalMemberships.map(
                  (membership) => (
                    <li
                      key={membership}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-sm font-semibold leading-7 text-[#31565B]"
                    >
                      <ShieldCheck
                        className="size-4 shrink-0 text-clinical-teal"
                        aria-hidden="true"
                      />
                      {membership}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-[2.25rem] bg-clinical-ink p-7 text-white sm:p-10 lg:p-12">
            <div
              className="absolute -right-24 -top-24 size-64 rounded-full border-[40px] border-white/5"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="max-w-2xl">
                <p className="text-sm font-bold text-[#9EDDD4]">
                  রোগীসেবার মূলনীতি
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  বোঝা, ব্যাখ্যা এবং পরিকল্পিত পরবর্তী পদক্ষেপ
                </h3>
              </div>

              <div className="mt-9 grid gap-5 md:grid-cols-3">
                {careValues.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#9EDDD4]">
                        <Icon
                          className="size-5"
                          aria-hidden="true"
                        />
                      </span>

                      <h4 className="mt-5 text-lg font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}