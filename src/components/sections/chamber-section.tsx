import {
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";

function createChamberBookingUrl(chamberName: string) {
  const message = [
    "আসসালামু আলাইকুম,",
    `আমি ${doctor.fullName}-এর কাছে অ্যাপয়েন্টমেন্ট নিতে চাই।`,
    `চেম্বার: ${chamberName}`,
    "",
    "রোগীর নাম:",
    "বয়স:",
    "সম্ভাব্য তারিখ:",
    "প্রধান স্বাস্থ্যসমস্যা:",
  ].join("\n");

  return `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function ChamberSection() {
  if (chambers.length === 0) {
    return null;
  }

  return (
    <section
      id="chambers"
      className="bg-white py-20 sm:py-24 lg:py-32"
      aria-labelledby="chambers-heading"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-wide text-[#0E6B65]">
              চেম্বার ও সময়সূচি
            </p>

            <h2
              id="chambers-heading"
              className="mt-4 text-3xl font-bold tracking-[-0.02em] text-[#0C2D35] sm:text-4xl lg:text-5xl"
            >
              আপনার সুবিধাজনক চেম্বার নির্বাচন করুন
            </h2>

            <p className="mt-5 leading-8 text-[#61777B]">
              চেম্বারের ঠিকানা ও সময়সূচি দেখে ফোন অথবা WhatsApp-এর মাধ্যমে
              অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান।
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {chambers.map((chamber, index) => (
            <Reveal
              key={chamber.id}
              delay={index * 0.1}
              className="h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#0C2D35]/10 bg-[#F8FBFA] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0E6B65]/20 hover:shadow-xl">
                <div className="border-b border-[#0C2D35]/10 bg-[#0C2D35] p-7 text-white sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8FD8CF]">
                      <MapPin className="size-6" aria-hidden="true" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#8FD8CF]">
                        চেম্বার {index + 1}
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        {chamber.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {chamber.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <dl
                    className="space-y-5"
                    aria-label={`${chamber.name} চেম্বারের তথ্য`}
                  >
                    <div>
                      <dt className="flex items-start gap-4 text-sm font-semibold text-[#496469]">
                        <CalendarDays
                          className="mt-0.5 size-5 shrink-0 text-[#0E6B65]"
                          aria-hidden="true"
                        />

                        <span>রোগী দেখার দিন</span>
                      </dt>

                      <dd className="ml-9 mt-1 font-bold text-[#0C2D35]">
                        {chamber.visitingDays}
                      </dd>
                    </div>

                    <div>
                      <dt className="flex items-start gap-4 text-sm font-semibold text-[#496469]">
                        <Clock3
                          className="mt-0.5 size-5 shrink-0 text-[#0E6B65]"
                          aria-hidden="true"
                        />

                        <span>সময়</span>
                      </dt>

                      <dd className="ml-9 mt-1 font-bold text-[#0C2D35]">
                        {chamber.visitingHours}
                      </dd>
                    </div>

                    <div>
                      <dt className="flex items-start gap-4 text-sm font-semibold text-[#496469]">
                        <Phone
                          className="mt-0.5 size-5 shrink-0 text-[#0E6B65]"
                          aria-hidden="true"
                        />

                        <span>অ্যাপয়েন্টমেন্ট</span>
                      </dt>

                      <dd className="ml-9 mt-1">
                        <a
                          href={`tel:${chamber.appointmentNumber}`}
                          className="font-bold text-[#0C2D35] transition hover:text-[#0E6B65]"
                          aria-label={`${chamber.name} চেম্বারে ফোন করুন ${chamber.appointmentNumber}`}
                        >
                          {chamber.appointmentNumber}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                      href={createChamberBookingUrl(chamber.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E6B65] px-5 py-3 text-center font-bold text-white transition hover:bg-[#09534F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B65] focus-visible:ring-offset-2"
                    >
                      <MessageCircle className="size-5" aria-hidden="true" />
                      WhatsApp করুন
                    </a>

                    {chamber.mapUrl && (
                      <a
                        href={chamber.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0C2D35]/15 bg-white px-5 py-3 text-center font-bold text-[#0C2D35] transition hover:border-[#0E6B65] hover:text-[#0E6B65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B65] focus-visible:ring-offset-2"
                      >
                        <MapPin className="size-5" aria-hidden="true" />
                        ম্যাপে দেখুন
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900">
            চেম্বারের সময়সূচি পরিবর্তিত হতে পারে। যাওয়ার আগে ফোন অথবা
            WhatsApp-এর মাধ্যমে সময় নিশ্চিত করে নিন।
          </div>
        </Reveal>
      </Container>
    </section>
  );
}