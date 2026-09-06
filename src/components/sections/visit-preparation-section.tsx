import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Pill,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const preparationItems = [
  {
    number: "01",
    icon: ClipboardList,
    title: "সমস্যাগুলো আগে থেকে গুছিয়ে নিন",
    description:
      "কী সমস্যা হচ্ছে, কতদিন ধরে হচ্ছে এবং কোন সময়ে বেশি হয়—এগুলো সংক্ষেপে মনে রাখুন বা লিখে নিয়ে আসুন।",
  },
  {
    number: "02",
    icon: FileText,
    title: "প্রয়োজনীয় রিপোর্ট সঙ্গে রাখুন",
    description:
      "সাম্প্রতিক blood test, imaging বা অন্য কোনো relevant report থাকলে সঙ্গে রাখুন। পুরোনো গুরুত্বপূর্ণ রিপোর্টও প্রয়োজন হতে পারে।",
  },
  {
    number: "03",
    icon: Pill,
    title: "বর্তমান ওষুধের তথ্য আনুন",
    description:
      "যেসব ওষুধ নিয়মিত বা সম্প্রতি ব্যবহার করছেন, সেগুলোর নাম, dose অথবা prescription সঙ্গে রাখলে consultation সহজ হয়।",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "আপনার প্রশ্নগুলো লিখে রাখুন",
    description:
      "consultation-এর সময় যেসব বিষয় জানতে চান, সেগুলো আগে থেকে লিখে রাখলে গুরুত্বপূর্ণ কোনো প্রশ্ন বাদ পড়ে যাওয়ার সম্ভাবনা কমে।",
  },
];

export function VisitPreparationSection() {
  return (
    <section
      id="visit-preparation"
      aria-labelledby="visit-preparation-heading"
      className="section-space overflow-hidden"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="editorial-eyebrow">
                <span>BEFORE YOUR VISIT</span>
              </div>

              <h2
                id="visit-preparation-heading"
                className="editorial-title mt-5 max-w-xl"
              >
                আপনার ভিজিটকে
                <br />
                <span className="text-clinical-teal">
                  আরও কার্যকর করুন।
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                consultation-এর আগে কিছু তথ্য গুছিয়ে রাখলে আপনার
                সমস্যার ইতিহাস, আগের চিকিৎসা এবং প্রয়োজনীয় তথ্য নিয়ে
                আরও পরিষ্কারভাবে আলোচনা করা সহজ হয়।
              </p>

              <div className="mt-8 border-l-2 border-clinical-gold pl-5">
                <p className="text-sm font-semibold leading-7 text-clinical-ink">
                  ছোট প্রস্তুতি, কিন্তু consultation-এর জন্য গুরুত্বপূর্ণ
                  পার্থক্য তৈরি করতে পারে।
                </p>
              </div>

              <Link
                href="/chambers"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clinical-teal transition hover:text-clinical-ink"
              >
                চেম্বারের সময়সূচি দেখুন
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          {/* Preparation list */}
          <div>
            <div className="border-t border-clinical-ink/10">
              {preparationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={index * 0.08}>
                    <article className="group grid gap-5 border-b border-clinical-ink/10 py-8 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:gap-7 sm:py-10">
                      {/* Number */}
                      <div>
                        <span className="font-mono text-sm tracking-[0.16em] text-clinical-teal">
                          {item.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-clinical-mint text-clinical-teal transition duration-300 group-hover:scale-105">
                            <Icon
                              className="size-[17px]"
                              aria-hidden="true"
                            />
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold tracking-tight text-clinical-ink sm:text-2xl">
                              {item.title}
                            </h3>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden pt-1 text-clinical-teal/40 transition duration-300 group-hover:translate-x-1 group-hover:text-clinical-teal sm:block">
                        <ArrowRight
                          className="size-5"
                          aria-hidden="true"
                        />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom note */}
            <Reveal delay={0.25}>
              <div className="mt-8 rounded-[1.25rem] bg-clinical-ink p-6 text-white sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clinical-gold">
                  A SIMPLE REMINDER
                </p>

                <div className="mt-4 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="max-w-2xl text-base leading-8 text-white/75">
                    সব রিপোর্ট বা সব পুরোনো কাগজ নিয়ে আসা সবসময় প্রয়োজন
                    নাও হতে পারে। আপনার বর্তমান সমস্যার সঙ্গে সম্পর্কিত
                    গুরুত্বপূর্ণ তথ্যগুলো সঙ্গে রাখাই সবচেয়ে practical।
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-clinical-ink transition hover:bg-clinical-gold"
                  >
                    যোগাযোগ করুন
                    <ArrowRight
                      className="size-4"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}