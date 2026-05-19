import { Service } from "@/types";

export const services: Service[] = [
  {
    icon: "globe",
    title: "Multilingual Corporate Websites",
    description:
      "Professional WordPress and headless websites for small and medium businesses across Europe. Multilingual out of the box, SEO-ready, and fast on every device. Real example: bestcall.pt (6 languages, live in production).",
    features: [
      "WordPress with custom theme and back-office",
      "Multilingual support (WPML / Polylang) up to 6 languages",
      "SEO foundations: schema.org, sitemap, Search Console",
      "Page speed and Core Web Vitals optimization",
      "Contact and recruitment forms with email delivery",
      "Mobile-first responsive design",
    ],
  },
  {
    icon: "rocket",
    title: "Next.js & React Landing Pages",
    description:
      "Modern, fast-loading landing pages and marketing sites built with Next.js, TypeScript, and Tailwind. Animations, dark mode, and Vercel deployment. Perfect for product launches, agencies, and personal brands.",
    features: [
      "Next.js 15 App Router with TypeScript",
      "Tailwind CSS and Framer Motion animations",
      "Dark mode with system preference detection",
      "Headless CMS integration (Sanity / Strapi) optional",
      "Vercel deployment with custom domain",
      "Analytics and conversion tracking setup",
    ],
  },
  {
    icon: "mobile",
    title: "E-commerce & Online Stores",
    description:
      "Online stores built with WooCommerce or custom Next.js stacks. Stripe, MBWAY, Multibanco — payment methods that actually work for Portuguese and European customers. From 20-product shops to 500+ catalogs.",
    features: [
      "WooCommerce or custom Next.js storefront",
      "Stripe, MBWAY and Multibanco payment integration",
      "Multilingual product catalog and checkout",
      "Stock management and order workflows",
      "Shipping rules and tax compliance for EU",
      "Admin dashboard for non-technical owners",
    ],
  },
  {
    icon: "server",
    title: "Custom Web Apps & Dashboards",
    description:
      "Full-stack web applications built with .NET 8 and React — multi-role auth, dashboards, reports, and admin panels. Backed by Clean Architecture, SQL Server, and Entity Framework Core. Production-grade from day one.",
    features: [
      ".NET 8 Web API with Clean Architecture",
      "React + TypeScript frontend with Tailwind",
      "Multi-role authentication and RBAC",
      "Interactive dashboards with charts (Recharts)",
      "REST APIs, webhooks, and third-party integrations",
      "Docker-ready deployment",
    ],
  },
  {
    icon: "chart",
    title: "SEO & Performance Audits",
    description:
      "Your website is online but nobody finds it? Or it's slow? I run a deep audit, identify what's blocking rankings and conversions, and fix the issues — from Core Web Vitals to schema markup and broken metadata.",
    features: [
      "Lighthouse and Core Web Vitals deep dive",
      "Technical SEO audit (schema, sitemap, robots, redirects)",
      "Page speed optimization and image processing",
      "Google Search Console setup and monitoring",
      "Mobile usability and accessibility fixes",
      "Detailed PDF report with priorities and ETAs",
    ],
  },
  {
    icon: "blocks",
    title: "Specialized Engineering",
    description:
      "When the project needs more than a standard website — blockchain middleware, IoT real-time systems, factory monitoring. Built the EBL blockchain middleware (.NET + Ethereum) and the HUF BLE/MQTT worker tracking platform.",
    features: [
      "Blockchain middleware and smart contract integration",
      "Tamper-proof document systems (eBL, audit trails)",
      "MQTT real-time communication",
      "BLE device integration and beacon detection",
      "Industrial IoT dashboards and analytics",
      "Cross-system REST APIs and webhooks",
    ],
  },
];
