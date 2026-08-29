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
    <section className="relative isolate overflow-hidden border-b border-[#0C2D35]/10 bg-[#F4FAF8] pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div
        className="absolute -right-24 top-10 -z-10 size-80 rounded-full bg-[#DDF1EC] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -left-24 bottom-0 -z-10 size-64 rounded-full bg-cyan-100/60 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#61777B]">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#0E6B65]"
                >
                  <Home className="size-4" aria-hidden="true" />
                  হোম
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight className="size-4" />
              </li>

              <li
                className="font-semibold text-[#0E6B65]"
                aria-current="page"
              >
                {currentPage}
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold tracking-wide text-[#0E6B65]">
              {eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0C2D35] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#61777B] sm:text-lg">
              {description}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}