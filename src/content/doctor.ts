import type { DoctorProfile } from "@/types";

/**
 * DEMO CONTENT
 * Production launch-এর আগে client-এর verified তথ্য দিয়ে replace করতে হবে।
 */

export const doctor: DoctorProfile = {
  fullName: "ডা. আরাফ মাহমুদ",
  specialty: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ",
  degrees: ["MBBS", "FCPS (Medicine)"],
  designation: "কনসালট্যান্ট ফিজিশিয়ান",
  organization: "প্রাইমকেয়ার মেডিকেল সেন্টার, ঢাকা",
  yearsOfExperience: 12,

  // Verification ছাড়া BMDC number ব্যবহার করা হবে না।
  bmdcRegistration: "",

  professionalMemberships: [
    "বাংলাদেশ সোসাইটি অব মেডিসিন",
    "ডায়াবেটিক অ্যাসোসিয়েশন অব বাংলাদেশ",
  ],

  shortBio:
    "মেডিসিন ও ডায়াবেটিস চিকিৎসায় অভিজ্ঞ ডা. আরাফ মাহমুদ রোগীর সমস্যা মনোযোগ দিয়ে শোনা, সহজ ভাষায় চিকিৎসা পরিকল্পনা ব্যাখ্যা করা এবং দীর্ঘমেয়াদি স্বাস্থ্য ব্যবস্থাপনায় গুরুত্ব দিয়ে থাকেন।",

  profileImage: "/images/doctor/doctor-profile.webp",
  phone: "+8801794908771",
  whatsapp: "8801794908771",
};