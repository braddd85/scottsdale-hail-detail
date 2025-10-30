"use client";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function NavPremium() {
  return (
    <header className="relative z-50 py-6 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="sr-only">Scottsdale Hail & Detail</span>
          <Image src="/logo.png" alt="Scottsdale Hail & Detail" width={72} height={72} className="rounded-lg shadow-xl" priority />
          <span className="text-white text-lg font-semibold hidden sm:inline">Scottsdale Hail & Detail</span>
        </Link>
        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden sm:inline-flex rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm text-white border border-white/20 hover:bg-white/15 transition-all">
            {site.phone}
          </a>
          <a href={site.calendlyUrl || "#book"} className="inline-flex rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-all shadow-lg">
            Book Free Scan
          </a>
        </div>
      </div>
    </header>
  );
}

