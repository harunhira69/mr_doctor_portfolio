import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentPage: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  currentPage,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-clinical-ink/10 bg-[#f3f7f3]">
      {/* Decorative editorial field */}
      <div
        className="pointer-events-none absolute -right-32 top-0 -z-10 size-[28rem] rounded-full bg-clinical-mint/70 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-[-10rem] -z-10 size-[24rem] rounded-full bg-[#efe6d6]/55 blur-3xl"
        aria-hidden="true"
      />

      <Container className="pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-clinical-teal"
                >
                  <Home
                    className="size-3.5"
                    aria-hidden="true"
                  />

                  <span>হোম</span>
                </Link>
              </li>

              <li
                aria-hidden="true"
                className="text-clinical-ink/30"
              >
                <ChevronRight className="size-4" />
              </li>

              <li
                aria-current="page"
                className="font-semibold text-clinical-ink"
              >
                {currentPage}
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-9 bg-clinical-gold"
                aria-hidden="true"
              />

              <p className="editorial-eyebrow text-clinical-teal">
                {eyebrow}
              </p>
            </div>

            <h1 className="editorial-title mt-5 max-w-4xl text-[clamp(2.5rem,6vw,5.8rem)] font-bold leading-[1.04] text-clinical-ink">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-16 bg-clinical-ink/15" />

            <span className="text-xs font-semibold tracking-[0.14em] text-clinical-ink/45">
              MR DOCTOR
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}