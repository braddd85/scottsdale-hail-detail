import { Wrench, MapPin, FileText, Sparkles } from "lucide-react"; // UPDATED

export default function Services() {
  const services = [ // UPDATED
    {
      icon: Wrench,
      title: "Hail Repair",
      description: "Factory-finish PDR guided by our precision 18-LED booth.",
    },
    {
      icon: MapPin,
      title: "Mobile Inspections (Scottsdale)",
      description: "At-home/office checks. LED or manual, weather permitting. We'll start your claim if needed.",
    },
    {
      icon: FileText,
      title: "Insurance Claims",
      description: "We handle supplements, adjusters, and approvals—zero hassle for you.",
    },
    {
      icon: Sparkles,
      title: "Premium Detailing",
      description: "Restore gloss and protect finishes.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[var(--bg)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* UPDATED */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12"> {/* UPDATED */}
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* UPDATED */}
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-bg rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group" // UPDATED
              >
                <Icon className="w-10 h-10 text-[var(--red)] mb-4" /> {/* UPDATED */}
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]"> {/* UPDATED */}
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed"> {/* UPDATED */}
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

