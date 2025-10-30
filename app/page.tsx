import Hero from "@/components/hero-premium";
import ServicesGrid from "@/components/services-premium";
import WhyChooseUs from "@/components/why-choose-premium";
import ProcessTimeline from "@/components/process-timeline";
import GalleryShowcase from "@/components/gallery-showcase";
import Testimonials from "@/components/testimonials-premium";
import Stats from "@/components/stats-bar";
import CalendlyEmbed from "@/components/calendly-embed";
import ContactPremium from "@/components/contact-premium";
import NavPremium from "@/components/NavPremium";
import Section from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import FAQPremium from "@/components/FAQPremium";
import FinalCtaBand from "@/components/FinalCtaBand";
import SeoSchema from "@/components/SeoSchema";

export default function Home() {
  return (
    <>
      <SeoSchema />
      <main className="bg-noise" style={{ backgroundColor: "var(--bg)" }}>
        <NavPremium />
        <Hero />
        <TrustBar />
        
        <div className="section-divider" />
        
        <Section>
          <Stats />
        </Section>
        
        <div className="section-divider" />
        
        <Section alt>
          <ServicesGrid />
        </Section>
        
        <div className="section-divider" />
        
        <Section>
          <ProcessTimeline />
        </Section>
        
        <div className="section-divider" />
        
        <Section alt>
          <WhyChooseUs />
        </Section>
        
        <div className="section-divider" />
        
        <GalleryShowcase />
        
        <div className="section-divider" />
        
        <Section>
          <Testimonials />
        </Section>
        
        <div className="section-divider" />
        
        <FAQPremium />
        
        <div className="section-divider" />
        
        <Section alt>
          <CalendlyEmbed />
        </Section>
        
        <div className="section-divider" />
        
        <FinalCtaBand />
        
        <div className="section-divider" />
        
        <Section>
          <ContactPremium />
        </Section>
      </main>
    </>
  );
}
