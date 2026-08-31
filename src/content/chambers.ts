import type { Chamber } from "@/types";

/**
 * DEMO CONTENT
 * Production launch-এর আগে চিকিৎসকের verified chamber information
 * এবং সময়সূচি দিয়ে replace করতে হবে।
 */

export const chambers: Chamber[] = [
  {
    id: "dhanmondi-chamber",
    name: "প্রাইমকেয়ার মেডিকেল সেন্টার",
    address: "ধানমন্ডি, ঢাকা-১২০৫",
    visitingDays: "শনিবার, সোমবার ও বুধবার",
    visitingHours: "বিকেল ৫টা থেকে রাত ৯টা",
    appointmentNumber: "01794908771",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Dhanmondi+Dhaka",

    schedule: {
      days: [6, 1, 3],
      startTime: "17:00",
      endTime: "21:00",
    },
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

    schedule: {
      days: [0, 2],
      startTime: "16:00",
      endTime: "20:00",
    },
  },
];