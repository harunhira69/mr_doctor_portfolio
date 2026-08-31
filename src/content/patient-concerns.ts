export type PatientConcernId =
  | "diabetes"
  | "blood-pressure"
  | "fever"
  | "digestive"
  | "fatigue"
  | "general-medicine";

export type PatientConcern = {
  id: PatientConcernId;
  shortLabel: string;
  title: string;
  description: string;
  appointmentReasons: string[];
  preparation: string[];
  guideHref: string;
};

export const patientConcerns: PatientConcern[] = [
  {
    id: "diabetes",
    shortLabel: "ডায়াবেটিস",
    title: "রক্তে শর্করা ও ডায়াবেটিস ব্যবস্থাপনা",
    description:
      "রক্তে শর্করার পরিবর্তন, অতিরিক্ত তৃষ্ণা, ঘন ঘন প্রস্রাব অথবা চলমান ডায়াবেটিস চিকিৎসার follow-up-এর জন্য পরামর্শ নিতে পারেন।",
    appointmentReasons: [
      "রক্তে শর্করার রিপোর্ট স্বাভাবিক সীমার বাইরে থাকা",
      "চলমান ডায়াবেটিস চিকিৎসার নিয়মিত follow-up",
      "ওষুধ, খাবার ও দৈনন্দিন ব্যবস্থাপনা নিয়ে প্রশ্ন",
    ],
    preparation: [
      "সাম্প্রতিক blood glucose বা HbA1c রিপোর্ট",
      "বর্তমানে গ্রহণ করা ওষুধের তালিকা",
      "কয়েক দিনের glucose reading থাকলে সেটি",
    ],
    guideHref: "/health-guides/diabetes-daily-management",
  },
  {
    id: "blood-pressure",
    shortLabel: "রক্তচাপ",
    title: "উচ্চ রক্তচাপ ও নিয়মিত পর্যবেক্ষণ",
    description:
      "উচ্চ রক্তচাপে অনেক সময় স্পষ্ট লক্ষণ নাও থাকতে পারে। বারবার বেশি reading পাওয়া অথবা চলমান চিকিৎসার follow-up-এর জন্য মূল্যায়ন প্রয়োজন হতে পারে।",
    appointmentReasons: [
      "একাধিকবার উচ্চ blood pressure reading পাওয়া",
      "রক্তচাপের চলমান চিকিৎসা পর্যবেক্ষণ",
      "ওষুধ গ্রহণের পর নতুন কোনো সমস্যা বা প্রশ্ন",
    ],
    preparation: [
      "বাড়িতে মাপা সাম্প্রতিক blood pressure reading",
      "বর্তমানে গ্রহণ করা সব ওষুধের নাম",
      "আগের prescription এবং relevant test report",
    ],
    guideHref: "/health-guides/understanding-blood-pressure",
  },
  {
    id: "fever",
    shortLabel: "জ্বর ও সংক্রমণ",
    title: "জ্বর, কাশি ও সাধারণ সংক্রমণ",
    description:
      "কয়েকদিন ধরে জ্বর, কাশি, দুর্বলতা অথবা সাধারণ সংক্রমণ-সম্পর্কিত সমস্যার প্রাথমিক মূল্যায়নের জন্য appointment নিতে পারেন।",
    appointmentReasons: [
      "জ্বর কয়েকদিন ধরে চলতে থাকা",
      "কাশি, গলা ব্যথা অথবা শরীর ব্যথা",
      "অসুস্থতার পর দীর্ঘদিন দুর্বলতা থাকা",
    ],
    preparation: [
      "কতদিন ধরে সমস্যা হচ্ছে তা লিখে রাখুন",
      "শরীরের তাপমাত্রার সাম্প্রতিক reading",
      "সম্প্রতি গ্রহণ করা ওষুধের তালিকা",
    ],
    guideHref: "/health-guides",
  },
  {
    id: "digestive",
    shortLabel: "পেটের সমস্যা",
    title: "হজম, ক্ষুধা ও পেটের অস্বস্তি",
    description:
      "দীর্ঘদিনের বদহজম, পেটের অস্বস্তি, ক্ষুধার পরিবর্তন অথবা bowel habit পরিবর্তনের সাধারণ মূল্যায়নের জন্য পরামর্শ নিতে পারেন।",
    appointmentReasons: [
      "নিয়মিত বদহজম অথবা পেট ফাঁপা",
      "পেটের অস্বস্তি বা ক্ষুধার পরিবর্তন",
      "আগের সমস্যার follow-up প্রয়োজন",
    ],
    preparation: [
      "কোন খাবারের পর সমস্যা বাড়ে তা লিখে রাখুন",
      "আগের test report বা prescription",
      "বর্তমানে গ্রহণ করা ওষুধের তালিকা",
    ],
    guideHref: "/health-guides",
  },
  {
    id: "fatigue",
    shortLabel: "দুর্বলতা",
    title: "দীর্ঘদিনের দুর্বলতা ও ওজনের পরিবর্তন",
    description:
      "পর্যাপ্ত বিশ্রামের পরও দুর্বলতা, দৈনন্দিন কাজে শক্তির ঘাটতি অথবা কারণ ছাড়া ওজন পরিবর্তনের মূল্যায়নের জন্য পরামর্শ নিতে পারেন।",
    appointmentReasons: [
      "দীর্ঘদিন ধরে অস্বাভাবিক ক্লান্তি",
      "কারণ ছাড়া ওজন বাড়া বা কমা",
      "কাজের সক্ষমতা বা ঘুমের ধরনে পরিবর্তন",
    ],
    preparation: [
      "সমস্যা কতদিন ধরে চলছে তা লিখে রাখুন",
      "ওজন পরিবর্তনের আনুমানিক timeline",
      "আগের blood test report থাকলে সঙ্গে আনুন",
    ],
    guideHref: "/health-guides",
  },
  {
    id: "general-medicine",
    shortLabel: "সাধারণ মেডিসিন",
    title: "একাধিক বা অনির্দিষ্ট স্বাস্থ্যসমস্যা",
    description:
      "একসঙ্গে একাধিক সমস্যা, পুরোনো report বুঝতে অসুবিধা অথবা কোন specialist-এর পরামর্শ প্রয়োজন তা বুঝতে সাধারণ medicine consultation নিতে পারেন।",
    appointmentReasons: [
      "একাধিক স্বাস্থ্যসমস্যা একসঙ্গে থাকা",
      "পুরোনো report বা prescription review",
      "নিয়মিত স্বাস্থ্য follow-up প্রয়োজন",
    ],
    preparation: [
      "সব পুরোনো report ও prescription",
      "বর্তমানে গ্রহণ করা ওষুধের সম্পূর্ণ তালিকা",
      "প্রধান প্রশ্নগুলো আগে থেকে লিখে রাখুন",
    ],
    guideHref: "/health-guides/prepare-for-first-appointment",
  },
];