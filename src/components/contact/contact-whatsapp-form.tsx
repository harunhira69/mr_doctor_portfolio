"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";

type ContactFormData = {
  patientName: string;
  phone: string;
  chamber: string;
  preferredDate: string;
  message: string;
};

const initialFormData: ContactFormData = {
  patientName: "",
  phone: "",
  chamber: chambers[0]?.name ?? "",
  preferredDate: "",
  message: "",
};

export function ContactWhatsAppForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [error, setError] = useState("");

  function updateField(
    field: keyof ContactFormData,
    value: string,
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.patientName.trim() || !formData.phone.trim()) {
      setError("রোগীর নাম ও ফোন নম্বর লিখুন।");
      return;
    }

    const whatsappMessage = [
      "আসসালামু আলাইকুম,",
      `আমি ${doctor.fullName}-এর কাছে অ্যাপয়েন্টমেন্ট নিতে চাই।`,
      "",
      `রোগীর নাম: ${formData.patientName.trim()}`,
      `ফোন নম্বর: ${formData.phone.trim()}`,
      formData.chamber
        ? `পছন্দের চেম্বার: ${formData.chamber}`
        : "",
      formData.preferredDate
        ? `সম্ভাব্য তারিখ: ${formData.preferredDate}`
        : "",
      formData.message.trim()
        ? `সংক্ষিপ্ত বার্তা: ${formData.message.trim()}`
        : "",
      "",
      "অনুগ্রহ করে অ্যাপয়েন্টমেন্টের সময় নিশ্চিত করুন।",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#0C2D35]/10 bg-white p-6 shadow-xl shadow-[#0C2D35]/5 sm:p-8"
      noValidate
    >
      <div>
        <p className="text-sm font-bold text-[#0E6B65]">
          অ্যাপয়েন্টমেন্ট অনুরোধ
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#0C2D35] sm:text-3xl">
          WhatsApp-এ যোগাযোগ করুন
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#61777B]">
          প্রয়োজনীয় তথ্য পূরণ করলে WhatsApp-এ একটি প্রস্তুত message খুলবে।
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="patient-name">
            রোগীর নাম <span className="text-red-600">*</span>
          </Label>

          <Input
            id="patient-name"
            name="patientName"
            value={formData.patientName}
            onChange={(event) =>
              updateField("patientName", event.target.value)
            }
            placeholder="রোগীর পূর্ণ নাম"
            autoComplete="name"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="patient-phone">
            ফোন নম্বর <span className="text-red-600">*</span>
          </Label>

          <Input
            id="patient-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={(event) =>
              updateField("phone", event.target.value)
            }
            placeholder="01XXXXXXXXX"
            autoComplete="tel"
            required
          />
        </div>

        {chambers.length > 0 && (
          <div className="grid gap-2">
            <Label htmlFor="preferred-chamber">
              পছন্দের চেম্বার
            </Label>

            <select
              id="preferred-chamber"
              name="chamber"
              value={formData.chamber}
              onChange={(event) =>
                updateField("chamber", event.target.value)
              }
              className="flex min-h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-[#0C2D35] outline-none transition focus:border-[#0E6B65] focus:ring-2 focus:ring-[#0E6B65]/20"
            >
              {chambers.map((chamber) => (
                <option key={chamber.id} value={chamber.name}>
                  {chamber.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid gap-2">
          <Label htmlFor="preferred-date">
            সম্ভাব্য তারিখ
          </Label>

          <div className="relative">
            <CalendarDays
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#61777B]"
              aria-hidden="true"
            />

            <Input
              id="preferred-date"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={(event) =>
                updateField("preferredDate", event.target.value)
              }
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="patient-message">
            সংক্ষিপ্ত বার্তা
          </Label>

          <textarea
            id="patient-message"
            name="message"
            value={formData.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            placeholder="আপনার যোগাযোগের কারণ সংক্ষেপে লিখুন"
            rows={4}
            maxLength={500}
            className="w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-[#0C2D35] outline-none transition placeholder:text-slate-400 focus:border-[#0E6B65] focus:ring-2 focus:ring-[#0E6B65]/20"
          />
        </div>
      </div>

      {error && (
        <p
          className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          role="alert"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        className="mt-7 min-h-12 w-full rounded-full bg-[#0E6B65] font-bold text-white hover:bg-[#09534F]"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp-এ অনুরোধ পাঠান
      </Button>

      <div className="mt-5 flex items-start gap-2 text-xs leading-6 text-[#61777B]">
        <ShieldCheck
          className="mt-0.5 size-4 shrink-0 text-[#0E6B65]"
          aria-hidden="true"
        />

        <p>
          এই form কোনো তথ্য সংরক্ষণ করে না। Button-এ ক্লিক করলে তথ্যগুলো
          WhatsApp message হিসেবে তৈরি হবে। সংবেদনশীল চিকিৎসা তথ্য এখানে
          না লেখাই ভালো।
        </p>
      </div>
    </form>
  );
}