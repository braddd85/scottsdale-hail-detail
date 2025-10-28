"use client";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroPremium() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16 grid gap-12 lg:grid-cols-2 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-sm text-red-400 mb-6">
            <CheckCircle2 className="h-4 w-4" />
            Scottsdale&apos;s Premier Hail Repair Experts
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            We fix hail damage{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              start to finish
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-neutral-300 max-w-xl">
            Precision LED assessments, factory-finish paintless dent repair, and zero-hassle insurance claim management in Scottsdale.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={site.calendlyUrl || "/contact#book"}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 text-base font-semibold text-white shadow-xl shadow-red-600/25 transition-all hover:shadow-2xl hover:shadow-red-600/40 hover:scale-[1.02]"
            >
              Book Your Free Hail Scan
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact#refer"
              className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-white/10 px-8 text-base font-semibold transition-all hover:bg-white/5 hover:border-white/20"
            >
              Refer & Earn $500
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-4 max-w-lg">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur">
              <div className="text-2xl font-bold text-red-500">18-LED Booth</div>
              <p className="text-sm text-neutral-400 mt-1">Reveals every dent</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur">
              <div className="text-2xl font-bold text-emerald-500">100% Factory Finish</div>
              <p className="text-sm text-neutral-400 mt-1">Guaranteed PDR</p>
            </div>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="relative lg:h-[600px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/20 to-transparent blur-2xl" />
          <div className="relative h-full rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

