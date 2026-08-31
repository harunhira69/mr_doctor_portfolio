import type { Metadata } from "next";
import Image from "next/image";
import { Camera, ImageIcon } from "lucide-react";

import { Container } from "@/components/shared/container";
import { galleryItems } from "@/content/gallery";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "গ্যালারি",
  description:
    "চিকিৎসাসেবা, চেম্বার ও স্বাস্থ্য সচেতনতামূলক কার্যক্রমের নির্বাচিত মুহূর্ত।",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-clinical-ivory">
        <div
          className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-clinical-mint/70 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-sm font-bold text-clinical-teal">
              <span
                className="h-px w-9 bg-clinical-gold"
                aria-hidden="true"
              />
              নির্বাচিত মুহূর্ত
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.035em] text-clinical-ink sm:text-5xl lg:text-6xl">
              চিকিৎসাসেবা ও সচেতনতামূলক কার্যক্রম
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              রোগীদের সঙ্গে পরামর্শ, স্বাস্থ্যবিষয়ক আলোচনা এবং চেম্বারের
              পরিবেশের কিছু নির্বাচিত মুহূর্ত।
            </p>
          </div>
        </Container>
      </section>

      <section
        className="bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="gallery-heading"
      >
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-clinical-teal">
                ফটো গ্যালারি
              </p>

              <h2
                id="gallery-heading"
                className="mt-3 text-3xl font-bold tracking-[-0.025em] text-clinical-ink sm:text-4xl"
              >
                এক নজরে কার্যক্রম
              </h2>
            </div>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ImageIcon
                className="size-4 text-clinical-teal"
                aria-hidden="true"
              />
              {galleryItems.length}টি ডেমো ছবি
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {galleryItems.map((item, index) => (
              <figure
                key={item.id}
                className={cn(
                  "group relative overflow-hidden bg-clinical-ink shadow-[var(--shadow-soft)]",
                  item.featured
                    ? "md:col-span-2 lg:col-span-7 lg:row-span-2"
                    : "lg:col-span-5",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    item.featured
                      ? "aspect-[16/11] lg:h-full lg:min-h-[42rem]"
                      : "aspect-[16/10]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    quality={75}
                    sizes={
                      item.featured
                        ? "(max-width: 1023px) 100vw, 58vw"
                        : "(max-width: 1023px) 100vw, 42vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-clinical-ink via-clinical-ink/10 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="flex items-center gap-2 text-xs font-bold text-[#9EDDD4]">
                    <Camera className="size-4" aria-hidden="true" />
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-clinical-gold bg-clinical-ivory px-5 py-4 text-sm leading-7 text-[#496469]">
            এগুলো development-এর জন্য তৈরি demo visual। Website publish করার
            আগে real client-approved photograph দিয়ে replace করতে হবে।
          </div>
        </Container>
      </section>
    </>
  );
}