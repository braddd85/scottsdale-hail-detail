"use client";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroPremium() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Ferrari Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ferrari.jpg"
          alt="Ferrari"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
      
      {/* Dark Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/50 to-black/30" />
      
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 backdrop-blur-sm px-4 py-2 text-sm text-red-400 mb-6">
            <CheckCircle2 className="h-4 w-4" />
            Penske-Recognized Since 2010 • 2,500+ Vehicles Restored
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            We fix hail damage{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              start to finish
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            Nationwide hail repair with HQ in Scottsdale. LED-booth <strong className="text-white">or manual</strong> inspections, mobile inspections available locally, factory-finish PDR, and seamless insurance coordination since 2010.
          </p>
          
          {/* Buttons - Evenly Spaced */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl">
            <a
              href={site.calendlyUrl || "/contact#book"}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-red-600 px-8 text-base font-semibold text-white shadow-2xl shadow-red-600/40 transition-all hover:bg-red-700 hover:shadow-red-600/60 hover:scale-[1.02] flex-1"
            >
              Book Your Free Hail Scan
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact#refer"
              className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-white/30 backdrop-blur-sm bg-white/10 px-8 text-base font-semibold text-white transition-all hover:bg-white/20 hover:border-white/40 flex-1"
            >
              Refer & Earn $500
            </Link>
          </div>
          
          {/* Additional Info */}
          <p className="mt-6 text-sm text-white/80">
            Prefer an at-home check? We offer <strong className="text-white">mobile inspections in Scottsdale</strong>.
          </p>
          
          {/* Feature Cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 max-w-lg">
            <div className="rounded-xl border border-white/20 bg-black/30 backdrop-blur-md p-4">
              <div className="text-xl font-bold text-red-400">18-LED Booth</div>
              <p className="text-sm text-white/70 mt-1">Reveals every dent</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-black/30 backdrop-blur-md p-4">
              <div className="text-xl font-bold text-emerald-400">100% Factory Finish</div>
              <p className="text-sm text-white/70 mt-1">Guaranteed PDR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
