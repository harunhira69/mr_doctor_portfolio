import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hind_Siliguri } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { PhysicianJsonLd } from "@/components/seo/physician-json-ld";
import { siteConfig } from "@/config/site";
import { doctor } from "@/content/doctor";

import "./globals.css";

const banglaFont = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const defaultTitle = `${siteConfig.name} | ${doctor.specialty}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),

  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: doctor.fullName,
  publisher: doctor.fullName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "/",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,

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
    title: defaultTitle,
    description: siteConfig.description,
    images: [doctor.profileImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "health",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="bn">
      <body
        className={`${banglaFont.variable} ${banglaFont.className} bg-white pb-20 text-[#0C2D35] antialiased md:pb-0`}
      >
        <PhysicianJsonLd />

        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-[#0C2D35] px-5 py-3 font-bold text-white shadow-xl transition-transform focus-visible:translate-y-0 motion-reduce:transition-none"
        >
          মূল কনটেন্টে যান
        </a>

        <Header />

        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-screen outline-none"
        >
          {children}
        </main>

        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}