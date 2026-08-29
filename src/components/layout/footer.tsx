import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Phone,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { chambers } from "@/content/chambers";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = createGeneralWhatsAppUrl();
  const primaryChamber = chambers[0];

  return (
    <footer className="bg-[#0C2D35] pb-24 pt-16 text-white md:pb-8">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
                <Stethoscope className="size-5" aria-hidden="true" />
              </span>

              <div>
                <p className="text-xl font-bold">{siteConfig.name}</p>
                <p className="text-sm text-white/60">
                  মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              রোগীর কথা মনোযোগ দিয়ে শোনা, সহজভাবে বোঝানো এবং দীর্ঘমেয়াদি
              সুস্থতার প্রতি গুরুত্ব দেওয়াই আমাদের সেবার মূল লক্ষ্য।
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-white">প্রয়োজনীয় লিংক</h2>

            <nav className="grid grid-cols-2 gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-white">যোগাযোগ</h2>

            <div className="space-y-4 text-sm text-white/65">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MessageCircle
                  className="mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                <span>WhatsApp-এ যোগাযোগ করুন</span>
              </a>

              {primaryChamber && (
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{primaryChamber.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <Link href="/privacy" className="transition hover:text-white">
            গোপনীয়তা নীতি
          </Link>
        </div>
      </Container>
    </footer>
  );
}