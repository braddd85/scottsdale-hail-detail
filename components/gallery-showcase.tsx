// To add more photos: drop them in /public and append them to the images array below.
"use client";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const gallery: GalleryImage[] = [
  { src: "/bmw.PNG", alt: "BMW hail repair Scottsdale" },
  { src: "/ferrari.jpg", alt: "Ferrari detail restoration Scottsdale" },
];

export default function GalleryShowcase() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-neutral-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Work</h2>
          <p className="mt-4 text-lg text-neutral-400">
            Premium vehicles restored to perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl hover:shadow-red-600/20 transition-all duration-500 group"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

