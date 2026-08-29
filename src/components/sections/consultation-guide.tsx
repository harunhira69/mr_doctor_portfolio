import {
  Clock3,
  FileText,
  NotebookPen,
  Pill,
  TriangleAlert,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const preparationItems = [
  {
    title: "পূর্ববর্তী প্রেসক্রিপশন",
    description:
      "আগের চিকিৎসকের প্রেসক্রিপশন এবং চিকিৎসা-সংক্রান্ত গুরুত্বপূর্ণ কাগজপত্র সঙ্গে আনুন।",
    icon: FileText,
  },
  {
    title: "পরীক্ষার রিপোর্ট",
    description:
      "রক্ত পরীক্ষা, এক্স-রে, আল্ট্রাসনোগ্রাম বা অন্যান্য প্রাসঙ্গিক রিপোর্ট সঙ্গে রাখুন।",
    icon: NotebookPen,
  },
  {
    title: "বর্তমান ওষুধের তালিকা",
    description:
      "বর্তমানে কোন ওষুধ কত মাত্রায় গ্রহণ করছেন, তার একটি তালিকা সঙ্গে আনুন।",
    icon: Pill,
  },
  {
    title: "সমস্যার বিস্তারিত",
    description:
      "লক্ষণ কতদিন ধরে আছে, কখন বাড়ে বা কমে এবং কোনো allergy আছে কি না—এসব তথ্য মনে রাখুন।",
    icon: Clock3,
  },
];

export function ConsultationGuide() {
  return (
    <section
      className="bg-[#F4FAF8] py-20 sm:py-24"
      aria-labelledby="consultation-guide-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-bold tracking-wide text-[#0E6B65]">
                পরামর্শের প্রস্তুতি
              </p>

              <h2
                id="consultation-guide-heading"
                className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C2D35] sm:text-4xl"
              >
                চিকিৎসকের কাছে আসার আগে
              </h2>

              <p className="mt-5 max-w-md leading-8 text-[#61777B]">
                প্রয়োজনীয় তথ্য ও কাগজপত্র সঙ্গে আনলে চিকিৎসক আপনার পূর্ববর্তী
                অবস্থা বুঝে আরও কার্যকরভাবে পরামর্শ দিতে পারবেন।
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {preparationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="h-full rounded-[1.75rem] border border-[#0C2D35]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0E6B65]/20 hover:shadow-lg">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-[#DDF1EC] text-[#0E6B65]">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>

                    <h3 className="mt-5 text-lg font-bold text-[#0C2D35]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#61777B]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col gap-4 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6 sm:flex-row sm:items-start">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <TriangleAlert className="size-5" aria-hidden="true" />
            </span>

            <div>
              <h3 className="font-bold text-amber-950">
                জরুরি চিকিৎসার ক্ষেত্রে
              </h3>

              <p className="mt-2 text-sm leading-7 text-amber-900/80">
                এই ওয়েবসাইট জরুরি চিকিৎসাসেবা প্রদান করে না। শ্বাসকষ্ট,
                অজ্ঞান হয়ে যাওয়া, তীব্র বুকে ব্যথা বা অন্য কোনো জরুরি
                অবস্থায় অপেক্ষা না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে
                যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}