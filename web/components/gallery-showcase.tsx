// To add more photos: drop them in /public and append them to the images array below.
import Image from 'next/image';
import React from 'react';

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 group"
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

