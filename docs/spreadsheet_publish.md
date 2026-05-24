# Publishing Your Story CSV

You have three main options for publishing your story-csv online so it can be used by choose-your-own-csv:

- Google Sheets
- a CSV available on the web
- a CSV directly in your project

## Set up Google Sheets

Set up a Google Sheet with data following the template.
On the Sheet, ensure your story data is the first sheet tab (by default "Sheet1").

Then go to File > Share > Publish to the Web.
On the popup modal, use the dropdowns in "Link" tab to select "Entire Document" and "Comma-separated values (.csv)" options, then click "Publish" button.
Copy the link that is provided.

For example: 

`https://docs.google.com/spreadsheets/d/e/2PACX-1vSUe5ZvNEPQ4wRTYbewm4OMBWIX4u6CAadsTcw-HDDXBgqWnyVvXOlwPrNfex62uRGUZY23Z-WyYwdn/pub?output=csv`

## Set up Web CSV

If you have a CSV available anywhere on the web, you can use it by referencing the full URL. 

For example:

`https://evanwill.github.io/choose-your-own-csv/assets/story-example.csv`

Please ensure your CSV is correctly formatted and encoded (UTF-8).
We suggest creating your CSV using OpenRefine, Sheets, or LibreOffice Calc (Excel's CSV output is not correctly formatted!).

To use a CSV hosted in a GitHub repository, use the "raw" link.

`https://raw.githubusercontent.com/evanwill/choose-your-own-csv/refs/heads/main/public/assets/story-example.csv`

*Note:* depending on where your CSV is hosted, you may encounter [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).

## Use CSV in Project

Your CSV can also be hosted directly in your project--this is the best option for long term access and performance.

Copy your CSV file into the "public/assets/" folder then reference it in the config using a relative path. 

For example:

`/assets/story-example.csv`

*Note:* do not include "public" folder in the relative path.

Once you have your story-csv online, follow "story_share.md" for options to view your story on the web!
