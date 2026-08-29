import Link from "next/link";
import {
  ArrowUpRight,
  HeartHandshake,
  MessageCircleMore,
  RefreshCw,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { doctor } from "@/content/doctor";

const careValues = [
  {
    title: "রোগীকেন্দ্রিক সেবা",
    description:
      "প্রতিটি রোগীর সমস্যা ও প্রয়োজনকে আলাদাভাবে গুরুত্ব দেওয়া হয়।",
    icon: HeartHandshake,
  },
  {
    title: "সহজ ও স্পষ্ট ব্যাখ্যা",
    description:
      "রোগ এবং চিকিৎসার নির্দেশনা সহজ ভাষায় বোঝানোর চেষ্টা করা হয়।",
    icon: MessageCircleMore,
  },
  {
    title: "নিয়মিত ফলো-আপ",
    description:
      "দীর্ঘমেয়াদি স্বাস্থ্য ব্যবস্থাপনায় ধারাবাহিক যোগাযোগে গুরুত্ব দেওয়া হয়।",
    icon: RefreshCw,
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="mb-4 text-sm font-bold tracking-wide text-[#0E6B65]">
                ডাক্তার সম্পর্কে
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C2D35] sm:text-4xl lg:text-5xl">
                রোগীর কথা শোনা থেকেই ভালো চিকিৎসার শুরু
              </h2>

              <p className="mt-6 text-base leading-8 text-[#61777B]">
                {doctor.shortBio}
              </p>

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
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="rounded-[2rem] bg-[#0C2D35] p-7 text-white sm:p-10">
                <p className="text-sm font-semibold text-[#8FD8CF]">
                  চিকিৎসা-দর্শন
                </p>

                <blockquote className="mt-5 text-2xl font-semibold leading-relaxed sm:text-3xl">
                  “শুধু রোগের চিকিৎসা নয়—রোগীকে তার স্বাস্থ্য সম্পর্কে সচেতন
                  ও আত্মবিশ্বাসী করে তোলাও চিকিৎসাসেবার গুরুত্বপূর্ণ অংশ।”
                </blockquote>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-bold">{doctor.fullName}</p>
                  <p className="mt-1 text-sm text-white/60">
                    {doctor.designation}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {careValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <Reveal key={value.title} delay={index * 0.08}>
                    <article className="h-full rounded-[1.5rem] border border-[#0C2D35]/10 bg-[#F8FBFA] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0E6B65]/20 hover:shadow-lg">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-[#DDF1EC] text-[#0E6B65]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>

                      <h3 className="mt-5 font-bold text-[#0C2D35]">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#61777B]">
                        {value.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}