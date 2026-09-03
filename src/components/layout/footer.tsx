import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { navigationItems } from "@/config/navigation";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ${doctor.fullName}-এর অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে চাই।`,
  );

  const whatsappUrl = `https://wa.me/${doctor.whatsapp}?text=${whatsappMessage}`;

  return (
    <footer className="border-t border-white/5 bg-clinical-ink text-white">
      <Container>
        {/* Main footer */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-20 lg:py-24">
          {/* Identity */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label={`${doctor.fullName} - হোম`}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-colors duration-300 group-hover:border-clinical-teal/50 group-hover:bg-clinical-teal">
                <Stethoscope
                  className="size-5 text-clinical-teal transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </span>

              <span>
                <span className="block text-base font-bold tracking-tight text-white sm:text-lg">
                  {doctor.fullName}
                </span>

                <span className="mt-0.5 block text-xs text-white/45 sm:text-sm">
                  {doctor.specialty}
                </span>
              </span>
            </Link>

            <div className="mt-8 max-w-lg">
              <p className="text-sm leading-7 text-white/60 sm:text-[15px]">
                চিকিৎসার আগে সমস্যাটি বোঝা, প্রয়োজনীয় তথ্য দেখা এবং
                রোগীর জন্য বাস্তবসম্মত পরবর্তী পদক্ষেপ ঠিক করা—এই
                ওয়েবসাইটটি সেই যোগাযোগটুকু সহজ করার জন্য তৈরি।
              </p>
            </div>

            {/* Professional information */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/45 sm:text-sm">
              {doctor.degrees.length > 0 && (
                <span>{doctor.degrees.join(" · ")}</span>
              )}

              {doctor.yearsOfExperience > 0 && (
                <span>
                  {doctor.yearsOfExperience}+ বছরের অভিজ্ঞতা
                </span>
              )}
            </div>

            {doctor.bmdcRegistration && (
              <p className="mt-3 text-xs font-medium text-clinical-teal sm:text-sm">
                BMDC রেজিস্ট্রেশন: {doctor.bmdcRegistration}
              </p>
            )}

            {/* Contact actions */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`tel:${doctor.phone}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-clinical-teal/60 hover:bg-white/[0.06] hover:text-clinical-teal"
              >
                <Phone className="size-4" aria-hidden="true" />
                ফোন করুন
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-clinical-teal px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-clinical-teal-dark hover:shadow-lg hover:shadow-black/20"
              >
                <MessageCircle
                  className="size-4"
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="editorial-eyebrow text-clinical-teal">
              Explore
            </p>

            <h2 className="mt-3 text-lg font-semibold text-white">
              প্রয়োজনীয় পেজ
            </h2>

            <nav
              className="mt-7"
              aria-label="Footer navigation"
            >
              <ul className="space-y-3.5">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/privacy"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span>গোপনীয়তা নীতি</span>

                    <ArrowUpRight
                      className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Chambers */}
          <div>
            <p className="editorial-eyebrow text-clinical-teal">
              Practice
            </p>

            <h2 className="mt-3 text-lg font-semibold text-white">
              কোথায় দেখা যাবে
            </h2>

            <div className="mt-7 space-y-7">
              {chambers.slice(0, 2).map((chamber, index) => (
                <div
                  key={chamber.id}
                  className="border-l border-white/10 pl-4 transition-colors duration-300 hover:border-clinical-teal/60"
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-1 size-4 shrink-0 text-clinical-teal"
                      aria-hidden="true"
                    />

                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-6 text-white">
                        {chamber.name}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/50">
                        {chamber.address}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        {chamber.visitingDays}
                        <br />
                        {chamber.visitingHours}
                      </p>

                      {chamber.mapUrl && (
                        <a
                          href={chamber.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-clinical-teal transition-colors hover:text-white"
                        >
                          ম্যাপে দেখুন
                          <ArrowUpRight
                            className="size-3.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  {index < chambers.slice(0, 2).length - 1 && (
                    <div className="mt-7 h-px bg-white/6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6">
          <div className="flex flex-col gap-4 text-xs leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>
              © {currentYear} {doctor.fullName}। সর্বস্বত্ব
              সংরক্ষিত।
            </p>

            <p className="max-w-md sm:text-right">
              এই ওয়েবসাইট জরুরি চিকিৎসাসেবার বিকল্প নয়।
              জরুরি অবস্থায় নিকটস্থ জরুরি বিভাগে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}