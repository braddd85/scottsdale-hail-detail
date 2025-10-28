export const metadata = { title: "Paintless Dent Repair" };

export default function PDRPage() {
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Restore your car's perfection with PDR</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">PDR removes dents without paint or filler, keeping the factory finish intact and retaining value.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8">
          <div className="rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold">Advantages of PDR</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Preserves original paint; no color matching issues</li>
              <li>Faster turnaround and cost-effective</li>
              <li>Ideal for hail damage, door dings, and minor impacts</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold">Our process</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Consultation and LED-booth assessment</li>
              <li>Precise repair with specialized PDR tools</li>
              <li>Quality check and delivery</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-border/60 text-center">
        <a href="/contact#book" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">Request a quote</a>
      </section>
    </main>
  );
}



