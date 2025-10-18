export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Excellence in Car Care</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Scottsdale Hail & Detail brings 30 years of hail repair and detailing expertise to
            the Valley. Our mission is to deliver transparent estimates, factory-finish PDR,
            and zero-hassle insurance claim management.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 md:grid-cols-3">
          {["Lead Estimator", "Detailing Lead", "Client Success"].map((role) => (
            <div key={role} className="rounded-xl border border-border p-6">
              <div className="h-40 rounded bg-secondary/30" />
              <div className="mt-4 font-semibold">{role}</div>
              <div className="text-sm text-muted-foreground">Decades of combined experience.</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to work with us?</h2>
          <a href="/contact#book" className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">Book a free inspection</a>
        </div>
      </section>
    </main>
  );
}

