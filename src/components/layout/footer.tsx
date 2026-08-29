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
    <footer className="bg-[#081F25] text-white">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#0E6B65] text-white">
                <Stethoscope className="size-6" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-lg font-bold">
                  {doctor.fullName}
                </span>

                <span className="mt-1 block text-sm text-white/55">
                  {doctor.specialty}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              রোগীকেন্দ্রিক চিকিৎসা পরামর্শ, চেম্বারের সময়সূচি এবং
              WhatsApp-এর মাধ্যমে সহজ appointment request।
            </p>

            {doctor.bmdcRegistration && (
              <p className="mt-4 text-sm font-semibold text-[#8FD8CF]">
                BMDC রেজিস্ট্রেশন: {doctor.bmdcRegistration}
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${doctor.phone}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-[#8FD8CF] hover:text-[#8FD8CF]"
              >
                <Phone className="size-4" aria-hidden="true" />
                ফোন করুন
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E6B65] px-4 text-sm font-semibold text-white transition hover:bg-[#117C75]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-white">দ্রুত লিংক</h2>

            <nav className="mt-5" aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#8FD8CF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#8FD8CF]"
                  >
                    গোপনীয়তা নীতি
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="font-bold text-white">চেম্বার</h2>

            <div className="mt-5 space-y-5">
              {chambers.slice(0, 2).map((chamber) => (
                <div key={chamber.id}>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-[#8FD8CF]"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {chamber.name}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/55">
                        {chamber.address}
                      </p>

                      {chamber.mapUrl && (
                        <a
                          href={chamber.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#8FD8CF] hover:text-white"
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {doctor.fullName}। সর্বস্বত্ব সংরক্ষিত।
            </p>

            <p>
              এটি জরুরি চিকিৎসাসেবার website নয়।
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}