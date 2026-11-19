# fabio-portfolio

Source code for **[fabiosilva.design](https://www.fabiosilva.design)**: Fábio Silva's product design portfolio, rebuilt in code from the Framer site.

Built with [Astro](https://astro.build), a static site generator. Every page is plain HTML and CSS, with no JavaScript shipped to the browser. Images are optimized to responsive WebP at build time.

## Run it locally

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install
npm run dev
```

Then open <http://localhost:4321> in your browser. Edits to any file reload the page instantly.

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the local dev server with live reload        |
| `npm run build`   | Build the production site into `dist/`             |
| `npm run preview` | Serve the production build locally to test it      |

## Pages

| URL                     | File                                  |
| ----------------------- | ------------------------------------- |
| `/`                     | `src/pages/index.astro`               |
| `/cv`                   | `src/pages/cv.astro`                  |
| `/redesign_tw`          | `src/pages/redesign_tw.astro`         |
| `/trading_workbench`    | `src/pages/trading_workbench.astro`   |
| `/bankingsuite_elounge` | `src/pages/bankingsuite_elounge.astro`|

The URLs match the current Framer site, so existing links keep working.

## Project structure

```
src/
├── assets/images/   Screenshots, grouped by project (optimized at build time)
├── components/      Reusable building blocks (cards, section headers, figures…)
├── data/projects.ts Case-study list used by the home page and "Next project"
├── layouts/         Page shell: <head>, SEO tags, navigation
├── pages/           One file per URL
└── styles/global.css  Fonts, colour tokens, type scale
public/              Files served as-is (favicon, robots.txt)
```

### Common edits

- **Change copy:** edit the text directly in the page file under `src/pages/`.
- **Add a case study:** add an entry to `src/data/projects.ts`, add its images to `src/assets/images/<project>/`, and create a page in `src/pages/` (copy an existing case study as a starting point).
- **Change colours or type sizes:** edit the tokens at the top of `src/styles/global.css`.

## Fonts

The site uses **ABC Marist** (headings) and **ABC Diatype** (body) from Dinamo. These are the *trial* versions uploaded to Framer, and they are loaded from Framer's CDN exactly as on the live site.

Before deploying this code as the live site:

1. Buy web licences at [abcdinamo.com](https://abcdinamo.com).
2. Put the `.woff2` files in `public/fonts/`.
3. Point the `@font-face` URLs at the top of `src/styles/global.css` to `/fonts/…`.

## Deploying

The output of `npm run build` is a static `dist/` folder that can be hosted anywhere. The easiest options are [Netlify](https://www.netlify.com), [Vercel](https://vercel.com) or [Cloudflare Pages](https://pages.cloudflare.com). Connect this GitHub repo, keep the defaults (build command `npm run build`, output folder `dist`), then point the `fabiosilva.design` domain at it.

Every push to `main` is built by GitHub Actions (`.github/workflows/build.yml`), so a broken build shows up right away.
