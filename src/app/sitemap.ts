import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/expertise/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/chambers/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}