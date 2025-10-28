import { CheckCircle2 } from "lucide-react";

const points = [
  "Precision LED assessments reveal every dent",
  "Factory finish guaranteed with PDR",
  "Insurance claim help from start to finish",
  "Fast scheduling protects vehicle value",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 border-t border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
              <span className="text-sm text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


