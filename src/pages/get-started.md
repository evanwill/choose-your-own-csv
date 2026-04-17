---
layout: ../layouts/ContentLayout.astro
title: Get Started
---

To create your own story with choose-your-own-csv start with a copy of the [Story template on Google Sheets](https://docs.google.com/spreadsheets/d/1cqItA21wg_y_BOwAYAqSpw5qxoR_D0-Nx1vB4rEuB7Q/copy).
Alternatively, you use any spreadsheet program starting from the [story-template.csv](https://github.com/evanwill/choose-your-own-csv/blob/main/docs/story-template.csv).

Follow the conventions outlined below to develop your narrative in the spreadsheet.

When complete, publish your CSV to the web or add it to your own instance of choose-your-own-csv template.

## Story Spreadsheet Conventions

To create your story you will need to follow a very specific convention in the spreadsheet.

Your spreadsheet must have the columns: `id,title,text,choice_1`
Additional "choices" can be added by adding more columns named "choice_" + number, like `choice_2,choice_3,choice_4` etc.
The typical starter template has the columns: `id,title,text,choice_1,choice_2,choice_3`.

Each row in the spreadsheet will be one story entry. 
The entries each become a "story page" featuring a title and body text.
If the row has choice columns, those will become "choices" hyperlinked to other story pages. 

The column values follow these conventions:

- **id:** a unique identifier for the story entry. 
    - This allows you to reference the "page" and to be generated on the site. 
    - The id value must be unique. 
    - It should be lowercase url-safe numbers and letters only (can include dash `-` or underscore `_`, but not other special characters). 
    - You can use just basic numbering (1, 2, 3, etc) or any naming convention to keep organized in your writing (p1-1, p1-2, p2-1, a1-1, or castle1, castle2, dungeon1, dungeon2, etc).
- **title:** descriptive text that will appear larger at the top of the entry's page.
- **text:** descriptive text that will be the body of the entry's page. Can be formatted using Markdown.
- **choice_1:** an optional "choice" that will appear at the bottom of the entry and will be hyperlinked to a corresponding entry. 
    - Each choice value follows the convention `descriptive text|id`, i.e. the text you want to appear in the link, followed by a `|` pipe, followed by an id value that exactly matches an id of one of the other story entries in your spreadsheet. 
    - Additional choices can be added by adding additional "choice_" columns, such as "choice_2", "choice_3" etc. Each choice follows the same convention. The template will parse as many as you add, however, most projects stick to 3. 
    - If left blank, the entry will be an dead end with no further links.

## Publish Your Story CSV

You have three main options for publishing your CSV:

- Google Sheets
- a CSV available on the web
- a CSV directly in your project 

For prototyping, the easiest is Google Sheets. 

On the Sheet, ensure your story data is the first sheet tab (by default "Sheet1").
Then go to File > Share > Publish to the Web.

On the popup modal, use the dropdowns in "Link" tab to select "Entire Document" and "Comma-separated values (.csv)" options, then click the "Publish" button.

Copy the link that is provided.

## Test and Share via URL

To test your work, the default template can load any story CSV--look for the form on the home page!

To share with others, you can add your CSV link as a parameter in the URL.
Add your full CSV link to the end of the choose-your-own-csv instance's URL as the "csv" option, like:

`https://evanwill.github.io/choose-your-own-csv/story/?csv=<your story url here>`

For example:

`https://evanwill.github.io/choose-your-own-csv/?csv=https://docs.google.com/spreadsheets/d/e/2PACX-1vSUe5ZvNEPQ4wRTYbewm4OMBWIX4u6CAadsTcw-HDDXBgqWnyVvXOlwPrNfex62uRGUZY23Z-WyYwdn/pub?output=csv`

or 

`https://evanwill.github.io/choose-your-own-csv/story/?csv=https://raw.githubusercontent.com/evanwill/choose-your-own-csv/refs/heads/main/public/assets/story-example.csv`
