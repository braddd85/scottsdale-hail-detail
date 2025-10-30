import { site } from "@/lib/site";

export default function SeoSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: site.name,
    telephone: site.phone,
    email: site.email,
    image: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8350 E Evans Rd Ste E1",
      addressLocality: "Scottsdale",
      addressRegion: "AZ",
      postalCode: "85260",
      addressCountry: "US"
    },
    areaServed: "US",
    url: "https://scottsdalehail.com"
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

