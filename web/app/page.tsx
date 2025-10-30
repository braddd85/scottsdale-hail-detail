import HeroPremium from "@/components/hero-premium";
import ProcessTimeline from "@/components/process-timeline";
import GalleryShowcase from "@/components/gallery-showcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroPremium />
      <ProcessTimeline />
      <GalleryShowcase />
    </main>
  );
}
