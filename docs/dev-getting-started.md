# Getting Started Developing choose-your-own-csv

choose-your-own-csv is an [Astro](https://astro.build/) static-site template that publishes interactive, branching-narrative stories from a CSV spreadsheet.
If you want to host and share (develop) your own instance, follow these instructions.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

---

## Quick Start

### 1. Clone or fork this repository

```bash
git clone https://github.com/evanwill/choose-your-own-csv.git
cd choose-your-own-csv
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The site will be available at **http://localhost:4321/**

Open it in your browser. You should see the home page listing the included demo story. Click "Demo Story" to try the story player.

---

## Project Structure

```
choose-your-own-csv/
├── public/                   # Static assets served as-is
│   ├── assets/               # CSV story files go here
│   │   └── story-example.csv # Example story CSV
│   ├── styles/
│   │   └── global.css        # Site-wide styles (edit to customise appearance)
│   └── favicon.svg
├── src/
│   ├── config.js             # ← Main configuration file (edit this!)
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML layout (header, footer, metadata)
│   └── pages/
│       ├── index.astro       # Home page — lists all configured stories
│       └── story.astro       # Story player page (all rendering is client-side)
├── docs/                     # Documentation
│   ├── spreadsheet_setup.md  # CSV column conventions
│   ├── spreadsheet_publish.md# How to publish a CSV (Google Sheets, web, etc.)
│   ├── story-template.csv    # Blank CSV template
│   └── story-example.csv     # Example story CSV
├── astro.config.mjs          # Astro framework configuration
└── package.json
```

---

## Adding Stories

### Step 1 — Prepare your CSV

Follow the conventions in "spreadsheet_setup.md" to write an story.

### Step 2 — Publish the CSV on the web

Copy your CSV into `public/assets/`:

```
public/assets/my-story.csv
```

Or host it externally (e.g. publish a Google Sheet — see `docs/spreadsheet_publish.md`).

### Step 3 — Register the project

Open `src/config.js` and add an entry to the `stories` array:

```js
export const stories = [
  {
    id: "my-story",       // short, URL-safe slug
    title: "My Story",    // display name on the home page
    description: "A gripping adventure.",
    csv: "/assets/my-story.csv",   // path in public/, or a full URL
  },
];
```

### Step 4 — Preview

```bash
npm run dev
```

Navigate to **http://localhost:4321/** and click your story title to read it.

---

## Configuration Reference (`src/config.js`)

| Export | Type | Description |
|--------|------|-------------|
| `siteTitle` | `string` | Site name shown in the header and browser tab |
| `siteDescription` | `string` | `<meta>` description for the whole site |
| `siteFooter` | `string` | Text displayed in the site footer |
| `developmentMode` | `boolean` | When `true`, shows a form on the home page to load any CSV URL for testing |
| `stories` | `array` | List of story objects — see above |

---

## Development Mode

While `developmentMode: true` is set in `src/config.js`, the home page displays a **Load any CSV** form.  
Paste any publicly accessible CSV URL (e.g. a published Google Sheet link) and click **Load Story** to preview it instantly — without editing the config.

This is useful for:
- Collaborative prototyping — share just the Google Sheet URL
- Testing a CSV before adding it to the project

Set `developmentMode: false` before deploying your final site.

You can also load a CSV by appending `?csv=<url>` to the story player URL:

```
http://localhost:4321/story/?csv=https://example.com/my-story.csv
```

---

## Building for Production

```bash
npm run build
```

The static site is output to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Deploying

### GitHub Pages

1. Open `astro.config.mjs` and set `site` to your GitHub Pages URL and `base` to your repo name:

   ```js
   export default defineConfig({
     site: 'https://YOUR_USERNAME.github.io',
     base: '/YOUR_REPO_NAME/',
   });
   ```

2. Push the `dist/` folder to the `gh-pages` branch, or use the
   [GitHub Actions Astro deploy workflow](https://docs.astro.build/en/guides/deploy/github/).

### Other hosts (Netlify, Vercel, Cloudflare Pages, …)

Set the build command to `npm run build` and the publish directory to `dist/`.  
For root-domain deployments you can remove (or set to `'/'`) the `base` option in `astro.config.mjs`.

---

## Customizing the Look

All styles live in `public/styles/global.css`.  
The file uses [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (variables) at the top — changing those is the quickest way to re-theme the site:

```css
:root {
  --color-accent: #5b4fcf;  /* purple — change this to your brand colour */
  --color-bg: #faf9f6;
  --font-serif: Georgia, serif;
  /* … */
}
```

---

## Adding Content Pages

You can add any number of standard Astro pages alongside the story player.  
Create a new `.astro` file in `src/pages/`, for example `src/pages/about.astro`, using the shared `Layout` component:

```astro
---
import Layout from '../layouts/Layout.astro';
import { siteFooter } from '../config.js';
---
<Layout title="About">
  <div class="container">
    <h1>About This Project</h1>
    <p>Write your content here…</p>
  </div>
  <span slot="footer">{siteFooter}</span>
</Layout>
```

---

## Further Reading

- `docs/spreadsheet_setup.md` — complete CSV column reference
- `docs/spreadsheet_publish.md` — how to publish a CSV from Google Sheets or the web
- [Astro documentation](https://docs.astro.build/)
- [PapaParse documentation](https://www.papaparse.com/docs)
