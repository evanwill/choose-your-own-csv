---
layout: ../layouts/ContentLayout.astro
title: About
---

[choose-your-own-csv](https://github.com/evanwill/choose-your-own-csv) is an open-source template for publishing interactive, nonlinear narrative stories from a simple spreadsheet.

## How It Works

Each story is written as a spreadsheet following simple conventions, with rows representing the "pages" and the interlinking choices of the narrative--something like a Choose Your Own Adventure!

When a user visits the choose-your-own-csv website, it loads and parses a story CSV, generating the "story pages" to explore.
It can load the spreadsheet from a CSV on the web (such as a published Google Sheet!), which enables live collaobration and prototyping with minimal set up.

## Technology

- **[Astro](https://astro.build/)** — static-site framework that builds fast, minimal HTML
- **[PapaParse](https://www.papaparse.com/)** — lightweight CSV parser that runs entirely in the browser

## License

choose-your-own-csv is released under the [MIT License](https://opensource.org/licenses/MIT).
Feel free to fork the repository, customize the styles, and publish your own stories.
