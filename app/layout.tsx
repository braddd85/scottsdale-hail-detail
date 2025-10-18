import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StickyMobileBar from "@/components/sticky-mobile-bar";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "Scottsdale’s premier hail repair and detailing. Free MES-lit inspections, insurance claim help, and factory-finish PDR.",
  openGraph: {
    title: site.name,
    description:
      "Free LED-booth inspections, insurance claim help, and premium hail repair in Scottsdale.",
    type: "website",
    url: "https://scottsdalehail.com",
  },
  metadataBase: new URL("https://scottsdalehail.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
