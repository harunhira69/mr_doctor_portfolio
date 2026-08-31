export type VisitPreparationItem = {
  id: string;
  title: string;
  description: string;
  priority: "important" | "helpful";
};

export const visitPreparationItems: VisitPreparationItem[] = [
  {
    id: "symptom-timeline",
    title: "সমস্যার timeline লিখে রাখুন",
    description:
      "কখন শুরু হয়েছে, কখন বাড়ে বা কমে এবং দৈনন্দিন কাজে কী প্রভাব ফেলছে—সংক্ষেপে লিখুন।",
    priority: "important",
  },
  {
    id: "medicine-list",
    title: "সব ওষুধের তালিকা সঙ্গে নিন",
    description:
      "Prescription medicine, নিজের কেনা medicine, vitamin বা supplement-এর নাম/ছবি সঙ্গে রাখুন।",
    priority: "important",
  },
  {
    id: "allergy-information",
    title: "Allergy-এর তথ্য মনে রাখুন",
    description:
      "কোনো ওষুধ, খাবার বা অন্য কিছুর allergy থাকলে চিকিৎসককে জানান।",
    priority: "important",
  },
  {
    id: "previous-reports",
    title: "পুরোনো রিপোর্ট ও prescription নিন",
    description:
      "Relevant blood test, imaging report, discharge paper এবং আগের prescription সঙ্গে রাখুন।",
    priority: "important",
  },
  {
    id: "home-readings",
    title: "বাড়িতে মাপা reading সঙ্গে রাখুন",
    description:
      "প্রযোজ্য হলে সাম্প্রতিক blood pressure, glucose অথবা temperature reading লিখে নিন।",
    priority: "helpful",
  },
  {
    id: "questions",
    title: "প্রধান প্রশ্নগুলো লিখে রাখুন",
    description:
      "Appointment-এ যে বিষয়গুলো জানতে চান, সেগুলো আগে থেকে লিখলে গুরুত্বপূর্ণ প্রশ্ন বাদ যাবে না।",
    priority: "helpful",
  },
  {
    id: "appointment-details",
    title: "চেম্বার ও appointment details যাচাই করুন",
    description:
      "তারিখ, সময়, চেম্বারের ঠিকানা এবং যাতায়াতের ব্যবস্থা আগে থেকে নিশ্চিত করুন।",
    priority: "important",
  },
  {
    id: "support-person",
    title: "প্রয়োজনে একজন সহযোগী সঙ্গে রাখুন",
    description:
      "বয়স্ক, শিশু অথবা সহায়তা প্রয়োজন এমন রোগীর সঙ্গে পরিবারের একজন সদস্য থাকতে পারেন।",
    priority: "helpful",
  },
];