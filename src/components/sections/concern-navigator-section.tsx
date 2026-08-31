"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Droplets,
  HeartPulse,
  MessageCircle,
  Scale,
  ShieldAlert,
  Stethoscope,
  Thermometer,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import {
  patientConcerns,
  type PatientConcern,
  type PatientConcernId,
} from "@/content/patient-concerns";
import { doctor } from "@/content/doctor";

const concernIcons: Record<PatientConcernId, LucideIcon> = {
  diabetes: Droplets,
  "blood-pressure": HeartPulse,
  fever: Thermometer,
  digestive: Activity,
  fatigue: Scale,
  "general-medicine": Stethoscope,
};

function createConcernWhatsAppUrl(concern: PatientConcern) {
  const message = [
    "আসসালামু আলাইকুম,",
    `আমি ${doctor.fullName}-এর কাছে অ্যাপয়েন্টমেন্ট নিতে চাই।`,
    `পরামর্শের বিষয়: ${concern.title}`,
    "",
    "রোগীর নাম:",
    "বয়স:",
    "প্রধান স্বাস্থ্যসমস্যা:",
    "সমস্যা কতদিন ধরে:",
    "সম্ভাব্য তারিখ:",
  ].join("\n");

  return `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

export function ConcernNavigatorSection() {
  const [activeConcernId, setActiveConcernId] =
    useState<PatientConcernId>(patientConcerns[0].id);

  const activeConcern =
    patientConcerns.find(
      (concern) => concern.id === activeConcernId,
    ) ?? patientConcerns[0];

  return (
    <section
      id="concern-navigator"
      aria-labelledby="concern-navigator-heading"
      className="bg-clinical-ivory py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-sm font-bold text-clinical-teal">
              <span
                className="h-px w-9 bg-clinical-gold"
                aria-hidden="true"
              />
              পরামর্শের বিষয় নির্বাচন
            </div>

            <h2
              id="concern-navigator-heading"
              className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-[-0.03em] text-clinical-ink sm:text-4xl lg:text-5xl"
            >
              কোন সমস্যায় পরামর্শ চান?
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
              আপনার প্রধান উদ্বেগ নির্বাচন করলে appointment-এর আগে
              প্রয়োজনীয় প্রস্তুতি ও relevant health guide দেখতে
              পারবেন।
            </p>

            <div
              className="mt-8 grid grid-cols-2 gap-3"
              aria-label="স্বাস্থ্যসমস্যা নির্বাচন করুন"
            >
              {patientConcerns.map((concern) => {
                const Icon = concernIcons[concern.id];
                const isActive =
                  concern.id === activeConcern.id;

                return (
                  <button
                    key={concern.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() =>
                      setActiveConcernId(concern.id)
                    }
                    className={`group flex min-h-28 flex-col items-start justify-between rounded-2xl border p-4 text-left transition ${
                      isActive
                        ? "border-clinical-teal bg-clinical-teal text-white shadow-[0_16px_35px_rgb(13_118_110_/_18%)]"
                        : "border-border bg-white text-clinical-ink hover:-translate-y-0.5 hover:border-clinical-teal/40"
                    }`}
                  >
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-clinical-mint text-clinical-teal"
                      }`}
                    >
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="mt-4 font-bold leading-6">
                      {concern.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div
              aria-live="polite"
              className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[var(--shadow-soft)]"
            >
              <div className="border-b border-border bg-clinical-ink p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9EDDD4]">
                  নির্বাচিত পরামর্শ
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  {activeConcern.title}
                </h3>

                <p className="mt-4 leading-8 text-white/70">
                  {activeConcern.description}
                </p>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 xl:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-clinical-mint text-clinical-teal">
                      <CheckCircle2
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <h4 className="font-bold text-clinical-ink">
                      Appointment নিতে পারেন
                    </h4>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {activeConcern.appointmentReasons.map(
                      (reason) => (
                        <li
                          key={reason}
                          className="flex gap-3 text-sm leading-7 text-muted-foreground"
                        >
                          <span
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-clinical-teal"
                            aria-hidden="true"
                          />
                          {reason}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#F4E8D5] text-clinical-gold">
                      <ClipboardList
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <h4 className="font-bold text-clinical-ink">
                      সঙ্গে যা আনবেন
                    </h4>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {activeConcern.preparation.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-muted-foreground"
                      >
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-clinical-gold"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-border bg-clinical-surface p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={createConcernWhatsAppUrl(activeConcern)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-clinical-teal px-5 font-bold text-white transition hover:bg-clinical-teal-dark"
                  >
                    <MessageCircle
                      className="size-5"
                      aria-hidden="true"
                    />
                    এই বিষয়ে appointment
                  </a>

                  <Link
                    href={activeConcern.guideHref}
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 font-bold text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
                  >
                    <BookOpen
                      className="size-5"
                      aria-hidden="true"
                    />
                    স্বাস্থ্য গাইড পড়ুন
                    <ArrowRight
                      className="size-4"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-clinical-critical/20 bg-clinical-critical/5 p-5">
              <div className="flex items-start gap-4">
                <ShieldAlert
                  className="mt-0.5 size-6 shrink-0 text-clinical-critical"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-bold text-[#7F1D1D]">
                    জরুরি লক্ষণ হলে appointment-এর জন্য অপেক্ষা করবেন না
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#7F1D1D]/80">
                    তীব্র বা চাপধরা বুকব্যথা, গুরুতর শ্বাসকষ্ট,
                    অচেতন হয়ে যাওয়া অথবা জীবন-ঝুঁকিপূর্ণ পরিস্থিতিতে
                    নিকটস্থ হাসপাতালের জরুরি বিভাগে যান।
                  </p>

                  <a
                    href="tel:333"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-clinical-critical px-5 font-bold text-white transition hover:bg-[#8F2E2E]"
                  >
                    <ShieldAlert
                      className="size-4"
                      aria-hidden="true"
                    />
                    জাতীয় জরুরি সেবা 333
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              এটি কোনো symptom checker, diagnosis অথবা prescription
              service নয়। প্রকাশের আগে সব medical content নিবন্ধিত
              চিকিৎসকের মাধ্যমে review করাতে হবে।
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}