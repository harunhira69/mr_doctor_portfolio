import {
  CalendarCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { AppointmentSheet } from "@/components/appointment/appointment-sheet";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const appointmentSteps = [
  {
    icon: CalendarCheck,
    text: "পছন্দের তারিখ ও সময় নির্বাচন করুন",
  },
  {
    icon: MessageCircle,
    text: "WhatsApp-এ অনুরোধ পাঠান",
  },
  {
    icon: ShieldCheck,
    text: "WhatsApp-এ চূড়ান্ত সময় নিশ্চিত করুন",
  },
];

export function AppointmentCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#0E6B65] px-6 py-12 text-white shadow-[0_30px_90px_rgba(14,107,101,0.22)] sm:px-10 lg:px-16 lg:py-16">
            <div
              className="absolute -right-20 -top-24 size-72 rounded-full border-[45px] border-white/5"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-bold text-[#BDEBE5]">
                  সহজ অ্যাপয়েন্টমেন্ট
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  এখনই WhatsApp-এর মাধ্যমে অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-white/75">
                  Website কোনো ব্যক্তিগত তথ্য সংরক্ষণ করবে না। আপনার
                  দেওয়া তথ্য সরাসরি WhatsApp message-এ যুক্ত হবে।
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                <div className="space-y-5">
                  {appointmentSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.text}
                        className="flex items-center gap-4"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0E6B65]">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>

                        <p className="font-medium text-white/90">
                          {step.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <AppointmentSheet
                  triggerLabel="অ্যাপয়েন্টমেন্ট শুরু করুন"
                  triggerClassName="mt-7 w-full bg-white text-[#0C2D35] hover:bg-[#DDF1EC]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}