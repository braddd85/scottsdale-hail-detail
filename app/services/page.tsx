import Link from "next/link";

export const metadata = { title: "Our Services" };

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Comprehensive solutions from precision inspections to factory-finish PDR and claim management.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services/pdr" className="rounded-md border border-border px-4 py-2 text-sm">Paintless Dent Repair</Link>
            <Link href="/services/hail-damage-repair" className="rounded-md border border-border px-4 py-2 text-sm">Hail Damage Repair</Link>
            <Link href="/services/free-mes-lit-inspections" className="rounded-md border border-border px-4 py-2 text-sm">Free MES-lit Inspections</Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10">
          {[{
            title: "Paintless Dent Repair",
            body: "PDR restores panels without paint or filler, preserving OEM finish and value.",
            href: "/services/pdr"
          },{
            title: "Hail Damage Repair",
            body: "From intake to delivery, we coordinate repairs and approvals efficiently.",
            href: "/services/hail-damage-repair"
          },{
            title: "Free MES-lit Inspections",
            body: "Our LED booth reveals every dent for accurate, transparent estimates.",
            href: "/services/free-mes-lit-inspections"
          }].map(s => (
            <div key={s.title} className="rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <Link href={s.href} className="mt-4 inline-block text-primary">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 border-t border-border/60 text-center">
        <a href="/contact#book" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">Schedule service</a>
      </section>
    </main>
  );
}



