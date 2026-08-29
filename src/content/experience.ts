import type { ExperienceItem } from "@/types";

// Prototype information.
// Website প্রকাশের আগে client-এর মাধ্যমে যাচাই করতে হবে।

export const experience: ExperienceItem[] = [
  {
    id: "current-position",
    period: "বর্তমান",
    title: "কনসালট্যান্ট ফিজিশিয়ান",
    organization: "প্রাইমকেয়ার মেডিকেল সেন্টার, ঢাকা",
    description:
      "প্রাপ্তবয়স্ক রোগীদের সাধারণ মেডিসিন, ডায়াবেটিস এবং দীর্ঘমেয়াদি স্বাস্থ্যসমস্যায় চিকিৎসা পরামর্শ প্রদান।",
  },
  {
    id: "clinical-experience",
    period: "১২+ বছর",
    title: "ক্লিনিক্যাল অভিজ্ঞতা",
    organization: "মেডিসিন ও রোগীসেবা",
    description:
      "বিভিন্ন সাধারণ ও দীর্ঘমেয়াদি স্বাস্থ্যসমস্যায় রোগী মূল্যায়ন, চিকিৎসা পরিকল্পনা এবং নিয়মিত ফলো-আপ।",
  },
  {
    id: "professional-training",
    period: "পেশাগত প্রশিক্ষণ",
    title: "স্নাতকোত্তর মেডিকেল প্রশিক্ষণ",
    organization: "প্রতিষ্ঠানের তথ্য যাচাইাধীন",
    description:
      "Client-এর verified শিক্ষা, প্রশিক্ষণ এবং প্রতিষ্ঠানের তথ্য এখানে যুক্ত করা হবে।",
  },
];