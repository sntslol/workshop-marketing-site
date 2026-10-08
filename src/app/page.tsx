import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import {
  contact,
  ctaBand,
  faqSection,
  faqs,
  hero,
  heroSidebar,
  metrics,
  positioning,
  processSection,
  processSteps,
  services,
  servicesSection,
  testimonials,
  testimonialsSection,
} from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-surface">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-clay/15 to-transparent"
            aria-hidden
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-8 md:py-28">
            <div className="space-y-6">
              <p className="text-sm font-medium text-teal">{siteConfig.location}</p>
              <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl md:leading-[1.08]">
                {hero.headline}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
                {hero.subhead}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={hero.primaryCta.href}
                  className="rounded-full bg-teal px-6 py-3 text-sm font-medium text-white hover:bg-teal-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="rounded-full border border-ink/15 bg-transparent px-6 py-3 text-sm font-medium text-ink hover:border-teal/40 hover:text-teal-deep"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-sand p-6 md:p-8">
              <p className="mb-4 font-serif text-xl text-ink">
                {heroSidebar.title}
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-ink-muted">
                {heroSidebar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-ink/10 bg-sand-deep/40 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                {positioning.headline}
              </h2>
              <p className="text-lg leading-relaxed text-ink-muted">
                {positioning.intro}
              </p>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {positioning.contrasts.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-ink/10 bg-surface p-6"
                >
                  <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-teal py-12 text-white md:py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-3xl md:text-4xl">{metric.value}</p>
                <p className="mt-2 text-sm leading-snug text-white/85">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                {servicesSection.title}
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                {servicesSection.intro}
              </p>
            </div>
            <ul className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="border-l-2 border-clay pl-5 md:pl-6"
                >
                  <h3 className="font-serif text-xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="mb-10 font-serif text-3xl text-ink md:text-4xl">
              {testimonialsSection.title}
            </h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col justify-between rounded-xl bg-sand p-6"
                >
                  <blockquote className="text-sm leading-relaxed text-ink">
                    “{item.quote}”
                  </blockquote>
                  <footer className="mt-6 text-sm">
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="text-ink-muted">{item.role}</p>
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="mb-12 font-serif text-3xl text-ink md:text-4xl">
              {processSection.title}
            </h2>
            <ol className="grid gap-8 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="font-serif text-2xl text-clay"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="border-t border-ink/10 bg-sand-deep/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="mb-8 font-serif text-3xl text-ink md:text-4xl">
              {faqSection.title}
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-ink/10 bg-surface px-5 py-4"
                >
                  <summary className="cursor-pointer list-none font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-sand md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-xl space-y-3">
              <h2 className="font-serif text-3xl md:text-4xl">
                {ctaBand.headline}
              </h2>
              <p className="text-sand/80">{ctaBand.body}</p>
            </div>
            <a
              href={ctaBand.button.href}
              className="shrink-0 rounded-full bg-clay px-6 py-3 text-sm font-medium text-white hover:bg-clay/90"
            >
              {ctaBand.button.label}
            </a>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                {contact.headline}
              </h2>
              <p className="mt-4 max-w-md text-ink-muted">{contact.body}</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-surface p-8">
              <p className="font-serif text-2xl text-ink">{contact.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{contact.title}</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-medium text-teal hover:text-teal-deep"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-ink-muted hover:text-ink"
                  >
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
