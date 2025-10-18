export default function robots() {
  const base = "https://scottsdalehail.com";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}

