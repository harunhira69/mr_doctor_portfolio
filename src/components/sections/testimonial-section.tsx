import { MapPin, Quote } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/content/testimonials";

export function TestimonialSection() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="testimonial-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="রোগীদের অভিজ্ঞতা"
            title="চিকিৎসাসেবা সম্পর্কে মতামত"
            description="রোগীদের অনুমতি নিয়ে প্রকাশিত কিছু বাস্তব অভিজ্ঞতা।"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Quote className="size-5" aria-hidden="true" />
                </div>

                <blockquote className="flex-1 text-base leading-8 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-emerald-700 font-semibold text-white">
                      {testimonial.patientName.trim().charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-950">
                        {testimonial.patientName}
                      </p>

                      {testimonial.location && (
                        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="size-3.5" aria-hidden="true" />
                          {testimonial.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}