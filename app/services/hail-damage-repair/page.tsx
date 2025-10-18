export const metadata = { title: "Hail Damage Repair" };

export default function HailDamageRepairPage() {
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Hail damage repair, handled promptly</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">Address hail damage quickly to protect value. Our factory-finish approach minimizes downtime and keeps OEM paint.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8">
          <div className="rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold">Benefits</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Preserves vehicle value and finish</li>
              <li>Insurance-ready documentation and approvals</li>
              <li>Rapid scheduling prevents further deterioration</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-border/60 text-center">
        <a href="/contact#book" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">Schedule an assessment</a>
      </section>
    </main>
  );
}

