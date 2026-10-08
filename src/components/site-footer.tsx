import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { footer, navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div className="space-y-3">
          <p className="font-serif text-xl font-semibold">{siteConfig.name}</p>
          <p className="max-w-sm text-sm leading-relaxed text-sand/80">
            {footer.tagline}
          </p>
          <p className="text-sm text-sand/70">{siteConfig.location}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium text-sand">Navigate</p>
          <ul className="space-y-2 text-sm text-sand/80">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium text-sand">Contact</p>
          <ul className="space-y-2 text-sm text-sand/80">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-4 text-sm text-sand/60">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-sand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-sand/50">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
