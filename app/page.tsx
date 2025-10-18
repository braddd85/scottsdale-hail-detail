import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import WhyChooseUs from "@/components/why-choose-us";
import GalleryGrid from "@/components/gallery-grid";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <GalleryGrid />
      <Testimonials />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to restore your vehicle?</h2>
          <p className="mt-2 text-muted-foreground">Book a free MES-lit inspection or contact us for a consultation.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact#book" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">Book Free Inspection</a>
            <a href="/contact" className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
