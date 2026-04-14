# choose-your-own-csv Spreadsheet Format

Your choose-your-own-csv site loads and parses a CSV directly to create your interactive story pages.
Prep your spreadsheet following the CSV template to build up your content.
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

## Publishing Your Story CSV

You have three main options for publishing your CSV:

- Google Sheets
- a CSV available on the web
- a CSV directly in your project 

When a user visits your story website, javascript downloads the CSV from the link you configured, parses it using the [Papa Parse](https://www.papaparse.com/) library, and uses the data to generate the pages.
Once the CSV is downloaded, the javascript stores it in the browser's session storage so that the data can be re-used with out downloading again as you navigate the story pages.

If you want a fresh reload of the data (i.e. you made changes in Sheets and want to see the results), simply open the page in a new window!

### Set up Google Sheets

Set up a Google Sheet with data following the template.
Be especially careful with column names in the first row!
They need to have no spaces and no extra white space at the end of the value (and exactly match what you have used in configuring your collection site).

On the Sheet, ensure your story data is the first sheet tab (by default "Sheet1").
Then go to File > Share > Publish to the Web.
On the popup modal, use the dropdowns in "Link" tab to select "Entire Document" and "Comma-separated values (.csv)" options, then click "Publish" button.
Copy the link that is provided.

Paste link into your configuration as value for `story-csv`.

For example: 

`story-csv: https://docs.google.com/spreadsheets/d/e/2PACX-1vSn7AA-cbsXT3_nNUGftc1ab-CKXOJHMQCIENeR9NHElbyI9_qA99o0-HNZdG04v-M2_N21bUe_krQQ/pub?output=csv`

### Set up Web CSV

If you have a CSV available anywhere on the web, you can use it by referencing the full URL. 

For example:

`story-csv: https://www.lib.uidaho.edu/collectionbuilder/demo-metadata.csv`

Please ensure your CSV is correctly formatted and encoded (UTF-8), being especially careful with the column names.
We suggest creating your CSV using OpenRefine, Sheets, or LibreOffice Calc (and do not suggest using Excel, since Excel's CSV output is not correctly formatted).

To use a CSV hosted in a GitHub repository, use the "raw" link.

`story-csv: https://raw.githubusercontent.com/CollectionBuilder/collectionbuilder-sample-data/main/psychiana_cbdemo_gh.csv`

*Note:* depending on where your CSV is hosted, you may encounter [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).

### Use CSV in Project

Your CSV can also be hosted directly in your project.
Copy your CSV file into the "assets" folder then reference it in the config using a relative path. 

For example:

`story-csv: /assets/demo-metadata.csv`

## Share via URL

To share your work with others, the default template can also load web CSV specified as a parameter in the URL.
Add your full CSV link to the end of the choose-your-own-csv instance's URL as the "csv" option, like:

`https://evanwill.github.io/choose-your-own-csv/?csv=<your story url here>`

For example:

`https://evanwill.github.io/choose-your-own-csv/?csv=https://raw.githubusercontent.com/CollectionBuilder/collectionbuilder-sample-data/main/psychiana_cbdemo_gh.csv`

or 

`https://evanwill.github.io/choose-your-own-csv/?csv=https://docs.google.com/spreadsheets/d/e/2PACX-1vSn7AA-cbsXT3_nNUGftc1ab-CKXOJHMQCIENeR9NHElbyI9_qA99o0-HNZdG04v-M2_N21bUe_krQQ/pub?output=csv`

**Note:** the metadata URL can not have any `&` (i.e. additional query string parameters). 
Having a `&` in the URL will cause the parsing to fail.

## Development Mode

Configuration has the option `development-mode: true` which turns on features that allow the metadata on the site to be temporarily reconfigured by users. 
This is handy when collaborating and prototyping--you don't even need metadata configured! 

When you want to finalize your site, you can set `development-mode: false` to turn these features off. 
For long term access and better performance, it is best to add your final metadata CSV directly to the repository, as described in "Use CSV in Project" above.
