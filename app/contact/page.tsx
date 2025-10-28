import ContactForm from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">Have questions or need an inspection? Reach out and our team will respond quickly.</p>
        </div>
      </section>
      <section id="book" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          <div>
            <div className="font-semibold mb-2">Contact information</div>
            <ul className="space-y-1 text-sm">
              <li><a href={site.phoneHref} className="hover:text-primary">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a></li>
              <li>{site.address}</li>
            </ul>
            <div className="mt-6">
              <iframe
                title="Map"
                className="w-full h-56 rounded-md border border-border"
                loading="lazy"
                src="https://www.google.com/maps?q=8350%20E%20Evans%20Rd%20Ste%20E1%2C%20Scottsdale%2C%20AZ%2085260&output=embed"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Send us a message</div>
            <ContactForm />
            <div id="refer" className="mt-8 rounded-md border border-border p-4 text-sm">
              <div className="font-semibold">Refer & Earn $500</div>
              <p className="text-muted-foreground">Refer a dealership or body shop. If they partner with us, you’ll receive $500.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



