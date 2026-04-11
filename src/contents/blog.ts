import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-apis-nodejs",
    title: "Building Scalable REST APIs with Node.js: Lessons from Production",
    excerpt:
      "After building APIs that handle thousands of requests in production environments, here are the patterns and practices I've found most valuable for building reliable, maintainable Node.js backends.",
    content: `
## Why API Architecture Matters

When I built the backend for NextHire's job portal, I learned quickly that a well-structured API is the foundation of any scalable application. Poor API design leads to technical debt that compounds over time.

## Key Principles I Follow

### 1. Layered Architecture

I separate my Node.js backends into clear layers:

- **Routes** — Define endpoints and HTTP methods
- **Controllers** — Handle request/response logic
- **Services** — Business logic, completely decoupled from HTTP
- **Repositories** — Data access abstraction

This separation makes testing straightforward and refactoring safe. When I needed to add Redis caching to Simple Shop, I only touched the repository layer.

### 2. Input Validation at the Edge

Every request gets validated before it reaches business logic. I use schema validation (Zod or Joi) at the controller level to ensure data integrity early.

### 3. Error Handling Strategy

A centralized error handler catches everything. Custom error classes (NotFoundError, ValidationError, AuthenticationError) map to appropriate HTTP status codes automatically.

### 4. Rate Limiting & Security

Production APIs need rate limiting, CORS configuration, helmet for security headers, and proper authentication middleware. These aren't optional — they're baseline requirements.

## Database Strategy

For Simple Shop, I used a multi-database approach:
- **MySQL** for relational data (users, orders, products)
- **MongoDB** for flexible data (product reviews, logs)
- **Redis** for caching and session management

This taught me that choosing the right database for each use case is more important than picking one "best" database.

## Performance Patterns

- **Connection pooling** for database connections
- **Query optimization** with proper indexing
- **Response compression** with gzip
- **Pagination** for all list endpoints
- **Caching** with TTL-based invalidation

## Conclusion

Building scalable APIs is about making good architectural decisions early and being disciplined about patterns. The effort pays off exponentially as the application grows.
    `,
    date: "2025-12-15",
    readTime: "7 min read",
    category: "Backend",
    image: "/blog/api-architecture.svg",
    tags: ["Node.js", "REST API", "Architecture", "Performance"],
  },
  {
    slug: "from-junior-to-fullstack-my-journey",
    title: "From Junior to Full-Stack: What 2 Years of Real Projects Taught Me",
    excerpt:
      "My journey from a computer engineering graduate to a full-stack developer working on blockchain, IoT, and enterprise platforms. The skills that actually matter aren't always technical.",
    content: `
## The Beginning

When I graduated from ESTGV in 2024 with a degree in Computer Engineering, I thought I knew how to code. What I didn't know was how to build software — there's a massive difference.

## Lesson 1: Real Projects Break Your Assumptions

My first professional project at HUF involved building a real-time worker monitoring system. This wasn't a tutorial project — I had to make BLE beacons talk to a Node.js server via MQTT, build an admin panel in PHP, and deliver a live dashboard that production managers would use daily.

The constraints of real-world systems taught me more in 6 months than 3 years of university:
- Hardware doesn't always behave as documented
- Network latency is real and unpredictable
- Users will do things you never expected
- Deadlines force you to prioritize ruthlessly

## Lesson 2: The Stack Doesn't Matter (As Much As You Think)

At HUF, I used PHP, JavaScript, and Node.js. At Softinsa, I worked with React, Node.js, and PostgreSQL. At Devlop, I jumped to C#/.NET, Python, and SQL Server.

The pattern became clear: **languages and frameworks are tools**. The real skills are:
- Understanding data flow and system architecture
- Debugging effectively
- Reading other people's code
- Writing code that others can read

## Lesson 3: Communication Is a Superpower

At BestCall.pt, I worked directly with the founder to turn Figma designs into a complete WordPress platform. The technical work was straightforward — the challenge was understanding business requirements, managing expectations, and delivering iteratively.

Being fluent in English, Portuguese, Spanish, and French has opened doors I never expected. Tech is global, and communication breaks more projects than bad code.

## Lesson 4: Blockchain Isn't Just Crypto

At Devlop Supply Chain, I worked on digitizing Bills of Lading using blockchain. This wasn't speculation or tokens — it was using distributed ledger technology to create tamper-proof documents for the shipping industry. Real blockchain solving real problems.

## What's Next

I'm now building my own software business. The combination of technical skills, client experience, and understanding of real-world problems gives me confidence that I can deliver value. The journey from junior to professional isn't about years — it's about the quality and diversity of problems you solve.
    `,
    date: "2026-01-20",
    readTime: "6 min read",
    category: "Career",
    image: "/blog/journey.svg",
    tags: ["Career", "Growth", "Full-Stack", "Experience"],
  },
  {
    slug: "why-nextjs-for-modern-web-apps",
    title: "Why I Choose Next.js for Modern Web Applications in 2026",
    excerpt:
      "After building production applications with various frameworks, here's why Next.js remains my go-to choice for web development — and when I'd choose something different.",
    content: `
## The Framework Landscape

The JavaScript ecosystem offers countless options. I've worked with vanilla JS, jQuery, React SPAs, and Next.js. Each has its place, but for most modern web applications, Next.js provides the best developer experience and user outcome.

## What Makes Next.js Stand Out

### App Router & Server Components

The App Router (introduced in Next.js 13, matured by 15) fundamentally changes how we think about React applications. Server Components reduce the JavaScript sent to the client, improving performance without sacrificing developer experience.

For this portfolio, Server Components handle the static content while Client Components handle interactivity — the best of both worlds.

### Built-in Performance

- **Automatic code splitting** per route
- **Image optimization** with next/image
- **Font optimization** with next/font
- **Prefetching** for instant navigation
- **Static generation** where possible

### SEO Without Compromise

Server-side rendering means search engines see fully rendered content. Combined with the metadata API, structured data, and sitemap generation, Next.js makes SEO a first-class concern rather than an afterthought.

## When I Wouldn't Choose Next.js

- **Simple static sites** — Astro or even plain HTML might be lighter
- **Heavy real-time apps** — A dedicated SPA with WebSocket might be simpler
- **Non-JavaScript teams** — Rails, Django, or Laravel might be more productive

## My Next.js Stack

For most projects, I pair Next.js with:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Zod** for validation
- **Prisma** or raw SQL for database access

## Conclusion

Next.js isn't perfect for everything, but for building modern, performant, SEO-friendly web applications, it's hard to beat. The key is knowing when to use it and when to reach for something simpler.
    `,
    date: "2026-03-05",
    readTime: "5 min read",
    category: "Frontend",
    image: "/blog/nextjs.svg",
    tags: ["Next.js", "React", "Frontend", "Performance"],
  },
  {
    slug: "real-time-iot-monitoring-with-mqtt",
    title: "Building Real-Time IoT Monitoring Systems with MQTT and Node.js",
    excerpt:
      "How I built a real-time worker productivity monitoring system for an automotive factory using BLE beacons, MQTT protocol, and a Node.js control panel.",
    content: `
## The Problem

At HUF's automotive production facility, managers needed real-time visibility into workforce allocation. Workers moved between stations, and there was no way to track who was where, identify bottlenecks, or optimize schedules.

## The Architecture

I designed a three-tier system:

### 1. BLE Detection Layer
Bluetooth Low Energy beacons placed at workstations detect worker badges. A mobile app reads beacon signals and determines proximity to each station.

### 2. MQTT Message Broker
Worker location events flow through an MQTT broker. MQTT was chosen over HTTP because:
- **Lightweight protocol** — minimal overhead for frequent updates
- **Pub/Sub pattern** — multiple consumers can react to the same events
- **QoS levels** — guaranteed delivery for critical events
- **Persistent sessions** — reconnection without data loss

### 3. Node.js Control Panel
A real-time dashboard built with Node.js and Express subscribes to MQTT topics and displays:
- Live worker positions on a factory floor map
- Station occupancy and idle time
- Historical productivity trends
- Alert notifications for understaffed areas

## Technical Challenges

### Signal Reliability
BLE signals are noisy. I implemented a sliding window algorithm to smooth out false readings and only trigger location changes after consistent detection over multiple intervals.

### Scalability
With hundreds of workers and dozens of stations, message volume was significant. I batched updates and used Redis for in-memory state to keep the dashboard responsive.

### Admin Panel
A separate PHP admin panel allowed managers to configure stations, manage worker profiles, set thresholds for alerts, and generate reports.

## Results

The system reduced workforce allocation response time from hours to minutes. Managers could see real-time bottlenecks and redistribute workers dynamically, leading to measurable improvements in production throughput.

## Key Takeaways

Building IoT systems taught me that the biggest challenges aren't in the code — they're in handling unreliable hardware, noisy data, and the gap between what sensors report and what's actually happening. Robust error handling and data smoothing algorithms are essential.
    `,
    date: "2026-02-10",
    readTime: "8 min read",
    category: "IoT",
    image: "/blog/iot-monitoring.svg",
    tags: ["IoT", "MQTT", "Node.js", "Real-time", "BLE"],
  },
];
