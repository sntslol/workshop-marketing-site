import { siteConfig } from "@/lib/site-config";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export const hero = {
  headline: "Help homeowners trust you before they call.",
  subhead:
    "We run social media for housecleaning companies in Phoenix. We post on Instagram and Facebook. We update Google Business Profile. We reply to comments and direct messages during Arizona business hours.",
  primaryCta: { href: "#contact", label: "Book a free call" },
  secondaryCta: { href: "#about", label: "Why us" },
} as const;

export const heroSidebar = {
  title: "Your first month",
  items: [
    "We review your profiles.",
    "We plan posts for your services and season.",
    "We reply to comments and direct messages in business hours.",
    "We send a short report on quote requests.",
  ],
} as const;

export const positioning = {
  headline: "We work only with Phoenix cleaners",
  intro:
    "Some agencies sell websites, ads, and search at once. Some tools post to many apps with AI. We do one job well. We help cleaning companies look professional online where homeowners already look.",
  contrasts: [
    {
      title: "Social only",
      body: "We do not build websites or run Google Ads. If you have those, we fit around them. We make your social match the quality you promise on the phone.",
    },
    {
      title: "Fewer posts, better posts",
      body: "We post two or three times a week. Each post shows real work. We write for move-outs, weekly service, and Phoenix seasons.",
    },
    {
      title: "Messages get answers",
      body: "Many low-cost plans post graphics but ignore direct messages. We reply during business hours. We send quote-ready leads to your office.",
    },
  ],
} as const;

export const metrics = [
  { value: "3", label: "apps: Instagram, Facebook, Google" },
  { value: "2–3", label: "posts per week" },
  { value: "100%", label: "Phoenix-area clients" },
  { value: "24h", label: "max wait on urgent messages" },
] as const;

export const servicesSection = {
  title: "Services",
  intro: "Clear work for owner-led cleaning companies. No forced website package.",
} as const;

export const services = [
  {
    title: "Photo guides for crews",
    body: "Each month we send a short shot list. Crews can take before-and-after photos in a few minutes. We turn your photos into posts.",
  },
  {
    title: "Posts and replies",
    body: "We write captions and schedule posts. We reply to comments and direct messages in business hours. We count quote requests, not likes alone.",
  },
  {
    title: "Google Business Profile",
    body: "We add posts and fresh photos on Google. We draft replies to reviews. Your Google page matches Facebook and Instagram.",
  },
  {
    title: "Paid ads (optional)",
    body: "We can run local Facebook and Instagram ads for move-outs or new areas. You approve the budget. This is separate from monthly posting.",
  },
] as const;

export const testimonialsSection = {
  title: "What owners say",
} as const;

export const testimonials = [
  {
    quote:
      "Our old plan posted pictures but never answered messages. Sonoran replies in the day and sends us leads that need a quote.",
    name: "Rosa Delgado",
    role: "Owner, Sparkle Mesa Cleaning",
  },
  {
    quote:
      "No push for a new website or TikTok. Just posts that look like our crews.",
    name: "James Whitfield",
    role: "Operations, Desert Broom Services",
  },
  {
    quote:
      "They told us which photos we must take. That beat AI captions for jobs we never did.",
    name: "Priya Nair",
    role: "Founder, Sunline Home Care",
  },
] as const;

export const processSection = {
  title: "Our process",
} as const;

export const processSteps = [
  {
    title: "Intro call",
    body: "We learn your service area, crew size, and how you get leads today. You give us access to your profiles.",
  },
  {
    title: "Plan and approve",
    body: "We set your voice and photo rules. We build a 90-day post plan. You approve before anything goes live.",
  },
  {
    title: "Post each week",
    body: "We publish on schedule. Each Friday we email what posted and what photos we still need from a job.",
  },
  {
    title: "Review monthly",
    body: "We review messages and top posts. If a channel does not help, we tell you and change the plan.",
  },
] as const;

export const faqSection = {
  title: "Questions",
} as const;

export const faqs = [
  {
    question: "Do you only work with cleaning companies?",
    answer:
      "Yes. We work with housecleaning and light commercial cleaning in Greater Phoenix.",
  },
  {
    question: "Why not a general social agency?",
    answer:
      "General agencies serve many industries. We know cleaning offers, trust issues, and the questions homeowners send in messages.",
  },
  {
    question: "Why not a cheap post-only plan?",
    answer:
      "Many low-cost plans do not answer comments or direct messages. Missed messages can cost you jobs.",
  },
  {
    question: "Do you build websites or run Google Ads?",
    answer:
      "No. We focus on social. We can work with your web or ads partner if you have one.",
  },
  {
    question: "What does it cost?",
    answer:
      "Organic posting starts at $950 per month for one location. That includes Instagram, Facebook, Google, and message replies. Paid ads cost extra. You can cancel with 30 days notice.",
  },
  {
    question: "Are you in Phoenix?",
    answer:
      "Yes. We work in Arizona time. Urgent homeowner messages get a same-day reply when possible.",
  },
] as const;

export const ctaBand = {
  headline: "Want posts that help you book jobs?",
  body: "Tell us your routes and crew size. We will say if we are a fit.",
  button: { href: "#contact", label: "Book a free call" },
} as const;

export const contact = {
  headline: "Talk with Maya",
  body: "Maya leads new clients. She fits posts to your schedule and your other marketing.",
  name: "Maya Torres",
  title: "Client lead, Sonoran Social",
  email: "maya@sonoransocial.com",
  phone: siteConfig.phone,
} as const;

export const footer = {
  tagline: "Social media for Phoenix housecleaning companies.",
  legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
} as const;
