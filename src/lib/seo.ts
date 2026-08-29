import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { doctor } from "@/content/doctor";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataOptions): Metadata {
  return {
    title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      type: "website",
      locale: "bn_BD",
      url: path,
      siteName: siteConfig.name,
      title: `${title} | ${doctor.fullName}`,
      description,
      images: [
        {
          url: doctor.profileImage,
          width: 1200,
          height: 1500,
          alt: `${doctor.fullName} - ${doctor.specialty}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${doctor.fullName}`,
      description,
      images: [doctor.profileImage],
    },
  };
}