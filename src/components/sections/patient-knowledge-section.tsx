import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { healthGuides } from "@/content/health-guides";

export function PatientKnowledgeSection() {
  const featuredGuide = healthGuides[0];
  const secondaryGuides = healthGuides.slice(1, 3);

  if (!featuredGuide) {
    return null;
  }

  return (
    <section
      id="patient-knowledge"
      aria-labelledby="patient-knowledge-heading"
      className="section-space overflow-hidden bg-clinical-sand/30"
    >
      <Container>
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div className="editorial-eyebrow">
              <span>PATIENT KNOWLEDGE LIBRARY</span>
            </div>

            <h2
              id="patient-knowledge-heading"
              className="editorial-title mt-5 max-w-2xl"
            >
              চিকিৎসা বোঝার জন্য
              <br />
              <span className="text-clinical-teal">
                সহজ কিছু তথ্য।
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="lg:justify-self-end lg:max-w-xl">
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                ডায়াবেটিস, রক্তচাপ কিংবা ডাক্তার দেখানোর প্রস্তুতি—
                দৈনন্দিন স্বাস্থ্যসংক্রান্ত কিছু বিষয় সহজ ভাষায়
                বোঝার জন্য এই ছোট library।
              </p>

              <Link
                href="/health-guides"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clinical-teal transition hover:text-clinical-ink"
              >
                সব নির্দেশিকা দেখুন
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Featured + secondary guides */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Featured guide */}
          <Reveal>
            <article className="group relative h-full overflow-hidden rounded-[1.5rem] bg-clinical-ink">
              <div className="relative min-h-[30rem] overflow-hidden sm:min-h-[36rem]">
                <Image
                  src={featuredGuide.image}
                  alt={featuredGuide.alt}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 1023px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-clinical-ink via-clinical-ink/45 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                    <span className="rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                      {featuredGuide.category}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3
                        className="size-3.5"
                        aria-hidden="true"
                      />

                      {featuredGuide.readingTime}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                    {featuredGuide.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    {featuredGuide.excerpt}
                  </p>

                  <Link
                    href={`/health-guides/${featuredGuide.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-clinical-ink transition hover:bg-clinical-gold"
                  >
                    নির্দেশিকাটি পড়ুন
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Secondary guides */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryGuides.map((guide, index) => (
              <Reveal key={guide.slug} delay={0.08 + index * 0.08}>
                <article className="group grid overflow-hidden rounded-[1.35rem] border border-clinical-ink/10 bg-white sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-56 overflow-hidden bg-clinical-mint sm:min-h-full">
                    <Image
                      src={guide.image}
                      alt={guide.alt}
                      fill
                      loading="lazy"
                      quality={78}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-clinical-teal">
                        {guide.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock3
                          className="size-3.5"
                          aria-hidden="true"
                        />

                        {guide.readingTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-8 tracking-tight text-clinical-ink sm:text-2xl">
                      {guide.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {guide.excerpt}
                    </p>

                    <Link
                      href={`/health-guides/${guide.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clinical-teal transition hover:text-clinical-ink"
                    >
                      পড়ুন
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Library footer */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-5 border-t border-clinical-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <BookOpen
                className="mt-0.5 size-5 shrink-0 text-clinical-teal"
                aria-hidden="true"
              />

              <p className="max-w-2xl text-xs leading-6 text-muted-foreground">
                এই তথ্যগুলো সাধারণ শিক্ষামূলক উদ্দেশ্যে। ব্যক্তিগত
                diagnosis বা treatment plan-এর জন্য সরাসরি চিকিৎসকের
                পরামর্শ প্রয়োজন।
              </p>
            </div>

            <Link
              href="/health-guides"
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-clinical-ink transition hover:text-clinical-teal"
            >
              Knowledge Library
              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}