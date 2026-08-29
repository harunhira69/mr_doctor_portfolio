"use client";

import Link from "next/link";
import { Menu, MessageCircle, Stethoscope } from "lucide-react";

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
import { siteConfig } from "@/config/site";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const whatsappUrl = createGeneralWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-[#0C2D35]/10 bg-[#F8FBFA]/95 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="হোম পেজে যান"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0C2D35] text-white transition-transform duration-300 group-hover:-rotate-3">
            <Stethoscope className="size-5" aria-hidden="true" />
          </span>

          <span>
            <span className="block text-lg font-bold leading-tight text-[#0C2D35]">
              {siteConfig.name}
            </span>
            <span className="block text-xs font-medium text-[#61777B]">
              মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="প্রধান নেভিগেশন"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#18343A] transition-colors hover:text-[#0E6B65]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0E6B65] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#09534F] hover:shadow-md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            অ্যাপয়েন্টমেন্ট নিন
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="মোবাইল মেনু খুলুন"
              className="inline-flex size-11 items-center justify-center rounded-full border border-[#0C2D35]/15 bg-white text-[#0C2D35] transition hover:bg-[#DDF1EC]"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88%] border-[#0C2D35]/10 bg-[#F8FBFA] sm:max-w-sm"
            >
              <SheetHeader className="border-b border-[#0C2D35]/10">
                <SheetTitle className="text-left text-xl text-[#0C2D35]">
                  {siteConfig.name}
                </SheetTitle>

                <SheetDescription className="text-left">
                  প্রয়োজনীয় তথ্য দেখুন অথবা সরাসরি অ্যাপয়েন্টমেন্ট নিন।
                </SheetDescription>
              </SheetHeader>

              <nav
                className="flex flex-col gap-2 px-4 py-6"
                aria-label="মোবাইল নেভিগেশন"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-[#18343A] transition hover:bg-[#DDF1EC] hover:text-[#0E6B65]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="px-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0E6B65] px-5 font-semibold text-white transition hover:bg-[#09534F]"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp-এ অ্যাপয়েন্টমেন্ট
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}