import { CircleHelp, MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { faq } from "@/content/faq";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function FaqSection() {
  const whatsappUrl = createGeneralWhatsAppUrl();

  return (
    <section
      id="faq"
      className="py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <CircleHelp className="size-6" aria-hidden="true" />
              </div>

              <p className="font-semibold text-emerald-700">
                সাধারণ জিজ্ঞাসা
              </p>

              <h2
                id="faq-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                আপনার প্রশ্নের উত্তর
              </h2>

              <p className="mt-5 max-w-md leading-8 text-slate-600">
                অ্যাপয়েন্টমেন্ট, চেম্বারের সময়সূচি এবং চিকিৎসকের সঙ্গে
                যোগাযোগ সম্পর্কিত গুরুত্বপূর্ণ তথ্য।
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                আরও প্রশ্ন করুন
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion
              defaultValue={faq[0] ? [faq[0].id] : []}
              className="space-y-3"
            >
              {faq.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-950 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 leading-7 text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}