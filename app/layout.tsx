import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CloudSync Pro - Secure Cloud Storage & Collaboration Platform",
  description: "Experience lightning-fast cloud storage with enterprise-grade security. Collaborate seamlessly, sync across devices, and protect your data with CloudSync Pro. Start your free trial today!",
  keywords: ["cloud storage", "file sync", "collaboration", "secure storage", "team workspace"],
  authors: [{ name: "CloudSync Pro Team" }],
  openGraph: {
    title: "CloudSync Pro - Secure Cloud Storage & Collaboration",
    description: "Lightning-fast cloud storage with enterprise-grade security",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudSync Pro - Secure Cloud Storage",
    description: "Lightning-fast cloud storage with enterprise-grade security",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
