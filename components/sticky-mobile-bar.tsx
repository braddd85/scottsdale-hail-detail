"use client";
import { site } from "@/lib/site";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center gap-2">
        <a
          href={site.phoneHref}
          className="flex-1 inline-flex h-12 items-center justify-center rounded-md border border-border text-sm font-medium"
        >
          Call {site.phone}
        </a>
        <a
          href={site.calendlyUrl || "/contact#book"}
          className="flex-1 inline-flex h-12 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium"
        >
          Book Scan
        </a>
      </div>
    </div>
  );
}

