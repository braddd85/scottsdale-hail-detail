"use client";
import { site } from "@/lib/site";
import { Calendar } from "lucide-react";

export default function CalendlyEmbed() {
  return (
    <section id="book" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-sm text-red-400 mb-6">
            <Calendar className="h-4 w-4" />
            Book in 60 seconds
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Schedule Your Free Hail Scan
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            No obligation. No pressure. Just answers.
          </p>
        </div>
        
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-2 backdrop-blur overflow-hidden">
          {site.calendlyUrl ? (
            <iframe
              src={site.calendlyUrl}
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-xl"
            />
          ) : (
            <div className="h-[500px] flex items-center justify-center text-neutral-500">
              <div className="text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>Calendly integration pending</p>
                <a href="/contact" className="mt-4 inline-block text-red-500 hover:underline">
                  Contact us directly →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

