# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
- Static site built with **Astro** (see `astro.config.mjs`).
- Output is a static build to `dist/` and is deployed to **GitHub Pages**.
- CI deploy workflow uses **Node 20** (see `.github/workflows/deploy.yml`).
- Base path for Pages hosting is set in `astro.config.mjs` (and mirrored in `vite.config.js`): `base: '/KEME-AGIDI/'`.

## Common commands
All commands are run from the repo root.

### Install
- Clean, reproducible install (recommended in CI):
  - `npm ci`
- Normal local install:
  - `npm install`

### Dev server
- `npm run dev`
  - Runs `astro dev` (local dev server with HMR).

### Build + preview
- `npm run build`
  - Produces a production build in `dist/`.
- `npm run preview`
  - Serves the production build locally.

### Lint
- `npm run lint`
  - Runs ESLint using the flat config in `eslint.config.js`.

### Deploy
Two deployment paths exist:
- GitHub Actions Pages deploy: `.github/workflows/deploy.yml` builds `dist/` and publishes it to GitHub Pages on pushes to `main`.
- Local deploy (gh-pages): `npm run deploy`
  - Runs `gh-pages -d dist` (expects `dist/` to already exist; `npm run predeploy` runs `npm run build`).

## Architecture / structure
Astro’s file-based routing and component model are the core organizing principles.

- `src/pages/`
  - Route entries. `src/pages/index.astro` is currently the primary page.
  - The page imports Bootstrap CSS, uses `astro:assets` for optimized images, and initializes Lenis smooth scrolling for in-page anchor navigation.
- `src/components/`
  - Reusable Astro components. `src/components/Navbar.astro` contains the fixed-top navbar and client-side behavior (Bootstrap bundle init + scroll/IntersectionObserver logic for active link highlighting).
- `src/assets/`
  - Images imported into `.astro` files (typically via `astro:assets` and `<Image />`).
- `public/`
  - Static files copied through verbatim (currently empty).

## Notes / gotchas
- `README.md` appears to be the default Vite/React template text; prefer `package.json` scripts and `astro.config.mjs` as the source of truth.
- `eslint.config.js` imports React-related ESLint plugins; if `npm run lint` fails due to missing plugins, ensure those plugin packages are installed and reflected in `package.json`.
- No test runner is currently configured (there is no `test` script in `package.json`).