import type { Chamber } from "@/types";

/**
 * DEMO CONTENT
 * Production launch-এর আগে প্রকৃত chamber তথ্য দিয়ে replace করতে হবে।
 */

export const chambers: Chamber[] = [
  {
    id: "dhanmondi-chamber",
    name: "প্রাইমকেয়ার মেডিকেল সেন্টার",
    address: "ধানমন্ডি, ঢাকা-১২০৫",
    visitingDays: "শনিবার, সোমবার ও বুধবার",
    visitingHours: "বিকেল ৫টা থেকে রাত ৯টা",
    appointmentNumber: "01794908771",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Dhanmondi+Dhaka",
  },
  {
    id: "uttara-chamber",
    name: "সিটি হেলথ কনসালটেশন সেন্টার",
    address: "উত্তরা, ঢাকা-১২৩০",
    visitingDays: "রবিবার ও মঙ্গলবার",
    visitingHours: "বিকেল ৪টা থেকে রাত ৮টা",
    appointmentNumber: "01794908771",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Uttara+Dhaka",
  },
];