export const site = {
  name: "Scottsdale Hail & Detail",
  phone: "(623) 777-7365",
  phoneHref: "tel:+16237777365",
  email: "info@scottsdalehail.com",
  address: "8350 E Evans Rd Ste E1, Scottsdale, AZ 85260",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" }
  ]
} as const;

export type Site = typeof site;

