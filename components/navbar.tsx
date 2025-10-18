"use client";
import Link from "next/link";
import { site } from "@/lib/site";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-xl">
          {site.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm hover:text-primary">
              {n.label}
            </Link>
          ))}
          <a
            href={site.calendlyUrl || "/contact#book"}
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Book Scan
          </a>
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-4 py-3 flex flex-col gap-3">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-1" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <a
              href={site.calendlyUrl || "/contact#book"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              Book Scan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

