import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { doctor } from "@/content/doctor";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = createGeneralWhatsAppUrl();

  const experience = new Intl.NumberFormat("bn-BD").format(
    doctor.yearsOfExperience,
  );

  const visibleDegrees = doctor.degrees.slice(0, 2).join(" • ");

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-clinical-ivory">
      <div
        className="absolute inset-y-0 left-[56%] -z-10 hidden w-px bg-border/70 lg:block"
        aria-hidden="true"
      />

      <div
        className="absolute -left-40 top-20 -z-10 size-96 rounded-full bg-clinical-mint/80 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-40 bottom-0 -z-10 size-[28rem] rounded-full bg-clinical-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="grid items-center gap-14 py-14 lg:min-h-[calc(100svh-6.75rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:py-16">
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-sm font-bold text-clinical-teal">
            <span
              className="h-px w-9 bg-clinical-gold"
              aria-hidden="true"
            />

            ব্যক্তিকেন্দ্রিক চিকিৎসা ও দীর্ঘমেয়াদি যত্ন
          </div>

          <h1 className="mt-7 max-w-3xl">
            <span className="block text-[clamp(2.8rem,6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.045em] text-clinical-ink">
              {doctor.fullName}
            </span>

            <span className="mt-5 block max-w-2xl text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.14] tracking-[-0.035em] text-clinical-teal">
              {doctor.specialty}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {doctor.shortBio}
          </p>

          <div className="mt-8 grid max-w-2xl gap-4 border-y border-border py-5 sm:grid-cols-2">
            <div className="border-l-2 border-clinical-gold pl-4">
              <p className="text-xs font-bold tracking-wide text-muted-foreground">
                বর্তমান দায়িত্ব
              </p>

              <p className="mt-1.5 font-bold leading-6 text-clinical-ink">
                {doctor.designation}
              </p>
            </div>

            <div className="border-l-2 border-clinical-teal pl-4">
              <p className="text-xs font-bold tracking-wide text-muted-foreground">
                পেশাগত যোগ্যতা
              </p>

              <p className="mt-1.5 font-bold leading-6 text-clinical-ink">
                {visibleDegrees}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-clinical-teal px-7 font-bold text-white shadow-[0_16px_38px_rgb(13_118_110_/_20%)] transition hover:-translate-y-0.5 hover:bg-clinical-teal-dark"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp-এ অ্যাপয়েন্টমেন্ট

              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <Link
              href="/chambers"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 font-bold text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
            >
              <MapPin className="size-5" aria-hidden="true" />
              চেম্বারের তথ্য
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck
                className="size-4.5 text-clinical-teal"
                aria-hidden="true"
              />
              চিকিৎসকের পেশাগত পরিচিতি
            </div>

            <div>
              <strong className="text-clinical-ink">{experience}+</strong>{" "}
              বছরের অভিজ্ঞতা
            </div>

            <div>সরাসরি WhatsApp যোগাযোগ</div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[35rem] pb-20 pt-8 lg:pb-24">
          <div
            className="absolute bottom-28 right-0 top-0 w-[78%] bg-clinical-mint"
            aria-hidden="true"
          />

          <div
            className="absolute right-[78%] top-0 h-24 w-px bg-clinical-gold"
            aria-hidden="true"
          />

          <div
            className="absolute right-[calc(78%+0.65rem)] top-0 hidden text-xs font-bold tracking-[0.18em] text-clinical-gold [writing-mode:vertical-rl] sm:block"
            aria-hidden="true"
          >
            পরিচিতি ০১
          </div>

          <figure className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-b-[2rem] rounded-t-[12rem] border border-white bg-[#EEE6D8] shadow-[var(--shadow-floating)]">
            <Image
              src={doctor.profileImage}
              alt={`${doctor.fullName} — ${doctor.specialty}`}
              fill
              loading="eager"
              fetchPriority="high"
              quality={75}
              sizes="(max-width: 1023px) 88vw, 44vw"
              className="object-cover"
              style={{ objectPosition: "center 18%" }}
            />

            <div
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-clinical-ink/35 to-transparent"
              aria-hidden="true"
            />

            <figcaption className="sr-only">
              {doctor.fullName}, {doctor.specialty}
            </figcaption>
          </figure>

          <div className="absolute left-0 top-[30%] hidden max-w-56 border-l-4 border-clinical-gold bg-white px-5 py-4 shadow-[var(--shadow-medium)] sm:block">
            <p className="text-xs font-bold text-muted-foreground">
              চিকিৎসকের পরিচয়
            </p>

            <p className="mt-2 font-bold leading-6 text-clinical-ink">
              {doctor.designation}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}