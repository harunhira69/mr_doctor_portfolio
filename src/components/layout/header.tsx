"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MessageCircle,
  Phone,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationItems } from "@/config/navigation";
import { doctor } from "@/content/doctor";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = createGeneralWhatsAppUrl();

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl">
      <div className="hidden bg-clinical-ink text-white sm:block">
        <Container className="flex h-8 items-center justify-between gap-6 text-xs">
          <p className="flex items-center gap-2 text-white/75">
            <span
              className="size-1.5 rounded-full bg-[#7DD3C7]"
              aria-hidden="true"
            />
            ডাক্তারের ডিজিটাল চেম্বার
          </p>

          <div className="flex items-center gap-5">
            <p className="hidden text-white/65 md:block">
              অ্যাপয়েন্টমেন্টের আগে সময় নিশ্চিত করুন
            </p>

            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-[#A9E2DA]"
              aria-label={`ফোন করুন ${doctor.phone}`}
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {doctor.phone}
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex h-[4.75rem] items-center justify-between gap-5">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${doctor.fullName} — হোম`}
          >
            <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-clinical-ink text-white shadow-[0_8px_24px_rgb(8_47_52_/_18%)] transition-transform group-hover:-translate-y-0.5">
              <Stethoscope className="size-5" aria-hidden="true" />

              <span
                className="absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-white bg-clinical-gold"
                aria-hidden="true"
              />
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-base font-bold leading-none text-clinical-ink">
                {doctor.fullName}
              </span>

              <span className="mt-1.5 block truncate text-xs font-medium text-muted-foreground">
                {doctor.specialty}
              </span>
            </span>
          </Link>

          <nav
            className="hidden h-full items-center gap-6 lg:flex"
            aria-label="প্রধান নেভিগেশন"
          >
            {navigationItems.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full items-center border-b-2 px-0.5 text-sm font-semibold transition-colors ${
                    active
                      ? "border-clinical-teal text-clinical-teal"
                      : "border-transparent text-[#35585C] hover:text-clinical-teal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={`tel:${doctor.phone}`}
              aria-label={`ফোন করুন ${doctor.phone}`}
              className="flex size-11 items-center justify-center rounded-xl border border-border bg-white text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
            >
              <Phone className="size-4.5" aria-hidden="true" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-clinical-teal px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgb(13_118_110_/_18%)] transition hover:-translate-y-0.5 hover:bg-clinical-teal-dark"
            >
              <MessageCircle className="size-4.5" aria-hidden="true" />
              অ্যাপয়েন্টমেন্ট
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            >
              <SheetTrigger
                aria-label="মেনু খুলুন"
                className="flex size-11 items-center justify-center rounded-xl border border-border bg-white text-clinical-ink transition hover:border-clinical-teal hover:text-clinical-teal"
              >
                <Menu className="size-5" aria-hidden="true" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex w-[min(88vw,380px)] flex-col border-l border-border bg-clinical-ivory p-0"
              >
                <SheetHeader className="border-b border-border bg-white p-6 text-left">
                  <SheetTitle className="flex items-center gap-3 text-left">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-clinical-ink text-white">
                      <Stethoscope
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <span>
                      <span className="block text-base font-bold text-clinical-ink">
                        {doctor.fullName}
                      </span>

                      <span className="mt-1 block text-xs font-medium text-muted-foreground">
                        {doctor.specialty}
                      </span>
                    </span>
                  </SheetTitle>

                  <SheetDescription className="sr-only">
                    ওয়েবসাইটের বিভিন্ন page-এ যাওয়ার navigation menu।
                  </SheetDescription>
                </SheetHeader>

                <nav
                  className="flex-1 p-5"
                  aria-label="মোবাইল নেভিগেশন"
                >
                  <ul className="space-y-1">
                    {navigationItems.map((item) => {
                      const active = isActiveLink(item.href);

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={`flex min-h-12 items-center border-l-2 px-4 font-semibold transition ${
                              active
                                ? "border-clinical-teal bg-clinical-mint text-clinical-teal"
                                : "border-transparent text-[#35585C] hover:bg-white hover:text-clinical-teal"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}

                    <li>
                      <Link
                        href="/privacy"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex min-h-12 items-center border-l-2 border-transparent px-4 font-semibold text-[#35585C] transition hover:bg-white hover:text-clinical-teal"
                      >
                        গোপনীয়তা নীতি
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="border-t border-border bg-white p-5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-clinical-teal px-5 font-bold text-white transition hover:bg-clinical-teal-dark"
                  >
                    <MessageCircle
                      className="size-5"
                      aria-hidden="true"
                    />
                    WhatsApp অ্যাপয়েন্টমেন্ট
                  </a>

                  <a
                    href={`tel:${doctor.phone}`}
                    className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border px-5 font-bold text-clinical-ink"
                  >
                    <Phone className="size-5" aria-hidden="true" />
                    {doctor.phone}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}