import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { hero, navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          {siteConfig.name}
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm text-ink-muted md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-teal-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={hero.primaryCta.href}
          className="rounded-full bg-teal px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          {hero.primaryCta.label}
        </a>
      </div>
    </header>
  );
}
