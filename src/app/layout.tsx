import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Burak Taban - Software Engineer",
  description: "Software Engineer • Systems Thinker • Infrastructure Builder",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Systems Architecture",
    "Infrastructure",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Burak Taban" }],
  creator: "Burak Taban",
  openGraph: {
    title: "Burak Taban - Software Engineer",
    description: "Software Engineer • Systems Thinker • Infrastructure Builder",
    url: "https://buraktaban.ca",
    siteName: "Burak Taban Portfolio",
    images: [
      {
        url: "/burak_pp.webp",
        width: 1200,
        height: 630,
        alt: "Burak Taban - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burak Taban - Software Engineer",
    description: "Software Engineer • Systems Thinker • Infrastructure Builder",
    images: ["/burak_pp.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type IRootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-green-400`}
      >
        {children}
      </body>
    </html>
  );
}
