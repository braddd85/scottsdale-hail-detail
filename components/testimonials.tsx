"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "They handled the insurance process and the car looks perfect. Fast and professional.",
    author: "Dealership Partner",
  },
  {
    quote:
      "The LED booth found dents we didn’t even see. Highly recommend!",
    author: "Customer in Scottsdale",
  },
  { quote: "True experts at hail repair.", author: "Body Shop Owner" },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="py-16 border-t border-border/60" id="testimonials">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">What clients say</h2>
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.quote} className="min-w-0 flex-[0_0_100%] px-6">
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <p className="text-lg">“{t.quote}”</p>
                  <div className="mt-3 text-sm text-muted-foreground">— {t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


