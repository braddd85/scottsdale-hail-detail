// UPDATED - Single premium landing page
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import GalleryStrip from "@/components/GalleryStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen"> {/* UPDATED */}
      <Hero />
      <StatsStrip />
      <Services />
      <Process />
      <WhyUs />
      <GalleryStrip />
      <Footer />
    </main>
  );
}
