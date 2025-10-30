"use client";
import { site } from "@/lib/site";
import { Phone, Calendar } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        <a
          href={site.phoneHref}
          className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 text-sm font-semibold hover:bg-white/5 transition"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={site.calendlyUrl || "#book"}
          className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-sm font-semibold text-white shadow-lg shadow-red-600/30"
        >
          <Calendar className="h-4 w-4" />
          Book Scan
        </a>
      </div>
    </div>
  );
}


