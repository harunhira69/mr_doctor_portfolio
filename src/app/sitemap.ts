import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}> = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/expertise",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/chambers",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/privacy",
    changeFrequency: "monthly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}