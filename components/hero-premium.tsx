"use client";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroPremium() {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/ferrari.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/40" />
      
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 py-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/25 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-red-300 mb-8 shadow-lg">
            <CheckCircle2 className="h-4 w-4" />
            Penske-Recognized Since 2010 • 2,500+ Vehicles Restored
          </div>
          
          {/* Heading - Like Scottsdale Collision */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-white mb-8">
            We fix hail damage{" "}
            <span className="block text-red-500">
              start to finish
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white font-medium max-w-3xl leading-relaxed mb-10">
            Nationwide hail repair with HQ in Scottsdale. LED-booth <strong>or manual</strong> inspections, mobile inspections available locally, factory-finish PDR, and seamless insurance coordination since 2010.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={site.calendlyUrl || "/contact#book"}
              className="group inline-flex h-16 items-center justify-center gap-3 rounded-lg bg-red-600 px-10 text-lg font-bold text-white shadow-2xl transition-all hover:bg-red-700 hover:scale-105"
            >
              Book Your Free Hail Scan
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact#refer"
              className="inline-flex h-16 items-center justify-center rounded-lg border-3 border-white/40 backdrop-blur-md bg-white/15 px-10 text-lg font-bold text-white transition-all hover:bg-white/25 hover:border-white/60"
            >
              Refer & Earn $500
            </Link>
          </div>
          
          {/* Additional Info */}
          <p className="text-base text-white/90 font-medium mb-10">
            Prefer an at-home check? We offer <strong className="text-white">mobile inspections in Scottsdale</strong>.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="rounded-xl border-2 border-white/30 bg-black/40 backdrop-blur-md p-6">
              <div className="text-2xl font-bold text-red-400 mb-2">18-LED Booth</div>
              <p className="text-base text-white/80">Reveals every dent</p>
            </div>
            <div className="rounded-xl border-2 border-white/30 bg-black/40 backdrop-blur-md p-6">
              <div className="text-2xl font-bold text-emerald-400 mb-2">100% Factory Finish</div>
              <p className="text-base text-white/80">Guaranteed PDR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
