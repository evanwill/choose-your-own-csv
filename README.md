# choose-your-own-csv

[choose-your-own-csv](https://github.com/evanwill/choose-your-own-csv) is an open-source template for publishing interactive, nonlinear narrative stories from a simple spreadsheet.
It can load the spreadsheet from any CSV on the web (such as a published Google Sheet!), which enables live collaboration and prototyping with minimal set up.

You create story content and "choices" (links) in a spreadsheet following simple conventions.
Each row of your spreadsheet will become a "story page" that presents a title and body text, followed by a set of "choices".
The optional "choices" are hyperlinks to other story pages, creating interlinking narratives, like flipping the pages of a paper Choose Your Own Adventure book.

Think absolutely minimal and simple version of [Twine](https://twinery.org/).
Creating story spreadsheets is a fun way to publish interactive narratives--while also building digital literacy skills!

## Get Started

To create a story there is three basic steps:

1. create a spreadsheet following the "Story CSV" conventions: "docs/spreadsheet_setup.md"
2. publish your spreadsheet online: "docs/spreadsheet_publish.md"
3. share your story: "docs/story_share.md"

## Technical

choose-your-own-csv is a minimal static web app built using Astro.

When a user visits a story, javascript downloads the CSV from the link, parses it on the fly, and uses the data to present the "story pages".
The data is stored in the browser's local storage so that it can be re-used with out downloading again as you navigate the story pages.
The website uses query strings to track where the reader is in the story--you can always hit the back button or save the link to where you are!

The template can load story CSVs published anywhere on the web.
Once a story is loaded, it is saved in local storage, appearing in the user's "Stories" list on the home page (only in their personal browser).
Links with query strings enable sharing any story.

The central instance can be used to render and share any story. 
However, creating a copy of choose-your-own-csv allows you to host your own version.
Each instance of choose-your-own-csv can be configured to host multiple stories.
The basics are configured from a central file, including the site title, site description, and story-csv values.
The project provides templates for basic content pages that can provide context, introductions, and about-type content pages on the site to supplement the stories.

Stack:

- [Astro](https://astro.build/) as base framework
- [Papa Parse](https://www.papaparse.com/) library to directly parse CSV files
- [Paged.js](https://pagedjs.org/) library to generate PDF print from HTML

## License 

Copyright © 2026 EvanWill, licensed under the GNU General Public License v3.0
