import { Wrench, ShieldCheck, FileCheck } from "lucide-react";

const items = [
  {
    title: "Hail Repair",
    desc: "Factory-finish Paintless Dent Repair guided by precision LED lighting.",
    icon: Wrench,
  },
  {
    title: "Detailing",
    desc: "Premium detailing to restore showroom gloss and protect finishes.",
    icon: ShieldCheck,
  },
  {
    title: "Insurance Help",
    desc: "We manage your claim end-to-end so you don’t have to.",
    icon: FileCheck,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-border p-6 bg-card">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

