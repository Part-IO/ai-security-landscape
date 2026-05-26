import { defineConfig } from "astro/config";

// Site URL and base path are taken from the deploy workflow's GitHub Pages
// context (SITE_URL / BASE_PATH env vars). Locally, both are unset and the
// dev server lives at "/".
const SITE = process.env.SITE_URL || undefined;
const BASE = process.env.BASE_PATH || undefined;

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
