"use client";
import { useState } from "react";

const faqs = [
  { q: "Do you always use the LED booth?", a: "We use LED or manual inspection depending on location and availability. Either way, you'll get insurance-grade documentation." },
  { q: "Is paint required?", a: "No. Paintless Dent Repair (PDR) restores panels from behind—no paint, bondo, or fillers—preserving OEM finish." },
  { q: "Do you help with insurance claims?", a: "Yes. We help open the claim if needed, coordinate with your carrier, and manage approvals and supplements." },
  { q: "Warranty?", a: "Lifetime workmanship warranty on PDR for as long as you own the vehicle." },
];

export default function FAQPremium() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="section">
      <div className="surface p-8 sm:p-10">
        <h2 className="h2 text-white mb-6">Frequently Asked Questions</h2>
        <div className="divide-y divide-white/10">
          {faqs.map((f, i) => (
            <details key={i} open={open === i} onClick={() => setOpen(open === i ? null : i)} className="py-4 cursor-pointer group">
              <summary className="text-white/90 text-lg list-none flex items-center justify-between">
                {f.q}
                <span className="text-white/50 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="subtle mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

