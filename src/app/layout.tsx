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
        /*
          IMAGE PLACEHOLDER:
          Doctor's professional portrait.

          Recommended:
          - vertical portrait
          - approximately 4:5 ratio
          - high resolution
          - clean / professional background
          - doctor's face clearly visible
        */
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
        className={`${banglaFont.variable} ${banglaFont.className} min-h-screen bg-background pb-[5.25rem] text-foreground antialiased md:pb-0`}
      >
        <PhysicianJsonLd />

        {/* -----------------------------------------------
            ACCESSIBILITY
        ------------------------------------------------ */}
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-clinical-ink px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform focus-visible:translate-y-0 motion-reduce:transition-none"
        >
          মূল কনটেন্টে যান
        </a>

        {/* -----------------------------------------------
            GLOBAL HEADER
        ------------------------------------------------ */}
        <Header />

        {/* -----------------------------------------------
            MAIN CONTENT
        ------------------------------------------------ */}
        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-screen outline-none"
        >
          {children}
        </main>

        {/* -----------------------------------------------
            GLOBAL FOOTER
        ------------------------------------------------ */}
        <Footer />

        {/* -----------------------------------------------
            MOBILE PRIMARY ACTION
        ------------------------------------------------ */}
        <MobileActionBar />
      </body>
    </html>
  );
}