import { Wrench, ShieldCheck, FileCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Hail Repair",
    desc: "Factory-finish Paintless Dent Repair guided by our precision 18-LED lighting booth.",
    icon: Wrench,
    href: "/services/hail-damage-repair",
  },
  {
    title: "Premium Detailing",
    desc: "Showroom-quality restoration to bring back that new-car gloss and protect finishes.",
    icon: Sparkles,
    href: "/services",
  },
  {
    title: "Insurance Claims",
    desc: "We handle supplements, adjusters, and approvals—you don't lift a finger.",
    icon: FileCheck,
    href: "/services",
  },
  {
    title: "Paint Protection",
    desc: "Ceramic coatings and PPF to keep your finish flawless for years.",
    icon: ShieldCheck,
    href: "/services",
  },
];

export default function ServicesPremium() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Premium Services
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            From precision diagnostics to flawless finishes—every service engineered for perfection.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur transition-all hover:border-red-600/50 hover:bg-neutral-900/60 hover:shadow-xl hover:shadow-red-600/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-red-500 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

