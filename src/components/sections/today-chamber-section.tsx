"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
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
      label: "আজকের চেম্বার সামনে",
    };
  }

  if (currentMinutes < endTime) {
    return {
      kind: "open",
      label: "সময়সূচি অনুযায়ী চলছে",
    };
  }

  return {
    kind: "finished",
    label: "আজকের সময় শেষ",
  };
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

function AvailabilityBadge({
  availability,
}: {
  availability: ChamberAvailability;
}) {
  const isOpen = availability.kind === "open";
  const isUpcoming = availability.kind === "upcoming";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold ${
        isOpen
          ? "bg-emerald-100 text-emerald-900"
          : isUpcoming
            ? "bg-amber-100 text-amber-900"
            : "bg-slate-100 text-slate-700"
      }`}
    >
      <span
        className="size-1.5 rounded-full bg-current"
        aria-hidden="true"
      />

      {availability.label}
    </span>
  );
}

function ChamberCard({
  chamber,
  currentMinutes,
  isToday,
}: {
  chamber: Chamber;
  currentMinutes: number | null;
  isToday: boolean;
}) {
  const availability =
    isToday && currentMinutes !== null
      ? getChamberAvailability(chamber, currentMinutes)
      : null;

  return (
    <article className="group relative overflow-hidden rounded-[1.35rem] border border-clinical-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-clinical-teal/30 hover:shadow-[0_24px_60px_rgb(20_50_48_/_10%)]">
      <div className="border-b border-border/70 px-6 py-5 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-clinical-teal">
            <MapPin className="size-4" aria-hidden="true" />

            {isToday ? "আজকের চেম্বার" : "চেম্বার"}
          </div>

          {availability && (
            <AvailabilityBadge availability={availability} />
          )}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="max-w-md text-2xl font-semibold tracking-tight text-clinical-ink sm:text-[1.7rem]">
          {chamber.name}
        </h3>

        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {chamber.address}
        </p>

        <div className="mt-7 grid gap-4 border-y border-border/70 py-5 sm:grid-cols-2">
          <div className="flex gap-3">
            <CalendarDays
              className="mt-0.5 size-5 shrink-0 text-clinical-teal"
              aria-hidden="true"
            />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                রোগী দেখার দিন
              </p>

              <p className="mt-1 text-sm font-semibold leading-6 text-clinical-ink">
                {chamber.visitingDays}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock3
              className="mt-0.5 size-5 shrink-0 text-clinical-teal"
              aria-hidden="true"
            />

            <div>
              <p className="text-xs font-medium text-muted-foreground">
                নির্ধারিত সময়
              </p>

              <p className="mt-1 text-sm font-semibold leading-6 text-clinical-ink">
                {chamber.visitingHours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={createChamberWhatsAppUrl(chamber)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-clinical-teal px-5 text-sm font-semibold text-white transition hover:bg-clinical-teal-dark sm:flex-none"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            অ্যাপয়েন্টমেন্ট
          </a>

          {chamber.mapUrl && (
            <a
              href={chamber.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal sm:flex-none"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              ম্যাপ
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
    minuteTick === 0 ? null : new Date(minuteTick * 60_000);

  const bangladeshClock = currentDate
    ? getBangladeshClock(currentDate)
    : null;

  const todayChambers = bangladeshClock
    ? chambers.filter((chamber) =>
        chamber.schedule.days.includes(bangladeshClock.weekday),
      )
    : [];

  const otherChambers = bangladeshClock
    ? chambers.filter(
        (chamber) =>
          !chamber.schedule.days.includes(bangladeshClock.weekday),
      )
    : chambers;

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
      className="section-space overflow-hidden bg-clinical-ivory"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="editorial-eyebrow">
              <span>WHERE & WHEN TO SEE THE DOCTOR</span>
            </div>

            <h2
              id="today-chamber-heading"
              className="editorial-title mt-5 max-w-xl"
            >
              কোথায় এবং কখন
              <br />
              <span className="text-clinical-teal">
                দেখা করবেন?
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:max-w-xl">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              আপনার সুবিধামতো চেম্বার বেছে নেওয়ার জন্য প্রয়োজনীয়
              ঠিকানা, দিন ও সময় এক জায়গায় দেখুন। যাওয়ার আগে ফোন অথবা
              WhatsApp-এর মাধ্যমে সময় নিশ্চিত করে নেওয়া ভালো।
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clinical-ink">
              <CalendarDays
                className="size-4 text-clinical-teal"
                aria-hidden="true"
              />

              {formattedDate}
            </div>
          </div>
        </div>

        {/* Today */}
        <div className="mt-12">
          {todayChambers.length > 0 ? (
            <>
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2
                  className="size-5 text-clinical-teal"
                  aria-hidden="true"
                />

                <p className="text-sm font-semibold text-clinical-ink">
                  আজকের নির্ধারিত চেম্বার
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {todayChambers.map((chamber) => (
                  <ChamberCard
                    key={chamber.id}
                    chamber={chamber}
                    currentMinutes={
                      bangladeshClock?.currentMinutes ?? null
                    }
                    isToday
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-[1.35rem] border border-clinical-ink/10 bg-white p-7 sm:p-9">
              <div className="flex size-12 items-center justify-center rounded-full bg-clinical-mint text-clinical-teal">
                <CalendarDays
                  className="size-5"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-clinical-ink">
                আজ নিয়মিত চেম্বার নেই
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                নিচের নিয়মিত চেম্বারগুলোর সময়সূচি দেখে আপনার
                সুবিধামতো দিন বেছে নিতে পারেন।
              </p>
            </div>
          )}
        </div>

        {/* Other chambers */}
        {otherChambers.length > 0 && (
          <div className="mt-14">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-clinical-ink">
                  অন্যান্য নিয়মিত চেম্বার
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  নিয়মিত সময়সূচি
                </p>
              </div>

              <Link
                href="/chambers"
                className="hidden items-center gap-2 text-sm font-semibold text-clinical-teal transition hover:text-clinical-ink sm:flex"
              >
                সম্পূর্ণ সময়সূচি
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {otherChambers.map((chamber) => (
                <ChamberCard
                  key={chamber.id}
                  chamber={chamber}
                  currentMinutes={null}
                  isToday={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-5 border-t border-clinical-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl border-l-2 border-clinical-gold pl-4 text-xs leading-6 text-muted-foreground">
            চেম্বারের সময়সূচি পরিবর্তিত হতে পারে। যাওয়ার আগে
            ফোন অথবা WhatsApp-এর মাধ্যমে সময় নিশ্চিত করে নিন।
          </p>

          <Link
            href="/chambers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-clinical-ink transition hover:text-clinical-teal"
          >
            সব চেম্বার দেখুন
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}