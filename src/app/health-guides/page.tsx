import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  ShieldAlert,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { healthGuides } from "@/content/health-guides";

export const metadata: Metadata = {
  title: "স্বাস্থ্য নির্দেশিকা",
  description:
    "ডায়াবেটিস, উচ্চ রক্তচাপ এবং চিকিৎসকের সাক্ষাতের প্রস্তুতি সম্পর্কে সহজ বাংলা স্বাস্থ্য নির্দেশিকা।",

  alternates: {
    canonical: "/health-guides",
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    title: "বাংলা স্বাস্থ্য নির্দেশিকা",
    description:
      "সাধারণ স্বাস্থ্যবিষয়ক তথ্য সহজ বাংলা ভাষায় জানুন।",
    url: "/health-guides",
  },
};

export default function HealthGuidesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-clinical-ink text-white">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-clinical-teal/30 to-transparent"
          aria-hidden="true"
        />

        <div
          className="absolute -right-24 top-1/2 size-72 -translate-y-1/2 rounded-full border-[3rem] border-white/[0.03]"
          aria-hidden="true"
        />

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-sm font-bold text-[#9EDDD4]">
              <span
                className="h-px w-9 bg-clinical-gold"
                aria-hidden="true"
              />

              রোগীর জন্য সহজ তথ্য
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              বাংলা স্বাস্থ্য নির্দেশিকা
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              সাধারণ স্বাস্থ্যবিষয়ক তথ্য সহজ ভাষায় বোঝার জন্য সংক্ষিপ্ত
              নির্দেশিকা। এগুলো ব্যক্তিগত diagnosis, prescription অথবা
              চিকিৎসকের পরামর্শের বিকল্প নয়।
            </p>
          </div>
        </Container>
      </section>

      <section
        className="bg-clinical-ivory py-16 sm:py-20 lg:py-24"
        aria-labelledby="guides-heading"
      >
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold text-clinical-teal">
                <BookOpen
                  className="size-4"
                  aria-hidden="true"
                />

                সর্বশেষ নির্দেশিকা
              </p>

              <h2
                id="guides-heading"
                className="mt-3 text-3xl font-bold tracking-[-0.025em] text-clinical-ink sm:text-4xl"
              >
                প্রয়োজনীয় বিষয় নির্বাচন করুন
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              মোট {healthGuides.length}টি ডেমো নির্দেশিকা
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {healthGuides.map((guide) => {
              const titleId = `guide-${guide.slug}-title`;

              return (
                <article
                  key={guide.slug}
                  aria-labelledby={titleId}
                  className="group flex h-full flex-col border-t-4 border-clinical-teal bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-clinical-mint">
                    <Image
                      src={guide.image}
                      alt={guide.alt}
                      fill
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />

                    <div
                      className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-clinical-ink/20 to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-4 text-xs font-bold">
                      <span className="text-clinical-teal">
                        {guide.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock3
                          className="size-3.5"
                          aria-hidden="true"
                        />

                        {guide.readingTime}
                      </span>
                    </div>

                    <h3
                      id={titleId}
                      className="mt-4 text-2xl font-bold leading-9 text-clinical-ink"
                    >
                      {guide.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                      {guide.excerpt}
                    </p>

                    <div className="mt-6 border-t border-border pt-5">
                      <p className="flex items-start gap-2 text-xs font-semibold leading-6 text-amber-800">
                        <ShieldAlert
                          className="mt-1 size-4 shrink-0"
                          aria-hidden="true"
                        />

                        <span>{guide.reviewStatus}</span>
                      </p>

                      <Link
                        href={`/health-guides/${guide.slug}`}
                        aria-label={`${guide.title} বিস্তারিত পড়ুন`}
                        className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-clinical-teal transition hover:text-clinical-teal-dark"
                      >
                        বিস্তারিত পড়ুন

                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 border-l-4 border-clinical-critical bg-white px-5 py-5 text-sm leading-7 text-[#496469]">
            <div className="flex items-start gap-3">
              <ShieldAlert
                className="mt-1 size-5 shrink-0 text-clinical-critical"
                aria-hidden="true"
              />

              <p>
                <strong className="text-clinical-ink">
                  গুরুত্বপূর্ণ:
                </strong>{" "}
                এই নির্দেশিকাগুলো শুধুমাত্র সাধারণ শিক্ষামূলক তথ্য।
                ব্যক্তিগত diagnosis, medicine পরিবর্তন অথবা জরুরি চিকিৎসার
                জন্য সরাসরি নিবন্ধিত চিকিৎসকের পরামর্শ নিন।
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}