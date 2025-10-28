import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            We fix hail damage start to finish
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Precision LED assessments, factory-finish paintless dent repair, and
            zero-hassle insurance claim help in Scottsdale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={site.calendlyUrl || "/contact#book"}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium"
            >
              Book Your Free Hail Scan
            </a>
            <Link
              href="/contact#refer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6"
            >
              Refer & Earn $500
            </Link>
          </div>
        </div>
        <div className="aspect-[16/10] md:aspect-[16/10] rounded-xl bg-[url('/hero.jpg')] bg-cover bg-center border border-border" />
      </div>
    </section>
  );
}


