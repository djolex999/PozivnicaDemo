# PozivnicaDemo

A single-page animated wedding invitation demo, in Serbian (`lang="sr"`). Tap the envelope to open it and reveal the invitation card; the layout is tuned for mobile.

Status: demo. The content is a sample invitation, and the site is a static export.

## Stack

Next.js 15 (App Router, `output: "export"`), React 19, TypeScript, Tailwind CSS 3.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

No environment variables.

## Deploy

GitHub Pages via GitHub Actions (`.github/workflows/`). When `GITHUB_ACTIONS` is set, `next.config.ts` applies the `/PozivnicaDemo` base path and asset prefix, so asset URLs resolve under the project page.
