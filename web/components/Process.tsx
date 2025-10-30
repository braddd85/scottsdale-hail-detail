import { Search, Camera, FileCheck, Wrench, Sparkles } from "lucide-react"; // UPDATED

export default function Process() {
  const steps = [ // UPDATED
    {
      number: "1",
      icon: Search,
      title: "Book Your Free Scan",
      description: "Shop or mobile, LED or manual",
    },
    {
      number: "2",
      icon: Camera,
      title: "Precision Assessment",
      description: "Capture insurance-grade photos",
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Insurance Coordination",
      description: "Claims, supplements, approvals",
    },
    {
      number: "4",
      icon: Wrench,
      title: "Factory-Finish Repair",
      description: "No paint/filler, preserves OEM finish",
    },
    {
      number: "5",
      icon: Sparkles,
      title: "Final Detailing & Delivery",
      description: "Complimentary detail + lifetime workmanship warranty",
    },
  ];

  return (
    <section id="process" className="py-20 bg-[var(--card)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* UPDATED */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12"> {/* UPDATED */}
          Our Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"> {/* UPDATED */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center"> {/* UPDATED */}
                <div className="card-bg rounded-2xl p-6"> {/* UPDATED */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--red)] flex items-center justify-center text-white font-bold"> {/* UPDATED */}
                    {step.number}
                  </div>
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[var(--mint)]" /> {/* UPDATED */}
                  <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]"> {/* UPDATED */}
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]"> {/* UPDATED */}
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

