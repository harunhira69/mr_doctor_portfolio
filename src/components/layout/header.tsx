"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  MessageCircle,
  Phone,
  Stethoscope,
  X,
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
    <header className="sticky inset-x-0 top-0 z-50">
      {/* -------------------------------------------------
          TOP INFORMATION STRIP
      -------------------------------------------------- */}
      <div className="hidden border-b border-white/10 bg-clinical-ink text-white sm:block">
        <Container className="flex min-h-9 items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span
              className="relative flex size-1.5"
              aria-hidden="true"
            >
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8ad8cf] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#8ad8cf]" />
            </span>

            <span className="text-[11px] font-semibold tracking-wide text-white/75">
              ডাক্তারের ডিজিটাল প্র্যাকটিস
            </span>
          </div>

          <div className="flex items-center gap-5">
            <p className="hidden text-[11px] text-white/50 md:block">
              অ্যাপয়েন্টমেন্টের আগে সময় নিশ্চিত করুন
            </p>

            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/85 transition-colors hover:text-white"
              aria-label={`ফোন করুন ${doctor.phone}`}
            >
              <Phone
                className="size-3.5"
                aria-hidden="true"
              />

              <span>{doctor.phone}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* -------------------------------------------------
          MAIN NAVIGATION
      -------------------------------------------------- */}
      <div className="border-b border-clinical-ink/10 bg-clinical-ivory/90 backdrop-blur-xl">
        <Container>
          <div className="flex h-[4.7rem] items-center justify-between gap-6 lg:h-[5.15rem]">
            {/* ---------------------------------------------
                BRAND / DOCTOR IDENTITY
            ---------------------------------------------- */}
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3.5"
              aria-label={`${doctor.fullName} — হোম`}
            >
              {/* Brand mark */}
              <span
                className="relative flex size-10 shrink-0 items-center justify-center rounded-[1.15rem] bg-clinical-ink text-white shadow-[0_10px_30px_rgb(8_47_52_/_16%)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:size-11"
                aria-hidden="true"
              >
                <Stethoscope className="size-[1.15rem] sm:size-5" />

                <span className="absolute -bottom-1 -right-1 flex size-3.5 items-center justify-center rounded-full border-2 border-clinical-ivory bg-clinical-gold">
                  <span className="size-1 rounded-full bg-white" />
                </span>
              </span>

              {/* Doctor name */}
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-[0.92rem] font-bold leading-tight tracking-[-0.02em] text-clinical-ink lg:text-base">
                  {doctor.fullName}
                </span>

                <span className="mt-1 block truncate text-[11px] font-medium leading-tight text-muted-foreground lg:text-xs">
                  {doctor.specialty}
                </span>
              </span>
            </Link>

            {/* ---------------------------------------------
                DESKTOP NAVIGATION
            ---------------------------------------------- */}
            <nav
              className="hidden h-full items-center lg:flex"
              aria-label="প্রধান নেভিগেশন"
            >
              <ul className="flex h-full items-center gap-7 xl:gap-8">
                {navigationItems.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <li
                      key={item.href}
                      className="h-full"
                    >
                      <Link
                        href={item.href}
                        aria-current={
                          active ? "page" : undefined
                        }
                        className={`group relative flex h-full items-center text-[13px] font-semibold transition-colors ${
                          active
                            ? "text-clinical-teal"
                            : "text-clinical-ink/65 hover:text-clinical-ink"
                        }`}
                      >
                        <span>{item.label}</span>

                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-clinical-teal transition-transform duration-300 ${
                            active
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ---------------------------------------------
                DESKTOP ACTIONS
            ---------------------------------------------- */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href={`tel:${doctor.phone}`}
                aria-label={`ফোন করুন ${doctor.phone}`}
                className="group flex size-10 items-center justify-center rounded-full border border-clinical-ink/12 bg-white/60 text-clinical-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clinical-teal/40 hover:bg-white hover:text-clinical-teal"
              >
                <Phone
                  className="size-4 transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-10 items-center gap-2 rounded-full bg-clinical-teal px-4.5 text-[13px] font-bold text-white shadow-[0_10px_28px_rgb(13_118_110_/_17%)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clinical-teal-dark hover:shadow-[0_14px_34px_rgb(13_118_110_/_22%)]"
              >
                <MessageCircle
                  className="size-4"
                  aria-hidden="true"
                />

                <span>পরামর্শের জন্য যোগাযোগ</span>

                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* ---------------------------------------------
                MOBILE MENU
            ---------------------------------------------- */}
            <div className="lg:hidden">
              <Sheet
                open={mobileMenuOpen}
                onOpenChange={setMobileMenuOpen}
              >
                <SheetTrigger
                  aria-label="মেনু খুলুন"
                  className="flex size-11 items-center justify-center rounded-full border border-clinical-ink/12 bg-white/70 text-clinical-ink transition-all hover:border-clinical-teal/40 hover:text-clinical-teal"
                >
                  <Menu
                    className="size-5"
                    aria-hidden="true"
                  />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="flex w-[min(91vw,400px)] flex-col border-l border-clinical-ink/10 bg-clinical-ivory p-0"
                >
                  {/* -----------------------------------------
                      MOBILE HEADER
                  ------------------------------------------ */}
                  <SheetHeader className="border-b border-clinical-ink/10 bg-white px-6 pb-6 pt-7 text-left">
                    <div className="flex items-start justify-between gap-4">
                      <SheetTitle className="flex items-center gap-3.5 text-left">
                        <span
                          className="flex size-11 shrink-0 items-center justify-center rounded-[1rem] bg-clinical-ink text-white"
                          aria-hidden="true"
                        >
                          <Stethoscope className="size-5" />
                        </span>

                        <span className="min-w-0">
                          <span className="block truncate text-base font-bold tracking-[-0.02em] text-clinical-ink">
                            {doctor.fullName}
                          </span>

                          <span className="mt-1 block truncate text-xs font-medium text-muted-foreground">
                            {doctor.specialty}
                          </span>
                        </span>
                      </SheetTitle>

                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="মেনু বন্ধ করুন"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-clinical-ink/10 text-clinical-ink/60 transition hover:border-clinical-teal/30 hover:text-clinical-teal"
                      >
                        <X
                          className="size-4"
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <SheetDescription className="sr-only">
                      ডাক্তারের ওয়েবসাইটের প্রধান navigation menu।
                    </SheetDescription>
                  </SheetHeader>

                  {/* -----------------------------------------
                      MOBILE NAV
                  ------------------------------------------ */}
                  <nav
                    className="flex-1 overflow-y-auto px-5 py-6"
                    aria-label="মোবাইল নেভিগেশন"
                  >
                    <div className="mb-5 px-2">
                      <p className="editorial-eyebrow text-clinical-teal">
                        Explore
                      </p>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        চিকিৎসা, চেম্বার এবং প্রয়োজনীয় তথ্য এক জায়গায়।
                      </p>
                    </div>

                    <ul className="space-y-1.5">
                      {navigationItems.map((item, index) => {
                        const active = isActiveLink(item.href);

                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() =>
                                setMobileMenuOpen(false)
                              }
                              aria-current={
                                active ? "page" : undefined
                              }
                              className={`group flex min-h-[3.45rem] items-center justify-between border-l-2 px-4 transition-all ${
                                active
                                  ? "border-clinical-teal bg-clinical-mint text-clinical-teal"
                                  : "border-transparent text-clinical-ink/70 hover:border-clinical-gold hover:bg-white hover:text-clinical-ink"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <span className="w-5 text-[10px] font-bold tabular-nums text-clinical-ink/30">
                                  0{index + 1}
                                </span>

                                <span className="font-semibold">
                                  {item.label}
                                </span>
                              </span>

                              <ArrowUpRight
                                className={`size-4 transition-all ${
                                  active
                                    ? "text-clinical-teal"
                                    : "text-clinical-ink/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clinical-gold"
                                }`}
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}

                      <li>
                        <Link
                          href="/privacy"
                          onClick={() =>
                            setMobileMenuOpen(false)
                          }
                          className="group flex min-h-[3.45rem] items-center justify-between border-l-2 border-transparent px-4 text-clinical-ink/60 transition-all hover:border-clinical-gold hover:bg-white hover:text-clinical-ink"
                        >
                          <span className="font-semibold">
                            গোপনীয়তা নীতি
                          </span>

                          <ArrowUpRight
                            className="size-4 text-clinical-ink/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clinical-gold"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* -----------------------------------------
                      MOBILE CONTACT PANEL
                  ------------------------------------------ */}
                  <div className="border-t border-clinical-ink/10 bg-white p-5">
                    <div className="mb-4 rounded-2xl bg-clinical-mint/70 p-4">
                      <p className="text-xs font-semibold text-clinical-teal">
                        Consultation
                      </p>

                      <p className="mt-1 text-sm font-semibold leading-6 text-clinical-ink">
                        আপনার প্রয়োজন অনুযায়ী পরবর্তী পদক্ষেপ জানতে যোগাযোগ করুন।
                      </p>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-clinical-teal px-5 text-sm font-bold text-white transition-all hover:bg-clinical-teal-dark"
                    >
                      <MessageCircle
                        className="size-4.5"
                        aria-hidden="true"
                      />

                      <span>WhatsApp-এ যোগাযোগ করুন</span>

                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>

                    <a
                      href={`tel:${doctor.phone}`}
                      className="mt-2.5 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-clinical-ink/12 px-5 text-sm font-bold text-clinical-ink transition hover:border-clinical-teal/30 hover:text-clinical-teal"
                    >
                      <Phone
                        className="size-4"
                        aria-hidden="true"
                      />

                      <span>{doctor.phone}</span>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}