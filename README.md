# forty2.co

A minimal landing page for [forty2.co](https://forty2.co) — a personal incubator.

Built with SolidJS and DaisyUI, hosted on GitHub Pages with a custom domain via Cloudflare.

## Quick Start

```bash
make install    # install dependencies
make dev        # start dev server at http://localhost:5173
```

## Commands

| Command | What it does |
|---------|-------------|
| `make install` | Install npm dependencies |
| `make dev` | Start Vite dev server |
| `make build` | Production build to `dist/` |
| `make test` | Run all tests (Vitest, single run) |
| `make clean` | Remove `dist/` and `node_modules/` |

### Versioning

```bash
make version          # show current version
make version-patch    # bump patch (1.0.0 → 1.0.1)
make version-minor    # bump minor (1.0.0 → 1.1.0)
make version-major    # bump major (1.0.0 → 2.0.0)
make version-sync     # sync VERSION → package.json
```

## Project Structure

```
src/
├── components/
│   ├── NavigationBar.jsx    # Fixed top navbar with brand
│   ├── HeroSection.jsx      # Full-viewport hero message
│   ├── HeroDoodles.jsx      # Decorative background elements
│   ├── EmailForm.jsx        # Email subscription form
│   └── Footer.jsx           # Copyright footer
├── __tests__/               # Unit and property-based tests
├── App.jsx                  # Root component
├── index.jsx                # Entry point
└── index.css                # Tailwind + DaisyUI theme
```

## Tech Stack

- [SolidJS](https://www.solidjs.com/) — reactive UI framework
- [DaisyUI](https://daisyui.com/) + [Tailwind CSS](https://tailwindcss.com/) — styling
- [Vite](https://vite.dev/) — build tool
- [Vitest](https://vitest.dev/) + [fast-check](https://fast-check.dev/) — testing

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_LOOPS_FORM_ID` | No | Loops.so form ID for email subscriptions. If not set, the form works in offline mode. |

Copy `.env.example` to `.env` and fill in values as needed.

## Deployment

The site deploys to GitHub Pages via GitHub Actions on push to `main`. The `CNAME` file in `public/` points to `forty2.co`.

## License

Private.
