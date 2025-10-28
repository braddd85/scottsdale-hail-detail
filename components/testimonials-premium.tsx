"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "They handled the insurance process completely and the car looks factory-new. Fast, professional, and worth every penny.",
    author: "Michael R.",
    role: "Dealership Partner",
    rating: 5,
  },
  {
    quote: "The LED booth found dents we didn't even know existed. The repair is invisible—absolutely incredible work.",
    author: "Sarah K.",
    role: "Scottsdale Resident",
    rating: 5,
  },
  {
    quote: "True experts at hail repair. We refer all our overflow here and customers always rave about the quality.",
    author: "David T.",
    role: "Body Shop Owner",
    rating: 5,
  },
];

export default function TestimonialsPremium() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);
  
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-neutral-900" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Client Testimonials</h2>
          <p className="mt-4 text-lg text-neutral-400">
            See why dealerships, body shops, and owners trust us.
          </p>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] px-4">
                <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-10 backdrop-blur text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  <div className="mt-6">
                    <div className="font-semibold text-lg">{t.author}</div>
                    <div className="text-sm text-neutral-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

