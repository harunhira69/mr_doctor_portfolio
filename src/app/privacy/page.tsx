import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Cookie,
  Database,
  ExternalLink,
  FileClock,
  HeartPulse,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { doctor } from "@/content/doctor";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি",
  description:
    "এই ওয়েবসাইট কীভাবে appointment information, WhatsApp যোগাযোগ, third-party services এবং technical data পরিচালনা করে তা জানুন।",
};

type PrivacySectionProps = {
  id: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
};

function PrivacySection({
  id,
  title,
  icon: Icon,
  children,
}: PrivacySectionProps) {
  return (
    <Reveal>
      <section
        id={id}
        className="scroll-mt-28 rounded-[2rem] border border-[#0C2D35]/10 bg-white p-6 shadow-sm sm:p-8"
        aria-labelledby={`${id}-heading`}
      >
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDF1EC] text-[#0E6B65]">
            <Icon className="size-6" aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <h2
              id={`${id}-heading`}
              className="text-xl font-bold text-[#0C2D35] sm:text-2xl"
            >
              {title}
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-[#61777B] sm:text-base sm:leading-8">
              {children}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

const privacyNavigation = [
  {
    id: "data-collection",
    label: "তথ্য সংগ্রহ",
  },
  {
    id: "whatsapp",
    label: "WhatsApp যোগাযোগ",
  },
  {
    id: "cookies",
    label: "Cookies ও technical data",
  },
  {
    id: "medical-information",
    label: "চিকিৎসা-সংক্রান্ত তথ্য",
  },
  {
    id: "third-party",
    label: "Third-party services",
  },
  {
    id: "retention",
    label: "তথ্য সংরক্ষণ",
  },
  {
    id: "updates",
    label: "নীতিমালার পরিবর্তন",
  },
  {
    id: "contact",
    label: "যোগাযোগ",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="গোপনীয়তা ও নিরাপত্তা"
        title="আপনার তথ্য সম্পর্কে স্বচ্ছ নীতিমালা"
        description="এই website কীভাবে appointment form, WhatsApp যোগাযোগ এবং third-party service ব্যবহার করে—তা সহজ ভাষায় জানুন।"
        currentPage="গোপনীয়তা নীতি"
      />

      <section className="bg-[#F4FAF8] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
            <aside>
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <div className="rounded-[1.75rem] bg-[#0C2D35] p-6 text-white">
                    <div className="flex items-center gap-3">
                      <ShieldCheck
                        className="size-6 text-[#8FD8CF]"
                        aria-hidden="true"
                      />

                      <h2 className="font-bold">এই পৃষ্ঠায়</h2>
                    </div>

                    <nav
                      className="mt-6"
                      aria-label="গোপনীয়তা নীতির বিষয়সমূহ"
                    >
                      <ul className="space-y-1">
                        {privacyNavigation.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="block rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#0C2D35]/10 bg-white p-5">
                    <FileClock
                      className="mt-0.5 size-5 shrink-0 text-[#0E6B65]"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-sm font-bold text-[#0C2D35]">
                        সর্বশেষ হালনাগাদ
                      </p>

                      <p className="mt-1 text-sm text-[#61777B]">
                        ২৯ আগস্ট ২০২৬
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>

            <div className="space-y-6">
              <PrivacySection
                id="data-collection"
                title="আমরা কী তথ্য সংগ্রহ করি"
                icon={Database}
              >
                <p>
                  এই website-এর নিজস্ব backend, account system বা database
                  নেই। Appointment অথবা contact form-এ লেখা তথ্য website-এর
                  নিজস্ব কোনো database-এ পাঠানো বা সংরক্ষণ করা হয় না।
                </p>

                <p>
                  Form পূরণ করে button-এ ক্লিক করলে আপনার browser একটি
                  WhatsApp message তৈরি করে। Message পাঠাবেন কি না, সেই
                  সিদ্ধান্ত আপনার।
                </p>
              </PrivacySection>

              <PrivacySection
                id="whatsapp"
                title="WhatsApp-এর মাধ্যমে যোগাযোগ"
                icon={MessageCircle}
              >
                <p>
                  WhatsApp button ব্যবহার করলে আপনাকে WhatsApp-এর website
                  অথবা application-এ নেওয়া হবে। Message পাঠানোর পর তথ্য
                  WhatsApp এবং message গ্রহণকারী chamber account-এর মাধ্যমে
                  পরিচালিত হতে পারে।
                </p>

                <p>
                  WhatsApp একটি third-party service এবং তাদের নিজস্ব privacy
                  policy প্রযোজ্য। ব্যবহার করার আগে তাদের নীতিমালা পড়ে দেখা
                  উচিত।
                </p>

                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[#0E6B65] hover:text-[#09534F]"
                >
                  WhatsApp Privacy Policy
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </PrivacySection>

              <PrivacySection
                id="cookies"
                title="Cookies ও technical information"
                icon={Cookie}
              >
                <p>
                  Website বর্তমানে advertising, user account অথবা
                  personalized tracking-এর জন্য নিজস্ব cookie ব্যবহার করে না।
                </p>

                <p>
                  তবে website যে hosting platform বা CDN-এ প্রকাশিত হবে, সেই
                  provider নিরাপত্তা, performance এবং access log-এর জন্য IP
                  address, browser type বা request information-এর মতো সীমিত
                  technical data process করতে পারে।
                </p>

                <p>
                  ভবিষ্যতে Google Analytics, Meta Pixel বা অন্য কোনো
                  analytics service যোগ করা হলে এই privacy policy update করতে
                  হবে এবং প্রয়োজন অনুযায়ী cookie notice যোগ করতে হবে।
                </p>
              </PrivacySection>

              <PrivacySection
                id="medical-information"
                title="চিকিৎসা-সংক্রান্ত সংবেদনশীল তথ্য"
                icon={HeartPulse}
              >
                <p>
                  Contact form অথবা WhatsApp message-এ অপ্রয়োজনীয় সংবেদনশীল
                  চিকিৎসা তথ্য, NID number, financial information বা
                  confidential document না পাঠানোর পরামর্শ দেওয়া হচ্ছে।
                </p>

                <p>
                  এই website চিকিৎসা নির্ণয়, emergency consultation বা
                  hospital emergency service প্রদান করে না। জরুরি অবস্থায়
                  নিকটস্থ হাসপাতালের জরুরি বিভাগে যোগাযোগ করুন।
                </p>
              </PrivacySection>

              <PrivacySection
                id="third-party"
                title="Third-party link ও service"
                icon={ExternalLink}
              >
                <p>
                  Website-এ WhatsApp, Google Maps, Facebook, LinkedIn অথবা
                  অন্যান্য external website-এর link থাকতে পারে। এসব website
                  কীভাবে তথ্য সংগ্রহ বা ব্যবহার করে, তার নিয়ন্ত্রণ এই
                  website-এর নেই।
                </p>

                <p>
                  External service ব্যবহার করার সময় সংশ্লিষ্ট service-এর
                  privacy policy এবং terms প্রযোজ্য হবে।
                </p>
              </PrivacySection>

              <PrivacySection
                id="retention"
                title="তথ্য সংরক্ষণ ও মুছে ফেলা"
                icon={Database}
              >
                <p>
                  Website-এর নিজস্ব database না থাকায় appointment form-এর
                  তথ্য website-এ সংরক্ষণ করা হয় না।
                </p>

                <p>
                  তবে WhatsApp message পাঠানোর পর সেই conversation আপনার এবং
                  chamber-এর WhatsApp account-এ থাকতে পারে। কোনো message বা
                  ব্যক্তিগত তথ্য মুছে দেওয়ার অনুরোধের জন্য সরাসরি chamber-এর
                  সঙ্গে যোগাযোগ করুন।
                </p>
              </PrivacySection>

              <PrivacySection
                id="updates"
                title="এই নীতিমালার পরিবর্তন"
                icon={FileClock}
              >
                <p>
                  Website-এর feature, analytics service, booking process বা
                  প্রযোজ্য privacy requirement পরিবর্তিত হলে এই নীতিমালা
                  update করা হতে পারে।
                </p>

                <p>
                  পরিবর্তনের পরে এই page-এর “সর্বশেষ হালনাগাদ” তারিখও update
                  করা হবে।
                </p>
              </PrivacySection>

              <PrivacySection
                id="contact"
                title="Privacy বিষয়ে যোগাযোগ"
                icon={Phone}
              >
                <p>
                  আপনার ব্যক্তিগত তথ্য, WhatsApp conversation অথবা এই
                  privacy policy সম্পর্কে কোনো প্রশ্ন থাকলে নিচের নম্বরে
                  যোগাযোগ করুন।
                </p>

                <a
                  href={`tel:${doctor.phone}`}
                  className="inline-flex items-center gap-2 font-bold text-[#0E6B65] hover:text-[#09534F]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {doctor.phone}
                </a>
              </PrivacySection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}