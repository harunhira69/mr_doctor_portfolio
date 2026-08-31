"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";
import type { Chamber, Weekday } from "@/types";

const BANGLADESH_TIME_ZONE = "Asia/Dhaka";

const weekdayMap: Record<string, Weekday> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

type ChamberAvailability = {
  kind: "upcoming" | "open" | "finished";
  label: string;
};

function subscribeToClock(onChange: () => void) {
  const intervalId = window.setInterval(onChange, 30_000);

  return () => {
    window.clearInterval(intervalId);
  };
}

function getClockSnapshot() {
  return Math.floor(Date.now() / 60_000);
}

function getServerClockSnapshot() {
  return 0;
}

function getBangladeshClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BANGLADESH_TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value;

  const weekdayName = getPart("weekday");
  const hour = Number(getPart("hour"));
  const minute = Number(getPart("minute"));

  if (
    !weekdayName ||
    weekdayMap[weekdayName] === undefined ||
    Number.isNaN(hour) ||
    Number.isNaN(minute)
  ) {
    return null;
  }

  return {
    weekday: weekdayMap[weekdayName],
    currentMinutes: hour * 60 + minute,
  };
}

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
}

function getChamberAvailability(
  chamber: Chamber,
  currentMinutes: number,
): ChamberAvailability {
  const startTime = timeToMinutes(chamber.schedule.startTime);
  const endTime = timeToMinutes(chamber.schedule.endTime);

  if (currentMinutes < startTime) {
    return {
      kind: "upcoming",
      label: "আজকের চেম্বার শুরু হবে",
    };
  }

  if (currentMinutes < endTime) {
    return {
      kind: "open",
      label: "সময়সূচি অনুযায়ী এখন চলছে",
    };
  }

  return {
    kind: "finished",
    label: "আজকের নির্ধারিত সময় শেষ",
  };
}

function getStatusClass(kind: ChamberAvailability["kind"]) {
  if (kind === "open") {
    return "bg-emerald-100 text-emerald-900";
  }

  if (kind === "upcoming") {
    return "bg-amber-100 text-amber-900";
  }

  return "bg-slate-100 text-slate-700";
}

function createChamberWhatsAppUrl(chamber: Chamber) {
  const message = [
    "আসসালামু আলাইকুম,",
    `আমি ${doctor.fullName}-এর কাছে অ্যাপয়েন্টমেন্ট নিতে চাই।`,
    `চেম্বার: ${chamber.name}`,
    `সময়সূচি: ${chamber.visitingDays}, ${chamber.visitingHours}`,
    "",
    "রোগীর নাম:",
    "বয়স:",
    "সম্ভাব্য তারিখ:",
    "প্রধান স্বাস্থ্যসমস্যা:",
  ].join("\n");

  return `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

function TodayChamberCard({
  chamber,
  currentMinutes,
}: {
  chamber: Chamber;
  currentMinutes: number;
}) {
  const availability = getChamberAvailability(
    chamber,
    currentMinutes,
  );

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white text-clinical-ink shadow-[0_28px_70px_rgb(0_0_0_/_18%)]">
      <div className="border-b border-border bg-clinical-ivory px-6 py-5 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-clinical-teal">
            আজকের চেম্বার
          </p>

          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${getStatusClass(
              availability.kind,
            )}`}
          >
            <span
              className="size-2 rounded-full bg-current"
              aria-hidden="true"
            />
            {availability.label}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-clinical-mint text-clinical-teal">
            <MapPin className="size-6" aria-hidden="true" />
          </span>

          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              {chamber.name}
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {chamber.address}
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <CalendarDays
              className="mt-0.5 size-5 shrink-0 text-clinical-teal"
              aria-hidden="true"
            />

            <div>
              <dt className="text-xs font-semibold text-muted-foreground">
                রোগী দেখার দিন
              </dt>
              <dd className="mt-1 font-bold text-clinical-ink">
                {chamber.visitingDays}
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock3
              className="mt-0.5 size-5 shrink-0 text-clinical-teal"
              aria-hidden="true"
            />

            <div>
              <dt className="text-xs font-semibold text-muted-foreground">
                নির্ধারিত সময়
              </dt>
              <dd className="mt-1 font-bold text-clinical-ink">
                {chamber.visitingHours}
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={createChamberWhatsAppUrl(chamber)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-clinical-teal px-5 text-sm font-bold text-white transition hover:bg-clinical-teal-dark"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            অ্যাপয়েন্টমেন্ট নিন
          </a>

          {chamber.mapUrl ? (
            <a
              href={chamber.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-bold text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
            >
              <MapPin className="size-5" aria-hidden="true" />
              ম্যাপে দেখুন
            </a>
          ) : (
            <a
              href={`tel:${chamber.appointmentNumber}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-bold text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
            >
              কল করুন
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function TodayChamberSection() {
  const minuteTick = useSyncExternalStore(
    subscribeToClock,
    getClockSnapshot,
    getServerClockSnapshot,
  );

  const currentDate =
    minuteTick === 0
      ? null
      : new Date(minuteTick * 60_000);

  const bangladeshClock = currentDate
    ? getBangladeshClock(currentDate)
    : null;

  const todayChambers = bangladeshClock
    ? chambers.filter((chamber) =>
        chamber.schedule.days.includes(
          bangladeshClock.weekday,
        ),
      )
    : [];

  const formattedDate = currentDate
    ? new Intl.DateTimeFormat("bn-BD", {
        timeZone: BANGLADESH_TIME_ZONE,
        weekday: "long",
        day: "numeric",
        month: "long",
      }).format(currentDate)
    : "আজকের সময়সূচি";

  return (
    <section
      id="today-chamber"
      aria-labelledby="today-chamber-heading"
      className="relative isolate overflow-hidden bg-clinical-ink py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        className="absolute -left-32 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-clinical-teal/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-32 -top-32 -z-10 size-96 rounded-full bg-clinical-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3 text-sm font-bold text-[#9EDDD4]">
              <span
                className="h-px w-9 bg-clinical-gold"
                aria-hidden="true"
              />
              ডিজিটাল চেম্বার
            </div>

            <h2
              id="today-chamber-heading"
              className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
            >
              আজ কোথায় রোগী দেখবেন?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              দিনের নাম ও বাংলাদেশ সময় অনুযায়ী আজকের নির্ধারিত
              চেম্বারের তথ্য এখানে স্বয়ংক্রিয়ভাবে দেখানো হচ্ছে।
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90">
              <CalendarDays
                className="size-4 text-[#9EDDD4]"
                aria-hidden="true"
              />
              {formattedDate}
            </div>

            <Link
              href="/chambers"
              className="mt-8 flex w-fit items-center gap-2 font-bold text-[#9EDDD4] transition hover:text-white"
            >
              সম্পূর্ণ সময়সূচি দেখুন
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <p className="mt-8 border-l-2 border-clinical-gold pl-4 text-xs leading-6 text-white/55">
              এটি ডেমো সময়সূচি। Production launch-এর আগে চিকিৎসকের
              verified chamber information দিয়ে পরিবর্তন করতে হবে।
            </p>
          </div>

          <div aria-live="polite">
            {!bangladeshClock ? (
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="h-5 w-32 animate-pulse rounded-full bg-white/10" />
                <div className="mt-5 h-8 w-3/4 animate-pulse rounded-lg bg-white/10" />
                <div className="mt-4 h-5 w-1/2 animate-pulse rounded-lg bg-white/10" />
              </div>
            ) : todayChambers.length > 0 ? (
              <div className="grid gap-5">
                {todayChambers.map((chamber) => (
                  <TodayChamberCard
                    key={chamber.id}
                    chamber={chamber}
                    currentMinutes={
                      bangladeshClock.currentMinutes
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-9">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-[#9EDDD4]">
                  <CalendarDays
                    className="size-7"
                    aria-hidden="true"
                  />
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  আজ কোনো নিয়মিত চেম্বার নেই
                </h3>

                <p className="mt-3 max-w-xl leading-8 text-white/65">
                  পরবর্তী চেম্বারের সময় জানতে সম্পূর্ণ সময়সূচি দেখুন
                  অথবা WhatsApp-এর মাধ্যমে যোগাযোগ করুন।
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/chambers"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 font-bold text-clinical-ink transition hover:bg-clinical-mint"
                  >
                    সময়সূচি দেখুন
                    <ArrowRight
                      className="size-4"
                      aria-hidden="true"
                    />
                  </Link>

                  <a
                    href={`https://wa.me/${doctor.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 font-bold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle
                      className="size-5"
                      aria-hidden="true"
                    />
                    WhatsApp করুন
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}