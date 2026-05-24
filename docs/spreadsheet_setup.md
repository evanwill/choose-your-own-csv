# choose-your-own-csv Spreadsheet Format

choose-your-own-csv loads and parses a CSV directly to create interactive story pages.
To create your story, carefully prep your spreadsheet following the template to build up your content.
Spreadsheets following the conventions described below are called "story-csv" through out these docs.

You can start with this [Google Sheet template](https://docs.google.com/spreadsheets/d/1cqItA21wg_y_BOwAYAqSpw5qxoR_D0-Nx1vB4rEuB7Q/copy).

*Be especially careful with column names in the first row!*
They need to exactly follow the template: lowercase, with no spaces, and no extra white space at the end of the value.

## Spreadsheet Conventions

To create your story you will need to follow a **very specific convention** in the spreadsheet.

Your spreadsheet must have the columns: `id,title,text,choice_1`
Additional "choices" can be added by adding more columns named choice_<n>, like `choice_2,choice_3,choice_4` etc.

The typical starter template has the columns: `id,title,text,choice_1,choice_2,choice_3`.

Each row in the spreadsheet will be one story entry. 
The entries each become a "story page" featuring a title and body text.
If the row has choice columns, those will become "choices" hyperlinked to other story pages. 

The column values follow these conventions:

- **id:** a unique identifier for the story entry. This allows you to reference the "page" and to be generated on the site. The id value must be unique. It must be lowercase URL-safe numbers and letters only (can include dash `-` or underscore `_`, but not other special characters). You can use just basic numbering (1, 2, 3, etc) or any naming convention to keep organized in your writing (p1-1, p1-2, p2-1, a1-1, or castle1, castle2, dungeon1, dungeon2, etc).
- **title:** descriptive text that will appear larger at the top of the entry's page.
- **text:** descriptive text that will be the body of the entry's page. Can be formatted using Markdown.
- **choice_1:** an optional "choice" that will appear at the bottom of the entry and will be hyperlinked to a corresponding entry. Each choice value follows the convention `descriptive text|id`, i.e. the text you want to appear in the link, followed by a `|` pipe, followed by an id value that exactly matches an id of one of the other story entries in your spreadsheet. Additional choices can be added by adding additional "choice_" columns, such as "choice_2", "choice_3" etc. Each choice follows the same convention. The template will parse as many as you add, however, most projects stick to 3. If left blank, the entry will be an dead end with no further links.

### Title Row

The *first row* in the spreadsheet should have the "id" value `info`, and will contain the story's title, description, and first page.
Use the standard columns following these conventions:

- id: `info`
- title: the story's over all title, used for it's catalog listing and "front cover" display.
- text: the story's over all description, used used for it's catalog listing and "front cover" display.
- choice_1: text and link to the first entry in your story. e.g. `Read|1`.

## Examples

The blank basic template is "story-template.csv".
An extremely simple example is "story-example.csv".

See "spreadsheet_publish.md" for options to publish your CSV on the web so it can be loaded.
See "story_share.md" for options to share your story online.
