import { siteConfig } from "@/config/site";

export type AppointmentRequest = {
  patientName: string;
  chamberName: string;
  preferredDate: string;
  preferredTime: string;
  patientType: "new" | "follow-up";
};

export function createWhatsAppUrl(
  appointment: AppointmentRequest,
): string {
  const patientType =
    appointment.patientType === "new"
      ? "নতুন রোগী"
      : "ফলো-আপ রোগী";

  const message = [
    "আসসালামু আলাইকুম,",
    "আমি ডাক্তারের একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
    "",
    `রোগীর নাম: ${appointment.patientName}`,
    `চেম্বার: ${appointment.chamberName}`,
    `পছন্দের তারিখ: ${appointment.preferredDate}`,
    `পছন্দের সময়: ${appointment.preferredTime}`,
    `রোগীর ধরন: ${patientType}`,
    "",
    "অনুগ্রহ করে অ্যাপয়েন্টমেন্টের সময় নিশ্চিত করুন।",
  ].join("\n");

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppUrl(): string {
  const message =
    "আসসালামু আলাইকুম, আমি ডাক্তারের অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে চাই।";

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}