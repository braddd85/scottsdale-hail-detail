"use client";
import { useState } from "react";
import { site } from "@/lib/site";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPremium() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) e.currentTarget.reset();
  }
  
  return (
    <section id="contact" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-neutral-900" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-lg text-neutral-400">
            Questions? Need an estimate? We&apos;re here to help.
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a href={site.phoneHref} className="flex items-start gap-4 group">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500 ring-1 ring-red-600/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Call us</div>
                    <div className="font-semibold group-hover:text-red-500">{site.phone}</div>
                  </div>
                </a>
                
                <a href={`mailto:${site.email}`} className="flex items-start gap-4 group">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500 ring-1 ring-red-600/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Email us</div>
                    <div className="font-semibold group-hover:text-red-500">{site.email}</div>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500 ring-1 ring-red-600/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Visit us</div>
                    <div className="font-semibold">{site.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <iframe
                title="Map"
                className="w-full h-80 grayscale"
                loading="lazy"
                src="https://www.google.com/maps?q=8350%20E%20Evans%20Rd%20Ste%20E1%2C%20Scottsdale%2C%20AZ%2085260&output=embed"
              />
            </div>
            
            {/* Refer callout */}
            <div id="refer" className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur">
              <div className="text-lg font-bold text-emerald-400">Refer & Earn $500</div>
              <p className="mt-2 text-sm text-neutral-300">
                Know a dealership or body shop? If they partner with us, you&apos;ll receive $500. Contact us for details.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your name"
                className="w-full h-12 rounded-xl border border-white/10 bg-neutral-900/60 px-4 placeholder:text-neutral-500 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full h-12 rounded-xl border border-white/10 bg-neutral-900/60 px-4 placeholder:text-neutral-500 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full h-12 rounded-xl border border-white/10 bg-neutral-900/60 px-4 placeholder:text-neutral-500 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20"
              />
              <textarea
                name="message"
                placeholder="Tell us about your vehicle and damage..."
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-neutral-900/60 p-4 placeholder:text-neutral-500 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 resize-none"
                required
              />
              
              <button
                type="submit"
                disabled={status === "loading"}
                className="group w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 font-semibold text-white shadow-xl shadow-red-600/25 transition-all hover:shadow-2xl hover:shadow-red-600/40 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              {status === "sent" && (
                <p className="text-sm text-emerald-400 text-center">
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

