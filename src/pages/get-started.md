---
layout: ../layouts/ContentLayout.astro
title: Get Started
---

Follow the steps below to set up your own choose-your-own-csv site.

## 1. Fork or Clone the Repository

Start by forking [choose-your-own-csv on GitHub](https://github.com/evanwill/choose-your-own-csv) or cloning it locally:

```bash
git clone https://github.com/evanwill/choose-your-own-csv.git
cd choose-your-own-csv
npm install
```

## 2. Create Your Story Spreadsheet

Copy `docs/story-template.csv` as a starting point.
Each row in the CSV represents one scene in your story.
See `docs/spreadsheet_setup.md` for the full column reference.

## 3. Configure the Site

Open `src/config.js` and update the values for your site:

- `siteTitle` — the name of your site
- `siteDescription` — a short description used in search-engine previews
- `siteFooter` — footer text (credits, copyright, etc.)
- `stories` — add an entry for each CSV story you want to include
- `developmentMode` — set to `false` before publishing

## 4. Run the Development Server

```bash
npm run dev
```

Open <http://localhost:4321> in your browser.
Changes to your CSV or configuration are reflected immediately.

## 5. Build and Deploy

```bash
npm run build
```

The finished site is written to the `dist/` folder.
Upload its contents to any static web host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

For GitHub Pages, set `site` and `base` in `astro.config.mjs` to match your repository URL before building.
