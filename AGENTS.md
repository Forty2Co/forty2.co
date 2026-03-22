# forty2.co Landing Page

## Project Overview
Static single-page landing page for **forty2.co**, a personal incubator. Hosted on GitHub Pages with a custom domain managed via Cloudflare.

## Tech Stack
- **Framework**: SolidJS
- **UI Library**: DaisyUI (with Tailwind CSS)
- **Hosting**: GitHub Pages (free tier)
- **Domain**: forty2.co (managed on Cloudflare, pointed to GitHub Pages)

## Design Direction
- Minimal, clean, and modern
- Single page with a bold hero section
- Friendly, approachable tone
- Soft color palette, generous whitespace, rounded elements
- Mobile-first responsive design

## Content
- Hero message: "forty2.co is a personal incubator. I'm cooking something exciting — watch this space for further updates."
- Optional: email subscription form (if low effort to implement)

## Future Scope (not in v1)
- About Us page
- Blog page
- Projects page

## Build & Deploy
- `make build` to produce static output (wraps `npm run build`)
- `make install`, `make dev`, `make test`, `make clean` for other workflows
- Deploy via GitHub Actions to GitHub Pages
- CNAME file for custom domain (forty2.co)

## Coding Standards
- JavaScript only — no TypeScript
- Keep it simple — single page, minimal dependencies
- Accessible markup (semantic HTML, proper contrast)
- No server-side logic — purely static SPA
