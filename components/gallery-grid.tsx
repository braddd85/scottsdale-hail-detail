"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function GalleryGrid() {
  const [index, setIndex] = useState(-1);
  return (
    <section id="gallery" className="py-16 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button key={src} onClick={() => setIndex(i)} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={images.map((src) => ({ src }))} />
    </section>
  );
}


