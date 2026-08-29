import type { Metadata } from "next";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

import { ContactWhatsAppForm } from "@/components/contact/contact-whatsapp-form";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";

export const metadata: Metadata = {
  title: "যোগাযোগ ও অ্যাপয়েন্টমেন্ট",
  description:
    "ফোন অথবা WhatsApp-এর মাধ্যমে চিকিৎসকের চেম্বারে যোগাযোগ এবং অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান।",
};

export default function ContactPage() {
  const generalWhatsAppMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ${doctor.fullName}-এর অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে চাই।`,
  );

  const whatsappUrl = `https://wa.me/${doctor.whatsapp}?text=${generalWhatsAppMessage}`;

  return (
    <>
      <PageHero
        eyebrow="যোগাযোগ"
        title="অ্যাপয়েন্টমেন্ট ও প্রয়োজনীয় তথ্যের জন্য যোগাযোগ করুন"
        description="ফোনে যোগাযোগ করুন অথবা প্রয়োজনীয় তথ্য পূরণ করে WhatsApp-এর মাধ্যমে অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান।"
        currentPage="যোগাযোগ"
      />

      <section className="bg-[#F4FAF8] py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="text-sm font-bold text-[#0E6B65]">
                  যোগাযোগের মাধ্যম
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0C2D35] sm:text-4xl">
                  সরাসরি যোগাযোগ করুন
                </h2>

                <p className="mt-5 leading-8 text-[#61777B]">
                  চেম্বারের সময়সূচি, অ্যাপয়েন্টমেন্ট এবং অন্যান্য সাধারণ
                  তথ্যের জন্য নিচের মাধ্যমগুলো ব্যবহার করুন।
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                <Reveal delay={0.05}>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="group flex items-center gap-4 rounded-2xl border border-[#0C2D35]/10 bg-white p-5 transition hover:border-[#0E6B65]/30 hover:shadow-lg"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDF1EC] text-[#0E6B65]">
                      <PhoneCall className="size-5" aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#61777B]">
                        ফোন করুন
                      </p>
                      <p className="mt-1 font-bold text-[#0C2D35]">
                        {doctor.phone}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="size-5 text-[#61777B] transition group-hover:text-[#0E6B65]"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>

                <Reveal delay={0.1}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-[#0C2D35]/10 bg-white p-5 transition hover:border-[#0E6B65]/30 hover:shadow-lg"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDF1EC] text-[#0E6B65]">
                      <MessageCircle
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#61777B]">
                        WhatsApp
                      </p>
                      <p className="mt-1 font-bold text-[#0C2D35]">
                        {doctor.phone}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="size-5 text-[#61777B] transition group-hover:text-[#0E6B65]"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              </div>

              {chambers.length > 0 && (
                <Reveal delay={0.15}>
                  <div className="mt-8 rounded-[1.75rem] bg-[#0C2D35] p-6 text-white">
                    <div className="flex items-center gap-3">
                      <MapPin
                        className="size-5 text-[#8FD8CF]"
                        aria-hidden="true"
                      />
                      <h3 className="font-bold">
                        চেম্বারের অবস্থান
                      </h3>
                    </div>

                    <ul className="mt-5 space-y-4">
                      {chambers.map((chamber) => (
                        <li
                          key={chamber.id}
                          className="border-t border-white/10 pt-4 first:border-0 first:pt-0"
                        >
                          <p className="font-semibold">
                            {chamber.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/65">
                            {chamber.address}
                          </p>

                          {chamber.mapUrl && (
                            <a
                              href={chamber.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#8FD8CF] hover:text-white"
                            >
                              Google Maps
                              <ArrowUpRight
                                className="size-4"
                                aria-hidden="true"
                              />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1}>
              <ContactWhatsAppForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}