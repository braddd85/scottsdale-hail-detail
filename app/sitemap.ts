export default function sitemap() {
  const base = "https://scottsdalehail.com";
  return [
    "",
    "/about",
    "/services",
    "/services/pdr",
    "/services/hail-damage-repair",
    "/services/free-mes-lit-inspections",
    "/gallery",
    "/contact",
  ].map((p) => ({ url: base + p, lastModified: new Date() }));
}

