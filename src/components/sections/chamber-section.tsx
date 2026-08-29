import {
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

import { AppointmentSheet } from "@/components/appointment/appointment-sheet";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { chambers } from "@/content/chambers";

export function ChamberSection() {
  return (
    <section
      id="chambers"
      className="bg-[#F8FBFA] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="চেম্বার ও সময়সূচি"
            title="আপনার সুবিধাজনক সময়ে পরামর্শ নিন"
            description="চেম্বারের সময়সূচি দেখে WhatsApp-এর মাধ্যমে অ্যাপয়েন্টমেন্টের অনুরোধ পাঠাতে পারেন।"
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:mt-16">
          {chambers.map((chamber, index) => (
            <Reveal key={chamber.id} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-[#0C2D35]/10 bg-white shadow-[0_24px_70px_rgba(12,45,53,0.08)]">
                <div className="grid lg:grid-cols-[1fr_0.72fr]">
                  <div className="p-7 sm:p-10">
                    <div className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0C2D35] text-white">
                        <MapPin className="size-5" aria-hidden="true" />
                      </span>

                      <div>
                        <p className="text-sm font-bold text-[#0E6B65]">
                          চেম্বার {index + 1}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-[#0C2D35]">
                          {chamber.name}
                        </h3>

                        <p className="mt-3 leading-7 text-[#61777B]">
                          {chamber.address}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-[#F8FBFA] p-5">
                        <CalendarDays
                          className="size-5 text-[#0E6B65]"
                          aria-hidden="true"
                        />
                        <p className="mt-3 text-xs font-semibold text-[#61777B]">
                          রোগী দেখার দিন
                        </p>
                        <p className="mt-1 font-bold text-[#0C2D35]">
                          {chamber.visitingDays}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F8FBFA] p-5">
                        <Clock3
                          className="size-5 text-[#0E6B65]"
                          aria-hidden="true"
                        />
                        <p className="mt-3 text-xs font-semibold text-[#61777B]">
                          রোগী দেখার সময়
                        </p>
                        <p className="mt-1 font-bold text-[#0C2D35]">
                          {chamber.visitingHours}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-[#0C2D35] p-7 text-white sm:p-10">
                    <div>
                      <p className="text-sm font-semibold text-[#8FD8CF]">
                        অ্যাপয়েন্টমেন্ট
                      </p>

                      <h3 className="mt-3 text-2xl font-bold leading-tight">
                        WhatsApp অথবা ফোনে যোগাযোগ করুন
                      </h3>

                      <a
                        href={`tel:${chamber.appointmentNumber}`}
                        className="mt-6 flex items-center gap-3 text-lg font-bold"
                      >
                        <Phone
                          className="size-5 text-[#8FD8CF]"
                          aria-hidden="true"
                        />
                        {chamber.appointmentNumber}
                      </a>
                    </div>

                    <div className="mt-8 space-y-3">
                      <AppointmentSheet
                        defaultChamberId={chamber.id}
                        triggerClassName="w-full bg-white text-[#0C2D35] hover:bg-[#DDF1EC]"
                      />

                      {chamber.mapUrl && (
                        <a
                          href={chamber.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          Google Maps দেখুন
                          <ExternalLink
                            className="size-4"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}