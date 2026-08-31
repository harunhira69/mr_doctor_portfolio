export type HealthGuideSection = {
  heading: string;
  paragraphs?: string[];
  points?: string[];
};

export type HealthGuide = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  intro: string;
  image: string;
  alt: string;
  readingTime: string;
  reviewStatus: string;
  sourceName: string;
  sourceUrl: string;
  sections: HealthGuideSection[];
};

export const healthGuides: HealthGuide[] = [
  {
    slug: "diabetes-daily-management",
    title: "ডায়াবেটিস নিয়ন্ত্রণে দৈনন্দিন করণীয়",
    category: "ডায়াবেটিস",
    excerpt:
      "স্বাস্থ্যকর খাবার, নিয়মিত শারীরিক কার্যক্রম, চিকিৎসকের পরামর্শ অনুযায়ী ওষুধ এবং প্রয়োজনীয় পরীক্ষা—ডায়াবেটিস ব্যবস্থাপনার গুরুত্বপূর্ণ অংশ।",
    intro:
      "ডায়াবেটিস ব্যবস্থাপনা ব্যক্তিভেদে আলাদা হতে পারে। চিকিৎসকের পরিকল্পনা অনুসরণ করার পাশাপাশি দৈনন্দিন কিছু অভ্যাস রক্তের glucose নিয়ন্ত্রণ এবং দীর্ঘমেয়াদি জটিলতার ঝুঁকি কমাতে সাহায্য করতে পারে।",
    image: "/images/health-guides/1.png",
    alt: "ডায়াবেটিস ব্যবস্থাপনার জন্য গ্লুকোমিটার ও স্বাস্থ্যকর খাবার",
    readingTime: "৪ মিনিট",
    reviewStatus: "প্রকাশের আগে চিকিৎসকের পর্যালোচনা প্রয়োজন",
    sourceName: "World Health Organization",
    sourceUrl:
      "https://www.who.int/news-room/fact-sheets/detail/diabetes",
    sections: [
      {
        heading: "নিয়মিত পর্যবেক্ষণ",
        paragraphs: [
          "চিকিৎসক যেভাবে পরামর্শ দিয়েছেন সেভাবে blood glucose পরীক্ষা করুন এবং ফলাফল লিখে রাখুন। একটি measurement দেখে নিজে থেকে medicine পরিবর্তন করবেন না।",
        ],
        points: [
          "পরীক্ষার তারিখ ও সময় লিখে রাখুন",
          "অস্বাভাবিক ফলাফল হলে চিকিৎসককে জানান",
          "পরবর্তী সাক্ষাতে glucose record সঙ্গে নিন",
        ],
      },
      {
        heading: "খাবার ও দৈনন্দিন অভ্যাস",
        paragraphs: [
          "পরিমাণ নিয়ন্ত্রণ, পর্যাপ্ত শাকসবজি, balanced খাবার এবং অতিরিক্ত চিনি বা sugary drink কমানো সাধারণভাবে উপকারী হতে পারে। ব্যক্তিগত খাদ্যতালিকার জন্য চিকিৎসক বা dietitian-এর পরামর্শ প্রয়োজন।",
        ],
        points: [
          "নিয়মিত সময়ে খাবার গ্রহণ করুন",
          "পর্যাপ্ত পানি পান করুন",
          "তামাক ব্যবহার এড়িয়ে চলুন",
          "শারীরিক কার্যক্রম সম্পর্কে চিকিৎসকের নির্দেশনা নিন",
        ],
      },
      {
        heading: "Follow-up কেন গুরুত্বপূর্ণ",
        paragraphs: [
          "ডায়াবেটিস সময়ের সঙ্গে চোখ, kidney, nerve এবং cardiovascular health-এ প্রভাব ফেলতে পারে। তাই চিকিৎসকের পরামর্শ অনুযায়ী follow-up ও প্রয়োজনীয় screening গুরুত্বপূর্ণ।",
        ],
      },
    ],
  },
  {
    slug: "understanding-blood-pressure",
    title: "উচ্চ রক্তচাপ সম্পর্কে যা জানা প্রয়োজন",
    category: "উচ্চ রক্তচাপ",
    excerpt:
      "উচ্চ রক্তচাপে অনেক সময় কোনো লক্ষণ নাও থাকতে পারে। নিয়মিত সঠিকভাবে রক্তচাপ মাপা এবং চিকিৎসকের পরামর্শ অনুসরণ করা গুরুত্বপূর্ণ।",
    intro:
      "উচ্চ রক্তচাপ অনেক সময় দৃশ্যমান কোনো লক্ষণ তৈরি করে না। সঠিকভাবে blood pressure পরীক্ষা এবং প্রয়োজন হলে চিকিৎসকের মূল্যায়নের মাধ্যমেই বিষয়টি বোঝা যায়।",
    image: "/images/health-guides/2.png",
    alt: "রক্তচাপ মাপার ডিজিটাল যন্ত্র ও কাফ",
    readingTime: "৫ মিনিট",
    reviewStatus: "প্রকাশের আগে চিকিৎসকের পর্যালোচনা প্রয়োজন",
    sourceName: "World Health Organization",
    sourceUrl:
      "https://www.who.int/news-room/fact-sheets/detail/hypertension",
    sections: [
      {
        heading: "Blood pressure record রাখুন",
        paragraphs: [
          "একটি মাত্র measurement দিয়ে hypertension diagnosis করা হয় না। চিকিৎসকের নির্দেশনা অনুযায়ী বিভিন্ন সময়ে measurement নিয়ে record রাখলে মূল্যায়নে সুবিধা হয়।",
        ],
        points: [
          "পরিমাপের আগে কয়েক মিনিট শান্ত হয়ে বসুন",
          "Device-এর নির্দেশনা অনুযায়ী cuff ব্যবহার করুন",
          "তারিখ, সময় ও measurement লিখে রাখুন",
          "নিজে থেকে medicine বন্ধ বা পরিবর্তন করবেন না",
        ],
      },
      {
        heading: "জীবনযাপনের ভূমিকা",
        paragraphs: [
          "স্বাস্থ্যকর খাবার, অতিরিক্ত salt কমানো, তামাক এড়িয়ে চলা এবং নিয়মিত শারীরিক কার্যক্রম blood pressure management-এ সহায়ক হতে পারে। ব্যক্তিগত পরিকল্পনা চিকিৎসকের সঙ্গে নির্ধারণ করুন।",
        ],
      },
      {
        heading: "কখন দ্রুত চিকিৎসা প্রয়োজন",
        paragraphs: [
          "খুব বেশি blood pressure-এর সঙ্গে chest pain, শ্বাসকষ্ট, তীব্র মাথাব্যথা, confusion অথবা vision change হলে দ্রুত জরুরি চিকিৎসা নিন। শুধু website বা WhatsApp response-এর জন্য অপেক্ষা করবেন না।",
        ],
      },
    ],
  },
  {
    slug: "prepare-for-first-appointment",
    title: "প্রথমবার ডাক্তার দেখাতে কী সঙ্গে নেবেন",
    category: "প্রস্তুতি",
    excerpt:
      "আগের রিপোর্ট, ব্যবহৃত ওষুধের তালিকা, allergy-এর তথ্য, উপসর্গের বিবরণ এবং প্রয়োজনীয় প্রশ্ন লিখে নিলে consultation আরও কার্যকর হতে পারে।",
    intro:
      "সাক্ষাতের আগে প্রয়োজনীয় তথ্য গুছিয়ে নিলে চিকিৎসক আপনার সমস্যা, medical history এবং বর্তমানে ব্যবহৃত medicine সম্পর্কে দ্রুত ও পরিষ্কার ধারণা পেতে পারেন।",
    image: "/images/health-guides/3.png",
    alt: "ডাক্তারের সাক্ষাতের জন্য রিপোর্ট ও প্রয়োজনীয় তথ্যের ফোল্ডার",
    readingTime: "৩ মিনিট",
    reviewStatus: "প্রকাশের আগে চিকিৎসকের পর্যালোচনা প্রয়োজন",
    sourceName: "NHS",
    sourceUrl:
      "https://www.nhs.uk/nhs-services/hospitals/going-into-hospital/outpatients-and-day-patients/",
    sections: [
      {
        heading: "যেসব তথ্য সঙ্গে নেবেন",
        points: [
          "আগের prescription ও test report",
          "বর্তমানে ব্যবহৃত সব medicine-এর নাম বা packet",
          "Medicine বা খাবারে allergy থাকলে তার তথ্য",
          "আগের operation বা গুরুত্বপূর্ণ medical history",
          "Blood pressure বা sugar record থাকলে সেটি",
        ],
      },
      {
        heading: "উপসর্গ সম্পর্কে প্রস্তুতি",
        paragraphs: [
          "উপসর্গ কখন শুরু হয়েছে, কীভাবে পরিবর্তিত হয়েছে এবং কোন বিষয়গুলোতে বাড়ে বা কমে—এসব সংক্ষেপে লিখে রাখতে পারেন।",
        ],
      },
      {
        heading: "প্রশ্ন লিখে রাখুন",
        points: [
          "কোন test প্রয়োজন হতে পারে?",
          "Medicine কীভাবে ব্যবহার করব?",
          "কোন লক্ষণ হলে দ্রুত যোগাযোগ করব?",
          "পরবর্তী follow-up কবে প্রয়োজন?",
        ],
      },
    ],
  },
];

export function getHealthGuideBySlug(slug: string) {
  return healthGuides.find((guide) => guide.slug === slug);
}