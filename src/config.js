// ============================================================
// choose-your-own-csv site configuration
// ============================================================
// Edit the values below to customize your site.
// After editing, rebuild the site with `npm run build`
// or restart the dev server with `npm run dev`.
// ============================================================

// Site-wide title displayed in the browser tab and header.
export const siteTitle = "Choose Your Own CSV";

// A short description of the site used in the <meta> description tag.
export const siteDescription =
  "Interactive nonlinear narrative stories generated from a spreadsheet.";

// The footer text for the site.
export const siteFooter = "Built with choose-your-own-csv.";

// ----------------------------------------------------------
// Development mode
// ----------------------------------------------------------
// When true, a form will appear on the home page letting visitors
// enter any CSV URL to load as a story — great for prototyping
// and sharing works-in-progress.
// Set to false when you are ready to publish your final site.
export const developmentMode = true;

// ----------------------------------------------------------
// Stories
// ----------------------------------------------------------
// Add one object per story.  Each object requires:
//   id          – a short URL-safe identifier (letters, numbers, hyphens only)
//   title       – display name shown in the story list
//   description – a short blurb shown beneath the title on the home page
//   csv         – URL of the CSV file.  May be:
//                   • an absolute URL  (Google Sheets publish link, raw GitHub URL, …)
//                   • a site-root-relative path to a file in public/assets/
//                     e.g. "/assets/my-story.csv"
export const stories = [
  {
    id: "demo",
    title: "Demo Story",
    description:
      "A short branching-narrative demo that shows how the spreadsheet format works.",
    csv: "/assets/story-example.csv",
  },
  // Add more stories here, for example:
  // {
  //   id: "my-story",
  //   title: "My Story",
  //   description: "A brand-new adventure.",
  //   csv: "https://docs.google.com/spreadsheets/d/e/YOUR_KEY/pub?output=csv",
  // },
];
