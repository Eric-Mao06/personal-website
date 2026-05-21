# Eric Mao Portfolio

Personal portfolio site built with Next.js 15, React 19, Tailwind CSS v4, and Bun.

## Stack

- **Runtime / package manager:** [Bun](https://bun.sh)
- **Framework:** [Next.js 15](https://nextjs.org) (App Router, static export, Turbopack)
- **UI:** [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com)
- **Lint / format:** [Biome 2](https://biomejs.dev)

## Prerequisites

- [Bun](https://bun.sh) 1.3+

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server with Turbopack |
| `bun run build` | Production build (outputs to `out/`) |
| `bun run start` | Serve production build |
| `bun run lint` | Biome lint + TypeScript check |
| `bun run format` | Format with Biome |
| `bun run typecheck` | TypeScript only |
| `bun run test:e2e` | Playwright end-to-end tests |

## Deploy

Pushes to `main` deploy automatically to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
