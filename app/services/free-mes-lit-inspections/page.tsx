export const metadata = { title: "Free MES-lit Inspections" };

export default function MesLitPage() {
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Free MES-lit Inspections</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">Our state-of-the-art LED booth reveals what standard lighting misses for transparent, accurate estimates.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8">
          <div className="rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold">What to expect</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Guided photo capture and LED-booth assessment</li>
              <li>Comprehensive documentation of depth, diameter, and location</li>
              <li>Insurance-ready estimate and next steps</li>
            </ol>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <p className="mt-2 text-sm text-muted-foreground">The inspection is non-invasive and typically takes under 30 minutes.</p>
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-border/60 text-center">
        <a href="/contact#book" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">Book your free inspection</a>
      </section>
    </main>
  );
}



