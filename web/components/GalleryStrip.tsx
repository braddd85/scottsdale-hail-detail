import Image from "next/image"; // UPDATED

export default function GalleryStrip() {
  return (
    <section className="py-20 bg-[var(--card)]"> {/* UPDATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* UPDATED */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12"> {/* UPDATED */}
          Gallery
        </h2>
        <div className="grid md:grid-cols-2 gap-8"> {/* UPDATED */}
          <div className="relative aspect-[16/10] md:aspect-[16/10] rounded-2xl border border-[var(--border)] overflow-hidden"> {/* UPDATED */}
            <Image
              src="/bmw.PNG"
              alt="BMW Hail Repair"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[16/10] md:aspect-[16/10] rounded-2xl border border-[var(--border)] overflow-hidden"> {/* UPDATED */}
            <Image
              src="/ferrari.jpg"
              alt="Ferrari Hail Repair"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

