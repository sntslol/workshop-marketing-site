export const siteConfig = {
  name: "Sonoran Social",
  title: "Social media for Phoenix housecleaning companies",
  description:
    "Sonoran Social runs Instagram, Facebook, and Google Business Profile for housecleaning companies in Phoenix. We post, reply to messages, and track quote requests.",
  location: "Phoenix, Arizona",
  email: "hello@sonoransocial.com",
  phone: "(480) 555-0142",
} as const;

export function getSiteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}
