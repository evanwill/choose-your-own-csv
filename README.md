# choose-your-own-csv

choose-your-own-csv is a minimal static web template that generates interactive nonlinear narrative stories from a spreadsheet.
It can load the spreadsheet from a CSV on the web (such as a published Google Sheet!), which enables live collaobration and prototyping with minimal set up.

You create story content and "choices" (links) in a spreadsheet following the conventions documented in "docs/spreadsheet_setup.md".
Each row of your spreadsheet will become a "story page" that presents a title and body text, followed by a set of "choices".
The optional "choices" are hyperlinks to other story pages, creating interlinking narratives, like flipping the pages of a paper Choose Your Own Adventure book.

When a user visits your story website, javascript downloads the CSV from the link you configured, parses it using the [Papa Parse](https://www.papaparse.com/) library, and uses the data to generate the "story pages".
Once the CSV is downloaded, the javascript stores it in the browser's session storage so that the data can be re-used with out downloading again as you navigate the story pages.
The website uses query strings to track where the reader is in the story.

Each instance of choose-your-own-csv can be configured to host multiple stories.
The basics are configured from a central file, including the site title, site description, and story-csv values.
The project provides templates for basic content pages that can provide context, introductions, and about type content pages on the site to supplement the "story" templates.
The template can also load story CSVs published anywhere on the web!

Stack:

- [Astro](https://astro.build/) as base framework
- [Papa Parse](https://www.papaparse.com/) library to directly parse CSV files
