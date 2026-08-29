import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { siteConfig } from "@/config/site";

import "./globals.css";

const banglaFont = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${banglaFont.variable} antialiased`}>
        <Header />

        <main className="min-h-screen pb-20 md:pb-0">
          {children}
        </main>

        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}