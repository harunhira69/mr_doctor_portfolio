import type { Expertise } from "@/types";

export const expertise: Expertise[] = [
  {
    id: "internal-medicine",
    slug: "internal-medicine",
    title: "সাধারণ মেডিসিন",
    description:
      "প্রাপ্তবয়স্ক রোগীদের সাধারণ ও দীর্ঘমেয়াদি শারীরিক সমস্যার মূল্যায়ন এবং প্রয়োজনীয় চিকিৎসা পরামর্শ।",
    icon: "stethoscope",
  },
  {
    id: "diabetes",
    slug: "diabetes",
    title: "ডায়াবেটিস ব্যবস্থাপনা",
    description:
      "রক্তে শর্করার মাত্রা নিয়ন্ত্রণ, জীবনযাত্রা সম্পর্কিত পরামর্শ এবং নিয়মিত ফলো-আপ।",
    icon: "droplets",
  },
  {
    id: "hypertension",
    slug: "hypertension",
    title: "উচ্চ রক্তচাপ",
    description:
      "রক্তচাপ পর্যবেক্ষণ, ঝুঁকি মূল্যায়ন এবং দীর্ঘমেয়াদি স্বাস্থ্য ব্যবস্থাপনা।",
    icon: "heart-pulse",
  },
  {
    id: "thyroid",
    slug: "thyroid",
    title: "থাইরয়েড সমস্যা",
    description:
      "থাইরয়েড হরমোনের ভারসাম্যহীনতা মূল্যায়ন এবং রোগীভিত্তিক চিকিৎসা পরামর্শ।",
    icon: "activity",
  },
  {
    id: "respiratory",
    slug: "respiratory",
    title: "শ্বাসতন্ত্রের সমস্যা",
    description:
      "কাশি, শ্বাসকষ্ট এবং অন্যান্য সাধারণ শ্বাসতন্ত্রের সমস্যার প্রাথমিক মূল্যায়ন।",
    icon: "wind",
  },
  {
    id: "digestive-health",
    slug: "digestive-health",
    title: "পরিপাকতন্ত্রের সমস্যা",
    description:
      "গ্যাস্ট্রিক, বদহজম ও অন্যান্য সাধারণ পরিপাকতন্ত্রের সমস্যার চিকিৎসা পরামর্শ।",
    icon: "pill",
  },
];