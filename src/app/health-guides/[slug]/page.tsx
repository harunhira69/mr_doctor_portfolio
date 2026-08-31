import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Clock3,
  MessageCircle,
  ShieldAlert,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { doctor } from "@/content/doctor";
import {
  getHealthGuideBySlug,
  healthGuides,
} from "@/content/health-guides";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

type HealthGuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return healthGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: HealthGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getHealthGuideBySlug(slug);

  if (!guide) {
    return {
      title: "স্বাস্থ্য নির্দেশিকা পাওয়া যায়নি",
    };
  }

  return {
    title: guide.title,
    description: guide.excerpt,

    alternates: {
      canonical: `/health-guides/${guide.slug}`,
    },

    openGraph: {
      type: "article",
      locale: "bn_BD",
      title: guide.title,
      description: guide.excerpt,
      images: [
        {
          url: guide.image,
          width: 1600,
          height: 1000,
          alt: guide.alt,
        },
      ],
    },
  };
}

export default async function HealthGuideArticlePage({
  params,
}: HealthGuidePageProps) {
  const { slug } = await params;
  const guide = getHealthGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const whatsappUrl = createGeneralWhatsAppUrl();

  return (
    <article>
      <header className="relative overflow-hidden border-b border-border bg-clinical-ivory">
        <div
          className="absolute -right-40 top-0 size-[28rem] rounded-full bg-clinical-mint/80 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <Link
              href="/health-guides"
              className="inline-flex items-center gap-2 text-sm font-bold text-clinical-teal transition hover:text-clinical-teal-dark"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              সব স্বাস্থ্য নির্দেশিকা
            </Link>

            <p className="mt-8 text-sm font-bold text-clinical-teal">
              {guide.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.2] tracking-[-0.035em] text-clinical-ink sm:text-5xl lg:text-6xl">
              {guide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {guide.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <UserRound
                  className="size-4 text-clinical-teal"
                  aria-hidden="true"
                />
                {doctor.fullName}
              </span>

              <span className="flex items-center gap-2">
                <Clock3
                  className="size-4 text-clinical-teal"
                  aria-hidden="true"
                />
                {guide.readingTime}
              </span>

              <span className="flex items-center gap-2">
                <BookOpen
                  className="size-4 text-clinical-teal"
                  aria-hidden="true"
                />
                শিক্ষামূলক নির্দেশিকা
              </span>
            </div>
          </div>

          <figure className="relative aspect-[16/10] overflow-hidden border border-border bg-white shadow-[var(--shadow-medium)]">
            <Image
              src={guide.image}
              alt={guide.alt}
              fill
              loading="eager"
              fetchPriority="high"
              quality={75}
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover"
            />

            <figcaption className="sr-only">
              {guide.alt}
            </figcaption>
          </figure>
        </Container>
      </header>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="mx-auto w-full max-w-3xl">
            <p className="border-l-4 border-clinical-gold pl-6 text-xl font-medium leading-9 text-clinical-ink">
              {guide.intro}
            </p>

            <div className="mt-12 space-y-12">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-clinical-ink sm:text-3xl">
                    {section.heading}
                  </h2>

                  {section.paragraphs && (
                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="leading-8 text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.points && (
                    <ul className="mt-5 space-y-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 leading-8 text-muted-foreground"
                        >
                          <span
                            className="mt-3 size-1.5 shrink-0 rounded-full bg-clinical-teal"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 border-l-4 border-clinical-critical bg-clinical-ivory px-6 py-5">
              <div className="flex items-start gap-3">
                <ShieldAlert
                  className="mt-1 size-5 shrink-0 text-clinical-critical"
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-base font-bold text-clinical-ink">
                    Medical disclaimer
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    এই লেখা সাধারণ শিক্ষামূলক তথ্য। এটি ব্যক্তিগত diagnosis,
                    prescription অথবা জরুরি চিকিৎসার বিকল্প নয়। Medicine শুরু,
                    বন্ধ বা পরিবর্তনের আগে নিবন্ধিত চিকিৎসকের পরামর্শ নিন।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-32">
            <div className="border-t-4 border-clinical-gold bg-clinical-ivory p-6">
              <p className="text-xs font-bold text-muted-foreground">
                তথ্যের উৎস
              </p>

              <p className="mt-2 font-bold text-clinical-ink">
                {guide.sourceName}
              </p>

              <a
                href={guide.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-clinical-teal transition hover:text-clinical-teal-dark"
              >
                মূল উৎস দেখুন
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="border border-amber-200 bg-amber-50 p-6">
              <p className="flex items-start gap-2 text-sm font-semibold leading-7 text-amber-900">
                <ShieldAlert
                  className="mt-1 size-4 shrink-0"
                  aria-hidden="true"
                />
                {guide.reviewStatus}
              </p>
            </div>

            <div className="bg-clinical-ink p-6 text-white">
              <h2 className="text-xl font-bold text-white">
                চিকিৎসকের পরামর্শ প্রয়োজন?
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/70">
                WhatsApp-এর মাধ্যমে অ্যাপয়েন্টমেন্টের অনুরোধ পাঠাতে পারেন।
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-clinical-teal px-5 font-bold text-white transition hover:bg-clinical-teal-dark"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp করুন
              </a>
            </div>
          </aside>
        </Container>
      </section>
    </article>
  );
}