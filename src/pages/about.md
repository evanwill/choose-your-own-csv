---
layout: ../layouts/ContentLayout.astro
title: About
---

[choose-your-own-csv](https://github.com/evanwill/choose-your-own-csv) is an open-source template for publishing interactive, nonlinear narrative stories from a simple spreadsheet.

![a young adventurer with a backpack looks at a spreadsheet and the road ahead](https://evanwill.github.io/illustration-adventure/objects/small/adventure-csv_sm.jpg)

## How It Works

Each story is written as a spreadsheet following simple conventions, with rows representing the "pages" and the interlinking choices of the narrative--something like a Choose Your Own Adventure!

When a user visits the choose-your-own-csv website, it loads and parses a story CSV, generating the "story pages" to explore.
It can load the spreadsheet from any CSV on the web (such as a published Google Sheet!), which enables live collaboration and prototyping with minimal set up.

See [Get Started](/choose-your-own-csv/get-started/) for information about creating your own story!

## Technology

- [Astro](https://astro.build/) — static-site framework that builds fast, minimal HTML
- [PapaParse](https://www.papaparse.com/) — lightweight CSV parser that runs entirely in the browser

## License

choose-your-own-csv is released under the [MIT License](https://opensource.org/licenses/MIT).
Feel free to fork the repository, customize the styles, and publish your own stories.
