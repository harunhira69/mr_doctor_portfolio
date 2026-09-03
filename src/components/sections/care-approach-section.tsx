import Image from "next/image";
import { ArrowDown, CheckCircle2, Ear, FileSearch, Route } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const careSteps = [
  {
    number: "01",
    icon: Ear,
    title: "আগে শুনি",
    description:
      "আপনার সমস্যাটা কীভাবে শুরু হয়েছে, কতদিন ধরে আছে এবং দৈনন্দিন জীবনে কীভাবে প্রভাব ফেলছে—সেগুলো বোঝার জন্য সময় নিয়ে কথা বলা।",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "তারপর বুঝি",
    description:
      "প্রয়োজনীয় রিপোর্ট, আগের চিকিৎসা ও বর্তমান উপসর্গ একসাথে বিবেচনা করে সমস্যাটাকে একটি পরিষ্কার clinical picture হিসেবে দেখা।",
  },
  {
    number: "03",
    icon: Route,
    title: "শেষে পরিকল্পনা করি",
    description:
      "আপনার পরিস্থিতির সঙ্গে মানানসই পরবর্তী পদক্ষেপ, প্রয়োজনীয় পরীক্ষা বা চিকিৎসা এবং follow-up সম্পর্কে সহজ ভাষায় আলোচনা করা।",
  },
];

export function CareApproachSection() {
  return (
    <section className="section-space overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Visual storytelling side */}
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 top-10 hidden h-32 w-px bg-clinical-teal/40 lg:block" />

              <div className="relative overflow-hidden rounded-[1.5rem] bg-clinical-sand">
                {/*
                  IMAGE PLACEHOLDER
                  ------------------------------------------
                  Replace this src later with the doctor's
                  professional consultation / patient-care photo.

                  Recommended:
                  - Ratio: 4:5
                  - High resolution
                  - Natural consultation environment
                  - Doctor looking engaged / listening
                  - Clean, premium, authentic photography
                  - Avoid generic hospital stock photography
                */}
                <Image
                  src="/images/doctor/care.webp"
                  alt="ডাক্তারের রোগী পরামর্শ দেওয়ার দৃশ্য"
                  width={900}
                  height={1125}
                  className="aspect-[4/5] h-full w-full object-cover"
                />

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="max-w-sm rounded-2xl border border-white/20 bg-clinical-ink/85 p-5 text-white backdrop-blur-md sm:p-6">
                    <p className="editorial-eyebrow text-clinical-gold">
                      CARE PHILOSOPHY
                    </p>

                    <p className="mt-3 text-lg font-semibold leading-relaxed sm:text-xl">
                      “সমস্যাটা শুধু কী—তা নয়, আপনার জন্য পরবর্তী পদক্ষেপটা
                      কেন প্রয়োজন সেটাও পরিষ্কার হওয়া জরুরি।”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <div className="editorial-eyebrow">
                <span>HOW I APPROACH CARE</span>
              </div>

              <div className="mt-5 flex items-start gap-5">
                <div className="mt-2 hidden h-16 w-px shrink-0 bg-clinical-teal/50 sm:block" />

                <div>
                  <h2 className="editorial-title max-w-2xl">
                    চিকিৎসার শুরুটা
                    <br />
                    <span className="text-clinical-teal">
                      মনোযোগ দিয়ে শোনা
                    </span>
                    থেকে।
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                    একটি ভালো consultation শুধু রোগের নাম খুঁজে বের করার
                    বিষয় নয়। সমস্যার পুরো প্রেক্ষাপট বোঝা, প্রয়োজনীয় তথ্য
                    যাচাই করা এবং রোগী যেন নিজের care plan সম্পর্কে পরিষ্কার
                    ধারণা নিয়ে বের হতে পারেন—এই তিনটি বিষয়কে গুরুত্ব দেওয়া হয়।
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-10 space-y-0">
              {careSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <div className="group relative grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border/70 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                      <div className="flex items-start">
                        <span className="font-mono text-sm tracking-wider text-clinical-teal">
                          {step.number}
                        </span>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-clinical-teal/8 text-clinical-teal transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-4 w-4" />
                          </div>

                          <h3 className="text-xl font-semibold tracking-tight text-clinical-ink">
                            {step.title}
                          </h3>
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-clinical-ink">
                <CheckCircle2 className="h-4 w-4 text-clinical-teal" />
                <span>লক্ষ্য হলো consultation-কে আরও পরিষ্কার ও অর্থবহ করা।</span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex justify-center lg:mt-20">
            <ArrowDown className="h-5 w-5 animate-bounce text-clinical-teal/50" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}