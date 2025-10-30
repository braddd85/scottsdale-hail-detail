"use client"; // UPDATED
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden"> {/* UPDATED */}
      {/* Ferrari background UPDATED */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ferrari.jpg"
          alt="Ferrari background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay gradient UPDATED */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Logo badge top-right UPDATED */}
      <div className="absolute top-6 right-6 z-20">
        <Image
          src="/logo.png"
          alt="Scottsdale Hail & Detail Logo"
          width={60}
          height={60}
          className="rounded-xl shadow-2xl"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center"> {/* UPDATED */}
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"> {/* UPDATED */}
            We fix hail damage{" "}
            <span className="text-[var(--red)]">start to finish</span> {/* UPDATED */}
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed"> {/* UPDATED */}
            Nationwide hail repair with HQ in Scottsdale. LED-booth <strong>or manual</strong> inspections, factory-finish PDR, and seamless insurance coordination since 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-4"> {/* UPDATED */}
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"} // UPDATED
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[var(--red)] rounded-xl hover:opacity-90 transition shadow-lg" // UPDATED
            >
              Book Your Free Hail Scan
            </a>
            <a
              href="tel:+16237777365" // UPDATED
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[var(--text-primary)] bg-white/10 border border-[var(--border)] rounded-xl hover:bg-white/15 transition" // UPDATED
            >
              Call (623) 777-7365
            </a>
          </div>
        </div>

        {/* Right-side frosted panel placeholder UPDATED */}
        <div className="hidden lg:block relative h-[400px] rounded-2xl border border-[var(--border)] bg-white/5 backdrop-blur-sm shadow-2xl" />
      </div>
    </section>
  );
}

