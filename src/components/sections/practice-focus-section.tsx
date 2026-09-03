import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { expertise } from "@/content/expertise";

const iconMap = {
  stethoscope: Stethoscope,
  activity: Activity,
  "heart-pulse": HeartPulse,
  "shield-check": ShieldCheck,
} as const;

const featuredExpertise = expertise.slice(0, 4);

export function PracticeFocusSection() {
  return (
    <section
      id="practice"
      aria-labelledby="practice-heading"
      className="section-space overflow-hidden bg-white"
    >
      <Container>
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="editorial-eyebrow text-clinical-teal">
              Areas of Practice
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h2
                id="practice-heading"
                className="editorial-title max-w-4xl text-clinical-ink"
              >
                যে সমস্যাগুলো নিয়ে
                <span className="text-clinical-teal">
                  {" "}
                  পরামর্শ নেওয়া যায়
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                প্রতিটি স্বাস্থ্যসমস্যার গুরুত্ব ও চিকিৎসার প্রয়োজন
                একরকম নয়। এখানে প্রধান কিছু ক্ষেত্র সংক্ষেপে দেওয়া
                হলো—আপনার সমস্যার সঙ্গে কোনটি বেশি সম্পর্কিত তা
                আগে বুঝে নিতে পারেন।
              </p>
            </div>
          </Reveal>
        </div>

        {/* Editorial list */}
        <div className="mt-14 border-t border-border">
          {featuredExpertise.map((item, index) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] ??
              Stethoscope;

            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <Link
                  href={`/expertise#${item.slug}`}
                  className="group grid gap-5 border-b border-border py-7 transition-colors duration-300 hover:bg-clinical-ivory/60 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-8 sm:py-8"
                >
                  {/* Number / icon */}
                  <div className="flex items-center gap-4 sm:block">
                    <span className="text-sm font-semibold tabular-nums text-clinical-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-clinical-teal transition-all duration-300 group-hover:border-clinical-teal/40 group-hover:bg-clinical-teal group-hover:text-white">
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.02em] text-clinical-ink transition-colors duration-300 group-hover:text-clinical-teal sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Action */}
                  <span
                    className="hidden size-11 items-center justify-center rounded-full border border-border text-clinical-ink transition-all duration-300 group-hover:border-clinical-teal group-hover:bg-clinical-teal group-hover:text-white sm:flex"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Supporting statement */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 border-l-2 border-clinical-gold pl-5 sm:flex-row sm:items-center sm:justify-between sm:pl-6">
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              আপনার সমস্যাটি তালিকায় না থাকলেও প্রাপ্তবয়স্কদের
              সাধারণ মেডিসিন-সংক্রান্ত পরামর্শের জন্য যোগাযোগ
              করতে পারেন।
            </p>

            <Link
              href="/expertise"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-clinical-teal transition-colors hover:text-clinical-teal-dark"
            >
              সব বিশেষজ্ঞ ক্ষেত্র দেখুন
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}