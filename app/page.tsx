import Hero from "@/components/hero-premium";
import ServicesGrid from "@/components/services-premium";
import WhyChooseUs from "@/components/why-choose-premium";
import ProcessTimeline from "@/components/process-timeline";
import GalleryGrid from "@/components/gallery-premium";
import Testimonials from "@/components/testimonials-premium";
import Stats from "@/components/stats-bar";
import CalendlyEmbed from "@/components/calendly-embed";
import ContactPremium from "@/components/contact-premium";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <Hero />
      <Stats />
      <ServicesGrid />
      <ProcessTimeline />
      <WhyChooseUs />
      <GalleryGrid />
      <Testimonials />
      <CalendlyEmbed />
      <ContactPremium />
      </main>
  );
}
