export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "patient-consultation",
    title: "রোগীর সঙ্গে পরামর্শ",
    description:
      "রোগীর সমস্যা মনোযোগ দিয়ে শোনা এবং প্রয়োজনীয় স্বাস্থ্যতথ্য সহজ ভাষায় ব্যাখ্যা করা।",
    category: "চিকিৎসাসেবা",
    image: "/images/gallery/1.png",
    alt: "চেম্বারে একজন রোগীর সঙ্গে পরামর্শ করছেন চিকিৎসক",
    featured: true,
  },
  {
    id: "health-awareness-seminar",
    title: "স্বাস্থ্য সচেতনতামূলক আলোচনা",
    description:
      "ডায়াবেটিস, উচ্চ রক্তচাপ ও স্বাস্থ্যকর জীবনযাপন নিয়ে সচেতনতামূলক আয়োজন।",
    category: "সচেতনতা",
    image: "/images/gallery/2.png",
    alt: "স্বাস্থ্য সচেতনতামূলক সেমিনারে আলোচনা করছেন চিকিৎসক",
  },
  {
    id: "modern-consultation-chamber",
    title: "আরামদায়ক পরামর্শকক্ষ",
    description:
      "শান্ত, পরিচ্ছন্ন ও রোগীবান্ধব পরিবেশে চিকিৎসা পরামর্শের ব্যবস্থা।",
    category: "চেম্বার",
    image: "/images/gallery/3.png",
    alt: "পরিচ্ছন্ন ও আধুনিক চিকিৎসকের পরামর্শকক্ষ",
  },
];