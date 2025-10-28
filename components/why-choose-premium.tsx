import { CheckCircle2, Shield, Clock, Award, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Insurance Experts",
    desc: "We manage claims, supplements, and approvals end-to-end.",
  },
  {
    icon: Zap,
    title: "18-LED Precision Booth",
    desc: "Reveals every dent standard lighting misses.",
  },
  {
    icon: Award,
    title: "Factory-Finish Guarantee",
    desc: "PDR preserves OEM paint—no color matching issues.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most repairs completed within 2–5 business days.",
  },
  {
    icon: Users,
    title: "Dealership Preferred",
    desc: "Trusted by Scottsdale's top dealers and body shops.",
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Warranty",
    desc: "All PDR work backed by our craftsmanship guarantee.",
  },
];

export default function WhyChoosePremium() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Scottsdale Chooses Us
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Precision, transparency, and expertise you can trust.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

