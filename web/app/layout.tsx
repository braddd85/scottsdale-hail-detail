import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // UPDATED

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scottsdale Hail & Detail | Paintless Dent Repair | Penske-Recognized Since 2010",
  description: "Nationwide hail damage restoration. 2,500+ vehicles restored. Free inspection. No paint, no filler, no sanding. Warranty guaranteed. (623) 777-7365",
  keywords: "hail damage repair, paintless dent repair, PDR, Scottsdale, Arizona, nationwide, warranty, Penske-recognized",
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
        <Header /> {/* UPDATED */}
        {children}
      </body>
    </html>
  );
}
