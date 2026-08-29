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

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const appointmentMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ${doctor.fullName}-এর অ্যাপয়েন্টমেন্ট নিতে চাই।`,
  );

  const whatsappUrl = `https://wa.me/${doctor.whatsapp}?text=${appointmentMessage}`;

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#0C2D35]/10 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={`${doctor.fullName} - হোম`}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#0C2D35] text-white shadow-md">
              <Stethoscope className="size-6" aria-hidden="true" />
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-base font-bold text-[#0C2D35]">
                {doctor.fullName}
              </span>

              <span className="mt-0.5 block truncate text-xs font-medium text-[#61777B]">
                {doctor.specialty}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="প্রধান নেভিগেশন"
          >
            {navigationItems.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#DDF1EC] text-[#0E6B65]"
                      : "text-[#31565B] hover:bg-[#F4FAF8] hover:text-[#0E6B65]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${doctor.phone}`}
              aria-label={`ফোন করুন ${doctor.phone}`}
              className="flex size-11 items-center justify-center rounded-full border border-[#0C2D35]/15 text-[#0C2D35] transition hover:border-[#0E6B65] hover:text-[#0E6B65]"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E6B65] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#09534F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6B65] focus-visible:ring-offset-2"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              অ্যাপয়েন্টমেন্ট
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            >
              <SheetTrigger
                aria-label="Menu খুলুন"
                className="flex size-11 items-center justify-center rounded-full border border-[#0C2D35]/15 bg-white text-[#0C2D35] transition hover:border-[#0E6B65] hover:text-[#0E6B65]"
              >
                <Menu className="size-5" aria-hidden="true" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[min(88vw,380px)] border-l border-[#0C2D35]/10 bg-white p-0"
              >
                <SheetHeader className="border-b border-[#0C2D35]/10 p-6 text-left">
                  <SheetTitle className="flex items-center gap-3 text-left">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0C2D35] text-white">
                      <Stethoscope
                        className="size-6"
                        aria-hidden="true"
                      />
                    </span>

                    <span>
                      <span className="block text-base font-bold text-[#0C2D35]">
                        {doctor.fullName}
                      </span>

                      <span className="mt-0.5 block text-xs font-medium text-[#61777B]">
                        {doctor.specialty}
                      </span>
                    </span>
                  </SheetTitle>

                  <SheetDescription className="sr-only">
                    Website-এর বিভিন্ন page-এ যাওয়ার navigation menu।
                  </SheetDescription>
                </SheetHeader>

                <nav
                  className="p-5"
                  aria-label="Mobile navigation"
                >
                  <ul className="space-y-2">
                    {navigationItems.map((item) => {
                      const active = isActiveLink(item.href);

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={`flex min-h-12 items-center rounded-2xl px-4 font-semibold transition ${
                              active
                                ? "bg-[#DDF1EC] text-[#0E6B65]"
                                : "text-[#31565B] hover:bg-[#F4FAF8] hover:text-[#0E6B65]"
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
                        className="flex min-h-12 items-center rounded-2xl px-4 font-semibold text-[#31565B] transition hover:bg-[#F4FAF8] hover:text-[#0E6B65]"
                      >
                        গোপনীয়তা নীতি
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="mt-auto border-t border-[#0C2D35]/10 p-5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0E6B65] px-5 font-bold text-white transition hover:bg-[#09534F]"
                  >
                    <MessageCircle
                      className="size-5"
                      aria-hidden="true"
                    />
                    WhatsApp অ্যাপয়েন্টমেন্ট
                  </a>

                  <a
                    href={`tel:${doctor.phone}`}
                    className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#0C2D35]/15 px-5 font-bold text-[#0C2D35]"
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