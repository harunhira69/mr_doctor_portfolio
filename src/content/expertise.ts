import type { Expertise } from "@/types";

/**
 * DEMO CONTENT
 * Doctor-এর verified specialty পাওয়ার পর update করতে হবে।
 */

export const expertise: Expertise[] = [
  {
    id: "general-medicine",
    slug: "general-medicine",
    title: "সাধারণ মেডিসিন",
    description:
      "জ্বর, দুর্বলতা, মাথাব্যথা, শারীরিক অস্বস্তি এবং প্রাপ্তবয়স্কদের সাধারণ স্বাস্থ্যসমস্যার মূল্যায়ন ও পরামর্শ।",
    icon: "stethoscope",
  },
  {
    id: "diabetes",
    slug: "diabetes",
    title: "ডায়াবেটিস ব্যবস্থাপনা",
    description:
      "রক্তে শর্করার মাত্রা পর্যবেক্ষণ, জীবনযাপন পরিবর্তন এবং নিয়মিত চিকিৎসা ব্যবস্থাপনা বিষয়ে পরামর্শ।",
    icon: "activity",
  },
  {
    id: "hypertension",
    slug: "hypertension",
    title: "উচ্চ রক্তচাপ",
    description:
      "উচ্চ রক্তচাপ শনাক্তকরণ, ঝুঁকি মূল্যায়ন এবং দীর্ঘমেয়াদি নিয়ন্ত্রণের জন্য প্রয়োজনীয় নির্দেশনা।",
    icon: "heart-pulse",
  },
  {
    id: "thyroid",
    slug: "thyroid",
    title: "থাইরয়েড সমস্যা",
    description:
      "থাইরয়েড হরমোনের ভারসাম্যহীনতা সম্পর্কিত লক্ষণ, রিপোর্ট মূল্যায়ন এবং প্রয়োজনীয় চিকিৎসা পরামর্শ।",
    icon: "flask-conical",
  },
  {
    id: "respiratory",
    slug: "respiratory",
    title: "শ্বাসতন্ত্রের সমস্যা",
    description:
      "কাশি, শ্বাসকষ্ট এবং প্রাপ্তবয়স্কদের সাধারণ শ্বাসতন্ত্র-সংক্রান্ত সমস্যার প্রাথমিক মূল্যায়ন।",
    icon: "lungs",
  },
  {
    id: "preventive-care",
    slug: "preventive-care",
    title: "প্রতিরোধমূলক স্বাস্থ্যসেবা",
    description:
      "নিয়মিত স্বাস্থ্য পরীক্ষা, স্বাস্থ্যঝুঁকি মূল্যায়ন এবং সুস্থ জীবনযাপন সম্পর্কিত নির্দেশনা।",
    icon: "shield-check",
  },
];