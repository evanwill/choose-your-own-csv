// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Set your site's public URL — used for generating canonical URLs and sitemaps.
  // For GitHub Pages, this would be: https://<username>.github.io
  // For a custom domain, use: https://yourdomain.com
  site: 'https://evanwill.github.io',

  // If your site lives in a subdirectory (e.g. GitHub Pages project sites),
  // set base to that path with a trailing slash.  For example, a repo named
  // "my-story" at https://username.github.io/my-story/ would use: base: '/my-story/'
  // Leave as '/' (or remove the line) for a root / custom domain deployment.
  base: '/choose-your-own-csv/',
});
