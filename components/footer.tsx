import Link from "next/link";
import { site } from "@/lib/site";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-600/30" />
              <div className="font-bold text-xl">{site.name}</div>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm">
              Scottsdale's premier hail repair and detailing team. Factory-finish PDR, insurance claim management, and premium detailing.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <div className="font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-neutral-400 hover:text-white transition">Services</a></li>
              <li><a href="#process" className="text-neutral-400 hover:text-white transition">Process</a></li>
              <li><a href="#gallery" className="text-neutral-400 hover:text-white transition">Gallery</a></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition">About</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="font-semibold mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="text-neutral-400 hover:text-red-500 transition">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-neutral-400 hover:text-red-500 transition">
                  {site.email}
                </a>
              </li>
              <li className="text-neutral-400 text-xs leading-relaxed">{site.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


