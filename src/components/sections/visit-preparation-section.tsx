"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Check,
  ClipboardCheck,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { doctor } from "@/content/doctor";
import {
  visitPreparationItems,
  type VisitPreparationItem,
} from "@/content/visit-preparation";

function createPreparationWhatsAppUrl() {
  const message = [
    "আসসালামু আলাইকুম,",
    `আমি ${doctor.fullName}-এর কাছে অ্যাপয়েন্টমেন্ট নিতে চাই।`,
    "",
    "রোগীর নাম:",
    "বয়স:",
    "প্রধান স্বাস্থ্যসমস্যা:",
    "সমস্যা কতদিন ধরে:",
    "পছন্দের চেম্বার:",
    "সম্ভাব্য তারিখ:",
  ].join("\n");

  return `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

function ChecklistItem({
  item,
  checked,
  onToggle,
}: {
  item: VisitPreparationItem;
  checked: boolean;
  onToggle: () => void;
}) {
  const descriptionId = `${item.id}-description`;

  return (
    <label
      className={`group flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
        checked
          ? "border-clinical-teal/40 bg-clinical-mint/60"
          : "border-border bg-white hover:border-clinical-teal/30 hover:bg-clinical-surface"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        aria-describedby={descriptionId}
        className="sr-only"
      />

      <span
        className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border transition ${
          checked
            ? "border-clinical-teal bg-clinical-teal text-white"
            : "border-[#A8B7B9] bg-white text-transparent group-hover:border-clinical-teal"
        }`}
        aria-hidden="true"
      >
        <Check className="size-4" strokeWidth={3} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={`font-bold ${
              checked
                ? "text-clinical-teal"
                : "text-clinical-ink"
            }`}
          >
            {item.title}
          </span>

          <span
            className={`rounded-full px-2.5 py-1 text-[0.68rem] font-bold ${
              item.priority === "important"
                ? "bg-[#F4E8D5] text-[#7A5723]"
                : "bg-clinical-surface text-muted-foreground"
            }`}
          >
            {item.priority === "important"
              ? "গুরুত্বপূর্ণ"
              : "সম্ভব হলে"}
          </span>
        </span>

        <span
          id={descriptionId}
          className="mt-2 block text-sm leading-7 text-muted-foreground"
        >
          {item.description}
        </span>
      </span>
    </label>
  );
}

export function VisitPreparationSection() {
  const [completedItems, setCompletedItems] = useState<
    Set<string>
  >(new Set());

  const completedCount = completedItems.size;
  const totalCount = visitPreparationItems.length;

  const progress =
    totalCount > 0
      ? Math.round((completedCount / totalCount) * 100)
      : 0;

  const whatsappUrl = createPreparationWhatsAppUrl();

  function toggleItem(itemId: string) {
    setCompletedItems((currentItems) => {
      const updatedItems = new Set(currentItems);

      if (updatedItems.has(itemId)) {
        updatedItems.delete(itemId);
      } else {
        updatedItems.add(itemId);
      }

      return updatedItems;
    });
  }

  function resetChecklist() {
    setCompletedItems(new Set());
  }

  return (
    <section
      id="visit-preparation"
      aria-labelledby="visit-preparation-heading"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-sm font-bold text-clinical-teal">
            <span
              className="h-px w-9 bg-clinical-gold"
              aria-hidden="true"
            />
         সাক্ষাতের প্রস্তুতি
            <span
              className="h-px w-9 bg-clinical-gold"
              aria-hidden="true"
            />
          </div>

          <h2
            id="visit-preparation-heading"
            className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-clinical-ink sm:text-4xl lg:text-5xl"
          >
            চেম্বারে যাওয়ার আগে প্রস্তুত তো?
          </h2>

          <p className="mt-5 leading-8 text-muted-foreground">
            ছোট এই checklist appointment-এর সময় প্রয়োজনীয় তথ্য,
            report এবং প্রশ্নগুলো গুছিয়ে রাখতে সাহায্য করবে।
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <aside className="overflow-hidden rounded-[2rem] bg-clinical-ink text-white shadow-[0_28px_70px_rgb(8_47_52_/_18%)] lg:sticky lg:top-28">
            <div className="p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#9EDDD4]">
                  <ClipboardCheck
                    className="size-6"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9EDDD4]">
                    আপনার অগ্রগতি
                  </p>
                  <p className="mt-1 font-bold text-white">
                    {completedCount} / {totalCount} সম্পন্ন
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-label={`Checklist ${progress}% সম্পন্ন`}
                  className="flex size-40 items-center justify-center rounded-full p-3"
                  style={{
                    background: `conic-gradient(
                      #9EDDD4 ${progress}%,
                      rgba(255, 255, 255, 0.1) ${progress}%
                    )`,
                  }}
                >
                  <div className="flex size-full flex-col items-center justify-center rounded-full bg-clinical-ink">
                    <span className="text-4xl font-bold text-white">
                      {progress}%
                    </span>
                    <span className="mt-1 text-xs font-semibold text-white/55">
                      প্রস্তুত
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="mt-7 text-center text-sm leading-7 text-white/65"
                aria-live="polite"
              >
                {progress === 100
                  ? "সবগুলো preparation item সম্পন্ন হয়েছে।"
                  : progress >= 50
                    ? "ভালো অগ্রগতি—আর কয়েকটি item বাকি।"
                    : "একটি করে item সম্পন্ন করে checklist এগিয়ে নিন।"}
              </p>

              <button
                type="button"
                onClick={resetChecklist}
                disabled={completedCount === 0}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RotateCcw
                  className="size-4"
                  aria-hidden="true"
                />
                Checklist reset করুন
              </button>
            </div>

            <div className="border-t border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 text-[#9EDDD4]"
                  aria-hidden="true"
                />

                <p className="text-xs leading-6 text-white/55">
                  আপনার checklist selection কোনো server-এ পাঠানো
                  হয় না। Page refresh করলে checklist reset হবে।
                </p>
              </div>
            </div>
          </aside>

          <div>
            <fieldset>
              <legend className="sr-only">
                Appointment preparation checklist
              </legend>

              <div className="grid gap-4">
                {visitPreparationItems.map((item) => (
                  <ChecklistItem
                    key={item.id}
                    item={item}
                    checked={completedItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </fieldset>

            <div className="mt-7 rounded-[1.75rem] border border-border bg-clinical-surface p-6 sm:p-7">
              <h3 className="text-xl font-bold text-clinical-ink">
                এখন appointment নিতে প্রস্তুত?
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                WhatsApp message-এর প্রয়োজনীয় তথ্য পূরণ করে
                appointment request পাঠান।
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-clinical-teal px-5 font-bold text-white transition hover:bg-clinical-teal-dark"
                >
                  <MessageCircle
                    className="size-5"
                    aria-hidden="true"
                  />
                  WhatsApp appointment
                </a>

                <Link
                  href="/health-guides/prepare-for-first-appointment"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 font-bold text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
                >
                  <BookOpen
                    className="size-5"
                    aria-hidden="true"
                  />
                  বিস্তারিত guide পড়ুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}