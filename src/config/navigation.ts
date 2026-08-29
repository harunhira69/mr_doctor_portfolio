import type { NavigationItem } from "@/types";

export const navigationItems = [
  {
    label: "হোম",
    href: "/",
  },
  {
    label: "ডাক্তার সম্পর্কে",
    href: "/about",
  },
  {
    label: "বিশেষজ্ঞ সেবা",
    href: "/expertise",
  },
  {
    label: "চেম্বার",
    href: "/chambers",
  },
  {
    label: "যোগাযোগ",
    href: "/contact",
  },
] satisfies NavigationItem[];