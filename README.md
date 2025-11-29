# CloudSync Pro - Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, and Tailwind CSS, featuring beautiful animations and optimized server-side rendering.

## Features

- **Hero Section** - Eye-catching hero with animated gradient background, heading, subtext, and CTA buttons
- **Features Section** - 6 feature cards with hover animations and icons
- **Testimonials Section** - Customer testimonials with ratings and trust badges
- **Pricing Section** - 3 pricing tiers with interactive cards and feature lists
- **Footer** - Comprehensive footer with links and social media icons

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Server Components** - Optimized performance with RSC
- **Client Components** - Only for interactive elements (buttons, pricing cards)

## Architecture Highlights

### Server vs Client Components

This project follows Next.js 15 best practices for optimal performance:

**Server Components (Default):**
- Main page layout (page.tsx)
- Hero section content
- Features section
- Testimonials section
- Pricing section wrapper
- Footer

**Client Components (Minimal):**
- CTAButton.tsx - Interactive buttons with hover effects
- PricingCard.tsx - Interactive pricing cards with animations

This approach ensures:
- Faster initial page load
- Reduced JavaScript bundle size
- Better SEO and performance scores
- Optimal use of server-side rendering

## Getting Started

### Installation

npm install

### Development

npm run dev

Open http://localhost:3000 to view the landing page.

### Build

npm run build

### Production

npm start

## Deployment

Optimized for Vercel deployment with zero configuration.

## License

MIT
