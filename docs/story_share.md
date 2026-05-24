# Publish and Share Your Story

Once you have the correct link to a story-csv, you can view your story on choose-your-own-csv online.
There is several options:

- Load on Development Mode
- Share via URL
- Configure a choose-your-own-csv instance

## Load on Development Mode

By default, instances of [choose-your-own-csv](https://evanwill.github.io/choose-your-own-csv/) have development mode enabled, which means the home page provides a form to load any story-csv.
Simply paste your story-csv URL into the form to load up your story!

This is great for collaborating and prototyping.
You do not need your own copy of the choose-your-own-csv site or any configuration.

*Note:* development mode can be turned off in your "config.js" by setting `developmentMode = false`.

## Share via URL

To share your work with others, the choose-your-own-csv can also load any CSV specified as a parameter in the URL.
Add your full CSV link to the end of the choose-your-own-csv instance's `/story/` URL as the "csv" option, like:

`https://evanwill.github.io/choose-your-own-csv/story/?csv=<your story url here>`

For example:

`https://evanwill.github.io/choose-your-own-csv/story/?csv=https://raw.githubusercontent.com/evanwill/choose-your-own-csv/refs/heads/main/public/assets/story-example.csv`

or 

`https://evanwill.github.io/choose-your-own-csv/story/?csv=https://docs.google.com/spreadsheets/d/e/2PACX-1vSUe5ZvNEPQ4wRTYbewm4OMBWIX4u6CAadsTcw-HDDXBgqWnyVvXOlwPrNfex62uRGUZY23Z-WyYwdn/pub?output=csv`

**Note:** the metadata URL can not have any `&` (i.e. additional query string parameters). 
Having a `&` in the URL will cause the parsing to fail.

## Configure in Project

To add a story-csv to your instance of choose-your-own-csv add the information to "config.js" in your project.

Edit the file "src/config.js".
Look for the `stories` variable. 
Add an new entry to the array, following the template object:

```
  {
    id: "my-story",
    title: "My Story",
    description: "A gripping adventure.",
    csv: "/assets/my-story.csv",
  },
```

- **id:** a short URL-safe identifier (letters, numbers, hyphens only, no spaces).
- **title:** display name on the story list.
- **description:** short blurb shown beneath the title.
- **csv:** URL of the story-csv file, a relative path in "public" in this project, or a full URL.

## Loading and Refreshing

When a user visits your story website, javascript downloads the CSV from the link you configured, parses it using the [Papa Parse](https://www.papaparse.com/) library, and uses the data to generate the pages.
Once the CSV is downloaded, the javascript stores it in the browser's session storage so that the data can be re-used with out downloading again as you navigate the story pages.

If you want a fresh reload of the data (i.e. you made changes in Sheets and want to see the results), simply open the page in a new window!
