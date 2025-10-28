import { Phone, Camera, Wrench, FileCheck, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Book Your Free Scan",
    desc: "Schedule a no-obligation LED-booth assessment. We&apos;ll reveal every dent.",
    icon: Phone,
  },
  {
    num: "02",
    title: "Precision Assessment",
    desc: "Our 18-LED booth captures depth, diameter, and location for insurance-grade documentation.",
    icon: Camera,
  },
  {
    num: "03",
    title: "Insurance Coordination",
    desc: "We handle claims, supplements, and approvals—zero hassle for you.",
    icon: FileCheck,
  },
  {
    num: "04",
    title: "Factory-Finish Repair",
    desc: "PDR technicians restore panels without paint or filler, preserving OEM finish.",
    icon: Wrench,
  },
  {
    num: "05",
    title: "Final Detailing & Delivery",
    desc: "Premium wash, protection, and quality check. Your vehicle returns showroom-ready.",
    icon: Sparkles,
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Five steps from first call to flawless finish.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-red-600/40 to-transparent" />
              )}
              
              <div className="relative rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur transition-all hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/10">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-600/30">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="text-xs font-bold text-red-500 tracking-widest mb-2">
                  STEP {step.num}
                </div>
                
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

