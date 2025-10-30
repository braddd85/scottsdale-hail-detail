import { Shield, Lightbulb, Award, Zap, BadgeCheck, Clock, FileCheck } from "lucide-react"; // UPDATED

export default function WhyUs() {
  const reasons = [ // UPDATED
    { icon: FileCheck, title: "Insurance Experts", description: "Seamless claim handling" },
    { icon: Lightbulb, title: "18-LED Precision Booth", description: "Reveals every dent" },
    { icon: Award, title: "Factory-Finish Guarantee", description: "No paint, no filler" },
    { icon: Zap, title: "Fast Turnaround", description: "Get back on the road quickly" },
    { icon: BadgeCheck, title: "Penske-Recognized", description: "Trusted since 2010" },
    { icon: Clock, title: "Lifetime Warranty", description: "Workmanship guaranteed" },
  ];

  return (
    <section id="why" className="py-20 bg-[var(--bg)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* UPDATED */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12"> {/* UPDATED */}
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* UPDATED */}
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="card-bg rounded-2xl p-6"> {/* UPDATED */}
                <Icon className="w-8 h-8 text-[var(--mint)] mb-3" /> {/* UPDATED */}
                <h3 className="text-lg font-bold mb-1 text-[var(--text-primary)]"> {/* UPDATED */}
                  {reason.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]"> {/* UPDATED */}
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

