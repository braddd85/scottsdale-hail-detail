import NavPremium from "@/components/NavPremium";
import Section from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/hero-premium";
import Stats from "@/components/stats-bar";
import ServicesGrid from "@/components/services-premium";
import ProcessTimeline from "@/components/process-timeline";
import WhyChooseUs from "@/components/why-choose-premium";
import GalleryShowcase from "@/components/gallery-showcase";
import Testimonials from "@/components/testimonials-premium";
import FAQPremium from "@/components/FAQPremium";
import FinalCtaBand from "@/components/FinalCtaBand";
import CalendlyEmbed from "@/components/calendly-embed";
import ContactPremium from "@/components/contact-premium";
import SeoSchema from "@/components/SeoSchema";

export default function Home() {
  return (
    <>
      <SeoSchema />
      <main className="bg-[var(--bg)] text-white min-h-screen">
        <NavPremium />
        
        <div className="mt-6">
          <Hero />
        </div>
        
        <TrustBar />
        
        <div className="py-12">
          <Section>
            <Stats />
          </Section>
        </div>
        
        <div className="section-divider" />
        
        <div className="py-12">
          <Section alt>
            <ServicesGrid />
          </Section>
        </div>
        
        <div className="section-divider" />
        
        <div className="py-12">
          <Section>
            <ProcessTimeline />
          </Section>
        </div>
        
        <div className="section-divider" />
        
        <div className="py-12">
          <Section alt>
            <WhyChooseUs />
          </Section>
        </div>
        
        <div className="section-divider" />
        
        <div className="py-12">
          <GalleryShowcase />
        </div>
        
        <div className="section-divider" />
        
        <div className="py-12">
          <Section>
            <Testimonials />
          </Section>
        </div>
        
        <div className="section-divider" />
        
        <FAQPremium />
        
        <FinalCtaBand />
        
        <div className="py-12">
          <Section alt>
            <CalendlyEmbed />
          </Section>
        </div>
        
        <div className="py-12">
          <Section>
            <ContactPremium />
          </Section>
        </div>
      </main>
    </>
  );
}
