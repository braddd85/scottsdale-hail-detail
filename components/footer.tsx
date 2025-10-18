import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-bold text-lg">{site.name}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Scottsdale’s premier hail repair & detailing team.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick links</div>
          <ul className="space-y-1 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-1 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-8">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  );
}

