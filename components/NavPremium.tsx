"use client";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function NavPremium() {
  return (
    <header className="section pt-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="sr-only">Scottsdale Hail & Detail</span>
          <Image src="/logo.png" alt="Scottsdale Hail & Detail" width={48} height={48} className="rounded-lg" priority />
          <span className="text-white/90 font-semibold">Scottsdale Hail & Detail</span>
        </Link>
        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden sm:inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-white/90 border border-white/10 hover:bg-white/10">
            {site.phone}
          </a>
          <a href={site.calendlyUrl || "#book"} className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            Book Free Scan
          </a>
        </div>
      </div>
    </header>
  );
}

