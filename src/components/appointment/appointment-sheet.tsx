"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { chambers } from "@/content/chambers";
import {
  createWhatsAppUrl,
  type AppointmentRequest,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type AppointmentSheetProps = {
  defaultChamberId?: string;
  triggerLabel?: string;
  triggerClassName?: string;
};

export function AppointmentSheet({
  defaultChamberId,
  triggerLabel = "অ্যাপয়েন্টমেন্ট নিন",
  triggerClassName,
}: AppointmentSheetProps) {
  const [patientName, setPatientName] = useState("");
  const [chamberId, setChamberId] = useState(
    defaultChamberId ?? chambers[0]?.id ?? "",
  );
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [patientType, setPatientType] =
    useState<AppointmentRequest["patientType"]>("new");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedChamber = chambers.find(
      (chamber) => chamber.id === chamberId,
    );

    if (!selectedChamber) {
      return;
    }

    const whatsappUrl = createWhatsAppUrl({
      patientName,
      chamberName: selectedChamber.name,
      preferredDate,
      preferredTime,
      patientType,
    });

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0E6B65] px-6 font-semibold text-white transition hover:bg-[#09534F]",
          triggerClassName,
        )}
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        {triggerLabel}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-[#0C2D35]/10 bg-[#F8FBFA] sm:max-w-lg"
      >
        <SheetHeader className="border-b border-[#0C2D35]/10">
          <SheetTitle className="text-left text-2xl text-[#0C2D35]">
            অ্যাপয়েন্টমেন্টের অনুরোধ
          </SheetTitle>

          <SheetDescription className="text-left leading-7">
            প্রয়োজনীয় তথ্য পূরণ করলে WhatsApp-এ একটি প্রস্তুত message
            খুলবে। চূড়ান্ত সময় WhatsApp-এ নিশ্চিত করা হবে।
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-4 pb-8 pt-6"
        >
          <div className="space-y-2">
            <Label htmlFor="patient-name">রোগীর নাম</Label>

            <Input
              id="patient-name"
              value={patientName}
              onChange={(event) =>
                setPatientName(event.target.value)
              }
              placeholder="রোগীর পূর্ণ নাম লিখুন"
              autoComplete="name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chamber">চেম্বার নির্বাচন করুন</Label>

            <select
              id="chamber"
              value={chamberId}
              onChange={(event) =>
                setChamberId(event.target.value)
              }
              required
              className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-[#18343A] outline-none transition focus:border-[#0E6B65] focus:ring-2 focus:ring-[#0E6B65]/15"
            >
              {chambers.map((chamber) => (
                <option key={chamber.id} value={chamber.id}>
                  {chamber.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="preferred-date">
                পছন্দের তারিখ
              </Label>

              <div className="relative">
                <CalendarDays
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#61777B]"
                  aria-hidden="true"
                />

                <Input
                  id="preferred-date"
                  type="date"
                  value={preferredDate}
                  onChange={(event) =>
                    setPreferredDate(event.target.value)
                  }
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferred-time">
                পছন্দের সময়
              </Label>

              <div className="relative">
                <Clock3
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#61777B]"
                  aria-hidden="true"
                />

                <Input
                  id="preferred-time"
                  type="time"
                  value={preferredTime}
                  onChange={(event) =>
                    setPreferredTime(event.target.value)
                  }
                  className="pl-9"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="patient-type">রোগীর ধরন</Label>

            <select
              id="patient-type"
              value={patientType}
              onChange={(event) =>
                setPatientType(
                  event.target
                    .value as AppointmentRequest["patientType"],
                )
              }
              className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-[#18343A] outline-none transition focus:border-[#0E6B65] focus:ring-2 focus:ring-[#0E6B65]/15"
            >
              <option value="new">নতুন রোগী</option>
              <option value="follow-up">ফলো-আপ রোগী</option>
            </select>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-[#DDF1EC]/70 p-4 text-sm leading-6 text-[#31565B]">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-[#0E6B65]"
              aria-hidden="true"
            />

            <p>
              এই website কোনো তথ্য সংরক্ষণ করে না। তথ্যগুলো শুধু
              WhatsApp message তৈরি করতে ব্যবহার করা হবে।
            </p>
          </div>

          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0E6B65] px-6 font-semibold text-white transition hover:bg-[#09534F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B65] focus-visible:ring-offset-2"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            WhatsApp-এ চালিয়ে যান
          </button>
        </form>
      </SheetContent>
    </Sheet>
  );
}