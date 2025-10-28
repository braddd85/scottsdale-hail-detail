"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/1.jpg", caption: "LED Booth Assessment" },
  { src: "/gallery/2.jpg", caption: "Before PDR" },
  { src: "/gallery/3.jpg", caption: "After Factory Finish" },
  { src: "/gallery/4.jpg", caption: "Premium Detailing" },
  { src: "/gallery/1.jpg", caption: "Hood Repair" },
  { src: "/gallery/2.jpg", caption: "Roof Hail Damage" },
];

export default function GalleryPremium() {
  const [index, setIndex] = useState(-1);
  
  return (
    <section id="gallery" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-neutral-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Before & After</h2>
          <p className="mt-4 text-lg text-neutral-400">
            Factory-finish results speak for themselves.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                {img.caption}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
      />
    </section>
  );
}

