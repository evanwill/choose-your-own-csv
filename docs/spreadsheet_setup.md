# choose-your-own-csv Spreadsheet Format

Your choose-your-own-csv site loads and parses a CSV directly to create your interactive story pages.
To create your story, prep your spreadsheet following the CSV template to build up your content.
Then configure your web project to point at the location where you CSV is published.

## Spreadsheet Conventions

To create your story you will need to follow a very specific convention in the spreadsheet.

Your spreadsheet must have the columns: `id,title,text,choice_1`
Additional "choices" can be added by adding more columns named choice_<n>, like `choice_2,choice_3,choice_4` etc.
The typical starter template has the columns: `id,title,text,choice_1,choice_2,choice_3`.
Each row in the spreadsheet will be one story entry. 
The entries each become a "story page" featuring a title and body text.
If the row has choice columns, those will become "choices" hyperlinked to other story pages. 

The column values follow these conventions:

- **id:** a unique identifier for the story entry. This allows you to reference the "page" and to be generated on the site.
- **title:** descriptive text that will appear larger at the top of the entry's page.
- **text:** descriptive text that will be the body of the entry's page. Can be formatted using Markdown.
- **choice_1:** an optional "choice" that will appear at the bottom of the entry and will be hyperlinked to a corresponding entry. Each choice value follows the convention `descriptive text|id`, i.e. the text you want to appear in the link, followed by a `|` pipe, followed by an id value that exactly matches an id of one of the other story entries in your spreadsheet. Additional choices can be added by adding additional "choice_" columns, such as "choice_2", "choice_3" etc. Each choice follows the same convention. The template will parse as many as you add, however, most projects stick to 3. If left blank, the entry will be an dead end with no further links.

## Examples

The blank basic template is "story-template.csv".
An extremely simple example is "story-example.csv".
