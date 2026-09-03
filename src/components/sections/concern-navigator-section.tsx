"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileSearch,
  HeartPulse,
  MessageCircleQuestion,
  RefreshCw,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type Concern = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Stethoscope;
  href: string;
};

const concerns: Concern[] = [
  {
    id: "new-problem",
    number: "01",
    title: "নতুন কোনো সমস্যা নিয়ে পরামর্শ চাই",
    description:
      "নতুন বা বারবার হওয়া কোনো উপসর্গ নিয়ে কোথা থেকে শুরু করবেন বুঝতে না পারলে এখানে শুরু করুন।",
    icon: Stethoscope,
    href: "/expertise",
  },
  {
    id: "diabetes",
    number: "02",
    title: "ডায়াবেটিস / সুগার নিয়ে পরামর্শ চাই",
    description:
      "রক্তে শর্করা নিয়ন্ত্রণ, নিয়মিত ফলো-আপ বা চিকিৎসা পরিকল্পনা নিয়ে আলোচনা করতে পারেন।",
    icon: HeartPulse,
    href: "/expertise",
  },
  {
    id: "blood-pressure",
    number: "03",
    title: "রক্তচাপ বা দীর্ঘদিনের সমস্যা",
    description:
      "উচ্চ রক্তচাপসহ দীর্ঘমেয়াদি স্বাস্থ্যসমস্যার নিয়মিত মূল্যায়ন ও ব্যবস্থাপনা প্রয়োজন হলে।",
    icon: RefreshCw,
    href: "/expertise",
  },
  {
    id: "reports",
    number: "04",
    title: "রিপোর্ট বা টেস্ট বুঝতে চাই",
    description:
      "কোনো পরীক্ষার রিপোর্টের অর্থ ও পরবর্তী পদক্ষেপ নিয়ে চিকিৎসকের সঙ্গে আলোচনা করতে চাইলে।",
    icon: FileSearch,
    href: "/contact",
  },
  {
    id: "follow-up",
    number: "05",
    title: "আগের চিকিৎসার follow-up",
    description:
      "চলমান চিকিৎসার অগ্রগতি, ওষুধ বা পরবর্তী মূল্যায়ন নিয়ে আবার পরামর্শ প্রয়োজন হলে।",
    icon: ClipboardList,
    href: "/contact",
  },
  {
    id: "second-opinion",
    number: "06",
    title: "Second opinion নিতে চাই",
    description:
      "আগের পরামর্শ বা চিকিৎসা পরিকল্পনা সম্পর্কে আরেকটি চিকিৎসাগত মতামত প্রয়োজন হলে।",
    icon: MessageCircleQuestion,
    href: "/contact",
  },
];

export function ConcernNavigatorSection() {
  const [activeConcern, setActiveConcern] = useState<string | null>(
    null,
  );

  return (
    <section
      id="concerns"
      aria-labelledby="concerns-heading"
      className="section-space bg-clinical-ivory"
    >
      <Container>
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="editorial-eyebrow text-clinical-teal">
              Start Here
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h2
                id="concerns-heading"
                className="editorial-title max-w-4xl text-clinical-ink"
              >
                কী কারণে
                <span className="text-clinical-teal">
                  {" "}
                  এসেছেন?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                সঠিক জায়গা খুঁজে পেতে পুরো ওয়েবসাইট ঘাঁটতে হবে না।
                আপনার প্রয়োজনের কাছাকাছি বিষয়টি বেছে নিন—তারপর
                প্রাসঙ্গিক তথ্য দেখুন।
              </p>
            </div>
          </Reveal>
        </div>

        {/* Navigator */}
        <div className="mt-12 border-t border-clinical-ink/10">
          {concerns.map((concern, index) => {
            const Icon = concern.icon;
            const isActive = activeConcern === concern.id;

            return (
              <Reveal
                key={concern.id}
                delay={index * 0.04}
              >
                <div
                  className={[
                    "group border-b border-clinical-ink/10 transition-colors duration-300",
                    isActive
                      ? "bg-white"
                      : "hover:bg-white/60",
                  ].join(" ")}
                  onMouseEnter={() =>
                    setActiveConcern(concern.id)
                  }
                  onMouseLeave={() =>
                    setActiveConcern(null)
                  }
                >
                  <Link
                    href={concern.href}
                    className="grid gap-5 px-0 py-6 sm:grid-cols-[64px_56px_1fr_auto] sm:items-center sm:gap-7 sm:py-7"
                  >
                    {/* Number */}
                    <span className="hidden text-xs font-bold tabular-nums text-clinical-gold sm:block">
                      {concern.number}
                    </span>

                    {/* Icon */}
                    <span
                      className={[
                        "flex size-12 items-center justify-center rounded-full border transition-all duration-300",
                        isActive
                          ? "border-clinical-teal bg-clinical-teal text-white"
                          : "border-clinical-ink/10 bg-white text-clinical-teal",
                      ].join(" ")}
                    >
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tabular-nums text-clinical-gold sm:hidden">
                          {concern.number}
                        </span>

                        <h3 className="text-lg font-bold tracking-[-0.015em] text-clinical-ink sm:text-xl">
                          {concern.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                        {concern.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <span
                      className={[
                        "flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isActive
                          ? "translate-x-1 border-clinical-teal bg-clinical-teal text-white"
                          : "border-clinical-ink/10 text-clinical-ink/50",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              আপনার সমস্যাটি এখানে না থাকলেও সাধারণ মেডিসিন
              সংক্রান্ত পরামর্শের জন্য যোগাযোগ করতে পারেন।
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-clinical-teal transition-colors hover:text-clinical-teal-dark"
            >
              সরাসরি যোগাযোগ করুন
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}