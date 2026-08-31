import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = createGeneralWhatsAppUrl();
  const primaryChamber = chambers[0];

  const experience = new Intl.NumberFormat("bn-BD").format(
    doctor.yearsOfExperience,
  );

  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-20 bg-[#F8FBFA]"
        aria-hidden="true"
      />

      <div
        className="absolute -left-32 top-20 -z-10 size-80 rounded-full bg-[#DDF1EC]/70 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-[#C79B4B]/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="grid min-h-svh items-center gap-14 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0E6B65]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0E6B65] shadow-sm backdrop-blur">
            <span
              className="size-2 rounded-full bg-[#0E6B65]"
              aria-hidden="true"
            />

            আস্থার সঙ্গে, যত্নের সঙ্গে
          </div>

          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0C2D35] sm:text-5xl lg:text-6xl"
          >
            {doctor.fullName}

            <span className="mt-3 block text-[#0E6B65]">
              {doctor.specialty}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#496469] sm:text-lg">
            {doctor.shortBio}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#0E6B65] px-7 py-3 text-center font-semibold text-white shadow-[0_14px_35px_rgba(14,107,101,0.22)] transition hover:-translate-y-0.5 hover:bg-[#09534F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B65] focus-visible:ring-offset-2 motion-reduce:transform-none"
            >
              <MessageCircle
                className="size-5 shrink-0"
                aria-hidden="true"
              />

              WhatsApp-এ অ্যাপয়েন্টমেন্ট

              <ArrowUpRight
                className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>

            <Link
              href="/chambers"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#0C2D35]/15 bg-white px-7 py-3 text-center font-semibold text-[#0C2D35] transition hover:border-[#0E6B65]/30 hover:bg-[#DDF1EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B65] focus-visible:ring-offset-2"
            >
              <MapPin
                className="size-5 shrink-0"
                aria-hidden="true"
              />

              চেম্বারের তথ্য দেখুন
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-[#0C2D35]/10 pt-7">
            <div>
              <p className="text-2xl font-bold text-[#0C2D35]">
                {experience}+
              </p>

              <p className="mt-1 text-xs leading-5 text-[#496469] sm:text-sm">
                বছরের অভিজ্ঞতা
              </p>
            </div>

            <div className="border-l border-[#0C2D35]/10 pl-4">
              <p className="text-2xl font-bold text-[#0C2D35]">
                {doctor.degrees.length}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#496469] sm:text-sm">
                পেশাগত ডিগ্রি
              </p>
            </div>

            <div className="border-l border-[#0C2D35]/10 pl-4">
              <p className="text-2xl font-bold text-[#0C2D35]">
                সরাসরি
              </p>

              <p className="mt-1 text-xs leading-5 text-[#496469] sm:text-sm">
                WhatsApp যোগাযোগ
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.25rem] border border-[#0C2D35]/10 bg-gradient-to-br from-[#DDF1EC] via-white to-[#F2E7D4] p-6 shadow-[0_35px_90px_rgba(12,45,53,0.14)] sm:min-h-[600px] sm:p-8">
            <div
              className="absolute -right-16 -top-16 size-52 rounded-full border-[32px] border-white/45"
              aria-hidden="true"
            />

            <div
              className="absolute -bottom-24 -left-20 size-64 rounded-full bg-[#0E6B65]/10"
              aria-hidden="true"
            />

            {doctor.designation && (
              <div className="absolute left-6 top-6 z-10 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold text-[#0C2D35] shadow-sm backdrop-blur sm:left-8 sm:top-8">
                {doctor.designation}
              </div>
            )}

            <div className="absolute inset-x-6 bottom-32 top-20 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/45 text-center backdrop-blur-sm sm:inset-x-8 sm:bottom-36">
              <div className="relative h-full w-full">
                <Image
                  src={doctor.profileImage}
                  alt={`${doctor.fullName} - ${doctor.specialty}`}
                  fill
                  sizes="(max-width: 1023px) 90vw, 45vw"
                  className="object-cover"
                  style={{
                    objectPosition: "center 18%",
                  }}
                />
              </div>
            </div>

            {primaryChamber && (
              <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-[#0C2D35]/10 bg-[#0C2D35] p-5 text-white shadow-2xl sm:inset-x-6 sm:bottom-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#8FD8CF]">
                      প্রধান চেম্বার
                    </p>

                    <h2 className="mt-1 text-lg font-bold">
                      {primaryChamber.name}
                    </h2>
                  </div>

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      className="size-4 shrink-0 text-[#8FD8CF]"
                      aria-hidden="true"
                    />

                    <span>{primaryChamber.visitingDays}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3
                      className="size-4 shrink-0 text-[#8FD8CF]"
                      aria-hidden="true"
                    />

                    <span>{primaryChamber.visitingHours}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {doctor.degrees.length > 0 && (
            <div
              className="absolute -left-4 top-1/3 hidden rounded-2xl border border-[#0C2D35]/10 bg-white p-4 shadow-xl xl:block"
              aria-hidden="true"
            >
              <p className="text-xs font-semibold text-[#496469]">
                পেশাগত যোগ্যতা
              </p>

              <p className="mt-1 font-bold text-[#0C2D35]">
                {doctor.degrees.join(" • ")}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}