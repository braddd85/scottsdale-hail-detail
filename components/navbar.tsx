"use client";
import Link from "next/link";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-600/30" />
          <span className="font-bold tracking-tight text-lg">{site.name}</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-neutral-300 hover:text-white transition">Services</a>
          <a href="#process" className="text-sm font-medium text-neutral-300 hover:text-white transition">Process</a>
          <a href="#gallery" className="text-sm font-medium text-neutral-300 hover:text-white transition">Gallery</a>
          <a href="#contact" className="text-sm font-medium text-neutral-300 hover:text-white transition">Contact</a>
          <a
            href="#book"
            className="inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all"
          >
            Book Free Scan
          </a>
        </nav>
        
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#services" className="py-2 text-neutral-300" onClick={() => setOpen(false)}>Services</a>
            <a href="#process" className="py-2 text-neutral-300" onClick={() => setOpen(false)}>Process</a>
            <a href="#gallery" className="py-2 text-neutral-300" onClick={() => setOpen(false)}>Gallery</a>
            <a href="#contact" className="py-2 text-neutral-300" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book Free Scan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;


