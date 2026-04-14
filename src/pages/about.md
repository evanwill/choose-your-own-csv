---
layout: ../layouts/ContentLayout.astro
title: About
---

choose-your-own-csv is an open-source template for creating interactive, nonlinear narrative stories from a simple spreadsheet.
Each story is stored as a CSV file — no database or special software required.
Readers navigate between scenes by choosing links, and the app tracks their position using URL query strings.

## How It Works

Stories are structured as rows in a CSV spreadsheet.
Each row represents a single scene and can contain a title, narrative text, and a set of choices that link to other rows.
The web app fetches the CSV at runtime, parses it in the browser, and renders the current scene — no server-side processing needed.

## Technology

- **[Astro](https://astro.build/)** — static-site framework that builds fast, minimal HTML
- **[PapaParse](https://www.papaparse.com/)** — lightweight CSV parser that runs entirely in the browser

## License

choose-your-own-csv is released under the [MIT License](https://opensource.org/licenses/MIT).
Feel free to fork the repository, customize the styles, and publish your own stories.
